import axios from "axios";
export default {
  props: ["url"],
  data: () => ({
    data: null,
    loading: true,
    message: "Loading...",
    error: false
  }),
  mounted() {
    axios
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
            this.$nextTick(function() {
              this.loading = false;
            });
          }
        } //   // log
      );
  },
  render() {
    const slot = this.$scopedSlots.default({
      loading: this.loading,
      data: this.data,
      message: this.message,
      error: this.error
    });

    return Array.isArray(slot) ? slot[0] : slot;
  }
};
