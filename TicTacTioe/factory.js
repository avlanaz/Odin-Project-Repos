const xFactory = (y, z) => {
    
}

// Created more than one, use a factory
const Player = (name, marker) => {
    return {name, marker}
}


// Created once, use a module
const gameBoard = (() => {
    const gameboard = (new Array(9)).fill("");
    const player1 = null;
    const player2 = null;

    let isPlayerOneTurn = true;
    let currPlayer = player1;
    let isGameOver = false;

    // functions
    const setPlayers = (name1, name2) => {
        this.player1 = Player(name1, 'X')
        this.player2 = Player(name2, '0')
        currPlayer = this.player1
        console.log(this.player1)
        console.log(currPlayer)
    }

    const putMarker = (index) => {
        console.log(currPlayer)
        console.log(index)
        if (index < 0 || index >= 9) {
            return
        }
        if (gameboard[index] == '') {
            gameboard[index] = currPlayer.marker
            if (checkWin()) {
                console.log(currPlayer.name + " Won!")
                isGameOver = true;
                return gameboard[index];
            }
            changePlayer()
            console.log(currPlayer.name + " turn")
        }
        return gameboard[index];
    }

    const changePlayer = () => {
        isPlayerOneTurn = !isPlayerOneTurn
        if (isPlayerOneTurn) {
            currPlayer = this.player1
        } else {
            currPlayer = this.player2
        }

    }

    const checkWin = () => {
        if (gameboard[4] !== "") {
            return true
        }
        return false
    };

    const getBoard = () => {
        return gameboard
    }

    const getIsGameOver = () => {
        return isGameOver;
    }

    return {
        setPlayers,
        getBoard,
        getIsGameOver,
        checkWin,
        putMarker,
    };
})();

gameBoard.setPlayers("Me", "AI");
console.log(gameBoard.checkWin())

function renderGameboard() {
    console.log("button is clicked")
    const gameboardDiv = document.querySelector(".gameboard");
    console.log(gameBoard.getBoard())
    const board = gameBoard.getBoard();
    board.forEach((element, index) => {
        const cellDiv = document.createElement("div", "");
        cellDiv.id = index;
        cellDiv.textContent = element;

        cellDiv.addEventListener('click', function() {
            if (!gameBoard.getIsGameOver()) {
                const marker = gameBoard.putMarker(index);
                this.textContent = marker
            }
        });
        cellDiv.index = index
        gameboardDiv.appendChild(cellDiv);
        console.log("Cell added")
    });
}

