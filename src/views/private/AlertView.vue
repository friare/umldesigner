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

          <div class="w-100 mt-4" style="overflow-x: scroll;"> 
            <div class="col-12 pe-0" style="min-width: 800px; padding-left: 0;">
              <!-- header -->
              <div class="cfa-block ml-0 gCorner-1100">
                <div class="py-2 row d-flex">
                  <div class="text-start col-2"><strong class="cfa-primary">Label</strong></div>
                  <div class="text-start col-4"><strong class="cfa-primary">Description</strong></div>
                  <div class="text-end text-md-start col-6"><strong class="cfa-primary">Options</strong></div>
                </div>
              </div>
              <!-- table -->
              <div v-for="alert, i in userAlert" v-bind:key="i" class="cfa-block ml-0 gCorner-0011" style="box-shadow: none; margin-top: .2em; padding: .5em;">
                <div class="py-1 row d-flex align-items-center cfa-user-progress-line">
                  <div class="text-start col-2">
                    {{ alert.label }}
                  </div>
                  <div class="text-start col-4">
                    Nouvelle modification sur un diagramme !
                  </div>
                  <div class="text-start col-6 ms-5 ms-md-0">
                    <div class="d-flex justify-content-end">
                      <icon-button v-if="!alert.already_read" @onclick="lire(alert.id)" title="marquer lu" style="padding-right: .3em;">
                        <template v-slot:icon>
                          <i style="font-size: 1.5em;" class="fa fa-eye cfa-primary"></i>
                        </template>
                      </icon-button>
                      <icon-button @onclick="consulter(alert.label, alert.version.public_link)" title="consulter" style="padding-right: .3em;">
                        <template v-slot:icon>
                          <i style="font-size: 1.5em;" class="fa fa-folder"></i>
                        </template>
                      </icon-button>
                      <icon-button @onclick="pusher" style="" title="fusioner">
                        <template v-slot:icon>
                          <i style="font-size: 1.5em;" class="fa fa-edit cfa-danger"></i>
                        </template>
                      </icon-button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- paginator -->
              <div class="cfa-paginator">
                <div class="mb-4">
                  <ul class="pagination float-end">
                    <li class="page-item page-prev disabled">
                      <a class="page-link" href="javascript:void(0)" tabindex="-1">Prev</a>
                    </li>
                    <li class="page-item active">
                      <a class="page-link" href="javascript:void(0)">1</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:void(0)">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:void(0)">3</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:void(0)">4</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:void(0)">5</a>
                    </li>
                    <li class="page-item page-next">
                      <a class="page-link" href="javascript:void(0)">Next</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- <div v-for="alert, i in userAlert" v-bind:key="i">
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
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </template>
    </nav-layout>
  </div>
</template>

<script>
import NavLayout from "@/components/NavLayout"
import IconButton from "@/components/shared/IconButton.vue"
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
    IconButton
  }
}
</script>

<style scoped>
  .page-item.active .page-link {
    z-index: 1;
    color: #e82646 !important;
  }
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
<style scoped>
  .cfa-page{

  }
  .cfa-block{
    background-color: #fff;
    border-radius: 0.5em;
    padding: .5em 1em;
    box-shadow: -1px 1px 29px 20px rgba(222,234,250,0.87);
    -webkit-box-shadow: -1px 1px 29px 20px rgba(222,234,250,0.87);
    -moz-box-shadow: -1px 1px 29px 20px rgba(222,234,250,0.87);

    /* border: 1px solid transparent;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); */
  }
  .cfa-avatar1{
    cursor: pointer;
    /* padding: 0.5em; */
    border-radius: .5em;
    /* background-color: #f0f3f8; */
    transition: all ease-in .1s;
    margin-left: 0.5em;
  }
  .cfa-avatar1:hover{
    background-color: #eceff5;
  }
  .cfa-avatar1 img{
    border-radius: 100%;
    margin: 0.5em;
  }
  .cfa-user-progress-line{
    border-bottom: 1px solid #eceff5;
  }
  .cfa-user-progress-line:last-of-type{
    border-bottom: none;
  }
  .cfa-user-progress-line:hover{
    box-shadow: -1px 1px 29px 20px rgba(245, 246, 247, 0.87);
    -webkit-box-shadow: -1px 1px 29px 20px rgba(245, 246, 247, 0.87);
    -moz-box-shadow: -1px 1px 29px 20px rgba(245, 246, 247, 0.87);
  }
</style>