import { buttonData } from '../botonReinicio/buttonmain'
import './style.css'

const bodyTmplate = () => {
  return `
  <header> 
  <nav id = "create_playerdataInfo">
  <input id = "ElijeTuJugador"></input>
  <button id = "LanzaElNombre">create</button>
  </nav>
  </header>
 <main>
  <div class="counter">
  <button id="PlayAgain">Play Again</button>
      <div class="U12">
        <h2 id = "Jugador1"></h2>
        <p id = "counter">0</p>
      </div>
      <div id = "Jugadas">
      <h4 id ="empateWLDATA"><h4>
      </div>
      <div class="U2">
        <h2>💻</h2>
        <p id = "CounterMachine">0</p>
      </div>
    <div class="movimientos-data">
      <div id="rock" class="movimientoDataclist">✊</div>
      <div id="paper" class="movimientoDataclist">🖐️</div>
      <div id="sisor" class="movimientoDataclist">✌️</div>
    </div>
  </div>
  </main>
  
  `
}
const InputPlayer = () => {
  const create = document.getElementById('LanzaElNombre')
  const createInput = document.getElementById('ElijeTuJugador')
  let playerOne = document.getElementById('Jugador1')
  create.addEventListener('click', () => {
    playerOne.innerHTML = createInput.value
  })
}
const PlayAgain = () => {
  const createInput = document.getElementById('ElijeTuJugador')
  let playerOne = document.getElementById('Jugador1')
  const butonPA = document.getElementById('PlayAgain')
  const empate = document.getElementById('empateWLDATA')
  butonPA.addEventListener('click', () => {
    let counter = document.getElementById('counter')
    let counterDosMachine = document.getElementById('CounterMachine')
    counter.textContent = 0
    counterDosMachine.textContent = 0
    empate.textContent = ''
    playerOne.textContent = ''
    createInput.value = ''
  })
}
const logicGame = () => {
  //selectores
  const buttons = document.querySelectorAll('.movimientoDataclist')
  let counter = document.getElementById('counter')
  let counterDosMachine = document.getElementById('CounterMachine')
  //recorredor de los divs con su clase
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      ///empate
      const empate = document.getElementById('empateWLDATA')
      empate.innerHTML = ''
      //math random
      const arrayRandom = ['rock', 'paper', 'sisor']
      const randomIndex = Math.floor(Math.random() * arrayRandom.length)
      const randomName = arrayRandom[randomIndex]
      let selectionEmoji = button.id
      //condicionales
      if (randomName === selectionEmoji) {
        empate.innerHTML = 'TIE!'
      } else {
        if (
          (selectionEmoji === 'rock' && randomName === 'sisor') ||
          (selectionEmoji === 'sisor' && randomName === 'paper') ||
          (selectionEmoji === 'paper' && randomName === 'rock')
        ) {
          let currentValue = parseInt(counter.textContent)
          counter.textContent = currentValue + 1
          empate.innerHTML = 'YOU WIN!'
        } else {
          let currentValue2 = parseInt(counterDosMachine.textContent)
          counterDosMachine.textContent = currentValue2 + 1
          empate.innerHTML = 'Winning Machine!'
        }
      }
    })
  })
}

logicGame()

export const printTemplateBody = () => {
  document.body.innerHTML = bodyTmplate()
  logicGame()
  PlayAgain()
  InputPlayer()
  document.querySelector('header').appendChild(buttonData)
}

document.addEventListener('DOMContentLoaded', printTemplateBody)
