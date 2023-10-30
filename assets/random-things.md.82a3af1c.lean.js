import{o as n,c as i,F as m,e as d,b as e,t as r,a as g}from"./app.5d8f81bc.js";const u=e("h1",{class:"blog__header"},"RANDOM THINGS",-1),h=e("h2",{class:"blog__subheader"},"Whatever comes to mind",-1),p={class:"blog__section"},c=["href"],y={class:"blog__title"},k=["datetime"],f={__name:"RandomThings",setup(l){function o(a){const s={dateStyle:"long"},t=new Date(a);return new Intl.DateTimeFormat("en-PH",s).format(t)}return(a,s)=>(n(),i("div",null,[u,h,(n(!0),i(m,null,d(a.$frontmatter.posts,(t,w)=>(n(),i("div",p,[e("a",{href:t.link},[e("h3",y,r(t.title),1),e("time",{datetime:t.date,class:"blog__time"},r(o(t.date)),9,k),e("p",null,r(t.summary),1)],8,c)]))),256))]))}},_=JSON.parse(`{"title":"Random Things","description":"","frontmatter":{"title":"Random Things","meta":[{"name":"description","content":"About anything that I can think of"},{"property":"og:image","content":"/images/logo.jpg"},{"property":"og:type","content":"website"}],"activeLink":"random","posts":[{"title":"Legendary Palm Tree","date":"2023-10-30T00:00:00.000Z","summary":"A new project that I want to regularly maintain","link":"/legendary-palm-tree"},{"title":"Rescheduled 10K Trial","date":"2023-10-15T00:00:00.000Z","summary":"Due to unforeseen circumstances, I rescheduled my 10k time trial","link":"/rescheduled-10k-trial"},{"title":"Upcoming 10K Time Trial and Site Revamp.","date":"2023-10-08T00:00:00.000Z","summary":"Last week before going to my 10k time trial. I am also planning to revising my portfolio site.","link":"/upcoming-10k-trial-site-revamp"},{"title":"Run journal update and other things.","date":"2023-09-24T00:00:00.000Z","summary":"Updates on the run journal that I have been developing.","link":"/run-journal-update-20230924"},{"title":"Learning Astro. Additional running updates","date":"2023-08-21T00:00:00.000Z","summary":"I am learning how to use Astro.","link":"/learning-astro-additional-running-updates"},{"title":"10K Training Update","date":"2023-08-13T00:00:00.000Z","summary":"An update on my 10k training","link":"/10k-training-update"},{"title":"SYBAG continuation and other various updates","date":"2023-08-07T00:00:00.000Z","summary":"Progress on the SYBAG project. Also updates about unrelated things","link":"/sybag-continuation-various-updates"},{"title":"SYBAG Project is underway","date":"2023-06-19T00:00:00.000Z","summary":"I have started developing \\"Should you buy a game\\"","link":"/sybag-project-underway"},{"title":"Official Half Marathon Results and Updates on Personal Projects","date":"2023-06-12T00:00:00.000Z","summary":"An update on my official half marathon and some projects that I aim to finish this year","link":"/official-half-marathon-result-personal-project-updates"},{"title":"Half Marathon Race Day","date":"2023-06-04T00:00:00.000Z","summary":"The day has finally come. Let's see if I can hit my target time of 02:30:00","link":"/half-marathon-race-day"},{"title":"Week 6 Training","date":"2023-04-16T00:00:00.000Z","summary":"Week 6 training for my upcoming half-marathon","link":"/week-6-training"},{"title":"Week 5 Training, Why Automated Testing is Important","date":"2023-04-09T00:00:00.000Z","summary":"Week 5 training for my upcoming half-marathon and why I want to implement automated testing","link":"/week-5-training-automated-testing"},{"title":"Week 3 - Week 4 Training, Storybook Progress","date":"2023-04-02T00:00:00.000Z","summary":"Week 3 and 4 of my half-marathon training. Also some progress in my storybook development.","link":"/week-3-4-hm-training-storybook-progress"},{"title":"Week 2 of Half-Marathon Training, Continuing Learning to Draw","date":"2023-03-19T00:00:00.000Z","summary":"Week 2 of my half-marathon training. I have also somewhat a new renewed interest in drawing.","link":"/week-2-hm-training-continuing-learning-to-draw"},{"title":"New 5K PB and Storybook Continuation","date":"2023-03-12T00:00:00.000Z","summary":"I hit a new 5K personal best while training this week. I also continued developing the storybook software.","link":"/new-5k-pb-storybook-continuation"},{"title":"Escape Room and Half-Marathon Preparation","date":"2023-03-05T00:00:00.000Z","summary":"I did an escape room challenge for the first time. I am also preparing for a race on June 4.","link":"/escape-room-21k-preparation"},{"title":"5K Practice Run","date":"2023-02-26T00:00:00.000Z","summary":"I did a practice 5k run.","link":"/5k-practice-run"},{"title":"Storybook Updates and Guitar Training","date":"2023-02-19T00:00:00.000Z","summary":"Progress about the storybook site and guitar training.","link":"/storybook-updates-and-guitar-training"},{"title":"Replacing Guitar Parts and Continuing Training for 10K run","date":"2023-02-12T00:00:00.000Z","summary":"The new parts have arrived so I attempted to replace the guitar strings and tuning pegs.","link":"/replacing-guitar-parts-training-10k"},{"title":"Running Training and Guitar Things","date":"2023-02-05T00:00:00.000Z","summary":"Some things I am focused on right now outside of web development","link":"/running-training-guitar-things"},{"title":"2023 Look Ahead","date":"2023-01-29T00:00:00.000Z","summary":"What I am aiming for in 2023","link":"/2023-look-ahead"},{"title":"2022 Look Back","date":"2023-01-22T00:00:00.000Z","summary":"A look back at the past year.","link":"/2022-look-back"},{"title":"CPU and GPU upgrade","date":"2022-12-11T00:00:00.000Z","summary":"As a reward to myself, I decided to upgrade my CPU and GPU.","link":"/cpu-and-gpu-upgrade"},{"title":"Integrating Cypress and Vitest","date":"2022-12-06T00:00:00.000Z","summary":"Adding Cypress and Vitest to my bootstrap frameworks.","link":"/integrating-cypress-and-vitest"},{"title":"Random Things - Nov 27, 2022","date":"2022-11-27T00:00:00.000Z","summary":"Learning about JavaScript Dateformatter and deploying Vue.JS application to Github pages.","link":"/random-things-nov-27-2022"},{"title":"Migrating to VitePress","date":"2022-11-21T00:00:00.000Z","summary":"Migrating my site from VuePress to VitePress","link":"/migrating-to-vitepress"},{"title":"Creating GraphQL server from Laravel app","date":"2022-11-01T00:00:00.000Z","summary":"Simple tutorial on how to create a GraphQL server from a Laravel application.","link":"/create-graphql-server-laravel"},{"title":"R6, Dota 2 and GraphQL?","date":"2022-10-22T00:00:00.000Z","summary":"Looks like my R6 training is paying off because I am getting used to some of the maps. Now i just need to test it in game.","link":"/r6-dota2-graphql"},{"title":"Creating R6 Training Tool","date":"2022-10-08T00:00:00.000Z","summary":"I decided to create a complementary tool for training in Rainbow Six Siege. This tool aims to generate a random map callout based on the selected map and floor.","link":"/creating-r6-training-tool"},{"title":"To write or not?","date":"2022-10-01T00:00:00.000Z","summary":"One thing that I always wanted to do was write a story for a game. Like many others, I manage to write something but then get discouraged halfway through until I stop finishing that particular story.","link":"/to-write-or-not"},{"title":"Learning Rainbow Six Siege","date":"2022-09-23T00:00:00.000Z","summary":"Some work friends have invited me to try out R6 siege. I thought that it would at least be not that hard, but upon playing the game, I immediately noticed that you have to learn many things before you can enjoy playing it.","link":"/learning-r6-siege"},{"title":"First!","date":"2022-09-20T00:00:00.000Z","summary":"I am not really sure what to put here. I just decided to add a blog section since most portfolio sites have one.","link":"/first"}]},"headers":[],"relativePath":"random-things.md"}`),T={name:"random-things.md"},v=Object.assign(T,{setup(l){return(o,a)=>(n(),i("div",null,[g(f)]))}});export{_ as __pageData,v as default};
