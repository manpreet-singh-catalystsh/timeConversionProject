//---Logic : Rotating clock hands at proportionate angles wrt time.


// analog clock elements
var clk1 = document.getElementById("clock1");
var clk2 = document.getElementById("clock2");
var clk3 = document.getElementById("clock3");
var clk4 = document.getElementById("clock4");

//digital clock elements
var dclk1 = document.getElementById("dclock1");
var dclk2 = document.getElementById("dclock2");
var dclk3 = document.getElementById("dclock3");
var dclk4 = document.getElementById("dclock4");

//--------------clock face designing using canvas---------------------
var designc1 = clk1.childNodes[1].getContext("2d");
var designc2 = clk2.childNodes[1].getContext("2d");
var designc3 = clk3.childNodes[1].getContext("2d");
var designc4 = clk4.childNodes[1].getContext("2d");


//to draw markers on clock face
markers(designc1);
markers(designc2);
markers(designc3);
markers(designc4);

function markers(design)
{
    design.beginPath();
    design.fillRect(145,70,10,10);

    design.lineWidth = 2;
    design.strokeStyle="#FFF";
    design.moveTo(150,0);
    design.lineTo(150,8);
    design.stroke();

    design.moveTo(229,9);
    design.lineTo(220,18);
    design.stroke();

    design.moveTo(285,33);
    design.lineTo(267,42);
    design.stroke();

    
    design.moveTo(76,9);
    design.lineTo(85,18);
    design.stroke();

    design.moveTo(15,35);
    design.lineTo(33,43);
    design.stroke();

    design.moveTo(300,75);
    design.lineTo(280,75);
    design.stroke();

    design.moveTo(225,140);
    design.lineTo(216,132);
    design.stroke();

    design.moveTo(280,115);
    design.lineTo(260,108);
    design.stroke();

    design.moveTo(150,150);
    design.lineTo(150,140);
    design.stroke();

    design.moveTo(0,75);
    design.lineTo(20,75);
    design.stroke();
    
    design.moveTo(75,140);
    design.lineTo(85,130);
    design.stroke();

    design.moveTo(20,115);
    design.lineTo(40,108);
    design.stroke();
}
var rotation=0;
//calling clockupdate for all clocks at interval of 1 sec
setInterval(()=>{
                    clockUpdate(clk1,dclk1,getTime(0));
                    clockUpdate(clk2,dclk2,getTime(1));
                    clockUpdate(clk3,dclk3,getTime(2));
                    clockUpdate(clk4,dclk4,getTime(3));
                    if(new Date().getSeconds()==59)     // -- to stop seconds hands from going counter clockwise after 360deg
                        rotation++;
                },1000);

////function to update clock ui... arguments (clock id and time)
function clockUpdate(clock,dclock,time)
{
    var sec = time.getSeconds() ;
    var min = time.getMinutes();
    var hr = time.getHours();
    var rsec = (sec*6);
    var rmin = min*6;
    var rhr = hr*30+min/2;

    clock.childNodes[7].style.transform=`rotate(${rsec+360*rotation}deg)`;
    clock.childNodes[5].style.transform=`rotate(${rmin}deg)`;
    clock.childNodes[3].style.transform=`rotate(${rhr}deg)`;

    //------------------------For Digital display -----------------//
    let notation="AM";
    if(hr>12)
    {
       hr=hr-12;
       notation="PM";
    }
    else if(hr==0)
    {
        hr=12;
    }

    dclock.innerHTML = (hr+" : "+min+" : "+sec+" "+notation);
}

/////function to get current time with argument (0-3.... for clock number)
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
            return dt;
        case 2:
            dt.setMinutes(dt.getMinutes() + 7*60);          //for Syberia
            return dt;
        case 3:
            return dt;                                      //for london...... GMT only
        default :
            window.alert("Something is wrong with time....");
    }
}