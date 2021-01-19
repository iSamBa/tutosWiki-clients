<template>
  <div
    class="bg-primary-100 bg-opacity-60 p-10 md:w-max w-80 rounded-3xl shadow-lg flex md:flex-row flex-col overflow-hidden items-center md:space-x-8"
  >
    <!-- Logo and presentation -->
    <div class="flex flex-col items-center justify-center">
      <img
        src="../../../public/login.png"
        alt=""
        srcset=""
        class="w-48 transform ease-in-out duration-500 hover:scale-110"
      />
      <h1 class="text-xl text-gray-800 font-bold my-2">Welcome to TutosWiki</h1>
      <p class="text-sm text-gray-600">
        Login to get the full access to the resouces
      </p>
    </div>
    <!-- Login form -->
    <div class="flex flex-col items-center justify-center">
      <form class="flex flex-col">
        <input
          class="outline-none focus:ring-2 focus:ring-gray-600 m-2 p-2 rounded-md h-8"
          type="email"
          placeholder="Email"
        />
        <input
          class="outline-none focus:ring-2 focus:ring-gray-600 m-2 p-2 rounded-md h-8"
          type="password"
          placeholder="Password"
        />

        <button
          class="m-2 h-8 w-72 hover:bg-secondary-200 border-secondary-200 border-2 rounded-md"
        >
          <div
            class="flex justify-center items-center hover:bg-secondary-200 text-secondary-200 hover:text-primary-100"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              ></path>
            </svg>
            Login
          </div>
        </button>
      </form>
      <p class="text-sm text-secondary-200">
        If you don't have an account
        <a href="/register"> Create one </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>