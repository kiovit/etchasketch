// Define the logic for coloring a square
function handleMouseDown() {
    this.style.backgroundColor = "blue";
  }

function handleMouseOver() {
    if (mousedown) {
      this.style.backgroundColor = "blue";
    }
}

// Mobile functions
function handleTouchMove() {
  this.style.backgroundColor = "blue"}

let mousedown = false;

// We need to get the number of suqares the user wants

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
  return userPrompt;
}

let userInput = getUserInput();

const container = document.querySelector(".container");
container.style.gridTemplateColumns = 'repeat(' + userInput + ', 1fr)';

//Function that creates the grid

for (let i = 1; i <= userInput*userInput; i++){
    const div = document.createElement("div");
    div.className = "square";
    container.appendChild(div); 

    div.addEventListener("mousedown", handleMouseDown);

    div.addEventListener("mouseover", handleMouseOver);
    // Mobile event listener
    div.addEventListener("touchmove", handleTouchMove);


    document.addEventListener("mouseup", function() {
      mousedown = false;
    });
  }

  document.addEventListener("mousedown", function() {
    mousedown = true;
  });
