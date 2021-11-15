(this["webpackJsonpsex-education"]=this["webpackJsonpsex-education"]||[]).push([[0],{22:function(e,t,s){},23:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s(14),a=s.n(n),r=(s(22),s(6)),i=s(2),o=s(3),l=(s(23),s(0)),u=function(e){var t=e.resetScore,s=function(){var e=document.getElementById("menu-button"),t=document.getElementById("nav-container");e.classList.toggle("change");var s=e.classList.contains("change");e.setAttribute("aria-expanded",s),t.classList.toggle("hidden")};return Object(l.jsxs)("div",{className:"nav-bar",children:[Object(l.jsxs)("button",{className:"container",id:"menu-button",onClick:s,"aria-labelledby":"nav-container","aria-expanded":"false","aria-label":"Toggle the navigation menu",children:[Object(l.jsx)("div",{className:"bar1"}),Object(l.jsx)("div",{className:"bar2"}),Object(l.jsx)("div",{className:"bar3"})]}),Object(l.jsxs)("nav",{className:"nav-links-container hidden",id:"nav-container","aria-label":"Main menu",children:[Object(l.jsx)(o.c,{to:"/home",className:"nav-option",onClick:s,children:"Home"}),Object(l.jsx)(o.c,{to:"/quiz",className:"nav-option",onClick:function(){s(),t()},children:"Quiz"}),Object(l.jsx)(o.c,{to:"/resources",className:"nav-option",onClick:s,children:"Resources"})]})]})},j=(s(33),function(e){var t=e.questions,s=e.resetScore,n=Object(c.useState)(0),a=Object(r.a)(n,2),i=a[0],u=a[1];return Object(l.jsxs)("main",{children:[Object(l.jsxs)("section",{className:"quiz-call-to-action",children:[Object(l.jsx)("h2",{className:"call-to-action-question",children:"Does wearing two condoms offer double protection?"}),Object(l.jsxs)(o.b,{to:"/quiz",className:"quiz-link",onClick:s,"aria-label":"Take the Myth Busting Quiz",children:["Take the Myth Busting Quiz",Object(l.jsx)("span",{className:"material-icons",children:"arrow_right_alt"})]})]}),Object(l.jsxs)("section",{className:"fact-container",children:[Object(l.jsx)("h2",{className:"did-you-know",children:"Did you know? \ud83e\udd14"}),Object(l.jsxs)("p",{className:"fact",children:['"',t.length&&t[i].fact,'"']}),Object(l.jsxs)("div",{className:"arrows-container",children:[Object(l.jsx)("button",{className:"arrow-button",disabled:!i,onClick:function(){return u(i-1)},"aria-label":"Previoius fact",children:Object(l.jsx)("span",{className:"material-icons",children:"arrow_back"})}),Object(l.jsx)("button",{disabled:!(i<t.length-1),className:"arrow-button",onClick:function(){return u(i+1)},"aria-label":"Next fact",children:Object(l.jsx)("span",{className:"material-icons",children:"arrow_forward"})})]})]})]})}),b=(s(34),s(35),function(e){var t=e.correctAnswersPercentage,s=e.resetQuiz;return Object(l.jsxs)("section",{className:"results-container",children:[Object(l.jsx)("h3",{className:"complete-quiz-message",children:"Excellent! You crushed it."}),Object(l.jsxs)("p",{className:"score",children:["You got ",t.toFixed(),"% of the questions right!"]}),Object(l.jsx)("button",{className:"retake-button",onClick:s,children:"Retake Quiz"}),Object(l.jsx)(o.b,{className:"home-link",to:"/home",children:"Back to Home"})]})}),d=s(17),h=(s(36),function(e){var t=e.questions,s=e.checkAnswer,n=e.questionNumber,a=e.setQuestionNumber,i=e.userAnswers,o=e.setUserAnswers,u=Object(c.useState)(!0),j=Object(r.a)(u,2),b=j[0],h=j[1],m=Object(c.useState)(!1),O=Object(r.a)(m,2),x=O[0],f=O[1],p=function(e){f(!0),h(!1),o([].concat(Object(d.a)(i),[e])),s(e,n)},N=function(e){e.preventDefault(),"next"===e.target.parentNode.value&&void 0===i[n+1]?(f(!1),h(!0),a(n+1)):"next"===e.target.parentNode.value&&void 0!==i[n+1]?(f(!0),h(!1),a(n+1)):"previous"===e.target.parentNode.value&&(a(n-1),f(!0),h(!1))};return Object(l.jsxs)("form",{className:"quiz-form",children:[Object(l.jsx)("h3",{className:"question",children:t[n].question}),Object(l.jsxs)("div",{className:"inputs-container",children:[Object(l.jsx)("input",{className:"true-input",type:"radio",name:"answer",checked:!0===i[n],value:"true",id:"true",onChange:function(){return p(!0)},disabled:x}),Object(l.jsx)("label",{htmlFor:"true",className:"true-label",children:"True"}),Object(l.jsx)("input",{className:"false-input",type:"radio",name:"answer",checked:!1===i[n],value:"false",id:"false",onChange:function(){return p(!1)},disabled:x||i[n]}),Object(l.jsx)("label",{htmlFor:"false",className:"false-label",children:"False"})]}),Object(l.jsxs)("div",{className:"arrows-container",children:[Object(l.jsx)("button",{className:"arrow-button",id:"previous-button",value:"previous",onClick:function(e){return N(e)},disabled:!n||b,"aria-label":"Previous question",children:Object(l.jsx)("span",{className:"material-icons",children:"arrow_back"})}),Object(l.jsx)("button",{className:"arrow-button",id:"next-button",value:"next",onClick:function(e){return N(e)},disabled:b,"aria-label":"Next question",children:Object(l.jsx)("span",{className:"material-icons",children:"arrow_forward"})})]}),Object(l.jsxs)("p",{children:["You have completed ",(i.length/t.length*100).toFixed(),"% of the quiz!"]})]})}),m=function(e){var t=e.questions,s=e.checkAnswer,n=e.score,a=e.resetScore,i=Object(c.useState)(0),o=Object(r.a)(i,2),u=o[0],j=o[1],d=Object(c.useState)([]),m=Object(r.a)(d,2),O=m[0],x=m[1],f=function(){x([]),j(0),a()};return Object(l.jsxs)("main",{className:"quiz-container",children:[Object(l.jsx)("h2",{className:"quiz-title",children:"Myth Busting Quiz"}),t[u]?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(h,{questions:t,checkAnswer:s,questionNumber:u,setQuestionNumber:j,userAnswers:O,setUserAnswers:x,resetQuiz:f}),void 0!==O[u]&&O[u]===t[u].correctAnswer?Object(l.jsxs)("div",{className:"fact-container",children:[Object(l.jsx)("p",{className:"result",children:"\u2705 Awesome job!"}),Object(l.jsx)("p",{children:t[u].fact})]}):void 0!==O[u]&&O[u]!==t[u].correctAnswer?Object(l.jsxs)("div",{className:"fact-container",children:[Object(l.jsx)("p",{className:"result",children:"\u274c Let\u2019s look at that one again!"}),Object(l.jsx)("p",{children:t[u].fact})]}):void 0]}):Object(l.jsx)(b,{correctAnswersPercentage:n/t.length*100,resetQuiz:f})]})},O=(s(37),function(){return Object(l.jsxs)("main",{className:"resources-container",children:[Object(l.jsx)("h2",{className:"resources-title",children:"Resources"}),Object(l.jsx)("iframe",{width:"370",height:"200",src:"https://www.youtube.com/embed/Xo3Cnfhf9Q8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(l.jsx)("div",{className:"clinic resource-container",children:Object(l.jsxs)("a",{className:"resource-link",href:"https://www.bedsider.org/where_to_get_it",children:["Find a Health Center Here!",Object(l.jsx)("span",{className:"material-icons",children:"arrow_right_alt"})]})}),Object(l.jsx)("div",{className:"birth-control resource-container",children:Object(l.jsxs)("a",{className:"resource-link",href:"https://www.bedsider.org/birth-control",children:["Learn More About Birth Control!",Object(l.jsx)("span",{className:"material-icons",children:"arrow_right_alt"})]})}),Object(l.jsx)("div",{className:"sti resource-container",children:Object(l.jsxs)("a",{className:"resource-link",href:"https://www.teensource.org/std",children:["Learn More About STIs!",Object(l.jsx)("span",{className:"material-icons",children:"arrow_right_alt"})]})}),Object(l.jsx)("div",{className:"lgbtq resource-container",children:Object(l.jsxs)("a",{className:"resource-link",href:"https://www.teensource.org/lgbtq",children:["Sexual Orientation & Gender!",Object(l.jsx)("span",{className:"material-icons",children:"arrow_right_alt"})]})}),Object(l.jsx)(o.b,{to:"/home",className:"home-link",children:"Back to Home"})]})}),x=(s(38),function(){var e=Object(i.g)();return Object(l.jsxs)("div",{children:[Object(l.jsxs)("h3",{children:["No match for ",e.pathname]}),Object(l.jsx)(o.b,{to:"/home",children:"Back to Home"})]})}),f=(s(39),function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(""),o=Object(r.a)(a,2),b=o[0],d=o[1],h=Object(c.useState)(0),f=Object(r.a)(h,2),p=f[0],N=f[1];Object(c.useEffect)((function(){fetch("https://sexual-health-api.herokuapp.com/api/v1/questions").then((function(e){if(!e.ok)throw new Error("".concat(e.status," Error."));return e.json()})).then((function(e){return n(e)})).catch((function(e){return d(e.message)}))}),[]);var w=function(e,t){e===s[t].correctAnswer&&N(p+1)},g=function(){N(0)};return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)(u,{resetScore:g}),Object(l.jsx)("h1",{children:"Sex Education"})]}),Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{exact:!0,path:"/",render:function(){return Object(l.jsx)(i.a,{to:"/home"})}}),Object(l.jsx)(i.b,{exact:!0,path:"/home",render:function(){return b?Object(l.jsx)("h2",{children:"Oops, something went wrong! Try again later!"}):Object(l.jsx)(j,{questions:s,resetScore:g})}}),Object(l.jsx)(i.b,{exact:!0,path:"/quiz",render:function(){return b?Object(l.jsx)("h2",{children:"Oops, something went wrong! Try again later!"}):Object(l.jsx)(m,{questions:s,checkAnswer:w,score:p,resetScore:g})}}),Object(l.jsx)(i.b,{exact:!0,path:"/resources",component:O}),Object(l.jsx)(i.b,{path:"*",component:x})]}),Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{children:"Please note: This app\u2019s content is provided for general informational purposes only, and under no circumstances should be considered a substitute for professional medical advice, diagnosis or treatment from a qualified physician or healthcare provider."})})]})}),p=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,41)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),c(e),n(e),a(e),r(e)}))};s.p;a.a.render(Object(l.jsx)(o.a,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),p()}},[[40,1,2]]]);
//# sourceMappingURL=main.31d5ea0c.chunk.js.map