import ScrollSuave from './initScroll.js'
import initAcord from './initAcord.js'
import initTabMenu from './InitTAb.js'
import initAnimationScroll from './scrollSuave.js'
import initModal from './modal.js'
import initToolTip from './toolTip.js'
import initDropDown from './initdropdown.js'
import mobileMenu from './mobilemenu.js'
import funcionamentoEmpresa from './funcionamento.js'
import initAnimaisFetch from './animaisfetch.js'
import fetchBtc from './fetchbtc.js'

const scrollsuave = new ScrollSuave('.js-nav a[href^="#"]')
scrollsuave.init()
initAcord()
initTabMenu()
initAnimationScroll()
initModal()
initToolTip()
initDropDown()
mobileMenu()
funcionamentoEmpresa()
initAnimaisFetch()
fetchBtc()
