import outsideClick from './dropdown.js'

export default function mobileMenu() {}
const menuButton = document.querySelector('[data-menu="button"]')
const menuList = document.querySelector('[data-menu="list"]')
const eventos = ['click', 'touchstart']
function openMenu(event) {
  event.preventDefault()
  menuList.classList.add('active')
  menuButton.classList.add('active')
  outsideClick(menuList, eventos, () => {
    menuList.classList.remove('active')
    menuButton.classList.remove('active')
  })
}
eventos.forEach(evento => {
  menuButton.addEventListener(evento, openMenu)
})
