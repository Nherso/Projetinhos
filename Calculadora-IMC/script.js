function calcularIMC(){

    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);

    if(peso <= 0 || altura <= 0){

        document.getElementById("resultado").innerHTML =
        "Preencha os campos corretamente.";

        return;
    }

    let imc = peso / (altura * altura);

    let classificacao;

    if(imc < 18.5){

        classificacao = "Abaixo do peso";

    }else if(imc < 25){

        classificacao = "Peso normal";

    }else if(imc < 30){

        classificacao = "Sobrepeso";

    }else if(imc < 35){

        classificacao = "Obesidade Grau I";

    }else if(imc < 40){

        classificacao = "Obesidade Grau II";

    }else{

        classificacao = "Obesidade Grau III";
    }

    document.getElementById("resultado").innerHTML =
    `IMC: ${imc.toFixed(2)} <br> ${classificacao}`;
}
