<script>
export default {
    name: "Footer",
    data: function () {
        return {
            copyright: "",
        };
    },

    mounted() {
        const date = new Date();
        this.copyright = `Copyright © ${date.getFullYear()} Iusiel`;
    },
};
</script>

<template>
    <footer>
        <div class="footer__content">
            <div>Created with VitePress.</div>
            <a
                class="footer__link"
                href="https://github.com/iusiel"
                target="_blank"
                rel="noopener"
                >Github</a
            >
            <div>{{ copyright }}</div>
        </div>
    </footer>
</template>
