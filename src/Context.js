import React, { useState, createContext } from "react";

export const Context = createContext(null);

export const ContextProvider = props => {
    const [account, setAccount] = useState("");
    const [balance, setBalance] = useState(0);
    const [ctcInfo, setctcInfo] = useState("");
    // const [ctc, setCtc] = useState([]);
    // const [ctcArgs, setCtcArgs] = useState([]);
    // const [donatioBalance, setDonationBalance] = useState(0);
    // const [getDonation, setGetDonation] = useState(0);
    // const [regularDonationCount, setRegularDonationCount] = useState(0);

    return (
        <Context.Provider value={[
            account, setAccount,
            balance, setBalance,
            ctcInfo, setctcInfo,
            // ctc, setCtc,
            // ctcArgs, setCtcArgs,
            // controlBalance, setControlBalance,
            // getDonation, setGetDonation,
            // regularDonationCount, setRegularDonationCount,
        ]}>
            {props.children}
        </Context.Provider>
    );
}