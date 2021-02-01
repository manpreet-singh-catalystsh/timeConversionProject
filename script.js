//will rotate clock hands at angles proportionately wrt time.

//drawing clock
document.getElementById("clock1").style.backgroundColor="#123";

var c = document.getElementsByClassName("clockface")[0];
var ctx = c.getContext("2d");
ctx.fillStyle="#FFF";
ctx.fillRect(c.width/2 -5,c.height/2 -5,10,10);

////

var ctime = new Date();



var clk1 = document.getElementById("clock1");

setInterval(()=>{
                    console.log(getTime(0));
                    clockUpdate(clk1,getTime(0));
                },1000);



////function to update clock ui... arguments (clock id and time)
function clockUpdate(clock,time)
{
    var sec = time.getSeconds();
    var min = time.getMinutes();
    var hr = time.getHours();
    var rsec = sec*6;
    var rmin = min*6;
    var rhr = hr*15/2;
    clock.childNodes[7].style.transform=`rotate(${rsec}deg)`;
    clock.childNodes[5].style.transform=`rotate(${rmin}deg)`;
    clock.childNodes[3].style.transform=`rotate(${rhr}deg)`;
}



/////function to get current time with argument (0-3.... forclock number)

function getTime(clockno)
{
    let i = parseInt(clockno);

    switch(i)
    {
        case 0:
             return new Date();
        case 1:
        
        case 2:
        
        case 3:

        default :
            window.alert("error getting time....");
    }
}