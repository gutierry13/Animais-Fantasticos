import debounce from './debounce.js'

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections)
    this.windowPath = window.innerHeight * 0.8
    this.checkDistance = debounce(this.checkDistance.bind(this), 20)
  }

  getDistance() {
    this.distance = [...this.sections].map(section => {
      const offset = section.offsetTop
      return {
        element: section,
        offset: Math.floor(offset - this.windowPath)
      }
    })
  }

  checkDistance() {
    this.distance.forEach(section => {
      console.log('teste')
      if (window.pageYOffset > section.offset) {
        section.element.classList.add('scroll-animation')
      } else if (section.element.classList.contains('scroll-animation')) {
        section.element.classList.remove('scroll-animation')
      }
    })
  }

  init() {
    if (this.sections.length) {
      this.getDistance()
      this.checkDistance()
      window.addEventListener('scroll', this.checkDistance)
    }
    return this
  }

  stop() {
    window.removeEventListener('scroll', this.checkDistance)
  }
}
