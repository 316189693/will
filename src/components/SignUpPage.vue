<template>
  <div id="login-section">
    <p>Sign Up</p>
    <div>
      <label for="account">Account</label>
      <input id="account" v-model="user.account" type="text"/>
    </div>
    <div>
      <label for="password">Password</label>
      <input id="password" v-model="user.password" type="password"/>
    </div>
    <div>
      <label for="first_name">First name</label>
      <input id="first_name" v-model="user.first_name" type="input"/>
    </div>
    <div>
      <label for="last_name">Last name</label>
      <input id="last_name" v-model="user.last_name" type="input"/>
    </div>
    <div>
      <input type="button" value="Sign Up" v-on:click="signUp(user)"/>
    </div>
    <p>
      {{error}}
    </p>
  </div>
</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex'

export default {
  created() {
    this.$store.commit("signup/setCreated", false);
    this.$watch(() => this.$store.state.signup.isCreated, (n_d, o_d) => {
      console.log("watch signup.isCreated "+'new data:' + n_d + ";old data:" + o_d);
      if (n_d) {
        this.$router.push({path: "/login"});
        this.$store.commit("signup/setCreated", false);
      }
    }),
    {immediate: true}
  },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.signup.user);
    const error = computed(() => store.state.signup.error);
    const signUp = (user) => {
      store.dispatch('signup/signup', user);
    };
    return {
      user,
      signUp,
      error
    };
  },

  name: "RegisterPage",

}
</script>

<style scoped>

</style>