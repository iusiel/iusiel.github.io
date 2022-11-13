// .vitepress/theme/index.js
import Layout from "./layouts/Layout.vue";
// import Home from "./components/Home.vue";
import Component404 from "./layouts/404.vue";

import "./../styles/index.styl";
export default {
    // root component to wrap each page
    Layout,

    // this is a Vue 3 functional component
    NotFound: Component404,

    enhanceApp({ app, router, siteData }) {
        // app is the Vue 3 app instance from `createApp()`.
        // router is VitePress' custom router. `siteData` is
        // a `ref` of current site-level metadata.
        // app.component("Home", Home);
    },

    setup() {
        // this function will be executed inside VitePressApp's
        // setup hook. all composition APIs are available here.
    },
};
