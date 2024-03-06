const container = document.querySelector('#container');
let div;
let sideSize;

const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener ('click', () => {
    sideSize = 120;
    container.textContent = '';
    
    do {
        sideSize = prompt('Enter size size that is <=100');
    } while (sideSize>100 || sideSize == null || sideSize == '');

    for(i=0; i<=sideSize**2-1; i++){
        div = document.createElement('div');
        container.appendChild(div);
        div.style.cssText = `flex: 1 1 ${100/sideSize}%`;
    }    
})

container.addEventListener ('mouseover', (event) => {
    let target = event.target;
    target.style.backgroundColor = 'black';
})