import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";

const stdlib = loadStdlib(process.env);

const start = async (goal) => {
  const startingBalance = stdlib.parseCurrency(100);

  //set deadline and goal target
  const deadline = 30;
  const targetGoal = stdlib.parseCurrency(goal);

  //create 3 donors and one donee with starting balance of 100
  const fmt = (x) => stdlib.formatCurrency(x, 4);
  const receiver = await stdlib.newTestAccount(startingBalance);
  const donors = await stdlib.newTestAccounts(3, startingBalance);

  //display starting balance of all the donors
  for (const who of [...donors]) {
    console.log(
      `The starting balance of donor: ${stdlib.formatAddress(who)}`,
      " is ",
      fmt(await stdlib.balanceOf(who))
    );
  }

  const getBalance = async (who) =>
    fmt(stdlib.parseCurrency(await stdlib.balanceOf(who), 0));

  //display initial balance of receiver
  console.log(`The address of receiver is: ${stdlib.formatAddress(receiver)}`);
  console.log(`The starting balance of receiver is: ${await getBalance(receiver)}`);

  //display the target goal
  console.log(`the donations target goal is: ${fmt(targetGoal)}`);

  //connect reciever contract to the backend api
  const ctcRec = receiver.contract(backend);

 try {
   await ctcRec.p.Receiver({
     receiverAddr: receiver.networkAccount,
     deadline: deadline,
     goal: goal,
     // Defines the receivers ready() function.
     ready: () => {
       ctcRec.getInfo().then(info => {
        console.log(`The contract address is: ${info}`); 
       })
       
       // Arbitrary error.
       throw 42;
     },
   });
 } catch (e) {
   if (e !== 42) {
     throw e;
   }
 }

  //connect donors addresses to the contract
  const ctcDonors = (donor) =>
    donors[donor].contract(backend, ctcRec.getInfo());

  //donor calls to the contract backend and Donor api
  const donate = async (donor, amount) => {
    const user = [donor];
    const ctcCall = ctcDonors(donor);

    await ctcCall.apis.Donor.donateFunds(fmt(stdlib.parseCurrency(amount)));
    //display a donation address and amount donated
    console.log((donor), 
        ` donated ${await fmt(stdlib.parseCurrency(amount))}`);
  };

  const timesUp = async () => {
    await ctcRec.apis.ObserveGoal.timesUp();
    console.log("deadline has passed");
  };

  const seeOutcome = async () => {
    const outcome = await ctcRec.apis.ObserveGoal.goalOutcome();
    console.log(
      `The donations ${ outcome ? `did` : `did not`} meet it's goal`
    );
    return outcome;
  };

  //test the call to donation api starting from first donor at index 0
  await donate(0, 9);
  await donate(1, 7);

  //wait for funds to reach deadline
  console.log("waiting till deadline.");
  await stdlib.wait(deadline);

  await timesUp();
  await seeOutcome();

  //display the ending balance of receiver and donors
};

await start(15);
// await start(18);
