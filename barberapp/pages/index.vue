<template>

  <b-container fluid="lg" class="persona-cointainer">
    <b-row class="justify-content-lg-center">
      <b-col col md="5">
        <b-card body-class="body-card" align="center">
          <b-card-header>
            <b-card-img
              src="~/assets/Brasao.png"
              alt="Logo"
              class="header-card"
            ></b-card-img>
          </b-card-header>

          <b-card-text>
            <p>Acesse com seu número de telefone:</p>

            <b-form>
              <b-form-group label-align="center" label-for="login-form-cellphone-number">
                <b-form-input
                  id="input-login-form-cellphone-number"
                  v-model="tel"
                  placeholder="(11) 12345-1234"
                  required
                ></b-form-input>
              </b-form-group>

              <b-button block class="primary-color" @click="login_tel"
                >Entrar</b-button
              >
            </b-form>
            <br />

            <transition
            v-if="codetransition"
            >

            <b-form>
              <b-form-group label-align="center" label-for="login-form-verification">
                <b-form-input
                  id="input-verificatiopn-cellphone-number"
                  v-model="verificationcode"
                  placeholder="Código de verificação"
                  required
                ></b-form-input>
              </b-form-group>

              <b-button block class="primary-color" @click="confirma_codigo"
                >Login</b-button
              >
            </b-form>
              <br>
              <p>Não recebi o código</p>
            </transition>

              <p>Ou acesse com:</p>

 
           
                <b-button block class="facebook" size="md" @click="login_facebook">Facebook</b-button>

                <b-button block class="apple" size="md" @click="login_apple">Apple</b-button>
                  
                <b-button block class="google" size="md" @click="login_google">Google</b-button>
                  
               
              
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'IndexPage',

  loading: "~/components/nuxt-loading.vue",

  data() {
    return {
      tel: '',
      codetransition: false,
      verificationcode:''
    }
  },
 

  methods: {
    login_google() {
      const provider = new this.$fireModule.auth.GoogleAuthProvider()
      this.$fire.auth.signInWithPopup(provider).catch((error) => {
        console.error(error)
      })
    },
    login_facebook() {
      const provider = new this.$fireModule.auth.FacebookAuthProvider()
      this.$fire.auth.signInWithPopup(provider).catch((error) => {
        console.error(error)
      })
    },
    login_apple() {
      const provider = new this.$fireModule.auth.OAuthProvider()
      this.$fire.auth.signInWithPopup(provider).catch((error) => {
        console.error(error)
      })
    },
  
    login_tel() {
      const verifier = new this.$fireModule.auth.RecaptchaVerifier(
        'input-login-form-cellphone-number',
        {
          size: 'invisible',
          callback: (response) => {},
        }
      )

      const phoneNumber = '+55' + this.tel
      const appVerifier = verifier
      this.$fireModule.auth().languageCode = 'pt-br'

      this.$fireModule
        .auth()
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult
          this.codetransition = !this.codetransition
         
        })
        .catch((error) => {
          // Error; SMS not sent
          console.log('Error', error)
          this.$fireModule.auth.
          appVerifier.render.then(function(widgetId) {
            this.$fireModule.auth.grecaptcha.reset(widgetId);
          })

        } 

        )
    },
    confirma_codigo () {

      window.confirmationResult.confirm(this.verificationcode).then((result) => {
        // User signed in successfully.
        console.log("Deu Bom!")
        // ...
      }).catch((error) => {
        console.log(error)
      });

    

  },
  }
}
</script>

<style>
body {
  background-color: white;
}

.facebook {
  color: white;
  background-color: #3b5998;
  border-color: #3b5998;
}

.facebook:hover {
  color: #3b5998;
  background: transparent;
  border-color: #3b5998;
}

.google {
  color: white;
  background-color: #9c0e0e;
  border-color: #9c0e0e;
 
}

.google:hover {
  color: #9c0e0e;
  background: transparent;
  border-color: #9c0e0e;
}

.apple {
  color: black;
  background: white;
}

.apple:hover {
  color: white;
  background: transparent;
  border-color: white;
}

.body-card {
  background-color: #640101;
  color: #ffd700;
  border-style: solid;
  border-radius: 10px;
  border-color: #640101;
}

.primary-color {
  background: #ffd700;
  color: black;
}

.header-card {
  height: 180px;
  width: 180px;
}

.persona-cointainer {
  background-color: white;
  align-content: center;
}
</style>