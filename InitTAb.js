export default class initTabMenu {
  constructor(menu, content) {
    this.menu = document.querySelectorAll(menu)
    this.desc = document.querySelectorAll(content)
    this.newTabClass = 'newclass'
  }

  activeTab(index) {
    this.desc.forEach(section => {
      section.classList.remove(this.newTabClass)
    })
    this.desc[index].classList.add(this.newTabClass)
  }

  addTabNavEvent() {
    this.menu.forEach((item, index) => {
      item.addEventListener('click', () => {
        this.activeTab(index)
      })
    })
  }

  init() {
    if (this.menu.length && this.desc.length) {
      this.activeTab(0)
      this.addTabNavEvent()
    }
  }
}
