let nota1;
let nota2;
let resultado;

nota1 = parseInt(prompt("Qual a nota do primeiro trimstre?"));
nota2 = parseInt(prompt("Qual a nota do segundo trimestre?"));

resultado = 180 - (nota1 + nota2);

if (resultado > 0){
    alert("Ainda precisa de " + resultado + " para passar.")
} else{
    alert("Parabéns! Você já está passado");
}