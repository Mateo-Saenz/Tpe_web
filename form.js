"use strict"

let inputCaptcha= document.querySelector(".inp-captcha");

let captchas=[{identificador:1, valor: ""}, {identificador:2, valor: ""},{identificador:3, valor:""}] //valores de las imágenes de los captchas

cambiarCaptcha();

let form= document.querySelector("#form");
form.addEventListener("submint", verificarCaptcha);

let recarga= document.querySelector("img-recargar");
recarga.addEventListener("click", cambiarCaptcha);

function cambiarCaptcha(){
    let captcha=Math.floor(Math.random()*captchas.length+1);
    document.querySelector(".img-captcha").src=...+captcha+ ".jpg"; //tengo que poner de donde proviene la imagen

}

function existeCaptcha (text){
   let encontrado=false;
   captchas.forEach(function(c){
        if ((text===c.valor)&&(captcha==c.identificador)){
            encontrado=true;
            return;
        }
    });
        return encontrado;
}



function verificarCaptcha(event){
    event.preventDefault();
    let text=document.querySelector('.inp-captcha');
    if (text=="")
        document.querySelector(".alerta").innerHTML= "Ingresar código de seguridad para enviar el formulario";
    else
        if(existeCaptcha(text)==true){
            document.querySelector(".alerta").innerHTML="El formulario se envió correctamente";
            form.reset();
        }
        else{
            document.querySelector(".alerta").innerHTML="El código de seguridad ingresado es incorrecto"
            cambiarCaptcha();
        }
    cambiarCaptcha();
}



    //si el texto ingresado es vacío ingresar el captcha para enviar formulario
    //sino si existeCaptcha agrego los datos del form (los puedo mostrar por consola) y muestro un mensaje SIN usar alert de que
    //el formulario se envió con éxito
    //si no existe el captcha mostrar mensaje de captcha incorrecto, cambiar capcha.

    //Antes de terminar la función cambio el captcha


function agregar(event){
    event.preventDefault();
    let formData= new FormData(form);
    let nombre= formData.get('nombre');
    let apellido= formData.get('apellido');
    let email= formData.get('email');
    let tel= formData.get('telefono');
    let mensaje= formData.get('mensaje');
    console.log("Nombre: ${'nombre'}, Apellido:${'apellido'}, E-Mail: ${'email'} , Teléfono: ${'tel'}, Mensaje: ${'mensaje'}");

}