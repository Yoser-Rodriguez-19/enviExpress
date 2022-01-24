<template>
  <div>
    <Layout></Layout>
    <div class="title-mobile is-hidden-tablet">
      <p>Envía tu <b>encomienda</b> fácil rápido y seguro</p>
    </div>
    <div>
      <div class="is-flex is-flex-direction-column bg-content-header">
        <div class="title-desktop is-hidden-mobile">
          <p class="title-envie">Envía tu <b>encomienda</b> fácil rápido y seguro</p>
        </div>
        <div class="is-flex form-credit mb-6 container-box-credit-fixed animate__animated animate__backInLeft">
          <div :key="refreshData" class="is-flex is-flex-direction-column content-box-envi content-box-envi-2">
            <label class="is-size-3" style="border-bottom: 3px solid #4058E9;">Calcula el precio de tu envío</label>
            <!-- <input v-model="amountCredit_" v-mask="currencyMask" class="mb-4 is-size-5 input-credit" :class="validInput ? 'input-danger' : ''"> -->
            <strong v-if="this.montoPrecioKg >= this.montoPrecioVolumen" class="mb-4 is-size-2">{{montoPrecioKg | VMask(currencyMask)}}</strong>
            <strong v-else class="mb-4 is-size-2">{{montoPrecioVolumen | VMask(currencyMask)}}</strong>
            <!-- <span v-if="validInput" class="is-size-7 mb-3" style="color: red;">El monto tiene que ser de {{minValue | VMask(currencyMask)}} a {{maxValue | VMask(currencyMask)}}</span> -->
            <!-- <span class="is-size-7">Ingresa multiplos de {{intervalMount | VMask(currencyMask)}}</span> -->
            <div class="is-flex is-flex-direction-column is-align-items-center container-slider">
              <div style="width: 95%;">
                <div class="is-flex is-flex-direction-column container-description-links-header mb-3">
                  <div class="description-links-1 is-justify-content-center">
                    <button @click="clickLinkTerrestre"><div class="" :class="link_1_terrestre ? 'bg-select' : ''"></div><span :class="link_1_terrestre ? 'text-select' : ''" style="font-weight: bold; font-size: 20px;">Terrestre</span></button>
                    <button @click="clickLinkAereo"><div class="" :class="link_2_aereo ? 'bg-select' : ''"></div><span :class="link_2_aereo ? 'text-select' : ''" style="font-weight: bold; font-size: 20px;">Aereo</span></button>
                  </div>
                </div>
                <div class="content-show-links">
                  <Terrestre v-if="link_1_terrestre"/>
                  <Aereo v-if="link_2_aereo"/>
                  <!-- <p v-show="link_1_terrestre">123</p>
                  <p v-show="link_2_aereo">456</p> -->
                </div>
              </div>
              <!-- <ClientOnly>
                <vue-slider :min="minValue" :max="maxValue" :interval="intervalMount" v-model="amountCreditNumber"></vue-slider>
              </ClientOnly> -->
              <!-- <div class="is-flex is-justify-content-space-between" style="width: 80%;">
                <strong class="is-size-6" style="color: #4058E9;">{{minValue | VMask(currencyMask)}}</strong>
                <strong class="is-size-6" style="color: #4058E9;">{{maxValue | VMask(currencyMask)}}</strong>
              </div> -->
            </div>
            <div class="is-flex is-justify-content-center content-colum-mobile">
              <a href="https://api.whatsapp.com/send?phone=+573142822772&text=Hola, Nececito enviar una encomienda!" target="_blank" class="mt-5 mr-5 btn-form-credit">Contactanos</a>
              <a href="https://api.whatsapp.com/send?phone=+573142822772&text=Hola, Nececito que busquen una encomienda a domicilio!" target="_blank" class="mt-5 btn-form-domi">¿Lo buscamos a domicilio?</a>
            </div>
          </div>
          <div class="summary-credit is-flex is-flex-direction-column" style="gap: 15px;">
            <img class="img-header-principal" src="@/assets/img/header-1.png" alt="">
          </div>
        </div>
      </div>
      <div class="is-flex">
        <div class="line-decoration"></div>
        <div @click="clickScroll" class="arrow-header">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
        </div>
      </div>
    </div>
    <section id="section_1" class="container-body">
      <div class="title-mobile">
        <p class="text-color-orange">ENVÍOS A VENEZUELA</p>
        <!-- <div class="line-orange mb-4"></div> -->
        <span>Envíos de paquetería, mercancía, medicamentos refrigerados y mensajería entre Colombia y Venezuela en ambos sentidos.</span>
      </div>
      <div class="section-img-1 margin-mobile-title">
        <div class="container-content-body">
          <p class="bg-sub-title">MUDANZA</p>
          <span>Traslados de tus enseres personales, hogar, restaurante, oficinas entre otros entre Colombia y Venezuela</span>
          <g-link>Conoce mas</g-link>
        </div>
        <div class="container-image-body">
          <div style="width: 100%;">
            <img src="@/assets/img/body-1.png" alt="">
          </div>
        </div>
      </div>
      <div class="section-img-2">
        <div class="container-content-body">
          <p class="bg-sub-title">MISIÓN</p>
          <span>MISIÓN “Brindar una solución logística internacional de encomienda, carga y mudanza a través de una excelente atención, alto compromiso y procesos efectivos”.</span>
          <g-link>Conoce mas</g-link>
        </div>
        <div class="container-image-body">
          <div style="width: 100%;">
            <img src="@/assets/img/body-2.png" alt="">
          </div>
        </div>
      </div>
    </section>

    <section class="container-body">
      <div class="section-img-1">
        <div class="container-content-body">
          <p class="bg-sub-title">VISIÓN</p>
          <span>“Ser pioneros en el mercado logístico y de transporte internacional, llevando a otro nivel la conexión de nuestros clientes con el mundo, a través de la innovación tecnológica”.</span>
          <g-link>Conoce mas</g-link>
        </div>
        <div class="container-image-body">
          <div style="width: 100%;">
            <img src="@/assets/img/body-3.png" alt="">
          </div>
        </div>
      </div>
      <div class="section-img-2 mt-6">
        <div class="container-content-body">
          <p class="bg-sub-title">VALORES</p>
          <span>COMPROMISO: tener un alto sentido de responsabilidad en todo lo que hacemos. INTEGRIDAD: Mantener una conducta transparente, leal y honesta tanto a nivel personal como profesional. RESPETO: ser empáticos con las ideas, inquietudes y consideraciones de nuestros clientes y colaboradores.</span>
          <g-link>Conoce mas</g-link>
        </div>
        <div class="container-image-body">
          <div style="width: 100%;">
            <img src="@/assets/img/body-4.png" alt="">
          </div>
        </div>
      </div>
    </section>

    <section class="container-body-secction-2">
      <div class="">
        <div class="is-flex is-flex-direction-column">
          <p class="is-flex is-justify-content-center has-text-centered">¿POR QUÉ ELEGIRNOS?</p>
          <span class="is-flex is-justify-content-center has-text-centered">Nulla officia velit proident anim aliqua amet mollit cillum labore. Tempor ad irure consequat dolor voluptate excepteur nulla proident culpa.</span>
        </div>
        <div class="is-flex is-flex-direction-column is-align-items-center container-description-links">
          <div class="description-links-1">
            <button @click="clickLink1"><div class="circle-links" :class="link_1 ? 'bg-select' : ''">1</div><span :class="link_1 ? 'text-select' : ''">sint cupidatat</span></button>
            <button @click="clickLink2"><div class="circle-links" :class="link_2 ? 'bg-select' : ''">2</div><span :class="link_2 ? 'text-select' : ''">sint cupidatat</span></button>
          </div>
          <div class="description-links-2">
            <button @click="clickLink3"><div class="circle-links" :class="link_3 ? 'bg-select' : ''">3</div><span :class="link_3 ? 'text-select' : ''">sint cupidatat</span></button>
            <button @click="clickLink4"><div class="circle-links" :class="link_4 ? 'bg-select' : ''">4</div><span :class="link_4 ? 'text-select' : ''">sint cupidatat</span></button>
          </div>
        </div>
        <div class="content-show-links">
          <p v-show="link_1">Sint tempor quis nisi consectetur eu magna pariatur laborum aute ad id. Aliqua enim laborum culpa velit aliqua nulla. Ex eiusmod elit do et cillum. Est nostrud elit dolor deserunt amet adipisicing fugiat magna laborum amet et. Sunt id proident minim nisi consequat est amet ea culpa. Occaecat duis commodo duis esse veniam sunt labore anim quis aliquip mollit qui exercitation.</p>
          <p v-show="link_2">Deserunt voluptate nisi magna qui voluptate ipsum. Aliqua magna incididunt laborum irure est non sit proident ea. Nulla esse aliqua sit laboris ex esse ad esse amet sit nostrud. Consectetur excepteur ullamco reprehenderit mollit in et. Ipsum quis incididunt excepteur nulla sunt laborum est laboris aliquip anim. Exercitation est dolor Lorem ut voluptate culpa sunt voluptate in anim. Quis sint enim sit velit Lorem exercitation qui consectetur incididunt.</p>
          <p v-show="link_3">Elit excepteur pariatur ad aute. Exercitation do anim minim amet. Cupidatat in dolore dolore esse magna ex culpa labore laborum do pariatur deserunt voluptate voluptate. Aute labore cillum deserunt nisi qui sunt dolore id tempor sit deserunt. Laboris in nostrud enim adipisicing consequat consectetur nostrud minim sint ad.</p>
          <p v-show="link_4">Ea anim aute nulla fugiat consectetur laboris nisi. Consectetur est commodo excepteur tempor pariatur reprehenderit non sunt qui nostrud laboris. Et pariatur eu irure esse cillum sunt velit ullamco magna deserunt cupidatat occaecat officia elit. Eu Lorem adipisicing nisi tempor sunt veniam occaecat.</p>
        </div>
      </div>
    </section>
    <section class="mb-6">
      <div class="mb-6">
        <Contacto />
      </div>
    </section>

    <footer class="mt-6">
      <Footer />
    </footer>
  </div>
</template>

<script>
import Contacto from "../components/contacto/contactanos.vue";

import BtnCreateAcount from '@/components/global/btn_create_acount.vue'
import Footer from '@/components/global/footer.vue'
import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
import TDatepicker from 'vue-tailwind/dist/t-datepicker';
import VueMask from 'v-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import 'vue-slider-component/theme/default.css'
import 'animate.css';

import Terrestre from '@/components/envios/Terrestre.vue';
import Aereo from '@/components/envios/Aereo.vue';

const currencyMask = createNumberMask({
    thousandsSeparatorSymbol: '.',
    decimalSymbol: ',',
    prefix: 'COP ',
    allowDecimal: true,
    includeThousandsSeparator: true,
    allowNegative: false,
  });

// const settings = {
//   't-datepicker': {
//     component: TDatepicker,
//     props: {
//       fixedClasses: {
//         navigator: 'flex',
//         navigatorViewButton: 'flex items-center',
//         navigatorViewButtonIcon: 'flex-shrink-0 h-5 w-5',
//         navigatorViewButtonBackIcon: 'flex-shrink-0 h-5 w-5',
//         navigatorLabel: 'flex items-center py-1',
//         navigatorPrevButtonIcon: 'h-6 w-6 inline-flex',
//         navigatorNextButtonIcon: 'h-6 w-6 inline-flex',
//         inputWrapper: 'relative',
//         viewGroup: 'inline-flex flex-wrap',
//         view: 'w-64',
//         calendarDaysWrapper: 'grid grid-cols-7',
//         calendarHeaderWrapper: 'grid grid-cols-7',
//         monthWrapper: 'grid grid-cols-4',
//         yearWrapper: 'grid grid-cols-4',
//         input: 'block w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
//         clearButton: 'flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-2 h-6 w-6',
//         clearButtonIcon: 'fill-current h-3 w-3'
//       },
//       classes: {
//         wrapper: 'flex flex-col',
//         dropdownWrapper: 'relative z-10',
//         dropdown: 'origin-top-left absolute rounded shadow bg-white overflow-hidden mt-1',
//         enterClass: 'opacity-0 scale-95',
//         enterActiveClass: 'transition transform ease-out duration-100',
//         enterToClass: 'opacity-100 scale-100',
//         leaveClass: 'opacity-100 scale-100',
//         leaveActiveClass: 'transition transform ease-in duration-75',
//         leaveToClass: 'opacity-0 scale-95',
//         inlineWrapper: '',
//         inlineViews: 'rounded bg-white border mt-1 inline-flex',
//         inputWrapper: '',
//         input: 'text-black placeholder-gray-400 border-gray-300',
//         clearButton: 'hover:bg-gray-100 rounded transition duration-100 ease-in-out text-gray-600',
//         clearButtonIcon: '',
//         viewGroup: '',
//         view: '',
//         navigator: 'pt-2 px-3',
//         navigatorViewButton: 'transition ease-in-out duration-100 inline-flex cursor-pointer rounded-full px-2 py-1 -ml-1 hover:bg-gray-100',
//         navigatorViewButtonIcon: 'fill-current text-gray-400',
//         navigatorViewButtonBackIcon: 'fill-current text-gray-400',
//         navigatorViewButtonMonth: 'text-gray-700 font-semibold',
//         navigatorViewButtonYear: 'text-gray-500 ml-1',
//         navigatorViewButtonYearRange: 'text-gray-500 ml-1',
//         navigatorLabel: 'py-1',
//         navigatorLabelMonth: 'text-gray-700 font-semibold',
//         navigatorLabelYear: 'text-gray-500 ml-1',
//         navigatorPrevButton: 'transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-100 rounded-full p-1 ml-2 ml-auto disabled:opacity-50 disabled:cursor-not-allowed',
//         navigatorNextButton: 'transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-100 rounded-full p-1 -mr-1 disabled:opacity-50 disabled:cursor-not-allowed',
//         navigatorPrevButtonIcon: 'text-gray-400',
//         navigatorNextButtonIcon: 'text-gray-400',
//         calendarWrapper: 'px-3 pt-2',
//         calendarHeaderWrapper: '',
//         calendarHeaderWeekDay: 'uppercase text-xs text-gray-500 w-8 h-8 flex items-center justify-center',
//         calendarDaysWrapper: '',
//         calendarDaysDayWrapper: 'w-full h-8 flex flex-shrink-0 items-center',
//         otherMonthDay: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed',
//         emptyDay: '',
//         inRangeFirstDay: 'text-sm bg-blue-500 text-white w-full h-8 rounded-l-full',
//         inRangeLastDay: 'text-sm bg-blue-500 text-white w-full h-8 rounded-r-full',
//         inRangeDay: 'text-sm bg-blue-200 w-full h-8 disabled:opacity-50 disabled:cursor-not-allowed',
//         selectedDay: 'text-sm rounded-full w-8 h-8 mx-auto bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed',
//         activeDay: 'text-sm rounded-full bg-blue-100 w-8 h-8 mx-auto disabled:opacity-50 disabled:cursor-not-allowed',
//         highlightedDay: 'text-sm rounded-full bg-blue-200 w-8 h-8 mx-auto disabled:opacity-50 disabled:cursor-not-allowed',
//         day: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed',
//         today: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed border border-blue-500',
//         monthWrapper: 'px-3 pt-2',
//         selectedMonth: 'text-sm rounded w-full h-12 mx-auto bg-blue-500 text-white',
//         activeMonth: 'text-sm rounded w-full h-12 mx-auto bg-blue-100',
//         month: 'text-sm rounded w-full h-12 mx-auto hover:bg-blue-100',
//         yearWrapper: 'px-3 pt-2',
//         year: 'text-sm rounded w-full h-12 mx-auto hover:bg-blue-100',
//         selectedYear: 'text-sm rounded w-full h-12 mx-auto bg-blue-500 text-white',
//         activeYear: 'text-sm rounded w-full h-12 mx-auto bg-blue-100'
//       },
//       variants: {
//         danger: {
//           input: 'border-red-300 bg-red-50 placeholder-red-200 text-red-900',
//           clearButton: 'hover:bg-red-200 text-red-500'
//         }
//       }
//     }
//   }
// }

// Vue.use(VueTailwind, settings)
Vue.use(VueMask)

export default {
  data () { 
    return {
      textBtnCreateAcount: 'Crear mi cuenta',
      link_1: true,
      link_2: false,
      link_3: false,
      link_4: false,
      link_1_terrestre: true,
      link_2_aereo: false,
      amountCredit: null,
      currencyMask,
      minValue: 100000,
      maxValue: 900000,
      intervalMount: 10000,
      amountCredit_: null,
      secure: 0,
      interests: 0,
      aval: 0,
      administration: 0,
      amountCreditNumber: null,
      iva: 0,
      TotalToPay: 0,
      minDate_: new Date(),
      maxDate_: '',
      date: '',
      validInput: false,
      montoPrecioKg: 0,
      montoPrecioVolumen: 0,
      refreshData: 0
    }
  },
  watch: {
    amountCredit: function () {
      this.handlerInputAmountCredit (this.amountCredit)
     
    },
    amountCredit_: function () {

      // this.commissionAccounts(this.amountCredit_)
      
      this.handlerInputAmountCredit (this.amountCredit_)

    },
    amountCreditNumber: function () {
      this.amountCredit_ = this.amountCreditNumber
    }
  },
  components: {
    BtnCreateAcount,
    Terrestre,
    Aereo,
    Contacto,
    // VueSlider: () =>
    //   import ('vue-slider-component')
    //   .then(VueSlider => VueSlider)
    //   .catch(),
    Footer,
  },
  metaInfo: {
    title: 'enviExpress'
  },
  created () {

    

    this.notify.$on('refreshPrice', () => {
      this.montoPrecioKg = 0
      this.montoPrecioVolumen = 0
    })
    const minDateC = new Date()
    this.maxDate_ = new Date(minDateC.setMonth(minDateC.getMonth() + 1))
    this.notify.$on('precioPorLosKilos', data => {
      this.montoPrecioKg = data
    })
    this.notify.$on('precioPorElVolumen', data => {
      this.montoPrecioVolumen = data
    })
  },
  methods: {
    clickAmountCredit() {
      if (this.amountCredit === '') {
        console.log(' no se envio valor ')
      } else {
          this.notify.$emit('sendAmountCredit', this.amountCredit)
      }
    },
    handlerInputAmountCredit (amount) {
      if (amount < this.minValue || amount > this.maxValue) {
        this.validInput = true
      } else if (amount >= this.minValue && amount <= this.maxValue) {
        this.validInput = false
      }
      if (amount === '') {
        this.validInput = false
      }
    },
    clickScroll() {
      const scrollDiv = document.getElementById('section_1').offsetTop
      window.scrollTo({ top: scrollDiv - 100, behavior: 'smooth' })
      // window.scroll(0, 900)
    },
    clickLink1() {
      this.link_1 = true,
      this.link_2 = false,
      this.link_3 = false,
      this.link_4 = false
    },
    clickLink2() {
      this.link_1 = false,
      this.link_2 = true,
      this.link_3 = false,
      this.link_4 = false
    },
    clickLink3() {
      this.link_1 = false,
      this.link_2 = false,
      this.link_3 = true,
      this.link_4 = false
    },
    clickLink4() {
      this.link_1 = false,
      this.link_2 = false,
      this.link_3 = false,
      this.link_4 = true
    },
    clickLinkTerrestre() {
      this.link_1_terrestre = true,
      this.link_2_aereo = false,
      this.refreshData + 1
    },
    clickLinkAereo() {
      this.link_1_terrestre = false,
      this.link_2_aereo = true,
      this.refreshData + 1
    }
  },
  destroyed () {
    if (this.amountCredit === '') {
      console.log('no se envio valor')
    } else {
      this.notify.$emit('sendAmountCredit', this.amountCredit)
    }
  }
}
</script>

<style>
.line-orange {
  height: 2px;
  background: #F64A01;
}
.bg-sub-title {
  background: #F64A01;
  padding-left: 10px;
  padding-right: 10px;
  color: white!important;
  width: 30%;
  text-align: center;
  min-width: 130px;
}
.mapa {
    height: 625px;
  }
.img-header-principal {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}
.title-envie {
  color: white;
}
.dropdown-menu {
  margin-bottom: 0px;
}
html {
  scroll-behavior: smooth;
}
.bg-content-header {
  /* background: rgb(241, 241, 241); */
  background-image: url('../assets/img/bg-img-header.jpg');
  background-size: cover;
}
.vue-slider-dot-handle  {
  background-color: #4058E9;
}
.vue-slider-dot {
  width: 25px!important;
  height: 25px!important;
}
.vue-slider-dot-tooltip-inner {
  height: 35px;
  width: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.line-decoration {
  width: 50%;
  height: 9px;
  background: #F64A01;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}
.arrow-header {
  width: 35px;
  height: 35px;
  background: #F64A01;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  margin: -13px;
}
.arrow-header svg {
  color: #fff;
  height: 20px;
  cursor: pointer;
}
.content-show-links {
  width: 100%;
}
.content-show-links p {
  color: rgb(173, 175, 175)!important;
}
.text-select {
  /* color: #4058E9!important; */
  border-bottom: 2px solid #4058E9;
}
.bg-select {
  background: #F64A01!important;
}
.container-description-links {
  gap: 15px;
  margin: 65px 0px;
}
.container-description-links-header {
  gap: 15px;
  /* margin: 65px 0px; */
}
.container-description-links button{
  cursor: pointer;
  color: #0c011f!important;
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
  font-weight: 600;
}
.description-links-1 {
  display: flex;
  gap: 25px;
}
.description-links-2 {
  display: flex;
  gap: 25px;
}
.container-body,
.container-body-secction-2 {
  width: 85%;
  margin: 35px auto;
  padding-bottom: 50px;
}

.container-image-body {
  margin: 35px 0px;
}
.container-image-body img {
  object-fit: cover;
  width: 100%;
  max-width: 540px;
}
.circle-links {
  background: rgb(173, 175, 175);
  color: #fff;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  display: flex;
  margin-right: 5px;
  align-items: center;
  justify-content: center;
}
.container-body p,
.container-body-secction-2 p {
  color: #0c011f;
  font-weight: bold;
  font-size: 22px;
  margin: 45px 0px;
}
.container-body span,
.container-body-secction-2 span {
  margin: 25px 0px;
}
.container-body a,
.container-body-secction-2 a { 
  color: #4058E9;
}
.container-content-body {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.title-mobile {
  text-align: center;
  margin: 45px 0px;
  width: 100%;
}
.text-color-orange {
  text-decoration: underline;
  color: #F64A01!important;
}
.title-mobile p {
  margin: 0px auto;
  width: 70%;
  text-align: center;
  color: #0c011f;
  font-weight: bold;
  font-size: 24px;
}
.title-mobile p b {
  color: #F64A01;
}
.home-links a {
  margin-right: 1rem;
}
.content-input-credit {
  width: 65%;
  max-width: 650px;
  margin-bottom: 70px;
  gap: 25px;
  background: #fff;
  padding: 30px;
  height: 230px;
  border-radius: 10px;
  box-shadow: 0px 7px 11px 4px rgb(0 0 0 / 20%);;

}
.input-amount-credit {
  margin-top: -150px;
  position: relative;
  display: none!important;
}
.input-amount-credit input {
  outline: none;
  border: none;
  border-bottom: 1px solid #ccc;
}
.input-amount-credit span {
  font-size: 12px;
  color: #4058E9;
}
.input-amount-credit label,
.input-amount-credit input::placeholder {
  font-size: 14px;
  color: #0c011f;
}
.btn-credit a {
  border: none;
  padding: 18px 30px;
  border-radius: 40px;
  color: #fff;
  background: #4058E9;
  font-weight: bold;
}
.img-header-home {
  width: 100%;
  height: 100%;
  /* position: relative; */
  z-index: -1;
}
.img-header-home img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.disabled\:opacity-50:disabled {
  opacity: .5;
}
.disabled\:cursor-not-allowed:disabled {
  cursor: not-allowed;
}
.input-danger {
  border: 2px solid red!important;
}
.focus\:border-blue-500:focus {
  border-color: #4058E9!important;
}
.focus\:ring-2:focus {
  box-shadow: #4058E9!important;

  --tw-ring-offset-shadow: #4058E9!important;
  --tw-ring-shadow: #4058E9!important;;
  box-shadow: #4058E9!important;;
}
.summary-credit {
  background: #4058E9;
  /* padding: 40px 10px; */
  color: #fff;
  width: 100%;
  max-width: 700px;
  height: 100%;
  justify-content: space-between;
}
.summary-credit svg {
  width: 17px;
  color: #fff;
}
.btn-form-credit {
  background: #4058E9;
  color: #fff;
  width: 160px;
  text-align: center;
  padding: 10px;
  border-radius: 30px;
}
.btn-form-credit:hover {
  background: #3246b8;
  color: #fff;

}
.btn-form-domi {
  background: transparent;
  color: #F64A01;
  /* width: 160px; */
  text-align: center;
  padding: 10px;
  border-radius: 30px;
}
.btn-form-domi:hover {
  color: #F64A01;
  text-decoration: underline;
}
.vue-slider {
  width: 70%!important;
}
.vue-slider-process {
  background: #4058E9!important;
}
.vue-slider-dot-tooltip-inner {
  border-color: #4058E9!important;
  background-color: #4058E9!important;
}
.form-credit form .input-credit {
  outline: none;
  background: aliceblue;
  padding: 10px;
  border-radius: 10px;
}
.container-slider {
  flex-direction: column;
  gap: 15px;
}
.container-box-credit-fixed {
  justify-content: center;
  align-items: center;
  background: #fff;
  flex-direction: column;
  width: 90%;
  max-width: 600px;
  margin: 50px auto;
  gap: 50px;
  box-shadow: 0px 10px 19px -2px rgb(0 0 0 / 40%); 
}
.content-box-envi {
  background: aliceblue;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  max-width: 700px;
  padding: 15px;
  /* border-radius: 10px; */
}
.btn-form-credit-2 {
  width: 45%;
  background: aliceblue;
  color: #4058E9;
  font-weight: 600;
  padding: 10px;
  border-radius: 30px;
}
@media (max-width: 768px) {
  .margin-mobile-title {
    margin-top: 80px;
  }
  .input-amount-credit {
    margin-top: -55px;
  }
  .content-input-credit {
    width: 90%;
    height: 220px;
  }
}
@media (min-width: 768px) {
  .container-slider {
    flex-direction: row;
  }
  .container-box-credit-fixed {
    width: 80%;
  }
  .summary-credit {
    /* padding: 20px 40px; */
  }
  .input-amount-credit {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
  .input-amount-credit label {
    font-size: 20px;
  }
  .container-content-body {
    width: 65%;
  }
  .title-mobile {
    margin: 160px auto 100px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 35px;
    width: 75%;
  }
  .title-desktop {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 35px;
    margin: 50px auto 0px auto;
    color: #0c011f;
  }
  .title-desktop p {
    text-align: center;
    /* border-bottom: 3px solid #4058E9; */
    width: 60%;
  }
  .title-desktop p b {
    background: #F64A01;
    padding-left: 10px;
    padding-right: 10px;
  }
  .title-mobile p {
    font-weight: bold;
    font-size: 29px;
    width: 80%;
  }
  .title-mobile span {
    text-align: center;
  }
  .container-body {
    width: 60%;
    margin: 35px auto;
  }
  .container-body-secction-2 {
    width: 60%;
    margin: 35px auto;
  }
  .section-img-1 {
    display: flex;
    flex-direction: row-reverse;
    gap: 75px;
    align-content: center;
    justify-content: center;
  }
  .section-img-2 {
    display: flex;
    flex-direction: row;
    gap: 75px;
    align-content: center;
    justify-content: center;
  }
  .img-header-home img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .img-header-home {
    height: 100%;
    width: 100%;
  }
  .container-image-body {
    height: 450px;
    width: 540px;
    display: flex;
    align-items: center;
  }
  .container-content-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .content-header-home {
    position: absolute;
    display: flex;    
    flex-direction: column;
    top: 18%;
    left: 12%;
    gap: 40px;
    width: 40%;
  }
  .content-header-home h1 {
    color: #fff;
    font-size: 40px;
    font-weight: bold;
  }
}
@media (max-width: 1024px) {
  .content-header-home {
    display: none!important;
  }
  .content-box-envi label {
    font-size: 24px!important;
  }
  .content-colum-mobile {
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
}
@media (min-width: 1024px) {
  .content-box-envi-2 {
    padding: 20px 50px
  }
  .img-header-home {
    width: 60%;
    height: 700px;
  }
  .container-body,
  .container-body-secction-2 {
    width: 60%;
    margin: 35px auto;
    max-width: 1200px;
  }
  .input-amount-credit {
    display: none!important;
  }
  .container-box-credit-fixed {
    flex-direction: row!important;
    max-width: 1400px;
    height: 570px;
  }
  .bg-content-header {
    height: 800px;
    align-items: center;
  }
}



</style>
