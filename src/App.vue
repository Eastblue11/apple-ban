<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <hello-world/> -->

<money></money>
<ban></ban>
<apple></apple>
  </div>
</template>

<script>
import ban from './page/ban'
import apple from './page/apple'
import money from './page/money'

export default {
  name: 'app',
  components: {
    money,
    ban,
    apple
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
</style>
