<template>
  <div>
    <nav-layout active-menu="tutorial">
      <template #header>
        <!--            <div class="second-nav">-->

        <!--            </div>-->
      </template>
      <template #body>
        <!-- Tutorial list -->
        <div class="container mt-5 mb-5">
          <div class="max-w-5xl mx-auto text-right pb-12 md:pb-20 mb-5 d-flex flex-column">
            <h2 class="rubrique-head text-4xl leading-10 text-gray-900 tracking-tighter font-extrabold mb-2">Tutoriels vidéo</h2>
            <p class="text-base tracking-tight text-slate-500 antialiased">Suivez ici une démo des divers cas d'application possibles</p>
          </div>
          <div class="tutorial-list">
            <!-- col -->
            <div class="col-tuto">
              <div class="tuto-card">
                <div class="tuto-card-top">
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <img src="../../assets/video/bkgrd-2.jpg">
                  </a>
                </div>
                <div class="diagram-info">
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <span class="diagram-name">Guide d'utilisation de UMLDESIGNER</span>
                  </a>
                  <div class="diagram-info-bottom">
                    <span class="diagram-date">Vous ne savez pas par où commencer ? Ne vous inquiétez pas, voici notre guide de démarrage rapide. Une fois que vous aurez lu ceci, vous serez heureux de créer des diagrammes comme un pro 💪</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- col -->
            <div class="col-tuto">
              <div class="tuto-card">
                <div class="tuto-card-top">
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <img src="../../assets/video/bkgrd-2.jpg">
                  </a>
                </div>
                <div class="diagram-info">
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <span class="diagram-name">Tutoriel:<br>Diagramme de classe</span>
                  </a>
                  <div class="diagram-info-bottom">
                    <span class="diagram-date">Vous ne savez pas par où commencer ? Ne vous inquiétez pas, voici notre guide de démarrage rapide. Une fois que vous aurez lu ceci, vous serez heureux de créer des diagrammes comme un pro 💪</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- col -->
            <div class="col-tuto">
              <div class="tuto-card">
                <div class="tuto-card-top">
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <img src="../../assets/video/bkgrd-2.jpg">
                  </a>
                </div>
                <div class="diagram-info">
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <span class="diagram-name">Tutoriel:<br>Diagramme de use-case</span>
                  </a>
                  <div class="diagram-info-bottom">
                    <span class="diagram-date">Vous ne savez pas par où commencer ? Ne vous inquiétez pas, voici notre guide de démarrage rapide. Une fois que vous aurez lu ceci, vous serez heureux de créer des diagrammes comme un pro 💪</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- col -->
            <div class="col-tuto">
              <div class="tuto-card">
                <div class="tuto-card-top">
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <img src="../../assets/video/bkgrd-2.jpg">
                  </a>
                </div>
                <div class="diagram-info">
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <span class="diagram-name">Tutoriel:<br>Diagramme de use-case</span>
                  </a>
                  <div class="diagram-info-bottom">
                    <span class="diagram-date">Vous ne savez pas par où commencer ? Ne vous inquiétez pas, voici notre guide de démarrage rapide. Une fois que vous aurez lu ceci, vous serez heureux de créer des diagrammes comme un pro 💪</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </nav-layout>
  </div>
</template>

<script>
import NavLayout from "@/components/NavLayout";

export default {
  name: "DefaultView",
  components: {
    NavLayout,
  }
}
</script>

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
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
}
.shadow-md, .shadow-sm {
  box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
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
