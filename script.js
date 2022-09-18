function createDiv (){
    const div = document.createElement('div');
    div.classList.add('grid-div');
    container.appendChild(div);
}

const container = document.querySelector('.container');

for (let i = 0; i < 16; i++){// make div of 16x16 grid
    for(let j = 0; j < 16; j++){
        createDiv();
    }
}

function addDivColor(element){
    if (element.classList.contains('grid-div')){
        element.classList.add('hover')
    }
}

const divs = document.querySelectorAll('.grid-div');
let isMouseDown = false;

container.addEventListener('mousedown', (e)=>{
    isMouseDown = true;
    addDivColor(e.target);
})
container.addEventListener('mouseup', ()=>{
    isMouseDown = false;
})
divs.forEach(div => div.addEventListener('mouseover', (e) => {
    if (isMouseDown){
        addDivColor(e.target);
    }
}))