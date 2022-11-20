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
}

function updateChickenButton() {
  const chickenTotalDisplay = document.getElementById('chicken-total')
  const chickenBuyButtonDisplay = document.getElementById('chicken-buy-button')

  chickenTotalDisplay.textContent = `${getChickenData('total')} (+${getChickenData('bonus') * getChickenData('total')} eps)`
  chickenBuyButtonDisplay.textContent = `Buy (${getChickenData('price')})`
}

window.setInterval(() => {
  localStorage.setItem('score', Number(localStorage.getItem('score')) + getChickenData('bonus') * getChickenData('total'))
  showScore()
}, 1000)

updateChickenButton()
