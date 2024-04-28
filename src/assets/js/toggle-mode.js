let darkMode = true

const buttonToggle = document.getElementById('toggle-mode')
const iconSun = buttonToggle.querySelector('.ph-sun')
const iconMoon = buttonToggle.querySelector('.ph-moon')

buttonToggle.addEventListener('click', (event) => {
  document.documentElement.classList.toggle('dark')
  darkMode = !darkMode

  iconSun.classList.toggle('hidden')
  iconMoon.classList.toggle('hidden')

  const modeText = darkMode ? 'light mode ativado' : 'dark mode ativado'
  event.currentTarget.querySelector('span').textContent = modeText
})
