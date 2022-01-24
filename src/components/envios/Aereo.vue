<template>
    <div>
        <div class="description-links-1 is-justify-content-center">
            <button @click="clickLinkPaquetria"><div class="" :class="link_1_paqueteria ? 'bg-select' : ''"></div><span :class="link_1_paqueteria ? 'text-select' : ''">Paqueteria</span></button>
            <button @click="clickLinkMedicina"><div class="" :class="link_2_medicna ? 'bg-select' : ''"></div><span :class="link_2_medicna ? 'text-select' : ''">Medicina</span></button>
        </div>
        <div>
            <CalcEnvi 
                :montoParaDividir_="6000"
                :precioKgEstablecido_="35000"
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
            tipoEnvio: 'aereo_paqueteria',
            tipo_Ciudad: 'principal'
        }
    },
    created() {
        this.notify.$emit('tiposEnvios', this.tipoEnvio)
        this.notify.$emit('click_terrestre_paqueteria')
    },
    methods: {
        clickLinkPaquetria() {
            this.link_1_paqueteria = true,
            this.link_2_medicna = false,
            this.tipoEnvio = 'aereo_paqueteria',
            this.notify.$emit('tiposEnvios', this.tipoEnvio)
            this.notify.$emit('refreshPrice')
        },
        clickLinkMedicina() {
            this.link_1_paqueteria = false,
            this.link_2_medicna = true,
            this.tipoEnvio = 'aereo_medicina',
            this.notify.$emit('tiposEnvios', this.tipoEnvio)
            this.notify.$emit('refreshPrice')
        },
    },

}
</script>