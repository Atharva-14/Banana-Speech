var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/groot.json"

function getTranslation(input) {
    return serverUrl + "?" + "text=" + input
}

function errorHandler(error){
    console.log("Error Occured", error);
    alert("Something wrong with the server! Try again after some time")
}

function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslation(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)