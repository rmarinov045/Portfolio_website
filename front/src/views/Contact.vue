<template>
  <div class="contact">
    <navbar ref="navbar"/>
    <contact_component @submitForm="submitForm" @click="removeDropDown"/>
    <footer_component @click="removeDropDown"/>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import footer_component from "@/components/footer_component";
import contact_component from "@/components/contact_component";
import emailjs from '@emailjs/browser'


export default {
  name: "Contact",
  components: {Navbar, footer_component, contact_component},
  created() {
    document.title = 'Contact me'
    this.isLoaded = true
  },
  data() {
    return {
      emailData: null
    }
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
    },
    submitForm(data) {
      this.emailData = data
      emailjs.send('service_atwa8qp', 'template_pphnnqq', this.emailData, 'user_Lin4vFt0JI7LsmJsf5HGu')
      .then(() => {
        document.getElementById("test").style.display = 'none'
      })
      .catch(() => {
        document.getElementById("test").style.display = 'block'
      })
    }
  }
}
</script>

<style scoped>

</style>