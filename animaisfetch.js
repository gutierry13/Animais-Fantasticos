import AnimaNumeros from './animanumeros.js'

export default function fetchAnimais(url, elemento) {
  const numerosGrid = document.querySelector(elemento)
  function createAnimal(animal) {
    const div = document.createElement('div')
    div.classList.add('numero-animal')
    div.innerHTML = `<h3>${animal.specie}</h3> <span data-numero>${animal.total}<span>`
    return div
  }
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal)
    numerosGrid.appendChild(divAnimal)
  }
  function animaAnimaisNumeros() {
    const animanumeros = new AnimaNumeros(
      '[data-numero]',
      'scroll-animation',
      '.numeros-querySelector'
    )
    animanumeros.init()
  }
  async function criarAnimais() {
    try {
      const animaisResposta = await fetch(url)
      const animaisjson = await animaisResposta.json()
      animaisjson.forEach(animal => preencherAnimais(animal))
      animaAnimaisNumeros()
    } catch (erro) {
      console.log(erro)
    }
  }
  return criarAnimais()
}
