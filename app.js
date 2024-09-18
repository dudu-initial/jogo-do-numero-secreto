let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// let titulo = document.querySelector('h1');
// titulo.innerHTML = ('Jogo da Adivinhação');

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = ('Escolha um número de 1 a 10.');

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //responsiveVoice.speak(texto, 'Brazilian portuguese female', {rate: 1.2});
}
function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo da Adivinhação');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10.');   
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(numeroSecreto == gerarNumeroAleatorio);

    if (numeroSecreto == chute) {
        exibirTextoNaTela('h1', 'ACERTOU!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroSecreto > chute) {
            exibirTextoNaTela('p', 'O numero secreto é maior.');
        } else {
            exibirTextoNaTela('p', 'O número secreto é menor.');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite ) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function exibirOlaMundo() {
    console.log("Olá, Mundo!");
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';

}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}