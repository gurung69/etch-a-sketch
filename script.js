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