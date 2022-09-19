function createDiv (){
    const div = document.createElement('div');
    div.classList.add('grid-div');
    container.appendChild(div);
}

const container = document.querySelector('.container');
let gridSize = 16;

function createGrid(gridSize){
    for (let i = 0; i < gridSize; i++){// make div of gridSize X gridSize
        for(let j = 0; j < gridSize; j++){
            createDiv();
        }
    }
    container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;//add gridSize number of grid column 
}

createGrid(gridSize);

function addHoverClass(element){
    if (element.classList.contains('grid-div')){
        element.classList.add('hover')
    }
}

function changeDivColor(){//change grid-div color when mousedown and hovered
    const divs = document.querySelectorAll('.grid-div');
    let isMouseDown = false;

    container.addEventListener('mousedown', (e)=>{
        isMouseDown = true;
        addHoverClass(e.target);
    })
    container.addEventListener('mouseup', ()=>{
        isMouseDown = false;
    })
    divs.forEach(div => div.addEventListener('mouseover', (e) => {
        if (isMouseDown){
            addHoverClass(e.target);
        }
    }))
}
changeDivColor();

const btn = document.querySelector('.btn');
btn.addEventListener('click', ()=>{//changes grid based on the user input
    gridSize = prompt('grid size');
    container.innerHTML = '';
    createGrid(gridSize);
    changeDivColor();
})