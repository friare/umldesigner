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
              <form @submit.prevent="signup" id="registrationForm" class="login100-form validate-form">
                <span class="login100-form-title">
                  <span v-if="$route.name == 'Register'">Inscription</span>
                  <span v-else>📬️ &nbsp; Invitation</span>
                </span>
                <div  v-if="$route.name == 'Register' || $route.name == 'RegisterInviteAccept'" class="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                  <a href="javascript:void(0)" class="input-group-text bg-white text-muted square-right">
                    <i class="mdi mdi-account" aria-hidden="true"></i>
                  </a>
                  <input v-model="register_name" id="gInput1" class="input100 border-start-0 ms-0 form-control" type="text" placeholder="Nom et Prénom ">
                </div>

                <div  v-if="$route.name == 'Register' || $route.name == 'RegisterInviteAccept'" class="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                  <a href="javascript:void(0)" class="input-group-text bg-white text-muted square-right">
                    <i class="zmdi zmdi-email" aria-hidden="true"></i>
                  </a>
                  <input v-if="$route.name == 'RegisterInviteAccept'" disabled v-model="register_email" id="gInput2" class="input100 border-start-0 ms-0 form-control" type="email" placeholder="Email">
                  <input v-else v-model="register_email" id="gInput2" class="input100 border-start-0 ms-0 form-control" type="email" placeholder="Email">
                </div>

                <div  v-if="$route.name == 'Register' || $route.name == 'RegisterInviteAccept'" class="wrap-input100 validate-input input-group" id="Password-toggle">
                  <a href="javascript:void(0)" class="input-group-text bg-white text-muted square-right">
                    <i class="zmdi zmdi-lock" aria-hidden="true"></i>
                  </a>
                  <input autocomplete="new-password" v-model="register_password" id="gInput3" class="input100 border-start-0 ms-0 form-control" type="password" placeholder="Mot de passe">
                </div>
                <span class="err1">password not match</span>

                <label v-if="$route.name == 'Register' || $route.name == 'RegisterInviteAccept'" class="custom-control custom-checkbox mt-4">
                  <input type="checkbox" checked required class="">
                  <span class="custom-control-label">Accepter les <a class="text-primary" target="blank" href="terms">conditions et politiques</a></span>
                </label>
                <div class="container-login100-form-btn">
                  <button v-if="waitingAPIResponse" type="submit" id="gRegisterBtn" class="btn login100-form-btn btn-primary">
                    <img  width="50" src="@/assets/image/preloader/load2.gif" alt="loader"/>
                  </button>
                  <button v-else type="submit" id="gRegisterBtn" class="login100-form-btn btn-primary">
                    <span v-if="$route.name == 'RegisterInviteAccept'">M'inscrire et accepter l'invitation</span>
                    <span v-else-if="$route.name == 'RegisterInviteReject'" style="min-width: 20em;">😥️ &nbsp;Rejeter l'invitation</span>
                    <span v-else-if="$route.name == 'InviteAccept'" style="min-width: 20em;">Accepter l'invitation</span>
                    <span v-else-if="$route.name == 'InviteReject'" style="min-width: 20em;">😥️ &nbsp;Rejeter l'invitation</span>
                    <span v-else>M'inscrire</span>
                  </button>
                </div>
                <div class="text-center pt-3">
                  <p class="text-dark mb-0">J'ai déjà un compte
                    <router-link :to="{name: 'Login'}" class="text-primary ms-1">Me connecter</router-link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <transition name="slide-fade" appear mode="out-in">
        <alert v-if="alertMe" :status="gAlertType" :message="gAlertMessage"></alert>
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
      register_name: '',
      register_email: (this.$route.name == 'RegisterInviteAccept') ? this.$route.params.email : '',
      register_password: '',
      alertMe: false,
      gAlertMessage: '',
      gAlertType: '',
      inputFormat: [false, false, false],
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
    checkName () {
      if(/.+/.test(document.getElementById('gInput1').value)) {
        document.getElementById('gInput1').style.borderColor = "#b9f5b9"
        this.inputFormat[0] = true
      }
      else{
        document.getElementById('gInput1').style.borderColor = "#ffd5d5"
        this.inputFormat[0] = false
      }
    },
    checkMail () {
      if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.getElementById('gInput2').value)) {
        document.getElementById('gInput2').style.borderColor = "#b9f5b9"
        this.inputFormat[1] = true
      }
      else{
        document.getElementById('gInput2').style.borderColor = "#ffd5d5"
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
    signup () {
      if(this.$route.name == 'RegisterInviteAccept') {
        if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.register_email) || this.register_password.length < 8 || this.register_name.length < 0) {
          this.displayError(' Oups ! Veuillez remplir tous les champs correctement.', 'alert-no')
        }
        else{
          this.waitingAPIResponse = true
          guestAPI.post(`/invitation/guest/accept/${this.$route.params.token1}/${this.$route.params.token2}`, {
            name: this.register_name,
            email: this.$route.email,
            password: this.register_password
          })
          .then(response => {
            if(response.status == 200) {
              this.displayError('Compte créé et activé avec succès. Connectez vous maintenant.', 'alert-yes', 3000)
              this.waitingAPIResponse = false
              setTimeout(() => {
                this.$router.push({name: 'Login'})
              }, 500)
            }
            else{
              this.displayError('Oups ! quelque chose s\'est mal passé.', 'alert-no')
              this.waitingAPIResponse = false
            }
          })
          .catch(error => {
            if (error.response) {
              console.log(error)
              this.displayError(error.response.data.detail, 'alert-no', 4000)
            } else if (error.request) {
              this.displayError('The request was made but no response was received. Please check your network.', 'alert-no', 8000)
            } else {
              this.displayError('Oups ! something went wrong.', 'alert-no', 5000)
            }
            this.waitingAPIResponse = false
          })
        }
      }
      else if(this.$route.name == 'RegisterInviteReject') {
        this.waitingAPIResponse = true
        guestAPI.post(`/invitation/guest/reject/${this.$route.params.token1}/${this.$route.params.token2}`)
        .then(response => {
          if(response.status == 200) {
            this.displayError('Invitation rejeté avec succès.', 'alert-yes', 3000)
            this.waitingAPIResponse = false
            setTimeout(() => {
              this.$router.push({name: 'Landing'})
            }, 500)
          }
          else{
            this.displayError('Oups ! quelque chose s\'est mal passé.', 'alert-no')
            this.waitingAPIResponse = false
          }
        })
        .catch(error => {
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
      else if(this.$route.name == 'InviteAccept') {
        this.waitingAPIResponse = true
        guestAPI.post(`/invitation/user/accept/${this.$route.params.token1}`)
        .then(response => {
          if(response.status == 200) {
            this.displayError('Invitation accepté avec succès.', 'alert-yes', 3000)
            this.waitingAPIResponse = false
            setTimeout(() => {
              this.$router.push({name: 'Login'})
            }, 500)
          }
          else{
            this.displayError('Oups ! quelque chose s\'est mal passé.', 'alert-no')
            this.waitingAPIResponse = false
          }
        })
        .catch(error => {
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
      else if(this.$route.name == 'InviteReject') {
        this.waitingAPIResponse = true
        guestAPI.post(`/invitation/user/reject/${this.$route.params.token1}`)
        .then(response => {
          if(response.status == 200) {
            this.displayError('Invitation accepté avec succès.', 'alert-yes', 3000)
            this.waitingAPIResponse = false
            setTimeout(() => {
              this.$router.push({name: 'Landing'})
            }, 500)
          }
          else{
            this.displayError('Oups ! quelque chose s\'est mal passé.', 'alert-no')
            this.waitingAPIResponse = false
          }
        })
        .catch(error => {
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
      else {
        if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.register_email) || this.register_password.length < 8 || this.register_name.length < 0) {
          this.displayError(' Oups ! Veuillez remplir tous les champs correctement.', 'alert-no')
        }
        else{
          this.waitingAPIResponse = true

          guestAPI.post('/auth/register', {
            name: this.register_name,
            email: this.register_email,
            password: this.register_password
          })
          .then(response => {
            if(response.status == 201) {
              this.displayError('Compte créé avec succès. Vérifiez votre boîte mail pour activer votre compte.', 'alert-yes', 5000)
              this.waitingAPIResponse = false
            }
            else{
              this.displayError('Oups ! quelque chose s\'est mal passé.', 'alert-no')
              this.waitingAPIResponse = false
            }
          })
          .catch(error => {
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
      } 
    },
    animSubmitBtn() {
      if(this.inputFormat[0] && this.inputFormat[1] && this.inputFormat[2]) {
        document.getElementById('gRegisterBtn').classList.add('animate__headShake')
      }
      else{
        document.getElementById('gRegisterBtn').classList.remove('animate__headShake')
      }
    }
  },

  watch: {
    register_name: function() {
      this.checkName()
      this.animSubmitBtn()
    },
    register_email: function() {
      this.checkMail()
      this.animSubmitBtn()
    },
    register_password: function() {
      this.checkPassLenght('gInput3')
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
