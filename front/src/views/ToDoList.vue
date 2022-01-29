<template>
  <div class="to-do flex flex-col flex-grow">

    <navbar ref="navbar"/>
    <ToDo @click="removeDropDown"/>
    <footer_component class="mt-auto" @click="removeDropDown"/>

  </div>

</template>

<script>
import Navbar from "@/components/navbar";
import footer_component from "@/components/footer_component";
import ToDo from "@/components/ToDo";

export default {
  name: "ToDoList",
  components: {Navbar, footer_component, ToDo},
  created() {
    document.title = 'Projects - To Do List'
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