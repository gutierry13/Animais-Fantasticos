import outsideClickFromElement from './initdropdown.js'

export default function mobileMenu() {}
const menuButton = document.querySelector('[data-menu="button"]')
const menuList = document.querySelector('[data-menu="list"]')
function openMenu() {
  menuList.classList.add('active')
  menuButton.classList.add('active')
  outsideClickFromElement(menuList, ['click', 'touchstart'], () => {
    console.log('teste')
    menuList.classList.remove('active')
    menuButton.classList.remove('active')
  })
}
menuButton.addEventListener('click', openMenu)
