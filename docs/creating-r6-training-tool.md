---
title: Creating R6 Training Tool
meta:
    - name: description
      content: Trying to learn rainbow six siege
    - property: og:image
      content: /images/logo.jpg
    - property: og:type
      content: website
activeLink: random
post:
    title: Creating R6 Training Tool
    formattedDate: October 8, 2022
    date: 2022-10-08
---

<script setup>
import BlogPost from './.vitepress/theme/components/BlogPost.vue'
</script>

<BlogPost>
  <div>
I decided to create a complementary tool for training in Rainbow Six Siege. This tool aims to generate a random map callout based on the selected map and floor.

I decided to use Vue.JS for this one since I like using Vue.JS and I would like to learn it as much as possible. I also made it to be as simple and functional as possible.

The tool works by allowing you to select a map and then a floor. After selecting a map and a floor, you can press the generate button. After pressing the generate button, you should see a generated callout. I also displayed a random action to complement the generated callout. For now, there are two options for the random action, go to the room and fire at the room.

You can check the training tool here - [https://iusiel.github.io/r6-training-tool/](https://iusiel.github.io/r6-training-tool/)

You can check the source code here - [https://github.com/iusiel/r6-training-tool](https://github.com/iusiel/r6-training-tool)

Right now, the thing I want to fix the most is that you cannot repeat through the callouts for a particular map and floor. If you have already gone through all of them, you need to either refresh the application or you need to select a new map or floor. Also note that the map list is not yet complete.

  </div>
</BlogPost>
