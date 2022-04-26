<template>
  <p>Dashboard {{ token }} {{ user.user_id }} {{ user.user_username }}</p>
  <p>
    user id: {{ user.user_id }}</p>
  <p> user name: {{ user.user_username }}</p>
  <p> user first name: {{ user.user_first_name }}</p>
  <p> user last name: {{ user.user_last_name }}
  </p>
  <p style="color: red">{{error}}</p>
</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex'

export default {

  setup() {
    let store = useStore();
    const token = localStorage.getItem("htjy_token");
    const user = computed(() => store.state.user.user);
    const error = computed(() => store.state.user.error);
    return {
      token,
      user,
      error
    }
  },

  mounted() {
    this.$store.dispatch('user/detail', localStorage.getItem("htjy_user_id"));
  },


}
</script>

<style scoped>

</style>