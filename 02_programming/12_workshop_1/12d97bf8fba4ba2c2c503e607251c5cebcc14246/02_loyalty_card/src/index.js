import moment from "moment";
import readline from "readline";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//clear le terminal
const clear = () => console.log("\x1B[2J\x1B[0f");

//initialisation programme
function start() {
  clear();
  console.log(
    "********************************************************\n Welcome \n********************************************************",
  );
  console.log("1 - Add new customer");
  console.log("2 - Access customer data");
  console.log("3 - Quit");
  reader.question("🤖 Choose an action\n>", (action) => {
    if (action === "1") {
      createCustomer();
    } else if (action === "2") {
      seeCustomers();
    } else if (action === "3") {
      closeProgram();
    }
  });
}
start();

// création d'un nouveau client
let customers = [
  {
    First_Name: "Thor",
    Last_Name: "Odinson",
    Email: "randomemail@randomemail.com",
    Birth_Date: "??/??/????",
    City: "Asgaard",
    Country: "Valhalla",
    LoyaltyPoints: 42,
    Purchases_History: [],
  },
];

function createCustomer() {
  let newClient = {
    First_Name: "",
    Last_Name: "",
    Email: "",
    Birth_Date: "",
    City: "",
    Country: "",
    LoyaltyPoints: 42,
    Purchases_History: {},
  };
  clear();
  console.log(
    "********************************************************\n CREATE NEW CUSTOMER\n ********************************************************",
  );
  clientCreation();
  function clientCreation() {
    clientFirstName();
    function clientFirstName() {
      reader.question("🤖 - first name:\n >", (firstName) => {
        newClient.First_Name = firstName;
        clientSecondtName();
      });
    }
    function clientSecondtName() {
      reader.question("🤖 - last name:\n >", (lastName) => {
        newClient.Last_Name = lastName;
        clientEmail();
      });
    }
    function clientEmail() {
      reader.question("🤖 - email:\n>", (email) => {
        newClient.Email = email;
        clientBirthDate();
      });
    }
    function clientBirthDate() {
      reader.question("🤖 - date of birth:\n>", (birthDate) => {
        newClient.Birth_Date = birthDate;
        clientCity();
      });
    }
    function clientCity() {
      reader.question("🤖 - city:\n>", (city) => {
        newClient.City = city;
        clientCountry();
      });
    }
    function clientCountry() {
      reader.question("🤖 - country:\n>", (country) => {
        newClient.Country = country;
        customers.push(newClient);
        console.log("Here is the client jou just created");
        console.log(customers[customers.length - 1]);
        transitionCreateCustomer();
      });
    }
  }
  function transitionCreateCustomer() {
    console.log("What do you want to do next ?\n");
    console.log("1 - Add new customer");
    console.log("2 - return to the main menu");
    console.log("3 - Quit");
    reader.question("🤖 Choose an action\n>", (action) => {
      if (action === "1") {
        createCustomer();
      } else if (action === "2") {
        start();
      } else if (action === "3") {
        closeProgram();
      }
    });
  }
}

// voir la liste des clients
function seeCustomers() {
  clear();
  console.log(
    "********************************************************\n CHOOSE A CUSTOMER \n********************************************************",
  );
  // afficher la liste des clients
  for (let i = 0; i < customers.length; i++) {
    console.log(`${i + 1} - `, customers[i].First_Name, customers[i].Last_Name);
  }
  // séléctionner client
  reader.question("🤖 Choose a customer\n>", (customer) => {
    clear();
    console.log(
      "********************************************************\n ",
      customers[customer - 1].First_Name,
      "",
      customers[customer - 1].Last_Name,
      "\n********************************************************\n",
      "1 - Show account\n",
      "2 - Add purchase\n",
      "3 - Use loyalty points\n",
      "4 - Show purchase history\n",
      "5 - Choose another customer\n",
      "6 - Back to menu\n",
      "7 - Quit\n",
    );
    reader.question(
      `🤖 Choose an action for ${customers[customer - 1].First_Name} ${customers[customer - 1].Last_Name}\n>`,
      (action) => {
        // montrer les infos client
        if (action === "1") {
          console.log(customers[customer - 1]);
          transitionSeeCustomer();
        }
        if (action === "2") {
          // Add purchase
          reader.question("What purchase do you want to add ?\n>", (purchase) => {
            customers[customer - 1].Purchases_History.push(purchase, moment().format("MMMM Do YYYY, h:mm:ss a"));
            transitionSeeCustomer();
          });
        }
        if (action === "3") {
          // use loyalty points
          reader.question(
            "Points left: \n" + customers[customer - 1].LoyaltyPoints + "\nHow many do you want to use ?\n>",
            (points) => {
              customers[customer - 1].LoyaltyPoints -= parseFloat(points);
              console.log("you just spent " + parseFloat(points) + " points");
              console.log("you have " + customers[customer - 1].LoyaltyPoints + " points left");
              transitionSeeCustomer();
            },
          );
        }
        if (action === "4") {
          // Show purchase history
          console.log(
            "Purchase History of " + customers[customer - 1].First_Name + customers[customer - 1].Last_Name + ":",
          );
          console.log(customers[customer - 1].Purchases_History);
          transitionSeeCustomer();
        }
        if (action === "5") {
          // Choose another customer
          seeCustomers();
        }
        if (action === "6") {
          // Back to main menu
          start();
        }
        if (action === "7") {
          // quit
          closeProgram();
        }
      },
    );
  });
  function transitionSeeCustomer() {
    console.log("What do you want to do next ?\n");
    console.log("1 - See another customer");
    console.log("2 - return to the main menu");
    console.log("3 - Quit");
    reader.question("🤖 Choose an action\n>", (action) => {
      if (action === "1") {
        seeCustomers();
      } else if (action === "2") {
        start();
      } else if (action === "3") {
        closeProgram();
      }
    });
  }
}

// fermeture du programme
function closeProgram() {
  console.log("Thanks for using this program!");
  reader.close();
}
