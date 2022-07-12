export default function initDropDown() {
  const dropDownMenus = document.querySelectorAll('[data-dropdown]')
  function outsideClickFromElement(element, events, callback) {
    const html = document.documentElement
    function clickOutside(event) {
      if (!element.contains(event.target)) {
        html.removeEventListener('click', clickOutside)
        callback()
      }
    }
    html.addEventListener('click', clickOutside)
    const outside = 'data-outside'
    if (!element.hasAttribute(outside)) {
      html.addEventListener('click', clickOutside)
      element.setAttribute(outside, '')
    }
  }
  function handleclick(event) {
    event.preventDefault()
    this.classList.add('active')
    outsideClickFromElement(this, () => {
      this.classList.remove('active')
    })
  }
  dropDownMenus.forEach(item => {
    // item.addEventListener('touchstart', handleclick)
    // item.addEventListener('click', handleclick)
    ;[('touchstart', 'click')].forEach(userEvent => {
      item.addEventListener(userEvent, handleclick)
    })
  })
}
