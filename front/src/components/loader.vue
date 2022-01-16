<template>
  <transition name="loader-transition">
    <div class="w-screen h-screen flex flex-col justify-center items-center">
      <img src="../assets/newlogo.png" id="spinner" class="h-16 w-16 lg:h-24 lg:w-24">
      <p class="mt-10 font-extrabold text-2xl">Loading</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: "loader"
}
</script>

<style scoped>

#spinner {
  animation: loader 1000ms infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
}

@keyframes loader {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.5);
  }

}

</style>