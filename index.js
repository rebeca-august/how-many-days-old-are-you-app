const dob = document.getElementById('dob')
const form = document.querySelector('form')
const result = document.querySelector('.result')
const timeUnitElement = document.querySelector('select')

let timeUnit = timeUnitElement.value

timeUnitElement.addEventListener('change', () => {
  timeUnit = timeUnitElement.value
})

const getTimeDiff = (diffInMs, timeUnitSelected) => {
  switch (timeUnitSelected) {
    case 'months':
      return Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30))
    case 'weeks':
      return Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 7))
    case 'days':
      return Math.floor(diffInMs / (1000 * 60 * 60 * 24))
    case 'hours':
      return Math.floor(diffInMs / (1000 * 60 * 60))
    case 'seconds':
      return Math.floor(diffInMs / (1000 * 60))
    default:
      throw new Error('Time unit unknown')
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const birthDate = dob.value
  const diffInMs = new Date() - new Date(birthDate)
  const timeDiff = getTimeDiff(diffInMs, timeUnit)
  const resultContent = `
          <p>You are <span class='days'>${timeDiff.toLocaleString()}</span> ${timeUnit} old</p>
          <img src="https://media.giphy.com/media/l4KibWpBGWchSqCRy/source.gif" alt="gif old lady"/>`

  result.innerHTML = resultContent
})
