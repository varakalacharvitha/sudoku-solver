# Sudoku Solver - Full Stack Application

This is a full-stack Sudoku Solver built using React for the frontend and Express.js (Node.js) for the backend. It allows users to input any Sudoku puzzle and solve it instantly using a backtracking algorithm.

## Features

- Interactive 9x9 Sudoku grid
- Input validation (only numbers 1–9 allowed)
- Solve button using a backtracking algorithm
- Clear button to reset the board
- Highlighted 3x3 blocks with different background colors
- Real-time error display and loading indicator

## Tech Stack

### Frontend (React)

- React with Hooks
- CSS Grid for layout
- Uses Fetch API to call the backend
- Runs on localhost:3000

### Backend (Node.js + Express)

- Express server with a single `/solve` POST endpoint
- Sudoku solving logic using backtracking algorithm
- CORS enabled
- Runs on localhost:5000

## Folder Structure

sudoku-solver/
├── sudoku-solver-client/ # React frontend
│ └── src/
│ ├── App.js
│ ├── Board.jsx
│ └── Board.css
├── sudoku-solver-backend/ # Express backend
│ └── index.js
└── README.md

bash
Copy
Edit

## How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/varakalacharvitha/sudoku-solver.git
cd sudoku-solver
2. Start the Backend
bash
Copy
Edit
cd sudoku-solver-backend
npm install
node index.js
The backend will start on http://localhost:5000

3. Start the Frontend
In a new terminal:

bash
Copy
Edit
cd sudoku-solver-client
npm install
npm start
The frontend will start on http://localhost:3000

API Endpoint
POST /solve
Request Body:

json
Copy
Edit
{
  "board": [
    ["5", "3", "", "", "7", "", "", "", ""],
    ["6", "", "", "1", "9", "5", "", "", ""],
    ["", "9", "8", "", "", "", "", "6", ""],
    ["8", "", "", "", "6", "", "", "", "3"],
    ["4", "", "", "8", "", "3", "", "", "1"],
    ["7", "", "", "", "2", "", "", "", "6"],
    ["", "6", "", "", "", "", "2", "8", ""],
    ["", "", "", "4", "1", "9", "", "", "5"],
    ["", "", "", "", "8", "", "", "7", "9"]
  ]
}
Response:

json
Copy
Edit
{
  "solution": [
    ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
    ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
    ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
    ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
    ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
    ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
    ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
    ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
    ["3", "4", "5", "2", "8", "6", "1", "7", "9"]
  ]
}
