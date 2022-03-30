<template>
    <div>
        <div class="description-links-1 flex-directions-mobile is-justify-content-center mt-4">
            <div class="dropdown is-hoverable">
                <div class="dropdown-trigger">
                    <button aria-haspopup="true" aria-controls="dropdown-menu4" @click="clickLinkCiudadesPrincipales"><div class="" :class="link_ciudades_principales ? 'bg-select' : ''"></div><span :class="link_ciudades_principales ? 'text-select-ciudad' : ''" class="text-cuidad-mobile">Ciudades Principales</span>
                        <!-- <span class="icon is-small">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span> -->
                    </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                    <div class="dropdown-content">
                        <div class="dropdown-item">
                            <strong>Caracas</strong>
                            <hr />
                            <strong>Maracay</strong>
                            <hr />
                            <strong>Barquisimeto</strong>
                            <hr />
                            <strong>Valencia</strong>
                        </div>
                    </div>
                </div>
            </div>
            <button @click="clickLinkOtrasCiudades"><div class="" :class="link_otras_ciudades ? 'bg-select' : ''"></div><span :class="link_otras_ciudades ? 'text-select-ciudad' : ''" class="text-cuidad-mobile">Otras ciudades</span></button>
        </div>
        <div class="mt-5">
            <!-- <h1 v-if="this.precioPorKilo >= this.precioPorVolumen">{{precioPorKilo}}</h1>
            <h1 v-else>{{precioPorVolumen}}</h1> -->
            <div class="mb-3">
                <strong>Precio de el Kg: <strong style="color: #F64A01!important;" class="ml-3 precio-establecido">{{precioKgEstablecido | VMask(currencyMask)}}</strong></strong>
            </div>
            <div class="mb-3">
                <strong class="mb-2">Peso</strong>
                <div class="is-flex is-justify-content-space-between w-80-envie m-cero-auto">
                    <label>Kg.</label>
                    <input class="input-calc-price" type="number" v-model="valorKg">
                </div>
            </div>
            <div>
                <strong class="mb-2">Volumen (centimetros)</strong>
                <div>
                    <div class="is-flex is-justify-content-space-between w-80-envie m-cero-auto">
                        <label>Alto</label>
                        <input class="input-calc-price" type="number" v-model="valorAltura">
                    </div>
                    <div class="is-flex is-justify-content-space-between w-80-envie m-cero-auto">
                        <label>Ancho</label>
                        <input class="input-calc-price" type="number" v-model="valorAncho">
                    </div>
                    <div class="is-flex is-justify-content-space-between w-80-envie m-cero-auto">
                        <label>Profundidad</label>
                        <input class="input-calc-price" type="number" v-model="valorProfundidad">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const currencyMask = createNumberMask({
    thousandsSeparatorSymbol: '.',
    decimalSymbol: ',',
    prefix: 'COP ',
    allowDecimal: true,
    includeThousandsSeparator: true,
    allowNegative: false,
  });

let variableTipoEnvio = ''

export default {
    data () {
        return {
            tipoEnvio: '',
            valorAltura: 0,
            valorAncho: 0,
            valorProfundidad: 0,
            valorKg: 0,
            precioPorKilo: null,
            precioPorVolumen: null,
            montoParaDividir: 0,
            precioKgEstablecido: 0,
            currencyMask,
            link_ciudades_principales: true,
            link_otras_ciudades: false,
            tipoCiudad: ''
        }
    },
    props: {
        montoParaDividir_: Number,
        precioKgEstablecido_: Number,
        tipo_Ciudad: String
    },
    watch: {
        valorKg: function() {
            this.precioKg(this.valorKg)
        },
        valorAltura: function() {
            this.precioVolumen()
        },
        valorAncho: function() {
            this.precioVolumen()
        },
        valorProfundidad: function() {
            this.precioVolumen()
        },


    },
    created () {
        this.notify.$on('click_terrestre_paqueteria', () => {

        })
        this.tipoCiudad = this.tipo_Ciudad
        this.notify.$on('refreshPrice', () => {
            this.precioKg(this.valorKg)
            this.precioVolumen()
            // this.valorKg = 0
            // this.valorAltura = 0
            // this.valorAncho = 0
            // this.valorProfundidad = 0
            // this.link_ciudades_principales = true
            // this.link_otras_ciudades = false
        })
        // console.log(ciudad_tipo, 'llego hasta aqui la inf')
        this.montoParaDividir = this.montoParaDividir_
        this.precioKgEstablecido = this.precioKgEstablecido_
        this.notify.$on('tiposEnvios', data => {

            variableTipoEnvio = data
            this.tipoEnvio = data
            // console.log(this.tipoEnvio, '<<<<<<<<<<<<<<<')
            switch (this.tipoEnvio) {
                case 'aereo_paqueteria':

                    this.montoParaDividir = 6000
                    this.precioKgEstablecido = 35000
                    break;

                case 'aereo_medicina':

                    this.montoParaDividir = 6000
                    this.precioKgEstablecido = 50000
                    break;
                case 'terrestre_paqueteria':

                    this.montoParaDividir = 5000
                    if (this.link_ciudades_principales === true) {
                        this.precioKgEstablecido = 25000
                    }
                    if (this.link_otras_ciudades === true) {
                        this.precioKgEstablecido = 29000
                    }
                    break;
                case 'terrestre_medicina':
                    this.montoParaDividir = 5000
                    if (this.link_ciudades_principales === true) {
                        this.precioKgEstablecido = 40000
                    }
                    if (this.link_otras_ciudades === true) {
                        this.precioKgEstablecido = 45000
                    }
                    break;

                case 'terrestre_celulares':
                    this.montoParaDividir = 5000
                    if (this.link_ciudades_principales === true) {
                        this.precioKgEstablecido = 90000
                    }
                    if (this.link_otras_ciudades === true) {
                        this.precioKgEstablecido = 110000
                    }
                    break;

                default:
                    console.log('algo aqui')
            }
        })
        // // console.log(this.tipoEnvio)
    },
    methods: {
        precioKg(valorKg_) {
            const calPrecio = valorKg_*this.precioKgEstablecido
            if(calPrecio < this.precioKgEstablecido && calPrecio > 0) { this.precioPorKilo = this.precioKgEstablecido} 
            else ( this.precioPorKilo = calPrecio )
            this.notify.$emit('precioPorLosKilos', this.precioPorKilo)
        },
        precioVolumen() {         
            const kilogramoPorVolumen = (this.valorAltura * this.valorAncho * this.valorProfundidad)/this.montoParaDividir
            const calPrecio =  kilogramoPorVolumen*this.precioKgEstablecido
            if(calPrecio < this.precioKgEstablecido && calPrecio > 0) { this.precioPorVolumen = this.precioKgEstablecido } 
            else ( this.precioPorVolumen = calPrecio )
            this.notify.$emit('precioPorElVolumen', this.precioPorVolumen)
        },
        clickLinkCiudadesPrincipales () {
            switch (variableTipoEnvio) {
                case 'terrestre_paqueteria':
                    this.precioKgEstablecido = 25000
                    break;

                case 'terrestre_medicina':
                    this.precioKgEstablecido = 40000
                    break;

                case 'terrestre_celulares':
                     this.precioKgEstablecido = 90000
                    break;
            
                default:
                    break;
            }
            this.notify.$emit('refreshPrice')
            this.link_ciudades_principales = true,
            this.link_otras_ciudades = false,
            this.tipoCiudad = 'principal'
            // console.log(loquesea, 'tengo aqui el tipo de envio?')
            // this.notify.$emit('ciudad', 'principal')
        },
        clickLinkOtrasCiudades () {
            switch (variableTipoEnvio) {
                case 'terrestre_paqueteria':
                    this.precioKgEstablecido = 29000
                    break;

                case 'terrestre_medicina':
                    this.precioKgEstablecido = 45000
                    break;

                case 'terrestre_celulares':
                     this.precioKgEstablecido = 110000
                    break;
            
                default:
                    break;
            }
            this.notify.$emit('refreshPrice')
            this.link_ciudades_principales = false,
            this.link_otras_ciudades = true,
            this.tipoCiudad = 'secundaria'
            console.log(variableTipoEnvio, 'tengo aqui el tipo de envio?')
            // this.notify.$emit('ciudad', 'secundaria')
        },
    },
    destroyed () {
        this.valorKg = 0
        this.valorAltura = 0
        this.valorAncho = 0
        this.valorProfundidad = 0
        this.notify.$emit('refreshPrice')
    }

}
</script>


<style>
.w-100-envie {
    width: 100%;
}
.input-calc-price {
    border-bottom: 1px solid #4058E9;
    max-width: 60px;
    background: transparent;
    outline: none;
}
.w-80-envie {
    width: 80%;
}
.m-cero-auto {
    margin: 0 auto;
}
.precio-establecido {
    color: #242424!important;
}
@media (max-width: 1105px) {
    .text-cuidad-mobile {
        font-size: 13px;
    }
}


@media (max-width: 768px) {
    .flex-directions-mobile {
        flex-direction: column;
        align-items: center;
    }
}
</style>