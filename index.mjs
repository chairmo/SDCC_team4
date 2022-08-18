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

  //display initial balance of donee
  console.log(`The address of donee is: ${stdlib.formatAddress(donee)}`);
  console.log(`The starting balance of donee is: ${await getBalance(donee)}`);

  //display the target goal
  console.log(`the donations target goal is: ${fmt(targetGoal)}`);

  //connect donee contract to the backend api
  const ctcDonee = donee.contract(backend);

  
  await ctcDonee.p.Donee({
      doneeAddr: donee.networkAccount,
      deadline: deadline,
      goal: goal,
      ready: () => {
        console.log("contract is deployed by the donee.");
      },
  })

};

await start(30);
