function howMuchDidIMake(invoices) {
  const firstFilter = invoices.filter((invoice) => {
    return invoice.waiter === "Yourself";
  });

  const secondFilter = firstFilter.map((invoice) => {
    return invoice.tip;
  });
  let tipsSum = 0;
  for (let i = 0; i < secondFilter.length; i++) {
    tipsSum = tipsSum + secondFilter[i];
  }
  console.log(tipsSum);
  return tipsSum;
}

const invoices = [
  { clients: 3, waiter: "Yourself", price: 5100, tip: 200 },
  { clients: 2, waiter: "Dominique", price: 2200, tip: 50 },
  { clients: 2, waiter: "Yourself", price: 2900, tip: 100 },
];
howMuchDidIMake(invoices);
// Do not remove the following line, it is for tests
module.exports = howMuchDidIMake;
