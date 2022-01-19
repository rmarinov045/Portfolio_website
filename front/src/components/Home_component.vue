<template>

  <div class="">

    <!-- Mobile -->

    <div class="lg:hidden grid grid-cols-1 grid-rows-2 h-full md:h-screen">
      <div class="flex">
        <div class="w-2/3 flex justify-center items-center flex-col gap-5 p-10">
          <h1 class="font-extrabold text-4xl">I am Radostin Marinov</h1>
          <p class="text-sm">Hello. I am Radostin Marinov (Rado). I am 22 and a beginner front end developer. My passion
            for tech and self development is my main driver. Find out more below!</p>
          <router-link class="hover:opacity-75 transform transition ease-in-out 150" to="Projects"><p
              class="text-black underline font-bold">Click here for my projects!</p></router-link>
        </div>
        <div class="w-1/3 flex justify-start items-center">
          <!--          <img class="h-full" alt="tech-image" src="../assets/laptop_photo.jpeg">-->
          <div class="w-1/2 h-1/2 border-l-2 pl-4">
            <div class="rounded-full h-4 w-4 bg-green-500 relative -left-6 -top-4"></div>
            <span id="animate-first" class="text-3xl text-green-500 font-bold block">Vue<span
                class="font-normal">.JS()</span></span>
          </div>
        </div>
      </div>

      <div class="flex h-72 h-full">

        <div class="w-2/3 flex justify-center items-center">
          <!--        <img class="h-full w-full object-cover" src="../assets/Monitor_photo.jpeg" alt="start-page-image">-->
          <div class="w-1/2 h-1/2 border-l-2 pl-4 pt-4">
            <div class="rounded-full h-4 w-4 bg-blue-500 relative -left-6 -top-4"></div>
            <span id="animate-second" class="text-3xl text-blue-500 font-bold block">Tailwind<span
                class="text-blue-300 text-lg">CSS</span></span>
          </div>
        </div>

        <div class="w-1/3 flex items-center justify-center">
          <p class="font-bold">..flying high!</p>
        </div>

      </div>
    </div>

    <!-- Large screens -->

    <div class="hidden lg:block filter xl:h-full">

      <!--    <div class="flex">-->
      <!--      <div class="w-2/3 flex justify-center items-center flex-col gap-5 p-10">-->
      <!--        <h1 class="font-extrabold text-4xl">I am Radostin Marinov</h1>-->
      <!--        <p class="text-sm">Hello. I am Radostin Marinov (Rado). I am 22 and a beginner front end developer. My passion for tech and self development is my main driver. Find out more below!</p>-->
      <!--        <router-link class="hover:opacity-75 transform transition ease-in-out 150" to="Projects"><p class="text-black underline font-bold">Click here for my projects!</p></router-link>-->
      <!--      </div>-->
      <!--      <div class="w-1/3">-->
      <!--        <img class="h-full w-full" alt="tech-image" src="../assets/laptop_photo.jpeg">-->
      <!--      </div>-->
      <!--    </div>-->

      <!--    <div class="flex h-72">-->

      <!--      <div class="w-2/3">-->
      <!--        <img class="h-full w-full object-cover" src="../assets/Monitor_photo.jpeg" alt="start-page-image">-->
      <!--      </div>-->

      <!--      <div class="w-1/3 flex items-center justify-center">-->
      <!--        <p class="font-bold">..flying high!</p>-->
      <!--      </div>-->

      <!--    </div>-->
      <div class="flex h-full mb-20 p-4">

        <div class="h-full w-1/2 flex justify-center items-center h-full border-b-2 border-green-500">
          <div class="flex flex-col p-10 w-full h-full gap-20 mt-20 items-center">
            <h1 class="text-7xl font-extrabold">I am Radostin Marinov</h1>
            <p class="text-bold text-xl mt-2">Hello. I am Radostin Marinov (Rado). I am 22 and a beginner front end
              developer. My passion for tech and self development is my main driver. Find out more below!</p>
            <router-link to="Projects"
                         class="hover:filter hover:brightness-90 w-1/2 transform transition ease-in-out 150 rounded-2xl font-bold text-white text-xl block mt-10 bg-gradient-to-r from-green-600 via-green-500 to-green-400 p-4">
              Projects
            </router-link>
            <!--          <hr class="border-green-500 border-2 w-full"/>-->
          </div>

        </div>

        <div class="w-1/2 flex flex-col p-10">

          <div class="h-full w-full border-l-2 border-black p-10 flex justify-center items-center">
                <img src="../assets/Monitor_photo.jpeg" class="h-full rounded-2xl w-4/5">
          </div>

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
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hex {
  height: 10rem;
  width: 10rem;
  background: ghostwhite;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
}

.hex-second {
  height: 10rem;
  width: 10rem;
  background: white;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transform: translateX(52%) translateY(-33%);
  justify-content: center;
  align-items: center;
}

#animate-first {
  animation-name: to-left;
  animation-duration: 1s;
}

#animate-second {
  animation-name: from-bottom;
  animation-duration: 1s;
}

@keyframes to-left {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes from-bottom {
  0% {
    opacity: 0;
    transform: translateY(300%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }

}

</style>
