<template>
  <router-view v-cloak v-show="isLoaded" class="main"/>
  <loader v-if="!isLoaded"/>
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
    setTimeout(() => this.isLoaded = true, 2000)
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

.main {
  animation: loading 750ms;
  animation-direction: alternate;
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
