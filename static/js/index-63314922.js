import{a as x,i as w,c7 as g,c8 as k,c9 as C,ca as $,o,e as s,s as n,t as r,q as d,F as u,v as m,f as h,cb as v,A as b,bc as N}from"./index-ed5c6bde.js";import{_ as T}from"./index-19ca99ba.js";import{B}from"./icon-selector-d4f67148.js";import"./el-popper-41cbb7e4.js";import"./index-a65f35ce.js";import"./dropdown-8c60065b.js";const H={class:"icons-wrapper"},y={class:"w-[300px]"},E={class:"icon-list"},V=["onClick","title"],A={class:"icon-list"},F=["onClick","title"],L={class:"icon-list"},P=["onClick","title"],q={class:"icon-list"},z=["onClick","title"],M=x({__name:"index",setup(S){const c=w({localIcon:[],iconfontIcon:[],awesomeIcon:[],eleIcon:[]});g().then(t=>{c.localIcon=t}),k().then(t=>{c.iconfontIcon=t.map(l=>`iconfont ${l}`)}),C().then(t=>{c.awesomeIcon=t.map(l=>`fa ${l}`)}),$().then(t=>{c.eleIcon=t});const i=t=>{I(t)},I=t=>{const l=`<base-icon name="${t}" color="#000" size="18px" />`;navigator.clipboard.writeText(l).then(()=>{v.success(`${l}`)},()=>{v.error("复制 失败")})};return(t,l)=>{const _=T,p=b;return o(),s("div",H,[n(_,{title:"图标选择器",showHelp:"",helpText:"选择图标可复制代码"},{default:r(()=>[d("div",y,[n(B,{onChange:i})])]),_:1}),n(_,{title:"Element Puls 图标",showHelp:"",helpText:"点击图标可复制代码"},{default:r(()=>[d("div",E,[(o(!0),s(u,null,m(h(c).eleIcon,(e,a)=>(o(),s("div",{class:"icon-item",key:a,onClick:f=>i(e),title:e},[n(p,{name:e},null,8,["name"])],8,V))),128))])]),_:1}),n(_,{title:"本地图标:/src/assets/icons中的.svg",showHelp:"",helpText:"点击图标可复制代码"},{default:r(()=>[d("div",A,[(o(!0),s(u,null,m(h(c).localIcon,(e,a)=>(o(),s("div",{class:"icon-item",key:a,onClick:f=>i(e),title:e},[n(p,{name:e},null,8,["name"])],8,F))),128))])]),_:1}),n(_,{title:"阿里 Iconfont 图标",showHelp:"",helpText:"点击图标可复制代码"},{default:r(()=>[d("div",L,[(o(!0),s(u,null,m(h(c).iconfontIcon.slice(1,20),(e,a)=>(o(),s("div",{class:"icon-item",key:a,onClick:f=>i(e),title:e},[n(p,{name:e},null,8,["name"])],8,P))),128))])]),_:1}),n(_,{title:"Font Awesome 图标",showHelp:"",helpText:"点击图标可复制代码"},{default:r(()=>[d("div",q,[(o(!0),s(u,null,m(h(c).awesomeIcon.slice(1,20),(e,a)=>(o(),s("div",{class:"icon-item",key:a,onClick:f=>i(e),title:e},[n(p,{name:e},null,8,["name"])],8,z))),128))])]),_:1})])}}});const Q=N(M,[["__scopeId","data-v-f1943cda"]]);export{Q as default};