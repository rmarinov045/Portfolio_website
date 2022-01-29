<template>
  <div class="home flex flex-col flex-grow">
    <navbar ref="navbar"/>
    <Home_component class="flex flex-grow" @click="removeDropDown"/>
    <footer_component @click="removeDropDown"/>
  </div>

</template>

<script>
// @ is an alias to /src
import Home_component from "@/components/Home_component";
import navbar from "@/components/navbar";
import footer_component from "@/components/footer_component";

export default {
  name: 'Home',
  components: {
    Home_component,
    navbar,
    footer_component
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
      this.$refs.navbar.searchFieldOpen = false
    }
  }
}
</script>

<style scoped>

</style>