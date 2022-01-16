<template>
  <div v-show="!areCookiesAccepted" class="transform transition ease-in-out 500 sticky flex flex-col w-full bg-white bottom-0 p-4 text-xs bg-white items-center border-2 border-black">
    <p class="text-left">{{ cookiesMessage }}
      <svg xmlns="http://www.w3.org/2000/svg" @click="areCookiesAccepted = true" class="h-6 w-6 cursor-pointer absolute top-1 right-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </p>
    <button type="button" @click="areCookiesAccepted = true" class="mt-3 bg-green-500 w-1/4 pb-2 pt-2 font-bold text-white hover:opacity-75 rounded-2xl">Accept</button>
  </div>
</template>

<script>
export default {
  name: "Cookies.vue",
  data() {      // Add check for consent-allowed cookie
    return {
      areCookiesAccepted: true,
      cookiesMessage: 'This website uses cookies to offer you the best experience. Please accept the cookies for optimal performance'
    }
  },
  mounted() {
        setTimeout(() => this.areCookiesAccepted = false, 2000)
    }
  }
</script>

<style scoped>

</style>