// Chickens
function buyChicken() {
  if (Number(localStorage.getItem('score')) >= getChickenData('price')) {
    setChickenData('total', getChickenData('total') + 1)
    localStorage.setItem('score', Number(localStorage.getItem('score')) - getChickenData('price'))
    setChickenData('price', Math.round(getChickenData('total') * getChickenData('total') * 0.5 + 10))
    const coinSounds = [
      'https://cdn.freesound.org/previews/630/630018_12715066-lq.mp3',
      'https://cdn.freesound.org/previews/630/630018_12715066-lq.mp3',
      'https://cdn.freesound.org/previews/630/630018_12715066-lq.mp3',
      'https://cdn.freesound.org/previews/213/213982_3635427-lq.mp3',
    ]
    const randomSound = coinSounds[Math.floor(Math.random() * coinSounds.length)]

    playSound(randomSound, 0.5)
    showScore()
    updateChickenButton()
  } else {
    playSound('https://cdn.freesound.org/previews/429/429720_7872621-lq.mp3')
    console.log('you do not have enough eggs')
  }

  updateEggsPerSecond()
}

function updateChickenButton() {
  const chickenTotalDisplay = document.getElementById('chicken-total')
  const chickenBuyButtonDisplay = document.getElementById('chicken-buy-button')

  chickenTotalDisplay.textContent = `${getChickenData('total')} (+${getChickenData('bonus') * getChickenData('total')} eps)`
  chickenBuyButtonDisplay.textContent = `Buy (${getChickenData('price')})`
}

// Barns
function buyBarn() {
  if (Number(localStorage.getItem('score')) >= getBarnData('price')) {
    setBarnData('total', getBarnData('total') + 1)
    localStorage.setItem('score', Number(localStorage.getItem('score')) - getBarnData('price'))
    setBarnData('price', Math.round(getBarnData('total') * getBarnData('total') * 0.5 + 1000))
    const coinSounds = [
      'https://cdn.freesound.org/previews/630/630018_12715066-lq.mp3',
      'https://cdn.freesound.org/previews/630/630018_12715066-lq.mp3',
      'https://cdn.freesound.org/previews/630/630018_12715066-lq.mp3',
      'https://cdn.freesound.org/previews/213/213982_3635427-lq.mp3',
    ]
    const randomSound = coinSounds[Math.floor(Math.random() * coinSounds.length)]

    playSound(randomSound, 0.5)
    showScore()
    updateBarnButton()
  } else {
    playSound('https://cdn.freesound.org/previews/429/429720_7872621-lq.mp3')
    console.log('you do not have enough eggs')
  }

  updateEggsPerSecond()
}

function updateBarnButton() {
  const barnTotalDisplay = document.getElementById('barn-total')
  const barnBuyButtonDisplay = document.getElementById('barn-buy-button')

  barnTotalDisplay.textContent = `${getBarnData('total')} (+${getBarnData('bonus') * getBarnData('total')} eps)`
  barnBuyButtonDisplay.textContent = `Buy (${getBarnData('price')})`
}

// Farms
function buyFarm() {
  if (Number(localStorage.getItem('score')) >= getFarmData('price')) {
    setFarmData('total', getFarmData('total') + 1)
    localStorage.setItem('score', Number(localStorage.getItem('score')) - getFarmData('price'))
    setFarmData('price', Math.round(getFarmData('total') * getFarmData('total') * 0.5 + 25000))
    const coinSounds = [
      'https://cdn.freesound.org/previews/630/630018_12715066-lq.mp3',
      'https://cdn.freesound.org/previews/630/630018_12715066-lq.mp3',
      'https://cdn.freesound.org/previews/630/630018_12715066-lq.mp3',
      'https://cdn.freesound.org/previews/213/213982_3635427-lq.mp3',
    ]
    const randomSound = coinSounds[Math.floor(Math.random() * coinSounds.length)]

    playSound(randomSound, 0.5)
    showScore()
    updateFarmButton()
  } else {
    playSound('https://cdn.freesound.org/previews/429/429720_7872621-lq.mp3')
    console.log('you do not have enough eggs')
  }

  updateEggsPerSecond()
}

function updateFarmButton() {
  const farmTotalDisplay = document.getElementById('farm-total')
  const farmBuyButtonDisplay = document.getElementById('farm-buy-button')

  farmTotalDisplay.textContent = `${getFarmData('total')} (+${getFarmData('bonus') * getFarmData('total')} eps)`
  farmBuyButtonDisplay.textContent = `Buy (${getFarmData('price')})`
}

window.setInterval(() => {
  localStorage.setItem('score', Number(localStorage.getItem('score')) + getChickenData('bonus') * getChickenData('total'))
  localStorage.setItem('score', Number(localStorage.getItem('score')) + getBarnData('bonus') * getBarnData('total'))
  localStorage.setItem('score', Number(localStorage.getItem('score')) + getFarmData('bonus') * getFarmData('total'))
  showScore()
}, 1000)

function updateEggsPerSecond() {
  const eggsPerSecondTotal = getChickenData('bonus') * getChickenData('total') + getBarnData('bonus') * getBarnData('total') + getFarmData('bonus') * getFarmData('total')
  const eggsPerSecondDisplay = document.getElementById('eggs-per-second')
  eggsPerSecondDisplay.textContent = `+${eggsPerSecondTotal} eps`
}

updateChickenButton()
updateBarnButton()
updateFarmButton()
updateEggsPerSecond()
