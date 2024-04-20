import state from './state.js'
import * as events from './event.js'
import * as timer from './timer.js'

export const start = (minutes, seconds) => {
  state.minutes = minutes
  state.seconds = seconds

  timer.updateDisplay()

  events.registerControls()
  events.setMinutes()
}
