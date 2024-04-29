import { buttonData } from '../botonReinicio/buttonmain'
import './style.css'

const combinacionesGanadoras = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]

function verificarGanador() {
  let empate = true
  for (const combinacion of combinacionesGanadoras) {
    const [a, b, c] = combinacion
    const celdaA = document.getElementById(a)
    const celdaB = document.getElementById(b)
    const celdaC = document.getElementById(c)

    if (
      celdaA.textContent &&
      celdaA.textContent === celdaB.textContent &&
      celdaB.textContent === celdaC.textContent
    ) {
      return celdaA.textContent
    }

    if (!celdaA.textContent || !celdaB.textContent || !celdaC.textContent) {
      empate = false
    }
  }

  if (empate) {
    return 'empate'
  }

  return null
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('header').appendChild(buttonData)
  //const main = document.querySelector('main')
  const pone = document.getElementById('player1')
  const ptwo = document.getElementById('player2')
  const celdas = document.querySelectorAll('.celda')
  var Jugadores = 1
  document.querySelector('header').appendChild(buttonData)
  celdas.forEach(function (celda) {
    celda.addEventListener('click', function () {
      if (celda.textContent) {
        return ''
      } else if (Jugadores === 1) {
        ptwo.classList.remove('hover2')
        pone.classList.add('hover1')
        botonRojo(this)
        Jugadores = 2
      } else if (Jugadores === 2) {
        pone.classList.remove('hover1')
        ptwo.classList.add('hover2')
        cross(this)
        Jugadores = 1
      }

      const ganador = verificarGanador()
      if (ganador === 'empate') {
        setTimeout(function () {
          alert('¡Empate!')
        }, 1000)
        setTimeout(function () {
          reiniciarJuego()
        }, 1000)
      } else if (ganador) {
        setTimeout(function () {
          alert(`¡${ganador} es el ganador!`)
        }, 1000)
        setTimeout(function () {
          reiniciarJuego()
        }, 1000)
      }
    })
  })
})

function reiniciarJuego() {
  const celdas = document.querySelectorAll('.celda')
  const pone = document.getElementById('player1')
  const ptwo = document.getElementById('player2')
  ptwo.classList.remove('hover2')
  pone.classList.remove('hover1')
  celdas.forEach(function (celda) {
    const botoneteRojo = document.querySelector('.RojoB')
    const blackCross = document.querySelector('.BlackCross')
    if (botoneteRojo) {
      botoneteRojo.remove()
    } else if (blackCross) {
      blackCross.remove()
    }
    celda.textContent = ''
  })
}
function botonRojo(celdas) {
  const botonRojo = document.createElement('p')
  botonRojo.classList.add('RojoB')
  botonRojo.textContent = '🛡️'
  celdas.appendChild(botonRojo)
}
function cross(celdas) {
  const blackCross = document.createElement('p')
  blackCross.classList.add('BlackCross')
  blackCross.textContent = '⚔️'
  celdas.appendChild(blackCross)
}
///header guardado aquí
const header = document.querySelector('header')
///boton gurdado
const Play_Again = document.createElement('button')
Play_Again.classList.add('Play_agaiin')
Play_Again.innerText = 'Play Again'
header.appendChild(Play_Again)
///remove tablero
Play_Again.addEventListener('click', function () {
  const celdas = document.querySelectorAll('.celda')
  const pone = document.getElementById('player1')
  const ptwo = document.getElementById('player2')
  ptwo.classList.remove('hover2')
  pone.classList.remove('hover1')
  celdas.forEach(function (celda) {
    const botoneteRojo = document.querySelector('.RojoB')
    const blackCross = document.querySelector('.BlackCross')
    if (botoneteRojo) {
      botoneteRojo.remove()
    } else if (blackCross) {
      blackCross.remove()
    }
  })
})
