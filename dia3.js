let areaEscolhida = '';
let espEscolhida = '';
let tecnologias = [];

function prosseguir() {
    var frad = document.getElementsByName("rads");
    var questionsDiv = document.getElementById("questions");
    var frontquestion = document.getElementById("front-questions");
    var backquestion = document.getElementById("back-questions");

    if (frad[0].checked) {
        areaEscolhida = 'Front-End';
        frontquestion.style.display = "block";
        backquestion.style.display = "none";
    } else {
        areaEscolhida = 'Back-End';
        frontquestion.style.display = "none";
        backquestion.style.display = "block";
    }
    questionsDiv.style.display = "block";
} 

function proximaEtapa() {
    var frontendRad = document.getElementsByName("frontend");
    var backendRad = document.getElementsByName("backend");

    if (areaEscolhida === 'Front-End') {
        for (var i = 0; i < frontendRad.length; i++) {
            if (frontendRad[i].checked) {
                espEscolhida = frontendRad[i].nextElementSibling.textContent; 
            }
        }
    } else {
        for (var i = 0; i < backendRad.length; i++) {
            if (backendRad[i].checked) {
            espEscolhida = backendRad[i].nextElementSibling.textContent;
        }
    }
}
var nextStepDiv = document.getElementById("next-step");
var nextStepMessage = document.getElementById("next-step-message");

nextStepMessage.textContent = `Entendi! Você deseja se especializar na ${areaEscolhida} ou se tornar Fullstack?`;
nextStepDiv.style.display = "block";
}

function finalizar() {
    var especializar = document.getElementById("especializar").checked;
    var fullstack = document.getElementById("fullstack").checked;
    var resultDiv = document.getElementById("result");
    var resultMessage = document.getElementById("result-message");

    if(especializar) {
        resultMessage.textContent = `Você escolheu se especializar em ${areaEscolhida} com ${espEscolhida}!`;  
    } else if (fullstack){
        resultMessage.textContent = ` Você escolheu se desenvolver para se tornar Fullstack, começando com ${areaEscolhida} e ${espEscolhida}!`; 
    } else {
        resultMessage.textContent = "Por favor, escolha uma opção para continuar.";
    }
    resultDiv.style.display = "block";
    perguntarTecnologias();
}

function perguntarTecnologias() {
    var continuar = true;

    while(continuar) {
        var tecnologia = prompt("Digite uma tecnologia que você gostaria de aprender:");
        if(tecnologia) {
            tecnologias.push(tecnologia);
            alert(`Interessante! Você gostaria de aprender mais sobre ${tecnologia}.`);
            continuar = confirm("Tem mais alguma tecnologia que você gostaria de aprender?");
        } else {
            continuar = false;
        }
    }
    mostrarTecnologias();
}

function mostrarTecnologias() {
    var resultMessage = document.getElementById("result-message");
    if(tecnologias.length > 0) {
        var listaTecnologias = tecnologias.join(", ");
        resultMessage.textContent += ` Você também gostaria de aprender as seguintes tecnologias: ${listaTecnologias}.`;
    }
}