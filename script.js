const container = document.querySelector('#container');
let div;
let sideSize = 100 //101;
let flexBasis = 100/sideSize;

// while (sideSize>100 || sideSize == null || sideSize == ''){
//     sideSize = prompt('Enter size size that is <=100');
// }


//create 16x16 grid
for(i=0; i<=sideSize**2-1; i++){
    div = document.createElement('div');
    container.appendChild(div);
    div.style.cssText = `flex: 1 1 ${flexBasis}%`;
}

//paint squares
container.addEventListener ('mouseover', (event) => {
    let target = event.target;
    target.style.backgroundColor = 'black';
})

const resetButton = document.querySelector('reset-button');
resetButton.addEventListener ('click', () => {

})