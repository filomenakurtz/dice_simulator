

console.log("Hi Cramer");


let dieRolls = []
let rollButton = document.querySelector('#Roll-button')
let diceInput = document.querySelector('#Number-dice')


rollButton.addEventListener('click', function () {

  console.log("Roll button clicked");
  let diceNumber = Number(diceInput.value);
  console.log(diceNumber)

})


let tot;
do {
  var sides = parseInt(prompt("How many sides are on your die? ", "6"), 10);
} while (isNaN(sides) || sides < 1);
var dice = {
  sides: sides,
  roll: function () {
    let randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

let   img_dado=document.getElementById("img_dado");
const NOME1   ="http://www.valcon.it/javascript/wp-content/uploads/dice-";
const NOME3   =".png";
 
f_dice();
 
function f_dice()
{
   let dice=1+Math.floor(6*Math.random());
   img_dice.src=NOME1+dice+NOME3;
}


function printNumber(number) {
  let span = document.createElement("span");
  span.className = "die";
  let diceroll = document.createTextNode(number);
  span.appendChild(diceroll);
  document.getElementById('dice').appendChild(span);
}

let button = document.getElementById('button');

button.onclick = function () {
  let result = dice.roll();
  printNumber(result);
  var tot = result + tot;
  let printDiceTotal = "Total: " + tot;
  document.getElementById('diceTotal').innerHTML = printDiceTotal;
};


let  a = [1, 2, 3, 4, 5, 6];

let die1 = document.getElementById("die1");
let die2 = document.getElementById("die2");
let numbersLeft = document.getElementById("numbersLeft");


function rollDice() {
  console.log(a);
  if (a.length > 0) {
      let d1 = a[Math.floor(a.length * Math.random())];
      let  d2 = a[Math.floor(a.length * Math.random())];
      die1.innerHTML = d1;
      die2.innerHTML = d2;
  if (d1==d2) {
          console.log(d1);
          let index = a.indexOf(d1);
          if (index > -1) {
              a.splice(index, 1);
          }
      }    
  }
  else { alert('all numbers have been used.'); }  
}
   
  
function reset() {
  a = [1, 2, 3, 4, 5, 6];
  die1.innerHTML = '';
  die2.innerHTML = '';
}



  