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
    <div :class="['body', theme === 'default' ? '' : 'dark-mode']">
        <Header
            @toggleTheme="updateTheme"
            :activeLink="$frontmatter.activeLink"
            :themeColor="theme"
        />
        <div class="main__container">
            <main>
                <div class="container">
                    <Content />
                </div>
            </main>
            <Footer />
        </div>
    </div>
</template>
