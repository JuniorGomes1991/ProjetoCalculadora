function obterValores() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    return { num1, num2 };
}

function exibirResultado(valor) {
    document.getElementById('resultado').innerText = `Resultado: ${valor}`;
}

function somar() {
    const { num1, num2 } = obterValores();
    if (isNaN(num1) || isNaN(num2)) return;
    exibirResultado(num1 + num2);
}

function subtrair() {
    const { num1, num2 } = obterValores();
    if (isNaN(num1) || isNaN(num2)) return;
    exibirResultado(num1 - num2);
}

function multiplicar() {
    const { num1, num2 } = obterValores();
    if (isNaN(num1) || isNaN(num2)) return;
    exibirResultado(num1 * num2);
}

function dividir() {
    const { num1, num2 } = obterValores();
    if (isNaN(num1) || isNaN(num2)) return;
    if (num2 === 0) {
        exibirResultado("Erro (divisão por 0)");
        return;
    }
    exibirResultado(num1 / num2);
}