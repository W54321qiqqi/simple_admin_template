import{a as d,j as f,a6 as m,c as n,a7 as g,a8 as y,f as r,o as h,z as B,a9 as P,t as s,r as o,aa as S,ab as _,g as k}from"./index-ed5c6bde.js";const v=d({name:"BaseButton",__name:"index",props:{type:{type:String,validator(t){return["primary","success","warning","danger","info","default"].includes(t)}},plain:{type:Boolean,default:!1},auth:{type:String,default:""},loading:{type:Boolean,default:!1}},setup(t){const a=t,l=f(),u=m(),i=n(()=>({...{...g(a,"auth")},...u})),p=n(()=>a.auth?l.getRoleIds.includes(a.auth):!0);return(e,$)=>{const c=y;return r(p)?(h(),B(c,S(_({key:0},r(i))),P({default:s(()=>[o(e.$slots,"default")]),_:2},[e.$slots.loading?{name:"loading",fn:s(()=>[o(e.$slots,"loading")]),key:"0"}:void 0,e.$slots.icon?{name:"icon",fn:s(()=>[o(e.$slots,"icon")]),key:"1"}:void 0]),1040)):k("",!0)}}});export{v as _};
