function setChickenData(key, value) {
  const newChickenData = getChickenData()
  newChickenData[key] = value
  localStorage.setItem('chickens', JSON.stringify(newChickenData))
}

function getChickenData(key) {
  const chickenData = JSON.parse(localStorage.getItem('chickens')) || { price: 10, total: 0, bonus: 1 }
  return chickenData[key] ?? chickenData
}

function setBarnData(key, value) {
  const newBarnData = getBarnData()
  newBarnData[key] = value
  localStorage.setItem('barns', JSON.stringify(newBarnData))
}

function getBarnData(key) {
  const barnData = JSON.parse(localStorage.getItem('barns')) || { price: 1000, total: 0, bonus: 25 }
  return barnData[key] ?? barnData
}

function setFarmData(key, value) {
  const newFarmData = getFarmData()
  newFarmData[key] = value
  localStorage.setItem('farms', JSON.stringify(newFarmData))
}

function getFarmData(key) {
  const farmData = JSON.parse(localStorage.getItem('farms')) || { price: 25000, total: 0, bonus: 100 }
  return farmData[key] ?? farmData
}
