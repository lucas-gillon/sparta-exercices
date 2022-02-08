// Code here
type CustomerType = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
};

function getEmails(customerData: CustomerType[]): string[] {
  const emails = [];
  for (let i = 0; i < customerData.length; i++) {
    emails.push(customerData[i].email);
  }
  return emails;
}
console.log(
  getEmails([
    { id: 24, first_name: "Alexander", last_name: "Collip", email: "acollip0@redcross.local", gender: "Male" },
    { id: 42, first_name: "Filberto", last_name: "Mowles", email: "fmowles3@msu.local", gender: "Female" },
  ]),
);

export { getEmails };
