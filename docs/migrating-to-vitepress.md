---
title: Migrating to VitePress
date: 2022-11-21
meta:
    - name: description
      content: Migrating my site from VuePress to VitePress
    - property: og:image
      content: /images/logo.jpg
    - property: og:type
      content: website
activeLink: random
---

<script setup>
import BlogPost from './.vitepress/theme/components/BlogPost.vue'
</script>

<BlogPost>
  <div>
While I was trying to add a new post, I encountered errors when trying to use VuePress. I think it has to do with my current NodeJS version. It also looks like VuePress was using some outdated dependencies when I used <b>npm run audit</b>. Because of that, I decided to migrate to VuePress since I cannot make my VuePress application work properly.

Migration was somewhat straightforward. What I did first is transfer the main layout files. The files that I edited are <b>docs/.vitepress/config.js</b> and <b>docs/.vitepress/config.js.</b> After that, I copied all the markdown files from the old VuePress site into the VitePress site. I put all the markdown files inside <b>docs/</b> folder. The next thing I did is to copy all the images. I put the images inside <b>docs/public/images/</b> folder. The final thing I did is copy all the existing .styl files from the VuePress site. Vite has support for stylus CSS as long as the stylus node module is installed. I did a bit of tinkering, but it was a smooth migration. I also like that it uses Vite compared to VuePress that uses webpack, so I should see a performance boost while developing.

  </div>
</BlogPost>
