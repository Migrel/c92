var scoreP1 = 0;
var scoreP2 = 0;
var n1 = "";
var n2 = "";
function carregou(){
    var nome1 = localStorage.getItem("player1");
    var nome2 = localStorage.getItem("player2");

 document.getElementById("player1_name").innerHTML = nome1 + ":"
 document.getElementById("player2_name").innerHTML = nome2 + ":"

 document.getElementById("player1_score").innerHTML = scoreP1;
 document.getElementById("player2_score").innerHTML = scoreP2;

document.getElementById("nomePlayer1").innerHTML = nome1;
document.getElementById("nomePlayer2").innerHTML = nome2;
}

function enviar(){
n1 = document.getElementById("n1").value;
n2 = document.getElementById("n2").value;
var questaoCompleta = "<h4>" + n1 + "x" + n2 + "</h4>";
document.getElementById("questão").innerHTML = questaoCompleta;
}

function checar(){
    var resposta = document.getElementById("resposta").value;
    var umEmTudo = questaoCompleta + resposta;
    document.getElementById("output").innerHTML = umEmTudo;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}