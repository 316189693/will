<template>
  <div id="login-section">
    <div>
      <label for="account">Account</label>
      <input id="account" v-model="user.account" type="text"/>
    </div>
    <div>
      <label for="password">Password</label>
      <input id="password" v-model="user.password" type="password"/>
    </div>
    <div>
      <input type="button" value="login" v-on:click="login(user)"/>
    </div>
  </div>
</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex'

export default {
  created() {
    const store = useStore();
    this.$watch(() => store.state.login.isAuthenticate, (n_d, o_d) => {
      console.log("watch login.isAuthenticate "+'new data:' + n_d + ";old data:" + o_d);
      if (n_d) {
        this.$router.push({path: "/"});
        store.commit("login/setAuthenticate", false);
      }
    }),
    {immediate: true}
  },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.login.user);
    const login = (user) => {
      store.dispatch('login/login', user);
    };
    return {
      user,
      login,
    };
  },

  name: "LoginPage",

}
</script>

<style scoped>

</style>