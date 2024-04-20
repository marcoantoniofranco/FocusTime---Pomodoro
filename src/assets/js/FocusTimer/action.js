import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export const toggleRunning = () => {
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.countdown()

  sounds.buttonPressAudio.play()
}

export const reset = () => {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()

  sounds.buttonPressAudio.play()
}

export const set = () => {
  el.minutes.setAttribute('contenteditable', true)
  el.minutes.focus()
}

export const toggleMusic = () => {
  state.isMute = document.documentElement.classList.toggle('music-on')

  if (state.isMute) {
    sounds.bgAudio.play()
  } else {
    sounds.bgAudio.pause()
  }
}
