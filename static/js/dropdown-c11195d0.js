import{_ as C,a as T,r as N,l as _,N as E,R as S,m as b,f as m,p as L,b as f,d as t,aS as $,aT as o}from"./index-b15e4bc2.js";import{u as h,b as I}from"./el-popper-bb678e48.js";const M=T({inheritAttrs:!1});function w(n,l,c,s,a,d){return N(n.$slots,"default")}var P=C(M,[["render",w],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);const v=T({name:"ElCollectionItem",inheritAttrs:!1});function A(n,l,c,s,a,d){return N(n.$slots,"default")}var B=C(v,[["render",A],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const K="data-el-collection-item",x=n=>{const l=`El${n}Collection`,c=`${l}Item`,s=Symbol(l),a=Symbol(c),d={...P,name:l,setup(){const u=_(null),i=new Map;E(s,{itemMap:i,getItems:()=>{const r=m(u);if(!r)return[];const e=Array.from(r.querySelectorAll(`[${K}]`));return[...i.values()].sort((g,y)=>e.indexOf(g.ref)-e.indexOf(y.ref))},collectionRef:u})}},O={...B,name:c,setup(u,{attrs:i}){const p=_(null),r=S(s,void 0);E(a,{collectionItemRef:p}),b(()=>{const e=m(p);e&&r.itemMap.set(e,{ref:e,...i})}),L(()=>{const e=m(p);r.itemMap.delete(e)})}};return{COLLECTION_INJECTION_KEY:s,COLLECTION_ITEM_INJECTION_KEY:a,ElCollection:d,ElCollectionItem:O}},J=f({trigger:h.trigger,effect:{...I.effect,default:"light"},type:{type:t(String)},placement:{type:t(String),default:"bottom"},popperOptions:{type:t(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:t([Number,String]),default:0},maxHeight:{type:t([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:t(Object)},teleported:I.teleported}),D=f({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:$}}),U=f({onKeydown:{type:t(Function)}}),Y=[o.down,o.pageDown,o.home],j=[o.up,o.pageUp,o.end],V=[...Y,...j],{ElCollection:q,ElCollectionItem:z,COLLECTION_INJECTION_KEY:G,COLLECTION_ITEM_INJECTION_KEY:H}=x("Dropdown");export{H as C,q as E,V as F,j as L,D as a,K as b,x as c,J as d,z as e,U as f,G as g};
