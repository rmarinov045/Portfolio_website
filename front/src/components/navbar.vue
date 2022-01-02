<template>

  <!-- Mobile navbar sandwich -->

  <div class="lg:hidden w-full flex items-center p-2 pl-4 pr-4 text-white opacity-90 shadow top-0 bg-black">
    <div class="mr-6">
      <router-link to="/"><img src="favicon.ico" alt="logo_icon" class="rounded"></router-link>
    </div>
    <div class="">
      <p class="font-extrabold text-sm shadow-inner">Made by: Marinoff</p>
    </div>
    <div class="flex ml-auto gap-7">
      <svg ref="search" @click="enableSearch" xmlns="http://www.w3.org/2000/svg"
           class="hover:text-green-500 h-6 w-6 cursor-pointer transition ease-in-out 150" fill="none"
           viewBox="0 0 24 24"
           stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
      <svg ref="burger" @click="enableDropdown" xmlns="http://www.w3.org/2000/svg"
           class="hover:text-green-500 h-6 w-6 cursor-pointer transition ease-in-out 150"
           fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </div>
  </div>

  <!-- Dropdown burger for mobile -->

  <div class="h-auto w-full bg-white border-b-1 border-solid border-black shadow-xl" v-show="isDroppedDown">
    <transition class="dropdown-transition">
      <div class="w-full">
        <ul class="flex flex-col gap-5 p-3 font-bold items-center">
          <router-link to=""
                       class="w-1/2 pb-2 hover:opacity-75 border-b-2 border-black border-solid transform transition ease-in-out 150">
            Projects
          </router-link>
          <router-link to="Skillset"
                       class="w-1/2 pb-2 hover:opacity-75 border-b-2 border-black border-solid transform transition ease-in-out 150">
            Skill set
          </router-link>
          <router-link to="Contact"
                       class="w-1/2 pb-2 hover:opacity-75 border-b-2 border-black border-solid transform transition ease-in-out 150">
            Contact me
          </router-link>
        </ul>
      </div>
    </transition>
  </div>

  <!-- Mobile search -- fills top part of screen -->

  <div class="h-auto w-full bg-white border-b-1 border-solid border-black shadow-xl p-10" v-show="isSearchClicked">
    <transition class="search-transition">
      <form class="">
        <p class="mb-10 text-3xl font-bold">Search this website</p>
        <input type="text" class="outline-none border-b-2 border-black border-solid pl-2"
               placeholder="Type for suggestions...">
      </form>
    </transition>
  </div>

  <!-- lg and above screens -->

  <div class="hidden lg:block lg:sticky lg:top-0 lg:shadow-lg">
    <div class="flex bg-black pl-4"> <!-- Add black bg here -->
      <div class="w-1/6 pt-2 pb-2 gap-3 flex text-white justify-center items-center">
        <router-link to="Home" class="flex items-center"><img src="favicon.ico" alt="logo_icon" class="rounded w-12 h-12">
        <p class="font-bold text-white text-xl">Welcome!</p>
        </router-link>
      </div>
      <div class="w-full flex justify-around items-center text-white">
        <form class="flex gap-2 justify-center items-center">
          <input type="text" placeholder="Search..." class="focus:border-green-500 transform transition ease-in-out 150 text-center bg-transparent outline-none pl-2 pt-0.5 pb-0.5 w-56 border-2 rounded-3xl border-solid border-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer hover:opacity-75 transform transition ease-in-out 150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </form>
          <router-link to="" class="font-bold hover:opacity-75 transform transition ease-in-out 150">Projects</router-link>
          <router-link to="Skillset" class="font-bold hover:opacity-75 transform transition ease-in-out 150">Skill set</router-link>
          <router-link to="Contact" class="font-bold hover:opacity-75 transform transition ease-in-out 150">Contact me</router-link>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      isDroppedDown: false,
      isSearchClicked: false
    }
  },
  methods: {
    enableDropdown() {
      this.isSearchClicked = false
      if (this.$refs['burger'].classList.contains('rotate-90')) {
        this.$refs['burger'].classList.remove('transform', 'rotate-90')
        this.isDroppedDown = false
      } else {
        this.$refs["burger"].classList.add('transform', 'rotate-90')
        this.isDroppedDown = true
      }
    },
    enableSearch() {
      if (this.isDroppedDown) {
        this.$refs['burger'].classList.remove('transform', 'rotate-90')
        this.isDroppedDown = false
        this.isSearchClicked = !this.isSearchClicked
      } else {
        this.isSearchClicked = !this.isSearchClicked
      }
    }
  }
}

</script>

<style scoped>
.dropdown-transition {
  animation-duration: 0.5s;
  animation-name: dropdown;
}

.search-transition {
  animation-duration: 0.5s;
  animation-name: dropdown;
}

@keyframes dropdown-up {
  0% {
    transform: scaleY(1);
  }
  80% {
    transform: scaleY(1.1);
  }
  100% {
    transform: scaleY(0);
  }
}

@keyframes dropdown {
  0% {
    transform: scaleY(0);
  }
  80% {
    transform: scaleY(1.1);
  }
  100% {
    transform: scaleY(1);
  }
}
</style>