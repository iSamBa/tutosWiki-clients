<template>
  <div class="post-bg">
    <div class="bg-primary-200 text-white p-2" id="post-header">
      <h4 class="text-2xl my-2">{{ post.title }}</h4>
      <h6 class="text-xs pb-3">
        {{ getPostDateTime }}
      </h6>
    </div>
    <div id="post-content">
      <p class="py-3 mx-2">{{ post.content }}</p>
    </div>
    <div class="flex p-3 justify-end" id="post-actions">
      <button class="action hover:bg-green-800">
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          ></path>
        </svg>
      </button>
      <button @click="removeCurrentPost" class="action hover:bg-red-700">
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["post"],
  methods: {
    ...mapActions({ removePost: "posts/removePost" }),
    removeCurrentPost() {
      this.removePost({ id: this.post._id });
    },
  },
  computed: {
    getPostDateTime() {
      const date = new Date(this.post.createdAt);
      return (
        date.toLocaleDateString("en-GB", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }) +
        " " +
        date.toLocaleTimeString("en-US")
      );
    },
  },
};
</script>

<style scoped>
.action {
  @apply flex items-center justify-center py-1 text-sm mx-2 bg-gray-800 text-primary-100 w-14 rounded-full transform ease-in-out duration-300 hover:scale-125 hover:shadow-md focus:outline-none;
}

.post-bg {
  @apply bg-white shadow-lg rounded-xl overflow-hidden text-secondary-200 text-left flex flex-col justify-start;
}
</style>