const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ✅ Sudoku Validator
function isValid(board, row, col, num) {
  for (let i = 0; i < 9; i++) {
    if (
      board[row][i] == num ||
      board[i][col] == num ||
      board[3 * Math.floor(row / 3) + Math.floor(i / 3)]
           [3 * Math.floor(col / 3) + (i % 3)] == num
    ) {
      return false;
    }
  }
  return true;
}

// ✅ Backtracking Sudoku Solver
function solveSudoku(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === "" || board[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isValid(board, row, col, num)) {
            board[row][col] = num;
            if (solveSudoku(board)) return true;
            board[row][col] = "";
          }
        }
        return false;
      }
    }
  }
  return true;
}

// ✅ API: POST /solve
app.post('/solve', (req, res) => {
  const puzzle = req.body.board;

  if (
    !puzzle ||
    puzzle.length !== 9 ||
    puzzle.some(row => row.length !== 9)
  ) {
    return res.status(400).json({ error: 'Invalid board format' });
  }

  const boardCopy = JSON.parse(JSON.stringify(puzzle));

  if (solveSudoku(boardCopy)) {
    res.json({ solution: boardCopy });
  } else {
    res.status(400).json({ error: 'No solution found' });
  }
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Sudoku solver API running at http://localhost:${PORT}`);
});
