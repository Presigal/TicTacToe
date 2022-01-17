//initializing the values we are going to be reading from the HTML file. We need this section as to provide visual feedback as to how the game is going.
let squareOne = document.querySelector('#squareOne')
let headTwo = document.querySelector('#squareTwo')
let headThree = document.querySelector('#squareThree')
let squareFour = document.querySelector('#squareFour')
let squareFive = document.querySelector('#squareFive')
let squareSix = document.querySelector('#squareSix')
let squareSeven = document.querySelector('#squareSeven')
let squareEight = document.querySelector('#squareEight')
let squareNine = document.querySelector('#squareNine')
let playAgainButton = document.querySelector('#playAgain')

//This will serve the foundation to the actual game.
//we want the user to play against the "computer" and this array will represent each square on the board.
squareValues = [false, false, false, false, false, false, false, false, false]
computerPlayArray = {1: function() {
  squareOne.textContent = "O";
  squareOne.style.color = 'blue';
},
2: function() {
  squareOne.textContent = "O";
  squareOne.style.color = 'blue';
}, 3: function() {
  squareOne.textContent = "O";
  squareOne.style.color = 'blue';
},4: function() {
  squareOne.textContent = "O";
  squareOne.style.color = 'blue';
},5: function() {
  squareOne.textContent = "O";
  squareOne.style.color = 'blue';
},6: function() {
  squareOne.textContent = "O";
  squareOne.style.color = 'blue';
},7: function() {
  squareOne.textContent = "O";
  squareOne.style.color = 'blue';
},8: function() {
  squareOne.textContent = "O";
  squareOne.style.color = 'blue';
}, 9: function() {
  squareOne.textContent = "O";
  squareOne.style.color = 'blue';
}}

//This function will serve as the "computer playing"
//In reality, its just a random number generator. It will either be the easiest game or the hardest game of your life. Who knows!
//This function will take a random integer from 0-8, representing a square on the board.
//Once it picks it's choice, it will check to see if that button has already been pressed. If so, it shall draw again.
function computerPlayer() {
  const randomNumber = Math.floor(Math.random() * 10)
  if (squareValues[randomNumber] == false) {
    computerPlayArray.randomNumber();
    squareValues[randomNumber] = true;
  }

}




//These functions serve as to what button was pressed in the game by the user.
squareOne.addEventListener('click', function(){
  squareOne.textContent = "X";
  squareOne.style.color = 'red';
  squareValues[0] = true;
  computerPlayer();

})
squareTwo.addEventListener('click', function(){
  squareTwo.textContent = "X";
  squareTwo.style.color = 'red';
  squareValues[1] = true;
  computerPlayer();
})
squareThree.addEventListener('click', function(){
  squareThree.textContent = "X";
  squareThree.style.color = 'red';
  squareValues[2] = true;
})
squareFour.addEventListener('click', function(){
  squareFour.textContent = "X";
  squareFour.style.color = 'red';
  squareValues[3] = true;
})
squareFive.addEventListener('click', function(){
  squareFive.textContent = "X";
  squareFive.style.color = 'red';
  squareValues[4] = true;
})
squareSix.addEventListener('click', function(){
  squareSix.textContent = "X";
  squareSix.style.color = 'red';
  squareValues[5] = true;
})
squareSeven.addEventListener('click', function(){
  squareSeven.textContent = "X";
  squareSeven.style.color = 'red';
  squareValues[6] = true;
})
squareEight.addEventListener('click', function(){
  squareEight.textContent = "X";
  squareEight.style.color = 'red';
  squareValues[7] = true;
})
squareNine.addEventListener('click', function(){
  squareNine.textContent = "X";
  squareNine.style.color = 'red';
  squareValues[8] = true;
})

//If the user wishes to play again, this button will clear the board, along with the values of squareValues
playAgainButton.addEventListener('click', function(){
  squareOne.style.color = 'black';
  squareTwo.style.color = 'black';
  squareThree.style.color = 'black';
  squareFour.style.color = 'black';
  squareFive.style.color = 'black';
  squareSix.style.color = 'black';
  squareSeven.style.color = 'black';
  squareEight.style.color = 'black';
  squareNine.style.color = 'black';
  squareOne.textContent ="";
  squareTwo.textContent = "";
  squareThree.textContent = "";
  squareFour.textContent = "";
  squareFive.textContent = "";
  squareSix.textContent = "";
  squareSeven.textContent = "";
  squareEight.textContent = "";
  squareNine.textContent = "";
  for (let i = 0; i < 10; i++){
    squareValues[i] = false;
  }
})
