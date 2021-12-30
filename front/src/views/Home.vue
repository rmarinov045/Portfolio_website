<template>
  <div class="home">
    <navbar ref="navbar"/>
    <home_component @click="removeDropDown"/>
  </div>
</template>

<script>
// @ is an alias to /src
import home_component from "@/components/Home_component";
import navbar from "@/components/navbar";

export default {
  name: 'Home',
  components: {
    home_component,
    navbar
  },
  created() {
    document.title = 'Home'
  },
  data() {
    return {
    }
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