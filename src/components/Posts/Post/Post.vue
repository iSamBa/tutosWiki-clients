<template>
  <div class="post">
    <h4 class="post-title">{{ post.title }}</h4>
    <h6 class="post-created">{{ post.createdAt }}</h6>
    <p class="post-content">{{ post.content }}</p>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style scoped>
.post {
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.8)
  );
}
</style>