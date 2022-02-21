import { getRandomFace } from "./random-face";

function headOrTail(face: string): Promise<string> {
  const randomFace = getRandomFace();
  return new Promise((resolve, reject) => {
    if (face === randomFace) {
      resolve("Well done.");
    } else {
      reject("Nope.");
    }
  });
}

export { headOrTail };
