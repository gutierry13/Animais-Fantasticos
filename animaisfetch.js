import AnimaNumeros from './animanumeros.js'

export default function initAnimaisFetch() {
  async function fetchAnimais(url) {
    const animaisResposta = await fetch(url)
    const animaisjson = await animaisResposta.json()
    const numerosGrid = document.querySelector('.numeros-grid')
    function createAnimais(animal) {
      const div = document.createElement('div')
      div.classList.add('numero-animal')
      div.innerHTML = `<h3>${animal.specie}</h3> <span data-numero>${animal.total}<span>`
      return div
    }
    animaisjson.forEach(animal => {
      const divAnimal = createAnimais(animal)

      numerosGrid.appendChild(divAnimal)
    })
    const animanumeros = new AnimaNumeros(
      '[data-numero]',
      'scroll-animation',
      '.numeros-querySelector'
    )
    animanumeros.init()
  }

  fetchAnimais('./animisAPI.json')
}
