<template>
  <div id="app">
    <data-provider url="https://dogcata.ceo/api/breed/husky/images">
      <template v-slot:default="{ loading, error, data, message}">
        <div v-if="loading">{{ message }}</div>
        <div v-else-if="error">Message: {{ error }}</div>
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

<style lang="scss">

</style>
