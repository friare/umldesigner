<template>
  <div>
    <nav-layout @pushProfileData="loadProfile" :alertMsg="alertMsg" :alertType="alertType" @alertShowed="alertMsg=''" active-menu="profile" >
      <template #header>
        <div class="second-nav">
        </div>
      </template>
      <template #body>
        <div v-if="userProfile!=null" class="text-center">
          <div>
            <i style="font-size: 4em;" class="fa fa-user"></i>
          </div>
          <br>
          <div class="form-group col-12 md:col-6 ">
            <label class="control-label" for="inputPassnew">{{ userProfile.name }}</label><br>
            <label class="control-label" for="inputPassnew">{{ userProfile.email }}</label><br><br>
            <label class="control-label" for="inputPassnew"><button @click="openPopUp=true" class="btn btn-darkula">Changer mon mot de passe</button></label>
          </div>
          <modal v-if="openPopUp" @close="openPopUp=false" @sendInvite="changePassword">
            <template #header>
              <div>Changer mon mot de passe</div>
            </template>
            <template #body>
              <form>
                <div class="col-12 pl-0">
                  <div class="form-group ">
                    <label class="control-label text-left" for="inputPassnew">Ancien mot de passe</label>
                    <div class="input-group1">
                      <input autocomplete="new-password" v-model="old_pass" id="inviteMail" class="form-control w-100" name="email" type="password" required>
                    </div>
                  </div>
                  <div class="form-group ">
                    <label class="control-label text-left" for="inputPassnew">Nouveau mot de passe</label>
                    <div class="input-group1">
                      <input autocomplete="new-password" v-model="new_pass" id="inviteMail" class="form-control w-100" name="email" type="password" required>
                    </div>
                  </div>
                </div>
              </form>
            </template>
            <template #footer>
            </template>
          </modal>
        </div>
        
      </template>
    </nav-layout>
  </div>
</template>

<script>
import NavLayout from "@/components/NavLayout";
import Modal from '@/components/shared/Modal'
import { getAPI } from '@/api/axios-api.js'


export default {
  name: "ProfileView",
  components: {
    NavLayout,
    Modal
  },
  data () {
    return {
      userProfile: null,
      openPopUp: false,
      old_pass: null,
      new_pass: null,
      alertMsg: "",
      alertType: "",
    }
  },
  methods: {
    loadProfile (data) {
      this.userProfile = data
    },
    changePassword() {
      if(this.new_pass.length != 0 && this.old_pass.length != 0) {
        getAPI.patch('/auth/reset-password', 
        {
          old_password: this.old_pass,
          new_password: this.new_pass
        })
        .then(() => {
          this.alertMsg = "Super Motde passe changé  avec succès."
          this.alertType = "alert-yes"
          setTimeout(() => {
            this.openPopUp = false     
          }, 4000)
        })
        .catch((error) => {
          this.alertMsg = "Oups ! "+error.response.data.detail
          this.alertType = "alert-no"
        })
      }
      else {
        this.alertMsg = "Oups ! veuillez remplir correctement tous les champs."
        this.alertType = "alert-no"
      }
    }
  }
}
</script>

<style scoped>

</style>
