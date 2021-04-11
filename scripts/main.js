const gameBoard = (() => {
    const gameStart = (() => {})();
    let displayController = [];
    const player = () => {};
    const gameFlow = (() => {})();
    return {gameStart};
})();

const h1 = document.querySelector('h1');
const start = document.createElement('div');
start.setAttribute('id', 'start');
h1.appendChild(start);

const twoPlayer = document.createElement('button');
twoPlayer.setAttribute('id', 'twoPlayers');
twoPlayer.textContent = "2 PLAYERS";
start.appendChild(twoPlayer);

const vsComputer = document.createElement('button');
vsComputer.setAttribute('id', 'vsComputer');
vsComputer.textContent = "vs. COMPUTER";
start.appendChild(vsComputer);

twoPlayer.addEventListener('click', () => {screen1("player")});
vsComputer.addEventListener('click', () => {screen1("computer")});

function screen1(x) {
    start.removeChild(twoPlayer);
    start.removeChild(vsComputer);

    if (x == "player") {
        nameSelection();
    } else {
        difficultySelection();
    }

    const submit = document.querySelector('#exit')
    //submit.removeEventListener('click', () => {removeForm()});
}

function nameSelection() {
    const twoPlayerScreen2 = document.createElement('div');
    twoPlayerScreen2.innerHTML = '<form action=""><label for="fname">Player 1:</label><input type="text" id="player1" name="player1"><br><br><label for="lname">Player 2:</label><input type="text" id="player2" name="player2"><br><br><input type="submit" value="Submit" id="exit"></form>';
    twoPlayerScreen2.setAttribute('id', 'form1');
    start.appendChild(twoPlayerScreen2);
}

function difficultySelection() {
    const vsComputerScreen2 = document.createElement('div');
    vsComputerScreen2.innerHTML = '<form action=""><label for="cars">Choose a car:</label><select id="cars" name="cars"><option value="volvo">Volvo</option> <option value="saab">Saab</option></select><br><br><input type="submit" value="Submit" id="exit"></form>'
    vsComputerScreen2.setAttribute('id', 'form2');
    start.appendChild(vsComputerScreen2);
}

//function removeForm() {
    //h1.removeChild(start);
}