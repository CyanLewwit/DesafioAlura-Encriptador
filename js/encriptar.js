var bttEncriptar = document.querySelector("#btt-encriptar");

bttEncriptar.addEventListener("click",function(event){

	/*Capturando etiquetas*/
	var AreaTexto = document.querySelector(".texto-a-usar");
	var texto = AreaTexto.value;
	var AreaResultado = document.querySelector(".resultado");
	var textoResultado = AreaResultado.value;
	var bttCopy = document.querySelector("#btt-copiar");
	var imgtext = document.querySelector(".logo-texto-vacio");
	var textoFinal = "";

	/*Encriptador*/
	if (texto != "") {
		if (VerificarMinuscula(texto)) {
			textoFinal = Encriptar(texto);
			AreaResultado.classList.remove("oculto");
			bttCopy.classList.remove("oculto");
			imgtext.classList.add("oculto");
			AreaResultado.value = textoFinal;
		} else {
			textoFinal = "No se pudo encriptar el mensaje ya que este contiene una letra Mayuscula";
			AreaResultado.classList.remove("oculto");
			bttCopy.classList.remove("oculto");
			imgtext.classList.add("oculto");
			AreaResultado.value = textoFinal;
		}
	} else {
		AreaResultado.value = "";
		AreaResultado.classList.add("oculto");
		bttCopy.classList.add("oculto");
		imgtext.classList.remove("oculto");
	}
	
	

})



function VerificarMinuscula(texto){
	textoMin = texto.toLowerCase();
	if(texto === textoMin){
		return true;
	} else {
		return false;
	}
}

function Encriptar(texto){
	var textoFinal = "";
	for (var i = 0; i < texto.length; i++) {
		var x = texto[i];

		if (x == "a") {
			textoFinal = textoFinal + "ai";
		} else if (x == "e") {
			textoFinal = textoFinal + "enter";
		} else if (x == "i") {
			textoFinal = textoFinal + "imes";
		} else if (x == "o") {
			textoFinal = textoFinal + "ober";
		} else if (x == "u") {
			textoFinal = textoFinal + "ufat";
		} else {
			textoFinal = textoFinal + x;
		}
	}

	return textoFinal;
}