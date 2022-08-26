import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
// import * as Reach from "@reach-sh/stdlib/ALGO";
// import { loadStdlib } from "@reach-sh/stdlib";
import { Context } from "../../Context";
import Algorand from "../../assets/algorand.png";

const ConnectWallet = () => {
    // const [account, setAccount, , setBalance, ctcInfo, setctcInfo] = useContext(Context);
    
    const connectWallet = async () => {
        console.log("getDefaultAccount to connect to wallet, else show deploy or attach contract.");
        
        // const acc = await Reach.getDefaultAccount();
        // const balAtomic = await Reach.balanceOf(acc);
        // const balance = Reach.formatCurrency(balAtomic, 4);
        // setAccount(Object.assign({}, acc));
        // setBalance(balance);
        // setRegularPaymentCount(1);
    }
    const buttonStyle = {
        bottom: "2em",
        right: "2em",
    }


    return (
        <Button variant="primary"
            style={buttonStyle}
            onClick={connectWallet}
            size="lg">
            <img src={Algorand} alt="Algorand Logo" width="30" />
            {" "}<p className="d-inline-block mb-1 ml-1">Connect Wallet</p>
        </Button>
    );
}

export default ConnectWallet;