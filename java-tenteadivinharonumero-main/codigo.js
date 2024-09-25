let resposta = document.getElementById('resposta');

let computador = 0;
let jogador = 0;

let numminimo = 1;
let nummaximo = 100;
let dif = nummaximo - numminimo;
let aleatorio =  Math.random();
computador = numminimo + Math.trunc(dif * aleatorio);

function Adivinha(){
    jogador = prompt("Qual é o seu palpite?");
    
    if(jogador == computador){
        resposta.innerHTML += "<p>Parabéns!! Você acertou! Eu tinha sorteado esse valor " + computador + "</p>";
        document.getElementById("botao").style.visibility = "hidden";
    } else if(computador < jogador){
        resposta.innerHTML += "<p>Você falou " + jogador + " .O meu número é um pouco menor!</p>";
      
    }
    else if (jogador < computador){
        resposta.innerHTML += "<p>Você falou " + jogador + " .O meu número é um pouco maior!</p>";
    }
}