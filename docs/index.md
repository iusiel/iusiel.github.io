---
title: Main
meta:
    - name: description
      content: Developing web applications using PHP. I mainly use Laravel for my projects. I am currently learning Symfony, Vue.JS and Jamstack.
    - property: og:image
      content: /images/logo.jpg
    - property: og:type
      content: website
activeLink: home
projects:
    - title: My Portfolio
      tagline: You're looking at it
      image:
      projectLinks:
          - https://iusiel.netlify.app/
          - https://iusiel.github.io/
          - https://github.com/iusiel/iusiel.github.io
      techStackUsed:
          - VitePress
      summary: 'You&lsquo;re looking at it right now. <br/><br/> I decided to use VuePress for my portfolio site since I want to learn Jamstack. Maybe this is not the best use for VuePress since it was designed with technical documentation in mind but I enjoyed using VuePress for this site. It was also nice to learn stylus since this is the first time that I have used it. I tried to use a color scheme that combines green and yellow (which are my favorite colors).  
      <br/><br/>
      I have implemented some subtle animations, but overall, I think the design is quite simple (I am not good at creating a design). <br/><br/>
      The site has three main pages, the home page, the about me page, and the random things (blog) page. <br/><br/> <i>I have since migrated the site to VitePress because VuePress was not working properly on my local machine.</i>'


    - title: Lap Times Saver
      tagline: For saving lap times
      image: 
        src: /images/lts1.png
        alt: Lap times summary dashboard
      projectLinks:
          - https://github.com/iusiel/lap_times_saver
      techStackUsed:
          - Symfony
          - Symfony UX Chart
          - Bootstrap 5
      summary: 'This is my first completed web application using Symfony. As someone that likes playing Dirt Rally 2.0 and GT Sport, I wanted to have a way to track my lap times. I decided to use Symfony since it was one of the two main PHP frameworks (the other one being Laravel). The form component by Symfony is really interesting since it allows you to create forms easily. For the layout, I just used Bootstrap 5 since I did not want to think much about it. I do want to change the look and feel of the site in the future so that it will not look like a default bootstrap site. <br/><br/>
      The main functionalities of this web app are:
      <ul>
        <li>Games CRUD</li>
        <li>Cards CRUD</li>
        <li>Tracks CRUD</li>
        <li>Lap times CRUD</li>
        <li>Summary page with links to their respective charts</li>
      </ul>
      <picture>
        <source
            srcset="/images/lts2.webp"
            type="image/webp"
        />
        <img alt="Lap times chart" src="/images/lts2.png" width="1920" height="799"/>
      </picture>
      '
    - title: PAASRS
      tagline: Poor Attempt At Spaced Repetition Software
      image: 
        src: /images/paasrs1.png
        alt: PAASRS main dashboard
      projectLinks:
          - https://github.com/iusiel/paasrs
      techStackUsed:
          - Laravel 8
          - Vue 3
          - Bootstrap 5
      summary: 'PAASRS (short for Poor Attempt At Spaced Repetition Software) is something that I created since I want to introduce spaced repetition to our team. Due to IT policies, it is hard to have software installed software on our workstations so I thought maybe it would be easier if I created a web application that can easily be cloned through git. Too bad that I was not yet able to implement it for our team.
      
      <br/><br/>
    
      For the frontend, I used a mixture of laravel blade files and vue components. For the backend, I used Laravel. I also want to change the look of this site in the future since it looks like a default bootstrap site. 

      <br/><br/> 
      
      At first, I wanted to use a complicated algorithm for determining when a card will show up again, but in the end, I decided against it because I find it too hard to implement. I also decided that there will little or no benefit at all even if I have managed to implement it. 

      <br/><br/>
      The main features of this web app are:
      <ul>
        <li>Deck creation</li>
        <li>Card CRUD</li>
        <li>Import cards via csv file</li>
        <li>Export cards as csv file</li>
        <li>Study function</li>
      </ul>

      <picture>
        <source srcset="/images/paasrs2.webp" type="image/webp" />
        <img alt="PAASRS showing question" src="/images/paasrs2.png" width="1469" height="534" />
      </picture>

      <picture>
        <source srcset="/images/paasrs3.webp" type="image/webp" />
        <img alt="PAASRS showing answer" src="/images/paasrs3.png" width="1469" height="697" />
      </picture>
      '
    - title: Calculator App
      tagline: Made with Vue.JS and Electron
      image: 
        src: /images/calculator1.png
        alt: Calculator app
      projectLinks:
        - https://github.com/iusiel/calculator
      techStackUsed:
          - Vue 2.6
          - Laravel 8
          - Electron 17
      summary: 'A calculator app that I made since there is no default calculator app when I installed EndeavourOS. This is my first time dabbling with Electron JS. I also used Vitest here as a testing tool since I used Vue.JS for the frontend. 
      
      <br/><br/>
      I thought this would be easy, but I realized that there are some challenges when building a calculator app, like making sure that some buttons should only work under specific circumstances (like a dot can only be used once). I also had some difficulty making sure that the display does not show extra zeros. There are still some bugs present here, but I am quite proud of what I have done here.
      '

    - title: Custom News Display
      tagline: News aggregator
      image: 
        src: /images/news-display.png
        alt: Custom news display screenshot
      projectLinks:
        - 
      techStackUsed:
        - Symfony 6
        - Vue 3
        - Pinia
      summary: 'A custom news aggregator that I made with Symfony and Vue 3. I made this because I did not want to open multiple sites in order to read news. This was also a way for me to sharpen my Symfony and Vue.JS skills. For this, what I did first is collect all the news sites that I want to include in this project and then I implemented a custom algorithm so that the news sites that will be displayed will depend on the current day. I try to mix them up because I don&lsquo;t want to form any bias as much as possible. <br/><br/>

      For this one, I tried first if the news site provides a RSS feed. If the news site provides a RSS feed, that is what I will use to display the news articles. If the site does not provide any RSS feed, what I did is parse through the HTML code of the site and then get all the relevant information that I need in order to display the news articles.
      '
---

<script setup>
import Home from './.vitepress/theme/components/Home.vue'
</script>

<Home />
