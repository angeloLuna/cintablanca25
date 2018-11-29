const resultado = document.getElementById('titulo');
const eleccionJugador2 = document.getElementById('eleccion2')
let jugador1 = prompt('Elige');
let jugador2 = 'tijera';


if(jugador1 === 'papel'){

  if (jugador2 === 'papel'){
    resultado.innerHTML = "Empate"
  } else if(jugador2 === 'tijera'){
    resultado.innerHTML = "Pierde jugador 1"
  } else {
    resultado.innerHTML = "Gana jugador 1"
  }

} else if(jugador1 === 'tijera') {
  if (jugador2 === 'papel'){
    resultado.innerHTML = "Gana jugador 1"
  } else if(jugador2 === 'tijera'){
    resultado.innerHTML = "Empate"
  } else {
    resultado.innerHTML = "Pierde jugador 1"
  }
} else {
  if (jugador2 === 'papel'){
    resultado.innerHTML = "Pierde jugador 1"
  } else if(jugador2 === 'tijera'){
    resultado.innerHTML = "Gana jugador 1"
  } else {
    resultado.innerHTML = "Empate"
  }
}

eleccionJugador2.innerHTML = 'el jugador dos elige: ' + jugador2
