<template>

  <div class="weather w-full">

  <!-- Mobile -->

  <div class="lg:hidden h-full w-full p-4">
    <h1 class="text-4xl font-bold w-full">Weather app</h1>
    <hr class="mt-4"/>

    <div class="w-full mt-10">
      <form class="flex flex-col gap-6 justify-center items-center">
        <label class=""><input v-model="cityName" type="text" placeholder="Enter city name"
                               class="text-2xl pb-1 pl-3 border-b-2 border-black focus:border-green-500 focus:outline-none transform transition ease-in-out 150"/></label>
        <button @click.prevent="getWeather(cityName)" type="submit"
                class="font-bold rounded-2xl text-white hover:opacity-80 w-1/2 bg-green-500 pb-2 pt-2">Search
        </button>
      </form>
    </div>

    <div v-show="noResultFound"
         class="mt-10 w-full flex items-center justify-center transform translate ease-in-out 150">
      <p class="text-white font-bold p-2 rounded-2xl bg-red-500">{{ noResultFoundMessage }}</p>
    </div>

    <div ref="cards-container" id="cards-container" class="grid grid-cols-1 w-full mt-10 ">
      <hr/>
        <div v-for="cities in this.cities" :key="cities.id" class="w-2/3 bg-gray-200 rounded shadow-xl p-4 gap-6 justify-self-center flex flex-col items-start justify-center mt-10 transform transition ease-in-out 500">
          <p class="flex items-center gap-6 text-4xl font-bold">{{ cities.city }}<span class="mb-3 text-xl bg-yellow-500 rounded-2xl text-white p-1 pl-2 pr-2">{{ cities.country}}</span></p>
          <p class="text-6xl font-extrabold"> {{ cities.current }} °C</p>
          <img alt="weather-icon" class="h-20 w-20 self-center" :src="cities.icon">
          <p class="text-3xl font-bold uppercase">{{ cities.description}}</p>
          <span class="font-bold uppercase">Feels like: {{cities.feel}}°C</span>
        </div>
    </div>

    <p class="mt-72">... made with love by</p>

  </div>

  <!-- Large screens -->

  <div class="hidden lg:block h-full w-full p-4">

    <h1 class="text-4xl font-bold w-full mt-12 mb-12">Weather app</h1>
    <hr class="mt-4"/>

    <div class="w-full mt-10">
      <form class="flex flex-col gap-6 justify-center items-center">
        <label class=""><input v-model="cityName" type="text" placeholder="Enter city name"
                               class="text-2xl pb-1 pl-3 border-b-2 border-black focus:border-green-500 focus:outline-none transform transition ease-in-out 150"/></label>
        <button @click.prevent="getWeather(cityName)" type="submit"
                class="font-bold rounded-2xl text-white hover:opacity-80 w-1/5 bg-green-500 pb-2 pt-2">Search
        </button>
      </form>
    </div>

    <div v-show="noResultFound"
         class="mt-10 w-full flex items-center justify-center transform translate ease-in-out 150">
      <p class="text-white font-bold p-2 rounded-2xl bg-red-500">{{ noResultFoundMessage }}</p>
    </div>

    <hr class="mt-10"/>

    <div ref="cards-container" id="cards-container" class="grid grid-cols-3 w-full mt-10">
      <div v-for="cities in this.cities" :key="cities.id" class="w-2/3 bg-gray-200 justify-self-center rounded shadow-xl p-4 gap-6 flex flex-col items-start mt-10 transform transition ease-in-out 500">
        <p class="flex items-center gap-6 text-4xl font-bold">{{ cities.city }}<span class="mb-3 text-xl bg-yellow-500 rounded-2xl text-white p-1 pl-2 pr-2">{{ cities.country}}</span></p>
        <p class="text-6xl font-extrabold"> {{ cities.current }} °C</p>
        <img alt="weather-icon" class="h-20 w-20 self-center" :src="cities.icon">
        <p class="text-3xl font-bold uppercase">{{ cities.description}}</p>
        <span class="font-bold uppercase">Feels like: {{cities.feel}}°C</span>
      </div>
    </div>

    <p class="mt-96 mb-0.5">... made with love by</p>

  </div>

  </div>

</template>

<script>
export default {
  name: "weather-component",
  data() {
    return {
      cityName: '',
      noResultFoundMessage: 'No city with this name has been found. Please try again with another one.',
      noResultFound: false,
      cities: [],
      isNewElement: false
    }
  },
  methods: {
    async getWeather(cityName) {
      const apiKey = "&appid=b13bc36f06f4707b02ec99c138870fe8&units=metric"
      const url = "https://api.openweathermap.org/data/2.5/weather?"
      let city = `q=${cityName}`
      let requestUrl = url + city + apiKey

      const response = await fetch(requestUrl).catch(() => {
        this.noResultFound = true
        this.noResultFoundMessage = 'No city with this name has been found. Please try again with another one.'
      })
      const data = await response.json()
      if(!response.ok) {
        this.noResultFoundMessage = 'No city with this name has been found. Please try again with another one.'
        this.isNewElement = false
        this.noResultFound = true
        return
      } else {
        this.noResultFound = false
      }
      const town = data.name
      const currentTemperature = Math.round(data.main.temp)
      const minTemperature = Math.round(data.main.temp_min)
      const maxTemperature = Math.round(data.main.temp_max)
      const feelsLike = Math.round(data.main.feels_like)
      const weather = data.weather
      const description = weather[0].description
      const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`
      const id = Math.random() * 1000
      const country = data.sys.country
      this.cityName = ''
      for (let cities of this.cities) {
        if (cities.city === town) {
          this.noResultFoundMessage = 'Information for city is already present'
          this.noResultFound = true
          this.isNewElement = false
          return
        }
      }
      this.isNewElement = true
      return this.cities.push({country: country, city: town, current: currentTemperature, min: minTemperature, max: maxTemperature, feel: feelsLike, icon: icon, description: description, id: id})
    },
    scrollToEnd() {
       return this.$refs["cards-container"].scrollTop = this.$refs['cards-container'].lastElementChild.scrollIntoView({behavior: "smooth", block: "center"})
    }
  },
  updated() {
    this.$nextTick(() => {
    if (this.isNewElement) {
      this.scrollToEnd()
    }
    })
  }
}
</script>

<style scoped>

</style>