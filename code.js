function BlastoffNotification(){
    console.log("blastoff function started...");
}

function countDown(){
    var currTime = 50;
    document.getElementById("blastOffText").innerHTML = currTime;
    currTime = currTime - 5;

    setTimeout(function(){
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - 5;
    }, 5000);

    setTimeout(function(){
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - 5;
    }, 10000);

    setTimeout(function(){
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - 5;
    }, 15000);

    setTimeout(function(){
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - 5;
    }, 20000);

    setTimeout(function(){
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - 5;
    }, 25000);

    setTimeout(function(){
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - 5;
    }, 30000);

    setTimeout(function(){
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - 5;
    }, 35000);

    setTimeout(function(){
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - 5;
    }, 40000);

    setTimeout(function(){
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - 5;
    }, 45000);

    setTimeout(function(){
        document.getElementById("blastOffText").innerHTML = "blastoff!!";
        currTime = currTime - 5;
    }, 50000);
}
function countDownV2(){
    currTime = 50;
    document.getElementById("countDownRes").innerHTML = currTime;

    for(var i = 0; i <= 10; i++){
        setTimeout(function(){
            if (currTime == 0){document.getElementById("countDownRes").innerHTML = "blastoff!!";}
            else if (currTime < 25){document.getElementById("countDownRes").innerHTML = "Warning Less than ½ way to launch, time left = " + currTime;}
            else{document.getElementById("countDownRes").innerHTML = "time left = " + currTime}

            currTime = currTime - 5;
        }, i * 5000);
    }
}

