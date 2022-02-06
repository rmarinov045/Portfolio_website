<template>
  <div class="skill-set flex flex-col flex-grow">
    <navbar ref="navbar"/>
    <skillset_component @click="removeDropDown"/>
    <footer_component @click="removeDropDown"/>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import footer_component from "@/components/footer_component";
import skillset_component from "@/components/skillset_component";

export default {
  name: "Skillset",
  components: {skillset_component, Navbar, footer_component},
  created() {
    document.title = 'Skillset'
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