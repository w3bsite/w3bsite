(function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],l=0,p=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-034bb91e":"85ebd179","chunk-2d0b37ce":"9105c559","chunk-2d22d746":"95ae769e","chunk-3e893a10":"83080347","chunk-5653c65f":"bba83a70","chunk-74854d7d":"cd5d0e57"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-034bb91e":1,"chunk-3e893a10":1,"chunk-5653c65f":1,"chunk-74854d7d":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-034bb91e":"59b830df","chunk-2d0b37ce":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-3e893a10":"a775e014","chunk-5653c65f":"4eac7897","chunk-74854d7d":"075fe45c"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){s=p[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),a=n("bc3a"),o=n.n(a);r["a"].prototype.$url="https://corvirus.herokuapp.com/products",r["a"].prototype.$prox=o.a.create({baseURL:"https://sabz.herokuapp.com/https://corvirus.herokuapp.com/"}),r["a"].prototype.$axios=o.a.create({}),r["a"].prototype.$cor=o.a.create({baseURL:"https://corvirus.herokuapp.com/"});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("AppBar",[n("v-main",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1)],1)],1)},c=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{dark:""}},[n("v-navigation-drawer",{attrs:{"mini-variant":!e.miniVariant,clipped:e.clipped,fixed:"",bottom:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{nav:""}},[n("v-switch",{attrs:{hint:"Don't Touch!",inset:"","persistent-hint":""},model:{value:e.$vuetify.theme.dark,callback:function(t){e.$set(e.$vuetify.theme,"dark",t)},expression:"$vuetify.theme.dark"}}),e._l(e.items,(function(t,r){return n("v-list-item",{key:r,attrs:{to:t.to,router:"",exact:"","active-class":"deep-purple--text text--accent-4"}},[n("v-list-item-action",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t.title)}})],1)],1)}))],2)],1),n("v-app-bar",{attrs:{"clipped-left":e.clipped,fixed:"",app:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),e.drawer?n("v-btn",{attrs:{icon:""},on:{click:function(t){t.stopPropagation(),e.miniVariant=!e.miniVariant}}},[n("v-icon",[e._v("mdi-"+e._s("chevron-"+(e.miniVariant?"left":"right")))])],1):e._e(),n("v-toolbar-title",{domProps:{textContent:e._s(e.title)}}),n("v-spacer")],1),e._t("default"),n("v-footer",{attrs:{absolute:"",app:""}},[n("span",{directives:[{name:"focus",rawName:"v-focus"}]},[e._v("© "+e._s((new Date).getFullYear()))])])],2)},s=[],l={data:function(){return{clipped:!1,drawer:!1,fixed:!0,miniVariant:!0,right:!0,rightDrawer:!1,title:"Fit Games",items:[{icon:"mdi-home",title:"Welcome",to:"/"},{icon:"mdi-web",title:"Learn Web",to:"/Web"},{icon:"mdi-chart-bubble",title:"Game news",to:"/news"},{icon:"mdi-apps",title:"Articles",to:"/Articles"},{icon:"mdi-gamepad-variant",title:"Games",to:"/Games"},{icon:"mdi-test-tube",title:"Test",to:"/Test"}]}},directives:{focus:{inserted:function(e){e.focus()}}},computed:{mini:function(){return!!this.$vuetify.breakpoint.mobile}},mounted:function(){1==this.$vuetify.breakpoint.mobile?(this.drawer=!1,this.miniVariant=!0):(this.drawer=!0,this.miniVariant=!1)}},p=l,d=n("2877"),f=n("6544"),h=n.n(f),m=n("7496"),v=n("40dc"),b=n("5bc1"),g=n("8336"),k=n("553a"),w=n("132d"),y=n("8860"),V=n("da13"),_=n("1800"),x=n("5d23"),A=n("f774"),j=n("2fa4"),C=n("b73d"),O=n("2a7f"),P=Object(d["a"])(p,u,s,!1,null,null,null),T=P.exports;h()(P,{VApp:m["a"],VAppBar:v["a"],VAppBarNavIcon:b["a"],VBtn:g["a"],VFooter:k["a"],VIcon:w["a"],VList:y["a"],VListItem:V["a"],VListItemAction:_["a"],VListItemContent:x["a"],VListItemTitle:x["b"],VNavigationDrawer:A["a"],VSpacer:j["a"],VSwitch:C["a"],VToolbarTitle:O["a"]});var $={name:"App",components:{AppBar:T},data:function(){return{}}},E=$,L=n("a523"),S=n("f6c4"),N=Object(d["a"])(E,i,c,!1,null,null,null),B=N.exports;h()(N,{VApp:m["a"],VContainer:L["a"],VMain:S["a"]});var I=n("b85c"),D=(n("d3b7"),n("ddb0"),n("9483"));Object(D["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),caches.keys().then((function(e){var t,n=Object(I["a"])(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;caches.delete(r)}}catch(a){n.e(a)}finally{n.f()}}))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var F=n("8c4f"),G=(n("3ca3"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("v-card",{},[n("v-card-actions",[n("h1",[e._v("Home Page")]),n("h2")])],1),n("br"),n("v-container",e._l(3,(function(t){return n("v-row",{key:t},[n("div",{staticClass:"col"},[e._v("Game")])])})),1)],1)}),M=[],H={name:"Home",data:function(){return{}}},W=H,q=n("b0af"),R=n("99d9"),U=n("0fd9b"),J=Object(d["a"])(W,G,M,!1,null,null,null),z=J.exports;h()(J,{VCard:q["a"],VCardActions:R["a"],VContainer:L["a"],VRow:U["a"]});var K=[{path:"/",name:"Home",component:z},{path:"/games",name:"Games",component:function(){return n.e("chunk-034bb91e").then(n.bind(null,"a2e9"))}},{path:"/articles",name:"Articles",component:function(){return n.e("chunk-2d0b37ce").then(n.bind(null,"291b"))}},{path:"/web",name:"Web",component:function(){return n.e("chunk-3e893a10").then(n.bind(null,"34fd"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/games/single/:id",name:"single",props:!0,component:function(){return n.e("chunk-5653c65f").then(n.bind(null,"57a9"))}},{path:"/test",name:"Test",component:function(){return n.e("chunk-74854d7d").then(n.bind(null,"78c1"))}}],Y=K;r["a"].use(F["a"]);var Q=new F["a"]({routes:Y}),X=Q,Z=n("2f62");r["a"].use(Z["a"]);var ee=new Z["a"].Store({state:{},mutations:{},actions:{},modules:{}}),te=n("f309");r["a"].use(te["a"]);var ne=new te["a"]({theme:{dark:!0}}),re=n("4fd8");r["a"].use(re["a"]);var ae=n("3003");r["a"].use(ae["a"]),new r["a"]({router:X,store:ee,vuetify:ne,render:function(e){return e(B)}}).$mount("#app")}});
//# sourceMappingURL=app.edc40896.js.map