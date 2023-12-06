(function(){"use strict";var a={5268:function(a,e,t){var n=t(9242),o=t(3396);function r(a,e,t,n,r,s){const l=(0,o.up)("HeaderLoginPage"),i=(0,o.up)("HeaderAdminPage"),c=(0,o.up)("MainHeaderPage"),d=(0,o.up)("RouterView"),u=(0,o.up)("FooterPage");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("header",null,[""===n.role?((0,o.wg)(),(0,o.j4)(l,{key:0})):(0,o.kq)("",!0),"admin"===n.role?((0,o.wg)(),(0,o.j4)(i,{key:1})):(0,o.kq)("",!0),"client"===n.role?((0,o.wg)(),(0,o.j4)(c,{key:2})):(0,o.kq)("",!0)]),(0,o.Wm)(d),r.hideFooter?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(u,{key:0}))],64)}t(3455),t(7024);const s={class:"navbar navbar-expand-lg bg-body-tertiary"},l={class:"container-fluid"},i=(0,o._)("a",{class:"navbar-brand",href:"/"},"Coffe Shop",-1),c=(0,o._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o._)("span",{class:"navbar-toggler-icon"})],-1),d={class:"collapse navbar-collapse justify-content-end",id:"navbarSupportedContent"},u={key:0,class:"navbar-nav"},p=(0,o._)("li",{class:"nav-item"},[(0,o._)("a",{href:"/login",class:"nav-link"},"Login")],-1),m=(0,o._)("li",{class:"nav-item"},[(0,o._)("a",{href:"/register",class:"nav-link"},"Register")],-1),g=(0,o._)("li",{class:"nav-item"},[(0,o._)("a",{href:"/about",class:"nav-link"},"About Us")],-1),f=[p,m,g];function v(a,e,t,n,r,p){const m=(0,o.up)("headers");return(0,o.wg)(),(0,o.j4)(m,null,{default:(0,o.w5)((()=>[(0,o._)("nav",s,[(0,o._)("div",l,[i,c,(0,o._)("div",d,[a.auth?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("ul",u,f))])])])])),_:1})}var b={name:"HeaderLoginPage"},h=t(89);const _=(0,h.Z)(b,[["render",v]]);var w=_;const y={class:"navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-between align-items-center"},P={class:"container-fluid"},x=(0,o._)("a",{class:"navbar-brand",href:"/"},"Home",-1),k=(0,o._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o._)("span",{class:"navbar-toggler-icon"})],-1),j={class:"collapse navbar-collapse",id:"navbarSupportedContent"},C=(0,o.uE)('<ul class="navbar-nav me-auto mb-2 mb-lg-0"><li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Productos</a></li><li class="nav-item"><a class="nav-link" href="#">Ofertas</a></li></ul>',1),S={class:"navbar-nav"},H={class:"nav-item"},q=(0,o._)("form",{class:"d-flex",role:"search"},[(0,o._)("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),(0,o._)("button",{class:"btn btn-outline-success",type:"submit"},"Search")],-1);function U(a,e,t,n,r,s){return(0,o.wg)(),(0,o.iD)("header",null,[(0,o._)("nav",y,[(0,o._)("div",P,[x,k,(0,o._)("div",j,[C,(0,o._)("ul",S,[(0,o._)("li",H,[(0,o._)("a",{href:"/login",class:"nav-link",onClick:e[0]||(e[0]=(...a)=>n.logout&&n.logout(...a))},"Logout")])]),q])])])])}var Z=t(65),A={url:"http://localhost:3900/api/"},O=A,T=t(4161),E={name:"MainHeaderPage",setup(){const a=O.url,e=(0,Z.oR)(),t=(0,o.Fl)((()=>e.state.authenticated)),n=async()=>{await T.Z.post(a+"User/logout",{},{withCredentials:!0})};return{auth:t,logout:n}}};const R=(0,h.Z)(E,[["render",U]]);var D=R;const F={class:"navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-between align-items-center"},M={class:"container-fluid"},V=(0,o._)("a",{class:"navbar-brand",href:"/"},"Home",-1),I=(0,o._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o._)("span",{class:"navbar-toggler-icon"})],-1),L={class:"collapse navbar-collapse",id:"navbarSupportedContent"},W=(0,o.uE)('<ul class="navbar-nav me-auto mb-2 mb-lg-0"><li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Ventas</a></li><li class="nav-item"><a class="nav-link" href="#">Reporte</a></li></ul>',1),N={class:"navbar-nav"},$={class:"nav-item"};function z(a,e,t,n,r,s){return(0,o.wg)(),(0,o.iD)("header",null,[(0,o._)("nav",F,[(0,o._)("div",M,[V,I,(0,o._)("div",L,[W,(0,o._)("ul",N,[(0,o._)("li",$,[(0,o._)("a",{href:"/login",class:"nav-link",onClick:e[0]||(e[0]=(...a)=>n.logout&&n.logout(...a))},"Logout")])])])])])])}var Q={name:"HeaderAdminPage",setup(){const a=O.url,e=(0,Z.oR)(),t=(0,o.Fl)((()=>e.state.authenticated)),n=async()=>{await T.Z.post(a+"User/logout",{},{withCredentials:!0})};return{auth:t,logout:n}}};const B=(0,h.Z)(Q,[["render",z]]);var Y=B,G=t.p+"img/logo_A.a093e6e0.png",J=t.p+"img/facebook.2c2a2c9c.png",K=t.p+"img/instagram.89d90cf5.png",X=t.p+"img/whatss.edfd3c0d.png";const aa={class:"pt-4 my-md-3 pt-md-3 border-top"},ea=(0,o._)("img",{src:G,alt:"Logo",style:{"aspect-ratio":"1/1",width:"150px"}},null,-1),ta=(0,o._)("h5",{class:"mb-2"},"Nuestras redes",-1),na=(0,o._)("ul",{class:"list-unstyled"},[(0,o._)("li",null,[(0,o._)("a",{class:"text-muted",href:"#"},[(0,o._)("img",{src:J,alt:"Facebook",style:{width:"20px",height:"20px"}})])]),(0,o._)("li",null,[(0,o._)("a",{class:"text-muted",href:"#"},[(0,o._)("img",{src:K,alt:"Instagram",style:{width:"20px",height:"20px"}})])]),(0,o._)("li",null,[(0,o._)("a",{class:"text-muted",href:"#"},[(0,o._)("img",{src:X,alt:"Whatsapp",style:{width:"20px",height:"20px"}})])])],-1),oa=(0,o._)("h5",{class:"mb-2"},"Information",-1),ra=(0,o._)("ul",{class:"list-unstyled"},[(0,o._)("li",null,[(0,o._)("a",{class:"text-muted",href:"#"},"About")]),(0,o._)("li",null,[(0,o._)("a",{class:"text-muted",href:"#"},"Products")]),(0,o._)("li",null,[(0,o._)("a",{class:"text-muted",href:"#"},"Pricing")])],-1);function sa(a,e,t,n,r,s){const l=(0,o.up)("b-col"),i=(0,o.up)("b-row"),c=(0,o.up)("b-container");return(0,o.wg)(),(0,o.iD)("footer",aa,[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(l,{md:"4",class:"mb-2 mb-md-0"},{default:(0,o.w5)((()=>[ea])),_:1}),(0,o.Wm)(l,{md:"4",class:"mb-2 mb-md-0"},{default:(0,o.w5)((()=>[ta,na])),_:1}),(0,o.Wm)(l,{md:"4"},{default:(0,o.w5)((()=>[oa,ra])),_:1})])),_:1})])),_:1})])}var la={name:"FooterPage"};const ia=(0,h.Z)(la,[["render",sa]]);var ca=ia,da=t(4870),ua=t(2483),pa={name:"App",components:{HeaderLoginPage:w,MainHeaderPage:D,RouterView:ua.MA,HeaderAdminPage:Y,FooterPage:ca},data(){return{hideFooter:!1}},watch:{"$route.path":{handler(a){this.hideFooter="/login"===a||"/register"===a},immediate:!0}},setup(){const a=O.url,e=(0,da.iH)("");return(0,o.bv)((async()=>{try{const t=await T.Z.get(`${a}User/user`,{headers:{"Content-Type":"application/json"},withCredentials:!0}),n=t.data;e.value=`${n.role}`}catch(t){console.log(t)}})),{role:e}}};const ma=(0,h.Z)(pa,[["render",r]]);var ga=ma,fa=t(6882),va=t(7139);const ba=a=>((0,o.dD)("data-v-85878b96"),a=a(),(0,o.Cn)(),a),ha={class:"Welcome"},_a={class:"container1"},wa=ba((()=>(0,o._)("h1",null,"Bienvenidos",-1))),ya=ba((()=>(0,o._)("button",{class:"started"},"About Us",-1)));function Pa(a,e,t,n,r,s){return(0,o.wg)(),(0,o.iD)("section",ha,[(0,o._)("div",_a,[wa,(0,o._)("p",null,(0,va.zw)(n.message),1),ya])])}var xa={name:"HomePage",setup(){const a=(0,da.iH)("No estás logeado"),e=(0,Z.oR)(),t=O.url;return(0,o.bv)((async()=>{try{const n=await T.Z.get(`${t}User/user`,{headers:{"Content-Type":"application/json"},withCredentials:!0}),o=n.data;a.value=`Hola ${o.name}`,await e.dispatch("setAuth",!0)}catch(n){await e.dispatch("setAuth",!1)}})),{message:a}}};const ka=(0,h.Z)(xa,[["render",Pa],["__scopeId","data-v-85878b96"]]);var ja=ka,Ca=t.p+"img/logo.d07b2b01.png";const Sa=a=>((0,o.dD)("data-v-89a096c0"),a=a(),(0,o.Cn)(),a),Ha={class:"form-signin w-100 m-auto"},qa=Sa((()=>(0,o._)("img",{class:"mb-4",src:Ca,style:{width:"75%",display:"block",margin:"0 auto"}},null,-1))),Ua=Sa((()=>(0,o._)("h1",{class:"h3 mb-3 fw-normal",style:{"text-align":"center"}},"Please sign in",-1))),Za={class:"form-floating"},Aa=Sa((()=>(0,o._)("label",{for:"floatingInput"},"Email address",-1))),Oa={class:"form-floating"},Ta=Sa((()=>(0,o._)("label",{for:"floatingPassword"},"Password",-1))),Ea=Sa((()=>(0,o._)("button",{class:"btn btn-primary w-100 py-2",type:"submit"},"Sign in",-1))),Ra={key:0,style:{color:"red"}};function Da(a,e,t,r,s,l){return(0,o.wg)(),(0,o.iD)("main",Ha,[(0,o._)("form",{onSubmit:e[2]||(e[2]=(0,n.iM)(((...a)=>r.submit&&r.submit(...a)),["prevent"]))},[qa,Ua,(0,o._)("div",Za,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>r.data.email=a),type:"email",class:"form-control",id:"floatingInput",placeholder:"name@example.com",required:""},null,512),[[n.nr,r.data.email]]),Aa]),(0,o._)("div",Oa,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>r.data.password=a),type:"password",class:"form-control",id:"floatingPassword",placeholder:"Password",required:""},null,512),[[n.nr,r.data.password]]),Ta]),Ea,r.message?((0,o.wg)(),(0,o.iD)("div",Ra,(0,va.zw)(r.message),1)):(0,o.kq)("",!0)],32)])}t(7658);const Fa=T.Z.create({withCredentials:!0});var Ma={name:"LoginPage",setup(){const a=O.url,e=(0,da.iH)(""),t=(0,da.qj)({email:"",password:""}),n=(0,ua.tv)(),o=async()=>{try{const e=await Fa.post(a+"User/login",t);"error"!=e.data.status&&n.push("/")}catch(o){e.value=`${o.response.data.message}`}};return{data:t,message:e,submit:o}}};const Va=(0,h.Z)(Ma,[["render",Da],["__scopeId","data-v-89a096c0"]]);var Ia=Va;const La=a=>((0,o.dD)("data-v-21cb011f"),a=a(),(0,o.Cn)(),a),Wa={class:"form-signin w-100 m-auto"},Na=La((()=>(0,o._)("h1",{class:"h3 mb-3 fw-normal",style:{"text-align":"center"}},"Please register",-1))),$a={class:"form-floating"},za=La((()=>(0,o._)("label",{for:"floatingName"},"Name",-1))),Qa={class:"form-floating"},Ba=La((()=>(0,o._)("label",{for:"floatingEmail"},"Email address",-1))),Ya={class:"form-floating"},Ga=La((()=>(0,o._)("label",{for:"floatingPassword"},"Password",-1))),Ja={class:"form-floating"},Ka=La((()=>(0,o._)("label",{for:"floatingRePassword"},"Re-Password",-1))),Xa=La((()=>(0,o._)("button",{class:"btn btn-primary w-100 py-2",type:"submit"},"Submit",-1)));function ae(a,e,t,r,s,l){return(0,o.wg)(),(0,o.iD)("main",Wa,[(0,o._)("form",{onSubmit:e[4]||(e[4]=(0,n.iM)(((...a)=>r.submit&&r.submit(...a)),["prevent"]))},[Na,(0,o._)("div",$a,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>r.data.name=a),type:"text",class:"form-control",id:"floatingName",placeholder:"Name",required:""},null,512),[[n.nr,r.data.name]]),za]),(0,o._)("div",Qa,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>r.data.email=a),type:"email",class:"form-control",id:"floatingEmail",placeholder:"name@example.com",required:""},null,512),[[n.nr,r.data.email]]),Ba]),(0,o._)("div",Ya,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>r.data.password=a),type:"password",class:"form-control password",id:"floatingPassword",placeholder:"Password",required:""},null,512),[[n.nr,r.data.password]]),Ga]),(0,o._)("div",Ja,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[3]||(e[3]=a=>r.data.rePassword=a),type:"password",class:"form-control re-password",id:"floatingRePassword",placeholder:"Re-Password",required:""},null,512),[[n.nr,r.data.rePassword]]),Ka]),Xa],32)])}var ee={name:"RegisterPage",setup(){const a=O.url,e=(0,da.qj)({name:"",email:"",role:"client",password:"",rePassword:""}),t=(0,ua.tv)(),n=async()=>{e.password===e.rePassword?await T.Z.post(a+"User/register",e).then((a=>{console.log(a.data),t.push("/login")})).catch((a=>{console.log(a)})):alert("Password and Re-Password are not the same")};return{data:e,submit:n}}};const te=(0,h.Z)(ee,[["render",ae],["__scopeId","data-v-21cb011f"]]);var ne=te,oe=t.p+"img/coffe_shop.d538418f.jpg";const re=(0,o.uE)('<div class="Tittle" data-v-5a394022><h1 data-v-5a394022>Conoce nuestra cafetería</h1><p data-v-5a394022>Cafetería especializada para degustar en familia</p><h2 data-v-5a394022>Quienes somos</h2></div><div class="container" data-v-5a394022><img src="'+oe+'" alt="coffe_shop" data-v-5a394022><p data-v-5a394022> Somos una empresa nacional dedicada a la distribución de alimentos cárnicos a domicilio con sede en Quito, Ecuador. Estamos comprometidos con ofrecer unexcelente servicio al cliente y ofrecer productos de la más alta calidad. Para lograr esto estamos constantemente mejorando nuestros procesos para servirtemejor y asegurarnos que Friovesa se convierta en tu preferencia al momento de comprar productos cárnicos.<br data-v-5a394022><br data-v-5a394022> Creemos en la calidad de nuestros productores nacionales, así como en la de nuestros aliados importadores y al igual que tú, siempre estamos en la búsqueda dela mejor calidad en nuestros alimentos. Para garantizar un mejor tiempo de vida, todos nuestros productos se encuentran empacados al vacío y se mantienen congeladoshasta ser despachados a tu domicilio.<br data-v-5a394022><br data-v-5a394022> Esperamos poder servirte pronto.<br data-v-5a394022><br data-v-5a394022> El equipo de Friovesa. </p></div>',2);function se(a,e,t,n,o,r){return re}var le={name:"AboutPage"};const ie=(0,h.Z)(le,[["render",se],["__scopeId","data-v-5a394022"]]);var ce=ie,de=(0,Z.MT)({state:{authenticated:!1},mutations:{SET_AUTH:function(a,e){a.authenticated=e}},actions:{setAuth:function({commit:a},e){a("SET_AUTH",e)}},modules:{}});const ue=[{path:"/",component:ja},{path:"/home",component:ja},{path:"/login",component:Ia},{path:"/register",component:ne},{path:"/about",component:ce}],pe=(0,ua.p7)({history:(0,ua.PO)(),routes:ue}),me=(0,n.ri)(ga);me.use(pe),me.use(de),me.use(fa.ZPm),me.mount("#app")}},e={};function t(n){var o=e[n];if(void 0!==o)return o.exports;var r=e[n]={exports:{}};return a[n].call(r.exports,r,r.exports,t),r.exports}t.m=a,function(){var a=[];t.O=function(e,n,o,r){if(!n){var s=1/0;for(d=0;d<a.length;d++){n=a[d][0],o=a[d][1],r=a[d][2];for(var l=!0,i=0;i<n.length;i++)(!1&r||s>=r)&&Object.keys(t.O).every((function(a){return t.O[a](n[i])}))?n.splice(i--,1):(l=!1,r<s&&(s=r));if(l){a.splice(d--,1);var c=o();void 0!==c&&(e=c)}}return e}r=r||0;for(var d=a.length;d>0&&a[d-1][2]>r;d--)a[d]=a[d-1];a[d]=[n,o,r]}}(),function(){t.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(e,{a:e}),e}}(),function(){t.d=function(a,e){for(var n in e)t.o(e,n)&&!t.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:e[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){t.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var a={143:0};t.O.j=function(e){return 0===a[e]};var e=function(e,n){var o,r,s=n[0],l=n[1],i=n[2],c=0;if(s.some((function(e){return 0!==a[e]}))){for(o in l)t.o(l,o)&&(t.m[o]=l[o]);if(i)var d=i(t)}for(e&&e(n);c<s.length;c++)r=s[c],t.o(a,r)&&a[r]&&a[r][0](),a[r]=0;return t.O(d)},n=self["webpackChunkweb_project"]=self["webpackChunkweb_project"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(5268)}));n=t.O(n)})();
//# sourceMappingURL=app.2e9d5810.js.map