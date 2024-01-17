const button = document.querySelector('button');
let colors = ["red","green", "blue", "gray", "orange", "pink", "purple"];

function gerarCor(items) {
    let corAleatoria = Math.floor(Math.random() * colors.length);
    items[corAleatoria];
};

console.log(gerarCor(colors));