const button = document.querySelector('button');
let colors = ["red","green", "blue", "gray", "orange", "pink", "purple"];
let spanText = document.querySelector('.code-color');

function gerarCor(items) {
    let corAleatoria = Math.floor(Math.random() * colors.length);
    return items[corAleatoria];
};



button.addEventListener("click", function(){
    `${gerarCor(colors)}`
    document.body.style.backgroundColor = `${gerarCor(colors)}`  
    spanText.innerHTML = `${gerarCor(colors)}`
})