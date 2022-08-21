'reach 0.1';


/**the contract deployer serves as the only participant */
export const main = Reach.App(() => {
    const Receiver = Participant("Receiver", {
        //interface
        receiverAddr: Address,
        deadline: UInt,
        goal: UInt,
        ready: Fun([], Null), //to show deployed contract ready to receive funds
    });

    /**API for donating funds and getting back the money if goal isn't reached */
    const Donor = API("Donor", {
        //interface
        donateFunds: Fun([UInt], Bool),
        // getRefund: Fun([], Bool),  //to be implemented
    });

    const ObserveGoal = API("ObserveGoal", {
        //interface to see if the deadline has reached and or goal has been met
        timesUp: Fun([], Bool),
        goalOutcome: Fun([], Bool),
    });

    init();

    //declassify the details and publish it for everyone
    Receiver.only(() => {
        const receiverAddress = declassify(interact.receiverAddr);
        const deadline = declassify(interact.deadline);
        const goal = declassify(interact.goal);
    });
    Receiver.publish(receiverAddress, deadline, goal);
    commit();

    Receiver.publish();

    //indicate that contract is deployed and ready
    Receiver.interact.ready();

    //keep track of all addr and amount in a map object
    const donors = new Map(Address, UInt);
    //verying the donating address in the set objext
    const set = new Set();

    //donors can keep donating till dateline (while loop)
    const [keepGoing, AccBalance, numDonors] = parallelReduce([true, 0, 0])
        .define(() => {
            const donate = (who, donation) => {
                //check that donors haven't donated and prevent donation of 0 token
                //using dynamic assertion since we are in a loop
                check(isNone(donors[who]), "not yet in the map");
                check(!set.member(who), "not in the set yet");
                check(donation != 0, "zero donations not allowed");

                //add donation to the map and set object
                return () => {
                    donors[who] = donation;
                    set.insert(who);
                    return [keepGoing, AccBalance + donation, numDonors+1];
                };
            };
        })
        /**ensure that the contract balance is greater or equal to account balance
         * and also verifying that the set size is equal to the number of donors*/
        .invariant( set.Map.size() == numDonors)
        .while(keepGoing)
        //call the donation api
        .api(
            Donor.donateFunds,
            //verify that the donor satisfies the conditions in the donate object
            (payment) => {
                const pays = donate(this, payment);
            },
            //request payment
            (payment) => payment,

            (payment, success) => {
                success(true);
                //updates the map and set
                return donate(this, payment)();
            }
        )
        //deadline conditions
        .timeout(relativeTime(deadline), () => {
            const [[], success] = call(ObserveGoal.timesUp);
            success(true);
            
            //keepGoing becomes false since time has elapsed
            return [false, AccBalance, numDonors];
        });
    //ensure that the contract balance is greater or equal to account balance
    // assert(balance() >= AccBalance);

    //goal reached if account balance equals to the goal)
    const outcome = AccBalance >= goal;
    commit();

    //show the outcome of donations
    const [[], view] = call(ObserveGoal.goalOutcome);
    view(outcome);

    //transfer tokens from the contract to the donee if the goal is reached
    if (AccBalance != 0) {
        transfer(balance()).to(Receiver);
        commit();
        exit();
    }
    transfer(balance()).to(Receiver);
    commit();
    exit();
});