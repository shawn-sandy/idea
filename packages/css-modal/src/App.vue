<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <a href="#modal" class="text-blue-500 underline">Open Modal</a>
    <modal name="modal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla praesentium esse velit ipsa dolor expedita maiores distinctio quo iste consequuntur! Nihil minima voluptatum facilis id quos cupiditate, dolorum facere perspiciatis.
    </modal>
  </div>
</template>

<script>
import Modal from './components/Component.vue'

export default {
  name: 'app',
  components: {
    Modal
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
