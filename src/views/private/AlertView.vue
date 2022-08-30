<template>
  <div>
    <nav-layout @pushAlertData="loadAlert" :alertMsg="alertMsg" :alertType="alertType" @alertShowed="alertMsg=''" active-menu="alert">
      <template #header>
        <div class="second-nav"></div>
      </template>
      <template #body>
        <div v-if="userAlert==null||userAlert.length==0" class="col-12 mt-2">
          <div>
            <br>
          </div>
          <div class="pt-5 d-flex justify-content-between align-items-center flex-column">
            <img width="250" src="@/assets/image/brand/empty0.svg" alt="emty diagram image" class="mt-2"/>
            <div>
              <br><br>
            </div>
            <p>Aucune Alerte pour le moment. En attendant repandez de l'amour 😎️.</p>
          </div>
        </div>
        <div v-else>
          <div v-for="alert, i in userAlert" v-bind:key="i">
            <!-- --- -->
            <div class="block-darkula p-3" style="background-color: #fff;">
              <div class="container">
                <div class="max-w-5xl mx-auto text-center pb-12 md:pb-20 pr" >
                  <div class="alert-tag">NEW</div>
                  <h2 class="text-start leading-10 text-gray-900 tracking-tighter font-extrabold mb-2">
                    {{ alert.label }}
                    <span>
                      <button v-if="!alert.already_read" class="nav__menu__btn btn-action-alert" @click="lire(alert.id)">MARQUER LU</button>
                      <button class="nav__menu__btn btn-action-alert" @click="consulter(alert.label, alert.version.public_link)">CONSULTER</button>
                      <button class="nav__menu__btn btn-action-alert" @click="pusher">FUSIONER </button>
                    </span>
                  </h2>
                  <p style="text-align:left;" class="mt-5">
                    Nouvelle modification sur un diagramme !
                  </p>
                  <!--<p class="tools-alert w-100 text-white">
                    <button class="nav__menu__btn btn-action-alert" @click="lire(alert.id)">MARQUER LU</button>
                    <button class="nav__menu__btn btn-action-alert" @click="consulter(alert.label, alert.version.public_link)">CONSULTER</button>
                    <button class="nav__menu__btn btn-action-alert" @click="pusher">FUSIONER </button>
                  </p>-->
                </div>
              </div>
            </div>
            <!-- -- -->
          </div>
        </div>
      </template>
    </nav-layout>
  </div>
</template>

<script>
import NavLayout from "@/components/NavLayout";
import { getAPI } from '@/api/axios-api.js'

export default {
  name: "AlertView",
  data() {
    return {
      alertMsg: "",
      alertType: "",
      userAlert: null
    }
  },
  methods: {
    loadAlert (data) {
      this.userAlert = data
    },
    lire(id) {
      getAPI.patch('/alert/read', {
        alert_id: parseInt(id),
      })
      .then(() => {
        this.alertMsg = "Alerte traitée"
        this.alertType = "alert-yes"
        setTimeout(() => {
          this.$router.go()          
        }, 1000)
      })
      .catch((error) => {
        this.waitingUpdateResult = false
        this.alertMsg = "Oups ! "+error.response.data.detail
        this.alertType = "alert-no"
      })
    },
    consulter(label, token) {
      let a = document.createElement('a')
      a.setAttribute("href", '/editeur/collaborateur/version/' + label+ '/' +token)
      a.click()
      a.remove()
    },
    pusher() {
      alert('soon v1.2')
    }
  },
  components: {
    NavLayout,
  }
}
</script>

<style scoped>
  .btn-action-alert{
    background-color: #313f46;
    color: #fff;
  }
  .tools-alert{
    position: absolute;
    bottom: -3em;
    left: 0;
    right: 0;
    text-align: center;
  }
  .pr{
    position: relative;
  }
  .alert-tag{
    position: absolute;
    right: 1em;
    top: 0em;
    padding: .2em .7em;
    color: #fff;
    background-color: #e82646;
  }
</style>
