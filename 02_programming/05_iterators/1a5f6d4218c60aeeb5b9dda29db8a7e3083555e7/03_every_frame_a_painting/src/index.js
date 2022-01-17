function canTakeArtPieces(pieces) {
  const isPainting = (pieces) => pieces.type === "painting";
  if (pieces.every(isPainting)) {
    return true;
  } else {
    return false;
  }
}


canTakeArtPieces([
  { piece: "Mona Lisa", type: "painting" },
  { piece: "Guernica", type: "painting" },
]);

// Do not remove the following line, it is for tests
module.exports = canTakeArtPieces;
