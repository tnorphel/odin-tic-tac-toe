function Player(name, mark) {
    return {'name' : name,
            'mark' : mark
        }
}

let players = [];

const startGame = document.querySelector('.start-game');
startGame.addEventListener('submit', startTheGame);

function startTheGame(e) {
    e.preventDefault();

    const playerOneName = document.getElementById('player-one-name').value;
    const playerTwoName = document.getElementById('player-two-name').value;

    const playerOne = Player(playerOneName, 'X');
    const playerTwo = Player(playerTwoName, 'O');

    players.push(playerOne);
    players.push(playerTwo);

    renderGameBoard();
}

function renderGameBoard() {
    const main = document.querySelector('.main');
    main.innerHTML = "";

    let playerDetails = document.createElement('div');
    playerDetails.classList.add('playerDetails');
    let playerOne = document.createElement('p');
    playerOne.classList.add('playerOne');
    playerOne.textContent = `Player One: ${players[0].name}    (${players[0].mark})`;
    let playerTwo = document.createElement('p');
    playerTwo.classList.add('playerTwo');
    playerTwo.textContent = `Player Two: ${players[1].name}    (${players[1].mark})`;
    playerDetails.appendChild(playerOne);
    playerDetails.appendChild(playerTwo);


    let gameBoard = document.createElement('div');
    gameBoard.classList.add('gameBoard');

    for (let i = 0; i < 9; i++) {
        let div = document.createElement('div');
        gameBoard.appendChild(div);
    }

    let gameButtons = document.createElement('div');
    gameButtons.classList.add('gameButtons');
    let playAgain = document.createElement('button');
    playAgain.classList.add('playAgain');
    playAgain.textContent = 'Play Again';
    let restart = document.createElement('button');
    restart.classList.add('restart');
    restart.textContent = 'Restart';
    gameButtons.appendChild(playAgain);
    gameButtons.appendChild(restart)

    main.appendChild(playerDetails);
    main.appendChild(gameBoard);
    main.appendChild(gameButtons)
}