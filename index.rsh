'reach 0.1';


/**the contract deployer serves as the only participant */
export const main = Reach.App(() => {
    const Donee = Participant("Donee", {
        //interface
        doneeAddr: Address,
        deadline: UInt,
        goal: UInt,
        ready: Fun([], Null), //to show deployed contract ready to receive funds
    });

    /**API for donating funds and getting back the money if goal isn't reached */
    const Donor = API("Donor", {
        //interface
        donateFunds: Fun([UInt], Bool),
        getRefund: Fun([], Bool),
    });

    const ObserveGoal = API("ObserveGoal", {
        //interface to see if the deadline has reached and or goal has been met
        timesUp: Fun([], Bool),
        goalOutcome: Fun([], Bool),
    });

    init();

    //declassify the details and publish it for everyone
    Donee.only(() => {
        const address = declassify(interact.Address);
        const deadline = declassify(interact.deadline);
        const goal = declassify(interact.goal);
    });
    Donee.publish(address, deadline, goal);
    commit();

    Donee.publish();

    //indicate that contract is deployed and ready
    Donee.interact.ready();

    //keep track of all addr and amount in a map object
    const donors = new Map(Address, UInt);
    //verying the donating address in the set objext
    const set = new set();

    //donors can keep donating till dateline (while loop)
    const [keepGoing, AccBalance, numDonors] = parallelReduce([true, 0, 0])
        .define(() => {
            const donate = (who, donation) => {
                //check that donors haven't donated and prevent donation of 0 token
                assert(isNone(donors[this]), "not yet in the map");
                assert(!set.member(who), "not in the set yet");
                assert(donation != 0, "zero donations not allowed");

                //add donation to the map and set object
                return () => {
                    donors[who] = donation;
                    set.insert(who);
                    return [keepGoing, AccBalance + donation, numDonors++];
                };
            };
        })
        /**ensure that the contract balance is greater or equal to account balance
         * and also verifying that the set size is equal to the number of donors*/
        .invariant(balance() >= AccBalance && set.Map.size() == numDonors)
        .while(keepGoing)
        //call the doantion api
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
        .timeout(relativeTimeout(deadline), () => {
            const [[], success] = call(ObserveGoal.timesUp);
            success(true);
            //keepGoing becomes false since time has elapsed
            return [false, AccBalance, numDonors];
        });
    //ensure that the contract balance is greater or equal to account balance
    assert(balance() >= AccBalance);

    //goal reached if account balance equals to the goal)
    const outcome = AccBalance >= goal;

});