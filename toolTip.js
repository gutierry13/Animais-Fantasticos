export default class ToolTip {
  constructor(tooltips) {
    this.toolTips = document.querySelectorAll(tooltips)
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
  }

  onMouseLeave({ currentTarget }) {
    this.toolTipBox.remove()
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave)
    currentTarget.removeEventListener('mousemove', this.onMouseMove)
  }

  onMouseMove(event) {
    this.toolTipBox.style.top = `${event.pageY + 20}px`
    if (event.pageX + 690 > window.innerWidth) {
      this.toolTipBox.style.left = `${event.pageX - 190}px`
    } else {
      this.toolTipBox.style.left = `${event.pageX + 20}px`
    }
    console.log(event.pageX + 650, window.innerWidth)
  }

  onMouseOver({ currentTarget }) {
    this.criarToolTipBox(currentTarget)
    currentTarget.addEventListener('mouseleave', this.onMouseLeave)
    currentTarget.addEventListener('mousemove', this.onMouseMove)
  }

  criarToolTipBox(element) {
    const toolTipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')
    toolTipBox.classList.add('tooltip')
    toolTipBox.innerText = text
    document.body.appendChild(toolTipBox)
    this.toolTipBox = toolTipBox
  }

  addToolTipsEvent() {
    this.toolTips.forEach(item => {
      item.addEventListener('mouseover', this.onMouseOver)
    })
  }

  init() {
    if (this.toolTips.length) {
      this.addToolTipsEvent()
    }
    return this
  }
}
