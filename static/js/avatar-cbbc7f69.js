import{b as k,G as z,av as v,aS as _,d as b,a as d,u as w,l as C,c as l,I as P,a0 as A,L as B,o as n,e as u,h as f,f as o,z as m,t as L,a2 as j,aP as I,r as N,n as T,_ as U,w as q}from"./index-b15e4bc2.js";const D=k({size:{type:[Number,String],values:z,default:"",validator:s=>v(s)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:_},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:b(String),default:"cover"}}),F={error:s=>s instanceof Event},G=["src","alt","srcset"],R=d({name:"ElAvatar"}),V=d({...R,props:D,emits:F,setup(s,{emit:y}){const t=s,e=w("avatar"),c=C(!1),S=l(()=>{const{size:a,icon:i,shape:p}=t,r=[e.b()];return P(a)&&r.push(e.m(a)),i&&r.push(e.m("icon")),p&&r.push(e.m(p)),r}),h=l(()=>{const{size:a}=t;return v(a)?e.cssVarBlock({size:A(a)||""}):void 0}),g=l(()=>({objectFit:t.fit}));B(()=>t.src,()=>c.value=!1);function E(a){c.value=!0,y("error",a)}return(a,i)=>(n(),u("span",{class:T(o(S)),style:f(o(h))},[(a.src||a.srcSet)&&!c.value?(n(),u("img",{key:0,src:a.src,alt:a.alt,srcset:a.srcSet,style:f(o(g)),onError:E},null,44,G)):a.icon?(n(),m(o(I),{key:1},{default:L(()=>[(n(),m(j(a.icon)))]),_:1})):N(a.$slots,"default",{key:2})],6))}});var $=U(V,[["__file","/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]);const J=q($);const K=""+new URL("../jpg/avatar-3907c0e4.jpg",import.meta.url).href;export{J as E,K as a};
