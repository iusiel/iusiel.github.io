<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },

  data: function () {
    return {
      theme: "default",
    };
  },

  mounted() {
    this.theme =
      localStorage.getItem("colorTheme") !== null
        ? localStorage.getItem("colorTheme")
        : "default";
  },

  methods: {
    updateTheme() {
      this.theme = this.theme === "default" ? "dark-mode" : "default";
      localStorage.setItem("colorTheme", this.theme);
    },
  },
};
</script>

<template>
  <div class="main__404">
    <h1 class="header__404">404 :(</h1>
    <p class="text__404">
      The page you are trying to access does not exist. Make sure that you have
      typed the URL properly.
    </p>
    <a class="button__404" href="/">Go back to home page</a>
  </div>
</template>
