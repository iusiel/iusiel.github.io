---
title: Random Things - Nov 27, 2022
date: 2022-11-27
meta:
    - name: description
      content: Learning about JavaScript Dateformatter and deploying Vue.JS application to Github pages.
    - property: og:image
      content: /images/logo.jpg
    - property: og:type
      content: website
activeLink: random
---

<script setup>
import BlogPost from './.vitepress/theme/components/BlogPost.vue';
import './.vitepress/styles/codeblock.styl';

</script>

<BlogPost>
  <div>

For a while, I was adding two date fields to the frontmatter data being used for the random things post. One is a standard date object (e.g. 2022-11-27), which I used for the `<time>` element. The other one is a "formatted" date (e.g. November 27, 2022) which I use to display the date on the page. At first, I didn't mind this as I think that it will not be that much hassle to put two date fields in the frontmatter data, but I realized that this is not a good practice at all and it is prone to mistakes.

As I search the internet on how to solve this problem, I came across [Javascript DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat). Using this class, I am now able to just convert a DateTime string into various formats. For my pages, what I used is this particular function

```js
function formatDate(datetoFormat) {
    const options = { dateStyle: "long" };
    const dateObject = new Date(datetoFormat);
    return new Intl.DateTimeFormat("en-PH", options).format(dateObject);
}
```

Just another random topic, if you are interested in deploying a Vue.JS application to GitHub pages, you can use this workflow https://github.com/marketplace/actions/vue-to-github-pages. I used this particular workflow for my r6 training tool which can be found here https://iusiel.github.io/r6-training-tool/. If you want to check the code repository of the r6 training tool, you can check it here https://github.com/iusiel/r6-training-tool.

  </div>
</BlogPost>
