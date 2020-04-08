<template>
  <div id="app">
    <router-view class="page-view"></router-view>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {};
  },
  watch: {
    "$store.state.msg"(val) {
      if (val) {
        // do something
        this.$store.commit("msg", "");
      }
    },
    "$store.state.error"(val) {
      if (val) {
        alert(val);
        this.$store.commit("error", "");
      }
    }
  }
};
</script>
<style lang="scss">
body {
  padding: 0;
  margin: 0;
  color: #4d4d4d;
  p {
    margin: 0;
    padding: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
}
</style>
