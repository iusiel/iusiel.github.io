---
title: Expenses Tracker Update
date: 2024-05-12
meta:
    - name: description
      content: Some updates on the expenses tracker update I am doing.
    - property: og:image
      content: /images/logo.jpg
    - property: og:type
      content: website
activeLink: random
---

<script setup>
import BlogPost from './.vitepress/theme/components/BlogPost.vue';
</script>

<BlogPost>
  <div>
I have made some progress on the expenses tracker that I am doing. My plan for this one is to store the expenses as local data and then sync it into the own worksheet. For the local data, I decided to use IndexedDB. It was my first time using it so I am not yet versed on it. For now, I am satisfied with what I have accomplished for the local database. I also turned it into a PWA that works offline. This is to make sure that I can use the app even if I don't have a decent internet connection. I was glad that it was working properly after deploying it to Netlify. The next step for me will be to develop the functions for the app. I think I will not be that strict with coding since I will only be using it as a personal app but I will still try to follow the best guidelines for coding.

  </div> 
</BlogPost>
