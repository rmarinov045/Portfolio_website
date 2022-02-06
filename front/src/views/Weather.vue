<template>
  <div class="flex flex-col flex-grow">
      <navbar ref="navbar"/>
      <weather-component class="" @click="removeDropDown"/>
      <footer_component class="mt-auto" @click="removeDropDown"/>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import footer_component from "@/components/footer_component";
import weatherComponent from "@/components/weather-component";

export default {
  name: "Weather",
  components: {weatherComponent, Navbar, footer_component},
  created() {
    document.title = 'Weather'
  },
  methods: {
    removeDropDown(e) {
      if (e.target.localName === "a") {
        return
      }
      if (this.$refs.navbar.$refs['burger'].classList.contains('rotate-90')) {
        this.$refs.navbar.enableDropdown()
      }
      this.$refs.navbar.isSearchClicked = false
      this.$refs.navbar.searchFieldOpen = false
    }
  }
}
</script>

<style scoped>

</style>