const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const clear = () => console.log("\x1B[2J\x1B[0f");

function nombreAleatoire() {
  let nombreEntreZeroEtUn = Math.random();
  let mathRandomDoublé = nombreEntreZeroEtUn * 2;
  let résultatArrondi = Math.round(mathRandomDoublé);
  return résultatArrondi;
}

const choix = ["✊", "✋", "🤞"];

let userCounter = 0;
let computerCounter = 0;

clear();
console.log(" ------------------------------------------------------------------");
console.log(" ------------------------------------------------------------------");
console.log(" --                    BIENVENUE DANS LE JEU                     --");
console.log(" --                          SHIFUMI                             --");
console.log(" --                                                              --");
console.log(" --                    EN 3 MANCHES GAGNANTES                    --");
console.log(" --                                                              --");
console.log(" ------------------------------------------------------------------");
console.log(" ------------------------------------------------------------------\n");

function question() {
  reader.question("Please choose a number (1, 2 or 3)\n> ", inputTreatment);
}

question();

function inputTreatment(userChoice) {
  let computerChoice = nombreAleatoire();
  //traitement du cas "ce n'est pas un nombre"
  if (isNaN(userChoice)) {
    clear();
    console.log("This is not a number");
    console.log(`PLAYER :  ${userCounter} points \nCOMPUTER : ${computerCounter} points\n`);
  }
  // traitement des égalités
  if (choix[userChoice - 1] === choix[computerChoice]) {
    clear();
    console.log(`You chose      ---- ${choix[userChoice - 1]} ----`);
    console.log(`computer chose ---- ${choix[computerChoice]} ----`);
    console.log("------ égalité ------");
    console.log(`PLAYER :  ${userCounter} points \nCOMPUTER : ${computerCounter} points\n`);
  }
  // traitement des cas "pierre"
  if (choix[userChoice - 1] === "✊" && choix[computerChoice] === "✋") {
    clear();
    console.log(`You chose      ---- ${choix[userChoice - 1]} ----`);
    console.log(`computer chose ---- ${choix[computerChoice]} ----`);
    console.log("------ round lost ------");
    computerCounter = computerCounter + 1;
    console.log(`PLAYER :  ${userCounter} points \nCOMPUTER : ${computerCounter} points\n`);
  }
  if (choix[userChoice - 1] === "✊" && choix[computerChoice] === "🤞") {
    clear();
    console.log(`You chose      ---- ${choix[userChoice - 1]} ----`);
    console.log(`computer chose ---- ${choix[computerChoice]} ----`);
    console.log("------ round won ------");
    userCounter = userCounter + 1;
    console.log(`PLAYER :  ${userCounter} points \nCOMPUTER : ${computerCounter} points\n`);
  }
  // traitement des cas "feuille"
  if (choix[userChoice - 1] === "✋" && choix[computerChoice] === "🤞") {
    clear();
    console.log(`You chose      ---- ${choix[userChoice - 1]} ----`);
    console.log(`computer chose ---- ${choix[computerChoice]} ----`);
    console.log("------ round lost ------");
    computerCounter = computerCounter + 1;
    console.log(`PLAYER :  ${userCounter} points \nCOMPUTER : ${computerCounter} points\n`);
  }
  if (choix[userChoice - 1] === "✋" && choix[computerChoice] === "✊") {
    clear();
    console.log(`You chose      ---- ${choix[userChoice - 1]} ----`);
    console.log(`computer chose ---- ${choix[computerChoice]} ----`);
    console.log("------ round won ------");
    userCounter = userCounter + 1;
    console.log(`PLAYER :  ${userCounter} points \nCOMPUTER : ${computerCounter} points\n`);
  }
  // traitement des cas "ciseaux"
  if (choix[userChoice - 1] === "🤞" && choix[computerChoice] === "✊") {
    clear();
    console.log(`You chose      ---- ${choix[userChoice - 1]} ----`);
    console.log(`computer chose ---- ${choix[computerChoice]} ----`);
    console.log("------ round lost ------");
    computerCounter = computerCounter + 1;
    console.log(`PLAYER :  ${userCounter} points \nCOMPUTER : ${computerCounter} points\n`);
  }
  if (choix[userChoice - 1] === "🤞" && choix[computerChoice] === "✋") {
    clear();
    console.log(`You chose      ---- ${choix[userChoice - 1]} ----`);
    console.log(`computer chose ---- ${choix[computerChoice]} ----`);
    console.log("------ round won ------");
    userCounter = userCounter + 1;
    console.log(`PLAYER :  ${userCounter} points \nCOMPUTER : ${computerCounter} points\n`);
  }
  question();
  if (userCounter === 3) {
    console.log("Bravo, you won!");
    reader.close();
  } else if (computerCounter === 3) {
    console.log("HAHA you lost, you LOSER!");
    reader.close();
  }
}
