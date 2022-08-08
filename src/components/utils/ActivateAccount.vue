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

      <div class="hero" style="text-align: center;">
        <div v-show="done">
          <img width="300" src="@/assets/image/brand/checked0.svg" alt="task image"/>
          <br>
          <p><strong>Great ! Account activated.</strong></p>
        </div>
        <div v-show="fail">
          <img width="300" src="@/assets/image/brand/empty1.svg" alt="task image"/>
          <br><br>
          <p><strong>User not found.</strong></p>
        </div>
      </div>

      <div v-if="waitingAPIResponse" style="text-align: center; margin-bottom: 3em;">
        <img width="250" src="@/assets/image/preloader/load2.gif" alt="loader"/>
        <br><br><br>
      </div>

      <transition name="fadeY" appear mode="out-in">
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
  name: 'ActivateAccount',
  
  components: {
    Alert
  },

  data () {
    return {
      alertMe: false,
      gAlertMessage: '',
      gAlertType: '',
      waitingAPIResponse: true,
      done: false,
      fail: false,
    }
  },

  methods: {
    displayError(error, type='alert-ok', time=5000) {
      this.gAlertMessage = error
      this.gAlertType = type
      this.alertMe = true
      setTimeout(() => {
        this.alertMe = false
      }, time);
    },
    activateUser(token) {
      guestAPI.post('/auth/activate', {token: token})
      .then(response => {
        console.log(response)
        console.log("response")
        if(response.status == 200) {
          this.displayError('Great ! Account activated. Login right now. We wish you the best.', 'alert-yes', 8000)
          this.waitingAPIResponse = false
          this.done = true
          setTimeout(() => {
            this.$router.push({name: 'Login'})
          }, 2000);
        }
        else{
          this.displayError('Oups ! something went wrong.', 'alert-no')
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
        this.fail = true
      })
    }
  },

  async created() {
    window.addEventListener('load', () => {
      this.activateUser(this.$route.params.token)
    })
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
</style>
