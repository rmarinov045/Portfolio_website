<template>
  <div class="to-do h-full flex-grow">

    <!-- Mobile -->

    <div class="lg:hidden w-full p-4 h-full">

      <h1 class="text-3xl font-bold">To do list</h1>

      <div class="w-full h-full rounded-xl mt-10 p-2 pl-4 pr-4">

        <div class="flex items-center">
          <h2 class="text-xl font-bold">{{ taskTitle }}</h2>
          <button type="submit" @click="toggleAddTask" :class="addTaskButton">{{ addTaskText }}</button>
        </div>

        <div v-show="!isAddTaskClicked" class="flex flex-col items-start gap-4">
          <div class="w-full flex flex-col items-start pl-4 p-2" v-for="task in tasks" :key="task.id">
            <div class="flex flex-col items-start border-2 border-black w-full pl-4 pr-4 p-1 mt-4 gap-4 rounded-2xl pb-4">
              <p class="font-bold border-b-2 border-black w-full flex justify-center items-center pb-2">{{ task.taskName }}
                <svg @click="removeTask(task.taskID)" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer h-6 w-6 text-red-500 ml-auto" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </p>
              <p class="text-sm font-bold flex items-center w-full"> {{ task.taskPlace }}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </p>
              <hr class="w-full"/>
              <p class="text-sm flex items-center w-full">{{ task.taskDescription }}
                <svg xmlns="http://www.w3.org/2000/svg" class="ml-auto h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </p>
            </div>
          </div>
        </div>

        <!-- Add task interface -->

        <div v-show="isAddTaskClicked" class="">
          <hr class="mb-4 mt-2"/>
          <form class="flex flex-wrap gap-10 w-full">
            <label class="flex flex-col justify-start items-start gap-2 font-bold">Name<input required
                                                                                              id="name-input"
                                                                                              v-model="taskName"
                                                                                              class="p-2 border-2 text-sm rounded border-black focus:outline-none focus:border-green-500 transform transition ease-in-out 150"
                                                                                              type="text"
                                                                                              placeholder="Task name"></label>
            <label class="flex flex-col justify-start items-start gap-2 font-bold">Place<input required
                                                                                               id="place-input"
                                                                                               v-model="taskPlace"
                                                                                               class="p-2 border-2 text-sm rounded border-black focus:outline-none focus:border-green-500 transform transition ease-in-out 150"
                                                                                               type="text"
                                                                                               placeholder="Task place"></label>
            <div class="w-full">
              <label class="flex flex-col justify-start items-start gap-2 font-bold">Description<textarea
                  v-model="taskDescription"
                  class="w-full p-2 border-2 text-sm rounded border-black focus:outline-none focus:border-green-500 transform transition ease-in-out 150"
                  type="text" placeholder="Enter the task's description here..."></textarea></label>
            </div>
          </form>
          <div class="">
            <button @click="addTask(taskName, taskPlace, taskDescription)" type="submit"
                    class="mt-10 bg-green-500 pl-4 pr-4 p-2 hover:opacity-75 rounded text-white font-bold transform transition ease-in-out 150">
              Submit
            </button>
          </div>
        </div>

        <p class="mt-20">... made with love by</p>

      </div>



    </div>

    <!-- Large Screens -->

    <div class="lg:block hidden w-full h-full p-4">

      <h1 class="text-3xl font-bold mt-24 mb-24">To do list</h1>

      <div class="w-full h-full rounded-xl mt-10 p-2 pl-4 pr-4">

        <div class="flex items-center">
          <h2 class="text-xl font-bold">{{ taskTitle }}</h2>
          <button type="submit" @click="toggleAddTask" :class="addTaskButton">{{ addTaskText }}</button>
        </div>

        <hr class="mt-10"/>

        <div v-show="!isAddTaskClicked" class="grid grid-cols-4 items-start gap-4 items-center mt-10">
          <div class="flex items-start pl-4 p-2 min-w-0 break-all" v-for="task in tasks" :key="task.taskID">
            <div class="flex flex-col items-start bg-gray-200 w-full shadow-xl pl-4 pr-4 p-2 mt-4 gap-4 rounded-2xl pb-4 break-words">
              <p class="font-bold border-b-2 border-black w-full flex justify-center items-center pb-2">{{ task.taskName }}
                <svg @click="removeTask(task.taskID)" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer h-6 w-6 text-red-500 ml-auto" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </p>
              <p class="text-sm font-bold flex items-center w-full"> {{ task.taskPlace }}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </p>
              <hr class="w-full"/>
              <p class="text-sm flex items-center w-full">{{ task.taskDescription }}
                <svg xmlns="http://www.w3.org/2000/svg" class="ml-auto h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </p>
            </div>
          </div>
        </div>

        <!-- Add task interface -->

        <div v-show="isAddTaskClicked" class="mt-10">
          <form class="flex flex-wrap gap-10 w-full justify-center">
            <div class="flex w-full flex-col">
            <label class="flex flex-col justify-start items-start gap-2 font-bold">Name<input required
                                                                                              v-model="taskName"
                                                                                              class="w-1/3 p-2 border-2 text-sm rounded border-black focus:outline-none focus:border-green-500 transform transition ease-in-out 150"
                                                                                              type="text"
                                                                                              placeholder="Task name"></label>
            </div>
            <div class="flex w-full flex-col">
              <label class="flex flex-col justify-start items-start gap-2 font-bold">Place<input required
                                                                                               v-model="taskPlace"
                                                                                               class=" w-1/3 p-2 border-2 text-sm rounded border-black focus:outline-none focus:border-green-500 transform transition ease-in-out 150"
                                                                                               type="text"
                                                                                               placeholder="Task place"></label>
            </div>
              <div class="w-full">
              <label class="flex flex-col items-start gap-2 font-bold">Description<textarea
                  v-model="taskDescription"
                  class="w-1/2 h-32 p-2 border-2 text-sm rounded border-black focus:outline-none focus:border-green-500 transform transition ease-in-out 150"
                  type="text" placeholder="Enter the task's description here..."></textarea></label>
            </div>
          </form>
          <div class="">
            <button @click="addTask(taskName, taskPlace, taskDescription)" type="submit"
                    class="mt-10 bg-green-500 pl-4 pr-4 p-2 hover:opacity-75 rounded text-white font-bold transform transition ease-in-out 150">
              Submit
            </button>
          </div>
        </div>

        <p class="mt-96">... made with love by</p>

      </div>



    </div>

  </div>
</template>

<script>
export default {
  name: "ToDo",
  data() {
    return {
      addTaskText: 'Add Task',
      addTaskButton: 'hover:opacity-75 bg-green-500 ml-auto p-2 rounded font-bold text-white',
      isAddTaskClicked: false,
      taskName: '',
      taskPlace: '',
      taskDescription: '',
      taskTitle: 'Current Tasks:',
      tasks: []
    }
  },
  methods: {
    toggleAddTask() {
      this.isAddTaskClicked = !this.isAddTaskClicked
      if (this.isAddTaskClicked) {
        this.addTaskText = 'Close'
        this.addTaskButton = 'hover:opacity-75 bg-red-700 ml-auto p-2 rounded font-bold text-white'
        this.taskTitle = 'Add Task'
        document.getElementById('name-input').classList.remove('border-red-500')
        document.getElementById('place-input').classList.remove('border-red-500')
      } else {
        this.addTaskText = 'Add Task'
        this.addTaskButton = 'hover:opacity-75 bg-green-500 ml-auto p-2 rounded font-bold text-white'
        this.taskTitle = 'Current tasks:'
      }
    },
    addTask(name, place, description) {
      class Task {
        constructor(taskName, taskPlace, taskDescription, taskID) {
          this.taskName = taskName
          this.taskPlace = taskPlace
          this.taskDescription = taskDescription
          this.taskID = taskID
        }
      }

      if (name.length || place.length === 0) {
        if (name.length === 0 && place.length === 0) {
          document.getElementById('name-input').classList.add('border-red-500')
          document.getElementById('place-input').classList.add('border-red-500')
          return
        } else if (name.length === 0) {
          document.getElementById('name-input').classList.add('border-red-500')
          return;
        } else if (place.length === 0) {
          document.getElementById('place-input').classList.add('border-red-500')
          return;
        }
      }

      let taskID = Math.random() * 100
      let task = new Task(name, place, description, taskID)
      this.tasks.push(task)

      this.isAddTaskClicked = false
      this.addTaskText = 'Add Task'
      this.addTaskButton = 'hover:opacity-75 bg-green-500 ml-auto p-2 rounded font-bold text-white'
      this.taskTitle = 'Current tasks:'
      this.taskName = ''
      this.taskPlace = ''
      this.taskDescription = ''
    },
    removeTask(id) {
        for (let items of this.tasks) {
            if (id === items.taskID) {
              this.tasks = this.tasks.filter(task => task.taskID !== items.taskID)
            }
        }
        return this.tasks
    }
  }
}
</script>

<style scoped>

</style>