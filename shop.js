// Chickens
function buyChicken() {
  if (Number(localStorage.getItem('score')) >= getChickenData('price')) {
    setChickenData('total', getChickenData('total') + 1)
    localStorage.setItem('score', Number(localStorage.getItem('score')) - getChickenData('price'))
    setChickenData('price', Math.round(getChickenData('price') + getChickenData('total') * 5))
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

  chickenTotalDisplay.textContent = `${getChickenData('total')} (+${formatNumber(getChickenData('bonus') * getChickenData('total'))} eps)`
  chickenBuyButtonDisplay.textContent = `Buy (${formatNumber(getChickenData('price'))})`
}

// Barns
function buyBarn() {
  if (Number(localStorage.getItem('score')) >= getBarnData('price')) {
    setBarnData('total', getBarnData('total') + 1)
    localStorage.setItem('score', Number(localStorage.getItem('score')) - getBarnData('price'))
    setBarnData('price', Math.round(getBarnData('price') + getBarnData('total') * 79))
    setChickenData('bonus', Math.max(getBarnData('total'), 1))
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

  barnTotalDisplay.textContent = `${getBarnData('total')} (+${formatNumber(getBarnData('bonus') * getBarnData('total'))} eps)`
  barnBuyButtonDisplay.textContent = `Buy (${formatNumber(getBarnData('price'))})`
}

// Farms
function buyFarm() {
  if (Number(localStorage.getItem('score')) >= getFarmData('price')) {
    setFarmData('total', getFarmData('total') + 1)
    localStorage.setItem('score', Number(localStorage.getItem('score')) - getFarmData('price'))
    setFarmData('price', Math.round(getFarmData('price') + getFarmData('total') * 751))
    setBarnData('bonus', Math.max(getFarmData('total') * 2 + 20, 20))
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
    updateBarnButton()
  } else {
    playSound('https://cdn.freesound.org/previews/429/429720_7872621-lq.mp3')
    console.log('you do not have enough eggs')
  }

  updateEggsPerSecond()
}

function updateFarmButton() {
  const farmTotalDisplay = document.getElementById('farm-total')
  const farmBuyButtonDisplay = document.getElementById('farm-buy-button')

  farmTotalDisplay.textContent = `${getFarmData('total')} (+${formatNumber(getFarmData('bonus') * getFarmData('total'))} eps)`
  farmBuyButtonDisplay.textContent = `Buy (${formatNumber(getFarmData('price'))})`
}

// Islands
function buyIsland() {
  if (Number(localStorage.getItem('score')) >= getIslandData('price')) {
    setIslandData('total', getIslandData('total') + 1)
    localStorage.setItem('score', Number(localStorage.getItem('score')) - getIslandData('price'))
    setIslandData('price', Math.round(getIslandData('price') + getIslandData('total') * 25021))
    setFarmData('bonus', Math.max(getIslandData('total') * 2 + 100, 100))
    const coinSounds = [
      'https://cdn.freesound.org/previews/630/630018_12715066-lq.mp3',
      'https://cdn.freesound.org/previews/630/630018_12715066-lq.mp3',
      'https://cdn.freesound.org/previews/630/630018_12715066-lq.mp3',
      'https://cdn.freesound.org/previews/213/213982_3635427-lq.mp3',
    ]
    const randomSound = coinSounds[Math.floor(Math.random() * coinSounds.length)]

    playSound(randomSound, 0.5)
    showScore()
    updateIslandButton()
    updateFarmButton()
  } else {
    playSound('https://cdn.freesound.org/previews/429/429720_7872621-lq.mp3')
    console.log('you do not have enough eggs')
  }

  updateEggsPerSecond()
}

function updateIslandButton() {
  const islandTotalDisplay = document.getElementById('island-total')
  const islandBuyButtonDisplay = document.getElementById('island-buy-button')

  islandTotalDisplay.textContent = `${getIslandData('total')} (+${formatNumber(getIslandData('bonus') * getIslandData('total'))} eps)`
  islandBuyButtonDisplay.textContent = `Buy (${formatNumber(getIslandData('price'))})`
}

window.setInterval(() => {
  localStorage.setItem('score', Number(localStorage.getItem('score')) + getChickenData('bonus') * getChickenData('total'))
  localStorage.setItem('score', Number(localStorage.getItem('score')) + getBarnData('bonus') * getBarnData('total'))
  localStorage.setItem('score', Number(localStorage.getItem('score')) + getFarmData('bonus') * getFarmData('total'))
  localStorage.setItem('score', Number(localStorage.getItem('score')) + getIslandData('bonus') * getIslandData('total'))
  showScore()
}, 1000)

function updateEggsPerSecond() {
  const eggsPerSecondTotal =
    getChickenData('bonus') * getChickenData('total') +
    getBarnData('bonus') * getBarnData('total') +
    getFarmData('bonus') * getFarmData('total') +
    getIslandData('bonus') * getIslandData('total')
  const eggsPerSecondDisplay = document.getElementById('eggs-per-second')
  eggsPerSecondDisplay.textContent = `+${formatNumber(eggsPerSecondTotal)} eps`
}

updateChickenButton()
updateBarnButton()
updateFarmButton()
updateIslandButton()
updateEggsPerSecond()
