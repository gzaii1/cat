(this.webpackJsonpcat=this.webpackJsonpcat||[]).push([[0],{14:function(e,t,r){},16:function(e,t,r){},18:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(6),a=r.n(c),s=(r(14),r(8)),u=r(9),o=r(5),i=r.n(o),f=r(7),h=function(){var e=Object(f.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(t,{cache:"no-cache",credentials:"same-origin",method:"GET",mode:"cors",redirect:"follow",referrer:"no-referrer"}).then((function(e){if(200===e.status)return e.json()})).then((function(e){return{status:!0,data:e}})).catch((function(e){return console.error("err:",e),{status:!1,msg:e}})));case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),d=(r(16),r(0));var j=function(){var e=function(e){var t=Object(n.useState)({}),r=Object(u.a)(t,2),c=r[0],a=r[1];return Object(n.useEffect)((function(){return h("http://5c92dbfae7b1a00014078e61.mockapi.io/owners").then((function(e){if(e.status){var t=e.data||[];a(t.reduce((function(e,t){var r=t.pets,n=t.gender;return r&&Array.isArray(r)&&r.forEach((function(t){"Cat"===t.type&&(e[n]=[].concat(Object(s.a)(e[n]||[]),[t.name]))})),e}),{}))}}))}),[e]),c}();return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("header",{className:"App-header",children:Object.keys(e).map((function(t){return Object(d.jsxs)("section",{children:[Object(d.jsx)("h2",{children:t}),Object(d.jsx)("ul",{children:e[t].map((function(e,t){return Object(d.jsx)("li",{children:e},e+t)}))})]},t)}))})})};a.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.88ee2984.chunk.js.map