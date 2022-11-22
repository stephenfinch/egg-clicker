const coinSounds = [
  'https://cdn.freesound.org/previews/630/630018_12715066-lq.mp3',
  'https://cdn.freesound.org/previews/630/630018_12715066-lq.mp3',
  'https://cdn.freesound.org/previews/630/630018_12715066-lq.mp3',
  'https://cdn.freesound.org/previews/213/213982_3635427-lq.mp3',
]

function shopItemEPS(name) {
  return getShopData(name, 'total') * getShopData(name, 'bonus')
}

// Chickens
function buyChicken() {
  if (Number(localStorage.getItem('score')) >= getChickenData('price')) {
    setChickenData('total', getChickenData('total') + 1)
    localStorage.setItem('score', Number(localStorage.getItem('score')) - getChickenData('price'))
    setChickenData('price', Math.round(getChickenData('price') + getChickenData('total') * 5))

    const randomSound = coinSounds[Math.floor(Math.random() * coinSounds.length)]
    playSound(randomSound, 0.5)
  } else {
    playSound('https://cdn.freesound.org/previews/429/429720_7872621-lq.mp3')
  }

  updateShop()
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

    const randomSound = coinSounds[Math.floor(Math.random() * coinSounds.length)]
    playSound(randomSound, 0.5)
  } else {
    playSound('https://cdn.freesound.org/previews/429/429720_7872621-lq.mp3')
  }

  updateShop()
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
    setBarnData('bonus', Math.max(getFarmData('total') * 4 + 20, 20))

    const randomSound = coinSounds[Math.floor(Math.random() * coinSounds.length)]
    playSound(randomSound, 0.5)
  } else {
    playSound('https://cdn.freesound.org/previews/429/429720_7872621-lq.mp3')
  }

  updateShop()
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
    setFarmData('bonus', Math.max(getIslandData('total') * 3 + 100, 100))

    const randomSound = coinSounds[Math.floor(Math.random() * coinSounds.length)]
    playSound(randomSound, 0.5)
  } else {
    playSound('https://cdn.freesound.org/previews/429/429720_7872621-lq.mp3')
  }

  updateShop()
}

function updateIslandButton() {
  const islandTotalDisplay = document.getElementById('island-total')
  const islandBuyButtonDisplay = document.getElementById('island-buy-button')

  islandTotalDisplay.textContent = `${getIslandData('total')} (+${formatNumber(getIslandData('bonus') * getIslandData('total'))} eps)`
  islandBuyButtonDisplay.textContent = `Buy (${formatNumber(getIslandData('price'))})`
}

// Country
function buyCountry() {
  if (Number(localStorage.getItem('score')) >= getShopData('country', 'price')) {
    setShopData('country', 'total', getShopData('country', 'total') + 1)
    localStorage.setItem('score', Number(localStorage.getItem('score')) - getShopData('country', 'price'))
    setShopData('country', 'price', Math.round(getShopData('country', 'price') + getShopData('country', 'total') * 72199))
    setShopData('island', 'bonus', Math.max(getShopData('country', 'total') * 2 + defaultShopData['country'].bonus, defaultShopData['country'].bonus))

    const randomSound = coinSounds[Math.floor(Math.random() * coinSounds.length)]
    playSound(randomSound, 0.5)
  } else {
    playSound('https://cdn.freesound.org/previews/429/429720_7872621-lq.mp3')
  }

  updateShop()
}

function updateCountryButton() {
  document.getElementById('country-total').textContent = `${getShopData('country', 'total')} (+${formatNumber(shopItemEPS('country'))} eps)`
  document.getElementById('country-buy-button').textContent = `Buy (${formatNumber(getShopData('country', 'price'))})`
}

// Coin
function buyCoin() {
  if (Number(localStorage.getItem('score')) >= getShopData('coin', 'price')) {
    localStorage.setItem('speedrunTime', Date.now())

    setShopData('coin', 'total', getShopData('coin', 'total') + 1)
    localStorage.setItem('score', Number(localStorage.getItem('score')) - getShopData('coin', 'price'))
    setShopData('chickens', 'price', 1)
    setShopData('barns', 'price', 10)
    setShopData('farms', 'price', 100)
    setShopData('island', 'price', 1000)
    setShopData('country', 'price', 10000)

    const winSound = 'https://cdn.freesound.org/previews/609/609336_2770604-lq.mp3'
    playSound(winSound, 0.75)

    const speedrunBanner = document.getElementById('speedrun-banner')
    speedrunBanner.classList.remove('hidden')
    speedrunBanner.textContent = `You won in: ${msToReadableTime(localStorage.getItem('speedrunTime') - localStorage.getItem('timer'))}`
    localStorage.setItem('timer', Date.now())
  } else {
    playSound('https://cdn.freesound.org/previews/429/429720_7872621-lq.mp3')
  }

  updateShop()
}

window.setInterval(() => {
  localStorage.setItem('score', Number(localStorage.getItem('score')) + getChickenData('bonus') * getChickenData('total'))
  localStorage.setItem('score', Number(localStorage.getItem('score')) + getBarnData('bonus') * getBarnData('total'))
  localStorage.setItem('score', Number(localStorage.getItem('score')) + getFarmData('bonus') * getFarmData('total'))
  localStorage.setItem('score', Number(localStorage.getItem('score')) + getIslandData('bonus') * getIslandData('total'))
  localStorage.setItem('score', Number(localStorage.getItem('score')) + shopItemEPS('country'))
  updateShop()
}, 1000)

function updateEggsPerSecond() {
  const eggsPerSecondTotal =
    getChickenData('bonus') * getChickenData('total') +
    getBarnData('bonus') * getBarnData('total') +
    getFarmData('bonus') * getFarmData('total') +
    getIslandData('bonus') * getIslandData('total') +
    shopItemEPS('country')
  const eggsPerSecondDisplay = document.getElementById('eggs-per-second')
  eggsPerSecondDisplay.textContent = `+${formatNumber(eggsPerSecondTotal)} eps`
}

function updateShop() {
  showScore()

  updateChickenButton()
  updateBarnButton()
  updateFarmButton()
  updateIslandButton()
  updateCountryButton()
  updateEggsPerSecond()
}
