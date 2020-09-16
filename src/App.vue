<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <component2 variabel2="tes variabel2"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Component2 from './components/Component2.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Component2,
  }
}
</script>

<style>

</style>
