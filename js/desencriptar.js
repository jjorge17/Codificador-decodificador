var botonDesencriptar = document.querySelector("#btn-desencriptar")
botonDesencriptar.addEventListener("click",function(event) {
    event.preventDefault();
// conectar  
var textoIngresado = document.querySelector("#input-textoa").value;
var mensajeError = document.querySelector("#mensaje-error");

validarMinusculas(textoIngresado);

if(mensajeError.length > 0){
    form.reset();
}


//encriptar mensaje
var text = textoIngresado;
    for(var i = 0 ;i < encriptacion.length ;i++){
        textoEncriptado = text.replaceAll((encriptacion[i].clave),(encriptacion[i].letra));
        text = textoEncriptado;
    }
        
//colocar mensaje en msg
    txtEncriptado.value = textoEncriptado;
  });