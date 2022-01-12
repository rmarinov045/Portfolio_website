<template>
  <div class="contact">
    <navbar ref="navbar"/>
    <contact_component @click="removeDropDown"/>
    <footer_component @click="removeDropDown"/>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import footer_component from "@/components/footer_component";
import contact_component from "@/components/contact_component";

export default {
  name: "Contact",
  components: {Navbar, footer_component, contact_component},
  created() {
    document.title = 'Contact me'
  },
  methods: {
    removeDropDown() {
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