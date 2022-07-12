export default function initToolTip() {
  const toolTips = document.querySelectorAll('[data-tooltip=""]')
  const onmouseleave = {
    toolTipBox: '',
    handleEvent() {
      this.toolTipBox.remove()
    }
  }
  const onMouseMove = {
    handleEvent(event) {
      this.toolTipBox.style.top = `${event.pageY + 20}px`
      this.toolTipBox.style.left = `${event.pageX + 20}px`
    }
  }
  function criarToolTipBox(element) {
    const toolTipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')
    toolTipBox.classList.add('tooltip')
    toolTipBox.innerText = text
    document.body.appendChild(toolTipBox)
    return toolTipBox
  }
  function onMouseOver() {
    const toolTipBox = criarToolTipBox(this)

    onmouseleave.toolTipBox = toolTipBox
    onMouseMove.toolTipBox = toolTipBox
    this.addEventListener('mouseleave', onmouseleave)
    this.addEventListener('mousemove', onMouseMove)
  }
  toolTips.forEach(item => {
    item.addEventListener('mouseover', onMouseOver)
  })
}
