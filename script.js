const tic = document.querySelector('.tic-grid');
const cell = document.querySelectorAll('.cell');
const message = document.querySelector('.message');
let currentPlayer = 'X';
// I want to loop through the below array to get my results
// const playedCellArray = []; // No longer using this array
let playerX = [];
let playerO = [];

start = (e) => {
    e.preventDefault();

    const active = e.target.dataset.active;
    const square = e.target;
    const cellId = e.target.dataset.set;
    inputXO(cellId, square, active);
    // console.log(square);
}

inputXO = (cellId, square) => {
    if (cellId && square.dataset.active === 'false') {
        square.classList.add('square');
        if (cellId && currentPlayer === 'X') {
            square.style.backgroundColor = 'aqua';
            playerX.push(cellId);
        } else {
            square.style.backgroundColor = 'yellow';
            playerO.push(cellId);
        }
        
        square.innerHTML = currentUser();
        square.dataset.active = true;
    }

    // playedCellArray.push({currentPlayer, cellId});

    checkResults(currentPlayer);
}

currentUser = () => {
    return currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

checkResults = (currentPlayer) => {  
    if (playerX.includes('1') && playerX.includes('2') && playerX.includes('3')) {
        winner(currentPlayer, 'you are a winner');
    }
    if (playerO.includes('1') && playerO.includes('2') && playerO.includes('3')) {
        winner(currentPlayer, 'you are a winner');
    }
    if (playerX.includes('4') && playerX.includes('5') && playerX.includes('6')) {
        winner(currentPlayer, 'you are a winner');
    }
    if (playerO.includes('4') && playerO.includes('5') && playerO.includes('6')) {
        winner(currentPlayer, 'you are a winner');
    }
    if (playerX.includes('7') && playerX.includes('8') && playerX.includes('9')) {
        winner(currentPlayer, 'you are a winner');
    }
    if (playerO.includes('7') && playerO.includes('8') && playerO.includes('9')) {
        winner(currentPlayer, 'you are a winner');
    }
    
    // check column
    if (playerX.includes('1') && playerX.includes('4') && playerX.includes('7')) {
        winner(currentPlayer, 'you are a winner');
    }
    if (playerO.includes('1') && playerO.includes('4') && playerO.includes('7')) {
        winner(currentPlayer, 'you are a winner');
    }
    if (playerX.includes('2') && playerX.includes('5') && playerX.includes('8')) {
        winner(currentPlayer, 'you are a winner');
    }
    if (playerO.includes('2') && playerO.includes('5') && playerO.includes('8')) {
        winner(currentPlayer, 'you are a winner');
    }
    if (playerX.includes('3') && playerX.includes('6') && playerX.includes('9')) {
        winner(currentPlayer, 'you are a winner');
    }
    if (playerO.includes('3') && playerO.includes('6') && playerO.includes('9')) {
        winner(currentPlayer, 'you are a winner');
    }

    // check diagnal
    if (playerX.includes('1') && playerX.includes('5') && playerX.includes('9')) {
        winner(currentPlayer, 'you are a winner');
    }
    if (playerO.includes('1') && playerO.includes('5') && playerO.includes('9')) {
        winner(currentPlayer, 'you are a winner');
    }
    if (playerX.includes('3') && playerX.includes('5') && playerX.includes('7')) {
        winner(currentPlayer, 'you are a winner');
    }
    if (playerO.includes('3') && playerO.includes('5') && playerO.includes('7')) {
        winner(currentPlayer, 'you are a winner');
    }
}

winner = (mess, currentPlayer) => {
    const div = document.createElement('div');
    div.classList.add('show-message');
    div.innerText = `${currentPlayer} ${mess}`;

    message.appendChild(div);

    setTimeout(() => div.remove(), 3000);
    console.log(cell);
    cell.forEach((c) => {
        c.innerHTML = '';
        c.dataset.active = false;
        c.classList.remove('square');
        c.style = 'none';
    });
    playerX = [];
    playerO = [];
}

cell.forEach((el) => {
    el.addEventListener('click', start);
});

