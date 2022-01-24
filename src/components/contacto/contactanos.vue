<template>
    
    <div class="container-contact mt-6">
        <div class="title-contact my-6">
            <h2>Contactanos</h2>
        </div>
        <div class="mb-6">
            <Mapa class="mapa"/>
        </div>
        <div class="location-contact">
            <h3 class="mb-5">Dirección de oficinas:</h3>
            <p>C.C. Panamá-Auto Norte - DG 182</p>
            <p>1er piso local: L 165 C</p>
            <strong>Bogota-Colombia (Norte)</strong>
            <br/>
            <strong>Numero: +57 314 282 2772</strong>
        </div>
    </div>

</template>

<script>
import Mapa from "../mapa/Mapa.vue";


export default {
    components: {
        Mapa
    }
}
</script>

<style>
.container-contact {
    width: 90%;
    margin: 0 auto;
}
.title-contact h2 {
    text-align: center;
    font-size: 22px;
    font-weight: bold;
}
.location-contact h3 {
    font-size: 18px;
    font-weight: bold;
    text-decoration: underline;

}
@media (min-width: 1024px) {
    .container-contact {
        width: 70%;
    }
}

</style>