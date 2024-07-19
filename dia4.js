var pcNum = Math.floor(Math.random()*11);
var tentativas = 0;
var maxTentativas = 2;

function comparar() {
    var userNum = document.getElementById("num").value;
    var resultadoDiv = document.getElementById("resultado");

    if (userNum === ""){
        resultadoDiv.innerHTML = "Por favor, insira um número.";
        return
    }

    tentativas++;

    if (pcNum == userNum) {
        resultadoDiv.innerHTML = "Parabéns! Você acertou o número";
        document.getElementById("botao").disabled = true;
        } else {
            if (tentativas < maxTentativas) {
            resultadoDiv.innerHTML = "Que pena! Tente novamente.";
        } else {    
            resultadoDiv.innerHTML = "Que pena! O número era " + pcNum + ". Tente novamente!";
            document.getElementById("botao").disabled = true;
        }
    }    

    document.getElementById("num").value = "";
}