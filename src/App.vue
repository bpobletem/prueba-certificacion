<template>
  <NavBar></NavBar>
  <router-view></router-view>
  <FooterComponent></FooterComponent>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterComponent from '@/components/FooterComponent.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    NavBar,
    FooterComponent
  },
  methods: {
    ...mapActions('auth', ['fetchUsersFromJson'])
  },
  created() {
    this.fetchUsersFromJson()
  },
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none
}

nav a.router-link-exact-active {
  color: #4c85ff;
}

</style>
