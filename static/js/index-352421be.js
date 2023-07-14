import{_ as O}from"./index-89da2f79.js";import{a as E,R as A,c5 as L,a0 as P,u as R,b5 as I,bc as U,b as W,f as c,o as r,e as f,q as g,F as w,v as x,z as C,s as l,_ as F,as as Y,K as G,Y as H,N as J,c as M,n as j,r as T,x as D,a3 as N,g as Q,ba as X,w as Z,a5 as ee,t as n,bd as te,be as se,bf as le}from"./index-ae101c87.js";import{E as ne}from"./el-tag-079f6066.js";import{_ as ie}from"./index-3e68dd2f.js";import"./useTagViewSetting-95424a70.js";import"./el-popper-adc308a2.js";const B=Symbol("elDescriptions");var q=E({name:"ElDescriptionsCell",props:{cell:{type:Object},tag:{type:String},type:{type:String}},setup(){return{descriptions:A(B,{})}},render(){var b,s,i,k,a,o;const m=L(this.cell),{border:v,direction:e}=this.descriptions,u=e==="vertical",p=((i=(s=(b=this.cell)==null?void 0:b.children)==null?void 0:s.label)==null?void 0:i.call(s))||m.label,d=(o=(a=(k=this.cell)==null?void 0:k.children)==null?void 0:a.default)==null?void 0:o.call(a),t=m.span,$=m.align?`is-${m.align}`:"",h=m.labelAlign?`is-${m.labelAlign}`:$,S=m.className,z=m.labelClassName,y={width:P(m.width),minWidth:P(m.minWidth)},_=R("descriptions");switch(this.type){case"label":return I(this.tag,{style:y,class:[_.e("cell"),_.e("label"),_.is("bordered-label",v),_.is("vertical-label",u),h,z],colSpan:u?t:1},p);case"content":return I(this.tag,{style:y,class:[_.e("cell"),_.e("content"),_.is("bordered-content",v),_.is("vertical-content",u),$,S],colSpan:u?t:t*2-1},d);default:return I("td",{style:y,class:[_.e("cell"),$],colSpan:t},[U(p)?void 0:I("span",{class:[_.e("label"),z]},p),I("span",{class:[_.e("content"),S]},d)])}}});const ae=W({row:{type:Array,default:()=>[]}}),oe={key:1},re=E({name:"ElDescriptionsRow"}),ce=E({...re,props:ae,setup(b){const s=A(B,{});return(i,k)=>c(s).direction==="vertical"?(r(),f(w,{key:0},[g("tr",null,[(r(!0),f(w,null,x(i.row,(a,o)=>(r(),C(c(q),{key:`tr1-${o}`,cell:a,tag:"th",type:"label"},null,8,["cell"]))),128))]),g("tr",null,[(r(!0),f(w,null,x(i.row,(a,o)=>(r(),C(c(q),{key:`tr2-${o}`,cell:a,tag:"td",type:"content"},null,8,["cell"]))),128))])],64)):(r(),f("tr",oe,[(r(!0),f(w,null,x(i.row,(a,o)=>(r(),f(w,{key:`tr3-${o}`},[c(s).border?(r(),f(w,{key:0},[l(c(q),{cell:a,tag:"td",type:"label"},null,8,["cell"]),l(c(q),{cell:a,tag:"td",type:"content"},null,8,["cell"])],64)):(r(),C(c(q),{key:1,cell:a,tag:"td",type:"both"},null,8,["cell"]))],64))),128))]))}});var pe=F(ce,[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/descriptions-row.vue"]]);const ue=W({border:{type:Boolean,default:!1},column:{type:Number,default:3},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},size:Y,title:{type:String,default:""},extra:{type:String,default:""}}),de=E({name:"ElDescriptions"}),me=E({...de,props:ue,setup(b){const s=b,i=R("descriptions"),k=G(),a=H();J(B,s);const o=M(()=>[i.b(),i.m(k.value)]),m=(e,u,p,d=!1)=>(e.props||(e.props={}),u>p&&(e.props.span=p),d&&(e.props.span=u),e),v=()=>{var e;const u=X((e=a.default)==null?void 0:e.call(a)).filter(h=>{var S;return((S=h==null?void 0:h.type)==null?void 0:S.name)==="ElDescriptionsItem"}),p=[];let d=[],t=s.column,$=0;return u.forEach((h,S)=>{var z;const y=((z=h.props)==null?void 0:z.span)||1;if(S<u.length-1&&($+=y>t?t:y),S===u.length-1){const _=s.column-$%s.column;d.push(m(h,_,t,!0)),p.push(d);return}y<t?(t-=y,d.push(h)):(d.push(m(h,y,t)),p.push(d),t=s.column,d=[])}),p};return(e,u)=>(r(),f("div",{class:j(c(o))},[e.title||e.extra||e.$slots.title||e.$slots.extra?(r(),f("div",{key:0,class:j(c(i).e("header"))},[g("div",{class:j(c(i).e("title"))},[T(e.$slots,"title",{},()=>[D(N(e.title),1)])],2),g("div",{class:j(c(i).e("extra"))},[T(e.$slots,"extra",{},()=>[D(N(e.extra),1)])],2)],2)):Q("v-if",!0),g("div",{class:j(c(i).e("body"))},[g("table",{class:j([c(i).e("table"),c(i).is("bordered",e.border)])},[g("tbody",null,[(r(!0),f(w,null,x(v(),(p,d)=>(r(),C(pe,{key:d,row:p},null,8,["row"]))),128))])],2)],2)],2))}});var _e=F(me,[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/description.vue"]]),K=E({name:"ElDescriptionsItem",props:{label:{type:String,default:""},span:{type:Number,default:1},width:{type:[String,Number],default:""},minWidth:{type:[String,Number],default:""},align:{type:String,default:"left"},labelAlign:{type:String,default:""},className:{type:String,default:""},labelClassName:{type:String,default:""}}});const fe=Z(_e,{DescriptionsItem:K}),ge=ee(K);const V=b=>(te("data-v-cec2ffc8"),b=b(),se(),b),be=V(()=>g("div",{class:"description"},[g("span",{class:"text-[#4468f3]"},"V3-Template"),D(" 使用Vue3+Element-Plus+Vite4+TypeScript+Pinia搭建的后台管理系统，内置了许多开箱即用的组件，持续更新中，欢迎的你的使用和提出意见。 ")],-1)),ve=V(()=>g("a",{href:"https://w54321qiqqi.github.io/simple_admin_template/",target:"_blank",class:"color-primary"}," 预览地址 ",-1)),he=V(()=>g("a",{href:"https://github.com/W54321qiqqi/simple_admin_template.git",target:"_blank",class:"color-primary"}," 查看地址 ",-1)),ye=V(()=>g("a",{href:"https://gitee.com/menon-qiqi/simple_admin_template",target:"_blank",class:"color-primary"}," 查看地址 ",-1)),we=E({__name:"index",setup(b){const{pkg:s,lastBuildTime:i}={pkg:{dependencies:{"@element-plus/icons-vue":"^2.1.0","@vitejs/plugin-vue-jsx":"^2.1.1",autoprefixer:"^10.4.14",axios:"^0.27.2",dayjs:"^1.11.8",echarts:"^5.4.2","echarts-liquidfill":"^3.1.0","echarts-wordcloud":"^2.1.0","element-plus":"^2.2.19",mockjs:"^1.1.0","npm-run-all":"^4.1.5","path-browserify":"^1.0.1",picocolors:"^1.0.0",pinia:"^2.1.4","pinia-plugin-persistedstate":"^3.1.0","rollup-plugin-visualizer":"^5.9.2","vite-plugin-compression":"^0.5.1","vite-plugin-mock":"^2.9.6","vite-plugin-warmup":"^0.1.0",vue:"^3.3.4","vue-json-pretty":"^2.2.4","vue-router":"^4.1.3",vuedraggable:"^4.1.0"},devDependencies:{"@babel/eslint-parser":"^7.21.8","@commitlint/cli":"^17.6.5","@commitlint/config-conventional":"^17.6.5","@types/lodash-es":"^4.17.7","@types/mockjs":"^1.0.7","@types/path-browserify":"^1.0.0","@typescript-eslint/eslint-plugin":"^5.59.8","@typescript-eslint/parser":"^5.59.8","@vitejs/plugin-vue":"^4.1.0","@vueuse/core":"^10.1.2","cz-git":"^1.6.1",eslint:"^8.42.0","eslint-config-prettier":"^8.8.0","eslint-plugin-import":"^2.27.5","eslint-plugin-node":"^11.1.0","eslint-plugin-prettier":"^4.2.1","eslint-plugin-vue":"^9.14.1","hotkeys-js":"^3.10.2",husky:"^8.0.0","lint-staged":"^13.2.2","lodash-es":"^4.17.21",plop:"^3.1.2","prettier-plugin-tailwindcss":"^0.3.0",sass:"^1.61.0",tailwindcss:"^3.3.2",typescript:"^5.0.2","unplugin-auto-import":"^0.16.4","unplugin-vue-components":"^0.25.1",vite:"^4.3.9","vite-plugin-imagemin":"^0.6.1","vite-plugin-vue-devtools":"^0.5.0","vue-tsc":"^1.4.2"},name:"simple_admin_template",version:"0.0.1"},lastBuildTime:"2023-07-14 09:56:02"},k=[],a=[];return Object.keys(s.devDependencies).forEach(o=>{k.push({fieldName:s.devDependencies[o],fieldDesc:o})}),Object.keys(s.dependencies).forEach(o=>{a.push({fieldName:s.dependencies[o],fieldDesc:o})}),(o,m)=>{const v=ie,e=ge,u=ne,p=fe,d=O;return r(),C(d,null,{default:n(()=>[l(v,{title:"项目描述"},{default:n(()=>[be]),_:1}),l(v,{title:"项目信息"},{default:n(()=>[l(p,{column:3,border:""},{default:n(()=>[l(e,{label:"系统名称"},{default:n(()=>[D(N(c(s).name),1)]),_:1}),l(e,{label:"版本"},{default:n(()=>[l(u,null,{default:n(()=>[D(N(c(s).version),1)]),_:1})]),_:1}),l(e,{label:"最后打包时间"},{default:n(()=>[l(u,null,{default:n(()=>[D(N(c(i)),1)]),_:1})]),_:1}),l(e,{label:"预览地址"},{default:n(()=>[ve]),_:1}),l(e,{label:"github地址"},{default:n(()=>[he]),_:1}),l(e,{label:"gitee地址"},{default:n(()=>[ye]),_:1})]),_:1})]),_:1}),l(v,{title:"开发环境依赖"},{default:n(()=>[l(p,{column:3,border:""},{default:n(()=>[(r(),f(w,null,x(k,t=>l(e,{key:t.fieldDesc,label:t.fieldDesc},{default:n(()=>[D(N(t.fieldName),1)]),_:2},1032,["label"])),64))]),_:1})]),_:1}),l(v,{title:"生产环境依赖"},{default:n(()=>[l(p,{column:3,border:""},{default:n(()=>[(r(),f(w,null,x(a,t=>l(e,{key:t.fieldDesc,label:t.fieldDesc},{default:n(()=>[D(N(t.fieldName),1)]),_:2},1032,["label"])),64))]),_:1})]),_:1})]),_:1})}}});const je=le(we,[["__scopeId","data-v-cec2ffc8"]]);export{je as default};
