<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div id="wrapper">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <Nav/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/Nav.vue'


export default {
  name: 'app',
  components: {
    HelloWorld,
    Nav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background: #11998e;
  background-image: url(assets/bg.jpg), linear-gradient(45deg, #11998e 15%, #38ef7d 85%);
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
}
#wrapper {
  width: 64em;
  max-width: calc(100% - 4em);
  margin: 0 auto;
}

a {
  transition: color 0.2s ease, border-bottom 0.2s ease;
  text-decoration: none;
  border-bottom: dotted 1px;
  color: inherit;
}
</style>
