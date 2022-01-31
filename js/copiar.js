/*copia los datos de un cuadro de texto con id="msg" al portapapeles del navegador o windows 
usando el boton copiar (id="btn-copy")*/

var botonCopiar = document.querySelector("#btn-copy")
botonCopiar.addEventListener("click",function() {
    var copyText = document.querySelector("#msg");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
});