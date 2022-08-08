<template>
  <div>
    <nav-layout @pushProjectData="loadData" active-menu="project" :project-code="this.$route.params.code" :open-project-list="true" :highlightMenu="true">
      <template #header>
        <div class="second-nav">
          <nav class="SecondNavItems-body width-full" aria-label="User profile">
            <a @mouseover="animNavTab" @click.prevent="switchNav('overview')" href="/projets" data-tab-item="overview" :class="(activeNav == 'overview') ? 'SecondNavItems-item js-responsive-SecondNavItems-item selected' : 'SecondNavItems-item js-responsive-SecondNavItems-item'" id="gNavTabB_1">
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-book SecondNavItems-octicon hide-sm">
                <path fill-rule="evenodd" d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path>
              </svg>
              Aperçu
            </a>
            <a @mouseover="animNavTab" @click.prevent="switchNav('diagrammes')" href="/projets?tab=repositories" data-tab-item="diagrammes" :class="(activeNav == 'diagrammes') ? 'SecondNavItems-item js-responsive-SecondNavItems-item selected' : 'SecondNavItems-item js-responsive-SecondNavItems-item'" id="gNavTabB_2">
              <i class="fa fa-project-diagram"></i>
              Diagrammes
              <span title="01" data-view-component="true" class="Counter">03</span>
            </a>
            <a @mouseover="animNavTab" @click.prevent="switchNav('codeBox')" href="/projets?tab=projects" data-tab-item="codebox" :class="(activeNav == 'codeBox') ? 'SecondNavItems-item js-responsive-SecondNavItems-item selected' : 'SecondNavItems-item js-responsive-SecondNavItems-item'" id="gNavTabB_3">
              <i class="fa fa-code"></i>
              CodeBox
              <span title="0" data-view-component="true" class="Counter" hidden="hidden">0</span>
            </a>
            <a @mouseover="animNavTab" @click.prevent="switchNav('collaborateurs')" href="/projets?tab=packages" data-tab-item="collaborateurs" :class="(activeNav == 'collaborateurs') ? 'SecondNavItems-item js-responsive-SecondNavItems-item selected' : 'SecondNavItems-item js-responsive-SecondNavItems-item'" id="gNavTabB_4">
              <i class="fa fa-users"></i>
              Collaborateurs
              <span title="0" data-view-component="true" class="Counter" hidden="hidden">0</span>
            </a>
            <a @mouseover="animNavTab" @click.prevent="switchNav('parametres')" href="/projets?tab=stars" data-tab-item="parametres" :class="(activeNav == 'parametres') ? 'SecondNavItems-item js-responsive-SecondNavItems-item selected' : 'SecondNavItems-item js-responsive-SecondNavItems-item'" id="gNavTabB_5">
              <i class="fa fa-code-fork"></i>
              Parametrès
            </a>
          </nav>
        </div>
      </template>
      <template #body>
        <div v-if="projectData==null">
          <pre-loader></pre-loader>
        </div>
        <div v-else-if="activeNav=='overview'" style="min-height: 100vh;">
          <div class="d-flex flex-wrap row">
            <div class="col-12 col-md-8 mt-2">
              <div class="card mb-2">
                <div class="card-header">
                  <h5 class="w-100 align-items-center mb-0 d-flex justify-content-between align-items-center">
                    <p class="">Règles de gestion #1</p>
                    <button class="btn no-mw"><i class="fa fa-edit"></i></button>
                  </h5>
                </div>

                <div >
                  <div class="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5 class="mb-0">
                    <img class="w-100" src="../../assets/tutorials/diag.png"/>
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4 mt-2">
              <div class="card">
                <div class="card-header">
                  <h5 class="mb-0">
                    <p class="">A propos</p>
                  </h5>
                </div>

                <div>
                  <div class="about-project card-body">
                    <h3>Description</h3>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    <br><br>
                    <h3>Contributeurs</h3>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="activeNav=='diagrammes'" style="min-height: 100vh;">
          <div class="d-flex flex-wrap flex-column-reverse flex-md-row row">
            <div class="col-12 col-md-8 mt-2">
              <div class="mt-2">
                <div class="card mb-2 d-none">
                  <div class="card-header">
                    <h5 class="w-100 align-items-center mb-0 d-flex justify-content-between align-items-center">
                      <p class="">Créateur de digramme</p>
                      <button class="btn btn-darkula no-mw"><i class="fa fa-plus"></i> CREER UN DIAGRAMME</button>
                    </h5>
                  </div>
                </div>
                <br class="d-none">
                <div class="p-relative card mb-2">
                  <span id="01" class="id-100"></span>
                  <div class="card-header">
                    <h5 class="w-100 align-items-center mb-0 d-flex justify-content-between align-items-center">
                      <p class="">Règles de gestion #1</p>
                      <div>
                        <button class="btn no-mw"><i class="fa fa-edit"></i></button>
                        <button class="btn no-mw"><i class="fa fa-play"></i></button>
                      </div>
                    </h5>
                  </div>
                  <div>
                    <div class="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div class="card diagram-card">
                  <div class="card-header">
                    <h5 class="mb-0">
                      <img class="w-100" src="../../assets/tutorials/diag.png"/>
                    </h5>
                  </div>
                </div>
                <br>
                <div class="p-relative card mb-2">
                  <span id="02" class="id-100"></span>
                  <div class="card-header">
                    <h5 class="w-100 align-items-center mb-0 d-flex justify-content-between align-items-center">
                      <p class="">Règles de gestion #2</p>
                      <div>
                        <button class="btn no-mw"><i class="fa fa-edit"></i></button>
                        <button class="btn no-mw"><i class="fa fa-play"></i></button>
                      </div>
                    </h5>
                  </div>
                  <div>
                    <div class="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div class="card diagram-card">
                  <div class="card-header">
                    <h5 class="mb-0">
                      <img class="w-100" src="../../assets/tutorials/diag.png"/>
                    </h5>
                  </div>
                </div>
                <br>
                <div class="p-relative card mb-2">
                  <span id="03" class="id-100"></span>
                  <div class="card-header">
                    <h5 class="w-100 align-items-center mb-0 d-flex justify-content-between align-items-center">
                      <p class="">Règles de gestion #2</p>
                      <div>
                        <button class="btn no-mw"><i class="fa fa-edit"></i></button>
                        <button class="btn no-mw"><i class="fa fa-play"></i></button>
                      </div>
                    </h5>
                  </div>
                  <div>
                    <div class="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div class="card diagram-card">
                  <div class="card-header">
                    <h5 class="mb-0">
                      <img class="w-100" src="../../assets/tutorials/diag.png"/>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4 mt-3">
              <div class="card sticky-helper">
                <div class="card-header">
                  <h5 class="w-100 align-items-center mb-0 d-flex justify-content-between align-items-center">
                    <p class="">Gestionnaire</p>
                    <button class="btn btn-darkula no-mw"><i class="fa fa-plus"></i> CREER</button>
                  </h5>
                </div>

                <div style="min-height: 25em">
                  <div class="about-project card-body">
                    <h3>Diagrammes</h3>
                    <ol>
                      <li><a href="#01">class diagram</a></li>
                      <li><a href="#02">sequence diagram</a></li>
                      <li><a href="#03">class diagram 2</a></li>
                    </ol>
                    <br>
                    <h3>Options</h3>
                    <ul style="list-style-type: none; padding: 0;">
                      <li><button class="btn btn-darkula-soft w-100">OUVRIR L'EDITEUR LIVE</button></li>
                      <li><button class="btn btn-darkula-soft w-100">TELECHARGER LES DIAGRAMMES</button></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="activeNav=='codeBox'" style="min-height: 100vh;">
          codeBox
        </div>
        <div v-else-if="activeNav=='collaborateurs'" style="min-height: 100vh;">
          collaborateurs
        </div>
        <div v-else-if="activeNav=='parametres'" style="min-height: 100vh;">
          parametres
        </div>
      </template>
    </nav-layout>
  </div>
</template>

<script>
import NavLayout from "@/components/NavLayout"
import PreLoader from "@/components/shared/PreLoader"

export default {
    name: 'ProjectView',
    components: {
      NavLayout,
      PreLoader
    },
    data () {
        return {
        activeNav: 'diagrammes',
        projectData: null,
      }
    },
    methods: {
      switchNav (subMenu) {
        if(this.projectData!=null) {
          this.activeNav = subMenu
        } 
      },
      animNavTab (e) {
        if(this.projectData==null) {
          e.target.style.cursor='progress'
        } 
        else{
          e.target.style.cursor='pointer'
        }
      },
      loadData(data) {
        setTimeout(() => {
          this.projectData = data
          console.log(data)
        }, 2000);
      }
    }
}
</script>

<style scoped>
.id-100 {
  position: absolute;
  top: -65px;/*-100*/
  visibility: hidden;
}
.btn:hover{
  color: initial !important;
}
ol, ul {
  padding-left: 1rem;
}
ol li, ul li {
  margin-bottom: .5rem;
}
.diagram-card{
  background-color: rgb(236, 236, 236);
  background-image: linear-gradient(#f0f1ff 1.7px,transparent 0),linear-gradient(90deg,#f0f1ff 1.7px,transparent 0),linear-gradient(#f0f1ff 1px,transparent 0),linear-gradient(90deg,#f0f1ff 1px,#f7f9ff 0);
  /*background-image: linear-gradient(#e6e6e6 1.7px,transparent 0), linear-gradient(90deg,#e6e6e6 1.7px,transparent 0), linear-gradient(#e6e6e6 1px,transparent 0), linear-gradient(90deg,#e6e6e6 1px,#ececec 0);*/
  background-size: 80px 80px,80px 80px,20px 20px,20px 20px;
}
.no-mw{
  min-width: 0;
}
.about-project h3{
  font-size: 1em;
  margin-bottom: 1em;
  font-weight: bold;
}
/* workspace sticky action */
.second-nav{
  position: sticky;
  top: 0px;
}
.sticky-helper{
  position: sticky !important;
  top: 64px !important;
}
a{
  text-decoration: none !important;
}
/* github style */
.width-full {
  width: 100% !important;
}
.overflow-md-x-hidden {
  overflow-x: hidden !important;
}
.box-shadow-none {
  box-shadow: none !important;
}
.SecondNavItems {
  display: flex;
  min-height: 48px;
  overflow-x: auto;
  overflow-y: hidden;
  /*box-shadow: inset 0 -1px 0 var(--color-border-muted);*/
  -webkit-overflow-scrolling: auto;
  justify-content: space-between;
}
.p-responsive {
  padding-right: 16px !important;
  padding-left: 16px !important;
}
.width-full {
  width: 100% !important;
}
.SecondNavItems-body {
  display: flex;
  align-items: center;
  gap: 8px;
  list-style: none;
}
.SecondNavItems-item.selected::after, .SecondNavItems-item[role="tab"][aria-selected="true"]::after, .SecondNavItems-item[aria-current]:not([aria-current="false"])::after {
  position: absolute;
  right: 50%;
  bottom: calc(50% - 25px);
  width: 100%;
  height: 2px;
  content: "";
  background: #7d8083;
  border-radius: 6px;
  transform: translate(50%, -50%);
}
.SecondNavItems-item::before {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  min-height: 48px;
  content: "";
  transform: translateX(-50%) translateY(-50%);
}
.SecondNavItems-item:hover {
  text-decoration: none;
  background: #E0E6ED51;
  transition: background .12s ease-out;
}
.SecondNavItems-item.selected, .SecondNavItems-item[role="tab"][aria-selected="true"], .SecondNavItems-item[aria-current]:not([aria-current="false"]) {
  font-weight: 600;
  color: #000;
  border-bottom-color: #7d8083;
  outline-offset: -8px;
}
.SecondNavItems-item {
  position: relative;
  display: flex;
  padding: 0 8px;
  font-size: 14px;
  line-height: 30px;
  color: #7d8083;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  border-bottom-color: currentcolor;
  border-radius: 6px;
  align-items: center;
}
a, button, [role="button"], input[type="radio"], input[type="checkbox"] {
  transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
  transition-property: all;
  transition-property: color,background-color,box-shadow,border-color;
}
.SecondNavItems-item::before {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  min-height: 48px;
  content: "";
  transform: translateX(-50%) translateY(-50%);
}
élément {
}
.SecondNavItems-item {
  position: relative;
  display: flex;
  padding: 0 8px;
  font-size: 14px;
  line-height: 30px;
  color: #7d8083;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  border-radius: 6px;
  align-items: center;
}
.SecondNavItems-octicon {
  display: inline !important;
  margin-right: 8px;
  color: #7d8083;
  fill: #7d8083;
}
.SecondNavItems .Counter {
  color: #7d8083;
  background-color: #eff1f3;
}
.Counter {
  display: inline-block;
  min-width: 20px;
  padding: 0 6px;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: #7d8083;
  text-align: center;
  background-color: #eff1f3;
  border: 1px solid #eff1f3;
  border-radius: 2em;
  margin-left: .7em;
}
.SecondNavItems-item i{
  margin-right: 8px;
}
</style>
<style>
html{
  scroll-behavior: smooth !important;
}
.workspace {
  overflow-y: scroll;
  scroll-behavior: smooth !important;
}
.contentApp {
  overflow-y: initial !important;
}
</style>
<style scoped>
a{
  text-decoration: none !important;
}
.o{
  background: linear-gradient(to right, #dfe7f2 0%, #cadefc 100%);
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-ai-intro{
  margin: 0 0 0.5em 0!important;
  /* text-transform: uppercase; */
}
.hero-text{
  text-transform: uppercase;
}
.demo-container video{
  width: 100%;
}

.c-white{
  color: white !important;
}
.c-whitesmoke{
  color: whitesmoke !important;
}
.c-blue{
  color: #1c94d9 !important;
}
.btn-start{
  background-color: #145dab;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px !important;
}
.logo-text{
  color: white;
  font-size: 2em;
}
.product-title{
  font-size: 1.2em;
}
.bg-discret{
  /* background-color: #1c94d935;  */
  background-color: #f2f2f2;
  /* background-color: #33669c32;  */
  /* padding: 5em 0; */
}
.bg-simple{
  /* padding: 5em 0; */
  background-color: #f2f2f2;
}
.connect{
  color: white !important;
  position: relative;
  bottom: 1em;
}
.separator{
  padding-bottom: 6em;
  /* border-bottom: 4px solid #E4E4E4; */
  /* border-bottom: 4px solid #145dab; */
  border-bottom: 2px solid gray;
}
.no-sep{
  padding-top: 5em;
}

.media-link{
  /* text-align: center; */
  padding-left: 1em;
}
.media-link li a i{
  font-size: 1.5em;
}
.footer-row{
  border-top: 2px solid gray;
  padding-top: 3em;
}
.active{
  /* font-weight: bold !important; */
  /* color: #145dab !important; */
}
.tutorial-list{
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(230px,1fr));
}
.col-tuto {
  padding: 5px;
}
.tuto-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #f0f2f7;
  background-clip: border-box;
  border: .5px solid rgba(0,0,0,.07);
  border-radius: .25rem;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.035) !important;
  transition: all .2s ease;
  height: 100%;
}
.tuto-card .tuto-card-top {
  display: flex;
}
.tuto-card a img {
  max-width: 94%;
  /*height: 8rem;*/
  padding: .3rem 0;
  background-color: #fff;
  opacity: 1;
  background-image: linear-gradient(#f7f8ff .4px,transparent 0),linear-gradient(90deg,#f7f8ff .4px,#fff 0);
  background-size: 4px 4px;
  margin: 6px;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.045) !important;
}
.diagram-info {
  padding: .8rem 1rem 1.2rem;
  background: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 100%;
}
.tuto-card a {
  margin: auto;
}
.diagram-name {
  font-weight: 500;
  line-height: 1.2rem;
  font-size: 1rem;
  margin: 5px 0 -3px;
  display: block;
}
.diagram-info-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: .5rem;
}
.diagram-date {
  display: block;
  font-size: .85rem;
  line-height: 1.4em;
  font-weight: 400;
  color: #a8aab0;
  margin-top: .4em;
  color: #232324;
}
.rubrique-head{
  margin-bottom: 0 !important;
}


.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0/0.05);
}
.leading-normal {
  line-height: 1.5;
}
.leading-9 {
  line-height: 2.25rem;
}
.w-full {
  width: 100%;
}
.flex {
  /* display: flex; */
}
.rounded-full{
  border-radius: 100%;
  width: 3em;
}
.author-name{
  padding-left: 0.5em !important;
}
.underline:hover{
  text-decoration: underline;
}
.blog-article-name{
  font-weight: bold;
  font-size: 1.2rem;
}
.blog-preview{
  background:#fcfcfd85;
  margin-bottom: 2em;
}
/* COLOR FILTER */
.saturate { filter: saturate(3); }
.grayscale { filter: grayscale(100%); }
.contrast { filter: contrast(160%); }
.brightness { filter: brightness(0.25); }
.blur { filter: blur(3px); }
.invert { filter: invert(100%); }
.sepia { filter: sepia(100%); }
.huerotate { filter: hue-rotate(180deg); }
.rss.opacity { filter: opacity(50%); }
</style>
