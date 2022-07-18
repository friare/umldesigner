<template>
  <div>
    <nav-layout active-menu="home">
      <template #header>
        <!--            <div class="second-nav"></div>-->
      </template>
      <template #body>
        <!-- Banner -->
        <div class="bg-white darkula p-3">
          <div class="container">
            <div class="max-w-5xl mx-auto text-center pb-12 md:pb-20 mb-5">
              <h2 class="text-start leading-10 text-gray-900 tracking-tighter font-extrabold mb-2">Un outil de développement rapide d'UML</h2>
              <p class="w-100 w-md-75 m-auto antialiased my-2 text-base tracking-tighter text-start text-slate-500 md:text-lg">
                UDESIGN est un outil de synthèse texte-diagramme qui transforme les spécifications techniques de développement de système d'information (entrées en langage naturel) en diagrammes.
              </p>
            </div>
          </div>
        </div>

        <!-- Hero Area -->
        <div class="overflow-hidden">
          <div class="container mt-5 mb-5">
            <div class="row position-relative justify-content-center">
              <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 pr-0">
                <div class="content pt-5">
                  <p class="d-none d-md-block hero-ai-intro c-blue">Avec notre assistant IA,</p>
                  <h1 class="d-none d-md-block hero-text text-center text-md-start ">Créez des diagrammes sans toucher votre souris</h1>
                  <p class="text-center text-md-start">Générez des diagrammes de classe, de séquence ou d'entité-relation en utilisant uniquement le clavier.</p>
                  <a href="#" class="btn btn-darkula focus-reset d-none d-md-inline-flex">Commencez</a>
                </div>
              </div>
              <div class="col-xl-7 col-lg-5 col-md-8">
                <div class="relative my-2 px-2 w-full overflow-visible sm:my-2 sm:px-2 md:my-2 md:px-2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-4 xl:px-4 xl:w-1/2">
                  <div class="demo-container hidden lg:inline-block absolute inset-y-0 overflow-visible pt-4 pt-md-0">
                    <video playsinline="" autoplay="" muted="" loop="">
                      <!--                          <source type="video/mp4" src="../../../public/landing/video/sample_video.mp4">-->
                    </video>
                  </div>
                </div>
                <br>
                <div class="text-center">
                  <a href="#" class="btn btn-darkula d-inline-block d-md-none btn-start">Commencez</a>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-shape-14"></div>
        </div>

        <!-- Brand-area -->
        <div class="block-darkula p-3">
          <div class="container">
            <div class="max-w-5xl mx-auto text-center pb-12 md:pb-20 mb-5">
              <h2 class="text-start leading-10 text-gray-900 tracking-tighter font-extrabold mb-2">Nouveautés</h2>
              <p class="w-100 w-md-75 m-auto antialiased my-2 text-base tracking-tighter text-start text-slate-500 md:text-lg text-white">
                Rien pour le moment. En attendant répandez de l'amour 😎️
              </p>
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

</style>
