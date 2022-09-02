(window.webpackJsonp=window.webpackJsonp||[]).push([[3,5,7],{363:function(t,e,a){var n=a(2),i=a(15),s=Date.prototype,o=n(s.toString),r=n(s.getTime);"Invalid Date"!=String(new Date(NaN))&&i(s,"toString",(function(){var t=r(this);return t==t?o(this):"Invalid Date"}))},364:function(t,e,a){"use strict";a.r(e);var n={name:"Header",props:["activeLink","themeColor"],methods:{toggleTheme:function(){this.$emit("toggleTheme")}},computed:{toggleButtonText:function(){return"default"===this.themeColor?"Dark mode":"Normal"}}},i=a(61),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"bg-yellow nav-main-menu"},[a("div",{staticClass:"container"},[t._m(0),t._v(" "),a("p",{staticStyle:{"text-align":"center"}},[t._v("\n            Developing web applications using PHP. I mainly use Laravel for\n            my projects. I am currently learning Symfony, Vue.JS, and\n            Jamstack.\n        ")]),t._v(" "),a("ul",{staticClass:"main-menu"},[a("li",[a("a",{class:{active:"home"===t.activeLink,"main-menu__link":!0},attrs:{href:"/"}},[t._v("Home")])]),t._v(" "),a("li",[a("a",{class:{active:"about"===t.activeLink,"main-menu__link":!0},attrs:{href:"/about-me"}},[t._v("About Me")])]),t._v(" "),a("li",[a("a",{class:{active:"random"===t.activeLink,"main-menu__link":!0},attrs:{href:"/random-things"}},[t._v("Random Things")])]),t._v(" "),a("li",[a("button",{staticClass:"main-menu__toggle-theme",on:{click:t.toggleTheme}},[t._v("\n                    "+t._s(t.toggleButtonText)+"\n                ")])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo-container text-center"},[e("a",{staticClass:"fs-large fw-black text-yellow2 logo",attrs:{href:"/"}},[this._v("IUSIEL")])])}],!1,null,null,null);e.default=s.exports},365:function(t,e,a){"use strict";a.r(e);a(363);var n={name:"Footer",data:function(){return{copyright:""}},mounted:function(){var t=new Date;this.copyright="Copyright © ".concat(t.getFullYear()," Iusiel")}},i=a(61),s=Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("div",{staticClass:"footer__content"},[e("div",[this._v("Created with VuePress.")]),this._v(" "),e("a",{staticClass:"footer__link",attrs:{href:"https://github.com/iusiel",target:"_blank",rel:"noopener"}},[this._v("Github")]),this._v(" "),e("div",[this._v(this._s(this.copyright))])])])}),[],!1,null,null,null);e.default=s.exports},370:function(t,e,a){"use strict";a.r(e);var n=a(364),i=a(365),s={components:{Header:n.default,Footer:i.default},data:function(){return{theme:"default"}},mounted:function(){this.theme=null!==localStorage.getItem("colorTheme")?localStorage.getItem("colorTheme"):"default"},methods:{updateTheme:function(){this.theme="default"===this.theme?"dark-mode":"default",localStorage.setItem("colorTheme",this.theme)}}},o=a(61),r=Object(o.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:["body","default"===this.theme?"":"dark-mode"]},[e("Header",{attrs:{activeLink:this.$frontmatter.activeLink,themeColor:this.theme},on:{toggleTheme:this.updateTheme}}),this._v(" "),e("div",{staticClass:"main__container"},[this._m(0),this._v(" "),e("Footer")],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"main__404"},[e("h1",{staticClass:"header__404"},[this._v("404 :(")]),this._v(" "),e("p",{staticClass:"text__404"},[this._v("\n                The page you are trying to access does not exist. Make sure\n                that you have typed the URL properly.\n            ")]),this._v(" "),e("a",{staticClass:"button__404",attrs:{href:"/"}},[this._v("Go back to home page")])])}],!1,null,null,null);e.default=r.exports}}]);