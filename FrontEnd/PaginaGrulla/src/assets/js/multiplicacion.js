var num1, num2;
var respuesta;
var indiceOpCorrecta;
Puntos = 0;
necesqrios= 10;

txt_mlt = document.getElementById("mlt");
op1 = document.getElementById ("op1");
op2 = document.getElementById ("op2");
op3 = document.getElementById ("op3");
txt_msj = document.getElementById("msj");
txt_resultado = document.getElementById("resultado");

function comenzar(){
	txt_resultado.innerHTML = "?"; 
	txt_msj.innerHTML = "";
	num1 = Math.round(Math.random()*10);
	num2 = Math.round(Math.random()*10);
	respuesta = num1 * num2;
	txt_mlt.innerHTML = num1 + " x " + num2 + " = ";

	indiceOpCorrecta = Math.round(Math.random()*2);
	if (indiceOpCorrecta==0) {
		 op1.innerHTML = respuesta;
		 op2.innerHTML = respuesta - 2;
		 op3.innerHTML = respuesta + 2;
	}
	if(indiceOpCorrecta ==1){
		op2.innerHTML = respuesta;
		op1.innerHTML = respuesta + 2;
		op3.innerHTML = respuesta * 2;
	}
	if(indiceOpCorrecta==2){
		op3.innerHTML = respuesta;
		op1.innerHTML = respuesta + 4;
		op2.innerHTML = respuesta + 1;
}
}


function controlarRespuesta(opcionElegida){
	txt_resultado.innerHTML = opcionElegida.innerHTML;

	if (respuesta == opcionElegida.innerHTML) {
		Puntos++;
		document.getElementById("Puntos").innerHTML= "Puntos: <b>" + Puntos + "/" + necesqrios +"  </b>";	
		if (Puntos == 10){
			alert("felicidades ganaste");
		}
		txt_msj.innerHTML = "EXCELENTE!!";
		txt_msj.style.color = "black";
		setTimeout(comenzar, 2000);
	}
	else{
		Puntos--;
		document.getElementById("Puntos").innerHTML= "Puntos: <b>" + Puntos + "/" + necesqrios +"  </b>";	
		if (Puntos == 0) {
			alert("PERDISTE");
		}
		txt_msj.innerHTML = "VUELVE A INTENTARLO";
		txt_msj.style.color = "red"; 
		setTimeout(limpiar, 2000);
	}
}
function limpiar(){
		txt_resultado.innerHTML = "?"; 
		txt_msj.innerHTML = "";
}

comenzar();