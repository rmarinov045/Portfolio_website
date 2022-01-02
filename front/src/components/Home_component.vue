<template>

  <!-- Mobile -->

  <div class="lg:hidden">
      <div class="flex">
        <div class="w-2/3 flex justify-center items-center flex-col gap-5 p-10">
          <h1 class="font-extrabold text-4xl">I am Radostin Marinov</h1>
          <p class="text-sm">Hello. I am Radostin Marinov (Rado). I am 22 and a beginner front end developer. My passion for tech and self development is my main driver. Find out more below!</p>
          <router-link class="hover:opacity-75 transform transition ease-in-out 150" to=""><p class="text-black underline font-bold">Click here for my projects!</p></router-link>
        </div>
        <div class="w-1/3">
          <img class="h-full" alt="tech-image" src="https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80">
        </div>
      </div>

    <div class="flex h-72">

      <div class="w-2/3">
        <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZGV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="start-page-image">
      </div>

      <div class="w-1/3 flex items-center justify-center">
        <p class="font-bold">..flying high!</p>
      </div>

    </div>
  </div>

  <!-- Large screens -->

  <div class="hidden lg:block">

    <div class="flex">
      <div class="w-2/3 flex justify-center items-center flex-col gap-5 p-10">
        <h1 class="font-extrabold text-4xl">I am Radostin Marinov</h1>
        <p class="text-sm">Hello. I am Radostin Marinov (Rado). I am 22 and a beginner front end developer. My passion for tech and self development is my main driver. Find out more below!</p>
        <router-link class="hover:opacity-75 transform transition ease-in-out 150" to=""><p class="text-black underline font-bold">Click here for my projects!</p></router-link>
      </div>
      <div class="w-1/3">
        <img class="h-full w-full" alt="tech-image" src="https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80">
      </div>
    </div>

    <div class="flex h-72">

      <div class="w-2/3">
        <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZGV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="start-page-image">
      </div>

      <div class="w-1/3 flex items-center justify-center">
        <p class="font-bold">..flying high!</p>
      </div>

    </div>

  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
