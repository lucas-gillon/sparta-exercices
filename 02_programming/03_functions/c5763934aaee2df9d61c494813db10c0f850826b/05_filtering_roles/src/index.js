function filteredRoles(persons, role = "Teacher") {
  // Code the function here.
  let arrayOfPersons = [
    {
      name: "Thor",
      role: "Student",
    },
    {
      name: "Odin",
      role: "Teacher",
    },
    {
      name: "Freyja",
      role: "Teacher",
    },
    {
      name: "Loki",
      role: "Student",
    },
  ];
  if ((arrayOfPersons.role && arrayOfPersons.persons) === arrayOfPersons.role) {
    console.log(arrayOfPersons.name && arrayOfPersons.role);
    return arrayOfPersons.name && arrayOfPersons.role;
  }
}
filteredRoles("Thor", "Student");
// Do not remove lines below, it is for tests
module.exports = filteredRoles;
