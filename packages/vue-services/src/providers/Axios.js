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
      })
      .catch(err => {
        //console.log("Sorry error", err);
        this.$nextTick(() => {
          this.error = true;
          this.message = err;
        });
      })
      .finally(
        () => {
          if (this.error) {
            this.loading = false;
            this.message = "Sorry an Error has occurred";
          }
        } //   // log
      );
  },
  render() {
    const slot = this.$scopedSlots.default({
      loading: !this.loading,
      data: this.data,
      message: this.message,
      error: this.error
    });

    return Array.isArray(slot) ? slot[0] : slot;
  }
};
