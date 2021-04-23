import _ from "lodash";
export const Puzzle = (board, level) => {
  let difficulty = level === "easy" ? 4 : level === "medium" ? 6 : 7;
  var newPuzzle = _.cloneDeep(board);
  newPuzzle.map((row) => {
    for (var i = 0; i < difficulty; i++) {
      const random = Math.floor(Math.random() * 9);
      row[random].value = 0;
      row[random].isPrefilled = false;
    }
  });
  return { newPuzzle, board };
};
