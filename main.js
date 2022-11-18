const eggButton = document.getElementById('egg-button')
const scoreDisplay = document.getElementById('score')
const mainMusic = 'https://cdn.freesound.org/previews/659/659450_5674468-lq.mp3'

eggButton.addEventListener('mousedown', handleClick)

function connect() {
  showScore()
  window.setTimeout(() => {
    playSound(mainMusic, true)
  }, 3000)
}

function handleClick(_event) {
  const popSounds = [
    'https://cdn.freesound.org/previews/411/411642_5121236-lq.mp3',
    'https://cdn.freesound.org/previews/67/67092_931386-lq.mp3',
    'https://cdn.freesound.org/previews/67/67092_931386-lq.mp3',
    'https://cdn.freesound.org/previews/67/67092_931386-lq.mp3',
  ]
  const randomSound = popSounds[Math.floor(Math.random() * popSounds.length)]

  playSound(randomSound)
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

function playSound(sound, loop = false) {
  const audio = new Audio(sound)
  audio.volume = 0.2
  audio.loop = loop
  audio.play()
}

connect()
