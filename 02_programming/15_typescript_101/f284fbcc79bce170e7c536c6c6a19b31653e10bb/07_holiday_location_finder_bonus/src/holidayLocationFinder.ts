import { Interface } from "readline";

function holidayLocationFinder(reader: Interface) {
  // Write your code here
  console.log(
    "***Welcome to HOLIDAY LOCATION FINDER***\n",
    "\nThis program will help you find a location based on the continent you will input.\n",
    "\nHere is the list of continent to chose from: ",
    "\n- Europe",
    "\n- North America",
    "\n- South America",
    "\n- Asia",
    "\n- Africa",
    "\n- Oceania",
  );
  reader.question("Please input your choice:\n>", choice => {
    console.log(choice);
  });
}

// Leave the line below for tests to work properly.
export { holidayLocationFinder };
