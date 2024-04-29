import { buttonData } from '../botonReinicio/buttonmain'
import './styleMemory.css'

const MainAndGame = () => {
  return `
  <main>
  <div id = "hdr">
  <h1>MEMORY GAME UFC</h1>
  </div>
  <div class="grid-container">
  <div class="card" >
    <div class="card-inner">
      <div class="card-front">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/2560px-UFC_Logo.svg.png" alt="">
      </div>
      <div class="card-back">
        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSrDryzGWlgPXBR9vQ8rvysJcBXRT9wrMLJfrgrHiImEOcVn337" alt="">
      </div>
    </div>
  </div>
  <div class="card" >
    <div class="card-inner">
      <div class="card-front">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/2560px-UFC_Logo.svg.png" alt="">
      </div>
      <div class="card-back">
      <img src="https://fotografias.lasexta.com/clipping/cmsimages01/2020/04/04/7E839305-7051-433E-AEDF-9469CD2C45AD/104.jpg?crop=800,800,x287,y0&width=1200&height=1200&optimize=low&format=webply" alt="">
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/2560px-UFC_Logo.svg.png" alt="">
      </div>
      <div class="card-back">
        <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2023-10/MAKHACHEV_ISLAM_BELT_L_10-21.png?itok=glu3eHJa" alt="">
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/2560px-UFC_Logo.svg.png" alt="">
      </div>
      <div class="card-back">
        <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2023-10/MAKHACHEV_ISLAM_BELT_L_10-21.png?itok=glu3eHJa" alt="">
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/2560px-UFC_Logo.svg.png" alt="">
      </div>
      <div class="card-back">
        <img src="https://s3.superluchas.com/2022/04/St-Pierre-GSP-1.jpg" alt="">
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/2560px-UFC_Logo.svg.png" alt="">
      </div>
      <div class="card-back">
      <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSrDryzGWlgPXBR9vQ8rvysJcBXRT9wrMLJfrgrHiImEOcVn337" alt="">
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/2560px-UFC_Logo.svg.png" alt="">
      </div>
      <div class="card-back">
        <img src="https://fotografias.lasexta.com/clipping/cmsimages01/2020/04/04/7E839305-7051-433E-AEDF-9469CD2C45AD/104.jpg?crop=800,800,x287,y0&width=1200&height=1200&optimize=low&format=webply" alt="">
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/2560px-UFC_Logo.svg.png" alt="">
      </div>
      <div class="card-back">
        <img src="https://image.ondacero.es/clipping/cmsimages02/2024/02/15/1EAEC493-DC23-4B6F-AE43-9D3C64D77152/ilia-topuria-foto-archivo_104.jpg?crop=683,683,x181,y0&width=1200&height=1200&optimize=low&format=webply" alt="">
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/2560px-UFC_Logo.svg.png" alt="">
      </div>
      <div class="card-back">
        <img src="https://ih1.redbubble.net/image.4433669833.8910/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alt="">
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/2560px-UFC_Logo.svg.png" alt="">
      </div>
      <div class="card-back">
        <img src="https://hips.hearstapps.com/hmg-prod/images/khabib-nurmagomedov-of-russia-poses-on-the-scale-during-the-news-photo-1608027423.?crop=0.66689xw:1xh;center,top&resize=2048:*" alt="">
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/2560px-UFC_Logo.svg.png" alt="">
      </div>
      <div class="card-back">
        <img src="https://s3.superluchas.com/2022/04/St-Pierre-GSP-1.jpg" alt="">
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/2560px-UFC_Logo.svg.png" alt="">
      </div>
      <div class="card-back">
        <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2023-03/JONES_JON_L_BELT_03_04.png?itok=P6J6DQpm" alt="">
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/2560px-UFC_Logo.svg.png" alt="">
      </div>
      <div class="card-back">
        <img src="https://hips.hearstapps.com/hmg-prod/images/khabib-nurmagomedov-of-russia-poses-on-the-scale-during-the-news-photo-1608027423.?crop=0.66689xw:1xh;center,top&resize=2048:*" alt="">
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/2560px-UFC_Logo.svg.png" alt="">
      </div>
      <div class="card-back">
        <img src="https://ih1.redbubble.net/image.4433669833.8910/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alt="">
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/2560px-UFC_Logo.svg.png" alt="">
      </div>
      <div class="card-back">
        <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2023-03/JONES_JON_L_BELT_03_04.png?itok=P6J6DQpm" alt="">
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/2560px-UFC_Logo.svg.png" alt="">
      </div>
      <div class="card-back">
      <img src="https://image.ondacero.es/clipping/cmsimages02/2024/02/15/1EAEC493-DC23-4B6F-AE43-9D3C64D77152/ilia-topuria-foto-archivo_104.jpg?crop=683,683,x181,y0&width=1200&height=1200&optimize=low&format=webply" alt="">
    </div>
  </div>
  </div>
  </main>
    
  `
}

const LogicGame = () => {
  let arrayBack = []
  //cartas
  let firstCard = null
  let firstCardElement = null
  //contador
  let counterN = 0
  //celdas
  const cellClass = document.querySelectorAll('.card')

  cellClass.forEach((card) => {
    card.addEventListener('click', (ev) => {
      const backImage = card.querySelector('.card-back img')
      const srcImageBack = backImage.getAttribute('src')
      if (firstCard === null) {
        firstCard = srcImageBack
        firstCardElement = card
        card.classList.add('is-flipped')
      } else if (firstCard === srcImageBack) {
        card.classList.add('is-flipped')
        counterN++
        console.log(counterN)
        firstCard = null
        arrayBack.push(srcImageBack)
      } else if (firstCard !== srcImageBack) {
        card.classList.add('is-flipped')
        setTimeout(() => {
          card.classList.remove('is-flipped')
          firstCardElement.classList.remove('is-flipped')
          firstCard = null
          firstCardElement = null
        }, 1000)
      }
      if (counterN === 8) {
        setTimeout(() => {
          resetGame()
        }, 2000)
      }
    })
  })
  function resetGame() {
    counterN = 0 // Reiniciar el contador
    cellClass.forEach((card) => {
      card.classList.remove('is-flipped')
    })
    alert('HAS GANADO')
  }
}

// const playAgain = () => {
//   const button = document.getElementById('pagain')
//   const cellClass = document.querySelectorAll('.card')
//   cellClass.forEach((card) => {
//     button.addEventListener('click', () => {
//       card.classList.remove('is-flipped')
//     })
//   })
// }

export const PrintTemplateGameMemory = () => {
  const main = document.querySelector('main')
  if (main) {
    main.innerHTML = MainAndGame()
    LogicGame()
    document.getElementById('hdr').appendChild(buttonData)
  } else {
    console.error("No se encontró el elemento 'main'")
  }
}

document.addEventListener('DOMContentLoaded', PrintTemplateGameMemory)
