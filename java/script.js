const container = document.querySelector(".container");

//Create 16*16 grid of divs

for (let i = 1; i <= 16*16; i++){
    const div = document.createElement("div");
    div.className = "square";
    container.appendChild(div)+i; 
    }

