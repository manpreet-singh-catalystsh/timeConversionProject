//will rotate clock hands at angles proportionately wrt time.

//drawing clock
document.getElementById("clock1").style.backgroundColor="#123";

var c = document.getElementsByClassName("clockface")[0];
var ctx = c.getContext("2d");
ctx.fillStyle="#FFF";
ctx.fillRect(c.width/2 -5,c.height/2 -5,10,10);