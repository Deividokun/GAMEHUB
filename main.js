import './style.css'

const gamesHubTemplate = () => {
  return `
  <div class="container">
    <header>
      <nav>
        <div id="GamesHub_datainfo">
          <button id="ufc">Memory Game UFC</button>
          <button id="RPS">Rock Paper and Scissors</button>
          <button id="ncross">Noughts and Crosses</button>
        </div>
      </nav>
    </header>
  </div>
  `
}
const gameCreate = () => {
  const ufc = document.getElementById('ufc')
  const rockPaperSisors = document.getElementById('RPS')
  const ncross = document.getElementById('ncross')
  ufc.addEventListener('click', () => {
    window.location.replace('MemoryGame/memoryGame.html')
  })
  rockPaperSisors.addEventListener('click', () => {
    window.location.replace('rocksPaper/rocksPaper.html')
  })
  ncross.addEventListener('click', () => {
    window.location.replace('TresEnRaya/tresEnRaya.html')
  })
}

const gameHubTemplatePrint = () => {
  document.body.innerHTML = gamesHubTemplate()
  gameCreate()
}

document.addEventListener('DOMContentLoaded', gameHubTemplatePrint)
