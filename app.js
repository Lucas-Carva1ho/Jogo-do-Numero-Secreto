let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextoNaTela(tag, texto){       // função com parametros, mas sem retorno
    let campo = document.querySelector(tag); // vai no documento HTML e procura a tag que eu escolhi ( nesse caso, foi o h1 )
    campo.innerHTML = texto;                // aqui ele vai escrever o texto que eu quero na tag que eu escolher
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.1})

}

function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10:");
}

exibirMensagemInicial();

function verificarChute(){  // função sem parametros e sem retorno
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "Parabéns, você acertou!!");
        let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número com ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if (chute < numeroSecreto){
            exibirTextoNaTela("p", "O número secreto é maior");
        }else{
            exibirTextoNaTela("p", "O número secreto é menor");
        }
          limparCampo();
    } 
      tentativas++;
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() *10 +1);  // função com retorno, mas sem parametros
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true)
}
