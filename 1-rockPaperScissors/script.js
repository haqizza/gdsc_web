const paperPath = './img/paper.png'
const rockPath = './img/rock.png'
const scissorsPath = './img/scissors.png'
const questionPath = './img/paper.png'

var player = 0;
var opponent = 0;

var yourHand = document.querySelector('#yourHand');
var opponentsHand = document.querySelector('#opponentsHand');


const start = () => {
    let mainContainer = document.querySelector('#home');
    let gameContainer = document.querySelector('#board');
    
    mainContainer.setAttribute('hidden', true);
    gameContainer.removeAttribute('hidden');
}

const choose = (val) => {

    yourHand.classList.remove('bg-green', 'bg-red', 'bg-gray')
    opponentsHand.classList.remove('bg-green', 'bg-red', 'bg-gray');

    player = val;
    yourHand.setAttribute('src', setHand(val));

    goForOpponent();

    judge();
    console.log(player + ' : ' + opponent);
}

const setHand = (val) => {
    if (val % 3 == 0) {

        return paperPath;
    }
    else if (val % 2 == 0){
        return  rockPath;
    }
    else {
        return scissorsPath;
    };
}

const goForOpponent = () => {    
    let r = parseInt(Math.random() * 100);

    opponent = (r % 3 == 0) ? 3 
        : (r % 2 == 0) ? 2 
            : 1;
    
    opponentsHand.setAttribute('src', setHand(r));
}

const judge = () => {
    player == opponent ?
        win(0)
        :
        ((player == 3 && opponent == 2) || (player == 2 && opponent == 1) || (player == 1 && opponent == 3)) ?
            win(1) : win(2)
}

const win = (val) => {
    val == 0 ?
        (yourHand.classList.add('bg-gray'),
        opponentsHand.classList.add('bg-gray'))
        :
        val == 1 ?
            (yourHand.classList.add('bg-green'),
            opponentsHand.classList.add('bg-red'))
            :
            (yourHand.classList.add('bg-red'),
            opponentsHand.classList.add('bg-green'));
}


const reset = () => {
    window.location.reload();
}