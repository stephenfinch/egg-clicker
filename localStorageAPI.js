function setChickenData(key, value) {
  const newChickenData = getChickenData()
  newChickenData[key] = value
  localStorage.setItem('chickens', JSON.stringify(newChickenData))
}

function getChickenData(key) {
  const chickenData = JSON.parse(localStorage.getItem('chickens')) || { price: 10, total: 0, bonus: 1 }
  return chickenData[key] ?? chickenData
}
