export default function animaNumeros() {
  function numerosAnimation() {
    const numeros = document.querySelectorAll('[data-numero]')
    numeros.forEach(numero => {
      const total = +numero.innerText
      const incremento = Math.floor(total / 100)
      let start = 0
      const timer = setInterval(() => {
        start += incremento
        numero.innerText = start
        if (start > total) {
          clearInterval(timer)
          numero.innerText = total
        }
      }, 25 * Math.random())
    })
  }
  let observer
  function handleMutation(mut) {
    if (mut[0].target.classList.contains('scroll-animation')) {
      observer.disconnect()
      numerosAnimation()
    }
  }
  const objetoTarget = document.querySelector('.numeros-querySelector')
  observer = new MutationObserver(handleMutation)
  observer.observe(objetoTarget, { attributes: true })
}
