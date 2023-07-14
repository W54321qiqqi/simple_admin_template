import{_ as X}from"./index-25f48700.js";import{_ as Z}from"./index-48107507.js";import{_ as Q}from"./index.vue_vue_type_script_setup_true_lang-24582e7c.js";import{b as V,at as P,au as I,I as z,av as x,J as D,co as Y,l as k,R as ee,c as R,K as oe,ax as ae,a as h,u as $,o as B,e as G,q as _,aD as C,e2 as U,f as e,aE as K,n as g,r as w,x as v,a3 as S,aO as M,_ as N,X as T,h as se,Z as te,ay as le,aC as ne,m as re,N as ie,i as de,O as A,L as ue,M as me,w as pe,a5 as L,j as ce,k as be,cd as fe,z as F,t as y,s as f}from"./index-b15e4bc2.js";import"./useTagViewSetting-d9fa3a8b.js";import"./el-popper-bb678e48.js";const O=V({size:P,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),_e=V({...O,modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean}),j={[I]:l=>z(l)||x(l)||D(l),[Y]:l=>z(l)||x(l)||D(l)},q=Symbol("radioGroupKey"),W=(l,p)=>{const t=k(),o=ee(q,void 0),m=R(()=>!!o),c=R({get(){return m.value?o.modelValue:l.modelValue},set(u){m.value?o.changeEvent(u):p&&p(I,u),t.value.checked=l.modelValue===l.label}}),n=oe(R(()=>o==null?void 0:o.size)),r=ae(R(()=>o==null?void 0:o.disabled)),s=k(!1),d=R(()=>r.value||m.value&&c.value!==l.label?-1:0);return{radioRef:t,isGroup:m,radioGroup:o,focus:s,size:n,disabled:r,tabIndex:d,modelValue:c}},ve=["value","name","disabled"],ge=h({name:"ElRadio"}),ye=h({...ge,props:_e,emits:j,setup(l,{emit:p}){const t=l,o=$("radio"),{radioRef:m,radioGroup:c,focus:n,size:r,disabled:s,modelValue:d}=W(t,p);function u(){T(()=>p("change",d.value))}return(a,i)=>{var b;return B(),G("label",{class:g([e(o).b(),e(o).is("disabled",e(s)),e(o).is("focus",e(n)),e(o).is("bordered",a.border),e(o).is("checked",e(d)===a.label),e(o).m(e(r))])},[_("span",{class:g([e(o).e("input"),e(o).is("disabled",e(s)),e(o).is("checked",e(d)===a.label)])},[C(_("input",{ref_key:"radioRef",ref:m,"onUpdate:modelValue":i[0]||(i[0]=E=>K(d)?d.value=E:null),class:g(e(o).e("original")),value:a.label,name:a.name||((b=e(c))==null?void 0:b.name),disabled:e(s),type:"radio",onFocus:i[1]||(i[1]=E=>n.value=!0),onBlur:i[2]||(i[2]=E=>n.value=!1),onChange:u},null,42,ve),[[U,e(d)]]),_("span",{class:g(e(o).e("inner"))},null,2)],2),_("span",{class:g(e(o).e("label")),onKeydown:i[3]||(i[3]=M(()=>{},["stop"]))},[w(a.$slots,"default",{},()=>[v(S(a.label),1)])],34)],2)}}});var Re=N(ye,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const he=V({...O,name:{type:String,default:""}}),Be=["value","name","disabled"],Se=h({name:"ElRadioButton"}),Ve=h({...Se,props:he,setup(l){const p=l,t=$("radio"),{radioRef:o,focus:m,size:c,disabled:n,modelValue:r,radioGroup:s}=W(p),d=R(()=>({backgroundColor:(s==null?void 0:s.fill)||"",borderColor:(s==null?void 0:s.fill)||"",boxShadow:s!=null&&s.fill?`-1px 0 0 0 ${s.fill}`:"",color:(s==null?void 0:s.textColor)||""}));return(u,a)=>{var i;return B(),G("label",{class:g([e(t).b("button"),e(t).is("active",e(r)===u.label),e(t).is("disabled",e(n)),e(t).is("focus",e(m)),e(t).bm("button",e(c))])},[C(_("input",{ref_key:"radioRef",ref:o,"onUpdate:modelValue":a[0]||(a[0]=b=>K(r)?r.value=b:null),class:g(e(t).be("button","original-radio")),value:u.label,type:"radio",name:u.name||((i=e(s))==null?void 0:i.name),disabled:e(n),onFocus:a[1]||(a[1]=b=>m.value=!0),onBlur:a[2]||(a[2]=b=>m.value=!1)},null,42,Be),[[U,e(r)]]),_("span",{class:g(e(t).be("button","inner")),style:se(e(r)===u.label?e(d):{}),onKeydown:a[3]||(a[3]=M(()=>{},["stop"]))},[w(u.$slots,"default",{},()=>[v(S(u.label),1)])],38)],2)}}});var H=N(Ve,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const Ee=V({id:{type:String,default:void 0},size:P,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0}}),ke=j,Ie=["id","aria-label","aria-labelledby"],$e=h({name:"ElRadioGroup"}),Ge=h({...$e,props:Ee,emits:ke,setup(l,{emit:p}){const t=l,o=$("radio"),m=te(),c=k(),{formItem:n}=le(),{inputId:r,isLabeledByFormItem:s}=ne(t,{formItemContext:n}),d=a=>{p(I,a),T(()=>p("change",a))};re(()=>{const a=c.value.querySelectorAll("[type=radio]"),i=a[0];!Array.from(a).some(b=>b.checked)&&i&&(i.tabIndex=0)});const u=R(()=>t.name||m.value);return ie(q,de({...A(t),changeEvent:d,name:u})),ue(()=>t.modelValue,()=>{t.validateEvent&&(n==null||n.validate("change").catch(a=>me()))}),(a,i)=>(B(),G("div",{id:e(r),ref_key:"radioGroupRef",ref:c,class:g(e(o).b("group")),role:"radiogroup","aria-label":e(s)?void 0:a.label||"radio-group","aria-labelledby":e(s)?e(n).labelId:void 0},[w(a.$slots,"default")],10,Ie))}});var J=N(Ge,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);pe(Re,{RadioButton:H,RadioGroup:J});const Ce=L(J),we=L(H);const Ne={class:"mt-[25px]"},ze={class:"mt-[25px]"},xe={class:"mt-[25px]"},De={class:"mt-[25px]"},Ae=h({__name:"button",setup(l){const p=ce(),t=be(),{userInfo:o}=A(p),m=c=>{p.changeRole(c,t)};return(c,n)=>{const r=we,s=Ce,d=Q,u=Z,a=X,i=fe("permission");return B(),F(a,null,{default:y(()=>[f(u,{title:"baseButton方式（推荐）"},{default:y(()=>[v(" 当前角色："+S(e(o).role)+" ",1),_("div",Ne,[v(" 切换角色： "),f(s,{modelValue:e(o).role,"onUpdate:modelValue":n[0]||(n[0]=b=>e(o).role=b),onChange:m},{default:y(()=>[f(r,{label:"admin"}),f(r,{label:"test"})]),_:1},8,["modelValue"])]),_("div",ze,[f(d,{auth:"admin_permission_button:modify"},{default:y(()=>[v(" admin has button ")]),_:1}),f(d,null,{default:y(()=>[v("all has button")]),_:1})])]),_:1}),f(u,{title:"自定义指令方式（不可动态切换）"},{default:y(()=>[v(" 当前角色："+S(e(o).role)+" ",1),_("div",xe,[v(" 切换角色： "),f(s,{modelValue:e(o).role,"onUpdate:modelValue":n[1]||(n[1]=b=>e(o).role=b),onChange:m},{default:y(()=>[f(r,{label:"admin"}),f(r,{label:"test"})]),_:1},8,["modelValue"])]),_("div",De,[C((B(),F(d,null,{default:y(()=>[v(" admin has button ")]),_:1})),[[i,"admin_permission_button:modify"]])])]),_:1})]),_:1})}}});export{Ae as default};
