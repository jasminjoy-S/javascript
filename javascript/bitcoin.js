var price = document.querySelector("#price");
var btn = document.querySelector("button");

btn.addEventListener("click", function() {
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function() {
        if(XHR.readyState == 4 && XHR.status == 200) {
            price.innerText = JSON.parse(XHR.responseText).bpi.AED.rate + " AED";
        }
    }

    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice/AED.json");
    XHR.send();
});
