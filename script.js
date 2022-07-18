import ScrollSuave from './initScroll.js'
import Accordion from './initAcord.js'
import TabNav from './InitTAb.js'
import Modal from './modal.js'
import ToolTip from './toolTip.js'
import fetchAnimais from './animaisfetch.js'
import initAnimationScroll from './scrollSuave.js'
import initDropDown from './initdropdown.js'
import mobileMenu from './mobilemenu.js'
import funcionamentoEmpresa from './funcionamento.js'
import fetchBtc from './fetchbtc.js'

const scrollsuave = new ScrollSuave('.js-nav a[href^="#"]')
scrollsuave.init()
const accordion = new Accordion('.js-acord dt')
accordion.init()
const tabNav = new TabNav('.js-tabmenu li', '.js-description section')
tabNav.init()
const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
)
modal.init()
const tooltip = new ToolTip('[data-tooltip=""]')
tooltip.init()
fetchAnimais('./animisAPI.json', '.numeros-grid')

initAnimationScroll()
initDropDown()
mobileMenu()
funcionamentoEmpresa()
fetchBtc()
