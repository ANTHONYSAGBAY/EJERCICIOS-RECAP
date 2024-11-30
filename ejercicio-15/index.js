let Cuenta = prompt("¿Tienes una cuenta? ") === "sí";
let Clave = prompt("¿Conoces la contraseña? ") === "sí";

if (Cuenta && Clave) {
    alert("Acceso concedido");
} else {
    alert("Acceso denegado");
}
