---
title: Week 5 Training, Why Automated Testing is Important
date: 2023-04-09
meta:
    - name: description
      content: Week 5 training for my upcoming half-marathon and why I want to implement automated testing.
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

My week 5 long run consisted of running at an easy pace around 1 hour and 35 minutes. My plan for this is to start around 8:00 min/km pace and then gradually increase it until hitting marathon pace (7:00 min/km) at around the end. My start was pretty good and then I started to increase the pace. I think I was ok for about 1 hour and then I started having difficulties during my run. I was still able to finish my workout properly while maintaining pace, but there was a particularly bad lap around the end where my pace dropped to around 9:00 min/km. Upon reflection on this run, I think I ran a bit too hard so I was not able to maintain an easy pace. For my next long run, I think I will try sticking to an 8:00 min/km pace longer before trying to up my pace. There is also no long run scheduled next week. I think it will be a "cut-back" week so that I can recover from the mileage that I have logged.

If you are a software developer, you are already familiar with why automated testing is important, especially for regression purposes. In our current project where there are no automated tests implemented yet, it is hard to detect issues especially after deploying to production. Everything was working fine in our staging site, but once deployed to production, it looks like some updates have not been deployed. Due to this, I am going to prioritize implementing automated testing as I do not want this kind of scenario to happen again. I also learned that git cherry-pick is not that simple to use. I feel like I am misusing it sometimes because some of the updates after cherry-picking are not applied properly. A lesson learned for now that will hopefully lead to better things in the future.

  </div>
</BlogPost>
