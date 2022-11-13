import { defineConfig } from "vitepress";

export default defineConfig({
    // ...

    title: "Iusiel",
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description:
        "My portfolio site. Mostly about web development but may include some random things.",

    head: [
        ["meta", { name: "theme-color", content: "#3eaf7c" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        [
            "meta",
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
        ],
        [
            "meta",
            {
                property: "og:site_name",
                content: "Iusiel",
            },
        ],
        [
            "meta",
            {
                name: "apple-mobile-web-app-status-bar-style",
                content: "#E3D065",
            },
        ],

        [
            "link",
            {
                rel: "icon",
                href: "/images/logo.jpg",
            },
        ],
    ],
});
