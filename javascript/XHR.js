var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function() {
    if(XHR.readyState == 4) { // checking if the request is done
        if(XHR.status == 200) { // checking if the request was successfull
            console.log(XHR.responseText);
        } else {
            console.log("There was a problem.");
        }
    }
}
XHR.open("GET", "https://api.github.com/zen");
XHR.send();
