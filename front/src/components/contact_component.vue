<template>

  <div class="">

    <!-- Mobile -->

    <div class="lg:hidden p-4">
      <div class="flex w-full">
        <div class="mt-10 mb-10">
          <h1 class="text-2xl">Get in touch via the form or by emailing directly with the button below</h1>
        </div>
      </div>
      <div class="">
        <form class="flex flex-col gap-8" id="contact-form-mobile" name="contact-form">

          <div class="flex w-full gap-10">
            <div class="flex flex-col w-full">
              <label for="fname" class="font-bold text-left">First name*</label>
              <input type="text" placeholder="John" id="fname"
                     class="tranform transition ease-in-out 150 border-2 border-solid rounded p-2 mt-2 outline-none focus:border-green-500"
                      form="contact-form" v-model="firstName">
            </div>
            <div class="flex flex-col w-full">
              <label for="lname" class="font-bold text-left">Last name*</label>
              <input type="text" placeholder="Wick" id="lname"
                     class="tranform transition ease-in-out 150 border-2 border-solid rounded p-2 mt-2 outline-none focus:border-green-500"
                      form="contact-form" v-model="lastName">
            </div>
          </div>

          <div class="flex flex-col">
            <label for="email" class="font-bold text-left">Email*</label>
            <input type="email" placeholder="lorem@ipsum.com" id="email"
                   class="tranform transition ease-in-out 150 border-2 border-solid rounded p-2 mt-2 outline-none focus:border-green-500"
                    form="contact-form" v-model="email">
          </div>

          <div class="flex flex-col">
            <label for="message" class="font-bold text-left">Message*</label>
            <textarea v-model="message" form="contact-form" placeholder="Please enter your message here..."
                      id="message" rows="6" cols="10"
                      class="tranform transition ease-in-out 150 border-2 border-solid rounded p-2 mt-2 outline-none focus:border-green-500"></textarea>
          </div>

          <div class="flex w-full justify-center flex-col gap-4 items-center">
            <button id="submit-button-mobile" @click="collectFormData" ref="submit" type="submit"
                    class="hover:opacity-80 transform transition ease-in-out 150 font-bold bg-black text-white p-2 w-1/2 focus:outline-none">
              Submit
            </button>
            <div id="error" class="hidden w-1/2 rounded-2xl p-2 transform transition ease-in-out 500 bg-red-500 text-white font-bold">
              <p class="">Oops... something went wrong. Please try again later.</p>
            </div>
          </div>

        </form>
      </div>
      <div class="w-full flex mt-10 justify-center h-8">
        <div class="h-1/2 w-1/3 border-b-2 border-black">

        </div>
        <p class="self-center ml-2 mr-2">OR</p>
        <div class="h-1/2 w-1/3 border-b-2 border-black">

        </div>
      </div>
      <div class="mt-10 flex justify-center w-full mb-10">
        <a class="hover:opacity-80 transform transition ease-in-out 150 font-bold bg-black text-white p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-green-500"
           href="mailto:r.marinov045@gmail.com">Send email via your own client!</a>
      </div>
    </div>

    <!-- Large screens -->

    <div class="hidden lg:flex lg:w-full">

      <div class="hidden lg:block lg:p-4 lg:w-1/2">
        <div class="flex w-full justify-center">
          <div class="mt-10 mb-10">
            <h1 class="text-3xl">Get in touch via the form or by emailing directly with the button below</h1>
          </div>
        </div>
        <div class="">
          <form class="flex flex-col gap-8" id="contact-form" name="contact-form" @submit.prevent="collectFormData">

            <div class="flex w-full gap-10">
              <div class="flex flex-col w-full">
                <label for="fname" class="font-bold text-left">First name*</label>
                <input type="text" placeholder="John" id="fname"
                       class="transform transition ease-in-out 150 border-2 border-solid rounded p-2 mt-2 outline-none focus:border-green-500"
                       required form="contact-form" v-model="firstName">
              </div>
              <div class="flex flex-col w-full">
                <label for="lname" class="font-bold text-left">Last name*</label>
                <input type="text" placeholder="Wick" id="lname"
                       class="transform transition ease-in-out 150 border-2 border-solid rounded p-2 mt-2 outline-none focus:border-green-500"
                       required form="contact-form" v-model="lastName">
              </div>
            </div>

            <div class="flex flex-col">
              <label for="email" class="font-bold text-left">Email*</label>
              <input type="email" placeholder="lorem@ipsum.com" id="email"
                     class="transform transition ease-in-out 150 border-2 border-solid rounded p-2 mt-2 outline-none focus:border-green-500"
                     required form="contact-form" v-model="email">
            </div>

            <div class="flex flex-col">
              <label for="message" class="font-bold text-left">Message*</label>
              <textarea v-model="message" form="contact-form" placeholder="Please enter your message here..." required
                        id="message" rows="6" cols="10"
                        class="transform transition ease-in-out 150 border-2 border-solid rounded p-2 mt-2 outline-none focus:border-green-500"></textarea>
            </div>

            <div class="flex flex-col w-full gap-4 justify-center items-center">
              <button ref="submit" id="submit-button" type="submit"
                      class="hover:opacity-80 transform transition ease-in-out 150 font-bold bg-black text-white p-2 w-1/2 focus:outline-none">
                Submit
              </button>
              <div id="error" class="hidden w-1/2 rounded-2xl p-2 transform transition ease-in-out 500 bg-red-500 text-white font-bold">
                <p class="">Oops... something went wrong. Please try again later.</p>
              </div>
            </div>

          </form>
        </div>
        <div class="w-full flex mt-10 justify-center h-8">
          <div class="h-1/2 w-1/3 border-b-2 border-black">

          </div>
          <p class="self-center ml-2 mr-2">OR</p>
          <div class="h-1/2 w-1/3 border-b-2 border-black">

          </div>
        </div>
        <div class="mt-10 flex justify-center w-full mb-10">
          <a class="hover:opacity-80 transform transition ease-in-out 150 font-bold bg-black text-white p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-green-500"
             href="mailto:r.marinov045@gmail.com">Send email via your own client!</a>
        </div>
      </div>

      <div id="right-image" class="w-1/2">
      </div>

    </div>

  </div>

</template>

<script>
export default {
  name: "contact_component",
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    }
  },
  methods: {
    collectFormData() {
      // Gathers data from form and creates data object. Then emits the data and submitForm event to parent for email handling
      // Basic validation
      const entries = [this.firstName, this.lastName, this.message, this.email]
      const button = document.getElementById('submit-button')
      const mobileButton = document.getElementById('submit-button-mobile')

      for (let entry of entries) {
        if (entry.length === 0) {
          button.style.backgroundColor = '#fd0000'
          button.innerText = 'Please fill in all fields!'
          button.style.cursor = 'default'
          mobileButton.style.backgroundColor = '#fd0000'
          mobileButton.innerText = 'Please fill in all fields'
          mobileButton.style.cursor = 'default'
          setTimeout(() => {
            button.style.backgroundColor = '#000000'
            button.innerText = 'Submit'
            button.style.cursor = 'pointer'
            mobileButton.style.backgroundColor = '#000000'
            mobileButton.innerText = 'Submit'
            mobileButton.style.cursor = 'pointer'
          }, 4000)
          return
        }
      }

      if (!this.email.includes('@') || this.email.indexOf('@') === this.email.length - 1) {
        button.style.backgroundColor = '#fd0000'
        button.innerText = 'Please fill in a correct email address!'
        mobileButton.style.backgroundColor = '#fd0000'
        mobileButton.innerText = 'Please fill in a correct email address!'
        setTimeout(() => {
          button.style.backgroundColor = '#000000'
          button.innerText = 'Submit'
          mobileButton.style.backgroundColor = '#000000'
          mobileButton.innerText = 'Submit'
        }, 4000)
        return
      }

      let data = {
        from_name: this.firstName + " " + this.lastName,
        to_name: "Radostin Marinov",
        email: this.email,
        message: this.message
      }
      this.$emit('submitForm', data)
      document.getElementById('contact-form').reset()
      document.getElementById('contact-form-mobile').reset()

      button.style.backgroundColor = '#4caf50'
      button.innerText = 'Email sent!'
      button.disabled = true
      mobileButton.style.backgroundColor = '#4caf50'
      mobileButton.innerText = 'Email sent!'
      mobileButton.disabled = true

      setTimeout(() => {
        button.style.backgroundColor = '#000000'
        button.innerText = 'Submit'
        button.disabled = false
        mobileButton.style.backgroundColor = '#000000'
        mobileButton.innerText = 'Submit'
        mobileButton.disabled = false
      }, 4000)
    }
  },
  emits: ['submitForm']
}

</script>

<style scoped>

#right-image {
  background-image: url("../assets/contact-img.jpeg");
  background-size: cover;
  background-position: center;
}

</style>