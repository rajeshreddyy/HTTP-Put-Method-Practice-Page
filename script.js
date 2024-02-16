let userInput = document.getElementById("userInput");
let requestBody = document.getElementById("requestBody");
let sendPutRequestBtn = document.getElementById("sendPutRequestBtn");
let requestStatus = document.getElementById("requestStatus");
let httpResponse = document.getElementById("httpResponse");


sendPutRequestBtn.onclick = function() {
    let reqBody = requestBody.value;
    let input = userInput.value;
    let reqUrl = `https://gorest.co.in/public-api/users${input}`;
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer cac876a104b9b3fdf42b9e2f071e8f655a60e0ac18623de7a0f5f1c786393c7f",
        },
        body: reqBody
    };

    fetch(reqUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            requestStatus.textContent = jsonData.code;
            httpResponse.textContent = JSON.stringify(jsonData.data);
            console.log(jsonData);
            console.log(typeof(jsonData));
        });
    userInput.value = "";
    requestBody.value = "";


};