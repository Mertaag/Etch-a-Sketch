const container = document.querySelector('#container');
let div;

for(i=0; i<=255; i++){
    div = document.createElement('div');
    container.appendChild(div);
}

container.addEventListener ('mouseover', (event) => {
    let target = event.target;
    target.style.backgroundColor = 'black';
})

