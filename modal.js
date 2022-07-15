export default class Modal {
  constructor(btnAbir, btnFechar, contModal) {
    this.botaoAbrir = document.querySelector(btnAbir)
    this.botaoFechar = document.querySelector(btnFechar)
    this.containerModal = document.querySelector(contModal)
    this.eventToggleModal = this.eventToggleModal.bind(this)
    this.cliqForaModal = this.cliqForaModal.bind(this)
  }

  toggleModal() {
    this.containerModal.classList.toggle('ativo')
  }

  eventToggleModal(event) {
    event.preventDefault()
    this.toggleModal()
  }

  cliqForaModal(event) {
    if (event.target === this.containerModal) this.toggleModal()
  }

  addModalEvent() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal)
    this.botaoFechar.addEventListener('click', this.eventToggleModal)
    this.containerModal.addEventListener('click', this.cliqForaModal)
  }

  init() {
    if (this.botaoAbrir && this.containerModal && this.containerModal) {
      this.addModalEvent()
    }
    return this
  }
}
