console.log("Hello! This is cosole!");
console.warn("console");
function showName() {
    var vehicleName = document.getElementById("name").value;
    var size = document.getElementById("size").value;

    size.trim(); //no extra spaces
    size.toLowerCase();
   
    var message = "Welcome back! We found a parking spot for your " + size + " "+ vehicleName +  ".";
    var outputElement = document.getElementById("outputName");
    outputElement.innerText = message;
    outputElement.classList.add("h2-font");


   var size_nr=size.search("mx");                //size
   var lenght=0; var width=0; var i=0;
 var words=size.split("xm");
 lenght=words[0];
 width=words[1];
console.log(lenght, width);
}