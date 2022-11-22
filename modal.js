const dailog = document.getElementById('dialog')
let updateLoop

function openModal() {
  dailog.showModal()
  updateLoop = window.setInterval(() => {
    updateTimerDisplay()
  }, 1)
}

function closeModal() {
  dailog.close()
  window.clearInterval(updateLoop)
}

function updateTimerDisplay() {
  document.getElementById('timer').textContent = `Timer: ${msToReadableTime(Date.now() - localStorage.getItem('timer'))}`
}

function msToReadableTime(time) {
  const second = 1000
  const minute = second * 60
  const hour = minute * 60

  let hours = Math.floor((time / hour) % 24)
  let minutes = Math.floor((time / minute) % 60)
  let seconds = Math.floor((time / second) % 60)

  let output = []
  if (hours) output.push(hours + ' Hrs')
  if (minutes) output.push(minutes + ' Min')
  if (seconds) output.push(seconds + ' Sec')

  return output.join(', ')
}
