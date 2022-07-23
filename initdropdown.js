import outsideClick from './dropdown.js'

export default function initdropdown() {
  function handleClick(event) {
    event.preventDefault()
    this.classList.add('active')
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active')
    })
  }
  const dropdownMenus = document.querySelectorAll('[data-dropdown]')
  dropdownMenus.forEach(menu => {
    ;['touchstart', 'click'].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick)
    })
  })
}
