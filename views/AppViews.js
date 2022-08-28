import React from "react";
// import { Form, Button, Select } from "semantic-ui-react";

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className="App">
        <header className="App-header" id="root">
          <h2>CrowdFunding Campaign </h2>
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
    // const deadline = (this.state || {}).deadline || defaultDeadline;
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
        <button onClick={() => parent.createCampaign(goal)}>
          Create Campaign
        </button>
        <button onClick={() => parent.donation()}>Donation</button>
      </div>
    );
  }
};

exports.Campaign = class extends React.Component {

  render() {
    const { ctcInfoStr, goal, deadline } = this.props;
    return (
      <div>
        <h4>Campaign Target Goal: {goal}</h4>
        <h4>Campaign Deadline: {deadline}</h4>
        <h4>Donation wallet: {ctcInfoStr}</h4>
        <h5>
          <br /> Congratulations you have successfully created a funding
          campaign.
        </h5>
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
        <h3>Fund your account</h3>
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
        <button onClick={() => parent.selectDonate()}>donate</button>
      </div>
    );
  }
}
exports.SetAmount = class extends React.Component {
  render() {
    const { parent, defaultAmount, standardUnit, receiverAddress } = this.props;
    // const amount = (this.state || {}).amount || defaultAmount;
    return (
      <div>
        <h5>Enter amount to donate</h5>
        <input
          type="number"
          placeholder={defaultAmount}
          onChange={(e) => this.setState({ amount: e.currentTarget.value })}
        />{" "}
        {standardUnit}
        
        <h5>Contract Address</h5>
        <input
          type="string"
          placeholder={receiverAddress}
          onChange={(e) => this.setState({ receiver: e.currentTarget.value })}
        />
        <br />
        <hr/>
        <button onClick={() => parent.donate()}>Amount to Donate</button>
      </div>
    );
  }
};

exports.ThankYou = class extends React.Component {
  render() {
    const {amtq, standardUnit} = this.props;
    return (
      <div>
        You have successfully donated {amtq} {standardUnit}. Thank You
      </div>
    );
  }
};

export default exports;
