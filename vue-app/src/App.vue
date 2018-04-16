<template>
  <div id="app">
    <CookieMessage />
    <img src="./assets/logo.png">
    <HelloWorld msg="Hello Vue.js Vienna Meetup!" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CookieMessage from './components/CookieMessage.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    CookieMessage
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
  margin-top: 100px;
}
</style>
