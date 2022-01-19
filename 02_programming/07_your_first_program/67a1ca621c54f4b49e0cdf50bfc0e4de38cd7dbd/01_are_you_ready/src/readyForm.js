const readyForm = (reader) => {
  reader.question("Hello user! \nAre you ready for today ? \n", (ready) => {
    console.log(`WOW,  ${ready} ??!!\nReally Nice! Let's goo !!`);

    reader.close();
  });
};

// Leave line below for tests to work
module.exports = readyForm;
