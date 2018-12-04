'use strict'
// ECMA5
// function saludo(){
//   console.log("hola")
// }

// var saludo = function(){
//   console.log("hola")
// }



// // ECMA6
// const suma = (a, b) => {
//   return a + b
// }

// const multiplicacion = (x, y) => {

//   return x * y
// }


// // console.log( suma(2, 6) )
// console.log( multiplicacion( suma(2,2), 8) );
// // console.log( multiplicacion(9, 2) );
// // console.log( multiplicacion(2, 2) );

const boton =  document.getElementById('boton');
const titulo = document.getElementById('titulo');
const nombre = document.getElementById('nombre');

const handleClick = () => {
  titulo.innerHTML = nombre.value 
}

boton.addEventListener('click', handleClick)

