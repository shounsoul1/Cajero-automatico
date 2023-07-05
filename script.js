console.log("Hola mundo!!")
let cuentas = [
    {nombre: ""},
    {nombre: "Natalia", saldo: 200, password: 12345},
    {nombre: "Carlos", saldo: 290, password: 223344},
    {nombre: "Joaquin", saldo: 67, password: 11111}
]
document.getElementById("persona").addEventListener("change", leerPersona)

function leerPersona(){
    let indice = document.getElementById("persona").value;
    let nombre = cuentas[indice].nombre;
    let saldo = cuentas[indice].saldo;
    document.getElementById("saludo").innerHTML = "Hola, " + nombre;
    if (nombre == ""){
        document.getElementById("saludo").innerHTML = "" + nombre;
    }
}
function validarPassword(){
    let indice = document.getElementById("persona").value;
    let password = document.getElementById("password").value;
    let passwordCorrecta = cuentas[indice].password;
    if (password === passwordCorrecta){
        document.querySelector(".input").style.display = "none"
        alert("Correcto!!")
    }
}

function cambiarDePagina(){
    
}

