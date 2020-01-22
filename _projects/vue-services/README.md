# vue-services

Vue wrapper components for loading and displaying data using [Axios.js](https://github.com/axios/axios), more info/docs coming soon

## Project setup

```
yarn install @shawnsandy/vue-services
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Usage (example)

**Quick example SFC component** (Not IE compatible)

```js
<data-provider url="https://jsonplaceholder.typicode.com/users">
  <template v-slot:default="{ data, message, loading, error }">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Message: {{ message }}</div>
    <div v-else>{{ data }}</div>
  </template>
</data-provider>
//..... add link to script
<script src="https://cdn.jsdelivr.net/npm/@shawnsandy/vue-services@0.1.1/dist/js/index.js"></script>

```

**Example renderless component** (IE compatible)

```js

<template>
  <div id="app">
    <data-provider url="https://cat.ceo/api/breed/husky/images">
      <template v-slot:default="{ loading, error, data, message }">
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">Message: {{ message }}</div>
        <div v-else>{{ data }}</div>
      </template>
    </data-provider>
  </div>
</template>

<script>
  import DataProvider from "@shawnsandy/vue-services/src/providers/Axios";
  export default {
    name: "AxiosProvider",
    "components": {
      DataProvider
    }
  };
</script>

```
