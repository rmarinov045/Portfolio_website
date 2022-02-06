<template>
  <div class="h-screen w-full p-4 flex flex-col justify-center items-center gap-10">
    <p class="text-6xl font-bold">Ooops... looks like this page is not available at the moment</p>
<!--    <p class="text-3xl font-bold">Please try again later</p>-->
    <router-link class="text-2xl font-bold bg-black text-white p-4 rounded-2xl transform transition ease-in-out 150 hover:text-green-500" to="/Home">Go back to home</router-link>
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