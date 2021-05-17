const dob = document.getElementById('dob')
const form = document.querySelector('form')

const dateOfBirth = form.addEventListener('submit', (event) => {
  event.preventDefault()
  const birthDate = dob.value

  const diffInMs = new Date() - new Date(birthDate)
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

  const result = `<div class='result'>
        <p>You are <span class='days'>${diffInDays}</span> days old</p>
        <img src="https://media.giphy.com/media/l4KibWpBGWchSqCRy/source.gif" alt="gif old lady"/>
    </div>`

  form.insertAdjacentHTML('beforeend', result)
})
