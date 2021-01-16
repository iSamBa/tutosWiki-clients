<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <img src="../../../public/login.png" alt="" srcset="" />
        <h2>Welcome to TutosWiki</h2>
      </div>
      <div class="col-lg-6">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" class="form-text text-muted"
              >We'll never share your email with anyone else.</small
            >
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1"
              >Check me out</label
            >
          </div>
          <button type="submit" class="btn btn-dark">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getCurrentYear: () => {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
.container {
  width: 80%;
  height: 80%;
  margin: 0;
  padding: 0;
  border-radius: 3rem;
  background: linear-gradient(
    to left bottom,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.7)
  );
}

.row {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.col-lg-6 {
  padding: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
}

img {
  margin: 0;
  padding: 0;
}
</style>