import{a as k,cK as v,l as f,i as g,o as l,e as s,s as a,t as i,f as e,ab as E,q as T,aD as P,F as V,v as G,z as S,x as L,a3 as B,g as N,cL as J}from"./index-ae101c87.js";import{E as R}from"./el-image-viewer-90fd981a.js";import{_ as F}from"./index-3e68dd2f.js";import{E as z,q as H}from"./el-checkbox-c56fcbcb.js";import"./debounce-07a304c3.js";import"./el-popper-adc308a2.js";const q=[{fieldName:"id",fieldDesc:"用户id"},{fieldName:"payName",fieldDesc:"付款人"},{fieldName:"status",fieldDesc:"订单状态"},{fieldName:"time",fieldDesc:"下单时间"},{fieldName:"money",fieldDesc:"付款金额"},{fieldName:"remark",fieldDesc:"备注"}],b=[{fieldName:"id",fieldDesc:"用户id"},{fieldName:"payName",fieldDesc:"付款人",formType:"input"},{fieldName:"money",fieldDesc:"付款金额",formType:"number"},{fieldName:"count",fieldDesc:"数量",formType:"number"},{fieldName:"status",fieldDesc:"状态",formType:"tag"},{fieldName:"case",fieldDesc:"开关",formType:"switch"},{fieldName:"img",fieldDesc:"自定义列类型",formType:"slot"},{fieldName:"#",fieldDesc:"操作",formType:"operation",width:155,fixed:"right",operation:[{icon:"el-icon-Edit",label:"编辑",callFunction:()=>{}},{icon:"el-icon-Delete",label:"删除",confirm:!0,callFunction:()=>{}}]}],A=[{fieldName:"stripe",fieldDesc:"斑马纹"},{fieldName:"border",fieldDesc:"边框"},{fieldName:"showHeader",fieldDesc:"显示头部"},{fieldName:"highlightCurrentRow",fieldDesc:"高亮当前选中行"},{fieldName:"showSummary",fieldDesc:"合计项"},{fieldName:"showPagination",fieldDesc:"分页显示"},{fieldName:"indexShow",fieldDesc:"index项显示"},{fieldName:"selectionShow",fieldDesc:"勾选项显示"}],I={class:"com-table-container"},K={class:"mt30"},O={key:0},U={key:0},$=k({__name:"index",setup(j){const m=v(()=>J(()=>import("./base-table-be139d56.js"),["./base-table-be139d56.js","./index-ae101c87.js","../css/index-d0da7236.css","./el-tag-079f6066.js","../css/el-tag-9382b5ec.css","./componentEnum-bab51a6f.js","./index.vue_vue_type_script_setup_true_lang-66cd4571.js","./index-0ffd3390.js","./el-popper-adc308a2.js","../css/el-popper-47a48cd3.css","./el-checkbox-c56fcbcb.js","../css/el-checkbox-aa12112c.css","./debounce-07a304c3.js","./index-4350d6fd.js","./index-cb0e0826.js","../css/index-912ddefa.css","./icon-selector-2eec1873.js","./dropdown-a5d54187.js","../css/icon-selector-75183455.css","./localeData-92eba7c6.js","../css/componentEnum-f307622a.css","./el-empty-97919819.js","../css/el-empty-90106710.css","./el-space-9f6074ea.js","../css/el-space-99ca034b.css","./index.vue_vue_type_script_setup_true_lang-020e340e.js","./_initCloneObject-d943f691.js","../css/base-table-e5f5c6b2.css"],import.meta.url)),w=f([{id:"123",payName:"马保国",status:"已付款",time:"2023-02-20",money:1314,remark:"闪电五连鞭"},{id:"124",payName:"Kenneth",status:"已评价",time:"2023-02-20",money:2086,remark:"到了打电话"}]),u=f([{id:"123",status:"成功",img:"https://img1.baidu.com/it/u=901475605,1506635237&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800"},{id:"124",status:"成功,Nice",img:"https://img1.baidu.com/it/u=962503013,598294385&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"}]),D=g({columns:b}),p=["https://img1.baidu.com/it/u=962503013,598294385&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500","https://img1.baidu.com/it/u=901475605,1506635237&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800","https://img2.baidu.com/it/u=4075901265,1581553886&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800"],c=f(["showHeader","highlightCurrentRow"]),n=g({stripe:!1,border:!1,showSummary:!1,indexShow:!1,showPagination:!1,selectionShow:!1,showHeader:!0,highlightCurrentRow:!0}),y=h=>{for(const o in n)n[o]=h.includes(o)};return(h,o)=>{const x=z,C=H,d=F,_=R;return l(),s("div",I,[a(d,{title:"基础table"},{default:i(()=>[a(e(m),E({columns:e(q),data:e(w)},e(n)),null,16,["columns","data"]),T("div",K,[a(C,{modelValue:e(c),"onUpdate:modelValue":o[0]||(o[0]=t=>P(c)?c.value=t:null),onChange:y},{default:i(()=>[(l(!0),s(V,null,G(e(A),t=>(l(),S(x,{key:t.fieldName,label:t.fieldName},{default:i(()=>[L(B(t.fieldDesc),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])])]),_:1}),a(d,{title:"自定义table"},{default:i(()=>[a(e(m),{columns:e(b),data:e(u)},{tableColumn:i(({scope:t,column:r})=>[r.fieldName==="img"?(l(),s("div",O,[a(_,{src:t.row.img,"zoom-rate":1.2,"preview-src-list":p,"preview-teleported":"",fit:"cover",style:{width:"120px",height:"80px"}},null,8,["src"])])):N("",!0)]),_:1},8,["columns","data"])]),_:1}),a(d,{title:"列字段配置"},{default:i(()=>[a(e(m),{columns:e(D).columns,data:e(u),"show-setting":""},{tableColumn:i(({scope:t,column:r})=>[r.fieldName==="img"?(l(),s("div",U,[a(_,{src:t.row.img,"zoom-rate":1.2,"preview-src-list":p,"preview-teleported":"",fit:"cover",style:{width:"120px",height:"80px"}},null,8,["src"])])):N("",!0)]),_:1},8,["columns","data"])]),_:1})])}}});export{$ as default};
