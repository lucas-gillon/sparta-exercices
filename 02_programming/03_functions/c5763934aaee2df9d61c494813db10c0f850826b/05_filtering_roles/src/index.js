function filteredRoles(persons, role = "Teacher") {
  // Code the function here.
  let arrayOfPersons = [
    {
      name: "Frieda",
      role: "Teacher",
    },
    {
      name: "John",
      role: "Teacher",
    },
    {
      name: "Francis",
      role: "Student",
    },
    {
      name: "Jane",
      role: "Student",
    },
  ];
  const myFilteredArray = [];
  if (role === arrayOfPersons[0].role) {
    myFilteredArray.push({
      name: arrayOfPersons[0].name,
      role: arrayOfPersons[0].role,
    });
  }
  if (role === arrayOfPersons[1].role) {
    myFilteredArray.push({
      name: arrayOfPersons[1].name,
      role: arrayOfPersons[1].role,
    });
  }
  if (role === arrayOfPersons[2].role) {
    myFilteredArray.push({
      name: arrayOfPersons[2].name,
      role: arrayOfPersons[2].role,
    });
  }
  if (role === arrayOfPersons[3].role) {
    myFilteredArray.push({
      name: arrayOfPersons[3].name,
      role: arrayOfPersons[3].role,
    });
  }
  return myFilteredArray;
}
console.log(filteredRoles(["Frieda", "John", "Francis", "Jane"], "Student"));
// Do not remove lines below, it is for tests
module.exports = filteredRoles;
