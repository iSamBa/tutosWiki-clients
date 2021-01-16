<template>
  <div class="row shadow bg-white">
    <div class="col-sm-5">
      <img
        src="https://www.flaticon.com/svg/vstatic/svg/3135/3135715.svg?token=exp=1610756293~hmac=f971117cc5026fd5570ade7412312808"
        alt="login-image"
        srcset=""
      />
    </div>
    <div class="col-sm-7">
      <form>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Your email"
          />
          <input type="password" class="form-control" placeholder="Password" />
        </div>
        <button type="submit" class="btn btn-block btn-dark">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
input {
  margin: 3% 0;
}
img {
  width: 60%;
  margin: 10%;
}

button {
  margin: 30px 0;
}

.row {
  border-radius: 10px;
  position: absolute;
  margin: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 90%;
}

.col-sm-7,
.col-sm-5 {
  padding: 10% 3%;
}
</style>