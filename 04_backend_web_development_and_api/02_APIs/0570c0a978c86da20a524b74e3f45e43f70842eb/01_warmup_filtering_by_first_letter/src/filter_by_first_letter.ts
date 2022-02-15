import { Customer, customers } from "../data/customers";

export function filterByFirstLetter(customers: Customer[], letter: string): Customer[] {
  const filtered = customers.filter((customer) => customer.last_name[0] === letter);
  return filtered;
}

console.log(filterByFirstLetter(customers, "B"));
