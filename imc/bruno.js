document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const imc = (peso / (altura * altura)).toFixed(2);
    const resultadoDiv = document.getElementById('resultado');

    let categoria;
    if (imc < 18.5) {
        categoria = "Abaixo do peso";
        resultadoDiv.innerHTML = `Seu IMC é ${imc}.(${categoria})<br>Parabéns zé palito, coma mais.🦴🦴`;
    } 
    let categoria2;
    if (imc > 18.5 && imc < 24.9) {
        categoria = "Peso normal";
        resultadoDiv.innerHTML = `Seu IMC é ${imc}.(${categoria})<br>Continue assim que você vai longe.👍`;
    } 
    let categoria3;
    if (imc > 24.9 && imc < 29.9) {
        categoria = "Sobrepeso";
        resultadoDiv.innerHTML = `Seu IMC é ${imc}.(${categoria})<br>!!!!!!!!!ALERTA!!!!!!!!Mais um pouco vira a Thais Carla.🐘🦣`;
    }
    let categoria4;
    if (imc > 30.0){
        categoria = "Obesidade";
        resultadoDiv.innerHTML = `Seu IMC é ${imc}.(${categoria})<br>🐋Volte para o mar BALEIA🐳`;
    }

});



















