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
      <form class="flex flex-col gap-8" id="contact-form" name="contact-form">

        <div class="flex w-full gap-10">
          <div class="flex flex-col w-full">
            <label for="fname" class="font-bold text-left">First name*</label>
            <input type="text" placeholder="John" id="fname"
                   class="border-2 border-solid rounded p-2 mt-2 outline-none focus:border-green-500"
                   required form="contact-form" v-model="firstName">
          </div>
          <div class="flex flex-col w-full">
            <label for="lname" class="font-bold text-left">Last name*</label>
            <input type="text" placeholder="Wick" id="lname"
                   class="border-2 border-solid rounded p-2 mt-2 outline-none focus:border-green-500"
                   required form="contact-form" v-model="lastName">
          </div>
        </div>

        <div class="flex flex-col">
          <label for="email" class="font-bold text-left">Email*</label>
          <input type="email" placeholder="lorem@ipsum.com" id="email"
                 class="border-2 border-solid rounded p-2 mt-2 outline-none focus:border-green-500"
                 required form="contact-form" v-model="email">
        </div>

        <div class="flex flex-col">
          <label for="message" class="font-bold text-left">Message*</label>
          <textarea v-model="message" form="contact-form" placeholder="Please enter your message here..." required id="message" rows="6" cols="10" class="border-2 border-solid rounded p-2 mt-2 outline-none focus:border-green-500"></textarea>
        </div>

        <div class="flex w-full justify-center">
          <button @click="collectFormData" ref="submit" type="submit" class="hover:opacity-80 transform transition ease-in-out 150 font-bold bg-black text-white p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-green-500">Submit</button>
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
      <a class="hover:opacity-80 transform transition ease-in-out 150 font-bold bg-black text-white p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-green-500" href="mailto:">Send email via your own client!</a>
    </div>
  </div>

  <!-- Large screens -->

  <div class="hidden lg:flex lg:w-screen">

  <div class="hidden lg:block lg:p-4 lg:w-1/2">
    <div class="flex w-full justify-center">
      <div class="mt-10 mb-10">
        <h1 class="text-3xl">Get in touch via the form or by emailing directly with the button below</h1>
      </div>
    </div>
    <div class="">
      <form class="flex flex-col gap-8" id="contact-form" name="contact-form">

        <div class="flex w-full gap-10">
          <div class="flex flex-col w-full">
            <label for="fname" class="font-bold text-left">First name*</label>
            <input type="text" placeholder="John" id="fname"
                   class="border-2 border-solid rounded p-2 mt-2 outline-none focus:border-green-500"
                   required form="contact-form" v-model="firstName">
          </div>
          <div class="flex flex-col w-full">
            <label for="lname" class="font-bold text-left">Last name*</label>
            <input type="text" placeholder="Wick" id="lname"
                   class="border-2 border-solid rounded p-2 mt-2 outline-none focus:border-green-500"
                   required form="contact-form" v-model="lastName">
          </div>
        </div>

        <div class="flex flex-col">
          <label for="email" class="font-bold text-left">Email*</label>
          <input type="email" placeholder="lorem@ipsum.com" id="email"
                 class="border-2 border-solid rounded p-2 mt-2 outline-none focus:border-green-500"
                 required form="contact-form" v-model="email">
        </div>

        <div class="flex flex-col">
          <label for="message" class="font-bold text-left">Message*</label>
          <textarea v-model="message" form="contact-form" placeholder="Please enter your message here..." required id="message" rows="6" cols="10" class="border-2 border-solid rounded p-2 mt-2 outline-none focus:border-green-500"></textarea>
        </div>

        <div class="flex w-full justify-center">
          <button @click="collectFormData" ref="submit" type="submit" class="hover:opacity-80 transform transition ease-in-out 150 font-bold bg-black text-white p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-green-500">Submit</button>
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
      <a class="hover:opacity-80 transform transition ease-in-out 150 font-bold bg-black text-white p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-green-500" href="mailto:">Send email via your own client!</a>
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
        // Data from form can be selected via assignment to variables and AJAX call
      let data = {firstName: this.firstName, lastName: this.lastName, email: this.email, message: this.message}
      let stringifiedData = JSON.stringify(data)
      console.log(stringifiedData)
      }
    }
  }

</script>

<style scoped>

  #right-image {
    background-image: url("https://images.unsplash.com/photo-1528372444006-1bfc81acab02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80");
    background-size: cover;
    background-position: center;
  }

</style>