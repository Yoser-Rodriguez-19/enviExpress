<template>
    <div>
        <div class="description-links-1 is-justify-content-center">
            <button id="btnSample" @click="clickLinkPaquetria"><div class="" :class="link_1_paqueteria ? 'bg-select' : ''"></div><span :class="link_1_paqueteria ? 'text-select' : ''">Paqueteria</span></button>
            <button @click="clickLinkMedicina"><div class="" :class="link_2_medicna ? 'bg-select' : ''"></div><span :class="link_2_medicna ? 'text-select' : ''">Medicina</span></button>
            <button @click="clickLinkCelular"><div class="" :class="link_2_celular ? 'bg-select' : ''"></div><span :class="link_2_celular ? 'text-select' : ''">Celulares</span></button>
        </div>
        <div>
            <CalcEnvi 
                :montoParaDividir_="5000"
                :precioKgEstablecido_="25000"
                :tipo_Ciudad="tipo_Ciudad"
            />
        </div>
    </div>
</template>

<script>
import CalcEnvi from '@/components/envios/CalculoEnvio.vue'



export default {
    components: {
        CalcEnvi
    },
    data () {
        return {
            link_1_paqueteria: true,
            link_2_medicna: false,
            link_2_celular: false,
            tipoEnvio: 'terrestre_paqueteria',
            tipo_Ciudad: 'principal'
        }
    },
    mounted() {
        document.getElementById("btnSample").click();
    },
    methods: {
        clickLinkPaquetria() {
            this.link_1_paqueteria = true,
            this.link_2_medicna = false,
            this.link_2_celular = false,
            this.tipoEnvio = 'terrestre_paqueteria',
            this.notify.$emit('tiposEnvios', this.tipoEnvio)
            this.notify.$emit('refreshPrice')
        },
        clickLinkMedicina() {
            this.link_1_paqueteria = false,
            this.link_2_medicna = true,
            this.link_2_celular = false,
            this.tipoEnvio = 'terrestre_medicina',
            this.notify.$emit('tiposEnvios', this.tipoEnvio)
            this.notify.$emit('refreshPrice')
        },
        clickLinkCelular() {
            this.link_1_paqueteria = false,
            this.link_2_medicna = false,
            this.link_2_celular = true,
            this.tipoEnvio = 'terrestre_celulares',
            this.notify.$emit('tiposEnvios', this.tipoEnvio)
            this.notify.$emit('refreshPrice')
        },
    },

}
</script>


<style>
.text-select-ciudad {
    border-bottom: 2px solid #F64A01;
    color: white;
    background: #F64A01;
    padding-left: 10px;
    padding-right: 10px;
}
</style>