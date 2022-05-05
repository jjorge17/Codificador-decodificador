var botonEncriptar = document.querySelector("#btn-encriptar")
botonEncriptar.addEventListener("click",function(event) {
    event.preventDefault();
// conectar  
var textoIngresado = document.querySelector("#input-textoa").value;

validarMinusculas(textoIngresado);

if(mensajeError.length > 0){
    form.reset();
}



//encriptar mensaje
var text = textoIngresado;
    for(var i = 0 ;i < encriptacion.length ;i++){
        textoEncriptado = text.replaceAll((encriptacion[i].letra),(encriptacion[i].clave));
        text = textoEncriptado;
    }
        
//colocar mensaje en msg
/*
var dato1 = "letra";
var dato2 = "clave";

txtEncriptado.value = codificar(textoIngresado,dato1,dato2);

*/

txtEncriptado.value = textoEncriptado;
});