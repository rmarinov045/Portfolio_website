<template>
  <div class="calc h-screen w-full">

    <!-- Mobile -->

    <div class="lg:hidden w-full h-full p-4">

      <h1 class="font-extrabold text-4xl mt-10 mb-10">Calculator app</h1>

      <div class="flex flex-col w-full h-3/4 bg-gray-200 rounded-2xl shadow-xl">

        <div id="view-box" class="w-full h-1/4 flex flex-col p-4 items-end overflow-hidden border-b-2 border-black">
          <span class="text-3xl font-extrabold">{{ calcValue }}</span>
          <span class="font-bold ">{{ prevValue }}</span>
        </div>

        <div id="keyboard" class="grid grid-cols-4 grid-rows-5 p-4 h-full">
          <div @click="calc(0,  'Clear')" id="clear-btn" class="calc-btn">AC</div>
          <div @click="calc(0,  'pos-neg')" id="pos-neg-btn" class="calc-btn">+/-</div>
          <div @click="calc(0, 'percent')" id="percent-btn" class="calc-btn">%</div>
          <div @click="calc(0, 'divide')" id="divide-btn" class="calc-btn">÷</div>
          <div @click="calc(7,  'Update')" class="calc-btn-num">7</div>
          <div @click="calc(8,  'Update')" class="calc-btn-num">8</div>
          <div @click="calc(9,  'Update')" class="calc-btn-num">9</div>
          <div @click="calc(0, 'multiply')" class="calc-btn-num">×</div>
          <div @click="calc(4,  'Update')" class="calc-btn-num">4</div>
          <div @click="calc(5,  'Update')" class="calc-btn-num">5</div>
          <div @click="calc(6,  'Update')" class="calc-btn-num">6</div>
          <div @click="calc(0, 'subtract')" id="minus-btn" class="calc-btn">-</div>
          <div @click="calc(1,  'Update')" class="calc-btn-num">1</div>
          <div @click="calc(2,  'Update')" class="calc-btn-num">2</div>
          <div @click="calc(3,  'Update')" class="calc-btn-num">3</div>
          <div @click="calc(0, 'sum')" id="plus-btn" class="calc-btn">+</div>
          <div @click="calc(0,  'Update')" class="calc-btn-wide">0</div>
          <div @click="addComma" id="comma-btn" class="calc-btn">.</div>
          <div @click="equals(this.operation)" id="equals-btn" class="calc-btn">=</div>
        </div>

      </div>


    </div>

    <!-- Large and above screens -->

    <div class="hidden lg:block w-full h-full p-4">

      <h1 class="font-extrabold text-4xl mt-10 mb-10">Calculator app</h1>

      <div class="flex flex-col w-1/2 m-auto h-3/4 bg-gray-200 rounded-2xl shadow-xl">

        <div id="view-box" class="w-full h-1/4 flex flex-col p-4 items-end overflow-hidden border-b-2 border-black">
          <span class="text-4xl font-extrabold">{{ calcValue }}</span>
          <span class="font-bold text-2xl">{{ prevValue }}</span>
        </div>

        <div id="keyboard" class="grid grid-cols-4 grid-rows-5 p-4 h-full">
          <div @click="calc(0,  'Clear')" id="clear-btn" class="calc-btn">AC</div>
          <div @click="calc(0,  'pos-neg')" id="pos-neg-btn" class="calc-btn">+/-</div>
          <div @click="calc(0, 'percent')" id="percent-btn" class="calc-btn">%</div>
          <div @click="calc(0, 'divide')" id="divide-btn" class="calc-btn">÷</div>
          <div @click="calc(7,  'Update')" class="calc-btn-num">7</div>
          <div @click="calc(8,  'Update')" class="calc-btn-num">8</div>
          <div @click="calc(9,  'Update')" class="calc-btn-num">9</div>
          <div @click="calc(0, 'multiply')" class="calc-btn-num">×</div>
          <div @click="calc(4,  'Update')" class="calc-btn-num">4</div>
          <div @click="calc(5,  'Update')" class="calc-btn-num">5</div>
          <div @click="calc(6,  'Update')" class="calc-btn-num">6</div>
          <div @click="calc(0, 'subtract')" id="minus-btn" class="calc-btn">-</div>
          <div @click="calc(1,  'Update')" class="calc-btn-num">1</div>
          <div @click="calc(2,  'Update')" class="calc-btn-num">2</div>
          <div @click="calc(3,  'Update')" class="calc-btn-num">3</div>
          <div @click="calc(0, 'sum')" id="plus-btn" class="calc-btn">+</div>
          <div @click="calc(0,  'Update')" class="calc-btn-wide">0</div>
          <div @click="addComma" id="comma-btn" class="calc-btn">.</div>
          <div @click="equals(this.operation)" id="equals-btn" class="calc-btn">=</div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "calculator",
  data() {
    return {
      calcValue: '0',
      first: 0,
      second: 0,
      operation: '',
      prevValue: '',
      equalsRan: false,
      prevOperation: ''
    }
  },
  created() {
  },
  methods: {
    calc(Operand, operation) {
      switch (operation) {
        case 'Clear':
          this.calcValue = '0'
          this.prevValue = ''
          break
        case 'Update':
          if (this.equalsRan === true) {
            this.calcValue = '0'
            this.prevValue = ''
            this.equalsRan = false
          }
          if (this.calcValue === '0') {
            this.calcValue = ''
            this.calcValue += Operand.toString()
          } else {
            this.calcValue += Operand.toString()
          }
          break
        case 'pos-neg':
          if (Number(this.calcValue) < 0) {
            this.calcValue = Math.abs(this.calcValue)
          } else {
            this.calcValue = -Math.abs(this.calcValue)
          }
          break
        case 'sum':
          this.equalsRan = false
          this.prevOperation = 'sum'
          this.operation = 'sum'
          this.prevValue = this.calcValue + ' +'
          this.first = Number(this.calcValue)
          this.calcValue = '0'
          break
        case 'subtract':
          this.equalsRan = false
          this.prevOperation = 'subtract'
          this.operation = 'subtract'
          this.prevValue = this.calcValue + ' -'
          this.first = Number(this.calcValue)
          this.calcValue = '0'
          break
        case 'multiply':
          this.equalsRan = false
          this.prevOperation = 'multiply'
          this.operation = 'multiply'
          this.prevValue = this.calcValue + ' ×'
          this.first = Number(this.calcValue)
          this.calcValue = '0'
          break
        case 'divide':
          this.equalsRan = false
          this.prevOperation = 'divide'
          this.operation = 'divide'
          this.prevValue = this.calcValue + ' ÷'
          this.first = Number(this.calcValue)
          this.calcValue = '0'
          break
        case 'percent':
          this.operation = 'percent'
          this.equals('percent')
      }
    },
    equals(operation) {
      this.equalsRan = true
      switch (operation) {
        case 'sum':
          this.prevValue = ''
          this.second = Number(this.calcValue)
          this.calcValue = this.first + this.second
          break
        case 'subtract':
          this.prevValue = ''
          this.second = Number(this.calcValue)
          this.calcValue = this.first - this.second
          break
        case 'multiply':
          this.prevValue = ''
          this.second = Number(this.calcValue)
          this.calcValue = this.first * this.second
          break
        case 'divide':
          this.prevValue = ''
          this.second = Number(this.calcValue)
          this.calcValue = this.first / this.second
          break
        case 'percent':
          switch (this.prevOperation) {
            case 'multiply':
              this.prevValue = ''
              this.second = Number(this.calcValue)
              this.calcValue = (this.first * this.second) / 100
              break
            case 'sum':
              this.prevValue = ''
              this.second = Number(this.calcValue)
              this.calcValue = this.first + ((this.first * this.second) / 100)
              break
            case 'subtract':
              this.prevValue = ''
              this.second = Number(this.calcValue)
              this.calcValue = this.first - ((this.first * this.second) / 100)
              break
            case 'divide':
              this.prevValue = ''
              this.second = Number(this.calcValue)
              this.calcValue = this.first / ((this.first * this.second) / 100)
              break
          }
      }
    },
    addComma() {
      if (this.calcValue.includes('.')) {
        return null
      } else {
        this.calcValue += '.'
      }
    }
  }
}
</script>

<style scoped>
.calc-btn {
  @apply font-bold flex justify-center items-center bg-gray-300 text-2xl filter hover:brightness-90 transform transition ease-in-out cursor-pointer;
}

.calc-btn-wide {
  @apply font-bold flex justify-center items-center bg-gray-300 text-2xl filter hover:brightness-90 transform transition ease-in-out col-span-2 cursor-pointer;
}

.calc-btn-num {
  @apply font-bold flex justify-center items-center bg-gray-300 text-2xl filter hover:brightness-90 transform transition ease-in-out cursor-pointer;
}
</style>