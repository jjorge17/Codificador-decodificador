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

/*
function codificar(txtaCodificar,dato1, dato2){
    var text = txtaCodificar;
    console.log(text);
        for(var i = 0 ;i < encriptacion.length ;i++){
        textoEncriptado = text.replaceAll(encriptacion[i].dato1,encriptacion[i].dato2);
        console.log(dato1)
        console.log(dato2)
        text = textoEncriptado;
        console.log(text);
    }
    return text;
}*/