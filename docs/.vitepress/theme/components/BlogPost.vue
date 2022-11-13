<script>
export default {
  name: "BlogPost",
};
</script>

<template>
  <div>
    <h1 class="blog__header">{{ $frontmatter.post.title }}</h1>
    <time :datetime="$frontmatter.post.date" class="blog__time center">{{
      $frontmatter.post.formattedDate
    }}</time>
    <section>
      <slot></slot>
    </section>
    <br />
    <a href="/random-things">Check out other posts.</a>
  </div>
</template>
