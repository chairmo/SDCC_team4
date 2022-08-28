import React from "react";
import AppViews from "./views/AppViews.js";
import { renderDOM, renderView } from "./views/render.js";
import "./index.css";
import * as backend from "./build/index.main.mjs";
import { loadStdlib } from "@reach-sh/stdlib";
const reach = loadStdlib(process.env);

const { standardUnit } = reach;
const defaults = {
  defaultGoal: "20 ETH",
  defaultDeadline: "14 days",
  defaultFundAmt: "10",
  defaultAmount: "3",
  receiverAddress: "Paste Address Here",
  standardUnit,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: "ConnectAccount", ...defaults };
  }

  async componentDidMount() {
    const acc = await reach.getDefaultAccount();
    const addr = acc.getAddress();
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    this.setState({ acc, addr, bal });
    if (await reach.canFundFromFaucet()) {
      this.setState({ view: "CreateCampaign" });
    }
  }

  async donate() {
    /**YET TO FIX PAYMENT TO THE CONTRACT USING THE DONATION API */
    const amtq = await reach.transfer(this.state.acc,
      this.state.receiver, reach.parseCurrency(amount));
    this.setState({ view: "ThankYou", amtq });
  }
  // setGoal(goal) {
  //   this.setState({ view: "CreateCampaign", goal });
  // }

  async createCampaign(goal) {
    /**CONTRACT  */
    const ctc = this.state.acc.contract(backend);
    this.goal = reach.parseCurrency(goal);
    this.deadline = { ETH: 10, ALGO: 100, CFX: 1000 }[reach.connector];
    this.receiverAddr = this.state.acc;
    backend.Receiver(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({ view: "Campaign", ctcInfoStr});
  }
  async donation() {
    this.setState({ view: "Donation" });
  }

  async fundAccount(fundAmount) {
    await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
    this.setState({ view: "SetAmount" });
  }
  async selectDonate() {
    this.setState({ view: "SetAmount" });
  }

  render() {
    return renderView(this, AppViews);
  }
}


renderDOM(<App />);
