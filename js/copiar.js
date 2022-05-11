var bttCopiar = document.querySelector("#btt-copiar");


bttCopiar.addEventListener("click",copiar)

function copiar() {
  let copyText = document.querySelector(".resultado");
  copyText.select();
  document.execCommand("copy");
}


