<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div id="wrapper">

      <HelloWorld style="color:white;" msg="Welcome to Your Vue.js App"/>

      <Nav/>

      <div id="main">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <HelloWorld msg="Welcome to Your Vue.js App"/>

      </div>

      <footer id="footer">
        <p class="copyright">© Climate Advocacy Toolkit. Design: <a href="https://github.com/IBM-AR-CARD">Team 13</a>.</p>
      </footer>

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
  background-image: url(assets/bg.jpg), linear-gradient(45deg, #38ef7d 15%, #11998e 85%);
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 17pt;
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

#nav + #main {
  padding-top: 4.25em;
}

#main {
  background-color: #ffffff;
  color: #636363;
  border-radius: 0.25em;
}
*, *:before, *:after {
  box-sizing: inherit;
}


@media screen and (max-width: 1680px) {

  body, input, select, textarea {
    font-size: 14pt;
  }

}

@media screen and (max-width: 1280px) {

  body, input, select, textarea {
    font-size: 12pt;
  }

}

@media screen and (max-width: 360px) {

  body, input, select, textarea {
    font-size: 11pt;
  }

}

#footer {
  padding: 5em 5em 3em 5em;
  color:white;
}

#footer .copyright {
  width: 100%;
  margin: 2.5em 0 2em 0;
  font-size: 0.8em;
  text-align: center;
}
</style>
