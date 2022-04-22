<template>
  <img alt="Vue logo" src="./../assets/logo.svg" style="height:150px;text-align: left; display: block; margin-bottom: 10px;margin-left: 100px;">
  <div>
    <p>
      <router-link class="dd" to="/">Go to Home</router-link>
      <router-link class="dd" to="/login">Log In</router-link>
      <router-link class="dd" to="/user/signup">Sign Up</router-link>
    </p>

  </div>

  <router-view></router-view>

</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
.dd {
  margin-right: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
