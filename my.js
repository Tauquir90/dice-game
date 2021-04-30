
var randomOne = Math.floor((Math.random() * 6)+1);
var randomTwo = Math.floor((Math.random() * 6)+1);
var pasha = "dices/dice-";
var convert1 = String(randomOne);
var convert2 = String(randomTwo);
var total1 = pasha + convert1+".png";
var total2 = pasha + convert2+".png";
document.getElementById("dice-1").src= total1;
document.getElementById("dice-2").src = total2;
//document.getElementById("myImage").src = "cottage_large.jpg";
if (randomOne > randomTwo)
{
  document.querySelector("h1").innerHTML = " 🚩  Player1 Wins!!!";
}
else if (randomTwo > randomOne ){
  document.querySelector("h1").innerHTML= "Player2 Wins!!    🚩";
}
else{
     document.querySelector("h1").innerHTML= "Draw!!   ";
}
