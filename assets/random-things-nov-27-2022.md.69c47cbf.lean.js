import{_ as e}from"./chunks/BlogPost.221a379d.js";import"./chunks/codeblock.4da02a33.js";import{o as s,c as a,a as l,w as n,b as t,d as o}from"./app.305f34c9.js";const r=t("div",null,[t("p",null,[o("For a while, I was adding two date fields to the frontmatter data being used for the random things post. One is a standard date object (e.g. 2022-11-27), which I used for the "),t("code",null,"<time>"),o(` element. The other one is a "formatted" date (e.g. November 27, 2022) which I use to display the date on the page. At first, I didn't mind this as I think that it will not be that much hassle to put two date fields in the frontmatter data, but I realized that this is not a good practice at all and it is prone to mistakes.`)]),t("p",null,[o("As I search the internet on how to solve this problem, I came across "),t("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat",target:"_blank",rel:"noreferrer"},"Javascript DateTimeFormat"),o(". Using this class, I am now able to just convert a DateTime string into various formats. For my pages, what I used is this particular function")]),t("div",{class:"language-js"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"js"),t("pre",{class:"shiki"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#C792EA"}},"function"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#82AAFF"}},"formatDate"),t("span",{style:{color:"#89DDFF"}},"("),t("span",{style:{color:"#A6ACCD"}},"datetoFormat"),t("span",{style:{color:"#89DDFF"}},")"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F07178"}},"    "),t("span",{style:{color:"#C792EA"}},"const"),t("span",{style:{color:"#F07178"}}," "),t("span",{style:{color:"#A6ACCD"}},"options"),t("span",{style:{color:"#F07178"}}," "),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#F07178"}}," "),t("span",{style:{color:"#89DDFF"}},"{"),t("span",{style:{color:"#F07178"}}," dateStyle"),t("span",{style:{color:"#89DDFF"}},":"),t("span",{style:{color:"#F07178"}}," "),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"long"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#F07178"}}," "),t("span",{style:{color:"#89DDFF"}},"};")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F07178"}},"    "),t("span",{style:{color:"#C792EA"}},"const"),t("span",{style:{color:"#F07178"}}," "),t("span",{style:{color:"#A6ACCD"}},"dateObject"),t("span",{style:{color:"#F07178"}}," "),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#F07178"}}," "),t("span",{style:{color:"#89DDFF"}},"new"),t("span",{style:{color:"#F07178"}}," "),t("span",{style:{color:"#82AAFF"}},"Date"),t("span",{style:{color:"#F07178"}},"("),t("span",{style:{color:"#A6ACCD"}},"datetoFormat"),t("span",{style:{color:"#F07178"}},")"),t("span",{style:{color:"#89DDFF"}},";")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F07178"}},"    "),t("span",{style:{color:"#89DDFF"}},"return"),t("span",{style:{color:"#F07178"}}," "),t("span",{style:{color:"#89DDFF"}},"new"),t("span",{style:{color:"#F07178"}}," "),t("span",{style:{color:"#A6ACCD"}},"Intl"),t("span",{style:{color:"#89DDFF"}},"."),t("span",{style:{color:"#82AAFF"}},"DateTimeFormat"),t("span",{style:{color:"#F07178"}},"("),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"en-PH"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},","),t("span",{style:{color:"#F07178"}}," "),t("span",{style:{color:"#A6ACCD"}},"options"),t("span",{style:{color:"#F07178"}},")"),t("span",{style:{color:"#89DDFF"}},"."),t("span",{style:{color:"#82AAFF"}},"format"),t("span",{style:{color:"#F07178"}},"("),t("span",{style:{color:"#A6ACCD"}},"dateObject"),t("span",{style:{color:"#F07178"}},")"),t("span",{style:{color:"#89DDFF"}},";")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"}")]),o(`
`),t("span",{class:"line"})])])]),t("p",null,[o("Just another random topic, if you are interested in deploying a Vue.JS application to GitHub pages, you can use this workflow "),t("a",{href:"https://github.com/marketplace/actions/vue-to-github-pages",target:"_blank",rel:"noreferrer"},"https://github.com/marketplace/actions/vue-to-github-pages"),o(". I used this particular workflow for my r6 training tool which can be found here "),t("a",{href:"https://iusiel.github.io/r6-training-tool/",target:"_blank",rel:"noreferrer"},"https://iusiel.github.io/r6-training-tool/"),o(". If you want to check the code repository of the r6 training tool, you can check it here "),t("a",{href:"https://github.com/iusiel/r6-training-tool",target:"_blank",rel:"noreferrer"},"https://github.com/iusiel/r6-training-tool"),o(".")])],-1),D=JSON.parse('{"title":"Random Things - Nov 27, 2022","description":"","frontmatter":{"title":"Random Things - Nov 27, 2022","date":"2022-11-27T00:00:00.000Z","meta":[{"name":"description","content":"Learning about JavaScript Dateformatter and deploying Vue.JS application to Github pages."},{"property":"og:image","content":"/images/logo.jpg"},{"property":"og:type","content":"website"}],"activeLink":"random"},"headers":[],"relativePath":"random-things-nov-27-2022.md"}'),c={name:"random-things-nov-27-2022.md"},m=Object.assign(c,{setup(i){return(p,F)=>(s(),a("div",null,[l(e,null,{default:n(()=>[r]),_:1})]))}});export{D as __pageData,m as default};