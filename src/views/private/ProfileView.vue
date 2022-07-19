<template>
  <div>
    <nav-layout active-menu="profile" >
      <template #header>
        <div class="second-nav"></div>
      </template>
      <template #body>

      </template>
    </nav-layout>
  </div>
</template>

<script>
import NavLayout from "@/components/NavLayout";

export default {
  name: "ProfileView",
  components: {
    NavLayout,
  }
}
</script>

<style scoped>

</style>
