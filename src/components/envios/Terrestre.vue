<template>
    <div>
        <div class="description-links-1 is-justify-content-center">
            <button id="btnSample" @click="clickLinkPaquetria"><div class="" :class="link_1_paqueteria ? 'bg-select' : ''"></div><span :class="link_1_paqueteria ? 'text-select' : ''">Paqueteria</span></button>
            <button @click="clickLinkMedicina"><div class="" :class="link_2_medicna ? 'bg-select' : ''"></div><span :class="link_2_medicna ? 'text-select' : ''">Medicina</span></button>
            <div class="dropdown is-hoverable">
                <div class="dropdown-trigger">
                    <button aria-haspopup="true" aria-controls="dropdown-menu4"><div class="" :class="link_2_celular ? 'bg-select' : ''"></div><span :class="link_2_celular ? 'text-select' : ''">Celulares</span></button>
                    <!-- <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                    <span>Hover me</span>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                    </button> -->
                </div>
                <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                    <div class="option-send-mobile dropdown-content">
                    <div class="dropdown-item">
                        <p>Para enviar un celular tienes que comunicarte directamente al numero de whatsapp: <strong><a href="https://api.whatsapp.com/send?phone=+573142822772&text=Hola, Nececito enviar un Celular" target="_blank">+573142822772</a></strong> y te atenderemos lo mas pronto posible para hacerte el mejor presupuesto.</p>
                    </div>
                    </div>
                </div>
            </div>
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
    border-bottom: 2px solid #F64A01!important;
    color: white;
    background: #F64A01;
    padding-left: 10px;
    padding-right: 10px;
}
.option-send-mobile {
    background: #151D4E;
    color: white!important;;
    border-radius: 10px;
    border: none;
    padding: 10px;
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.option-send-mobile .dropdown-item p {
    color: white!important;;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    margin: 0;
    padding: 0;
}
.option-send-mobile .dropdown-item p strong a{
    color: #F64A01!important;
    border-bottom: #ffffff 2px solid;
    font-size: 16px;
    font-weight: 900;
}
</style>