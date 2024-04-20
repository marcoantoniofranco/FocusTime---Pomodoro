import { controls } from './elements.js'
import * as actions from './action.js'
import * as el from './elements.js'
import { updateDisplay } from './timer.js'
import state from './state.js'

export const registerControls = () => {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if (typeof actions[action] != 'function') {
      return
    }
    actions[action]()
  })
}

export const setMinutes = () => {
  el.minutes.addEventListener('focus', () => {
    el.minutes.textContent = ''
  })

  el.minutes.onkeydown = (event) => /\d/.test(event.key)

  el.minutes.addEventListener('blur', (event) => {
    let time = event.currentTarget.textContent
    time = time > 60 ? 60 : time

    state.minutes = time
    state.seconds = 0

    updateDisplay()
    el.minutes.removeAttribute('contenteditable')
  })
}
