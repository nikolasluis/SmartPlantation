storage = window.localStorage;
var dadosDoStorage = JSON.parse(storage.getItem("dados"))
var users2 = dadosDoStorage;

var dadosDoStorage2 = JSON.parse(storage.getItem("sensores"))
var sensores = dadosDoStorage2;

window.onload = function() {
	criaSensores();
  };

function registraSensor() {


	var number = document.getElementById("senNumber").value;
	var date = document.getElementById("date").value;

	var user_id = 0
    var sensor_aux = []
    var aux = 0;

    for (var i=0; i<users2.length; i++) {
        if(users2[i][3]==true) {
			user_id = i
            aux++;
		}
    }

    if(axu==0){
        nenhumSensor();
    }

    sensor_aux.push(user_id);
    sensor_aux.push(date);
    sensor_aux.push(number);

    sensores.push(sensor_aux);

	storage.setItem("sensores",JSON.stringify(sensores));
	window.location.href = document.location="http://localhost/smartplantation/index.html";
}

function pag_cadastro() {
	document.getElementById("b_cadastro").value
	location.href = "http://localhost/smartplantation/pag/cadastro.html"
}


function nenhumSensor(){
    alert("Login não realizado - Você não pode cadastrar nenhum sensor")
}
function criaSensores(){
	if(!(sensores instanceof Array)){
    	sensores = [sensores];
	}
}
