export default class Accordion {
  constructor(list) {
    this.questionItem = document.querySelectorAll(list)
    this.activeClass = 'active'
  }

  toggleAcord(item) {
    item.classList.add(this.activeClass)
    item.nextElementSibling.classList.toggle(this.activeClass)
  }

  addAccordionEvent() {
    this.questionItem.forEach(item => {
      item.addEventListener('click', () => {
        this.toggleAcord(item)
      })
    })
  }

  init() {
    if (this.questionItem.length) {
      this.toggleAcord(this.questionItem[0])
      this.addAccordionEvent()
    }
  }
}
