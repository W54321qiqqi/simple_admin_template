import{_ as u}from"./index-bf656dc2.js";import{_ as d}from"./index-a5e716cb.js";import{F as s}from"./componentEnum-b8f8f99f.js";import{ex as _,a as g,i as m,m as b,ey as T,o as h,z as D,t as C,s as E,f as p}from"./index-ed5c6bde.js";import"./useTagViewSetting-e442b321.js";import"./base-table-e479e3a9.js";import"./index.vue_vue_type_style_index_0_lang-d7d8cdd2.js";import"./index.vue_vue_type_script_setup_true_lang-66520c4d.js";import"./el-popper-41cbb7e4.js";import"./el-space-f8bc1e23.js";import"./el-checkbox-7f6c2ac7.js";import"./el-button-group-e14f7ad8.js";import"./el-dropdown-item-8c373fef.js";import"./dropdown-8c60065b.js";import"./vuedraggable.umd-5a4a9e70.js";import"./vue.runtime.esm-bundler-8b793018.js";import"./el-tag-58badc4c.js";import"./icon-selector-d4f67148.js";import"./index-a65f35ce.js";import"./localeData-f4c9b402.js";import"./index-19ca99ba.js";import"./index-1b659b62.js";import"./index.vue_vue_type_script_setup_true_lang-7079f67f.js";import"./el-form-item-0d3df272.js";import"./index.vue_vue_type_script_setup_true_lang-bcf96b17.js";import"./index-916d27a6.js";import"./index-408a39f1.js";const v=[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"DELETE",value:"DELETE"}],N=[{label:"成功",value:200},{label:"失败",value:500}];function y(){return{filterColumn:[{fieldName:"method",fieldDesc:"请求方式",fieldType:s.SELECT,config:{options:v}},{fieldName:"time",fieldDesc:"操作时间",fieldType:s.DATE,config:{type:"daterange"}}],tableColumn:[{fieldName:"url",fieldDesc:"请求接口",showOverflowTooltip:!0},{fieldName:"method",fieldDesc:"请求方式",showOverflowTooltip:!0},{fieldName:"user",fieldDesc:"操作人员"},{fieldName:"userIp",fieldDesc:"操作IP"},{fieldName:"status",fieldDesc:"状态",formType:"tag",type:e=>e.status===500?"danger":"",formatter:e=>_(N,e.status)},{fieldName:"time",fieldDesc:"操作时间"}]}}const Z=g({__name:"index",setup(f){const{tableColumn:i,filterColumn:e}=y(),l=m({columns:e,onSearch:a,showOpen:!1,searchInfo:{}}),t=m({columns:i,data:[],pagination:{currentPage:1,pageSize:10,total:0},onRefresh:a});b(()=>{a()});async function a(){const{currentPage:n,pageSize:r}=t.pagination,o=await T({...l.searchInfo,currentPage:n,pageSize:r});t.data=o.data.list,t.pagination.total=o.data.total}return(n,r)=>{const o=d,c=u;return h(),D(c,null,{default:C(()=>[E(o,{"table-title":"操作日志","filter-config":p(l),"table-config":p(t)},null,8,["filter-config","table-config"])]),_:1})}}});export{Z as default};