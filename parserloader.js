//"use strict";
fetch("http://localhost/practical/index.php").then(response => {
    return response.text();
}).then(xmlString =>{
    const xmlDocument = new DOMParser().parseFromString(xmlString, "text/xml");
    var food = xmlDocument.querySelector("name").textContent;
    console.log(food);
})

/*var xhttp = new XMLHttpRequest();
xhttp.open("GET", "data.xml", true);
xhttp.responseType = "text";

xhttp.onload = function(){
    var xmlString = xhttp.responseText;
    var xmlDocument = new DOMParser().parseFromString(xmlString, "text/xml");

    console.log(xmlDocument);
}

xhttp.send();*/