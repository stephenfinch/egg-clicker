const eggButton = document.getElementById('egg-button')
const scoreDisplay = document.getElementById('score')

eggButton.addEventListener('click', handleClick)

function connect() {
  showScore()
}

function handleClick(_event) {
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

connect()
