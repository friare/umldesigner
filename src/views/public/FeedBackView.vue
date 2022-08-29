<template>
  <div>
    <nav-layout active-menu="setting">
      <template #header>
        <!--<div class="second-nav"></div>-->
      </template>
      <template #body>
        <iframe id="googleForm" src="https://docs.google.com/forms/d/e/1FAIpQLSeAABybrOV3qajgd5mhwPYKmsegt2arBR0y_0nTjkaFFCeYag/viewform?embedded=true" width="100%" height="100%" style="with: 100%; min-height: 200vh;" frameborder="0" marginheight="0" marginwidth="0">Chargement…</iframe>
      </template>
    </nav-layout>
  </div>
</template>

<script>
import NavLayout from "@/components/NavLayout";

export default {
  name: "SettingsView",

  components: {
    NavLayout,
  },

  mounted() {
    // window.addEventListener('load', () => {
    //   let iFrameID = document.getElementById('googleForm');
    //   // console.log(iFrameID)
    //   // if(iFrameID) {
    //     iFrameID.height = "";
    //     // alert(iFrameID.contentWindow.document.body.scrollHeight)
    //     iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + "px";
    //   // }   
    // })
  },
}
</script>

<style>
  .HB1eCd-UMrnmb{
    overflow: hidden;
  }
</style>
