function onlyMyTips(invoices) {
  const firstFilter = invoices.filter((invoice) => {
    return invoice.waiter === "Yourself";
  });

  const secondFilter = firstFilter.map((invoice) => {
    return invoice.tip;
  });
  return secondFilter;
}

const todaysInvoices = [
  { clients: 3, waiter: "Yourself", price: 5100, tip: 200 },
  { clients: 2, waiter: "Dominique", price: 2200, tip: 50 },
  { clients: 2, waiter: "Yourself", price: 2900, tip: 100 },
];

onlyMyTips(todaysInvoices);

// Do not remove the following line, it is for tests
module.exports = onlyMyTips;
