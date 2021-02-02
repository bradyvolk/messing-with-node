<template>
  <div id="app">
    <div>
      <b-navbar toggleable="md" type="dark" variant="dark">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand to="/"
          ><img src="./assets/b-logo.png" style="height: 50px"
        /></b-navbar-brand>
        <b-collapse is-nav id="nav_collapse"
          >posts-manager
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/blog">Blogs</b-nav-item>
            <b-nav-item to="/demos">Demos</b-nav-item>
            <b-nav-item to="/posts-manager">Post Manager</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <!-- routes will be rendered here -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeUser: null,
    };
  },
  async created() {
    await this.refreshActiveUser();
  },
  watch: {
    // everytime a route is changed refresh the activeUser
    $route: "refreshActiveUser",
  },
  methods: {
    login() {
      this.$auth.loginRedirect();
    },
    async refreshActiveUser() {
      this.activeUser = await this.$auth.getUser();
    },
    async logout() {
      await this.$auth.logout();
      await this.refreshActiveUser();
      this.$router.push("/");
    },
  },
};
</script>

<style>
@import "https://www.w3schools.com/w3css/4/w3.css";
@import "https://fonts.googleapis.com/css?family=Raleway";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


