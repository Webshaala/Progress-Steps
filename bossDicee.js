let diceRandomNumberOne = Math.floor((Math.random() * 6) + 1);

let diceRandomNumberTwo = Math.floor((Math.random() * 6) + 1);

let player1 = diceRandomNumberOne;

let player2 = diceRandomNumberTwo;

// let decideNow = document.querySelector("button");
// decideNow.addEventListener("load", decideNow);

// function decideNow(){
//   diceImageOne();
//   diceImageTwo();
//   whosWinner();
// }
// decideNow();

function diceImageOne(diceRandomNumberOne){
  for(let i = 1; i <= diceRandomNumberOne; i++){
    if (i === diceRandomNumberOne){
      document.querySelector("img.diceimage6_1").setAttribute("src", "dice" + [i] + ".png");
    }
  }
}


  function diceImageTwo(diceRandomNumberTwo){
    for(let i = 1; i <= diceRandomNumberTwo; i++){
      if (i === diceRandomNumberTwo){
        document.querySelector("img.diceimage6_2").setAttribute("src", "dice" + [i] + ".png");
      }
    }
  }


  function whosWinner(p1, p2) {
    if(diceRandomNumberOne > diceRandomNumberTwo){
      document.querySelector("h1").textContent = "🚩 Player 1 Wins";
      document.querySelector(".player2").textContent = "";
    }
    else if(diceRandomNumberOne < diceRandomNumberTwo){
      document.querySelector("h1").textContent = "Player 2 Wins 🚩";
      document.querySelector("h3").textContent = "";
    }
    else {
      document.querySelector("h1").textContent = "Draw!";
      document.querySelector("h3 h3").textContent = "";
    }
  }
// if (dice === 1){
//    document.querySelector("img.diceimage6_1").setAttribute("src", "dice1.png");
// }
// else if(dice === 2) {
//     document.querySelector("img.diceimage6_1").setAttribute("src", "dice2.png");
// }
// else if(dice === 3) {
//     document.querySelector("img.diceimage6_1").setAttribute("src", "dice3.png");
// }
// else if(dice === 4){
//     document.querySelector("img.diceimage6_1").setAttribute("src", "dice4.png");
// }
// else if(dice === 5) {
//    document.querySelector("img.diceimage6_1").setAttribute("src", "dice5.png");
// }
// else {
//    document.querySelector("img.diceimage6_1").setAttribute("src", "dice6.png");
// }

diceImageOne(diceRandomNumberOne);
diceImageTwo(diceRandomNumberTwo);
whosWinner(player1, player2);


console.log("Dice One Values: " + diceRandomNumberOne);
console.log("Dice Two Values: " + diceRandomNumberTwo);
