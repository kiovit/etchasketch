const body = document.querySelector("body");
let container = document.querySelector(".container");
let userInput = getUserInput();
const toggleSwitch = document.getElementById('toggleSwitch');
// Creates button to clear canvas
let reset = document.querySelector(".reset");
reset.addEventListener("click", function() {
    resetCanvas();
  });

let previousUserInput = userInput;
let mousedown = false;

function resetCanvas() {
  clearGrid()
  createGrid(previousUserInput);
}

function clearGrid() {
  container.innerHTML = '';
}


  // Define the logic for coloring a square
  function handleMouseDown() {
    if (mousedown && toggleSwitch.checked) {
      this.style.backgroundColor = getRandomRgb();
    } else if (mousedown) {
      this.style.backgroundColor = "blue";
    }
  }

  function handleMouseOver() {
    if (toggleSwitch.checked && mousedown) {
      this.style.backgroundColor = getRandomRgb();
    } else if (mousedown) {
      this.style.backgroundColor = "blue";
    }
  }

 // We get the number of suqares the user wants
 
 function createGrid(userPrompt) {
  for (let i = 1; i <= userPrompt * userPrompt; i++) {
    container.style.gridTemplateColumns = 'repeat(' + userPrompt + ', 1fr)';
    const div = document.createElement("div");
    div.className = "square";
    container.appendChild(div);
    div.addEventListener("mousedown", handleMouseDown);
    div.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseup", function () {
    mousedown = false;
    });
  }

  document.addEventListener("mousedown", function () {
    mousedown = true;
  });
}

function getUserInput() {
  let userPrompt;
  
  do {
    userPrompt = prompt("How many squares per side? (20-100)");
    if (userPrompt === null) {
      return null;
    }
    userPrompt = parseInt(userPrompt);
    if (isNaN(userPrompt) || userPrompt < 20 || userPrompt > 100) {
      alert("Please input a number between 20-100");
    }
  } while (isNaN(userPrompt) || userPrompt < 20 || userPrompt > 100);

  createGrid(userPrompt);

  return userPrompt;
 }

 //Function that creates random RGB
  function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
  