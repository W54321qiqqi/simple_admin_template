import{b as T,G as w,a as v,K as N,u as M,c as P,o as t,e as V,q as l,r as m,n as o,f as a,z as c,t as r,s as g,c6 as k,aO as C,aP as h,g as y,h as b,aR as $,_ as I,w as K}from"./index-ed5c6bde.js";const q=T({type:{type:String,values:["success","info","warning","danger",""],default:""},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:{type:String,default:""},size:{type:String,values:w,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),F={close:n=>n instanceof MouseEvent,click:n=>n instanceof MouseEvent},G=v({name:"ElTag"}),O=v({...G,props:q,emits:F,setup(n,{emit:i}){const _=n,S=N(),s=M("tag"),u=P(()=>{const{type:e,hit:f,effect:z,closable:B,round:E}=_;return[s.b(),s.is("closable",B),s.m(e),s.m(S.value),s.m(z),s.is("hit",f),s.is("round",E)]}),p=e=>{i("close",e)},d=e=>{i("click",e)};return(e,f)=>e.disableTransitions?(t(),V("span",{key:0,class:o(a(u)),style:b({backgroundColor:e.color}),onClick:d},[l("span",{class:o(a(s).e("content"))},[m(e.$slots,"default")],2),e.closable?(t(),c(a(h),{key:0,class:o(a(s).e("close")),onClick:C(p,["stop"])},{default:r(()=>[g(a(k))]),_:1},8,["class","onClick"])):y("v-if",!0)],6)):(t(),c($,{key:1,name:`${a(s).namespace.value}-zoom-in-center`,appear:""},{default:r(()=>[l("span",{class:o(a(u)),style:b({backgroundColor:e.color}),onClick:d},[l("span",{class:o(a(s).e("content"))},[m(e.$slots,"default")],2),e.closable?(t(),c(a(h),{key:0,class:o(a(s).e("close")),onClick:C(p,["stop"])},{default:r(()=>[g(a(k))]),_:1},8,["class","onClick"])):y("v-if",!0)],6)]),_:3},8,["name"]))}});var R=I(O,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const A=K(R);export{A as E,q as t};
