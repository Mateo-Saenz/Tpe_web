"use strict"

let inputCaptcha = document.querySelector(".inp-captcha");
let captchas = [{ identificador: 1, valor: "pdw38" }, { identificador: 2, valor: "2en7g" }, { identificador: 3, valor: "8fexn" }]

let captcha;

cambiarCaptcha();

let form = document.querySelector("#form");
form.addEventListener("submit", verificarCaptcha);

let recarga = document.querySelector(".img-recargar");
recarga.addEventListener("click", cambiarCaptcha);

function cambiarCaptcha() {
    captcha = Math.floor(Math.random() * captchas.length + 1);
    document.querySelector(".img-captcha").src = "../img/captcha" + captcha + ".jpg";

}

function existeCaptcha(text) {
    for (let c of captchas) {
        if ((text == c.valor))
            return true;
    }
    return false;
}

function verificarCaptcha(event) {
    event.preventDefault();
    let text = document.querySelector('.inp-captcha').value;
    if (text == "")
        document.querySelector(".alerta").innerHTML = "Ingresar código de seguridad para enviar el formulario";
    else
        if (existeCaptcha(text) == true) {
            agregar(event);
            document.querySelector(".alerta").innerHTML = "El formulario se envió correctamente";
            form.reset();
        }
        else {
            document.querySelector(".alerta").innerHTML = "El código de seguridad ingresado es incorrecto"
            cambiarCaptcha();
        }
    cambiarCaptcha();
}


function agregar(event) {
    event.preventDefault();
    let formData = new FormData(form);
    let nombre = formData.get('nombre');
    let apellido = formData.get('apellido');
    let email = formData.get('email');
    let tel = formData.get('telefono');
    let mensaje = formData.get('mensaje');
    console.log(`Nombre: ${nombre}, Apellido:${apellido}, E-Mail: ${email} , Teléfono: ${tel}, Mensaje: ${mensaje}`);

}