<template>
  <div>
    <div class="hero__bg">
      <!-- CONTENT -->
      <div class="app-workspace">
        <div class="left-menu">
          <!-- LOGO -->
          <div class="umld-logo">
            <a href="/">
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
          <div class="tool-section">
            <ul id="nav-tools">
              <li @click="goToPage('homeView')" :class="(activeMenu == 'home') ? 'active' : ''">
                <div>
                  <i class="fa fa-home"></i> Acceuil
                </div>
              </li>
              <li id="collapsible-container">
                <div @click="toogleProjectList" id="collapsible">
                  <i class="fa fa-folder"> </i>
                  <span>&nbsp;Projets</span>
                  <i class="float-end fa fa-caret-down"> </i>
                </div>
                <ul :style="(showProjectList) ? 'display: block' : 'display: none'" class="toogle-content project-dropdown-menu mb-0"><!-- dropdown-menu -->
                  <li @click="loadProject('defaut')" :class="(currentProject == 'defaut') ? 'selected' : ''">
                    <i class="fa fa-arrow-right"></i>
                    Défaut
                  </li>
                  <li @click="loadProject('opc-modeling')" :class="(currentProject == 'opc-modeling') ? 'selected' : ''">
                    <i class="fa fa-arrow-right"></i>
                    OPC modeling
                  </li>
                </ul>
              </li>
              <li @click="goToPage('projetsView')" :class="(activeMenu == '_project') ? 'active' : ''">
                <i class="fa fa-bell"></i> &nbsp;Alertes
              </li>
              <li @click="goToPage('projetsView')" :class="(activeMenu == '_project') ? 'active' : ''">
                <i class="fa fa-user"></i> &nbsp;Profil
              </li>
              <li @click="goToPage('projetsView')" :class="(activeMenu == '_project') ? 'active' : ''">
                <i class="fa fa-cogs"></i> Paramètres
              </li>
            </ul>
          </div>

          <!-- ITEM 2 -->
          <div class="menu-section">
              <router-link :to="{name: 'Login'}" class="nav__menu__btn btn-danger btn-red">Déconnexion</router-link>
          </div>

          <!-- ITEM 3 -->
          <div class="title2"><b>A propos</b></div>
          <ul id="tool2-section" class="tool2-section mt-2">
            <a href="/blog" @click.prevent="goToPage('blog')" :class="(activeMenu == 'blog') ? 'activeLink' : ''">
              <li><i class="fa fa-blog"></i> Blog</li>
            </a>
            <a href="/tutoriels" @click.prevent="goToPage('tutoriels')" :class="(activeMenu == 'tutorial') ? 'activeLink' : ''">
              <li><i class="fa fa-video"></i> Tutoriels</li>
            </a>
            <a href="/support" @click.prevent="" :class="(activeMenu == 'support') ? 'activeLink' : ''">
              <li><i style="font-size: 1.5em" class="fa2 fa-github"></i> Contribuer
                <sup class="small-note dev-small-note">DEVELOPPEUR</sup>
              </li>
            </a>
            <a href="http://localhost:8000/docs" target="_blank">
              <li><i class="fa fa-book"></i> API</li>
            </a>
          </ul>

          <!-- ITEM 4 -->
          <div class="dev-feedback">
            <ul class="feedback">
              <a href="/leave-feedback" @click.prevent="" class="text-white">
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
              <div class="input-group">
                <input type="text" placeholder="Rechercher ..." id="search-diagram" autocomplete="off" class="form-control shadow-none ng-untouched ng-pristine ng-valid">
                <div class="input-group-append">
                  <span id="basic-addon1 btn-search1" class="input-group-text">
                    <i class="fa fa-search"></i>
                  </span>
                </div>
              </div>

              <div class="nav__menu">
                <router-link :to="{name: 'Login'}" class="nav__menu__btn">Créer un Diagramme</router-link>
              </div>
            </div>
          </header>
          <!--section 2-->
          <slot name="header"></slot>
          <!--section 3-->
          <div class="contentApp">
            <slot name="body"></slot>
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
</template>

<script>
// @ is an alias to /src

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
    }
  },
  data () {
    return {
      showModal: false,
      currentProject: this.projectCode,
      showProjectList: this.openProjectList
    }
  },
  components: {
  },
  methods: {
    toogleProjectList () {
      let collContainer = document.getElementById("collapsible-container");
      if (!this.highlightMenu)
        collContainer.classList.toggle("active");
      this.showProjectList = !this.showProjectList
    },
    loadProject (projectName) {
      this.currentProject = projectName
      this.$router.push({name: 'projetsView', params: {code: projectName}})
    },
    goToPage (link) {
      this.$router.push({name: link})
    }
  },
  mounted() {
    if(this.openProjectList) {
      let collContainer = document.getElementById("collapsible-container");
      collContainer.classList.toggle("active");
    }
  }
}
</script>

<style scoped>
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
  max-height: 100px;
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
  color: #fff;
  position: relative;
  left: -.5em;
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
