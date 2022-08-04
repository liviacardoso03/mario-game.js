const mario = document.querySelector('.mario'); //Traz a imagem do Mario como referência lá do HTML
const pipe = document.querySelector('.pipe'); //Traz a imagem do Pipe como referência lá do HTML

const jump = () =>{
    mario.classList.add('jump'); //Adiciona a classe 'jump' do CSS no Mario

    setTimeout(() => {
        mario.classList.remove('jump'); //Remove a classe 'jump' do CSS no Mario
    }, 500);
}

const loop = setInterval(() => { //Evento que estará sempre conferindo se o Mario não bateu no pipe
    const pipePosition = pipe.offsetLeft; //Vai pegar o deslocamento esquerdo do Pipe
    
    if (pipePosition <= 85){
        pipe.style.animation = 'none';
        pipe.style.left`${pipePosition}px`;
    }

}, 10);

document.addEventListener('keydown', jump); //Ao pressionar a tecla, executa a função 'jump'

/*
    Basicamente é disparado a função 'jump' ao clicar em qualquer tecla do teclado, após isso, adiciona a class 'jump'
    e ao ser executado, a classe em seguida já é removida para que possa ser executada novamente.
*/