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
  const donee = await stdlib.newTestAccount(startingBalance);
  const donors = await stdlib.newTestAccounts(3, startingBalance);

  //display starting balance of donee and donors
  for (const who of [donee, ...donors]) {
    console.log(
      stdlib.formatAddress(who),
      " has ",
      fmt(await stdlib.balanceOf(who))
    );
  }

  const getBalance = async (who) =>
    fmt(stdlib.parseCurrency(await stdlib.balanceOf(who), 0));

  //display initial balance
  console.log(`the initial balance of donee is ${await getBalance(donee)}`);

  //display the target goal
  console.log(`the donations target goal is: ${fmt(targetGoal)}`);

  //donee contract
  ctcDonee = donee.contract(backend);

  try {
    await ctcDonee.p.Donee({
      doneeAddr: donee.networkAccount,
      deadline: deadline,
      goal: goal,
      ready: () => {
        console.log("contract is deployed by the donee.");
      },
    });
  } catch (error) {
    throw error;
  }

  //donors address to connect to the contract
  const ctcDonors = (donor) =>
    donors[donor].contract(backend, ctcDonee.getInfo());

  //donor calls to the contract
  const donate = async (donor, amount) => {
    const user = [donor];
    const ctcCall = ctcDonors(donor);

    //call to the backend Donor Api
    await ctcCall.apis.Donor.donateFunds(amount);
    //display a donation address and amount donated
    console.log(`a new donor with address ${stdlib.formatAddress(donor)} 
        has donated ${fmt(await stdlib.parseCurrency(amount))}`);
  };

  //test the call to donation api starting from first donor at index 0
  await donate(0, 8);
  await donate(1, 12);

  //display the ending balance of donee and donors
  for (const who of [donee, ...donors]) {
    console.log(
      stdlib.formatAddress(who),
      " has ",
      fmt(await stdlib.balanceOf(who))
    );
  }
}

await start(30);