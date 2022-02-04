function counter() {
  let mockArray = [
    "Lord of the rings : the return of the king",
    "Into the wild",
    "Alien the 8th passenger",
    "Tombeau des lucioles",
    "fight club",
  ];
  let LOTRcounter = 0;
  for (let i = 0; i < mockArray.length; i++) {
    if (mockArray[i].includes("Lord of the rings") === true) {
      LOTRcounter += 1;
    }
  }
  return LOTRcounter;
}
console.log(counter());
