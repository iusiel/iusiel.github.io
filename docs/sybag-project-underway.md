---
title: SYBAG Project is underway
date: 2023-06-19
meta:
    - name: description
      content: I have started developing "Should you buy a game"
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
I have started developing the sybag application. For now, I have finished the initial page layout. It has a very simple design with the text "Should You Buy A Game?" and the corresponding answer. I am not planning to make the UI too flashy. I will focus more on UX. For now, I will be implementing a very simple algorithm. If you have 50% or more games in your list that you have not played yet, the answer will be "No". If you have played about 60% of your list, the answer will be "Buy if the game is cheap". If you have played around 80% of your games list, the answer will be "Yes". I will refine this as the project goes along, but I think this is good enough for a basic implementation.
  </div>
</BlogPost>
