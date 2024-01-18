let coresSorteadas = [];
const button = document.querySelector('button');
let colors = ["red","green", "blue", "gray", "orange", "pink", "purple", "yellow", "black"];
let spanText = document.querySelector('.code-color');

function gerarCor(items) {
    let corAleatoria = Math.floor(Math.random() * colors.length);
    
    let indiceLista = coresSorteadas.length
    if (indiceLista == colors.length) {
        coresSorteadas = [];
        
    }
    
    if (coresSorteadas.includes(corAleatoria)) {
        return  gerarCor(items);
    } else {
        coresSorteadas.push(corAleatoria);
        console.log(coresSorteadas)
        return items[corAleatoria];
    }
};



button.addEventListener("click", function(){
    let corGerada = gerarCor(colors);
    document.body.style.backgroundColor = corGerada;
    spanText.innerHTML = ` ${corGerada}`;
});


console.log(colors.length)