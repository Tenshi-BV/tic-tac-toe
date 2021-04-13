const gameBoard = (() => {

    const field1 = document.querySelector('#one>div');
    const field2 = document.querySelector('#two>div');
    const field3 = document.querySelector('#three>div');
    const field4 = document.querySelector('#four>div');
    const field5 = document.querySelector('#five>div');
    const field6 = document.querySelector('#six>div');
    const field7 = document.querySelector('#seven>div');
    const field8 = document.querySelector('#eight>div');
    const field9 = document.querySelector('#nine>div');

    const playerFactory = (name) => {
        return { name };
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
                switchPlayer();
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
            switch(){}
        }
    })();

})()