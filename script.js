const grid = document.getElementById("grid");
const restartBtn = document.getElementById("restartBtn");
const randomizeBtn = document.getElementById("randomizeBtn");
const switchGameBtn = document.getElementById("switchGameBtn");
const numRows = 5;
const numCols = 5;
let lights = [];

function initializeLights() {
  for (let i = 0; i < numRows; i++) {
    lights[i] = [];
    for (let j = 0; j < numCols; j++) {
      // Randomly decide whether the light is initially on or off
      lights[i][j] = Math.random() < 0.5;
    }
  }
  // Ensure that at least one light is initially turned on
  if (lights.every((row) => row.every((light) => !light))) {
    lights[Math.floor(Math.random() * numRows)][
      Math.floor(Math.random() * numCols)
    ] = true;
  }
}

function createGrid() {
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = i;
      cell.dataset.col = j;
      if (lights[i][j]) {
        cell.classList.add("on");
      }
      grid.appendChild(cell);
    }
  }
}

function toggleLight(row, col) {
  lights[row][col] = !lights[row][col];
  const cell = document.querySelector(
    `.cell[data-row='${row}'][data-col='${col}']`
  );
  cell.classList.toggle("on");
}

function handleClick(event) {
  const row = parseInt(event.target.dataset.row);
  const col = parseInt(event.target.dataset.col);
  toggleLight(row, col);
  toggleNeighbors(row, col);
  checkWin();
}

function toggleNeighbors(row, col) {
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  directions.forEach((dir) => {
    const newRow = row + dir[0];
    const newCol = col + dir[1];
    if (
      newRow >= 0 &&
      newRow < numRows &&
      newCol >= 0 &&
      newCol < numCols
    ) {
      toggleLight(newRow, newCol);
    }
  });
}

function checkWin() {
  const allOn = lights.every((row) => row.every((light) => light));
  if (allOn) {
    alert("You Finished the Game Successfully!");
    initializeLights();
    resetGrid();
  }
}

function resetGrid() {
  grid.innerHTML = "";
  createGrid();
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.addEventListener("click", handleClick);
  });
}

initializeLights();
createGrid();
document.querySelectorAll(".cell").forEach((cell) => {
  cell.addEventListener("click", handleClick);
});

restartBtn.addEventListener("click", function () {
  initializeLights();
  resetGrid();
});

randomizeBtn.addEventListener("click", function () {
  initializeLights();
  resetGrid();
});

// Show last modified date in the footer
const lastModified = document.getElementById('lastModified');
lastModified.textContent = document.lastModified;

// Function to switch to the Tic Tac Toe game
function switchGame() {
  // Redirect to the Tic Tac Toe game
  window.location.href = 'tic_tac_toe.html'; // Change 'tic_tac_toe.html' to the filename of your Tic Tac Toe game HTML file
}

  function openInstructions() {
    document.getElementById('instructionsModal').style.display = 'block';
}

function Addendum() {
    document.getElementById('addendumModal').style.display = 'block';
}

function closeInstructions() {
    document.getElementById('instructionsModal').style.display = 'none';
}

function closeAddendun() {
    document.getElementById('addendumModal').style.display = 'none';
}