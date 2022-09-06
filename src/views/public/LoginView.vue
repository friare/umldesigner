<template>
  <div>
    <nav class="nav">
      <div class="nav__inner">
        <a href="/">
          <div class="logo">
            <img width="22" class="_mr-2" src="../../assets/svg/cube.svg"/>
            <span class="logo__text logo__accent flex">
            UML
            <span class="text_black">Designer</span>
          </span>
          </div>
        </a>
        <div class="nav__menu">
          <a href="" class="nav__menu__link">Tutoriels</a>
          <a href="" target="_blank" rel="noreferrer noopener" class="nav__menu__link">Blog</a>
          <router-link :to="{name: 'Login'}" class="nav__menu__btn">Connexion</router-link>
        </div>
      </div>
    </nav>

    <div class="hero__bg">
      <!-- PAGE -->
      <div class="hero">
        <div class="">
          <div class="container-login100">
            <div class="wrap-login100 p-6">
              <form  @submit.prevent="signin" class="login100-form validate-form">
                <span class="login100-form-title pb-5">
                    Connexion
                </span>
                <p><small style="color: red;">Ce programme, encore en phase de test, sera prochainement ouvert au grand public.</small></p>
                <div class="panel panel-primary">
                  <div class="panel-body tabs-menu-body p-0 pt-5">
                    <div class="tab-content">
                      <div class="tab-pane active" id="tab5">
                        <!-- field1 -->
                        <div class="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                          <a href="javascript:void(0)" class="input-group-text bg-white text-muted square-right">
                            <i class="zmdi zmdi-email text-muted" aria-hidden="true"></i>
                          </a>
                          <input id="gInput1" v-model="connect_email" class="input100 border-start-0 form-control ms-0" type="email" placeholder="Email">
                        </div>

                        <!--field2 -->
                        <div class="wrap-input100 validate-input input-group" id="Password-toggle">
                          <a href="javascript:void(0)" class="input-group-text bg-white text-muted square-right">
                            <i class="zmdi zmdi-lock text-muted " aria-hidden="true"></i>
                          </a>
                          <input id="gInput2" v-model="connect_password" class="input100 border-start-0 form-control ms-0" type="password" placeholder="Mot de passe">
                        </div>
                        <span class="err1">password not match</span>

                        <div class="text-end pt-4">
                          <p class="mb-0">
                            <router-link :to="{name: 'ForgetPassword'}" class="text-primary ms-1">Mot de passe oublié?</router-link>
                          </p>
                        </div>
                        <div class="container-login100-form-btn">
                          <button v-if="waitingAPIResponse" type="submit" id="gRegisterBtn" class="login100-form-btn btn-primary hero__cta">
                            <img  width="50" src="@/assets/image/preloader/load2.gif" alt="loader"/>
                          </button>
                          <button v-else type="submit" id="gRegisterBtn" class="login100-form-btn btn-primary hero__cta">
                            Se connecter
                          </button>
                        </div>
                        <div class="text-center pt-5">
                          <p class="text-dark mb-0">Vous êtes nouveau?
                            <router-link :to="{name: 'Register'}" class="text-primary ms-1">S'inscrire</router-link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </form>
            </div>
          </div>
          <!-- CONTAINER CLOSED -->
        </div>
      </div>

      <transition name="slide-fade" appear mode="out-in">
        <alert v-show="alertMe" :status="gAlertType" :message="gAlertMessage"></alert>
      </transition>

      <!-- FOOTER -->
      <footer class="footer">
        <div>
          <p class="footer__text">Created by
            <a class="footer__stress" href="https://www.linkedin.com/in/g%C3%A9n%C3%A9reux-akotenou-8b00901b4/" target="_blank" rel="noreferrer noopener">Généreux Akotenou</a>
            <span class="red">❤️</span>
          </p>
          <p class="footer__text">
            <span class="hometool__soon umld-ml-0">MEMOIRE</span>
            <span class="hometool__soon">IFRI</span>
            <span class="hometool__soon">MIFY</span>
          </p>
        </div>
        <div class="footer__right">
          <div class="footer__menu">
            <a class="footer__link" href="https://www.umldesigner.app">umlDesigner</a>
            <a class="footer__link" href="https://www.umldesigner.app/terms">Conditions</a>
            <a class="footer__link" href="https://www.umldesigner.app/privacy">Confidentialité</a>
            <a class="footer__link" href="" target="_blank" rel="noreferrer noopener">Twitter</a>
          </div>
          <p class="footer__text">
            © 2022 UML-DESIGNER | Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import Alert from '@/components/shared/Alert.vue'
import { guestAPI } from '@/api/axios-api.js'

export default {
  name: 'LoginView',
  
  components: {
    Alert
  },

  data () {
    return {
      connect_email: '',
      connect_password: '',
      alertMe: false,
      gAlertMessage: '',
      gAlertType: '',
      inputFormat: [false, false],
      waitingAPIResponse: false,
    }
  },

  methods: {
    displayError(error, type='alert-ok', time=4000) {
      this.gAlertMessage = error
      this.gAlertType = type
      this.alertMe = true
      setTimeout(() => {
        this.alertMe = false
      }, time);
    },
    checkMail () {
      if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.getElementById('gInput1').value)) {
        document.getElementById('gInput1').style.borderColor = "#b9f5b9"
        this.inputFormat[1] = true
      }
      else{
        document.getElementById('gInput1').style.borderColor = "#ffd5d5"
        this.inputFormat[1] = false
      }
    },
    checkPassLenght (id) {
      if(document.getElementById(id).value.length >= 8) {
        document.getElementById(id).style.borderColor = "#b9f5b9"
        document.getElementsByClassName('err1')[0].style.display = "none";
        this.inputFormat[2] = true
      }
      else{
        document.getElementById(id).style.borderColor = "#ffd5d5"
        document.getElementsByClassName('err1')[0].innerHTML = 'validation: au moins 8 caractères'
        document.getElementsByClassName('err1')[0].style.color = "red"; 
        document.getElementsByClassName('err1')[0].style.display = "block";
        this.inputFormat[2] = false
      }
    },
    signin () {
      if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.connect_email) || this.connect_password.length < 8) {
        this.displayError(' Oups ! Veuillez remplir tous les champs correctement.', 'alert-no')
      }
      else{
        this.waitingAPIResponse = true

        guestAPI.post('/auth/token', {
          username: this.connect_email,
          password: this.connect_password
        })
        .then(response => {
          if(response.status == 200) {
            const token = response.data.access_token
            sessionStorage.setItem('token', token)

            //redirect to appcore
            setTimeout(() => {
              this.waitingAPIResponse = false
              this.$router.push({name: 'Default'})
            }, 2000);
          }
          else{
            this.displayError('Oups ! quelque chose s\'est mal passé.', 'alert-no')
            this.waitingAPIResponse = false
          }
        })
        .catch(error => {
          sessionStorage.removeItem('token')
          if (error.response) {
            this.displayError(error.response.data.detail, 'alert-no', 4000)
          } else if (error.request) {
            this.displayError('The request was made but no response was received. Please check your network.', 'alert-no', 8000)
          } else {
            this.displayError('Oups ! something went wrong.', 'alert-no', 5000)
          }
          this.waitingAPIResponse = false
        })
      }
    },
    animSubmitBtn() {
      if(this.inputFormat[0] && this.inputFormat[1]) {
        document.getElementById('gRegisterBtn').classList.add('animate__headShake')
      }
      else{
        document.getElementById('gRegisterBtn').classList.remove('animate__headShake')
      }
    }
  },

  watch: {
    connect_email: function() {
      this.checkMail()
      this.animSubmitBtn()
    },
    connect_password: function() {
      this.checkPassLenght('gInput2')
      this.animSubmitBtn()
    },
  }
}
</script>

<style>
  body{
    position: relative;
  }
  .err1{
    margin-top: 0 !important;
    position: relative;
    bottom: .5em;
    left: 1em;
    font-size: 0.7em;
    /* background-color: red; */
    display: none;
  }
  /* fadeX */
  .fade-enter-active, .fade-leave-active{
    transition: opacity 1s, transform 1s;
  }
  .fade-enter, .fade-leave-active{
    opacity: 0;
    transform: translateX(20px);
  }
  .fade-move{
    transition: transform 1s;
  }
  /* fadeY */
  .fadeY-enter-active, .fadeY-leave-active{
    transition: opacity 1s, transform 1s;
  }
  .fadeY-enter, .fadeY-leave-active{
    opacity: 0;
    transform: translateY(20px);
  }
  .fadeY-move{
    transition: transform 1s;
  }
  .fadeY{
    transition: transform 1s;
  }
  /* *** */

  .gBGold{
    background-color: orange;
  }
  .bounce-enter-active{
    animation: bounce-in .5s;
  }

  .bounce-leave-active{
    animation: bounce-out .5s;
  }

  @keyframes bounce-in{
    0% {
      transform: scale(0);
    }

    50% {
      transform: scale(1.5);
    }

    100% {
      transform: scale(1);
    }
  }

  @keyframes bounce-out{
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.5);
    }

    100% {
      transform: scale(0);
    }
  }
  .slide-fade-enter {
    transition: opacity .3s ease;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-leave-to, .slide-fade-enter-from {
    transform: translateY(10px);
    opacity: 0;
  }
</style>
