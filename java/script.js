const container = document.querySelector(".container");

function handleMouseDown() {
    this.style.backgroundColor = "blue";
  }

function handleMouseOver() {
    if (mousedown) {
      this.style.backgroundColor = "blue";
      container.appendChild(this.cloneNode(true));
    }
}
let mousedown = false;

//Create 16*16 grid of divs

for (let i = 1; i <= 100*100; i++){
    const div = document.createElement("div");
    div.className = "square";
    container.appendChild(div)+i; 

    div.addEventListener("mousedown", handleMouseDown);

    div.addEventListener("mouseover", handleMouseOver);

    document.addEventListener("mouseup", function() {
      mousedown = false;
    });
  }

  document.addEventListener("mousedown", function() {
    mousedown = true;
  });
