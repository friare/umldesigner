<template>
  <div>
    <nav-layout active-menu="setting">
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
  name: "SettingsView",
  components: {
    NavLayout,
  }
}
</script>

<style scoped>

</style>
