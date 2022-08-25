import React from "react";
// import { Form, Button, Select } from "semantic-ui-react";

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className="App">
        <header className="App-header" id="root">
          <h1>CrowdFunding Campaign </h1>
          {content}
        </header>
      </div>
    );
  }
};

exports.ConnectAccount = class extends React.Component {
  render() {
    return (
      <div>
        Please wait while we connect to your account. If this takes more than a
        few seconds, there may be something wrong.
      </div>
    );
  }
};

exports.CreateCampaign = class extends React.Component {

  render() {
    const {
      addr,
      defaultGoal,
      defaultDeadline,
      parent,
    } = this.props;
    /**ERROR UPDATING THE PARENT STATE WITH GOAL AND DEADLINE */
    const goal = (this.state || {}).goal || defaultGoal;
    const deadline = (this.state || {}).deadline || defaultDeadline;
    return (
      <div>
        <h5>Connected: {addr}</h5>
        <br/>
        <h5>Enter a Goal Target</h5>
        <input
          type="number"
          placeholder={defaultGoal}
          onChange={(e) =>
            this.setState({ goal: e.currentTarget.value })
          }
        />
        <br />
        <h5>Select Funding Deadline</h5>
        <input
          type="number"
          placeholder={defaultDeadline}
          onChange={(e) =>
            this.setState({ deadline: e.currentTarget.value })
          }
        />
        <hr />
        <button onClick={() => parent.createCampaign(goal, deadline)}>
          Create Campaign
        </button>
        <button onClick={() => parent.donation()}>Donation</button>
      </div>
    );
  }
};

exports.Campaign = class extends React.Component {
  async copyToClipboard(button) {
    const { ctcInfoStr } = this.props;
    navigator.clipboard.writeText(ctcInfoStr);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = "Copied!";
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }

  render() {
    const { ctcInfoStr, goal, deadline } = this.props;
    return (
      <div>
        <h4>Campaign Target Goal: {goal}</h4>
        <h4>Campaign Deadline: {deadline}</h4>
        <br /> Please give them this contract info:
        <pre className="ContractInfo">{ctcInfoStr}</pre>
        <button onClick={(e) => this.copyToClipboard(e.currentTarget)}>
          Copy to clipboard
        </button>
      </div>
    );
  }
};

exports.Donation = class extends React.Component {
  render() {
    const {addr, bal, standardUnit, defaultFundAmt, parent } = this.props;
    const amt = (this.state || {}).amt || defaultFundAmt;
    return (
      <div>
        <h3>Fund account</h3>
        <br />
        <h5>Address: {addr}</h5>
        Balance: {bal} {standardUnit}
        <hr />
        Would you like to fund your account with additional {standardUnit}?
        <br />
        (This only works on certain devnets)
        <br />
        <input
          type="number"
          placeholder={defaultFundAmt}
          onChange={(e) => this.setState({ amt: e.currentTarget.value })}
        />
        <button onClick={() => parent.fundAccount(amt)}>Fund Account</button>
        <button onClick={() => parent.skipFundAccount()}>donate</button>
      </div>
    );
  }
}
export default exports;
