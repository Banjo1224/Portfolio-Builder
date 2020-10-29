<template>
  <div id="app">
    <Navigation id='nav'/>
    <!-- <img id='profile' alt="Brandon Bates" src="./assets/profile.jpeg"> -->
    <p id='summary'>{{DATA.description}}</p>
    <Projects id='list' />
    <Footer id="footer" />
  </div>
</template>

<script>
import Navigation from './components/navigation.vue'
import Projects from './components/projects.vue'
import Footer from './components/footer.vue'
import DATA from '../../toBuild/data.json';

export default {
  name: 'App',
  components: {
    Navigation,
    Projects,
    Footer
  }
}
</script>

<style>
a, a:visited, a:hover {
  color: black;
}
#nav {
  background-color: "DATA.nav_color";
  color: inherit;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-bottom: 10px;
  background-color: "DATA.bg_color";
}
#summary {
  margin: 50px;
}
#profile {
  height: 200px;
  width: auto;
  border-radius: 100%;
  border: 3px solid blanchedalmond;
  background-color: "DATA.nav_color";
  margin-top: 10px;
}
</style>
