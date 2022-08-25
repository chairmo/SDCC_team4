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

  async donate(amount) {
    /**YET TO FIX PAYMENT TO THE CONTRACT USING THE DONATION API */
    const amtq = reach.parseCurrency(amount); // UInt
    this.setState({ view: "ThankYou", amtq });
  }
  async createCampaign(goal, deadline) {
    this.setState({ view: "Campaign", goal, deadline });
  }
  async donation() {
    this.setState({ view: "Donation" });
  }

  async selectDonate() {
    this.setState({ view: "SetAmount" });
  }

  render() {
    return renderView(this, AppViews);
  }
}


renderDOM(<App />);
