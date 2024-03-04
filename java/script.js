// Constants for elements and initializations
const body = document.querySelector("body");
const container = document.querySelector(".container");
const toggleSwitch = document.getElementById('toggleSwitch');
const resetButton = document.querySelector(".reset");

// Variable to track if the mouse button is pressed
let mousedown = false;

// Add event listener for mouseup
document.addEventListener("mouseup", () => {
  mousedown = false;
});

// Add event listener for mousedown
document.addEventListener("mousedown", () => {
  mousedown = true;
});

// Add event listener for reset button click
resetButton.addEventListener("click", resetCanvas);

// Function to reset the canvas
function resetCanvas() {
  clearGrid();
  createGrid(userInput);
}

// Function to clear the grid
function clearGrid() {
  container.innerHTML = '';
}

// Function to handle mouse down event
function handleMouseDown() {
  if (mousedown && toggleSwitch.checked) {
    this.style.backgroundColor = getRandomRgb();
  } else if (mousedown) {
    this.style.backgroundColor = "blue";
  }
}

// Function to handle mouse over event
function handleMouseOver() {
  if (mousedown && toggleSwitch.checked) {
    this.style.backgroundColor = getRandomRgb();
  } else if (mousedown) {
    this.style.backgroundColor = "blue";
  }
}

// Function to create the grid
function createGrid(userPrompt) {
  // Set grid template columns
  container.style.gridTemplateColumns = `repeat(${userPrompt}, 1fr)`;

  // Create grid squares
  for (let i = 0; i < userPrompt * userPrompt; i++) {
    const div = document.createElement("div");
    div.className = "square";
    container.appendChild(div);
    div.addEventListener("mousedown", handleMouseDown);
    div.addEventListener("mouseover", handleMouseOver);
  }
}

// Function to get user input for grid size
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

// Function to generate random RGB color
function getRandomRgb() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

// Get initial user input and create grid
const userInput = getUserInput();
