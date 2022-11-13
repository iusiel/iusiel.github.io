<script>
export default {
  name: "Header",

  props: ["activeLink", "themeColor"],

  methods: {
    toggleTheme() {
      this.$emit("toggleTheme");
    },
  },

  computed: {
    toggleButtonText() {
      return this.themeColor === "default" ? "Dark mode" : "Normal";
    },
  },
};
</script>

<template>
  <nav class="bg-yellow nav-main-menu">
    <div class="container">
      <div class="logo-container text-center">
        <a class="fs-large fw-black text-yellow2 logo" href="/">IUSIEL</a>
      </div>
      <p style="text-align: center">
        Developing web applications using PHP. I mainly use Laravel for my
        projects. I am currently learning Symfony, Vue.JS, and Jamstack.
      </p>
      <ul class="main-menu">
        <li>
          <a
            :class="{
              active: activeLink === 'home',
              'main-menu__link': true,
            }"
            href="/"
            >Home</a
          >
        </li>
        <li>
          <a
            :class="{
              active: activeLink === 'about',
              'main-menu__link': true,
            }"
            href="/about-me"
            >About Me</a
          >
        </li>
        <li>
          <a
            :class="{
              active: activeLink === 'random',
              'main-menu__link': true,
            }"
            href="/random-things"
            >Random Things</a
          >
        </li>
        <li>
          <button @click="toggleTheme" class="main-menu__toggle-theme">
            {{ toggleButtonText }}
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>
