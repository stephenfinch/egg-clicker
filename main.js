const eggButton = document.getElementById('egg-button')
const scoreDisplay = document.getElementById('score')

eggButton.addEventListener('click', handleClick)

function connect() {
  showScore()
}

function handleClick(_event) {
  playSound('https://cdn.freesound.org/previews/67/67092_931386-lq.mp3')
  localStorage.setItem('score', Number(localStorage.getItem('score')) + 1)
  showScore()
}

function showScore() {
  scoreDisplay.textContent = localStorage.getItem('score')
}

function resetScore() {
  localStorage.setItem('score', 0)
  showScore()
}

const dailog = document.getElementById('dialog')

function openModal() {
  dailog.showModal()
}

function closeModal() {
  dailog.close()
}

function playSound(sound) {
  const audio = new Audio(sound)
  audio.volume = 0.2
  audio.play()
}

connect()
