import * as element from './elements.js'

element.controls.addEventListener('click', (event) => {
  if (event.target.dataset.action) {
    switch (event.target.dataset.action) {
      case 'toggleRunning':
      case 'reset':
        toggleVisibility('[data-action="toggleRunning"]')
        toggleVisibility('[data-action="set"]')
        toggleVisibility('[data-action="reset"]')
        break
      case 'toggleMusic':
        toggleVisibility('[data-action="toggleMusic"]')
        break
    }
  }
})

const toggleVisibility = (selector) => {
  const elements = document.querySelectorAll(selector)
  elements.forEach((element) => {
    element.classList.toggle('hidden')
  })
}
