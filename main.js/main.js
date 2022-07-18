(()=>{"use strict";class t{constructor(t,e,o){this.numeros=document.querySelectorAll(t),this.observerclass=e,this.objetoTarget=document.querySelector(o),this.handleMutation=this.handleMutation.bind(this)}static incrementoNumero(t){const e=+t.innerText,o=Math.floor(e/100);let i=0;const s=setInterval((()=>{i+=o,t.innerText=i,i>e&&(clearInterval(s),t.innerText=e)}),25*Math.random())}numerosAnimation(){this.numeros.forEach((t=>{this.constructor.incrementoNumero(t)}))}handleMutation(t){t[0].target.classList.contains(this.observerclass)&&(this.observer.disconnect(),this.numerosAnimation())}addMutationObserver(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.objetoTarget,{attributes:!0})}init(){return this.numeros.length&&this.objetoTarget&&this.addMutationObserver(),this}}function e(){function t(t){t.preventDefault(),this.classList.add("active"),function(t,e,o){const i=document.documentElement;function s(e){t.contains(e.target)||(i.removeEventListener("click",s),undefined())}i.addEventListener("click",s);const n="data-outside";t.hasAttribute(n)||(i.addEventListener("click",s),t.setAttribute(n,""))}(this)}document.querySelectorAll("[data-dropdown]").forEach((e=>{["click"].forEach((o=>{e.addEventListener(o,t)}))}))}const o=document.querySelector('[data-menu="button"]'),i=document.querySelector('[data-menu="list"]');o.addEventListener("click",(function(){i.classList.add("active"),o.classList.add("active"),e()})),new class{constructor(t,e){this.internalLink=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkEvent(){this.internalLink.forEach((t=>{t.addEventListener("click",this.scrollToSection)}))}init(){return this.addLinkEvent(),this}}('.js-nav a[href^="#"]').init(),new class{constructor(t){this.questionItem=document.querySelectorAll(t),this.activeClass="active"}toggleAcord(t){t.classList.add(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}addAccordionEvent(){this.questionItem.forEach((t=>{t.addEventListener("click",(()=>{this.toggleAcord(t)}))}))}init(){return this.questionItem.length&&(this.toggleAcord(this.questionItem[0]),this.addAccordionEvent()),this}}(".js-acord dt").init(),new class{constructor(t,e){this.menu=document.querySelectorAll(t),this.desc=document.querySelectorAll(e),this.newTabClass="newclass"}activeTab(t){this.desc.forEach((t=>{t.classList.remove(this.newTabClass)})),this.desc[t].classList.add(this.newTabClass)}addTabNavEvent(){this.menu.forEach(((t,e)=>{t.addEventListener("click",(()=>{this.activeTab(e)}))}))}init(){return this.menu.length&&this.desc.length&&(this.activeTab(0),this.addTabNavEvent()),this}}(".js-tabmenu li",".js-description section").init(),new class{constructor(t,e,o){this.botaoAbrir=document.querySelector(t),this.botaoFechar=document.querySelector(e),this.containerModal=document.querySelector(o),this.eventToggleModal=this.eventToggleModal.bind(this),this.cliqForaModal=this.cliqForaModal.bind(this)}toggleModal(){this.containerModal.classList.toggle("ativo")}eventToggleModal(t){t.preventDefault(),this.toggleModal()}cliqForaModal(t){t.target===this.containerModal&&this.toggleModal()}addModalEvent(){this.botaoAbrir.addEventListener("click",this.eventToggleModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.cliqForaModal)}init(){return this.botaoAbrir&&this.containerModal&&this.containerModal&&this.addModalEvent(),this}}('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),new class{constructor(t){this.toolTips=document.querySelectorAll(t),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}onMouseLeave({currentTarget:t}){this.toolTipBox.remove(),t.removeEventListener("mouseleave",this.onMouseLeave),t.removeEventListener("mousemove",this.onMouseMove)}onMouseMove(t){this.toolTipBox.style.top=`${t.pageY+20}px`,t.pageX+690>window.innerWidth?this.toolTipBox.style.left=t.pageX-190+"px":this.toolTipBox.style.left=`${t.pageX+20}px`}onMouseOver({currentTarget:t}){this.criarToolTipBox(t),t.addEventListener("mouseleave",this.onMouseLeave),t.addEventListener("mousemove",this.onMouseMove)}criarToolTipBox(t){const e=document.createElement("div"),o=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=o,document.body.appendChild(e),this.toolTipBox=e}addToolTipsEvent(){this.toolTips.forEach((t=>{t.addEventListener("mouseover",this.onMouseOver)}))}init(){return this.toolTips.length&&this.addToolTipsEvent(),this}}('[data-tooltip=""]').init(),function(e,o){const i=document.querySelector(".numeros-grid");!async function(){try{const e=await fetch("./animisAPI.json");(await e.json()).forEach((t=>function(t){const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.specie}</h3> <span data-numero>${t.total}<span>`,e}(t);i.appendChild(e)}(t))),new t("[data-numero]","scroll-animation",".numeros-querySelector").init()}catch(t){console.log(t)}}()}(),fetch("https://www.blockchain.com/pt/ticker").then((t=>t.json())).then((t=>{document.querySelector(".btc-preco").innerText=(1e3/t.BRL.sell).toFixed(4)})).catch((t=>{console.log(Error(t))})),new class{constructor(t){this.sections=document.querySelectorAll(t),this.windowPath=.6*window.innerHeight,this.checkDistance=function(t,e){let o;return(...e)=>{o&&clearTimeout(o),o=setTimeout((()=>{t(...e),o=null}),50)}}(this.checkDistance.bind(this))}getDistance(){this.distance=[...this.sections].map((t=>{const e=t.offsetTop;return{element:t,offset:Math.floor(e-this.windowPath)}}))}checkDistance(){this.distance.forEach((t=>{console.log("teste"),window.pageYOffset>t.offset?t.element.classList.add("scroll-animation"):t.element.classList.contains("scroll-animation")&&t.element.classList.remove("scroll-animation")}))}init(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}stop(){window.removeEventListener("scroll",this.checkDistance)}}(".js-scroll").init(),e(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),o=t.dataset.horario.split(",").map(Number),i=new Date,s=i.getDay(),n=i.getHours(),a=-1!==e.indexOf(s),c=n>=o[0]&&n<o[1];a&&c&&t.classList.add("aberto")}()})();