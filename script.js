const IMG = document.getElementById('semaforo');
const BOTOES = document.getElementById('botoes');
let corIndex = 0;
let intervalId = null;

const trocaCor = (Event) => {
    stopAutomatico();
    ligar[Event.target.id]();
    
}

const proximoIndex = () => corIndex = corIndex < 2 ? ++corIndex : 0;


const mudaCorAutomatico = () => {
    const CORES = ['vermelho', 'amarelo', 'verde'];
    const COR = CORES[corIndex];
    ligar[COR]();
    console.log(corIndex);
    proximoIndex();
}

const stopAutomatico = () => {
    clearInterval(intervalId);
}

const ligar = {
    'vermelho': () => IMG.src = './img/vermelho.png',
    'amarelo':  () => IMG.src = './img/amarelo.png',
    'verde':    () => IMG.src = './img/verde.png',
    'auto':     () => intervalId = setInterval(mudaCorAutomatico, 1000)
}

BOTOES.addEventListener('click', trocaCor);