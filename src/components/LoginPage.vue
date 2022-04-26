<template>
  <div id="login-section">
    <p>Log In</p>
   <ui-form  type="1" item-margin-bottom="16" action-align="center">
     <template #default="{actionClass }">
          <ui-form-field :class="[actionClass,'required']">
            <ui-textfield inputType="text" v-model="user.account">
              UserName or Email
              <template #before>
                <ui-textfield-icon>account_box</ui-textfield-icon>
              </template>
            </ui-textfield>
          </ui-form-field>
          <ui-form-field :class="[actionClass, 'required']">
            <ui-textfield inputType="password" v-model="user.password">
              Password
              <template #before>
                <ui-textfield-icon>key</ui-textfield-icon>
              </template>
            </ui-textfield>
          </ui-form-field>
          <ui-form-field :class="actionClass">
            <ui-button icon="login" raised @click="login(user)">Log In</ui-button>
          </ui-form-field>

     </template>
   </ui-form>

    <p >
      <label style="color: red">{{error}}</label>
    </p>
  </div>
</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex'

export default {
  created() {
    this.$store.commit("login/setAuthenticate", false);
    this.$watch(() => this.$store.state.login.isAuthenticate, (n_d, o_d) => {
      console.log("watch login.isAuthenticate "+'new data:' + n_d + ";old data:" + o_d);
      if (n_d) {
        this.$router.push({path: "/dashboard"});
        this.$store.commit("login/setAuthenticate", false);
      }
    }),
    {immediate: true}
  },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.login.user);
    const error = computed(() => store.state.login.error);
    const login = (user) => {
      store.dispatch('login/login', user);
    };
    return {
      user,
      login,
      error
    };
  },

  name: "LoginPage",

}
</script>

<style scoped>

</style>