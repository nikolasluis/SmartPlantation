storage = window.localStorage;
var dadosDoStorage = JSON.parse(storage.getItem("dados"))
var users2 = dadosDoStorage;

window.onload = function() {
	criaCadastros();
  };

function validaLogin() {


	var mailLogin = document.getElementById("mailLogin").value;
	var senhaLogin = document.getElementById("senhaLogin").value;

	var aux = 0;
	var pos = 0;

	for (var i=0; i<users2.length; i++) {
		if(mailLogin  == users2[i][1]) {
			pos = i;
		}
		else{
			aux++;
		}
	}

	if (aux == users2.length) {
		usuarios();
		document.getElementById("mailLogin").focus();
		return false;
	}
	apagaCampo();

	if (senhaLogin != users2[pos][2]) {
		senhas();
		document.getElementById("senhaLogin").focus();
		return false;
	}
	apagaCampo();

	for (var i=0; i<users2.length; i++) {
        if(users2[i][3]==true) {
			users2[i][3]==false;
			alert("Usuário antigo feito logout");
		}
    }

	users2[pos][3]=true;
	storage.setItem("dados",JSON.stringify(users2));
	window.location.href = document.location="http://localhost/smartplantation/index.html";
}

function apagaCampo() {
	document.getElementById("msg").innerHTML = " ";
}

function senhas() {
	document.getElementById("msg").innerHTML = " ";
	document.getElementById("msg").innerHTML = "<div> Senha não corresponde </div>";
}

function usuarios() {
	document.getElementById("msg").innerHTML = " ";
	document.getElementById("msg").innerHTML = "<div> Usuário não cadastrado </div>";
}

function pag_cadastro() {
	document.getElementById("b_cadastro").value
	location.href = "http://localhost/smartplantation/pag/cadastro.html"
}

function criaCadastros(){
	if(!(users2 instanceof Array)){
    	users2 = [users2];
	}
}
