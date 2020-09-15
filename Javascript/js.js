
var clicks1 = 0;
var clicks2 = 0;
var clicks3 = 0;
var clicks4 = 0;
var clicks5 = 0;
  function Carone() {    
    var elem1= document.getElementById("img1");
    var elem2= document.getElementById("car1");
    document.getElementById("imgframe").src = elem1.src;
    document.getElementById("carname").innerHTML = elem2.innerText;
    document.getElementById("counter").textContent=++clicks1;
  }
  function Cartwo() {
    var elem1= document.getElementById("img2");
    var elem2= document.getElementById("car2");
    document.getElementById("imgframe").src = elem1.src;
    document.getElementById("carname").innerHTML = elem2.innerText;
    document.getElementById("counter").textContent=++clicks2;
  }
  function Carthree() {
    var elem1= document.getElementById("img3");
    var elem2= document.getElementById("car3");
    document.getElementById("imgframe").src = elem1.src;
    document.getElementById("carname").innerHTML = elem2.innerText;
    document.getElementById("counter").textContent=++clicks3;
  }
  function Carfour() {
    var elem1= document.getElementById("img4");
    var elem2= document.getElementById("car4");
    document.getElementById("imgframe").src = elem1.src;
    document.getElementById("carname").innerHTML = elem2.innerText;
    document.getElementById("counter").textContent=++clicks4;
  }
    function Carfive() {
    var elem1= document.getElementById("img5");
    var elem2= document.getElementById("car5");
    document.getElementById("imgframe").src = elem1.src;
    document.getElementById("carname").innerHTML = elem2.innerText;
    document.getElementById("counter").textContent=++clicks5;
  }
