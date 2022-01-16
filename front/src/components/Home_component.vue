<template>

  <div class="">

  <!-- Mobile -->

  <div class="lg:hidden">
      <div class="flex">
        <div class="w-2/3 flex justify-center items-center flex-col gap-5 p-10">
          <h1 class="font-extrabold text-4xl">I am Radostin Marinov</h1>
          <p class="text-sm">Hello. I am Radostin Marinov (Rado). I am 22 and a beginner front end developer. My passion for tech and self development is my main driver. Find out more below!</p>
          <router-link class="hover:opacity-75 transform transition ease-in-out 150" to="Projects"><p class="text-black underline font-bold">Click here for my projects!</p></router-link>
        </div>
        <div class="w-1/3">
          <img class="h-full" alt="tech-image" src="laptop_photo.jpeg">
        </div>
      </div>

    <div class="flex h-72 h-full">

      <div class="w-2/3">
        <img class="h-full w-full object-cover" src="Monitor_photo.jpeg" alt="start-page-image">
      </div>

      <div class="w-1/3 flex items-center justify-center">
        <p class="font-bold">..flying high!</p>
      </div>

    </div>
  </div>

  <!-- Large screens -->

  <div class="hidden lg:block filter">

    <div class="flex">
      <div class="w-2/3 flex justify-center items-center flex-col gap-5 p-10">
        <h1 class="font-extrabold text-4xl">I am Radostin Marinov</h1>
        <p class="text-sm">Hello. I am Radostin Marinov (Rado). I am 22 and a beginner front end developer. My passion for tech and self development is my main driver. Find out more below!</p>
        <router-link class="hover:opacity-75 transform transition ease-in-out 150" to="Projects"><p class="text-black underline font-bold">Click here for my projects!</p></router-link>
      </div>
      <div class="w-1/3">
        <img class="h-full w-full" alt="tech-image" src="laptop_photo.jpeg">
      </div>
    </div>

    <div class="flex h-72">

      <div class="w-2/3">
        <img class="h-full w-full object-cover" src="Monitor_photo.jpeg" alt="start-page-image">
      </div>

      <div class="w-1/3 flex items-center justify-center">
        <p class="font-bold">..flying high!</p>
      </div>

    </div>

  </div>

  </div>

</template>

<script>
export default {
  name: 'Hpme_component',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
