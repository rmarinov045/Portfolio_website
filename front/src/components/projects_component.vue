<template>

  <!-- Mobile not declared yet, may be usable with different screens-->

  <div id="projects" class="w-full p-2 bg-transparent xl:w-full xl:h-screen overflow-hidden relative z-0">
    <div class="w-full mt-10">
        <transition class="content-to-right">
          <div class="flex justify-start">
            <div class="w-1/3 flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>

            <div class="flex justify-center items-center flex-col">
              <h1 class="font-bold text-3xl">VueJS Calculator</h1>
              <p class="mt-2">GitHub link: <router-link to="Calculator">Insert it here</router-link></p>
            </div>
          </div>
        </transition>
    </div>
    <div class="w-full mt-32">
      <transition class="content-to-left">
        <div class="flex w-5/6 justify-end">
          <div class="w-1/3 flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>

          <div class="flex justify-center items-center flex-col">
            <h1 class="font-bold text-3xl">API usage</h1>
            <p class="mt-2"><router-link to="/Weather">Click here for demo!</router-link></p>
          </div>
        </div>
      </transition>
    </div>
    <div class="w-full mt-32">
      <transition class="content-to-right">
        <div class="flex justify-start">
          <div class="w-1/3 flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>

          <div class="flex justify-center items-center flex-col gap-2">
            <h1 class="font-bold text-3xl">To Do list</h1>
            <p class="mt-2"><router-link to="/to-do-list" class="">Click here for demo!</router-link></p>
          </div>
        </div>
      </transition>
    </div>
    <div class="w-full mt-32 mb-10">
      <transition class="content-to-left">
        <div class="flex w-5/6 justify-end">
          <div class="w-1/3 flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          </div>

          <div class="flex justify-center items-center flex-col">
            <h1 class="font-bold text-3xl">and more!</h1>
          </div>
        </div>
      </transition>
    </div>
  </div>


</template>

<script>
export default {
  name: "projects_component",
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>

.content-to-right {
  animation-duration: 1s;
  animation-name: animation-from-right;
  animation-delay: 0s;
}

.content-to-left {
  animation-duration: 1s;
  animation-name: animation-from-left;
}

/*#projects {*/
/*  background: url("https://cdn.pixabay.com/photo/2018/03/16/04/40/grid-3230205__340.jpg") no-repeat center center;*/
/*  background-size: cover;*/
/*}*/

@keyframes animation-from-right {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    /*50% {*/
    /*  transform: translateX(50%);*/
    /*  opacity: 0.9;*/
    /*}*/
    100% {
      opacity: 1;
      transform: translateX(0);
    }
}

@keyframes animation-from-left {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

</style>