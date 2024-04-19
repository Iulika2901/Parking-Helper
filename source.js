// Funcție pentru afișarea numelui și dimensiunilor autovehiculului
try{
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


class User{
    setname(name,age,car)
    {
        this.name=name
        this.car=car
        this.age=age
    }
    speak(name){
        if(this.name!==undefined)
        console.log('hello, ${name}!')
    }
}
const thing = new User()
thing.setname("Marc",20,"Audi x3")
this.speak()


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





//afisez data si cea mai apropiata parcare folosind formula distantei dintre 2 puncte
function show_Date_Parking()
{
const date = {
    "year" : "2",
    "month" : "2",
    "day" : "2",
    "mname" : "a ",
    month_name(month){
        if(month == 0) mname = "January";
        if(month == 1) mname = "February";
        if(month == 2) mname = "March";
        if(month == 3) mname = "April";
        if(month == 4) mname = "May";
        if(month == 5) mname = "June";
        if(month == 6) mname = "July";
        if(month == 7) mname = "August";
        if(month == 8) mname = "September";
        if(month == 9) mname = "October";
        if(month == 10) mname = "November";
        if(month == 11) mname = "December";
        
    }
}

let d=new Date(2024,5,27)
year=d.getFullYear()
month=d.getMonth()
day=d.getFullDay()   
var message = "today is " + year + " " + month + day+ ":";
var outputElement = document.getElementById("outputName");
outputElement.innerText = message; 
outputElement.classList.add("h2-font"); 

//delete d[year]; delete d[month]; pot sterge doar proprietati
const{day}=date;
var message = "today, " + day + " is a full day, in trafic";
var outputElement = document.getElementById("outputName");
outputElement.innerText = message;
outputElement.classList.add("h2-font");

let number = Math.randoom()%60;
let number2=Math.randoom()%23;
var message = "in" + day + "hours and " + minutes + "minutes we estimate that you can find more parking places ";
var outputElement = document.getElementById("outputName");

number = Math.randoom()%10;
number2=Math.randoom()%10;
let rez=Math.sqrt(number**number + number2**number2);
Math.ceil(rez);
var message = "in" + rez + "meters is the nearest parking";
var outputElement = document.getElementById("outputName");

}
var a=10;


const buton = document.getElementById('buton');
const name = document.getElementById('name');

function traffic() {
  fetch('https://www.politiadefrontiera.ro/ro/traficonline/?vt=1&vw=2')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      name.innerHTML = `<em>${data}</em>`; // Înlocuiți 'data' cu datele dorite din răspunsul JSON
    })
    .catch(error => {
      console.error('Eroare:', error);
      name.innerHTML = `<em>Eroare la încărcare</em>`;
    });
}

buton.addEventListener('click', (e) => {
  e.preventDefault();
  name.innerHTML = `<em>Loading...</em>`;
  const random = Math.ceil(Math.random() * 10); // Am corectat eroarea de scriere și de formulă pentru obținerea unui număr aleatoriu
  traffic(); // Apelul funcției 'traffic' pentru a face cererea la apăsarea butonului
});
}

}


const avegarge_parking = (list) =>
{

}




}
catch(error)
{
    console.warn("error");
    a+=1;

}
finally{
    if(a===10) console.log("no errors")
     else console.log("you have errors");
}