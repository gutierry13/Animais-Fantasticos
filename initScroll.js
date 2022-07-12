export default function initScroll() {
  const internalLink = document.querySelectorAll('.js-nav a[href^="#"]')
  function scrollToSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    // const topo = section.offsetTop
    // window.scroll({
    //   top: topo,
    //   behavior: 'smooth'
    // })
  }
  internalLink.forEach(link => {
    link.addEventListener('click', scrollToSection)
  })
}
initScroll()
