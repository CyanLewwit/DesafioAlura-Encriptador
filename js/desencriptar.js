var bttDesencriptar = document.querySelector("#btt-desencriptar");

bttDesencriptar.addEventListener("click",function(event){


	/*Capturando etiquetas*/
	var AreaTexto = document.querySelector(".texto-a-usar");
	var texto = AreaTexto.value;
	var AreaResultado = document.querySelector(".resultado");
	var textoResultado = AreaResultado.value;
	var bttCopy = document.querySelector("#btt-copiar");
	var imgtext = document.querySelector(".logo-texto-vacio");
	var textoFinal = "";
	

	/*Desencriptador*/
	if (texto != "") {
		if (VerificarMinuscula(texto)) {
			textoFinal = Desencriptar(texto,"ai","a","");
			textoFinal = Desencriptar(textoFinal,"enter","e","");
			textoFinal = Desencriptar(textoFinal,"imes","i","");
			textoFinal = Desencriptar(textoFinal,"ober","o","");
			textoFinal = Desencriptar(textoFinal,"ufat","u","");
			AreaResultado.classList.remove("oculto");
			bttCopy.classList.remove("oculto");
			imgtext.classList.add("oculto");
			AreaResultado.value = textoFinal;
		} else {
			textoFinal = "No se pudo desencriptar el mensaje ya que este contiene una letra Mayuscula";
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
	}})



	function Desencriptar(texto,palabra,vocal,textoFinal) {
		var posicion = texto.indexOf(palabra);
		var longitud = palabra.length;

		if(posicion >= 0){
			textoFinal = textoFinal + texto.substring(0,posicion) +vocal;
			var nuevoTexto = texto.substring(posicion+longitud,texto.length);
			textoFinal = Desencriptar(nuevoTexto,palabra,vocal,textoFinal);
		} else if (posicion < 0){
			textoFinal = textoFinal + texto;
		}
		return textoFinal;

}