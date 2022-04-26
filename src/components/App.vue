<template>
  <div class="page--top-app-bar">
    <ui-top-app-bar
        content-selector="#content-main"
        :type="2"
        :title="title"
        @nav="openDrawer = true"
    >
      <template #toolbar="{ toolbarItemClass }">



        <router-link  to="/"><ui-icon-button  :class="toolbarItemClass" icon="home"></ui-icon-button></router-link>
        <router-link  to="/login"><ui-icon-button  :class="toolbarItemClass" icon="login"></ui-icon-button></router-link>
        <router-link  to="/user/signup"><ui-icon-button  :class="toolbarItemClass" icon="person_add"></ui-icon-button></router-link>
      </template>
    </ui-top-app-bar>

    <ui-drawer v-model="openDrawer" type="modal">
      <ui-drawer-header>
        <ui-drawer-title>
          <div v-shape.small >
            <img alt="Vue logo" src="./../assets/logo.svg" style="height:80px">
          </div>
        </ui-drawer-title>
      </ui-drawer-header>
      <ui-drawer-content>
        <ui-list>
          <ui-item active @click="jump('/')">
            <ui-item-first-content>
              <ui-icon>arrow_back</ui-icon>
            </ui-item-first-content>
            <ui-item-text-content>Back</ui-item-text-content>
          </ui-item>
          <ui-list-divider></ui-list-divider>
          <ui-item @click="jump('/login')">
            <ui-item-first-content>
              <ui-icon>login</ui-icon>
            </ui-item-first-content>
            <ui-item-text-content>Log In</ui-item-text-content>
          </ui-item>
          <ui-item @click="jump('/dashboard')">
            <ui-item-first-content>
              <ui-icon>dashboard</ui-icon>
            </ui-item-first-content>
            <ui-item-text-content>DashBoard</ui-item-text-content>
          </ui-item>
          <ui-item @click="jump('/user/signup')">
            <ui-item-first-content>
              <ui-icon>person_add</ui-icon>
            </ui-item-first-content>
            <ui-item-text-content>Sign Up</ui-item-text-content>
          </ui-item>
        </ui-list>

      </ui-drawer-content>

    </ui-drawer>

    <div id="content-main">
      <router-view></router-view>
    </div>
  </div>





</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      title: 'Code Will',
      openDrawer: false
    };
  },
  methods:{

    jump(url) {
      this.openDrawer = false;
      this.$router.push({path:url});
    }
  }
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
