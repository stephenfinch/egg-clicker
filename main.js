const eggButton = document.getElementById('egg-button')
const scoreDisplay = document.getElementById('score')
const mainMusic = 'https://cdn.freesound.org/previews/659/659450_5674468-lq.mp3'
const rickRollSong = 'https://ia801602.us.archive.org/11/items/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4?cnt=0'

eggButton.addEventListener('mousedown', handleClick)
let music, rickRollAudio

function connect() {
  if (!localStorage.getItem('timer')) localStorage.setItem('timer', Date.now())
  showScore()
  window.setTimeout(() => {
    music = playSound(mainMusic, 0.2, true)
    if (localStorage.getItem('music') === 'false') {
      music.pause()
    }
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

  playSound(randomSound, 0.5)
  const clickPower = Math.max(
    getChickenData('total') + getBarnData('total') + getFarmData('total') + getShopData('island', 'total') + getShopData('country', 'total'),
    1
  )
  localStorage.setItem('score', Number(localStorage.getItem('score')) + clickPower)
  document.getElementById('egg-button-text').textContent = `+${clickPower} epc`
  showScore()
}

function showScore() {
  scoreDisplay.textContent = formatNumber(localStorage.getItem('score'))
}

function formatNumber(number) {
  return Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 3,
  }).format(number)
}

function resetGame() {
  localStorage.setItem('score', 0)
  localStorage.removeItem('chickens')
  localStorage.removeItem('barns')
  localStorage.removeItem('farms')
  localStorage.removeItem('island')
  localStorage.removeItem('country')
  updateShop()

  localStorage.setItem('timer', Date.now())
  const speedrunBanner = document.getElementById('speedrun-banner')
  speedrunBanner.classList.add('hidden')
}

function playSound(sound, volume = 0.2, loop = false) {
  const audio = new Audio(sound)
  audio.volume = volume
  audio.loop = loop
  audio.play()
  return audio
}

function toggleMusic() {
  if (localStorage.getItem('music') === 'true') {
    music.pause()
    localStorage.setItem('music', 'false')
  } else {
    music.play()
    localStorage.setItem('music', 'true')
  }
  rickRollAudio.pause()
}

function rickRoll() {
  if (rickRollAudio) {
    rickRollAudio.pause()
  }
  music.pause()
  rickRollAudio = playSound(rickRollSong, 1)
}

connect()
