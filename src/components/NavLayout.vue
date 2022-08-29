<template>
  <div>
    <div class="hero__bg">
      <!-- CONTENT -->
      <div class="app-workspace">
        <div class="left-menu">
          <!-- LOGO -->
          <div class="umld-logo">
            <a href="">
              <div class="logo">
                <svg width="25" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 445.555 445.555" style="enable-background:new 0 0 445.555 445.555;" xml:space="preserve">
                  <defs>
                    <linearGradient id="rich_images_svg__a" x1="0.079" y1="0.074" x2="0.929" y2="0.919" gradientUnits="objectBoundingBox">
                      <stop offset="0" stop-color="#f8a8d5"></stop>
                      <stop offset="1" stop-color="#ff0080"></stop>
                    </linearGradient>
                    <linearGradient id="illos2_svg__a" x1="0.5" y1="0.5" x2="0.061" gradientUnits="objectBoundingBox">
                      <stop offset="0" stop-color="#6c63ff"></stop>
                      <stop offset="1" stop-color="#3931d3"></stop>
                    </linearGradient>
                    <linearGradient id="animated_alerts_svg__a" x1="0.5" y1="0.5" x2="0.061" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#50C9C3"></stop><stop offset="1" stop-color="#96DEDA"></stop></linearGradient>
                  </defs>
                  <g>
                    <polygon points="237.777,243.019 237.777,445.555 409.166,337.631 409.167,135.095 " fill="url(#rich_images_svg__a)"/>
                    <polygon points="222.777,0 50.463,108.506 222.777,217.012 395.092,108.506" fill="url(#illos2_svg__a)"/>
                    <polygon points="36.388,337.631 207.777,445.555 207.777,243.019 36.388,135.095" fill="url(#animated_alerts_svg__a)"/>
                  </g>
                </svg>
                <span class="logo__text logo__accent flex text-white ml2">
                  UML
                  <span class="text_black text-white">Designer</span>
                </span>
              </div>
            </a>
          </div>
          <!-- ITEM1 -->
          <div class="title2">Tableau de board</div>
          <div v-if="waitingAPIResponse[0] && waitingAPIResponse[1]" class="nav--space">
            <img  width="50" src="@/assets/image/preloader/load2.gif" alt="loader"/>
          </div>
          <div v-else class="tool-section">
            <ul id="nav-tools">
              <router-link :to="{name: 'Default'}">
                <li :class="(activeMenu == 'home') ? 'active' : ''">
                  <div>
                    <i class="fa fa-home"></i> Acceuil
                  </div>
                </li>
              </router-link>

              <li id="collapsible-container">
                <div @click="toogleProjectList" id="collapsible">
                  <i class="fa fa-folder"> </i>
                  <span>&nbsp;Projets</span>
                  <i class="float-end fa fa-caret-down"> </i>
                </div>
                <!-- dropdown-menu -->
                <ul :style="(showProjectList) ? 'display: block' : 'display: none'" class="toogle-content project-dropdown-menu mb-0">
                  <li v-for="project,i in projectMe" v-bind:key="i" @click="loadProject(toSlug(project.title), project.id)" :class="(currentProject == toSlug(project.title)) ? 'selected' : ''">
                    <i class="fa fa-arrow-right"></i>
                    {{ (project.title.length > 15) ? project.title.substring(0, 13)+' •••' : project.title }}
                  </li>
                  <li v-for="project,i in projectInvite" v-bind:key="i" @click="loadProject(toSlug(project.title), project.id)" :class="(currentProject == toSlug(project.title)) ? 'selected' : ''">
                    <i class="fa fa-arrow-right"></i>
                    {{ (project.title.length > 15) ? project.title.substring(0, 13)+' •••' : project.title }}
                  </li>
                </ul>
              </li>
              <router-link :to="{name: 'Alert'}">
                <li :class="(activeMenu == 'alert') ? 'active' : ''">
                  <span  class="notif-span"><i class="fa fa-bell"></i><sup class="small-note notif-count">{{ userNotifCount }}</sup></span>   &nbsp;Alertes 
                </li>
              </router-link>
              <router-link :to="'/profil/'+slugUserName">
                <li :class="(activeMenu == 'profile') ? 'active' : ''">
                  <i class="fa fa-user"></i> &nbsp;Profil
                </li>
              </router-link>
              <router-link v-show="false" :to="{name: 'Setting'}">
                <li :class="(activeMenu == 'setting') ? 'active' : ''">
                  <i class="fa fa-cogs"></i> Paramètres
                </li>
              </router-link>
            </ul>
          </div>

          <!-- ITEM 2 -->
          <div class="menu-section">
              <button @click="logout" class="nav__menu__btn btn-danger btn-red">Déconnexion</button>
          </div>

          <!-- ITEM 3 -->
          <div class="title2"><b>A propos</b></div>
          <ul id="tool2-section" class="tool2-section mt-2">
            <a href="/tutoriels" :class="(activeMenu == 'tutorial') ? 'activeLink' : ''">
              <li><i class="fa fa-video"></i> Tutoriels</li>
            </a>
            <a href="https://github.com/Genereux-akotenou" target="_blank">
              <li><i style="font-size: 1.5em" class="fa2 fa-github"></i> Contribuer
                <sup class="small-note dev-small-note">DEVELOPPEUR</sup>
              </li>
            </a>
            <a href="uml-extractor-api.azurewebsites.net" target="_blank">
              <li><i class="fa fa-book"></i> API</li>
            </a>
          </ul>

          <!-- ITEM 4 -->
          <div class="dev-feedback">
            <ul class="feedback">
              <a href="/leave-feedback" class="text-white">
                <li>
                  <div><i class="fa fa-inbox"></i> Laissez votre avis </div>
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div class="workspace">
          <!--section 1-->
          <header class="d-flex hero__bg2">
            <div class="nav__inner2">
              <div class="input-group" style="width: auto;">
                <input type="text" placeholder="Rechercher ..." id="search-diagram" autocomplete="off" class="form-control shadow-none ng-untouched ng-pristine ng-valid">
                <div class="input-group-append">
                  <span id="basic-addon1 btn-search1" class="input-group-text">
                    <i class="fa fa-search"></i>
                  </span>
                </div>
              </div>

              <div class="nav__menu flex">
                <!-- 01 -->
                <div class="dropdown">
                  <button @click="showCreateProjectPopUp=true" class="nav__menu__btn dropbtn">
                    <i class="fa fa-plus"></i> &nbsp; projet&nbsp;
                  </button>
                </div>

                <!-- 02 -->
                <div class="dropdown">
                  <button class="nav__menu__btn dropbtn">
                    Créer un Diagramme&nbsp;
                    <i class="float-end fa fa-caret-down ml2"> </i>
                  </button>
                  <div class="dropdown-content" >
                    <div v-if="this.$route.name == 'projetView'">
                      <a @click.prevent="showCreateClassDiagForm=true" href="/editeur/new-class-diag" >
                        <i class="fa fa-project-diagram ml2"> </i> Classe
                      </a>
                      <a @click.prevent="" disabled href="/editeur/new-use-case-diag" class="disabled">
                        <i class="fa fa-project-diagram ml2"> </i> Cas d'utilisation
                      </a>
                      <a @click.prevent="" disabled href="/editeur/new-sequence-diag" class="disabled">
                        <i class="fa fa-project-diagram ml2"> </i> Séquence
                      </a>
                      <a @click.prevent="" disabled href="/editeur/new-object-diag" class="disabled">
                        <i class="fa fa-project-diagram ml2"> </i> Objet
                      </a>
                    </div>
                    <div v-else class="text-center p-3">
                      <a @click="toogleProjectList" style="background-color: #eae9f4; color: #1787fc;">Selectionner un projet</a> puis rééssayer.                
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <!--section 2-->
          <slot name="header"></slot>
          <!--section 3-->
          <div class="contentApp">
            <div class="page-content">
              <slot name="body"></slot>
            </div>

            <footer class="footer footer2">
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
      </div>
    </div>
  </div>

  <transition name="slide-fade" appear mode="out-in">
    <alert v-show="alertMe" :status="gAlertType" :message="gAlertMessage"></alert>
  </transition>

  <!-- create project popup -->
  <modal :waitingResult="s1" v-if="showCreateProjectPopUp" @close="showCreateProjectPopUp=false" @sendInvite="fetchCreateProject">
    <template #header>
      <div>Nouveau projet !</div>
    </template>
    <template #body>
      <form>
        <div class="col-12 pl-0">
          <div class="form-group ">
            <label class="control-label" for="inputPassnew">Titre</label>
            <div class="input-group1">
              <input v-model="new_project_title" id="inviteMail" class="form-control w-100" name="email" type="email" required>
            </div>
          </div>
          <div class="form-group ">
            <label class="control-label" for="inputPassnew">Description</label>
            <div class="input-group1">
              <textarea v-model="new_project_description" class="form-control questionTextArea textAreaConf" name="inputPassnew"></textarea>
            </div>
          </div>
        </div>
      </form>
    </template>
    <template #footer>
    </template>
  </modal>

  <!-- create project popup -->
  <modal :waitingResult="s2" v-if="showCreateClassDiagForm" @close="showCreateClassDiagForm=false" @sendInvite="confirmCreateClassDiag">
    <template #header>
      <div>Créer un diagramme de class !</div>
    </template>
    <template #body>
      <form>
        <div class="col-12 pl-0">
          <div class="form-group ">
            <label class="control-label" for="inputPassnew">Label</label>
            <div class="input-group1">
              <input v-model="new_diag_label" id="inviteMail" class="form-control w-100" name="email" type="email" required>
            </div>
          </div>
        </div>
      </form>
    </template>
    <template #footer>
    </template>
  </modal>

</template>
<script>
import Alert from '@/components/shared/Alert.vue'
import { getAPI } from '@/api/axios-api.js'
import Modal from '@/components/shared/Modal'
import CryptoJS from 'crypto-js'

export default {
  name: 'NavLayout',
  props:{
    activeMenu: {
      type: String,
      default: 'home',
      required: true
    },
    projectCode: String,
    openProjectList: {
      type: Boolean,
      default: false
    },
    highlightMenu: {
      type: Boolean,
      default: false
    },
    alertMsg: {
      type: String,
    },
    alertType: {
      type: String,
    }
  },
  data () {
    return {
      showModal: false,
      currentProject: this.projectCode,
      showProjectList: this.openProjectList,
      alertMe: false,
      gAlertMessage: '',
      gAlertType: '',
      waitingAPIResponse: [false, false],
      appData: null,
      inviteProject: null,
      slugUserName: "",
      projectMe: [],
      projectInvite: [],
      userNotifCount: 0,
      showCreateProjectPopUp: false,
      new_project_title: "",
      new_project_description: "",
      showCreateClassDiagForm: false,
      new_diag_label: "new class diagram",
      s1: false,
      s2: false
    }
  },
  components: {
    Alert,
    Modal
  },
  methods: {
    displayError (error, type='alert-ok', time=4000) {
      this.gAlertMessage = error
      this.gAlertType = type
      this.alertMe = true
      setTimeout(() => {
        this.alertMe = false
      }, time);
    },
    toogleProjectList () {
      let collContainer = document.getElementById("collapsible-container");
      if (!this.highlightMenu)
        collContainer.classList.toggle("active");
      this.showProjectList = !this.showProjectList;
    },
    loadProject (projectName, id) {
      this.currentProject = projectName
      this.$router.push({name: 'projetView', params: {code: projectName, id: this.encrypt(id)}})
    },
    goToPage (link) {
      this.$router.push({name: link})
    },
    toSlug (value) {
      return value.toLowerCase().replaceAll(' ', '-');
    },
    collectProfileData () {
      return {'id': this.appData.id, 'name': this.appData.name, 'email': this.appData.email}
    },
    dataPusher() {
      if(!this.waitingAPIResponse[0] && !this.waitingAPIResponse[1]) {
        this.$emit('pushProjectData', this.projectMe.concat(this.projectInvite))
        this.$emit('pushAlertData', this.appData.alerts)
        this.$emit('pushProfileData', this.collectProfileData())
      }
    },
    logout () {
      getAPI.delete('/auth/logout')
      .then(() => {
        sessionStorage.removeItem('token')
        let a = document.createElement('a')
        a.setAttribute('href', "/connexion")
        a.click()
        a.remove()
      })
    },
    fetchUserData () {
      this.waitingAPIResponse[0] = true
      getAPI.get('/auth/user/me')
      .then(response => {
        this.appData = response.data
      })
    },
    fetchInvitedProject () {
      this.waitingAPIResponse[1] = true
      getAPI.get('/projects/invite')
      .then(response => {
        this.inviteProject = response.data
      })
    },
    encrypt (text) {
      return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
    },
    decrypt (data) {
      return CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
    },
    fetchCreateProject() {
      this.s1 = true
      if(this.new_project_description.length != 0 && this.new_project_title.length != 0) {
        getAPI.post('/project', {
          title: this.new_project_title,
          description: this.new_project_description
        })
        .then(response => {
          if(response.status == 201) {
            this.displayError('Great ! projet créer avec succès', 'alert-yes', 5000)
            setTimeout(() => {
              this.showCreateProjectPopUp = false
            }, 4000)
            setTimeout(() => {
              this.$router.go()   
              this.s1 = false
            }, 1000)
          }
          else{
            this.displayError('Oups ! quelque chose s\'est mal passé.', 'alert-no')
            this.waitingAPIResponse = false
            this.s1 = false
          }
        })
        .catch((error) => {
          if (error.response) {
            this.displayError(error.response.data.detail, 'alert-no', 4000)
          } else if (error.request) {
            this.displayError('The request was made but no response was received. Please check your network.', 'alert-no', 8000)
          } else {
            this.displayError('Oups ! something went wrong.', 'alert-no', 5000)
          }
        })
      }
      else{
        this.displayError("Oups ! veuillez remplir tous leschamps correctement.", "alert-no")
      }
    },
    confirmCreateClassDiag () {
      if(this.new_diag_label.length  != 0) {
        this.s2 = true
        getAPI.post('/diagram/'+this.decrypt(this.$route.params.id)+'/CLASS', 
        {
          label: this.new_diag_label,
          plain_text: "Un étudiant possède un matricule, un nom et un prénom. Un étudiant est une personne. Un enseignant est un personne.  Un étudiant peut suivre plusieurs cour. Un cour est enseigné par au moins un enseignant. Un cour contient au moins un chapitre. Chaque chapitre est identifié par un libellé, un nom de code et une description.",
          xml_image: "<UMLClassDiagram name='umldesigner.app'><UMLClass id='undefined:UMLClass_4' x='345' y='440' width='170' height='100' backgroundColor='#ffffbb' lineColor='#294253' lineWidth='1' tagValues='' abstract='false'><superitem id='stereotypes' visibleSubComponents='true'/><item id='name' value='chapitre'/><superitem id='attributes' visibleSubComponents='true'><item value='libellé'/><item value='nom'/><item value='description'/></superitem><superitem id='operations' visibleSubComponents='true'/></UMLClass><UMLClass id='undefined:UMLClass_3' x='90' y='272' width='150' height='110' backgroundColor='#ffffbb' lineColor='#294253' lineWidth='1' tagValues='' abstract='false'><superitem id='stereotypes' visibleSubComponents='true'/><item id='name' value='étudiant'/><superitem id='attributes' visibleSubComponents='true'><item value='matricule'/><item value='nom'/><item value='prénom'/></superitem><superitem id='operations' visibleSubComponents='true'><item value='suivre()'/></superitem></UMLClass><UMLClass id='undefined:UMLClass_2' x='635' y='185' width='160' height='70' backgroundColor='#ffffbb' lineColor='#294253' lineWidth='1' tagValues='' abstract='false'><superitem id='stereotypes' visibleSubComponents='true'/><item id='name' value='enseignant'/><superitem id='attributes' visibleSubComponents='true'/><superitem id='operations' visibleSubComponents='true'/></UMLClass><UMLClass id='undefined:UMLClass_1' x='320' y='74' width='140' height='70' backgroundColor='#ffffbb' lineColor='#294253' lineWidth='1' tagValues='' abstract='false'><superitem id='stereotypes' visibleSubComponents='true'/><item id='name' value='personne'/><superitem id='attributes' visibleSubComponents='true'/><superitem id='operations' visibleSubComponents='true'/></UMLClass><UMLClass id='undefined:UMLClass_0' x='380' y='289' width='100' height='70' backgroundColor='#ffffbb' lineColor='#294253' lineWidth='1' tagValues='' abstract='false'><superitem id='stereotypes' visibleSubComponents='true'/><item id='name' value='cour'/><superitem id='attributes' visibleSubComponents='true'/><superitem id='operations' visibleSubComponents='true'/></UMLClass><UMLGeneralization id='undefined:UMLGeneralization_0' side_A='undefined:UMLClass_3' side_B='undefined:UMLClass_1'><point x='164.5' y='272'/><point x='163' y='107'/><point x='320' y='108.38325991189427'/><superitem id='stereotype' visibleSubComponents='true'/><item id='name' value=''/></UMLGeneralization><UMLGeneralization id='undefined:UMLGeneralization_1' side_A='undefined:UMLClass_2' side_B='undefined:UMLClass_1'><point x='635' y='192.6769230769231'/><point x='460' y='132.90769230769232'/><superitem id='stereotype' visibleSubComponents='true'/><item id='name' value=''/></UMLGeneralization><UMLAssociation id='undefined:UMLAssociation_2' side_A='undefined:UMLClass_3' side_B='undefined:UMLClass_0' direction='b'><point x='240' y='326.1509433962264'/><point x='380' y='324.5660377358491'/><superitem id='stereotype' visibleSubComponents='true'/><item id='name' value='suivre'/><item id='roleA' value=''/><item id='roleB' value=''/><item id='multiplicityA' value='1,1'/><item id='multiplicityB' value='0,*'/></UMLAssociation><UMLAssociation id='undefined:UMLAssociation_3' side_A='undefined:UMLClass_0' side_B='undefined:UMLClass_2' direction='a'><point x='480' y='305.7543859649123'/><point x='635' y='249.19298245614036'/><superitem id='stereotype' visibleSubComponents='true'/><item id='name' value='enseigner'/><item id='roleA' value=''/><item id='roleB' value=''/><item id='multiplicityA' value='1,1'/><item id='multiplicityB' value='1,*'/></UMLAssociation><UMLAggregation id='undefined:UMLAggregation_4' side_A='undefined:UMLClass_0' side_B='undefined:UMLClass_4'><point x='430' y='359'/><point x='430' y='440'/><superitem id='stereotype' visibleSubComponents='true'/><item id='name' value='contenir'/><item id='roleA' value=''/><item id='roleB' value=''/><item id='multiplicityA' value='1,1'/><item id='multiplicityB' value='1,*'/></UMLAggregation></UMLClassDiagram>"
        })
        .then(response => {
          if(response.status == 201) {
            this.displayError('Great ! Diagramme créer avec  succès.', 'alert-yes', 4000)
            setTimeout(() => {
              this.showCreateProjectPopUp = false
            }, 4000)
            setTimeout(() => {
              let a = document.createElement('a')
              a.setAttribute('href', "/editeur/"+this.toSlug(response.data.label)+"/"+response.data.public_acces_token)
              a.click()
              a.remove()
              this.s2 = false
            }, 1000)
          }
          else{
            this.displayError('Oups ! quelque chose s\'est mal passé.', 'alert-no')
            this.waitingAPIResponse = false
            this.s2 = false
          }
        })
        .catch((error) => {
          if (error.response) {
            this.displayError(error.response.data.detail, 'alert-no', 4000)
          } else if (error.request) {
            this.displayError('The request was made but no response was received. Please check your network.', 'alert-no', 8000)
          } else {
            this.displayError('Oups ! something went wrong.', 'alert-no', 5000)
          }
        })
      }
      else{
        this.displayError("Oups ! veuillez remplir tous leschamps correctement.", "alert-no")
      }
    }
  },
  async mounted() {
    if(this.openProjectList) {
      let collContainer = document.getElementById("collapsible-container");
      collContainer.classList.toggle("active");
    }
    this.fetchUserData() 
    this.fetchInvitedProject() 
  },
  watch: {
    appData: function() {
      this.waitingAPIResponse[0] = false
      this.slugUserName = this.toSlug(this.appData.name)
      this.projectMe = this.appData.projects
      for(let i = 0; i < this.appData.alerts.length; i++) {
        if(this.appData.alerts[i].already_read == false) {
          this.userNotifCount += 1
        }
      }
      // console.log(this.appData)
      // console.log(this.projectMe)
      // console.log(this.projectMe.length)
      this.dataPusher()
    },
    inviteProject: function() {
      this.waitingAPIResponse[1] = false
      this.projectInvite = this.inviteProject
      this.dataPusher()
      // console.log(this.projectInvite.length)
    },
    alertMsg: function() {
      if(this.alertMsg != "") {
        this.displayError(this.alertMsg, this.alertType)
        this.$emit('alertShowed')
      }
    }
  },
  filters: {
    toSlug: function (value) {
      value.toLowerCase().replaceAll(' ', '-');
    }
  },
}
</script>

<style scoped>
  .disabled{
    cursor: not-allowed;
    background-color: #f4f4f4;
  }
  .disabled:hover{
    color: #e82646;
    background-color: #f4f4f4;
  }
  .textAreaConf{
    height: 15em;
    resize: none;
  }
  .notif-span{
    position: relative;
  }
  .notif-count{
    position: absolute;
    left: 0.5em;
    padding: .6em .4em;
  }
  .nav--space{
    height: 30em;
    text-align: center;
    background-color: rgb(49, 63, 70);
    align-items: center;
    justify-content: center;
    display: flex;
    margin: .2em .5em;
  }
  .umld-logo{
    min-height: 61px;
    max-height: 61px;
    display: flex;
    align-items: center;
    margin-bottom: 1.3rem;
    border-bottom: .5px solid #313f46;
    justify-content: center;
  }
  .nav__inner2 {
    height: 56px;
    width: 97%;
    max-width: var(--container-max);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .footer2{
    width: 100% !important;
    padding-bottom: 0 !important;
  }
  .toogle-content{
    /*padding: 0 18px;*/
    /*background-color: white;*/
    /*min-height: 100px;*/
    overflow: hidden;
    transition: max-height 0.2s ease-out;
  }
  ul, li{
    user-select: none !important;
  }
  /* custumize */
  .project-dropdown-menu .selected {
    /*background-color: #445158;*/
    /*border-radius: 5px;*/
  }
  .project-dropdown-menu li i {
    /*display: none;*/
    opacity: 0;
    font-size: .9em;
  }
  .project-dropdown-menu li {
    font-weight: initial;
    color: #c4c2c2;
    position: relative;
    left: -.5em;
    padding-left: .8em;
    padding-right: 0;
    overflow-x: hidden;
  }
  .project-dropdown-menu{
    margin-top: .4em;
  }
  .project-dropdown-menu .selected i {
    /*display: inline-block;*/
    opacity: 1;
  }
  .project-dropdown-menu .selected {
    font-weight: bold;
    color: #57a9ff;
  }
  /* code pen dropdown */
  .dropdown .dropdown-menu {
    position: absolute;
    background-color: #fff;
    width: 100%;
    left: 0;
    margin-top: 1px;
    box-shadow: 0 1px 2px rgb(204, 204, 204);
    border-radius: 0 1px 2px 2px;
    overflow: hidden;
    display: none;
    max-height: 144px;
    overflow-y: auto;
    z-index: 9
  }
  .dropdown .dropdown-menu li {
    padding: 10px;
    transition: all .2s ease-in-out;
    cursor: pointer
  }
  .dropdown .dropdown-menu {
    padding: 0;
    list-style: none
  }
  .dropdown .dropdown-menu li:hover {
    background-color: #f2f2f2
  }
  .dropdown .dropdown-menu li:active {
    background-color: #e2e2e2
  }
  .contentApp{
    width: 100%;
    height: 100%;
    padding: 1em 1.5em;
    overflow-y: scroll;
  }
  .page-content{
    min-height: 100vh;
  }
  a:hover{
    color: #0d6efd;
    text-decoration: none;
  }
  .activeLink{
    color: #0d6efd !important;
  }
  .title2 {
    font-size: .8rem;
    padding-left: 2rem;
    text-transform: uppercase;
    font-weight: 600;
    color: #bec3d9;
    letter-spacing: .5px;
  }
  .btn-red{
    margin-left: 0;
    color: #fff !important;
  }
  .hero__bg2 {
    background: radial-gradient(circle at 12% 55%,rgba(33,150,243,.15),hsla(0,0%,100%,0) 25%),radial-gradient(circle at 85% 33%,rgba(108,99,255,.175),hsla(0,0%,100%,0) 25%);
  }
</style>
