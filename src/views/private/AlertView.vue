<template>
  <div>
    <nav-layout active-menu="alert">
      <template #header>
        <div class="second-nav"></div>
      </template>
      <template #body>
        <div class="col-12 mt-2">
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
      </template>
    </nav-layout>
  </div>
</template>

<script>
import NavLayout from "@/components/NavLayout";

export default {
  name: "AlertView",
  components: {
    NavLayout,
  }
}
</script>

<style scoped>

</style>
