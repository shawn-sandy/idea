<template>
  <div>
    <slot :data="data" :message="message" :loading="loading" :error="error">
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">Message: {{ message }}</div>
      <div v-else>{{ data }}</div>
    </slot>
  </div>
</template>
<script>

  import Axios from 'axios'

  export default {
    name: "AxisoService",
    props: {
      url: {
        type: String,
        default: 'https://jsonplaceholder.typicode.com/users'
      },
    },
    data: function () {
      return {
        data: [],
        loading: true,
        message: null,
        error: null
      }
    },
    created() {
      Axios
        .get(this.url)
        .then(({ data }) => {
          this.data = data;
          this.loading = false;
        })
        .catch(err => {
          //console.log("Sorry error", err);
          this.error = true;
          this.$nextTick(() => {
            this.message = err;
            this.loading = false;
          });
        })
        .finally(
          () => {
            if (this.error) {
              this.$nextTick(function () {
                this.loading = false;
              });
            }
          } //   // log
        );

    },


  }

</script>
