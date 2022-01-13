function tellFortune(job, city, name, nb_years) {
  // Code the function here.
  console.log(`You will be ${job} in ${city}, and married to ${name} in ${nb_years} years.`);
}
tellFortune("dev", "roubaix", "justine", 5);
// Do not remove last lines, it is for tests
module.exports = tellFortune;
