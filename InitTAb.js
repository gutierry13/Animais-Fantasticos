export default function initTabMenu() {
  const menu = document.querySelectorAll('.js-tabmenu li')
  const desc = document.querySelectorAll('.js-description section')
  const newTabClass = 'newclass'
  function activeTab(index) {
    desc.forEach(section => {
      section.classList.remove(newTabClass)
    })
    desc[index].classList.add(newTabClass)
  }
  if (menu.length && desc.length) {
    desc[0].classList.add(newTabClass)

    menu.forEach((item, index) => {
      item.addEventListener('click', () => {
        activeTab(index)
      })
    })
  }
}
initTabMenu()
