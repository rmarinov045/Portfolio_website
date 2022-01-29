<template>

  <div class="">

  <!-- Mobile -->

  <div class="p-4 lg:hidden mt-10 h-full flex flex-col gap-10 md:gap-20 md:h-full md:flex md:flex-col">

    <div class="flex w-full justify-evenly items-center md:mt-4">
      <div class="flex flex-col text-left">
        <h1 class="font-bold text-2xl">Radostin Marinov</h1>
        <p class="">Front end developer</p>
      </div>
      <div class="">
        <img src="../assets/personal.webp" alt="profile_pic" class="h-32 w-32 rounded-full">
      </div>
    </div>

    <div class="flex flex-col gap-1 bg-black rounded shadow-xl bg-opacity-95 text-white w-full ml-auto mr-auto p-4">
      <h1 class="font-bold text-xl">What I do</h1>
      <p class="text-xs text-gray-400">Technologies</p>

      <div class="grid grid-cols-3 gap-4 mt-4">
        <div class="flex flex-col justify-center items-center gap-2 bg-opacity-10 rounded shadow-xl bg-white p-3">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
               width="48" height="48"
               viewBox="0 0 48 48"
               style=" fill:#000000;">
            <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
            <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
            <path fill="#FFF"
                  d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
            <path fill="#EEE"
                  d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
          </svg>
          <p class="text-xs">HTML5</p>
          <div class="h-1/6 w-1/2 rounded-3xl p-0.5 border-gray-500 border-2">
            <div id="html-progress" class="h-full w-5/6 bg-green-500 rounded-3xl"></div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center gap-2 bg-opacity-10 rounded shadow-xl bg-white p-3">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
               width="48" height="48"
               viewBox="0 0 48 48"
               style=" fill:#000000;"><path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path></svg>
          <p class="text-xs">CSS3</p>
          <div class="h-1/6 w-1/2 rounded-3xl p-0.5 border-gray-500 border-2">
            <div id="css-progress" class="h-full w-5/6 bg-green-500 rounded-3xl"></div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center gap-2 bg-opacity-10 rounded shadow-xl bg-white p-3">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="48" height="48" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 154"><defs><linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="ssvg-id-tailwindcss-icona"><stop stop-color="#2298BD" offset="0%"/><stop stop-color="#0ED7B5" offset="100%"/></linearGradient></defs><path d="M128 0C93.867 0 72.533 17.067 64 51.2C76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z" fill="url(#ssvg-id-tailwindcss-icona)"/></svg>
          <p class="text-xs">TailwindCSS</p>
          <div class="h-1/6 w-1/2 rounded-3xl p-0.5 border-gray-500 border-2">
            <div id="tailwind-progress" class="h-full w-4/6 bg-green-500 rounded-3xl"></div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center gap-2 bg-opacity-10 rounded shadow-xl bg-white p-3">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
               width="48" height="48"
               viewBox="0 0 48 48"
               class=""
               style=" fill:#000000;"><path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path></svg>
          <p class="text-xs">JavaScript</p>
          <div class="h-1/6 w-1/2 rounded-3xl p-0.5 border-gray-500 border-2">
            <div id="js-progress" class="h-full w-2/3 bg-green-500 rounded-3xl"></div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center gap-2 bg-opacity-10 rounded shadow-xl bg-white p-3">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
               width="40" height="40"
               viewBox="0 0 32 32"
               fill="currentColor"
               class="text-green-500"
               style=""><path d="M 3 6 L 16 28 L 29 6 L 19 6 L 16 11.300781 L 13 6 L 3 6 z M 6.5 8 L 10.271484 8 L 16 18 L 21.728516 8 L 25.5 8 L 16 24.099609 L 6.5 8 z"></path></svg>
          <p class="text-xs">VueJS</p>
          <div class="h-1/6 w-1/2 rounded-3xl p-0.5 border-gray-500 border-2">
            <div id="vue-progress" class="h-full w-1/2 bg-green-500 rounded-3xl"></div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center gap-2 bg-opacity-10 rounded shadow-xl bg-white p-3">
          <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p class="text-xs">APIs</p>
          <div class="h-1/6 w-1/2 rounded-3xl p-0.5 border-gray-500 border-2">
            <div id="api-progress" class="h-full w-2/6 bg-green-500 rounded-3xl"></div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center gap-2 bg-opacity-10 rounded shadow-xl bg-white p-3">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
               width="40" height="40"
               viewBox="0 0 48 48"
               style=" fill:#000000;"><path fill="#21a366" d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"></path><path fill="#21a366" d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"></path></svg>
          <p class="text-xs">NodeJS</p>
          <div class="h-1/6 w-1/2 rounded-3xl p-0.5 border-gray-500 border-2">
            <div id="node-progress" class="h-full w-1/6 bg-green-500 rounded-3xl"></div>
          </div>
        </div>
      </div>

    </div>

    <div class="">...Learning and empowering every day!</div>

    <div class="flex flex-col bg-white shadow-2xl text-left p-4 w-full mb-5">
      <div class="flex items-center">
      <h1 class="font-bold">About myself:</h1>
        <p id='toggle-field' @click="editFunction" class="text-sm ml-auto cursor-pointer underline transform transition ease-in-out 150 font-bold">{{ editText }}</p>
      </div>
      <br/>
      <p id="text-field" class="text-sm break-words p-2 outline-none transform transition ease-in-out 50" :contenteditable="editable">{{ aboutText }}</p>
    </div>

  </div>

  <!-- Large screens -->

  <div class="hidden lg:block lg:mt-10 lg:p-2 xl:h-full">

    <div class="flex w-full justify-evenly items-center">
      <div class="flex flex-col text-left">
        <h1 class="font-bold text-4xl">Radostin Marinov</h1>
        <p class="2xl">Front end developer</p>
      </div>
      <div class="">
        <img src="../assets/personal.webp" alt="profile_pic" class="h-32 w-32 rounded-full bg-blue-50">
      </div>
    </div>

    <div class="flex flex-col gap-1 mt-10 bg-black rounded shadow-xl bg-opacity-95 text-white w-5/6 m-auto p-4">
      <h1 class="font-bold text-xl">What I do</h1>
      <p class="text-xs text-gray-400">Technologies</p>

      <div class="grid grid-cols-3 gap-4 mt-4">
        <div class="flex flex-col justify-center items-center gap-2 bg-opacity-10 rounded shadow-xl bg-white p-3">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
               width="48" height="48"
               viewBox="0 0 48 48"
               style=" fill:#000000;">
            <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
            <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
            <path fill="#FFF"
                  d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
            <path fill="#EEE"
                  d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
          </svg>
          <p class="text-xs">HTML5</p>
          <div class="h-1/6 w-1/2 rounded-3xl p-0.5 border-gray-500 border-2">
            <div id="html-progress" class="h-full w-5/6 bg-green-500 rounded-3xl"></div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center gap-2 bg-opacity-10 rounded shadow-xl bg-white p-3">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
               width="48" height="48"
               viewBox="0 0 48 48"
               style=" fill:#000000;"><path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path></svg>
          <p class="text-xs">CSS3</p>
          <div class="h-1/6 w-1/2 rounded-3xl p-0.5 border-gray-500 border-2">
            <div id="css-progress" class="h-full w-5/6 bg-green-500 rounded-3xl"></div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center gap-2 bg-opacity-10 rounded shadow-xl bg-white p-3">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="48" height="48" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 154"><rect x="0" y="0" width="256" height="154" fill="none" stroke="none" /><defs><linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="ssvg-id-tailwindcss-icona"><stop stop-color="#2298BD" offset="0%"/><stop stop-color="#0ED7B5" offset="100%"/></linearGradient></defs><path d="M128 0C93.867 0 72.533 17.067 64 51.2C76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z" fill="#22d3ee"/></svg>
          <p class="text-xs">TailwindCSS</p>
          <div class="h-1/6 w-1/2 rounded-3xl p-0.5 border-gray-500 border-2">
            <div id="tailwind-progress" class="h-full w-4/6 bg-green-500 rounded-3xl"></div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center gap-2 bg-opacity-10 rounded shadow-xl bg-white p-3">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
               width="48" height="48"
               viewBox="0 0 48 48"
               class=""
               style=" fill:#000000;"><path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path></svg>
          <p class="text-xs">JavaScript</p>
          <div class="h-1/6 w-1/2 rounded-3xl p-0.5 border-gray-500 border-2">
            <div id="js-progress" class="h-full w-2/3 bg-green-500 rounded-3xl"></div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center gap-2 bg-opacity-10 rounded shadow-xl bg-white p-3">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
               width="40" height="40"
               viewBox="0 0 32 32"
               fill="currentColor"
               class="text-green-500"
               style=""><path d="M 3 6 L 16 28 L 29 6 L 19 6 L 16 11.300781 L 13 6 L 3 6 z M 6.5 8 L 10.271484 8 L 16 18 L 21.728516 8 L 25.5 8 L 16 24.099609 L 6.5 8 z"></path></svg>
          <p class="text-xs">VueJS</p>
          <div class="h-1/6 w-1/2 rounded-3xl p-0.5 border-gray-500 border-2">
            <div id="vue-progress" class="h-full w-1/2 bg-green-500 rounded-3xl"></div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center gap-2 bg-opacity-10 rounded shadow-xl bg-white p-3">
          <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p class="text-xs">APIs</p>
          <div class="h-1/6 w-1/2 rounded-3xl p-0.5 border-gray-500 border-2">
            <div id="api-progress" class="h-full w-2/6 bg-green-500 rounded-3xl"></div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center gap-2 bg-opacity-10 rounded shadow-xl bg-white p-3">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
               width="40" height="40"
               viewBox="0 0 48 48"
               style=" fill:#000000;"><path fill="#21a366" d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"></path><path fill="#21a366" d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"></path></svg>
          <p class="text-xs">NodeJS</p>
          <div class="h-1/6 w-1/2 rounded-3xl p-0.5 border-gray-500 border-2">
            <div id="node-progress" class="h-full w-1/6 bg-green-500 rounded-3xl"></div>
          </div>
        </div>
      </div>

    </div>

    <div class="mt-20 mb-20">...Learning and empowering every day!</div>

    <div class="flex flex-col bg-white shadow-2xl text-left p-4 w-2/3 m-auto mb-10">
      <div class="flex items-center">
        <h1 class="font-bold text-2xl">About myself:</h1>
        <p id='toggle-field-big' @click="editFunction" class="ml-auto cursor-pointer underline transform transition ease-in-out 150 font-bold">{{ editText }}</p>
      </div>
      <br/>
      <p id="text-field-big" class="break-words p-2 outline-none transform transition ease-in-out 50" :contenteditable="editable">{{ aboutText }}</p>
    </div>

  </div>

  </div>

</template>

<script>
export default {
  name: "skillset_component",
  data() {
    return {
      editText: 'Edit',
      aboutText: 'Placeholder intro',
      editable: false
    }
  },
  methods: {
    editFunction() {
      if (this.editText === 'Edit') {
        this.editText = 'Save'
        this.editable = true
        document.getElementById('text-field').classList.add('ring-2', 'ring-green-500')
        document.getElementById('toggle-field').classList.add('text-green-500')
        document.getElementById('text-field-big').classList.add('ring-2', 'ring-green-500')
        document.getElementById('toggle-field-big').classList.add('text-green-500')
      } else {
        this.editText = 'Edit'
        this.editable = false
        document.getElementById('text-field').classList.remove('ring-2', 'ring-green-500')
        document.getElementById('toggle-field').classList.remove('text-green-500')
        document.getElementById('text-field-big').classList.remove('ring-2', 'ring-green-500')
        document.getElementById('toggle-field-big').classList.remove('text-green-500')
      }
    }
  }
}
</script>

<style scoped>

  #html-progress {
    animation-name: progress;
    animation-duration: 1s;
  }

  #css-progress {
    animation-name: progress;
    animation-duration: 1s;
  }

  #tailwind-progress {
    animation-name: progress;
    animation-duration: 1s;
  }

  #js-progress {
    animation-name: progress;
    animation-duration: 1s;
  }

  #vue-progress {
    animation-duration: 1s;
    animation-name: progress;
  }

  #api-progress {
    animation-duration: 1s;
    animation-name: progress;
  }

  #node-progress {
    animation-duration: 1s;
    animation-name: progress;
  }

  @keyframes progress {
    0% {
      width: 0;
    }
    100% {
    }
  }

</style>