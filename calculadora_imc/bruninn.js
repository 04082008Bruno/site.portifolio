document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const imc = (peso / (altura * altura)).toFixed(2);
    const resultadoDiv = document.getElementById('resultado');

    let categoria;
    if (imc < 18.5) {
        categoria = "Abaixo do peso. Parabéns zé palito, coma mais!!🦴🦴🦴";
    } else if (imc < 24.9) {
        categoria = "Peso normal. È isso só sucesso, td nosso nada delas...👍👍👍👍";
    } else if (imc < 29.9) {
        categoria = "Sobrepeso. PERIGO!!! Alto risco de virar a tais carla☠️☠️!!";
    } else {
        categoria = "Obesidade. VOLTE PARA O MAR BALEIA 🐳🐳🐳";
    }

    resultadoDiv.innerHTML = `Seu IMC é ${imc} (${categoria}).<br>Considere agendar uma consulta para dicas personalizadas!`;
});