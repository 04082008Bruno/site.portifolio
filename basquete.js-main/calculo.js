function calcularTimes() {
    const interessados = parseInt(document.getElementById("interessados").value);
    const times = Math.floor(interessados / 3);
    const sobra = interessados % 3;
    const resultadoDiv = document.getElementById("resultado");

    if (sobra === 0) {
        resultadoDiv.textContent = `Você pode formar ${times} times!`;
        resultadoDiv.className = "verde";
    } else {
        resultadoDiv.textContent = `Você pode formar ${times} times, mas sobram ${sobra} alunos.`;
        resultadoDiv.className = "vermelho";
    }
}
