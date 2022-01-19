<template>
  <router-view v-cloak v-show="isLoaded" class="main"/>
  <loader v-if="!isLoaded" class="loader"/>
</template>

<script>
import Loader from "@/components/loader";

export default {
  name: 'Portfolio-website',
  components: {Loader},
  data() {
    return {
      isLoaded: false
    }
  },
  created() {
    this.isLoaded = true
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.loader {
  transition: ease-in-out 750ms;
}

@keyframes loading {
  from {
    opacity: 0
  }
  to {
    opacity: 1;
  }
}
</style>
