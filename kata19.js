/* Create a function generateBoard which will return a nested array representing the board,
 * containing the location of two queens.
 */
const generateBoard = function() {
  // generate empty board
  const board = [];
  for (let i = 0; i < 8; i++) {
    board.push(Array(8).fill(0));
  }

  // add queens
  for (const queen of arguments) {
    board [queen[0]][queen[1]] = 1;
  }
  return board;
};

/* Create a function called queenThreat that will indicate whether or not the two queens
 * are positioned so that they attack each other.
 */
const queenThreat = function(board) {

  let threat = false;

  // find positions of queens, format: [[0, 5] [5, 0]]
  const positions = findQueens(board);

  console.log(positions);

  // test horizontal and vertical axies
  if (positions[0][0] === positions[1][0] || positions[0][1] === positions[1][1]) return true;

  // from the position of the 1st queen check for 2nd queen
  // 4 x diagonals




  return threat;
};

// helper function, returns nested array of queen positions
const findQueens = function(board) {

  const result = [];

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {

      if (board[row][col] === 1) result.push([Number(row), Number(col)]);
    }
  }
  return result;
};

// let whiteQueen = [0, 5];
// let blackQueen = [5, 0];

let blackQueen = [3, 3];
let whiteQueen = [6, 6];


let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.table(generatedBoard);
console.log(queenThreat(generatedBoard));


// generateBoard(whiteQueen, blackQueen) // expected output below
// [
//   [0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ]
// true

// let whiteQueen = [0, 0];
// let blackQueen = [5, 7];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));
// expected output...........
// [
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ]
// false