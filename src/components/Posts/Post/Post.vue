<template>
  <div class="container-sm post">
    <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ post.createdAt }}</h6>
        <p class="card-text">{{ post.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style scoped>
.post {
  margin: 1%;
}
</style>