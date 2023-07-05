let firstCard;
let secondCard;
let sum;
var anothercard;
var playing=true;
var x=10;
var button=document.getElementById("start-btn2")


function getRandomIntInclusive(min, max) {

    return Math.round(Math.random()*(max-min)+min)
}

num1=document.getElementById("cards")
num2=document.getElementById("cards2")
num3=document.getElementById("sum")
function getAnothercard(){
    firstCard=getRandomIntInclusive(2,11)
    secondCard=getRandomIntInclusive(2,11)
    
    sum=firstCard+secondCard
    num1.innerHTML=firstCard+" "+secondCard
    num3.innerHTML="Sum: "+sum
}


let message3=document.getElementById("message-el");
let message=document.getElementById("message-el2");
let message1="";
let message4="";
function startGame(){
playing=true;
getAnothercard();

if(sum<=20){message1="Do you want to draw another card?";message4="Playing";}
else if (sum===21){message1="Congrats! BlackJack!";}
else{message1="Defeat."; }

message.innerHTML=message1;
message3.innerHTML=message4;
}
var message2="";

function startGame2(){
  if(playing){
    anothercard=getRandomIntInclusive(2,11)
    sum+=anothercard;
    num1.innerHTML+=" "+anothercard;
    let message4="";
    if(sum<=20){message2="Do you want to draw another card?";message4="Playing"; }
    else if (sum===21){message2="Congrats! BlackJack!"; playing=false;message4="Press 'Button' for another game";}
    else{message2="Defeat."; playing=false;message4="Press 'Button' for another game";} 

    message3.innerHTML=message4;
 num3.innerHTML="Sum: "+sum
message.innerHTML=message2;}

   
}







//do 42.50 lesson
//how to make a counter that doesnt repeat numbers
//the exercises from the book 
//image selection arrays
//when clicking on a link make an  alert message
//Displaying a Random Image when the Page Loads
// array, for function, repeating code in a new function