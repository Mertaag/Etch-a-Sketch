const container = document.querySelector('#container');
let div;
let sideSize;

const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', () => {
    sideSize = 120;
    container.textContent = '';

    do {
        sideSize = prompt('Enter side size that is <=100');
    } while (sideSize > 100 || sideSize == null || sideSize == '');

    for (i = 0; i <= sideSize ** 2 - 1; i++) {
        div = document.createElement('div');
        container.appendChild(div);
        div.style.cssText = `flex: 1 1 ${100 / sideSize}%`;
    }
})

function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`
}

container.addEventListener('mouseover', (event) => {
    let target = event.target;
    target.style.backgroundColor = randomColor();

    //turn on if you wan to change opacity of each square on each hover.
    // let currentOpacity = parseFloat(target.style.opacity) || 0;
    // target.style.opacity = Math.min(currentOpacity + 0.1, 1);
})

