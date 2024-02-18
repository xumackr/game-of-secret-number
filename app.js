//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do número secreto";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um número de 1 a 10";
alert("jOGO DO NÚMERO SECRETO DO LUCAS CAMPOS DOS SANTOS")
let listaNumeros = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.0});
}
function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");

}

exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector("input").value
    console.log(chute == numeroSecreto);
    let palavraTentativa = tentativa > 1 ? "Tentativas" : "Tentativa";
    let palavraTentada_1 = `Parabéns Você Descobriu o Número secreto com ${tentativa} ${palavraTentativa}!`;
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou!");
        exibirTextoNaTela("p", palavraTentada_1);
        document.getElementById("reiniciar").removeAttribute("disabled");
        limparCampo();
    }

    else {
        if (chute > numeroSecreto){
            exibirTextoNaTela("p","O número secreto é menor");
        }
        else{
            exibirTextoNaTela("p","O número secreto é maior");

        }
        tentativa++;
        limparCampo();    
    }
    
    
    
}

function gerarNumeroAleatorio(){
    let numerosAL = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaNumeros.length;
    
    if (quantidadeElementosLista == numeroLimite){
        listaNumeros = [];
    }
    
    if (listaNumeros.includes(numerosAL)){
        return gerarNumeroAleatorio();
    }
    else {
        listaNumeros.push(numerosAL);
        console.log(listaNumeros);
        return numerosAL;
    }
    
}


function limparCampo(){
    chute = document.querySelector("input");
    chute.value = " ";

}   

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", "true");

}