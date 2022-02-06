<template>
  <div class="calc">
    <navbar ref="navbar"/>
    <calculator @click="removeDropDown"/>
    <footer_component @click="removeDropDown"/>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import footer_component from "@/components/footer_component";
import Calculator from "@/components/calculator";

export default {
  name: "Calculator-app",
  components: {Calculator, Navbar, footer_component},
  created() {
    document.title = 'Calculator'
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