// code here
import { Customer, customers } from "../data/customers";

function filterByFirstLetter(customers: Customer[], letter: string): Customer[] {
  const filtered = customers.filter((customer) => customer.last_name[0] === letter);
  return filtered;
}

export function filterByFirstLetterOrdered(customers: Customer[], letter: string): Customer[] {
  const filtered = filterByFirstLetter(customers, letter);
  if (letter.length > 1) {
    return [];
  } else {
    filtered.sort((a, b) => (a.last_name > b.last_name ? 1 : b.last_name > a.last_name ? -1 : 0));
    return filtered;
  }
}

console.log(filterByFirstLetterOrdered(customers, "B"));
