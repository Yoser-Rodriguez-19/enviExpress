<template>
  <div>
    <Layout></Layout>
    <div>
      <div class="is-flex is-justify-content-center my-6 is-size-4">
        <h1 class="is-size-4"><strong>Solicita tu credito aqui</strong></h1>
      </div>
        <div class="apply-for-credit-body">
          <div class="is-flex is-flex-direction-column form-credit mb-6">
            <form class="is-flex is-flex-direction-column">
              <label class="mb-4 is-size-4">¿Cuanto dinero necesitas?</label>
              <input v-model="amountCredit_" v-mask="currencyMask" class="mb-4 is-size-5 input-credit" :class="validInput ? 'input-danger' : ''">
              <span v-if="validInput" class="is-size-7 mb-3" style="color: red;">El monto tiene que ser de {{minValue | VMask(currencyMask)}} a {{maxValue | VMask(currencyMask)}}</span>
              <span class="is-size-7">Ingresa multiplos de {{intervalMount | VMask(currencyMask)}}</span>
              <div class="is-flex is-justify-content-space-between is-align-items-center my-6 container-slider">
                <span class="is-size-7" style="color: #6e43b7;">{{minValue | VMask(currencyMask)}}</span>
                <ClientOnly>
                  <vue-slider :min="minValue" :max="maxValue" :interval="intervalMount" v-model="amountCreditNumber"></vue-slider>
                </ClientOnly>
                <span class="is-size-7" style="color: #6e43b7;">{{maxValue | VMask(currencyMask)}}</span>
              </div>
              <label class="mb-3 is-size-5">¿Cuándo puedes pagar? Una cuota <strong style="color: #6e43b7;">máx de 30 días</strong> </label>
              <t-datepicker
                :minDate="minDate_"
                :maxDate="maxDate_"
                v-model="date"
                :inline="false"
                lang="es"
              >
              </t-datepicker>
              <span class="is-size-7">Si pagas los primeros 10 días tendrás el 50% de descuento en cargos seleccionados</span>
              <div class="is-flex is-justify-content-center">
                <button class="mt-5 btn-form-credit">Pedir mi credito</button>
              </div>
            </form>
          </div>
          <div class="summary-credit is-flex is-flex-direction-column mt-6" style="gap: 15px; margin-bottom: 100px;">
            <div class="is-flex is-justify-content-space-between">
              <span>Valor solicitado</span>
              <div>
                <span>{{amountCredit_ | VMask(currencyMask)}}</span>
              </div>
            </div>
            <div class="is-flex is-justify-content-space-between">
              <span>Interés (25% E.A)</span>
              <div class="is-flex is-align-items-center" style="gap: 10px;">
                <span>{{interests | VMask(currencyMask)}}</span>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-circle" class="svg-inline--fa fa-exclamation-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>
              </div>
            </div>
            <div class="is-flex is-justify-content-space-between">
              <span>Seguro</span>
              <div class="is-flex is-align-items-center" style="gap: 10px;">
                <span>{{secure | VMask(currencyMask)}}</span>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-circle" class="svg-inline--fa fa-exclamation-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>
              </div>
            </div>
            <div class="is-flex is-justify-content-space-between">
              <span>Administración</span>
              <div class="is-flex is-align-items-center" style="gap: 10px;">
                <span>{{administration | VMask(currencyMask)}}</span>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-circle" class="svg-inline--fa fa-exclamation-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>
              </div>
            </div>
            <div class="is-flex is-justify-content-space-between">
              <span>IVA</span>
              <div class="is-flex is-align-items-center" style="gap: 10px;">
                <span>{{iva | VMask(currencyMask)}}</span>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-circle" class="svg-inline--fa fa-exclamation-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>
              </div>
            </div>
            <div class="border-separation"></div>
            <div class="is-flex is-justify-content-space-between">
              <strong>TOTAL A PAGAR</strong>
              <div>
                <strong>{{TotalToPay | VMask(currencyMask)}}</strong>
              </div>
            </div>
            <div class="is-flex is-justify-content-center">
                <button class="mt-5 btn-form-credit">Pedir mi credito</button>
              </div>
          </div>
        </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
import TDatepicker from 'vue-tailwind/dist/t-datepicker'
import Footer from '@/components/global/footer.vue'
import VueMask from 'v-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import 'vue-slider-component/theme/default.css'
import dayjs from 'dayjs'
// var duration = require('dayjs/plugin/duration')
// dayjs.extend(duration)

const currencyMask = createNumberMask({
    thousandsSeparatorSymbol: '.',
    decimalSymbol: ',',
    prefix: 'COP ',
    allowDecimal: true,
    includeThousandsSeparator: true,
    allowNegative: false,
  });

// import VueSlider from 'vue-slider-component'


const settings = {
  't-datepicker': {
    component: TDatepicker,
    props: {
      fixedClasses: {
        navigator: 'flex',
        navigatorViewButton: 'flex items-center',
        navigatorViewButtonIcon: 'flex-shrink-0 h-5 w-5',
        navigatorViewButtonBackIcon: 'flex-shrink-0 h-5 w-5',
        navigatorLabel: 'flex items-center py-1',
        navigatorPrevButtonIcon: 'h-6 w-6 inline-flex',
        navigatorNextButtonIcon: 'h-6 w-6 inline-flex',
        inputWrapper: 'relative',
        viewGroup: 'inline-flex flex-wrap',
        view: 'w-64',
        calendarDaysWrapper: 'grid grid-cols-7',
        calendarHeaderWrapper: 'grid grid-cols-7',
        monthWrapper: 'grid grid-cols-4',
        yearWrapper: 'grid grid-cols-4',
        input: 'block w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
        clearButton: 'flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-2 h-6 w-6',
        clearButtonIcon: 'fill-current h-3 w-3'
      },
      classes: {
        wrapper: 'flex flex-col',
        dropdownWrapper: 'relative z-10',
        dropdown: 'origin-top-left absolute rounded shadow bg-white overflow-hidden mt-1',
        enterClass: 'opacity-0 scale-95',
        enterActiveClass: 'transition transform ease-out duration-100',
        enterToClass: 'opacity-100 scale-100',
        leaveClass: 'opacity-100 scale-100',
        leaveActiveClass: 'transition transform ease-in duration-75',
        leaveToClass: 'opacity-0 scale-95',
        inlineWrapper: '',
        inlineViews: 'rounded bg-white border mt-1 inline-flex',
        inputWrapper: '',
        input: 'text-black placeholder-gray-400 border-gray-300',
        clearButton: 'hover:bg-gray-100 rounded transition duration-100 ease-in-out text-gray-600',
        clearButtonIcon: '',
        viewGroup: '',
        view: '',
        navigator: 'pt-2 px-3',
        navigatorViewButton: 'transition ease-in-out duration-100 inline-flex cursor-pointer rounded-full px-2 py-1 -ml-1 hover:bg-gray-100',
        navigatorViewButtonIcon: 'fill-current text-gray-400',
        navigatorViewButtonBackIcon: 'fill-current text-gray-400',
        navigatorViewButtonMonth: 'text-gray-700 font-semibold',
        navigatorViewButtonYear: 'text-gray-500 ml-1',
        navigatorViewButtonYearRange: 'text-gray-500 ml-1',
        navigatorLabel: 'py-1',
        navigatorLabelMonth: 'text-gray-700 font-semibold',
        navigatorLabelYear: 'text-gray-500 ml-1',
        navigatorPrevButton: 'transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-100 rounded-full p-1 ml-2 ml-auto disabled:opacity-50 disabled:cursor-not-allowed',
        navigatorNextButton: 'transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-100 rounded-full p-1 -mr-1 disabled:opacity-50 disabled:cursor-not-allowed',
        navigatorPrevButtonIcon: 'text-gray-400',
        navigatorNextButtonIcon: 'text-gray-400',
        calendarWrapper: 'px-3 pt-2',
        calendarHeaderWrapper: '',
        calendarHeaderWeekDay: 'uppercase text-xs text-gray-500 w-8 h-8 flex items-center justify-center',
        calendarDaysWrapper: '',
        calendarDaysDayWrapper: 'w-full h-8 flex flex-shrink-0 items-center',
        otherMonthDay: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed',
        emptyDay: '',
        inRangeFirstDay: 'text-sm bg-blue-500 text-white w-full h-8 rounded-l-full',
        inRangeLastDay: 'text-sm bg-blue-500 text-white w-full h-8 rounded-r-full',
        inRangeDay: 'text-sm bg-blue-200 w-full h-8 disabled:opacity-50 disabled:cursor-not-allowed',
        selectedDay: 'text-sm rounded-full w-8 h-8 mx-auto bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed',
        activeDay: 'text-sm rounded-full bg-blue-100 w-8 h-8 mx-auto disabled:opacity-50 disabled:cursor-not-allowed',
        highlightedDay: 'text-sm rounded-full bg-blue-200 w-8 h-8 mx-auto disabled:opacity-50 disabled:cursor-not-allowed',
        day: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed',
        today: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed border border-blue-500',
        monthWrapper: 'px-3 pt-2',
        selectedMonth: 'text-sm rounded w-full h-12 mx-auto bg-blue-500 text-white',
        activeMonth: 'text-sm rounded w-full h-12 mx-auto bg-blue-100',
        month: 'text-sm rounded w-full h-12 mx-auto hover:bg-blue-100',
        yearWrapper: 'px-3 pt-2',
        year: 'text-sm rounded w-full h-12 mx-auto hover:bg-blue-100',
        selectedYear: 'text-sm rounded w-full h-12 mx-auto bg-blue-500 text-white',
        activeYear: 'text-sm rounded w-full h-12 mx-auto bg-blue-100'
      },
      variants: {
        danger: {
          input: 'border-red-300 bg-red-50 placeholder-red-200 text-red-900',
          clearButton: 'hover:bg-red-200 text-red-500'
        }
      }
    }
  }
}

Vue.use(VueTailwind, settings)
Vue.use(VueMask)

export default {
  data () {
    return {
      minDate_: new Date(),
      maxDate_: '',
      validInput: false,
      minValue: 100000,
      maxValue: 900000,
      intervalMount: 10000,
      amountCredit_: '',
      secure: 0,
      interests: 0,
      aval: 0,
      administration: 0,
      iva: 0,
      TotalToPay: 0,
      amountCreditNumber: null,
      currencyMask,
      date: ''
    }
  },

  components: {
    VueSlider: () =>
      import ('vue-slider-component')
      .then(VueSlider => VueSlider)
      .catch(),
    Footer,

  },
  metaInfo: {
    title: 'Pide tu credito'
  },
  watch: {
    amountCredit_: function () {
      this.amountCreditNumber = this.amountCredit_.replace('COP ', '').replace(/\./g,'')
      const amount_ = `${this.amountCredit_}`.replace('COP ', '').replace(/\./g,'')
      this.secure =  parseInt(amount_ === '' ? 0 : amount_) * 0.01
      this.interests = parseInt(amount_ === '' ? 0 : amount_) * 0.02
      this.aval = parseInt(amount_ === '' ? 0 : amount_) * 0.03
      this.administration = parseInt(amount_ === '' ? 0 : amount_) * 0.04
      this.iva = parseInt(amount_ === '' ? 0 : amount_) * 0.05
      this.TotalToPay = parseInt(amount_ === '' ? 0 : amount_) + this.secure + this.interests + this.aval + this.administration + this.iva
      
      this.handlerInputAmountCredit (this.amountCredit_)

    },
    amountCreditNumber: function () {
      this.amountCredit_ = this.amountCreditNumber
    }
  },
  created () {
    
    const minDateC = new Date()
    this.maxDate_ = new Date(minDateC.setMonth(minDateC.getMonth() + 1))
 

    this.notify.$on('sendAmountCredit', data => {
      this.amountCredit_ = data
      this.amountCreditNumber = data
    })
  },
  methods: {
    handlerInputAmountCredit (amount) {
      if (amount < this.minValue || amount > this.maxValue) {
        this.validInput = true
      } else if (amount >= this.minValue && amount <= this.maxValue) {
        this.validInput = false
      }
      if (amount === '') {
        this.validInput = false
      }
    }
  },
  destroyed () {
    this.notify.$off('sendAmountCredit')
  }
}
</script>

<style scoped>
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
  border-color: #6e43b7!important;
}
.focus\:ring-2:focus {
  box-shadow: #6e43b7!important;

  --tw-ring-offset-shadow: #6e43b7!important;
  --tw-ring-shadow: #6e43b7!important;;
  box-shadow: #6e43b7!important;;
}
.summary-credit {
  background: aliceblue;
  padding: 20px;
  border-radius: 20px;
}
.summary-credit svg {
  width: 17px;
  color: #6e43b7;
}
.btn-form-credit {
  background: #6e43b7;
  color: #fff;
  width: 160px;
  text-align: center;
  padding: 10px;
  border-radius: 30px;
}
.vue-slider {
  width: 70%!important;
}
.vue-slider-process {
  background: #6e43b7!important;
}
.vue-slider-dot-tooltip-inner {
  border-color: #6e43b7!important;
  background-color: #6e43b7!important;
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
.apply-for-credit-body {
  width: 80%;
  max-width: 650px;
  margin: 0 auto;
}
.border-separation {
  border-bottom: 1px solid #0c011f;
}
@media (min-width: 768px) {
  .container-slider {
    flex-direction: row;
  }
}
</style>
