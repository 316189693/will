<template>
  <div id="login-section">
    <p >Sign Up</p>

    <ui-form class="conditions-form" nowrap action-align="center" style="margin-left: 200px;">
      <template #default="{ itemClass, actionClass }">
        <ui-form-field>
          <ui-grid >
              <ui-grid-cell >
                <ui-form-field :class="[itemClass, 'required']">
                  <ui-textfield inputType="text" v-model="user.account">
                    UserName
                  </ui-textfield>
                </ui-form-field>
              </ui-grid-cell>
              <ui-grid-cell >
                <ui-form-field :class="itemClass">
                  <ui-textfield inputType="password" v-model="user.password">
                    Password
                  </ui-textfield>
                </ui-form-field>
              </ui-grid-cell>
          </ui-grid>
        </ui-form-field>
        <ui-form-field>
          <ui-grid>
            <ui-grid-cell >
              <ui-form-field :class="itemClass">
                <ui-textfield inputType="text" v-model="user.first_name">
                  First Name
                </ui-textfield>
              </ui-form-field>
            </ui-grid-cell>
            <ui-grid-cell >
              <ui-form-field :class="itemClass">
                <ui-textfield inputType="text" v-model="user.last_name">
                  Last Name
                </ui-textfield>
              </ui-form-field>
            </ui-grid-cell>

          </ui-grid>
        </ui-form-field>
        <ui-form-field>
          <ui-grid>
            <ui-grid-cell >
              <ui-form-field :class="actionClass">
                <ui-button raised @click="signUp(user)">Sign Up</ui-button>
                <ui-button outlined @click="reset()">Reset</ui-button>
              </ui-form-field>
            </ui-grid-cell>
          </ui-grid>

        </ui-form-field>
      </template>
    </ui-form>
    <p style="color:red">
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
    const reset = ()=>{
      store.commit("signup/reset", "")
    }

    return {
      user,
      signUp,
      error,
      reset
    };
  },

  name: "RegisterPage",

}
</script>

<style scoped >

</style>