//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do número secreto";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um número de 1 a 10";
alert("JOGO DO NÚMERO SECRETO DO LUCAS CAMPOS DOS SANTOS")
let listaNumeros = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 9;
let tentativa = 1;

//function limitadorTentativas(){
//    
//}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.0});
}
function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 100");
    
}

exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector("input").value
    console.log(chute == numeroSecreto);
    let palavraTentativa = tentativa > 1 ? "Tentativas" : "Tentativa";
    let frase1 = `O número secreto é menor que ${chute}, (Restam ${tentativas} ${palavraTentativa}).`;
    let frase2 = `O número secreto é maior que ${chute}, (Restam ${tentativas} ${palavraTentativa}).`;
    let palavraTentada_1 = `Parabéns Você Descobriu o Número secreto com ${tentativa} ${palavraTentativa}!`;
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou!");
        exibirTextoNaTela("p", palavraTentada_1);
        document.getElementById("diferenca").setAttribute("disabled", "true");
        document.getElementById("reiniciar").removeAttribute("disabled");
        limparCampo();
    }
    else if (tentativas <= 0){
        exibirTextoNaTela("h1", "Perdeu!");
        exibirTextoNaTela("p", "Você excedeu o números de Tentativas!");
        document.getElementById("diferenca").setAttribute("disabled", "true");
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    
    else {
        if (chute > numeroSecreto){
            exibirTextoNaTela("p",frase1);
        }
        else{
            exibirTextoNaTela("p",frase2);
            
        }
        tentativas--;
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
    tentativas = 9;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", "true");
    document.getElementById("diferenca").removeAttribute("disabled");
    

}