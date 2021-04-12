const gameBoard = (() => {
    const updateScore = (x, y) => {
        const score = document.querySelector('#score');
        const player1DOM = document.querySelector('#player1');
        player1DOM.textContent = x;
        score.appendChild(player1DOM);
        const player2DOM = document.querySelector('#player2');
        player2DOM.textContent = y;
        score.appendChild(player2DOM);
    }

    const playerFactory = (name, computer) => {
        return { name, computer };
    };11
    const gameStart = (() => {
        const start = document.querySelector('#score');
        const startButton = start.createElement('div');
        startButton.setAttribute('id', 'start');
        start.appendChild(startButton);

        return { player1, player2 }
    })();
    let displayController = [];
    const gameFlow = (() => {})();
})();