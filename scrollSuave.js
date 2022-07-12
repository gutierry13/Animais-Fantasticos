export default function initAnimationScroll() {
  const sections = document.querySelectorAll('.js-scroll')
  const windowPath = window.innerHeight * 0.6
  function animationScroll() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top
      const sectionVisible = sectionTop - windowPath < 0
      if (sectionVisible) {
        section.classList.add('scroll-animation')
        // } else if (section.classList.contains('scroll-animation')) {
        //   section.classList.remove('scroll-animation')
      } else {
        section.classList.remove('scroll-animation')
      }
    })
  }
  animationScroll()
  window.addEventListener('scroll', animationScroll)
}
