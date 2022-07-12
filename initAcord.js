export default function initAcord() {
  const questionItem = document.querySelectorAll('.js-acord dt')
  const activeClass = 'active'
  function activeArcord() {
    this.classList.add(activeClass)
    this.nextElementSibling.classList.toggle(activeClass)
  }
  if (questionItem.length) {
    questionItem[0].classList.add(activeClass)
    questionItem[0].nextElementSibling.classList.add(activeClass)
    questionItem.forEach(item => {
      item.addEventListener('click', activeArcord)
    })
  }
}
initAcord()
