function waitFor(time: number): Promise<void> {
  return new Promise((resolve, reject) => {
    if (
      setTimeout(() => {
        " ";
      }, time)
    ) {
      resolve();
    } else {
      reject("An error occured");
    }
  });
}

waitFor(2000).then(() => {
  console.log("test");
});

export { waitFor };
