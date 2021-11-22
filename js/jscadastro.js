/* ----- Cadastro ----- */

storage = window.localStorage;
var dadosDoStorage = JSON.parse(storage.getItem("dados"))||"[]"
var users = dadosDoStorage;

function cadastraUser() {
	var aux = [];

	var nome = document.getElementById("nome").value;
	var email = document.getElementById("email").value;
	var senha = document.getElementById("senha").value;
	var confirmar = document.getElementById("confirmar").value;
	var login = false;

	for (var i=0; i<users.length; i++) {
		if (nome == users[i][0]) {
			usuarios();
			pessoa.nome.focus();
			return false;
		}
	}
	apagaCampo();

	for (var i=0; i<users.length; i++) {
		if (email == users[i][1]) {
			emailzito();
			confirmaemail.email.focus();
			return false;
		}
	}
	apagaCampo();

	if (senha != confirmar) {
		senhas();
		password.confirmar.focus()
		return false;
	}

	aux.push(nome)
	aux.push(email)
	aux.push(senha)
	aux.push(login)

	if(!(users instanceof Array)) {
		users = [users]
	}

	users.push(aux);
	storage.setItem("dados",JSON.stringify(users));
	window.location.href = document.location="http://localhost/smartplantation/index.html"
}

function apagaCampo() {
	document.getElementById("msg").innerHTML = " ";
}

function senhas() {
	document.getElementById("msg").innerHTML = " ";
	document.getElementById("msg").innerHTML = "<div> Senhas não correspondem | Tente novamente </div>";
}

function emailzito() {
	document.getElementById("msg").innerHTML = " ";
	document.getElementById("msg").innerHTML = "<div> E-mail já cadastrado | Insira um diferente </div>";
}

function usuarios() {
	document.getElementById("msg").innerHTML = " ";
	document.getElementById("msg").innerHTML = "<div> Usuário já existente | Insira um diferente </div>";
}

/* ----- Outras funções ----- */

function pag_login() {
	document.getElementById("b_login").value
	location.href = "http://localhost/smartplantation/pag/login.html"
}
