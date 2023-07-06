console.log("Hola mundo!!")
let cuentas = [
    {nombre: ""},
    {nombre: "Natalia", saldo: 200, clave: 12345},
    {nombre: "Carlos", saldo: 290, clave: 223344},
    {nombre: "Joaquin", saldo: 67, clave: 11111}
]
document.getElementById("persona").addEventListener("change", leerPersona)
document.getElementById("acceder").addEventListener("click", validarClave);
function leerPersona(){
    let indice = document.getElementById("persona").value;
    let nombre = cuentas[indice].nombre;
    let saldo = cuentas[indice].saldo; // aun no le doy un uso
    document.getElementById("saludo").innerHTML = "Hola, " + nombre;
    if (nombre === ""){
        document.getElementById("saludo").innerHTML = "";
    }
}
function validarClave(){
    let indice = document.getElementById("persona").value;
    let nombre = cuentas[indice].nombre;
    let clave = document.getElementById("clave").value;
    console.log(nombre)
    console.log(clave)

    let usuarioValido = cuentas.find(function(usr){
        return usr.nombre == nombre && usr.clave == clave;
    });
    console.log(usuarioValido)

    if (usuarioValido){
        document.querySelector(".input").style.display = "none"
        document.querySelector("#interfaz-content").style.display = "block";
    } else if (document.getElementById("clave").value  == "") {
        alert("Introduce una clave")
    }
        else{
        document.getElementById("error").innerHTML = "La clave introducida es incorrecta.";
        document.getElementById("error").style.display = "block"
        
        setTimeout(function() {
            document.getElementById("error").style.display = "none";
        }, 3000);
    }
}


