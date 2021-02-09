<template>
  <div
    class="container"
  >
    <!-- Logo and presentation -->
    <div class="flex flex-col items-center justify-center">
      <img
        src="../../../public/login.png"
        alt=""
        srcset=""
        class="logo"
      />
      <h1 class="brand">Welcome to TutosWiki</h1>
      <p class="brand-text">
        Registration page
      </p>
    </div>
    <!-- Login form -->
    <div class="flex flex-col items-center justify-center">
      <form class="flex flex-col">
        <input
          class="user-input"
          type="text"
          placeholder="User name"
        />
        <input
          class="user-input"
          type="email"
          placeholder="Email"
        />
        <input
          class="user-input"
          type="password"
          placeholder="Password"
        />

        <button
          class="btn"
        >
          <div
            class="btn-content"
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
            Register
          </div>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  @apply bg-primary-100 bg-opacity-60 p-10 lg:w-max w-80 rounded-3xl shadow-lg flex lg:flex-row flex-col overflow-hidden items-center lg:space-x-8;
}
.logo {
  @apply w-52 p-1 transform ease-in-out duration-700 hover:scale-110;
}
.btn {
  @apply m-2 w-72 hover:bg-secondary-200 border-secondary-200 border-2 rounded-md;
}
.btn-content {
  @apply flex py-2 justify-center items-center hover:bg-secondary-200 text-secondary-200 hover:text-primary-100;
}
.brand {
  @apply text-xl text-gray-800 font-bold my-2;
}
.brand-text{
  @apply text-sm pt-1 text-gray-600;
}
.user-input{
  @apply outline-none text-primary-200 py-5 focus:ring-2 focus:ring-gray-600 m-2 px-2 rounded-md h-8;
}
</style>