function showName() {
  var vehicleName = document.getElementById("name").value;
  var size = document.getElementById("size").value; 

  site = size.trim(); //no extra spaces
  size=size.toLowerCase();
  
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

function reload() {
  var parkingItems = document.querySelectorAll(".parking-item");
  parkingItems.forEach(function(item) {
      item.querySelector("h2").innerText = "Loading...";
      item.querySelectorAll("li").forEach(function(li) {
          li.innerText = "";
      });
  });

  function total_places(list) {
    let total = 0; 

    for (let i = 0; i < list.length; i++) {
        total += Number(list[i]); 
    }

    return total;
  }

/*
or funnction total_places(...number)
{let total=0;
  for(index in number)
  total+=inumber[index]
}

*/

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