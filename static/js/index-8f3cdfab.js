import{_ as b}from"./index-bf656dc2.js";import{_ as C}from"./index-a5e716cb.js";import{_ as w}from"./index.vue_vue_type_script_setup_true_lang-66520c4d.js";import{F as y}from"./componentEnum-b8f8f99f.js";import{a as N,i as m,m as D,ez as T,o as x,z as v,t as i,s as r,x as p,f as c,eA as E}from"./index-ed5c6bde.js";import"./useTagViewSetting-e442b321.js";import"./base-table-e479e3a9.js";import"./index.vue_vue_type_style_index_0_lang-d7d8cdd2.js";import"./el-popper-41cbb7e4.js";import"./el-space-f8bc1e23.js";import"./el-checkbox-7f6c2ac7.js";import"./el-button-group-e14f7ad8.js";import"./el-dropdown-item-8c373fef.js";import"./dropdown-8c60065b.js";import"./vuedraggable.umd-5a4a9e70.js";import"./vue.runtime.esm-bundler-8b793018.js";import"./el-tag-58badc4c.js";import"./icon-selector-d4f67148.js";import"./index-a65f35ce.js";import"./localeData-f4c9b402.js";import"./index-19ca99ba.js";import"./index-1b659b62.js";import"./index.vue_vue_type_script_setup_true_lang-7079f67f.js";import"./el-form-item-0d3df272.js";import"./index.vue_vue_type_script_setup_true_lang-bcf96b17.js";import"./index-916d27a6.js";import"./index-408a39f1.js";function O(){return{filterColumn:[{fieldName:"time",fieldDesc:"操作时间",fieldType:y.DATE,config:{type:"daterange"}}],tableColumn:[{fieldName:"type",fieldDesc:"错误类型"},{fieldName:"method",fieldDesc:"请求方式(来源)"},{fieldName:"url",fieldDesc:"请求地址",showOverflowTooltip:!0},{fieldName:"message",fieldDesc:"错误提示"},{fieldName:"params",fieldDesc:"请求参数",showOverflowTooltip:!0},{fieldName:"data",fieldDesc:"后台错误信息",showOverflowTooltip:!0},{fieldName:"detail",fieldDesc:"详细错误",showOverflowTooltip:!0},{fieldName:"time",fieldDesc:"报错时间"}]}}const oe=N({__name:"index",setup(f){const{tableColumn:n,filterColumn:u}=O(),l=m({columns:u,onSearch:e,showOpen:!0,searchInfo:{}}),o=m({columns:n,data:[],pagination:{currentPage:1,pageSize:10,total:0},onRefresh:e});D(()=>{e()});async function e(){const{currentPage:a,pageSize:s}=o.pagination,t=await T({...l.searchInfo,currentPage:a,pageSize:s});o.data=t.data.list,o.pagination.total=t.data.total}const d=async()=>{try{await E()}catch{setTimeout(()=>{e()},100)}},_=()=>{setTimeout(()=>{e()},100);const a=null;a.b=5};return(a,s)=>{const t=w,g=C,h=b;return x(),v(h,null,{default:i(()=>[r(g,{"table-title":"错误日志","filter-config":c(l),"table-config":c(o)},{buttons:i(()=>[r(t,{type:"primary",onClick:d},{default:i(()=>[p(" 触发一个ajax错误 ")]),_:1}),r(t,{type:"primary",onClick:_},{default:i(()=>[p(" 触发一个vue错误 ")]),_:1})]),_:1},8,["filter-config","table-config"])]),_:1})}}});export{oe as default};