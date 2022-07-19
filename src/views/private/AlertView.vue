<template>
  <div>
    <nav-layout active-menu="alert">
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
  name: "AlertView",
  components: {
    NavLayout,
  }
}
</script>

<style scoped>

</style>
