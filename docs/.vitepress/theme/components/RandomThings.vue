<script setup>
function formatDate(datetoFormat) {
    const options = { dateStyle: "long" };
    const dateObject = new Date(datetoFormat);
    return new Intl.DateTimeFormat("en-PH", options).format(dateObject);
}
</script>

<template>
    <div class="container">
        <h1 class="blog__header">RANDOM THINGS</h1>
        <h2 class="blog__subheader">Whatever comes to mind</h2>
        <div v-for="(post, index) in $frontmatter.posts" class="blog__section">
            <a :href="post.link"
                ><h3 class="blog__title">{{ post.title }}</h3>
                <time :datetime="post.date" class="blog__time">{{
                    formatDate(post.date)
                }}</time>
                <p>
                    {{ post.summary }}
                </p>
            </a>
        </div>
    </div>
</template>
