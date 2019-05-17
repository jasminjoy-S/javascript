var btn = document.querySelector("#btn");
var photo = document.querySelector("#pic");
var fullName = document.querySelector("#name");
var email = document.querySelector("#email");

btn.addEventListener("click", function(){
    fetch('https://randomuser.me/api')
    .then(handleError)
    .then(parseJSON)
    .then(updateProfile)
    .catch(DisplayError);
});

function handleError(res){
    if(!res.ok){
        throw Error(res.status);
    }
    return res;
}

function parseJSON(res){
    return res.json().then(function(parsedData){
        return parsedData.results[0];
    })
}

function updateProfile(data) {
    fullName.innerText = data.name.first + " " + data.name.last;
    email.innerText = data.email;
    photo.src = data.picture.large;
}

function DisplayError(err){
    console.log(err);
}
