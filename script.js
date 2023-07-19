console.log("Hola mundo!!")
let cuentas = [
    {nombre: "Natalia", saldo: 200, clave: 12345},
    {nombre: "Carlos", saldo: 990, clave: 223344},
    {nombre: "Joaquin", saldo: 10, clave: 11111}
]
let indice = document.getElementById("persona").value;
let nombre = cuentas[indice].nombre;
let interfaz = "content";
let saldos = localStorage.getItem("saldos") ? JSON.parse(localStorage.getItem("saldos")) : {};

document.getElementById("persona").addEventListener("change", leerPersona)
document.getElementById("acceder").addEventListener("click", validarClave);
document.getElementById("consultar").addEventListener("click", consultarSaldo);
document.getElementById("ingresar").addEventListener("click", ingresarMonto);
document.getElementById("retirar").addEventListener("click", retirarMonto);

document.getElementById("regresar").addEventListener("click", regresar);
document.getElementById("salir").addEventListener("click", salir); 
document.getElementById("salir2").addEventListener("click", salir);
document.getElementById("salir3").addEventListener("click", salir);
document.getElementById("regresar2").addEventListener("click", regresar);
document.getElementById("regresar3").addEventListener("click", regresar);


function leerPersona(){
    indice = document.getElementById("persona").value;
    nombre = cuentas[indice].nombre;
}
leerPersona()
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
        document.getElementById("bienvenida").innerHTML = `Bievenid@ ${nombre}`;
    } else if (document.getElementById("clave").value  == "") {
        document.getElementById("error").innerHTML = "Introduce una clave"
        document.getElementById("error").style.display = "block"
    }
        else{
        document.getElementById("error").innerHTML = "La clave introducida es incorrecta.";
        document.getElementById("error").style.display = "block"
    } 
}
    function consultarSaldo(){
        let saldo = saldos[nombre] !== undefined ? saldos[nombre] : cuentas[indice].saldo || 0;   
        // para acceder a las interfaces
        document.getElementById("interfaz-consulta").style.display = "block"
        document.getElementById("interfaz-content").style.display = "none"
        // representar el saldo de cada usuario
        document.getElementById("saldo").innerHTML = `Su saldo es: ${saldo}$`;
            if (saldo <= 10){
                setTimeout(function() {
                    alert("¡Su saldo se está agotando!");
                }, 500);
            }   else if(saldo >= 990){
                setTimeout(function() {
                    alert("Le sugerimos que haga un retiro o transaccion");
                }, 500);
            }
        interfaz = "consulta";       
}
function ingresarMonto(){
    let inputIngreso = document.getElementById("input-ingreso");
    let ingresar = document.getElementById("ingresar-monto");
    
    ingresar.addEventListener("click", function () {
        let inputValueIn = parseFloat(inputIngreso.value);
        let saldo = saldos[nombre] || cuentas.find((cuenta) => cuenta.nombre === nombre).saldo || 0;
        saldo += inputValueIn; 
        saldos[nombre] = saldo;
        document.getElementById("monto_pre-ingreso").innerHTML = `Su nuevo saldo es ${saldo}$`;

        localStorage.setItem("saldos", JSON.stringify(saldos));
    });
    document.getElementById("interfaz-ingreso").style.display = "block"
    document.getElementById("interfaz-content").style.display = "none"
    
    let saldo = saldos[nombre] || cuentas.find((cuenta) => cuenta.nombre === nombre).saldo || 0;
    document.getElementById("monto_pre-ingreso").innerHTML = `Su saldo es: ${saldo}$`;
    interfaz = "ingreso";
}
function retirarMonto(){
    console.log("algo")
    let inputRetiro = getElementById("input-ingreso");
    let retiro = getElementById("retirar-monto");

    retiro.addEventListener("click", function(){
        let inputValueRe = parseFloat(inputRetiro.value);
        let saldo = saldos[nombre] || cuentas.find((cuenta) => cuenta.nombre === nombre).saldo || 0;
        saldo -= inputValueRe;
        saldos[nombre] = saldo;
        document.getElementById("monto_pre-ingreso").innerHTML = `Su nuevo saldo es ${saldo}$`;
        
        localStorage.setItem("saldos", JSON.stringify(saldos));
    })
    document.getElementById("interfaz-retiro").style.display = "block"
    document.getElementById("interfaz-content").style.display = "none"
    
    let saldo = saldos[nombre] || cuentas.find((cuenta) => cuenta.nombre === nombre).saldo || 0;
    
    document.getElementById("saldo3").innerHTML = `Su saldo es: ${saldo}$`;
    
    interfaz = "retiro";
}

function regresar() {
    if (interfaz === "consulta") {
        document.getElementById("interfaz-content").style.display = "block";
        document.getElementById("interfaz-consulta").style.display = "none";
    } else if (interfaz === "ingreso") {
        document.getElementById("interfaz-content").style.display = "block";
        document.getElementById("interfaz-ingreso").style.display = "none";
    } else if(interfaz === "retiro"){
        document.getElementById("interfaz-content").style.display = "block";
        document.getElementById("interfaz-retiro").style.display = "none";
    }
}

function salir() {
    location.reload();
}



