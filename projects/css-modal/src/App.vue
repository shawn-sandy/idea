<template>
  <div id="app">
    <a href="#modal" class="text-blue-500 underline">Open Modal</a>
    <modal name="modal" class="test">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nostrum voluptas voluptates. Perferendis itaque laborum dicta suscipit voluptatem id repudiandae aut nemo reiciendis mollitia maiores cum quas culpa, quae placeat!
    </modal>
  </div>
</template>

<script>
import Modal from './components/Index.vue'

export default {
  name: 'app',
  components: {
    Modal
  }
}
</script>

