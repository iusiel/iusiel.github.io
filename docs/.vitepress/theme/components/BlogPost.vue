<script setup>
function formatDate(datetoFormat) {
    const options = { dateStyle: "long" };
    const dateObject = new Date(datetoFormat);
    return new Intl.DateTimeFormat("en-PH", options).format(dateObject);
}
</script>

<template>
    <div>
        <h1 class="blog__header">{{ $frontmatter.title }}</h1>
        <time :datetime="$frontmatter.date" class="blog__time center">{{
            formatDate($frontmatter.date)
        }}</time>
        <section>
            <slot></slot>
        </section>
        <br />
        <a href="/random-things">Check out other posts.</a>
    </div>
</template>
