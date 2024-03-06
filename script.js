const container = document.querySelector('#container');
let div;
let sideSize;

const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener ('click', () => {
    sideSize = 120;
    container.textContent = '';
    
    do {
        sideSize = prompt('Enter side size that is <=100');
    } while (sideSize>100 || sideSize == null || sideSize == '');

    for(i=0; i<=sideSize**2-1; i++){
        div = document.createElement('div');
        container.appendChild(div);
        div.style.cssText = `flex: 1 1 ${100/sideSize}%`;
    }    
})

function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`
}

console.log(randomColor());

container.addEventListener ('mouseover', (event) => {
    let target = event.target;
    target.style.backgroundColor = randomColor();
})