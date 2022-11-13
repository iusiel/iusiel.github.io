<script>
export default {
  name: "RandomThings",
};
</script>

<template>
  <div>
    <h1 class="blog__header">RANDOM THINGS</h1>
    <h2 class="blog__subheader">Whatever comes to mind</h2>
    <div v-for="(post, index) in $frontmatter.posts" class="blog__section">
      <a :href="post.link"
        ><h3 class="blog__title">{{ post.title }}</h3>
        <time :datetime="post.date" class="blog__time">{{
          post.formattedDate
        }}</time>
        <p>
          {{ post.summary }}
        </p>
      </a>
    </div>
  </div>
</template>
