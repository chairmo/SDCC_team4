'reach 0.1';


/**the contract deployer serves as the only participant */
export const main = Reach.App(() => {
    const Donee = Participant('Donee', {
        //interface
        doneeAddr: Address,
        deadline: UInt,
        goal: UInt,
        ready: Fun([], Null) //to show deployed contract ready to receive funds
    });


    /**API for donating funds and getting back the money if goal isn't reached */
    const Donor = API('Donor', {
        //interface
        donateFunds: Fun([UInt], Bool),
        getRefund: Fun([], Bool)
    });

    const DonatedFunds = API('DonatedFunds', {
        //interface to see if the deadline has reached and or goal has been met
        timeout: Fun([], Bool),
        goalOutcome: Fun([], Bool),
    });

    init();
    
})