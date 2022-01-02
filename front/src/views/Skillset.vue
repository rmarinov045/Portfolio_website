<template>
  <div class="skill-set">
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
    removeDropDown() {
      if (this.$refs.navbar.$refs['burger'].classList.contains('rotate-90')) {
        this.$refs.navbar.enableDropdown()
      }
      this.$refs.navbar.isSearchClicked = false
    }
  }
}
</script>

<style scoped>

</style>