<template>
  <div class="layout">
    <header class="header">
      <strong class="icon-enviExpress">
        <!-- <g-link class="text-purple" to="/">{{ $static.metadata.siteName }}</g-link> -->
        <p class="text-purple" to="/">envi<strong style="color: #F64A01;">Express</strong></p>
      </strong>
      <nav class="nav">
        <div class="is-flex">
          <div class="dropdown is-active">
            <div class="dropdown-trigger">
              <a href="https://api.whatsapp.com/send?phone=+573142822772&text=Hola, Nececito enviar una encomienda!" target="_blank" class="button btn-navbar" aria-controls="dropdown-menu">
                <span class="text-purple btn-navbar" style="border-bottom: 2px solid #F64A01;">Contactanos</span>
                <!-- <span class="icon is-small is-hidden-tablet">
                  <img width="18px" src="@/assets/img/bars-solid.svg" alt="">
                </span> -->
                <span class="icon is-small is-hidden-mobile">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </a>
            </div>
            <!-- <div v-if="menuFinancial" class="dropdown-menu" id="dropdown-menu" role="menu">
              <div class="dropdown-content">
                <g-link class="dropdown-item">
                  Dropdown item
                </g-link>
                <g-link class="dropdown-item">
                  Other dropdown item
                </g-link>
                <g-link class="dropdown-item">
                  Active dropdown item
                </g-link>
                <g-link class="dropdown-item">
                  Other dropdown item
                </g-link>
                <hr class="dropdown-divider">
                <g-link class="dropdown-item">
                  With a divider
                </g-link>
              </div>
            </div> -->
          </div>
        </div>
        <!-- <div class="position-responsive">
          <BtnCreateAcount 
            :textBtnCreateAcount="textBtnCreateAcount"
          />
        </div> -->
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import BtnCreateAcount from '@/components/global/btn_create_acount.vue'
export default {
  data () { 
    return {
      textBtnCreateAcount: 'Crear mi cuenta',
      menuFinancial: false,
      menuAccompaniment: false
    }
  },
  metaInfo: {
    title: 'EnviExpress',
    meta: [
      {
        name: 'EnviExpress',
        content: 'Envios de encomiendas a toda Venezuela'
      }
    ],
  },
  components: {
    BtnCreateAcount
  },
  methods: {
    showMenuAccompaniment () {
      
      if (this.menuAccompaniment === false) {
        this.menuAccompaniment = true
      } else if (this.menuAccompaniment === true) {
        this.menuAccompaniment = false
      }
    },
    showMenuFinancial () {
      if (this.menuFinancial === false) {
        this.menuFinancial = true
      } else if (this.menuFinancial === true) {
        this.menuFinancial = false
      }
    }
  }
}
</script>

<style>
.icon-enviExpress {
  font-size: 22px;
}
.dropdown-menu {
  right: 0!important;
  left: auto;
}
a.dropdown-item.is-active {
  background: #4058E9!important;
}
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  z-index: 5;
  width: 100%;
  margin: 0 auto;
  position: sticky;
  top: 0;
  background: #fff;
  /* box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11),0 5px 15px 0 rgba(0,0,0,0.08); */
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 40px;
  /* border-bottom: 1px solid #4058E9; */
}

.nav__link {
  margin-left: 20px;
}
h1, h2, p, span, a {
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
}
.nav {
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.text-purple {
  color: #4058E9;
}
.nav .button {
  border-color: #fff!important;
}
.btn-navbar:hover {
  transition: 0.3s ease;
  transform: scale(1.1);
  display: inline-block;
}
@media (max-width: 768px) {
  .position-responsive {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    padding: 15px 0px;
  }
}
</style>
