var manzana1, manzana2, manzana3, manzana4, manzana5, manzana6, manzana7, manzana8, manzana9, manzana10;
var respuesta;
var indiceOpCorrecta;

txt_suma = document.getElementById("suma");
op1 = document.getElementById ("op1");
op2 = document.getElementById ("op2");
op3 = document.getElementById ("op3");
txt_msj = document.getElementById("msj");
txt_resultado = document.getElementById("resultado");

function comenzar(){
	txt_resultado.innerHTML = "?"; 
	txt_msj.innerHTML = "";
	manzana1 = Math.round(Math.random()*1);
	manzana2 = Math.round(Math.random()*1);
	manzana3 = Math.round(Math.random()*1);
	manzana4 = Math.round(Math.random()*1);
	manzana5 = Math.round(Math.random()*1);
	manzana6 = Math.round(Math.random()*1);
 	manzana7 = Math.round(Math.random()*1);
	manzana8 = Math.round(Math.random()*1);
	manzana9 = Math.round(Math.random()*1);
	manzana10= Math.round(Math.random()*1);
	respuesta = manzana10;
	txt_suma.innerHTML = manzana1, manzana2, manzana3, manzana4, manzana5, manzana6, manzana7, manzana8, manzana9,manzana10;

	indiceOpCorrecta = Math.round(Math.random()*10);
	if (indiceOpCorrecta==0) {
		 op1.innerHTML = respuestas;
		 op2.innerHTML = respuesta + 1;
		 op3.innerHTML = respuesta - 1;
	}
	if(indiceOpCorrecta ==1){
		op2.innerHTML = respuesta;
		op1.innerHTML = respuesta + 2;
		op3.innerHTML = respuesta -1;
	}
	if(indiceOpCorrecta==2){
		op3.innerHTML = respuesta;
		op1.innerHTML = respuesta + 1;
		op2.innerHTML = respuesta - 1;
	}
}
function controlarRespuesta(opcionElegida){
	txt_resultado.innerHTML = opcionElegida.innerHTML;

	if (respuesta == opcionElegida.innerHTML) {
		txt_msj.innerHTML = "EXCELENTE!!";
		txt_msj.style.color = "green";
		setTimeout(comenzar, 2000);
	}else{
		txt_msj.innerHTML = "VUELVE A INTENTARLO";
		txt_msj.style.color = "red"; 
		setTimeout(limpiar, 2000);
	}
}
function limpiar(){
		txt_resultado.innerHTML ="¿cuantas manzanas hay?"; 
	txt_msj.innerHTML = "";
}
  
comenzar();