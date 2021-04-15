const gameBoard = (() => {

    const player1DOM = document.querySelector('#player1');
    const player2DOM = document.querySelector('#player2');

    const field1 = document.querySelector('#one>div');
    const field2 = document.querySelector('#two>div');
    const field3 = document.querySelector('#three>div');
    const field4 = document.querySelector('#four>div');
    const field5 = document.querySelector('#five>div');
    const field6 = document.querySelector('#six>div');
    const field7 = document.querySelector('#seven>div');
    const field8 = document.querySelector('#eight>div');
    const field9 = document.querySelector('#nine>div');

    const resetButton = document.querySelector('#reset');
    const playerButton = document.querySelector('#player');



    let player1 = "Player 1";
    let player2 = "Player 2";
    const playerFactory = () => {
        let _player1 = prompt("Player 1:");
        let _player2 = prompt("Player 2:");
        player1 = _player1;
        player2 = _player2;
        scoreBoard.scoreUpdate();
    };

    let displayController = [
        { id: "one", field: field1, sign: 0 },
        { id: "two", field: field2, sign: 0 },
        { id: "three", field: field3, sign: 0 },
        { id: "four", field: field4, sign: 0 },
        { id: "five", field: field5, sign: 0 },
        { id: "six", field: field6, sign: 0 },
        { id: "seven", field: field7, sign: 0 },
        { id: "eight", field: field8, sign: 0 },
        { id: "nine", field: field9, sign: 0 },
    ];

    const gameFlow = (() => {
        const board = document.querySelectorAll('#board>div');
        board.forEach((div) => {
            div.addEventListener('click', () => {
                deploy(div.id);
            })
        });

        const deploy = (x) => {
            let toSwitch = displayController.find(box => box.id == x);
            if (toSwitch.sign == 0) {
                if (turn == "player1") {
                    toSwitch.sign = "circle";
                } else {
                    toSwitch.sign = "cross";
                }
                showBoard();
                checkBoard();
            }
        };

        const showBoard = () => {
            displayController.filter(box => {
                if (box.sign == "circle") {
                    box.field.classList.add('circle')
                } else if (box.sign == "cross") {
                    box.field.classList.add('cross')
                } else { }
            })
        };

        let turn = "player1";
        const switchPlayer = () => {
            if (turn == "player1") {
                turn = "player2"
            } else {
                turn = "player1"
            }
        }

        const checkBoard = () => {
            let signArray = displayController.map(box => box.sign);
            if (signArray[0] === signArray[1] && signArray[1] === signArray[2] && signArray[0] !== 0) {
                theWinner(turn);
                return;
            } else if (signArray[3] === signArray[4] && signArray[4] === signArray[5] && signArray[3] !== 0) {
                theWinner(turn);
                return;
            } else if (signArray[6] === signArray[7] && signArray[7] === signArray[8] && signArray[6] !== 0) {
                theWinner(turn);
                return;
            } else if (signArray[0] === signArray[3] && signArray[3] === signArray[6] && signArray[0] !== 0) {
                theWinner(turn);
                return;
            } else if (signArray[1] === signArray[4] && signArray[4] === signArray[7] && signArray[1] !== 0) {
                theWinner(turn);
                return;
            } else if (signArray[2] === signArray[5] && signArray[5] === signArray[8] && signArray[2] !== 0) {
                theWinner(turn);
                return;
            } else if (signArray[0] === signArray[4] && signArray[4] === signArray[8] && signArray[0] !== 0) {
                theWinner(turn);
                return;
            } else if (signArray[2] === signArray[4] && signArray[4] === signArray[6] && signArray[2] !== 0) {
                theWinner(turn);
                return;
            } else { }
            let fullField = signArray.some(box => box === 0);
            if (fullField === false) {
                alert("Tie!");
                resetBoard();
            }
            switchPlayer();
        }

        const theWinner = (x) => {
            alert(`${x} wins!`);
            matchFlow.gameCount(x)
            resetBoard();
            scoreBoard.scoreUpdate();
        }

        const resetBoard = () => {
            displayController.filter(box => {
                box.sign = 0
            });
            displayController.filter(box => {
                box.field.classList.remove('circle');
                box.field.classList.remove('cross');
            });
            showBoard();
            turn = "player1";
        }

        return { turn, resetBoard }

    })();


    let playerOne = 0;
    let playerTwo = 0;
    const matchFlow = (() => {

        const gameCount = (x) => {
            if (x == "player1") {
                playerOne = playerOne + 1;
            } else {
                playerTwo = playerTwo + 1;
            }
        }

        const resetScore = () => {
            playerOne = 0;
            playerTwo = 0;
        }

        return { gameCount, resetScore }

    })();

    const buttonFlow = (() => {

        resetButton.addEventListener('click', () => {
            gameFlow.resetBoard();
            matchFlow.resetScore();
            scoreBoard.scoreUpdate();
        });
        playerButton.addEventListener('click', () => playerFactory());

    })();

    const scoreBoard = (() => {

        const scoreUpdate = () => {
            player1DOM.textContent = `${player1} : ${playerOne}`;
            player2DOM.textContent = `${player2} : ${playerTwo}`;
        }

        return { scoreUpdate };
    })();

    scoreBoard.scoreUpdate();

})()