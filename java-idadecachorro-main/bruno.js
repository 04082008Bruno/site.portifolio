let NOME;
let NASC;
let ANO;
let IDADE;
let DOG;
let IDADEDOG;
resultado = ANO - NASC;
NOME = parseInt(prompt("Qual o seu nome?"));
NASC = parseInt(prompt("Você nasceu quando?"));
ANO = parseInt(prompt("Em que ano estamos?"));
IDADE = ANO - NASC;

alert( NOME + " Você tem" + IDADE + " anos.");
console.log("a ana voltou a fumar");

DOG = parseInt(prompt("O seu cachorro nasceu quando?"));
ANO = parseInt(prompt("Em que ano estamos?"));
IDADEDOG = (ANO - DOG) * 7;
alert("O seu cachorro tem " + Math.floor(IDADEDOG));
