
<template>
  <div>
    <div
      id="map"
      class="mapa"
      ref="mapa"
    ></div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot
        :google="google"
        :map="map"
      />
    </template>
  </div>
</template>

<script>

  import { Loader } from '@googlemaps/js-api-loader';

  const loader = new Loader({
    apiKey: "AIzaSyCZ0fu3rxYeUT_fBNPECu3RkzTnbEfTWSE",
  });
  const coord = {lat: 4.7564113, lng: -74.0451511}
  const mapOptions = {
    center: {
      lat: 4.7564113,
      lng: -74.0451511
    },
    zoom: 14
  };

  export default {
    props: {
      configMapa: Object,
      apiKey: String
    },

    data() {
      return {
        google: null,
        map: null
      };
    },

    async mounted() {
      await loader
        .load()
        .then((google) => {
          console.log(google, '<<<<<<<<<<<<<<<<<<<')
          // console.log(new google.maps.Map(document.getElementById("map"), mapOptions), 'aaaaaaaaaaaaaaaaaaaaaaa')
          const googleMapApi = new google.maps.Map(document.getElementById("map"), mapOptions);
          const marker = new google.maps.Marker({
            position: coord,
            map: googleMapApi
          })
          this.google = googleMapApi;
          console.log(this.google, 'aaaaa')
          this.initializeMap();
        })
        .catch(e => {
          // do something
        });
      //   console.log('algo entra aqui??')
      // const googleMapApi = await Loader({
      //   apiKey: this.apiKey,
      // });
      // console.log(googleMapApi, 'lalalalalala');
    },

    methods: {
      initializeMap() {
        const mapContainer = this.$refs.mapa;
        console.log(mapContainer, '-----------------')
        this.map = new this.google.maps.Map(mapContainer, mapOptions);
        console.log(this.map)
      }
    }

  };
</script>

<style scoped>
  .mapa {
    width: 100%;
    min-height: 100%;
  }
</style>
