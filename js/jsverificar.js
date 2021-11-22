storage = window.localStorage;
var dadosDoStorage = JSON.parse(storage.getItem("lista"))||"[]"
var sensores = dadosDoStorage;

window.onload = function() {
    criaListaSensores();
    verificaLista();
    criaLista();
}

function apresentaTabela() {
    var dados = ' ';

    document.getElementById("sensores").innerHTML = " ";

    dados += '<table border="0" width=100% cellspacing="11.5px" class="table">';

    for(var i=1; i < lista.length; i++) {
        dados += '<tr>';
        dados += '<td width="525px">' +lista[i][0]+ '</td>';
        dados += '<td>' +lista[i][1]+ '</td>';
        dados += '<td>' +lista[i][2]+ '</td>';
        dados += '</tr>';
    }
    dados += '</table>'
    document.getElementById("sensores").innerHTML += dados;
}

function verificaLista() {
    if(lista.length==1){
        document.getElementById("sensores").innerHTML = "<p class='empty'> Nenhum sensor registrado até o momento. </p>";
    }
    else{
        apresentaTabela();
    }
}

function criaLista() {
	if(!(lista instanceof Array)){
    	lista = [lista]; 
	}
}
