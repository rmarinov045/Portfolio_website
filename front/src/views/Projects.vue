<template>
  <div class="projects">
    <navbar ref="navbar"/>
    <projects_component @click="removeDropDown"/>
    <footer_component @click="removeDropDown"/>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import footer_component from "@/components/footer_component";
import projects_component from "@/components/projects_component";

export default {
  name: "Projects",
  components: {projects_component, Navbar, footer_component},
  created() {
    document.title = 'Projects'
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