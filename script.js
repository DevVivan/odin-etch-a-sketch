let gridContainer = document.querySelector('.grid-container');
const blackButton = document.querySelector('.color-black');
const eraserButton = document.querySelector('.eraser');
const resetButton = document.querySelector('.reset');
const menuButtons = document.querySelector('.menu-button')
let slider = document.querySelector('.slider');
const output = document.querySelector(".value");
let gridBoxes;
let gridHeight = 500;
let gridWidth = 500;
let cellHeight;
let cellWidth;

output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
}

function createGrid (side) {
    for (let i = 0; i < (side * side); i++) {
        let gridBoxCreation = document.createElement('div');
        gridBoxCreation.classList.add("grid-box");
        gridContainer.appendChild(gridBoxCreation);
    }
} 

 slider.addEventListener("change", () => {
    gridBoxes = document.querySelectorAll('.grid-box');
    let outputValue = parseInt(output.innerHTML);
    cellHeight = (gridHeight/outputValue);
    cellWidth = (gridHeight/outputValue);
    createGrid(outputValue);
    removeGrid();
    for (let a = 0; a < (gridBoxes.length); a++) {
        gridBoxes.style.height = `${cellHeight}px`;
        gridBoxes.style.width = `${cellWidth}px`;
    }
 })

function makeColorBlack() {
    let gridBoxes = document.querySelectorAll('.grid-box');
    for (let j = 0; j < (gridBoxes.length); j++) {
        gridBoxes[j].addEventListener('mouseover', () => {
            gridBoxes[j].classList.add('black');
        })
    };
}

function erase() {
    let gridBoxes = document.querySelectorAll('.grid-box');
    for (let k = 0; k < (gridBoxes.length); k++) {
        gridBoxes[k].addEventListener('mouseover', () => {
            gridBoxes[k].classList.add('erase');
        })
    };
}

createGrid(parseInt(output.innerHTML));
makeColorBlack();
