export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections)
    this.windowPath = window.innerHeight * 0.6
    this.animationScroll = this.animationScroll.bind(this)
  }

  animationScroll() {
    this.sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top
      const sectionVisible = sectionTop - this.windowPath < 0
      if (sectionVisible) {
        section.classList.add('scroll-animation')
        // } else if (section.classList.contains('scroll-animation')) {
        //   section.classList.remove('scroll-animation')
      } else {
        section.classList.remove('scroll-animation')
      }
    })
  }

  init() {
    this.animationScroll()
    window.addEventListener('scroll', this.animationScroll)
  }
}
