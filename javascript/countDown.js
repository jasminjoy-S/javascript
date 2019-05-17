// setInterval example.
// countDown
// Also check for setTimeOut function

function countDown(seconds) {
    var intervalID = setInterval(function(){ // Note: var seconds is not passed to the asyn func
        seconds--;
        if (seconds > 0) {
            console.log("Timer: " + seconds);
        } else {
            clearInterval(intervalID);
            console.log("TimeOut !!!");
        }
    }, 1000)
}

countDown(4);
