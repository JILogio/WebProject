(function(){"use strict";var a={6801:function(a,n,t){var e=t(9242),o=t(3396);function r(a,n,t,e,r,l){const s=(0,o.up)("HeaderLoginPage"),i=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(s),(0,o.Wm)(i)],64)}t(3455);const l={class:"navbar navbar-expand-lg bg-body-tertiary"},s={class:"container-fluid"},i=(0,o._)("a",{class:"navbar-brand",href:"/"},"Home",-1),c=(0,o._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o._)("span",{class:"navbar-toggler-icon"})],-1),u={class:"collapse navbar-collapse justify-content-end",id:"navbarSupportedContent"},d={class:"navbar-nav"},p={class:"nav-item"},f={class:"nav-item"};function m(a,n,t,e,r,m){const g=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("body",null,[(0,o._)("nav",l,[(0,o._)("div",s,[i,c,(0,o._)("div",u,[(0,o._)("ul",d,[(0,o._)("li",p,[(0,o.Wm)(g,{to:"/login",class:"nav-link"},{default:(0,o.w5)((()=>[(0,o.Uk)("Login")])),_:1})]),(0,o._)("li",f,[(0,o.Wm)(g,{to:"/register",class:"nav-link"},{default:(0,o.w5)((()=>[(0,o.Uk)("Register")])),_:1})])])])])])])}var g={name:"HeaderLoginPage"},b=t(89);const v=(0,b.Z)(g,[["render",m]]);var w=v,_={name:"App",components:{HeaderLoginPage:w}};const h=(0,b.Z)(_,[["render",r]]);var y=h,P=t(2483);function O(a,n,t,e,o,r){return" Home "}var j={name:"HomePage"};const k=(0,b.Z)(j,[["render",O]]);var x=k,q=t.p+"img/logo.d07b2b01.png";const H={class:"form-signin w-100 m-auto"},R=(0,o._)("img",{class:"mb-4",src:q,style:{width:"75%",display:"block",margin:"0 auto"}},null,-1),S=(0,o._)("h1",{class:"h3 mb-3 fw-normal",style:{"text-align":"center"}},"Please sign in",-1),U={class:"form-floating"},Z=(0,o._)("label",{for:"floatingInput"},"Email address",-1),C={class:"form-floating"},L=(0,o._)("label",{for:"floatingPassword"},"Password",-1),E=(0,o._)("button",{class:"btn btn-primary w-100 py-2",type:"submit"},"Sign in",-1);function V(a,n,t,r,l,s){return(0,o.wg)(),(0,o.iD)("main",H,[(0,o._)("form",{onSubmit:n[2]||(n[2]=(0,e.iM)(((...a)=>r.submit&&r.submit(...a)),["prevent"]))},[R,S,(0,o._)("div",U,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":n[0]||(n[0]=a=>r.data.email=a),type:"email",class:"form-control",id:"floatingInput",placeholder:"name@example.com",required:""},null,512),[[e.nr,r.data.email]]),Z]),(0,o._)("div",C,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":n[1]||(n[1]=a=>r.data.password=a),type:"password",class:"form-control",id:"floatingPassword",placeholder:"Password",required:""},null,512),[[e.nr,r.data.password]]),L]),E],32)])}t(7658);var D={url:"http://192.168.100.13:3900/api/"},N=D,W=t(4870),M=t(4161);const T=M.Z.create({withCredentials:!0});var I={name:"LoginPage",setup(){const a=N.url,n=(0,W.qj)({email:"",password:""}),t=(0,P.tv)(),e=async()=>{await T.post(a+"login",n).then((()=>{t.push("/")})).catch((a=>{console.log(a)}))};return{data:n,submit:e}}};const A=(0,b.Z)(I,[["render",V]]);var F=A;const Y={class:"form-signin w-100 m-auto"},z=(0,o._)("h1",{class:"h3 mb-3 fw-normal",style:{"text-align":"center"}},"Please register",-1),B={class:"form-floating"},G=(0,o._)("label",{for:"floatingName"},"Name",-1),J={class:"form-floating"},K=(0,o._)("label",{for:"floatingEmail"},"Email address",-1),Q={class:"form-floating"},X=(0,o._)("label",{for:"floatingPassword"},"Password",-1),$=(0,o._)("div",{class:"form-floating"},[(0,o._)("input",{type:"password",class:"form-control",id:"floatingRePassword",placeholder:"Re-Password",required:""}),(0,o._)("label",{for:"floatingRePassword"},"Re-Password")],-1),aa=(0,o._)("button",{class:"btn btn-primary w-100 py-2",type:"submit"},"Submit",-1);function na(a,n,t,r,l,s){return(0,o.wg)(),(0,o.iD)("main",Y,[(0,o._)("form",{onSubmit:n[3]||(n[3]=(0,e.iM)(((...a)=>r.submit&&r.submit(...a)),["prevent"]))},[z,(0,o._)("div",B,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":n[0]||(n[0]=a=>r.data.name=a),class:"form-control",id:"floatingName",placeholder:"Name",required:""},null,512),[[e.nr,r.data.name]]),G]),(0,o._)("div",J,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":n[1]||(n[1]=a=>r.data.email=a),type:"email",class:"form-control",id:"floatingEmail",placeholder:"name@example.com",required:""},null,512),[[e.nr,r.data.email]]),K]),(0,o._)("div",Q,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":n[2]||(n[2]=a=>r.data.password=a),type:"password",class:"form-control",id:"floatingPassword",placeholder:"Password",required:""},null,512),[[e.nr,r.data.password]]),X]),$,aa],32)])}var ta={name:"RegisterPage",setup(){const a=N.url,n=(0,W.qj)({name:"",email:"",role:"client",password:""}),t=(0,P.tv)(),e=async()=>{await M.Z.post(a+"register",n).then((a=>{console.log(a.data),t.push("login")})).catch((a=>{console.log(a)}))};return{data:n,submit:e}}};const ea=(0,b.Z)(ta,[["render",na]]);var oa=ea;const ra=[{path:"/",component:x},{path:"/login",component:F},{path:"/register",component:oa}],la=(0,P.p7)({history:(0,P.PO)("/"),routes:ra}),sa=(0,e.ri)(y);sa.use(la),sa.mount("#app")}},n={};function t(e){var o=n[e];if(void 0!==o)return o.exports;var r=n[e]={exports:{}};return a[e].call(r.exports,r,r.exports,t),r.exports}t.m=a,function(){var a=[];t.O=function(n,e,o,r){if(!e){var l=1/0;for(u=0;u<a.length;u++){e=a[u][0],o=a[u][1],r=a[u][2];for(var s=!0,i=0;i<e.length;i++)(!1&r||l>=r)&&Object.keys(t.O).every((function(a){return t.O[a](e[i])}))?e.splice(i--,1):(s=!1,r<l&&(l=r));if(s){a.splice(u--,1);var c=o();void 0!==c&&(n=c)}}return n}r=r||0;for(var u=a.length;u>0&&a[u-1][2]>r;u--)a[u]=a[u-1];a[u]=[e,o,r]}}(),function(){t.n=function(a){var n=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(n,{a:n}),n}}(),function(){t.d=function(a,n){for(var e in n)t.o(n,e)&&!t.o(a,e)&&Object.defineProperty(a,e,{enumerable:!0,get:n[e]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,n){return Object.prototype.hasOwnProperty.call(a,n)}}(),function(){t.p="/"}(),function(){var a={143:0};t.O.j=function(n){return 0===a[n]};var n=function(n,e){var o,r,l=e[0],s=e[1],i=e[2],c=0;if(l.some((function(n){return 0!==a[n]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(i)var u=i(t)}for(n&&n(e);c<l.length;c++)r=l[c],t.o(a,r)&&a[r]&&a[r][0](),a[r]=0;return t.O(u)},e=self["webpackChunkweb_project"]=self["webpackChunkweb_project"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=t.O(void 0,[998],(function(){return t(6801)}));e=t.O(e)})();
//# sourceMappingURL=app.b26ff2ff.js.map