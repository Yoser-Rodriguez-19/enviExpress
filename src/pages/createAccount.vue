<template>
  <div>
    <!-- <Layout></Layout> -->
    <div class="logo-create-acount">
      <div class="container-logo-create-acount">
        <p>enviExpress</p>
      </div>
    </div>
    <div class="go-back is-flex mt-6">
      <g-link class="is-flex" to="/">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
        Regresar
      </g-link>
    </div>
    <div>
      <div class="is-flex is-justify-content-center my-6 is-size-4">
        <h1 class="is-size-4"><strong>Crea tu cuenta</strong></h1>
      </div>
      <div class="container-create-acount">
        <div class="content-create-acount is-flex-direction-column mt-6" style="gap: 15px; margin-bottom: 100px;">
          
          <!-- <div id="alert" v-if="alert">{{ alert }}</div> -->

          <form @submit.prevent="signupWithPassword">
            <label>
              Nombre
              <input type="text" v-model="name" v-on:focusout="ValidityName"/>
              <span id="alert">{{ msgAlertName }}</span>
            </label>
            <div class="inputs-form-responsive mb-5 mt-5">
              <div class="input-phone-w-desktop">
                <label>
                  Primer apellido
                  <input type="text" v-model="lastname" v-on:focusout="ValidityLastname"/>
                  <span id="alert">{{ msgAlertLastname }}</span>
                </label>
              </div>
              <div class="mb-5 is-hidden-tablet"></div>
              <div class="input-phone-w-desktop">
                <label>
                  Segundo apellido
                  <input type="text" v-model="second_lasname" />
                </label>
              </div>
            </div>
            <div class="inputs-form-responsive mb-5">
              <div class="input-phone-w-desktop">
                <label>
                  Telefono
                  <VuePhoneNumberInput 
                    default-country-code="CO"
                    color="#6e43b7"
                    valid-color="#6e43b7"
                    error-color="#ff0000"
                    :only-countries="onlyCountries"
                    :translations="translationsObj"
                    v-model="phone" />
                    <span id="alert">{{ msgAlertPhone }}</span>
                </label>
              </div>
              <div class="mb-5 is-hidden-tablet"></div>
              <div class="input-phone-w-desktop">
                <label>
                  Correo 
                  <input type="email" v-model="email" v-on:focusout="validEmail"/>
                  <span id="alert">{{ msgAlertEmail }}</span>
                </label>
              </div>
            </div>
            <label>
              Crear contraseña
              <input class="mb-5" type="password" v-model="password" v-on:focusout="validPassword" />
            </label>
            <label>
              Verificar contraseña
              <input class="mb-5" type="password" v-model="passwordVerify" v-on:focusout="validPasswordVerify"/>
            </label>
            <span id="alert">{{ msgAlertPassword }}</span>
            <span id="alert">{{ msgAlertPasswordVerify }}</span>
            <div class="">
              <div class="is-flex term-form">
                <input type="checkbox" v-model="checkTerms">
                <a>Aceptar terminos y condiciones</a>
              </div>
              <div class="check-terms">
                <span v-if="msgAlertTerms">Por favor acepte los terminos y condiciones para continuar</span>
              </div>
            </div>
            <div class="btn-form-sign-up">
              <button type="submit">Crear mi cuenta</button>
            </div>
          </form>

          <!-- <p>ó</p>
        
            <button class="btn-google" @click.prevent="signupWithSSO">Entrar con Google</button> -->

        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/global/footer.vue'
import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'


export default {
  components: {
    Footer,
    VuePhoneNumberInput
  },
  data() {
    return {
      onlyCountries: ['CO', 'VE', 'PE', 'EC', 'CL'],
      translationsObj: {
        countrySelectorLabel: 'Código de país',
        countrySelectorError: 'Error de selección',
        phoneNumberLabel: 'Número de teléfono',
        example: 'Ejemplo :' 
      },
      email: '',
      name: '',
      password: '',
      passwordVerify: '',
      lastname: '',
      second_lasname: '',
      phone: '',
      checkTerms: false,
      valid: false,
      msgAlertTerms: false,
      validErrorEmail: false,
      validErrorPassword: false,
      validErrorPasswordVerify: false,
      validErrorName: false,
      validErrorLastname: false,
      validErrorPhone: false

    };
  },
  watch: {
      email: function () {
        if(this.email === '') {
          this.alert = ''
        }
      },
      password: function () {
        if(this.password === '') {
          this.alert = ''
        }
      },
      checkTerms: function () {
        this.validCheckTerms()
      }
  },
  computed: {
    msgAlertName: function () {
      if (this.validErrorName) {
        return 'El nombre es obligatorio'
      } else {
        return ''
      }
    },
    msgAlertLastname: function () {
      if (this.validErrorLastname) {
        return 'El primer apellido es obligatorio'
      } else {
        return ''
      }
    },
    msgAlertPhone: function () {
      if (this.validErrorPhone) {
        return 'El teléfono es obligatorio'
      } else {
        return ''
      }
    },
    msgAlertEmail: function () {
      if (this.validErrorEmail) {
        return 'Correo electronico incorrecto'
      } else {
        return ''
      }
    },
    msgAlertPassword: function () {
      if (this.validErrorPassword) {
        return 'La contraseña tiene que tener entre 8 y 15 caracteres, al menos una letra mayuscula, una letra minuscula, al menos un digito, no espacios en blanco, al menos un caracter especial'
      } else {
        return ''
      }
    },
    msgAlertPasswordVerify: function () {
      if (this.validErrorPasswordVerify) {
        return 'Las contraseñas no coinciden'
      } else {
        return ''
      }
    }
  },
  methods: {
    // Sign up with the form's email and password
    signupWithPassword() {
      this.validEmail()
      this.validPassword()
      this.ValidityName()
      this.ValidityLastname()
      this.validPasswordVerify()
      this.validCheckTerms()
      this.ValidityPhone()

      if (!this.validErrorName && 
          !this.validErrorLastname && 
          !this.validErrorEmail && 
          !this.validErrorPassword && 
          !this.validErrorPasswordVerify && 
          !this.validErrorPhone &&
          this.checkTerms) {

        this.valid = true

      }

      if (this.valid) {
        alert('Perfil creado exitosamente')
      }

    },
    validEmailRegex(email) {
      const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return reEmail.test(email)
    },
    validEmail() {
      if(!this.validEmailRegex(this.email) || this.email === '') {
        this.validErrorEmail = true
        this.value = false
      } else {
        this.validErrorEmail = false
      }
    },
    validPasswordRegex(password) {
      const rePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
      return rePassword.test(password)
    },
    validPassword() {
      if(!this.validPasswordRegex(this.password) || this.password === '') {
        this.alert = 'La contraseña tiene que tener entre 8 y 15 caracteres, al menos una letra mayuscula, una letra minuscula, al menos un digito, no espacios en blanco, al menos un caracter especial'
        this.validErrorPassword = true
        this.value = false
      } else {
        this.validErrorPassword = false
      }
    },
    validPasswordVerify() {
      if (this.password !== this.passwordVerify) {
        this.validErrorPasswordVerify = true
      } else {
        this.validErrorPasswordVerify = false
      }
    },
    ValidityPhone () {
      if (!this.phone || this.phone === '') {
        this.validErrorPhone = true
        this.value = false
      } else {
        this.validErrorPhone = false
        // this.messageTypeLast = 'is-success'
      }
    },
    ValidityName () {
      if (!this.name || this.name === '') {
        this.validErrorName = true
        this.value = false
      } else {
        this.validErrorName = false
        // this.messageTypeLast = 'is-success'
      }
    },
    ValidityLastname () {
      if (!this.lastname || this.lastname === '') {
        this.validErrorLastname = true
        this.value = false
      } else {
        this.validErrorLastname = false
        // this.messageTypeFirst = 'is-success'
      }
    },
    validCheckTerms () {    
      if(this.checkTerms === false ) {      
        this.msgAlertTerms = true
      } else {      
        this.msgAlertTerms = false
      }
    }
  },
}
</script>

<style>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:active,
input:-webkit-autofill:focus {
    background-color: #FFFFFF !important;
    color: #555 !important;
    -webkit-box-shadow: 0 0 0 1000px white inset !important;
    -webkit-text-fill-color: #555555 !important;
}
.country-selector.has-value .country-selector__input {
  border: none;
}
.input-tel__input:not(.no-country-selector) {
  border: none;
}
input:-webkit-autofill {
  color: #0c011f!important;
}
.input-tel.has-value .input-tel__label, 
.country-selector.has-value .country-selector__label {
  font-size: 9px!important;
}
.vue-phone-number-input {
  gap: 10px;
  margin-bottom: 5px;
}
.vue-phone-number-input .select-country-container {
  width: 115px;
  min-width: 115px;
  max-width: 115px;
}
.logo-create-acount {
  width: 100%;
}
.container-logo-create-acount {
  width: 40%;
  border-bottom: 5px solid #6e43b7;
  height: 70px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 600;
  font-size: 20px;
}
.container-logo-create-acount p {
  color: #6e43b7;
  margin-right: 30px;
}
.go-back {
  gap: 15px;
  margin-left: 5%;
}
.go-back svg {
  width: 10px;
  color: #6e43b7;
}
.go-back a {
  gap: 15px;
  color: #6e43b7;
}
.term-form input {
  width: 15px!important;
  height: 15px!important;
  margin: 5px!important;
}
.term-form {
  align-content: center;
  gap: 10px;
  justify-content: center;
  margin: 40px 0 0 0;
}
.term-form a {
  border-bottom: #6e43b7!important;
  color: #6e43b7;
}
.check-terms {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}
.check-terms span {
  color: red;
  font-size: 10px;  
}
.btn-google {
  border-bottom: 2px solid #6e43b7;
}
.btn-form-sign-up button {
  cursor: pointer;
  background: #6e43b7;
  color: #fff;
  width: 140px;
  height: 45px;
  border-radius: 30px;
}
.btn-form-sign-up {
  display: flex;
  justify-content: center
}
.container-create-acount {
  width: 90%;
  max-width: 650px;
  margin: 0 auto;
}
.content-create-acount {
  background: aliceblue;
  padding: 20px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.content-create-acount form input {
  width: 100%;
  outline: none;
  height: 40px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  margin-top: 7px;
  padding: 0px 10px;
}
.content-create-acount label {
  color: #0c011f;
}
button,
  input {
    display: block;
    margin-bottom: 10px;
  }

  #alert {
    color: red;
    margin-bottom: 10px;
    font-size: 10px;
  }
@media (min-width: 768px) {
  .inputs-form-responsive {
    display: flex;
    gap: 35px;
  }
  .input-phone-w-desktop {
    width: 50%;
  }
}
</style>