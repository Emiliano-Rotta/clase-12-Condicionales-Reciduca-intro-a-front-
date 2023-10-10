// ir a comprar cigarrillos

// function cigarrillos(edad){
//     if(edad > 17){
//         console.log(`podes ver la página porque tienes ${edad} años.`)
//     }
//     else {
//         console.log(`NO podes ver la página porque tienes ${edad} años.`)
//     }

// }


// var edadPrompt = Number(prompt("ingrese la edad"))
// cigarrillos(edadPrompt)


//clima
// function actividad(clima){
//     if(clima === "llueve"){
//         console.log(`vamos al cine porque ${clima}.`)
//     }
//     else if(clima === "nublado"){
//         console.log(`vamos a la plaza porque esta ${clima}.`)
//     }
//     else if(clima === "sol"){
//         console.log(`vamos a la pileta porque hay ${clima}.`)
//     }
//     else{
//         console.log(`${clima} no está bien escrito.`)
//     }

// }


// var climaPrompt = prompt("ingrese el clima")
// actividad(climaPrompt)



//OPERADORES DE COMPARACION

// > 1 ES MAYOR QUE EL SEGUNDO
// < 1 MENOR QUE EL SEGUNDO
// == DOBLE IGUALDAD
// === TRIPLE IGUALDAD

// function igualdad(numero){
//     if (numero == 2){
//         console.log("doble igualdad")
//     }
//     if (numero === 2){
//         console.log("triple igualdad")
//     }
// }

// igualdad("2")

// >= EL PRIMERO ES MAYOR O IGUAL A
// <= EL PRIMERO ES MENOR O IGAUL A

//! NEGACION (!== NO ES IGUAL (triple igualdad) != no es igual (doble igualdad))


//3 es mayor que 2 --> verdadero  
//3 es menor que 2 --> falso



// EJERCICIO 1: Que el usuario por medio de un prompt escriba cuantos grados hace..
//si hace +30 grados que muestre en consola "Que calor!!!"
//si hace entre 20 y 30 grados que muestre en consola "es un lindo dia!!!"
//si hace -20 pero + 10 grados que muestre en consola "está un poco fresco!!!"
//si hace -10 grados que muestre en consola "Que frio hace!!!"

// EJERCICIO 2: Que el usuario escriba 2 prompt con la contraseña y si coinciden diga, las contraseñas son correctas, y sino que diga.. error.


//Ejercicio 1:


// const titulo = document.querySelector("h1");


// var gradosPrompt = Number(prompt("escriba los grados que hace en tu ciudad"))

// function clima(grados){
//     if(grados >= 30){
//         titulo.textContent = "Que calor!!!"
//         titulo.style.color = "red"
        
//     } 
//     else if(grados >= 20){
//         titulo.textContent = "Es un lindo dia!!!"
//         titulo.style.color = "orange"
//     }
//     else if(grados >= 10){
//         titulo.textContent = "Está un poco fresco!!!"
//         titulo.style.color = "green"
//     }
//     else {
//         titulo.textContent = "Que frio hace!!!"
//         titulo.style.color = "blue"
//     }
// }


// clima(gradosPrompt)


//ejercicio 2:

// const titulo = document.querySelector("h1");


// function password(parUno, parDos){
//     if(parUno === parDos){
//         titulo.textContent = "contrasaeña correcta"
//         titulo.style.color = "green"
//     } else {
//         titulo.textContent = "las contraseñas no son iguales"
//         titulo.style.color = "red"
//     }
// }


// var contraseña = prompt("Escriba su contrseña")
// var validar = prompt("Repita su contrseña")
// password(contraseña, validar)


// && -->significa y
// || -->significa o

//Ejemplo.. para que haya clases, el profesor tiene que tener luz, tiene que tener computadora, internet mas de 100mega

// var luz = true
// var computadora = true
// var megas = 150

// if(luz === true && computadora === true && megas >= 100){
//     console.log("los alumnos tienen clase")
// } else {
//     console.log("Problemas tecnicos")
// }

//Ejemplo: los alumnos para tener clase tienen que tener o una compu, o un celular o una tablet

// var computadora = true
// var celular = false
// var tablet = false

// if (computadora === true || celular === true || tablet === true){
//     console.log("el alumno puede tener clase")
// } else {
//     console.log("el alumno NO PUEDE tener clase")
// }


// otra sintaxis para el condicional TERNARIO

// var edad = 17


//     edad >= 18    ?    console.log("mayor de edad")         :       console.log("menor de edad")
// // La condición       lo que sucede si se da la condición          lo que sucede si no se da la condición 

// //es lo mismo que hacer con..
// if(edad>= 18){
//     console.log("mayor de edad")
// }else {
//     console.log("menor de edad")
// }






//Ejercicios:
// puedeVerPelicula(edad, tieneAutorizacion)
// Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres


// function puedeVerPelicula(edad, tieneAutorizacion){
//     if(edad >=15 || tieneAutorizacion === true){
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }

// puedeVerPelicula(12, false) // false
// puedeVerPelicula(12, true)  // true
// puedeVerPelicula(16, false) // true
// puedeVerPelicula(18, true)  // true


// estaEnRango(valor, minimo, maximo)
// Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango)

// function estaEnRango(valor, minimo, maximo){
//     if(valor >= minimo && valor <= maximo){
//         console.log(true)
//     }
//     else if(valor < minimo){
//         console.log("es false porque el valor es menor al minimo")
//     } else {
//         console.log("es false porque el valor es mayor al maximo")
//     }
// }




// estaEnRango(3, 1, 10)   // true
// estaEnRango(1, 1, 10)   // true
// estaEnRango(10, 1, 10)  // true
// estaEnRango(12, 1, 10)  // false
// estaEnRango(-3, 1, 10)  // false




// tienenMismaLongitud(a, b)

// Crear una función tienenMismaLongitud que tome como argumentos dos strings a y b y devuelva true si tienen la misma longitud o false de lo contrario

// function tienenMismaLongitud(a, b){
//     if (a.length === b.length ){
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }

//Lo mismo pero con ternario

function tienenMismaLongitud (a, b) {
    a.length === b.length ? console.log(true) : console.log(false)
}


tienenMismaLongitud('javascript', 'java') // false
tienenMismaLongitud('manzana', 'cerveza') // true