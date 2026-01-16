let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let noise = true;
let on = false;
let win;
let topScores = [];

const turnCounter = document.querySelector("#turn");
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const startButton = document.querySelector("#start");

startButton.addEventListener('click', play);

function play(){         
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCount = turn;
    turnCounter.innerHTML = 1;
    good = true;
    om = true;
    
    for (var i = 0; i < 5; i++) {
        order.push(Math.floor(Math.random() * 4) + 1);
    }
    compTurn = true;

    intervalId = setInterval(gameTurn, 1000);
}

function gameTurn(){
    on = false;

    if (flash == turn){
        clearInterval(intervalId);
        compTurn = false;
        clearColor();
        on = true;
    }

    if (compTurn) {
        clearColor();
        setTimeout(() => {
          if (order[flash] == 1) one();
          if (order[flash] == 2) two();
          if (order[flash] == 3) three();
          if (order[flash] == 4) four();
          flash++;
        }, 200);
    }
}

function one() {
    if (noise) {
      let audio = document.getElementById("clip1");
      audio.play();
    }
    noise = true;
    topLeft.style.backgroundColor = "lightgreen";
  }

function two() {
    if (noise) {
      let audio = document.getElementById("clip2");
      audio.play();
    }
    noise = true;
    topRight.style.backgroundColor = "tomato";
}
  
function three() {
    if (noise) {
      let audio = document.getElementById("clip3");
      audio.play();
    }
    noise = true;
    bottomLeft.style.backgroundColor = "yellow";
}
  
function four() {
    if (noise) {
      let audio = document.getElementById("clip4");
      audio.play();
    }
    noise = true;
    bottomRight.style.backgroundColor = "lightskyblue";
}

function clearColor(){
  topLeft.style.backgroundColor = "darkgreen";
  topRight.style.backgroundColor = "darkred";
  bottomLeft.style.backgroundColor = "goldenrod";
  bottomRight.style.backgroundColor = "darkblue";
}


topLeft.addEventListener('click', (event) =>{
    if (on) {
        playerOrder.push(1);
        check();
        one();
        if(!win){
            setTimeout(() =>{
                clearColor();
            }, 300)
        }
    }
})

topRight.addEventListener('click', (event) => {
    if (on) {
      playerOrder.push(2);
      check();
      two();
      if(!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    }
})
  
bottomLeft.addEventListener('click', (event) => {
    if (on) {
      playerOrder.push(3);
      check();
      three();
      if(!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    }
})
  
bottomRight.addEventListener('click', (event) => {
    if (on) {
      playerOrder.push(4);
      check();
      four();
      if(!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    }
})

function showMessage(isWin, score) {
    const modal = document.getElementById("message-modal");
    const messageBox = document.getElementById("message");
    const closeModal = document.getElementById("close-modal");

    updateTopScores(score);

    const topScoresText = topScores
        .map((s, i) => `${i + 1}. ${s || '-'}`)
        .join('<br>');

    if (isWin) {
        messageBox.innerHTML = `You won!<br>Your score: ${score}<br><br>Top 10 scores:<br>${topScoresText}`;
    } else {
        messageBox.innerHTML = `You lost!<br>Your score: ${score}<br><br>Top 10 scores:<br>${topScoresText}`;
    }

    modal.classList.add("show");

    closeModal.onclick = () => {
        modal.classList.remove("show");
    };
}


function updateTopScores(score) {
    topScores.push(score);
    topScores.sort((a, b) => b - a); 
    topScores = topScores.slice(0, 10); 
}


function check() {
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1]) {
        good = false;
    }
    if (playerOrder.length == 5 && good) {
        winGame();
    }

    if (!good) {
        const score = turn - 1; 
        showMessage(false, score); 
        on = false; 
        noise = false;
    }

    if (turn == playerOrder.length && good && !win) {
        turn++;
        playerOrder = [];
        compTurn = true;
        flash = 0;
        turnCounter.innerHTML = turn;
        intervalId = setInterval(gameTurn, 1000);
    }
}


function winGame() {
    on = false;
    win = true;
    const score = 5; 
    showMessage(true, score); 
}

if (typeof module !== "undefined") {
  module.exports = { play, order, playerOrder };
}
