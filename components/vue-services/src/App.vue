<template>
  <div id="app">
    <data-provider url="https://jsonplaceholder.typicode.com/users">
      <template v-slot:default="{ loading, error, data, message }">
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">Message: {{ message }}</div>
        <div v-else>{{ data }}</div>
      </template>
    </data-provider>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'
  import DataProvider from "./providers/Axios";
  export default {
    name: "AxiosProvider",
    "components": {
      DataProvider
    }
  };
</script>
