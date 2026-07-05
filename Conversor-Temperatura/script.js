const botao = document.getElementById("converter");

botao.addEventListener("click", function () {

    const temperatura = parseFloat(document.getElementById("temperatura").value);

    const tipo = document.getElementById("tipo").value;

    if (isNaN(temperatura)) {

        document.getElementById("resultado").innerHTML =
        "Digite uma temperatura válida.";

        return;
    }

    let resultado;

    if (tipo === "CF") {

        resultado = (temperatura * 9 / 5) + 32;

        document.getElementById("resultado").innerHTML =
        `${temperatura} °C = <strong>${resultado.toFixed(1)} °F</strong>`;

    } else {

        resultado = (temperatura - 32) * 5 / 9;

        document.getElementById("resultado").innerHTML =
        `${temperatura} °F = <strong>${resultado.toFixed(1)} °C</strong>`;

    }

});
