var ce=Object.defineProperty;var U=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var H=(e,t,o)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,W=(e,t)=>{for(var o in t||(t={}))pe.call(t,o)&&H(e,o,t[o]);if(U)for(var o of U(t))de.call(t,o)&&H(e,o,t[o]);return e};import{d as N,u as me,r as f,o as G,a as K,b as v,c as Y,w as c,e as n,f as i,N as ge,g as he,h as _e,z as fe,i as ve,j as ke,k as Z,l as Ee,m as ye,n as Fe,p as we,q as Ae,s as E,t as Ce,v as xe,x as De,y,A as P,B as Ie,C as Ne,D,E as h,F as q,G as Pe,H as Le,I as L,L as be,J as X,K as $e,M as Se,O as Be,P as Oe,Q as Te,R as Ve,S as Re,T as Me,U as Q,V as je,W as ze,X as Je,Y as Ue,Z as He,_ as We,$ as Ge,a0 as Ke,a1 as Ye,a2 as Ze,a3 as qe}from"./vendor.64da71ad.js";const Xe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}};Xe();const Qe=N({setup(e){return window.$message=me(),(t,o)=>null}}),et=["https://api.13pikpak.cf","https://api.14pikpak.cf","https://api.15pikpak.cf","https://api.16pikpak.cf","https://api.17pikpak.cf","https://api.18pikpak.cf"],tt=N({setup(e){const t=f({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return G(()=>{localStorage.getItem("isSettingProxy")||localStorage.setItem("proxy",JSON.stringify(et))}),(o,s)=>{const a=K("router-view");return v(),Y(i(ke),{locale:i(fe),"date-locale":i(ve),"theme-overrides":t.value},{default:c(()=>[n(i(_e),null,{default:c(()=>[n(i(ge),null,{default:c(()=>[n(i(he),null,{default:c(()=>[n(Qe),n(a)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),ot="modulepreload",ee={},at="/newpp/",d=function(t,o){return!o||o.length===0?t():Promise.all(o.map(s=>{if(s=`${at}${s}`,s in ee)return;ee[s]=!0;const a=s.endsWith(".css"),r=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":ot,a||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),a)return new Promise((C,g)=>{u.addEventListener("load",C),u.addEventListener("error",g)})})).then(()=>t())};var st="/newpp/assets/logo1.08eb9157.png";const m=Z.create({});m.interceptors.request.use(e=>{var o;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(e.headers=e.headers||{},t.access_token&&(e.headers.Authorization=`${t.token_type||"Bearer"} ${t.access_token}`),((o=e.url)==null?void 0:o.indexOf("https://",4))===-1){const s=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(s.length>0){const a=Math.floor(Math.random()*s.length);e.url=s[a]+"/"+e.url}}return e});let w=!1;m.interceptors.response.use(e=>e,e=>{var s;const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:console.log(1);const a=window.localStorage.getItem("pikpakLoginData"),r=a?JSON.parse(a):{};return r.username&&r.password&&!w?(console.log("wait",o.url),w=!0,m.post("https://user.mypikpak.com/v1/auth/signin",W({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},r)).then(u=>(u.data&&u.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(u.data)),w=!1,m(o))).catch(()=>(I.push("/login"),!1))):r.username&&r.password&&w?new Promise((u,C)=>{const g=setInterval(()=>{w||(clearInterval(g),u(m(o)))},100)}):(I.push("/login"),Promise.reject(e));default:window.$message.error(((s=t==null?void 0:t.data)==null?void 0:s.error_description)||"\u51FA\u9519\u4E86");break}return console.log(o.url,111),Promise.reject(e)});const it=Z.create({});it.interceptors.request.use(e=>{e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"};const t=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(t.length>0){const o=Math.floor(Math.random()*t.length);e.url=t[o]+"/"+e.url}return e});const te=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let s=Math.floor(o/10);return e=e/Math.pow(2,10*s),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[s]};const nt=h("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[h("img",{src:"https://mypikpak.com/apple-touch-icon.png",class:"logo-box__icon",alt:""}),h("div",{class:"logo-box__text"},"PikPak")],-1),rt={key:0,class:"content-bottom"},ut=y("\u4F1A\u5458\u7801"),lt={style:{"margin-bottom":"0"}},ct=h("a",{style:{color:"#306eff"},target:"_blank",href:"https://k.youshop10.com/JGDtoxg6"},"2021\u5E7412\u670823\u65E5~2021\u5E7412\u670831\u65E5\uFFE5119\u8D2D\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361",-1),pt=y(" 2021\u5E7412\u670823\u65E5~2021\u5E7412\u670831\u65E5 \u30101\u5E74PikPak\u4F53\u9A8C\u4F1A\u5458\u4EC5\u552E\uFF1A119\u5143\uFF01\u539F\u4EF7450\u5143\u3011 2022\u5E741\u67081\u65E5\u8D77\uFF1A 1\u5E74PikPak\u4F53\u9A8C\u4F1A\u5458\u4EC5\u552E\uFF1A169\u5143\uFF01\u539F\u4EF7450\u5143\u3011 -\u6BCF\u4EBA\u53EA\u80FD\u8D2D\u4E70\u4F7F\u7528\u4E00\u6B21\uFF0C\u5B98\u65B9\u4EE3\u7406\u5546\u5206\u9500\uFF0C\u611F\u8C22\u652F\u6301 "),dt={class:"bottom-user-info"},mt={key:0,src:st,class:"user-info-avatar"},gt={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},ht={class:"user-info-name"},_t={key:0},ft={class:"action"},vt=y(" \u9000\u51FA\u767B\u5F55 "),kt=h("p",null,[h("a",{style:{color:"#306eff"},target:"_blank",href:"https://k.youshop10.com/JGDtoxg6"},"\u30100.33\u5143/\u5929\u3011PikPak\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361-\u53EF\u4E0E7\u5929\u514D\u8D39\u4F1A\u5458\u7801\u53E0\u52A0-\u6BCF\u4EBA\u53EA\u80FD\u8D2D\u4E70\u4F7F\u7528\u4E00\u6B21\uFF0C\u611F\u8C22\u652F\u6301")],-1),Et=y("\u6DFB\u52A0"),yt=N({setup(e){const t=f(!1),o=l=>()=>Q(L,null,{default:()=>Q(l)}),s=Ee(),a=ye(),r=f([{label:"\u6587\u4EF6",key:"list",icon:o(We)},{label:"\u89C6\u9891",key:"video",icon:o(je)},{label:"\u56FE\u7247",key:"image",icon:o(ze)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(Je)},{label:"\u9080\u8BF7",key:"invited",icon:o(Ue)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(He)}]),u=f(),C=()=>{m.get("https://user.mypikpak.com/v1/user/me").then(l=>{window.localStorage.setItem("pikpakUser",JSON.stringify(l.data)),u.value=l.data}).catch(l=>{console.log(l)})},g=f(),b=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/about").then(l=>{g.value=l.data}).catch(l=>{console.log(l)})},k=f(),oe=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(l=>{var p;k.value=(p=l.data)==null?void 0:p.data})},ae=(l,p)=>{console.log(p),s.push("/"+p.key)};G(()=>{C(),b(),oe()});const x=f(),F=f(!1),se=()=>{m.post("https://api-drive.mypikpak.com/vip/v1/order/activation-code",{activation_code:x.value,data:{}}).then(l=>{window.$message.success("\u5151\u6362\u6210\u529F"),b()}).catch(l=>{console.log(l)}).finally(()=>{F.value=!1})},$=f(!1),ie=l=>{$.value=l<800,t.value||(t.value=l<800)};Fe(a,()=>{$.value&&(t.value=!0)});const ne=we(),re=()=>{ne.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{m.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(l=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),s.push("/login")}).catch(l=>{console.log(l)})}})};return(l,p)=>{const ue=K("router-view"),le=Ae("resize");return v(),E(Me,null,[Ce(n(i(X),{"has-sider":"",onResize:ie},{default:c(()=>[n(i(xe),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:p[1]||(p[1]=_=>t.value=!0),onExpand:p[2]||(p[2]=_=>t.value=!1),bordered:""},{default:c(()=>{var _,S,B,O,T,V,R,M,j,z,J;return[nt,n(i(De),{options:r.value,value:String(i(a).name),"onUpdate:value":ae},null,8,["options","value"]),t.value?D("",!0):(v(),E("div",rt,[y(P(i(te)((_=g.value)==null?void 0:_.quota.usage))+" / "+P(i(te)((S=g.value)==null?void 0:S.quota.limit))+" ",1),n(i(Ie),{type:"primary",onClick:p[0]||(p[0]=At=>F.value=!0)},{default:c(()=>[ut]),_:1}),((B=g.value)==null?void 0:B.quota)?(v(),Y(i(Ne),{key:0,type:"line",percentage:Number((((O=g.value)==null?void 0:O.quota.usage)/((T=g.value)==null?void 0:T.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((V=k.value)==null?void 0:V.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):D("",!0),h("p",lt,[n(i(q),{width:600,placement:"right"},{trigger:c(()=>[ct]),default:c(()=>[pt]),_:1})])])),t.value?D("",!0):(v(),E("div",{key:1,class:Pe(["sider-bottom",{vip:((R=k.value)==null?void 0:R.status)==="ok"}])},[h("div",dt,[((M=k.value)==null?void 0:M.status)==="ok"?(v(),E("img",mt)):(v(),E("img",gt)),h("div",ht,[y(P((j=u.value)==null?void 0:j.name)+" ",1),((z=k.value)==null?void 0:z.status)==="ok"&&((J=k.value)==null?void 0:J.expire)?(v(),E("div",_t,[n(i(Le),{time:new Date(k.value.expire),type:"datetime"},null,8,["time"])])):D("",!0)]),h("div",ft,[n(i(q),null,{trigger:c(()=>[n(i(L),{onClick:re},{default:c(()=>[n(i(be))]),_:1})]),default:c(()=>[vt]),_:1})])])],2))]}),_:1},8,["collapsed"]),n(i(X),null,{default:c(()=>[n(i($e),{style:{height:"100vh"}},{default:c(()=>[n(i(Se),{style:{"max-height":"100vh"}},{default:c(()=>[n(ue)]),_:1})]),_:1})]),_:1})]),_:1},512),[[le]]),n(i(Re),{show:F.value,"onUpdate:show":p[5]||(p[5]=_=>F.value=_)},{default:c(()=>[n(i(Be),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":c(()=>[n(i(L),{onClick:p[3]||(p[3]=_=>F.value=!1)},{default:c(()=>[n(i(Oe))]),_:1})]),action:c(()=>[n(i(Te),{block:!0,type:"primary",disabled:!x.value,onClick:se},{default:c(()=>[Et]),_:1},8,["disabled"])]),default:c(()=>[n(i(Ve),{placeholder:"\u4F1A\u5458\u7801",value:x.value,"onUpdate:value":p[4]||(p[4]=_=>x.value=_)},null,8,["value"]),kt]),_:1})]),_:1},8,["show"])],64)}}}),Ft=[{path:"/",name:"home",component:yt,redirect:"/list",beforeEnter:(e,t,o)=>{const s=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");(!s||!s.access_token)&&e.name!=="setting"?o("/login"):o()},children:[{path:"list/:id?",name:"list",component:()=>d(()=>import("./list.e51e42a1.js"),["assets/list.e51e42a1.js","assets/list.764e0448.css","assets/vendor.64da71ad.js","assets/clipboard.a54b99ef.js"])},{path:"video",name:"video",component:()=>d(()=>import("./list.e51e42a1.js"),["assets/list.e51e42a1.js","assets/list.764e0448.css","assets/vendor.64da71ad.js","assets/clipboard.a54b99ef.js"])},{path:"image",name:"image",component:()=>d(()=>import("./list.e51e42a1.js"),["assets/list.e51e42a1.js","assets/list.764e0448.css","assets/vendor.64da71ad.js","assets/clipboard.a54b99ef.js"])},{path:"trash",name:"trash",component:()=>d(()=>import("./trash.0de9792a.js"),["assets/trash.0de9792a.js","assets/trash.99a3677d.css","assets/vendor.64da71ad.js"])},{path:"setting",name:"setting",component:()=>d(()=>import("./setting.26a99c60.js"),["assets/setting.26a99c60.js","assets/setting.f947579c.css","assets/vendor.64da71ad.js"])},{path:"invited",name:"invited",component:()=>d(()=>import("./invited.3aac0589.js"),["assets/invited.3aac0589.js","assets/invited.74b24e1e.css","assets/clipboard.a54b99ef.js","assets/vendor.64da71ad.js"])}]},{path:"/t/:id?",name:"test",component:()=>d(()=>import("./test.5840867a.js"),["assets/test.5840867a.js","assets/vendor.64da71ad.js"])},{path:"/s/:id/:password?",name:"shareInfo",component:()=>d(()=>import("./shareInfo.e646f638.js"),["assets/shareInfo.e646f638.js","assets/shareInfo.678356c6.css","assets/vendor.64da71ad.js"])},{path:"/login",name:"login",component:()=>d(()=>import("./login.d8be361a.js"),["assets/login.d8be361a.js","assets/login.a8b45006.css","assets/vendor.64da71ad.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/sms",name:"sms",component:()=>d(()=>import("./sms.d0ccaa8c.js"),["assets/sms.d0ccaa8c.js","assets/sms.81a6d8ca.css","assets/phone-pc2.dbf6d71e.js","assets/vendor.64da71ad.js"])},{path:"/register",name:"register",component:()=>d(()=>import("./register.6887a0dc.js"),["assets/register.6887a0dc.js","assets/register.5588ce76.css","assets/vendor.64da71ad.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/testtest",name:"testtest",component:()=>d(()=>import("./testtest.1394872c.js"),["assets/testtest.1394872c.js","assets/vendor.64da71ad.js"])}],wt=Ge({history:Ke(),routes:Ft});var I=wt;const A=Ye(tt);A.directive("resize",{mounted(e,t,o){e.$$erd=Ze({strategy:"scroll"}),e.$$erd.listenTo({},e,s=>{let a=s.offsetWidth,r=s.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var u;(u=o.props)==null||u.onResize(a,r)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});A.config.globalProperties.$http=m;A.use(I);A.use(qe,{router:I,siteIdList:[1280510106]});A.mount("#app");export{te as b,m as i,et as p};
