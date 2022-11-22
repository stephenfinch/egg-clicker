const defaultShopData = {
  chicken: { price: 10, total: 0, bonus: 1 },
  barn: { price: 1000, total: 0, bonus: 20 },
  farm: { price: 15000, total: 0, bonus: 100 },
  island: { price: 200000, total: 0, bonus: 2500 },
  country: { price: 14000000, total: 0, bonus: 16000 },
}

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
  const barnData = JSON.parse(localStorage.getItem('barns')) || { price: 1000, total: 0, bonus: 20 }
  return barnData[key] ?? barnData
}

function setFarmData(key, value) {
  const newFarmData = getFarmData()
  newFarmData[key] = value
  localStorage.setItem('farms', JSON.stringify(newFarmData))
}

function getFarmData(key) {
  const farmData = JSON.parse(localStorage.getItem('farms')) || { price: 15000, total: 0, bonus: 100 }
  return farmData[key] ?? farmData
}

function setIslandData(key, value) {
  const newIslandData = getIslandData()
  newIslandData[key] = value
  localStorage.setItem('island', JSON.stringify(newIslandData))
}

function getIslandData(key) {
  const islandData = JSON.parse(localStorage.getItem('island')) || { price: 200000, total: 0, bonus: 2500 }
  return islandData[key] ?? islandData
}

function setShopData(name, key, value) {
  const newData = getShopData(name)
  newData[key] = value
  localStorage.setItem(name, JSON.stringify(newData))
}

function getShopData(name, key) {
  const data = JSON.parse(localStorage.getItem(name)) || defaultShopData[name]
  return data[key] ?? data
}
