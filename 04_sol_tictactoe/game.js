var game = document.querySelector('.container');
var currentPlayer = 'X';
var panel = document.querySelector('.notification');
var gameOver = false;

var WINNERS = [
  /([^.])..\1..\1../,
  /.([^.])..\1..\1./,
  /..([^.])..\1..\1/,
  /([^.])\1\1....../,
  /...([^.])\1\1.../,
  /......([^.])\1\1/,
  /([^.])...\1...\1/,
  /..([^.]).\1.\1../
];


function handleClick(ev) {
  if (gameOver) { return; }

  var el = ev.target;
  if (el.textContent === '.') {
    play(el);
  } else {
    panel.textContent = 'Invalid move. Try again';
  }
}

function play(el) {
  el.textContent = currentPlayer;
  if (!hasWinner()) {
    currentPlayer = (currentPlayer === 'X' ? 'O' : 'X');
    panel.textContent = panel.textContent = "It's " + currentPlayer + ' Turn. Go!';
  }

}


function hasWinner() {
  var board = game.textContent.replace(/\s+/g, '');
  for ( var i=0; i < WINNERS.length; i++ ) {
    if (board.match(WINNERS[i])) {
      gameOver = true;
      panel.textContent = 'Bravo! ' + currentPlayer + ' won';
      return true;
    }
  }
}



panel.textContent = "It's " + currentPlayer + ' Turn. Go!';
game.addEventListener('click', handleClick);





