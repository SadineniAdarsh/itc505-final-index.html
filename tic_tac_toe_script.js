const board = document.getElementById('ticTacToeBoard');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

function placeMarker(row, col) {
  const index = 3 * row + col;
  if (gameBoard[index] === '') {
    gameBoard[index] = currentPlayer;
    const cell = board.querySelectorAll('.cell')[index];
    cell.textContent = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWinner() {
  const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];
  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      window.alert(`${gameBoard[a]} wins!`);
      resetBoard();
      return;
    }
  }
  if (!gameBoard.includes('')) {
    window.alert('It\'s a tie!');
    resetBoard();
  }
}

function resetBoard() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  const cells = board.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.textContent = '';
  });
}
function restartGame() {
    resetBoard();
  }
  
  function switchGame() {
    // Redirect to the Lights Out game
    window.location.href = 'index.html'; // Change 'index.html' to the filename of your Lights Out game HTML file
  }
  

// Show last modified date in the footer
const lastModified = document.getElementById('lastModified');
lastModified.textContent = document.lastModified;
