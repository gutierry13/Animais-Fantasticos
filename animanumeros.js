export default class AnimaNumeros {
  constructor(numeros, observerclass, objetoTarget) {
    this.numeros = document.querySelectorAll(numeros)
    this.observerclass = observerclass
    this.objetoTarget = document.querySelector(objetoTarget)
    this.handleMutation = this.handleMutation.bind(this)
  }

  static incrementoNumero(numero) {
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
  }

  numerosAnimation() {
    this.numeros.forEach(numero => {
      this.constructor.incrementoNumero(numero)
    })
  }

  handleMutation(mut) {
    if (mut[0].target.classList.contains(this.observerclass)) {
      this.observer.disconnect()
      this.numerosAnimation()
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation)
    this.observer.observe(this.objetoTarget, { attributes: true })
  }

  init() {
    if (this.numeros.length && this.objetoTarget) {
      this.addMutationObserver()
    }

    return this
  }
}
