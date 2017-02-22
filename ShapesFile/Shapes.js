
var maxZ = 1;   // Global var: initial z-index of shape that gets clicked
//changed maxZ to 1 from 1000, just to see if it really would do the same thing like you said in class, and it does. lol
var maxX = 570;
//changed from 600 to 570 to keep all shapes within x dimension elementarea confines, since I made the shapes larger (see below)
var maxY = 155;
//Same here, for y directions

//This function gets called once when the page loads as it implies
//here we will do our button initializiation and add all our initial
//elements
window.onload = function() {
	var pink = document.getElementById("valentine");
	pink.onclick = pinkShapes;
	var separate = document.getElementById("organize");
	separate.onclick = organizeShapes;
	var pastel = document.getElementById("pastels");
	pastel.onclick = pastelShapes;
    var addS = document.getElementById("addSquare");
    addS.onclick = addSquare;
    var addC = document.getElementById("addCircle");
    addC.onclick = addCircle;
    var colors = document.getElementById("colors");
    colors.onclick = changeColors;
    var clear = document.getElementById("clear");
    clear.onclick = clearShapes;
  
  // create several randomly positioned squares
  var elementsCount = parseInt(Math.random() * 2) + 10;
  //changed random #'s so less shapes appear at first
  for (var i = 0; i < elementsCount; i++) {
  	   var randWidth = parseInt(Math.random() * 95) + 50;
	   //changed from "Math.random() * 40" to 95 to get more variation in size, and changed "+40" to 50, so shapes won't be wider than tall (on the average)
  	   var randHeight = parseInt(Math.random() * 95) + 50;
	   //same here, exept applied to height of objects, instead of width
    addShapes(randWidth, randHeight);
  }
};

// Creates and adds a new square div to the page.
function pinkShapes() {
  var elementArea = document.getElementById("shapesarea");
  var elements = elementArea.getElementsByTagName("div");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = getRandomPinks();
  }
}

function getRandomPinks() {
  var letters = "0123456789abcdef";
  var result = "#FF";
  for (var i = 0; i < 4; i++) {
    result += letters.charAt(parseInt(Math.random() * letters.length));
  }
  return result;
}

function organizeShapes() {
  var elementArea = document.getElementById("shapesarea");
  var elementSquare = elementArea.getElementsByClassName("square");
  var elementCircle = elementArea.getElementsByClassName("circle");
  for (var i = 0; i < elementSquare.length; i++) {
    elementSquare[i].style.left = parseInt(200 + "px");
  }
  for (var i = 0; i < elementCircle.length; i++) {
    elementCircle[i].style.left = parseInt(500 + "px");
  }
}

function pastelShapes() {
  var elementArea = document.getElementById("shapesarea");
  var elements = elementArea.getElementsByTagName("div");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = getPastels();
  }
}
 
function getPastels() {
  var letters = "abcdef";
  var result = "#";
  for (var i = 0; i < 6; i++) {
    result += letters.charAt(parseInt(Math.random() * letters.length));
  }
  return result;
}

function addShapes(randW, randH) {
  var square = document.createElement("div");
  square.className = "square";
  square.style.left = parseInt(Math.random() * maxX) + "px";
  square.style.top = parseInt(Math.random() * maxY) + "px";
  square.style.backgroundColor = getRandomColor();
  square.style.width = randW;
  square.style.height = randH;
  square.onclick = squareClick;

  var elementArea = document.getElementById("shapesarea");
  elementArea.appendChild(square);

  var circle = document.createElement("div");
  circle.className = "circle";
  //target the usually css defined properties, so we give it a string 342px or something
  circle.style.left = parseInt(Math.random() * maxX)+ "px";
  circle.style.top = parseInt(Math.random() * maxY) + "px";
  circle.style.backgroundColor = getRandomColor();
  circle.style.width = randW;
  circle.style.height = randH;
  circle.onclick = squareClick;

  var elementArea = document.getElementById("shapesarea");
  elementArea.appendChild(circle);
}

// Gives a new randomly chosen color to every element on the page.
function changeColors() {
  var elementArea = document.getElementById("shapesarea");
  var elements = elementArea.getElementsByTagName("div");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = getRandomColor();
  }
}

// Gives a new randomly chosen color to every square on the page.
function changeSquareColors() {
  var elementArea = document.getElementById("shapesarea");
  var elements = elementArea.getElementsByTagName("div");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = getRandomColor();
  }
}

// Gives a new randomly chosen color to every square on the page.
function changeCircleColors() {
  var elementArea = document.getElementById("shapesarea");
  var elements = elementArea.getElementsByTagName("div");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = getRandomColor();
  }
}



// Creates and adds a new square div to the page.
function addSquare() {
  var square = document.createElement("div");
  square.className = "square";
  square.style.left = parseInt(Math.random() * 610) + "px";
  square.style.top = parseInt(Math.random() * 195) + "px";
  //modified the random # here to accomodate the new random size generator for the add square button, so they won't run over the elements area
  square.style.backgroundColor = getRandomColor();
  var randW = parseInt(Math.random() * 100) + 5;
  var randH = parseInt(Math.random() * 100) + 5;
  //changed the above two lines to get even more random sizes from square add button
  square.style.width = randW;
  square.style.height = randH;
  square.onclick = squareClick;

  var elementArea = document.getElementById("shapesarea");
  elementArea.appendChild(square);
}

function clearShapes() {
//TODO: find a way to clear all shapes inside the shape area
var elementArea = document.getElementById("shapesarea");
//get all things that are divs inside the elementsarea, loop through them
var elements = elementArea.getElementsByTagName("div");
for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "#ffffff";
    elements[i].style.border = "white";
  }
}

// Creates and adds a new circle div to the page.
function addCircle() {
  var circle = document.createElement("div");
  circle.className = "circle";
  circle.style.left = parseInt(Math.random() * 610) + "px";
  circle.style.top = parseInt(Math.random() * 195) + "px";
  //again, changed random location generator for add circle button so circles still appear within element area
  circle.style.backgroundColor = getRandomColor();
  var randW = parseInt(Math.random() * 100) + 5;
  var randH = parseInt(Math.random() * 100) + 5;
  //also changed random size generator for circles, to get a wider range of sizes (both large and small)
  circle.style.width = randW;
  circle.style.height = randH;
  circle.onclick = squareClick;

  var elementArea = document.getElementById("shapesarea");
  elementArea.appendChild(circle);
}

// Generates and returns a random color string such as "#f08a7c".
function getRandomColor() {
  var digits = "0123456789abcdef";
  var result = "#";
  for (var i = 0; i < 6; i++) {
    result += digits.charAt(parseInt(Math.random() * (digits.length - 8)));
	//changed from "letters.length" so the color range of the shapes is more muted and dark
  }
  return result;
}

// Called when a square is clicked; moves it to the top or removes it.
function squareClick() {
  var oldZ = parseInt(this.style.zIndex);
  if (oldZ === maxZ) {
    this.parentNode.removeChild(this);   // square is on top; remove it
  } else {
    maxZ++;
    this.style.zIndex = maxZ;
  }

}
