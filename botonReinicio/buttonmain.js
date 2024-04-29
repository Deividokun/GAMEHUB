export const buttonData = document.createElement('button')
buttonData.classList.add('home')
buttonData.textContent = 'Home'

buttonData.addEventListener('click', () => {
  window.location.replace('../index.html')
})
