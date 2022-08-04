
const mario = document.querySelector('.mario'); //Traz a imagem do Mario como referência lá do HTML
const pipe = document.querySelector('.pipe'); //Traz a imagem do Pipe como referência lá do HTML

const jump = () => {
    mario.classList.add('jump'); //Adiciona a classe 'jump' do CSS no Mario

    setTimeout(() => {
        mario.classList.remove('jump'); //Remove a classe 'jump' do CSS no Mario
    }, 500);
}

const loop = setInterval(() => //Evento que estará sempre conferindo se o Mario não bateu no pipe
{ 

//     let score = 0

//     setInterval(() => {
//     document.getElementById('#contador').innerText = score
//     score++
//     console.log(score)
// },1000)

    const pipePosition = pipe.offsetLeft; //Vai pegar o deslocamento esquerdo do Pipe
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); //Vai pegar o estilo que foi computado na imagem do Mario;
    //Trazer o componente 'bottom' computado no css;
    //E com o 'replace', vai substituir os valores das strings de 'px' para 'vazio'

    if (pipePosition <= 78 && pipePosition > 50 && marioPosition < 90) //Utilizou-se o deslocamento dele da esquerda pra poder verificar se ele havia batido no pipe;
    //Se o 'pipePosition' é maior que 50px, significa que o Mario já pulou o pipe;
    //Além disso, utilizou-se a posição do Mario pra saber se ao pular, ele pulou o suficiente para não bater no pipe
    
    { 
        pipe.style.animation = 'none';
        
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`; //Trava a posição do Mario onde ele bater 

        mario.src = './images/game-over.png'; //Troca o gif do Mario correndo por uma imagem de game over
        mario.style.width = '64px';
        mario.style.marginLeft = '30px';
        
        const button = document.querySelector('.button'); //Traz a imagem do Mario como referência lá do HTML
        button.style.visibility = 'visible';

    }  
    
}, 10); 

function recarregar(){
    location.reload();
}

document.addEventListener('keydown', jump); //Ao pressionar a tecla, executa a função 'jump'

/*
    Basicamente é disparado a função 'jump' ao clicar em qualquer tecla do teclado, após isso, adiciona a class 'jump'
    e ao ser executado, a classe em seguida já é removida para que possa ser executada novamente.
*/