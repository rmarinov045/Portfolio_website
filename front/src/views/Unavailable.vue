<template>
  <div class="h-screen w-screen flex justify-center items-center">
    <p class="text-6xl font-bold">Ooops... looks like the page is not available at the moment due to an ongoing maintenance.</p>
    <p class="text-4xl font-bold">Please try again later</p>
    <p class="text-2xl font-bold">... Coding is love</p>
  </div>
</template>

<script>
export default {
  name: "Unavailable.vue",
  created() {
    document.title = 'Maintenance'
  }
}
</script>

<style scoped>

</style>