<template>
  <p>Home</p>
  <p>shift theme</p>
  <button v-on:click="darkTheme()">dark</button>
  <button v-on:click="greenTheme()">green</button>
  <button v-on:click="redTheme()">red</button>
  <button v-on:click="lightTheme()">light</button>
</template>

<script>
let theme = "light";
const themes = {};

themes[theme] = document.querySelector("#theme");
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
  mounted() {
    this.shiftTheme(theme);
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
    async darkTheme(){
       this.shiftTheme("dark");
    },
    async lightTheme(){
      this.shiftTheme("light");
    },
    async greenTheme(){
      this.shiftTheme("green");
    },
    async redTheme(){
      this.shiftTheme("red");
    },
    async shiftTheme(newTheme) {
      const themeElement = document.querySelector("#theme");
      console.log(themeElement);
      if (themeElement) {
        themeElement.remove();
      }

      if (themes[newTheme]) {

        document.head.appendChild(themes[newTheme]);

        return;
      }

      if (newTheme === "dark") {


        import(/* webpackChunkName: "dark" */ "../styles/styles.scss?dark").then(() => {
          themes[newTheme] = document.querySelector("#theme");

        });
      }
      if (newTheme === "red") {


        import(/* webpackChunkName: "red" */ "../styles/styles.scss?red").then(() => {
          themes[newTheme] = document.querySelector("#theme");

        });
      }
      if (newTheme === "green") {


        import(/* webpackChunkName: "green" */ "../styles/styles.scss?green").then(() => {
          themes[newTheme] = document.querySelector("#theme");

        });
      }
    }
  },
}
</script>

<style scoped>

</style>