<template>
  <div>
    <nav-layout active-menu="home">
      <template #header>
        <!--            <div class="second-nav"></div>-->
      </template>
      <template #body>
        <!-- Brand-area -->
        <div class="col-12 mt-2" style="min-height: 55vh;align-items: center;display: flex;justify-content: center;">
          <div class="pt-5 d-flex justify-content-between align-items-center flex-column">
            <img width="250" src="@/assets/image/brand/empty0.svg" alt="emty diagram image" class="mt-2"/>
            <div>
              <br><br>
            </div>
          </div>
        </div>
        
        <!-- space -->
        <br><br>
        <br><br>
        
        <!-- alert -->
        <div class="block-darkula p-3" style="background-color: #56cbc5;">
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
