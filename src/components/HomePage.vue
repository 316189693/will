<template>
  Home
</template>

<script>
export default {
  data(){
    return {
      isAuthenticated:false
    };
  },
  computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route.params.username
    },
  },
  methods: {
    goToDashboard() {
      var isAuthenticated = false;
      if (isAuthenticated) {
        this.$router.push('/dashboard')
      } else {
        this.$router.push('/login')
      }
    },
  },
}
</script>

<style scoped>

</style>