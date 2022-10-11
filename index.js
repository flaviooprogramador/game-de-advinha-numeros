let computerNumber 
let userNumbers = []
let attempts1 = 0
let maxguesses = 10
let Num100 = 100

function newGame(){
    window.location.reload()   
}


function init() {
  computerNumber =  Math.floor(Math.random() * 100 + 1) 


}

function computerNumbers(){
   const userNumber =  Number(document.getElementById('inputBox').value)
   userNumbers.push(' ' + userNumber)
   document.getElementById('guesses').innerHTML = userNumbers


if(attempts1 < maxguesses){

     if ( userNumber > computerNumber){
    document.getElementById('textOutput').innerHTML = 'your number is too high'
    document.getElementById('inputBox').value = ''
    attempts1++
    document.getElementById('attempts').innerHTML = attempts1 


   }

    if (userNumber >  Num100){
    document.getElementById('textOutput').innerHTML = 'can not number above one hundred, please enter number, 0 to 100'
    document.getElementById('inputBox').value = ''
    attempts1++
    document.getElementById('attempts').innerHTML = attempts1 

   }

   
   else if (userNumber < computerNumber){
    document.getElementById('textOutput').innerHTML = 'your number is too low'
    document.getElementById('inputBox').value = ''
    attempts1++
    document.getElementById('attempts').innerHTML = attempts1 
   }

   

   else {
    document.getElementById('textOutput').innerHTML = 'Congratulation, you win'
    attempts1++
    document.getElementById('attempts').innerHTML = attempts1 
    document.getElementById('inputBox').setAttribute('Readonly','Readonly')
   }

}
 else{
    document.getElementById('textOutput').innerHTML = 'GAME OVER: result:'  +  computerNumber
    document.getElementById('inputBox').value = ''
    document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')


}
}


