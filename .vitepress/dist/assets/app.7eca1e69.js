import{d as p,K as s,a0 as i,u,h as c,l,a1 as d,a2 as f,a3 as m,a4 as h,a5 as A,a6 as g,a7 as v,a8 as P,a9 as C,aa as y,ab as R,ac as _,ad as b,H as w}from"./chunks/framework.a7360db3.js";import{t as E}from"./chunks/theme.12d75bbd.js";const D={...E};function r(e){if(e.extends){const t=r(e.extends);return{...t,...e,enhanceApp(a){t.enhanceApp&&t.enhanceApp(a),e.enhanceApp&&e.enhanceApp(a)}}}return e}const n=r(D),T=p({name:"VitePressApp",setup(){const{site:e}=u();return c(()=>{l(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),d(),f(),m(),n.setup&&n.setup(),()=>h(n.Layout)}});async function O(){const e=j(),t=S();t.provide(A,e);const a=g(e.route);return t.provide(v,a),t.component("Content",P),t.component("ClientOnly",C),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:t,router:e,siteData:y}),{app:t,router:e,data:a}}function S(){return R(T)}function j(){let e=s,t;return _(a=>{let o=b(a);return e&&(t=o),(e||t===o)&&(o=o.replace(/\.js$/,".lean.js")),s&&(e=!1),w(()=>import(o),[])},n.NotFound)}s&&O().then(({app:e,router:t,data:a})=>{t.go().then(()=>{i(t.route,a.site),e.mount("#app")})});export{O as createApp};
