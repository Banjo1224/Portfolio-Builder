<template>
  <div id="app">
    <Navigation id='nav'/>
    <img id='profile' alt="Brandon Bates" src="../../toBuild/profile.jpeg">
    <p id='summary'>{{summary}}</p>
    <Projects id='list' />
    <Footer id="footer" />
  </div>
</template>

<script>
import Navigation from './components/navigation.vue'
import Projects from './components/projects.vue'
import Footer from './components/footer.vue'
import summary from '../../toBuild/data.js'

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
  background-color: #3d85c6;
  color: inherit;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-bottom: 10px;
  background-color: #cfe0fc;
}
#summary {
  margin: 50px;
}
#profile {
  height: 200px;
  width: auto;
  border-radius: 100%;
  border: 3px solid blanchedalmond;
  background-color: #3d85c6;
  margin-top: 10px;
}
</style>
