var mensajeError = document.querySelector("#mensaje-error");
var txtEncriptado = document.querySelector("#msg");

function validarMinusculas(textoIngresado){
var comparar = textoIngresado.substring(0, textoIngresado.length);
var compararMinuscula = comparar.toLowerCase();
if(textoIngresado != compararMinuscula ){
    mensajeError.innerHTML ="Solo letras minusculas";
    return mensajeError;
}else {
    mensajeError.innerHTML = "";
    return mensajeError;
}};


