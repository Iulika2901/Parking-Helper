// Funcție pentru afișarea numelui și dimensiunilor autovehiculului
function showName() {
    var vehicleName = document.getElementById("name").value;
    var size = document.getElementById("size").value; 

    size = size.trim(); // Eliminarea spațiilor suplimentare
    size = size.toLowerCase();
    
    var message = "Welcome back! We found a parking spot for your " + size + " " + vehicleName + ".";
    var outputElement = document.getElementById("outputName");
    outputElement.innerText = message;
    outputElement.classList.add("h2-font");

    var size_nr = size.search("mx"); // Verificare dimensiune
    var length = 0; 
    var width = 0;
    var words = size.split("x");
    length = words[0]; 
    width = words[1];
    console.log(length, width);
}

// Funcție pentru reîncărcarea listei de parcări
function reload() {
    var parkingItems = document.querySelectorAll(".parking-item");
    parkingItems.forEach(function(item) {
        item.querySelector("h2").innerText = "Loading...";
        item.querySelectorAll("li").forEach(function(li) {
            li.innerText = "";
        });
    });

    setTimeout(function() {
        parkingItems.forEach(function(item) {
            var parkingName = item.dataset.originalName;
            item.querySelector("h2").innerText = parkingName;
            item.querySelectorAll("li").forEach(function(li) {
                li.innerText = "";
            });
        });
    }, 3000);
}

// Afișează un mesaj de încărcare când pagina este încărcată complet
window.onload = function() {
    alert("Page is loading...");
};

// Afișează un mesaj atunci când utilizatorul încearcă să părăsească pagina
window.onbeforeunload = function() {
    alert("You are leaving the page");
    console.log("Before unload");
    return "Are you sure you want to leave?";
};

function showDate()
{
const date = {
    "year" : "2",
    "month" : "2",
    "day" : "2"
}

 let d=new Date(2024,5,27)
year=d.getFullYear()
month=d.getMonth()
day=d.getFullDay()   
var message = "today is " + year + " " + month + day+ ":";
var outputElement = document.getElementById("outputName");
outputElement.innerText = message;
outputElement.classList.add("h2-font");

const{day}=date;
var message = "today, " + day + " is a full day, in trafic";
var outputElement = document.getElementById("outputName");
outputElement.innerText = message;
outputElement.classList.add("h2-font");

}
