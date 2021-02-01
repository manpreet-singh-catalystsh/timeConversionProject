//will rotate clock hands at angles proportionately wrt time.

var clk1 = document.getElementById("clock1");
var clk2 = document.getElementById("clock2");
var clk3 = document.getElementById("clock3");
var clk4 = document.getElementById("clock4");

//--------------clock face designing using canvas---------------------

var designc1 = clk1.childNodes[1].getContext("2d");
var designc2 = clk2.childNodes[1].getContext("2d");
var designc3 = clk3.childNodes[1].getContext("2d");
var designc4 = clk4.childNodes[1].getContext("2d");
designc1.fillStyle="#FFF";
designc1.font = "20px Aria";
designc1.fillText("India (GMT+5.30)",60,50);

designc2.fillStyle="#FFF";
designc2.font = "20px Arial";
designc2.fillText("Sydney (GMT+11)",60,50);

designc3.fillStyle="#FFF";
designc3.font = "20px Arial";
designc3.fillText("Siberia (GMT+7)",60,50);

designc4.fillStyle="#FFF";
designc4.font = "20px Arial";
designc4.fillText("London (GMT)",60,50);

setInterval(()=>{
                    //console.log(getTime(0));
                    clockUpdate(clk1,getTime(0));
                    clockUpdate(clk2,getTime(1));
                    clockUpdate(clk3,getTime(2));
                    clockUpdate(clk4,getTime(3));
                },1000);



////function to update clock ui... arguments (clock id and time)
function clockUpdate(clock,time)
{
    var sec = time.getSeconds();
    var min = time.getMinutes();
    var hr = time.getHours();
    var rsec = sec*6;
    var rmin = min*6;
    var rhr = hr*30+min/2;
    clock.childNodes[7].style.transform=`rotate(${rsec}deg)`;
    clock.childNodes[5].style.transform=`rotate(${rmin}deg)`;
    clock.childNodes[3].style.transform=`rotate(${rhr}deg)`;

    //------------------------For Digital display -----------------//
    let notation="AM";
    if(hr>12)
    {
       hr=hr-12;
       notation="PM";
    }
    var digitime=clock.childNodes[1].getContext("2d");
    digitime.fillStyle="#66004b";
    digitime.fillRect(20,80,150,30);
    digitime.font = "20px Arial";
    digitime.fillStyle="#FFF";
    digitime.fillText(hr+":"+min+":"+sec+" "+notation,40,100);
}



/////function to get current time with argument (0-3.... forclock number)
function getTime(clockno)
{
    let i = parseInt(clockno);
    let dt = new Date();
    let offset = dt.getTimezoneOffset();
    dt.setMinutes(dt.getMinutes()+offset);
    switch(i)
    {
        case 0:
            dt.setMinutes(dt.getMinutes() + 5.5*60);        //for India
             return dt;
        case 1:
            dt.setMinutes(dt.getMinutes() + 11*60);         // for sydney
            console.log(dt);
            return dt;
        case 2:
            dt.setMinutes(dt.getMinutes() + 7*60);          //for Syberia
            return dt;
        case 3:
            return dt;                                      //for london...... GMT only
        default :
            window.alert("error getting time....");
    }
}