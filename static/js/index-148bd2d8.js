import{D as Ye,b as pe,d as G,au as Fe,cm as Z,aY as ie,c as O,a as T,u as re,o as p,e as h,F as A,v as H,ak as S,f as e,g as z,q as m,n as $,r as B,_ as ve,ae as We,l as M,cA as Te,ao as Ne,b3 as qe,cJ as xe,Z as He,s as u,t as g,aC as he,x as X,cM as Xe,aD as Oe,aE as fe,aF as le,z as Y,w as Ce,b8 as Ae,ap as Ee,cN as Se,cO as Ue,cP as Ge,bI as Je,cQ as Ke,aL as Qe,a2 as De,ad as Re,m as Le,h as $e,aO as Ze,aP as U,c6 as et,cq as tt,b4 as at,cR as nt,cS as st,aj as ot,cT as lt,cU as rt,ax as it,b6 as ct,aR as dt,bK as ut,aM as Q,aT as K,cV as mt,aA as ft,cW as pt,bw as oe,bH as vt,$ as _t,cX as yt,aN as gt,cf as ht,j as kt,i as Ie,cY as wt,A as je,bf as _e,ay as bt}from"./index-d8d90257.js";import{_ as te,E as xt,a as Dt}from"./index-18a09cea.js";import{_ as $t}from"./base-charts.vue_vue_type_script_setup_true_lang-e1dd7a86.js";import{E as Ve,a as Pe}from"./avatar-fef6ed4f.js";import{_ as Be}from"./index.vue_vue_type_script_setup_true_lang-82f718f1.js";import{d as It,r as ee,l as Ct,W as ke,i as Et}from"./localeData-0c41b92c.js";import{E as Lt}from"./el-tag-dd8422f3.js";import"./el-popper-715c4d2c.js";import"./index-d5815ed6.js";var Ot="Expected a function";function we(a,s,l){var n=!0,c=!0;if(typeof a!="function")throw new TypeError(Ot);return Ye(l)&&(n="leading"in l?!!l.leading:n,c="trailing"in l?!!l.trailing:c),It(a,s,{leading:n,maxWait:s,trailing:c})}const St=(a,s)=>{const l=a.subtract(1,"month").endOf("month").date();return ee(s).map((n,c)=>l-(s-c-1))},Mt=a=>{const s=a.daysInMonth();return ee(s).map((l,n)=>n+1)},zt=a=>ee(a.length/7).map(s=>{const l=s*7;return a.slice(l,l+7)}),Tt=pe({selectedDay:{type:G(Object)},range:{type:G(Array)},date:{type:G(Object),required:!0},hideHeader:{type:Boolean}}),Nt={pick:a=>Fe(a)},At=(a,s)=>{Z.extend(Ct);const l=Z.localeData().firstDayOfWeek(),{t:n,lang:c}=ie(),r=Z().locale(c.value),o=O(()=>!!a.range&&!!a.range.length),_=O(()=>{let v=[];if(o.value){const[i,d]=a.range,x=ee(d.date()-i.date()+1).map(b=>({text:i.date()+b,type:"current"}));let D=x.length%7;D=D===0?0:7-D;const w=ee(D).map((b,C)=>({text:C+1,type:"next"}));v=x.concat(w)}else{const i=a.date.startOf("month").day(),d=St(a.date,(i-l+7)%7).map(b=>({text:b,type:"prev"})),x=Mt(a.date).map(b=>({text:b,type:"current"}));v=[...d,...x];const D=7-(v.length%7||7),w=ee(D).map((b,C)=>({text:C+1,type:"next"}));v=v.concat(w)}return zt(v)}),k=O(()=>{const v=l;return v===0?ke.map(i=>n(`el.datepicker.weeks.${i}`)):ke.slice(v).concat(ke.slice(0,v)).map(i=>n(`el.datepicker.weeks.${i}`))}),f=(v,i)=>{switch(i){case"prev":return a.date.startOf("month").subtract(1,"month").date(v);case"next":return a.date.startOf("month").add(1,"month").date(v);case"current":return a.date.date(v)}};return{now:r,isInRange:o,rows:_,weekDays:k,getFormattedDate:f,handlePickDay:({text:v,type:i})=>{const d=f(v,i);s("pick",d)},getSlotData:({text:v,type:i})=>{const d=f(v,i);return{isSelected:d.isSame(a.selectedDay),type:`${i}-month`,day:d.format("YYYY-MM-DD"),date:d.toDate()}}}},Rt={key:0},jt=["onClick"],Vt=T({name:"DateTable"}),Pt=T({...Vt,props:Tt,emits:Nt,setup(a,{expose:s,emit:l}){const n=a,{isInRange:c,now:r,rows:o,weekDays:_,getFormattedDate:k,handlePickDay:f,getSlotData:I}=At(n,l),E=re("calendar-table"),v=re("calendar-day"),i=({text:d,type:x})=>{const D=[x];if(x==="current"){const w=k(d,x);w.isSame(n.selectedDay,"day")&&D.push(v.is("selected")),w.isSame(r,"day")&&D.push(v.is("today"))}return D};return s({getFormattedDate:k}),(d,x)=>(p(),h("table",{class:$([e(E).b(),e(E).is("range",e(c))]),cellspacing:"0",cellpadding:"0"},[d.hideHeader?z("v-if",!0):(p(),h("thead",Rt,[(p(!0),h(A,null,H(e(_),D=>(p(),h("th",{key:D},S(D),1))),128))])),m("tbody",null,[(p(!0),h(A,null,H(e(o),(D,w)=>(p(),h("tr",{key:w,class:$({[e(E).e("row")]:!0,[e(E).em("row","hide-border")]:w===0&&d.hideHeader})},[(p(!0),h(A,null,H(D,(b,C)=>(p(),h("td",{key:C,class:$(i(b)),onClick:R=>e(f)(b)},[m("div",{class:$(e(v).b())},[B(d.$slots,"date-cell",{data:e(I)(b)},()=>[m("span",null,S(b.text),1)])],2)],10,jt))),128))],2))),128))])],2))}});var Me=ve(Pt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/calendar/src/date-table.vue"]]);const Bt=(a,s)=>{const l=a.endOf("month"),n=s.startOf("month"),r=l.isSame(n,"week")?n.add(1,"week"):n;return[[a,l],[r.startOf("week"),s]]},Yt=(a,s)=>{const l=a.endOf("month"),n=a.add(1,"month").startOf("month"),c=l.isSame(n,"week")?n.add(1,"week"):n,r=c.endOf("month"),o=s.startOf("month"),_=r.isSame(o,"week")?o.add(1,"week"):o;return[[a,l],[c.startOf("week"),r],[_.startOf("week"),s]]},Ft=(a,s,l)=>{const n=We(),{lang:c}=ie(),r=M(),o=Z().locale(c.value),_=O({get(){return a.modelValue?f.value:r.value},set(w){if(!w)return;r.value=w;const b=w.toDate();s(Te,b),s(Ne,b)}}),k=O(()=>{if(!a.range)return[];const w=a.range.map(R=>Z(R).locale(c.value)),[b,C]=w;return b.isAfter(C)?[]:b.isSame(C,"month")?d(b,C):b.add(1,"month").month()!==C.month()?[]:d(b,C)}),f=O(()=>a.modelValue?Z(a.modelValue).locale(c.value):_.value||(k.value.length?k.value[0][0]:o)),I=O(()=>f.value.subtract(1,"month").date(1)),E=O(()=>f.value.add(1,"month").date(1)),v=O(()=>f.value.subtract(1,"year").date(1)),i=O(()=>f.value.add(1,"year").date(1)),d=(w,b)=>{const C=w.startOf("week"),R=b.endOf("week"),j=C.get("month"),P=R.get("month");return j===P?[[C,R]]:(j+1)%12===P?Bt(C,R):j+2===P||(j+1)%11===P?Yt(C,R):[]},x=w=>{_.value=w},D=w=>{const C={"prev-month":I.value,"next-month":E.value,"prev-year":v.value,"next-year":i.value,today:o}[w];C.isSame(f.value,"day")||x(C)};return qe({from:'"dateCell"',replacement:'"date-cell"',scope:"ElCalendar",version:"2.3.0",ref:"https://element-plus.org/en-US/component/calendar.html#slots",type:"Slot"},O(()=>!!n.dateCell)),{calculateValidatedDateRange:d,date:f,realSelectedDay:_,pickDay:x,selectDate:D,validatedRange:k}},Wt=a=>He(a)&&a.length===2&&a.every(s=>xe(s)),qt=pe({modelValue:{type:Date},range:{type:G(Array),validator:Wt}}),Ht={[Ne]:a=>xe(a),[Te]:a=>xe(a)},Xt="ElCalendar",Ut=T({name:Xt}),Gt=T({...Ut,props:qt,emits:Ht,setup(a,{expose:s,emit:l}){const n=a,c=re("calendar"),{calculateValidatedDateRange:r,date:o,pickDay:_,realSelectedDay:k,selectDate:f,validatedRange:I}=Ft(n,l),{t:E}=ie(),v=O(()=>{const i=`el.datepicker.month${o.value.format("M")}`;return`${o.value.year()} ${E("el.datepicker.year")} ${E(i)}`});return s({selectedDay:k,pickDay:_,selectDate:f,calculateValidatedDateRange:r}),(i,d)=>(p(),h("div",{class:$(e(c).b())},[m("div",{class:$(e(c).e("header"))},[B(i.$slots,"header",{date:e(v)},()=>[m("div",{class:$(e(c).e("title"))},S(e(v)),3),e(I).length===0?(p(),h("div",{key:0,class:$(e(c).e("button-group"))},[u(e(Xe),null,{default:g(()=>[u(e(he),{size:"small",onClick:d[0]||(d[0]=x=>e(f)("prev-month"))},{default:g(()=>[X(S(e(E)("el.datepicker.prevMonth")),1)]),_:1}),u(e(he),{size:"small",onClick:d[1]||(d[1]=x=>e(f)("today"))},{default:g(()=>[X(S(e(E)("el.datepicker.today")),1)]),_:1}),u(e(he),{size:"small",onClick:d[2]||(d[2]=x=>e(f)("next-month"))},{default:g(()=>[X(S(e(E)("el.datepicker.nextMonth")),1)]),_:1})]),_:1})],2)):z("v-if",!0)])],2),e(I).length===0?(p(),h("div",{key:0,class:$(e(c).e("body"))},[u(Me,{date:e(o),"selected-day":e(k),onPick:e(_)},Oe({_:2},[i.$slots["date-cell"]||i.$slots.dateCell?{name:"date-cell",fn:g(x=>[i.$slots["date-cell"]?B(i.$slots,"date-cell",fe(le({key:0},x))):B(i.$slots,"dateCell",fe(le({key:1},x)))])}:void 0]),1032,["date","selected-day","onPick"])],2)):(p(),h("div",{key:1,class:$(e(c).e("body"))},[(p(!0),h(A,null,H(e(I),(x,D)=>(p(),Y(Me,{key:D,date:x[0],"selected-day":e(k),range:x,"hide-header":D!==0,onPick:e(_)},Oe({_:2},[i.$slots["date-cell"]||i.$slots.dateCell?{name:"date-cell",fn:g(w=>[i.$slots["date-cell"]?B(i.$slots,"date-cell",fe(le({key:0},w))):B(i.$slots,"dateCell",fe(le({key:1},w)))])}:void 0]),1032,["date","selected-day","range","hide-header","onPick"]))),128))],2))],2))}});var Jt=ve(Gt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/calendar/src/calendar.vue"]]);const Kt=Ce(Jt),Qt=pe({urlList:{type:G(Array),default:()=>Ae([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:{type:Boolean,default:!1},teleported:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),Zt={close:()=>!0,switch:a=>Ee(a)},ea=["src"],ta=T({name:"ElImageViewer"}),aa=T({...ta,props:Qt,emits:Zt,setup(a,{expose:s,emit:l}){const n=a,c={CONTAIN:{name:"contain",icon:Se(Ue)},ORIGINAL:{name:"original",icon:Se(Ge)}},{t:r}=ie(),o=re("image-viewer"),{nextZIndex:_}=Je(),k=M(),f=M([]),I=Ke(),E=M(!0),v=M(n.initialIndex),i=Qe(c.CONTAIN),d=M({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),x=O(()=>{const{urlList:t}=n;return t.length<=1}),D=O(()=>v.value===0),w=O(()=>v.value===n.urlList.length-1),b=O(()=>n.urlList[v.value]),C=O(()=>{const{scale:t,deg:y,offsetX:L,offsetY:N,enableTransition:W}=d.value;let V=L/t,q=N/t;switch(y%360){case 90:case-270:[V,q]=[q,-V];break;case 180:case-180:[V,q]=[-V,-q];break;case 270:case-90:[V,q]=[-q,V];break}const J={transform:`scale(${t}) rotate(${y}deg) translate(${V}px, ${q}px)`,transition:W?"transform .3s":""};return i.value.name===c.CONTAIN.name&&(J.maxWidth=J.maxHeight="100%"),J}),R=O(()=>Ee(n.zIndex)?n.zIndex:_());function j(){ye(),l("close")}function P(){const t=we(L=>{switch(L.code){case K.esc:n.closeOnPressEscape&&j();break;case K.space:ne();break;case K.left:ue();break;case K.up:F("zoomIn");break;case K.right:me();break;case K.down:F("zoomOut");break}}),y=we(L=>{const N=L.deltaY||L.deltaX;F(N<0?"zoomIn":"zoomOut",{zoomRate:n.zoomRate,enableTransition:!1})});I.run(()=>{Q(document,"keydown",t),Q(document,"wheel",y)})}function ye(){I.stop()}function ge(){E.value=!1}function ce(t){E.value=!1,t.target.alt=r("el.image.error")}function de(t){if(E.value||t.button!==0||!k.value)return;d.value.enableTransition=!1;const{offsetX:y,offsetY:L}=d.value,N=t.pageX,W=t.pageY,V=we(J=>{d.value={...d.value,offsetX:y+J.pageX-N,offsetY:L+J.pageY-W}}),q=Q(document,"mousemove",V);Q(document,"mouseup",()=>{q()}),t.preventDefault()}function ae(){d.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function ne(){if(E.value)return;const t=mt(c),y=Object.values(c),L=i.value.name,W=(y.findIndex(V=>V.name===L)+1)%t.length;i.value=c[t[W]],ae()}function se(t){const y=n.urlList.length;v.value=(t+y)%y}function ue(){D.value&&!n.infinite||se(v.value-1)}function me(){w.value&&!n.infinite||se(v.value+1)}function F(t,y={}){if(E.value)return;const{zoomRate:L,rotateDeg:N,enableTransition:W}={zoomRate:n.zoomRate,rotateDeg:90,enableTransition:!0,...y};switch(t){case"zoomOut":d.value.scale>.2&&(d.value.scale=Number.parseFloat((d.value.scale/L).toFixed(3)));break;case"zoomIn":d.value.scale<7&&(d.value.scale=Number.parseFloat((d.value.scale*L).toFixed(3)));break;case"clockwise":d.value.deg+=N;break;case"anticlockwise":d.value.deg-=N;break}d.value.enableTransition=W}return De(b,()=>{Re(()=>{const t=f.value[0];t!=null&&t.complete||(E.value=!0)})}),De(v,t=>{ae(),l("switch",t)}),Le(()=>{var t,y;P(),(y=(t=k.value)==null?void 0:t.focus)==null||y.call(t)}),s({setActiveItem:se}),(t,y)=>(p(),Y(ut,{to:"body",disabled:!t.teleported},[u(dt,{name:"viewer-fade",appear:""},{default:g(()=>[m("div",{ref_key:"wrapper",ref:k,tabindex:-1,class:$(e(o).e("wrapper")),style:$e({zIndex:e(R)})},[m("div",{class:$(e(o).e("mask")),onClick:y[0]||(y[0]=Ze(L=>t.hideOnClickModal&&j(),["self"]))},null,2),z(" CLOSE "),m("span",{class:$([e(o).e("btn"),e(o).e("close")]),onClick:j},[u(e(U),null,{default:g(()=>[u(e(et))]),_:1})],2),z(" ARROW "),e(x)?z("v-if",!0):(p(),h(A,{key:0},[m("span",{class:$([e(o).e("btn"),e(o).e("prev"),e(o).is("disabled",!t.infinite&&e(D))]),onClick:ue},[u(e(U),null,{default:g(()=>[u(e(tt))]),_:1})],2),m("span",{class:$([e(o).e("btn"),e(o).e("next"),e(o).is("disabled",!t.infinite&&e(w))]),onClick:me},[u(e(U),null,{default:g(()=>[u(e(at))]),_:1})],2)],64)),z(" ACTIONS "),m("div",{class:$([e(o).e("btn"),e(o).e("actions")])},[m("div",{class:$(e(o).e("actions__inner"))},[u(e(U),{onClick:y[1]||(y[1]=L=>F("zoomOut"))},{default:g(()=>[u(e(nt))]),_:1}),u(e(U),{onClick:y[2]||(y[2]=L=>F("zoomIn"))},{default:g(()=>[u(e(st))]),_:1}),m("i",{class:$(e(o).e("actions__divider"))},null,2),u(e(U),{onClick:ne},{default:g(()=>[(p(),Y(ot(e(i).icon)))]),_:1}),m("i",{class:$(e(o).e("actions__divider"))},null,2),u(e(U),{onClick:y[3]||(y[3]=L=>F("anticlockwise"))},{default:g(()=>[u(e(lt))]),_:1}),u(e(U),{onClick:y[4]||(y[4]=L=>F("clockwise"))},{default:g(()=>[u(e(rt))]),_:1})],2)],2),z(" CANVAS "),m("div",{class:$(e(o).e("canvas"))},[(p(!0),h(A,null,H(t.urlList,(L,N)=>it((p(),h("img",{ref_for:!0,ref:W=>f.value[N]=W,key:L,src:L,style:$e(e(C)),class:$(e(o).e("img")),onLoad:ge,onError:ce,onMousedown:de},null,46,ea)),[[ct,N===v.value]])),128))],2),B(t.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var na=ve(aa,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const sa=Ce(na),oa=pe({hideOnClickModal:{type:Boolean,default:!1},src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:{type:Boolean,default:!1},scrollContainer:{type:G([String,Object])},previewSrcList:{type:G(Array),default:()=>Ae([])},previewTeleported:{type:Boolean,default:!1},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),la={load:a=>a instanceof Event,error:a=>a instanceof Event,switch:a=>Ee(a),close:()=>!0,show:()=>!0},ra=["src","loading"],ia={key:0},ca=T({name:"ElImage",inheritAttrs:!1}),da=T({...ca,props:oa,emits:la,setup(a,{emit:s}){const l=a;let n="";const{t:c}=ie(),r=re("image"),o=ft(),_=pt(),k=M(),f=M(!1),I=M(!0),E=M(!1),v=M(),i=M(),d=oe&&"loading"in HTMLImageElement.prototype;let x,D;const w=O(()=>o.style),b=O(()=>{const{fit:t}=l;return oe&&t?{objectFit:t}:{}}),C=O(()=>{const{previewSrcList:t}=l;return Array.isArray(t)&&t.length>0}),R=O(()=>{const{previewSrcList:t,initialIndex:y}=l;let L=y;return y>t.length-1&&(L=0),L}),j=O(()=>l.loading==="eager"?!1:!d&&l.loading==="lazy"||l.lazy),P=()=>{oe&&(I.value=!0,f.value=!1,k.value=l.src)};function ye(t){I.value=!1,f.value=!1,s("load",t)}function ge(t){I.value=!1,f.value=!0,s("error",t)}function ce(){Et(v.value,i.value)&&(P(),ne())}const de=gt(ce,200,!0);async function ae(){var t;if(!oe)return;await Re();const{scrollContainer:y}=l;vt(y)?i.value=y:_t(y)&&y!==""?i.value=(t=document.querySelector(y))!=null?t:void 0:v.value&&(i.value=yt(v.value)),i.value&&(x=Q(i,"scroll",de),setTimeout(()=>ce(),100))}function ne(){!oe||!i.value||!de||(x==null||x(),i.value=void 0)}function se(t){if(t.ctrlKey){if(t.deltaY<0)return t.preventDefault(),!1;if(t.deltaY>0)return t.preventDefault(),!1}}function ue(){C.value&&(D=Q("wheel",se,{passive:!1}),n=document.body.style.overflow,document.body.style.overflow="hidden",E.value=!0,s("show"))}function me(){D==null||D(),document.body.style.overflow=n,E.value=!1,s("close")}function F(t){s("switch",t)}return De(()=>l.src,()=>{j.value?(I.value=!0,f.value=!1,ne(),ae()):P()}),Le(()=>{j.value?ae():P()}),(t,y)=>(p(),h("div",{ref_key:"container",ref:v,class:$([e(r).b(),t.$attrs.class]),style:$e(e(w))},[f.value?B(t.$slots,"error",{key:0},()=>[m("div",{class:$(e(r).e("error"))},S(e(c)("el.image.error")),3)]):(p(),h(A,{key:1},[k.value!==void 0?(p(),h("img",le({key:0},e(_),{src:k.value,loading:t.loading,style:e(b),class:[e(r).e("inner"),e(C)&&e(r).e("preview"),I.value&&e(r).is("loading")],onClick:ue,onLoad:ye,onError:ge}),null,16,ra)):z("v-if",!0),I.value?(p(),h("div",{key:1,class:$(e(r).e("wrapper"))},[B(t.$slots,"placeholder",{},()=>[m("div",{class:$(e(r).e("placeholder"))},null,2)])],2)):z("v-if",!0)],64)),e(C)?(p(),h(A,{key:2},[E.value?(p(),Y(e(sa),{key:0,"z-index":t.zIndex,"initial-index":e(R),infinite:t.infinite,"zoom-rate":t.zoomRate,"url-list":t.previewSrcList,"hide-on-click-modal":t.hideOnClickModal,teleported:t.previewTeleported,"close-on-press-escape":t.closeOnPressEscape,onClose:me,onSwitch:F},{default:g(()=>[t.$slots.viewer?(p(),h("div",ia,[B(t.$slots,"viewer")])):z("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):z("v-if",!0)],64)):z("v-if",!0)],6))}});var ua=ve(da,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const ma=Ce(ua),fa="3f8f3a5d95e847b59875d15e6f74fc01",pa="101270101",va=a=>ht.get("https://devapi.qweather.com/v7/weather/now",a,{loading:!1}),_a={class:"lg:flex"},ya={class:"mt-2 flex flex-col justify-center md:ml-6 md:mt-0"},ga={class:"text-base md:text-lg"},ha={class:"text-sm"},ka=m("div",{class:"mt-4 flex flex-1 justify-end md:mt-0"},[m("div",{class:"flex flex-col justify-center text-right"},[m("span",{class:"text-sm"},"待办"),m("span",{class:"text-2xl"},"2/10")]),m("div",{class:"mx-12 flex flex-col justify-center text-right md:mx-16"},[m("span",{class:"text-sm"},"项目"),m("span",{class:"text-2xl"},"8")]),m("div",{class:"mr-4 flex flex-col justify-center text-right md:mr-10"},[m("span",{class:"text-sm"},"团队"),m("span",{class:"text-2xl"},"300")])],-1),wa=T({__name:"TodoList",props:{loading:{type:Boolean,default:!0}},setup(a){const s=a,l=kt(),n=O(()=>l.userInfo),c={location:pa,key:fa};let r=Ie({});async function o(){const{now:{text:_,temp:k,icon:f}}=await va(c);r=Object.assign({},{text:_,temp:k,icon:f})}return Le(()=>{o()}),(_,k)=>{const f=Ve,I=te;return p(),Y(I,{loading:s.loading,hover:"",title:"待办事项"},{default:g(()=>[m("div",_a,[u(f,{src:e(Pe),size:72,class:"!mx-auto !block"},null,8,["src"]),m("div",ya,[m("h1",ga,S(e(wt)(new Date))+S(e(n).username)+" , 开始您的工作吧！ ",1),m("span",ha,[X(" 今日 "),m("i",{class:$(`qi-${e(r).icon}`)},null,2),X(" "+S(e(r).text)+"，"+S(e(r).temp)+"℃！ ",1)])]),ka])]),_:1},8,["loading"])}}}),ze=""+new URL("../jpg/avatar01-b234bf74.jpg",import.meta.url).href,be=""+new URL("../jpg/avatar02-39839ccd.jpg",import.meta.url).href,ba=[{title:"组件",icon:"local-comp",path:"/comps"},{title:"错误日志",icon:"local-log",path:"/comps"},{title:"权限控制",icon:"local-permission",path:"/comps"},{title:"功能",icon:"local-func",path:"/comps"},{title:"角色管理",icon:"local-setting",path:"/comps"},{title:"菜单管理",icon:"local-setting",path:"/comps"}],xa=[{name:"一个小瘪三",type:"text",time:"刚刚",remark:"发布了一条动态",content:"宝剑锋从磨砺出，梅花香自苦寒来。",headImg:ze},{name:"不知名用户",type:"text",time:"15分钟前",remark:"关注了一个小瘪三",content:"",headImg:be},{name:"马保国",type:"image",time:"20分钟前",remark:"发布了一组照片",content:["https://img1.baidu.com/it/u=962503013,598294385&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500","https://img1.baidu.com/it/u=901475605,1506635237&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800","https://img2.baidu.com/it/u=4075901265,1581553886&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800"],headImg:be},{name:"李白",type:"text",time:"35分钟前",remark:"发布了《清平调·其一》",content:`云想衣裳花想容，春风拂槛露华浓。
                  若非群玉山头见，会向瑶台月下逢。`,headImg:be},{name:"王勃",type:"text",time:"35分钟前",remark:"发布了一条动态",content:"落霞与孤鹜齐飞，秋水共长天一色。",headImg:ze},{name:"Admin",type:"text",time:"45分钟前",remark:"实现了系统基本功能",content:"基础功能已经实现，欢迎使用或提bug啊~",headImg:Pe}],Da=[{type:"通知",content:"系统基础功能开发完成，欢迎使用啊~"},{type:"消息",content:"您申请的切换权限已经通过审批，请重新登录查看~"},{type:"通知",content:"你们什么身份啊，和我用一样的系统~"},{type:"通知",content:"不能喝坐小朋友那桌~"},{type:"消息",content:"您有一条OA提交未通过审核，未通过原因：信息不完整。"},{type:"消息",content:"【马保国】邀请你加入浑圆形意太极门"}],$a={class:"quick-list"},Ia={class:"quick-title"},Ca=T({__name:"QuickNav",props:{loading:{type:Boolean,default:!1}},setup(a){return(s,l)=>{const n=je,c=te;return p(),Y(c,{title:"快捷导航",class:"quick-nav-wrapper",loading:a.loading},{default:g(()=>[m("div",$a,[(p(!0),h(A,null,H(e(ba),r=>(p(),h("div",{class:"quick-item",key:r.icon},[u(n,{name:r.icon,size:"20"},null,8,["name"]),m("div",Ia,S(r.title),1)]))),128))])]),_:1},8,["loading"])}}});const Ea=_e(Ca,[["__scopeId","data-v-97880a0f"]]);const La={class:"dynamic-item-main flex-auto"},Oa={class:"dynamic-item-name"},Sa={class:"dynamic-item-remark"},Ma={class:"dynamic-item-time"},za={key:0},Ta=T({__name:"DynamicInfo",props:{loading:{type:Boolean,default:!1}},setup(a){return(s,l)=>{const n=Be,c=Ve,r=ma,o=te;return p(),Y(o,{loading:a.loading,class:"todo-list-wrapper",hover:"",title:"最新动态"},{extra:g(()=>[u(n,{type:"primary",link:""},{default:g(()=>[X("更多")]),_:1})]),default:g(()=>[(p(!0),h(A,null,H(e(xa),(_,k)=>(p(),h("div",{class:"dynamic-item flex",key:k},[u(c,{size:48,src:_.headImg,class:"dynamic-head mr-4"},null,8,["src"]),m("div",La,[m("div",null,[m("span",Oa,S(_.name),1),m("span",Sa,S(_.remark),1)]),m("div",Ma,S(_.time),1),_.content?(p(),h("div",{key:0,class:$(["dynamic-item-content",{"is-text":_.type==="text"}])},[_.type==="text"?(p(),h("span",za,S(_.content),1)):_.type==="image"?(p(!0),h(A,{key:1},H(_.content,(f,I)=>(p(),Y(r,{key:f,src:f,"zoom-rate":1.2,"preview-src-list":_.content,"initial-index":I,fit:"cover",class:"dynamic-item-image"},null,8,["src","preview-src-list","initial-index"]))),128)):z("",!0)],2)):z("",!0)])]))),128))]),_:1},8,["loading"])}}});const Na=_e(Ta,[["__scopeId","data-v-8b99debc"]]),Aa={class:"notice-item-content ml-3 flex-auto overflow-hidden text-ellipsis whitespace-nowrap"},Ra=T({__name:"NoticeList",props:{loading:{type:Boolean,default:!1}},setup(a){return(s,l)=>{const n=Be,c=Lt,r=te;return p(),Y(r,{title:"我的通知",loading:a.loading},{extra:g(()=>[u(n,{type:"primary",link:""},{default:g(()=>[X("更多")]),_:1})]),default:g(()=>[(p(!0),h(A,null,H(e(Da),(o,_)=>(p(),h("div",{class:"notice-item flex items-center justify-center",key:_},[u(c,{type:o.type==="消息"?"warning":""},{default:g(()=>[X(S(o.type),1)]),_:2},1032,["type"]),m("div",Aa,S(o.content),1)]))),128))]),_:1},8,["loading"])}}});const ja=_e(Ra,[["__scopeId","data-v-e3f05f0e"]]);const Va={class:"flex w-full justify-between"},Pa=T({__name:"Calendar",props:{loading:{type:Boolean,default:!1}},setup(a){const s=M(),l=M(new Date),n=c=>{s.value.selectDate(c)};return(c,r)=>{const o=je,_=Kt,k=te;return p(),Y(k,{title:"任务日历",loading:a.loading},{default:g(()=>[u(_,{modelValue:e(l),"onUpdate:modelValue":r[4]||(r[4]=f=>bt(l)?l.value=f:null),class:"custom-calendar",ref_key:"calendarRef",ref:s},{header:g(({date:f})=>[m("div",Va,[m("div",null,[u(o,{name:"el-icon-DArrowLeft",class:"cursor-pointer",onClick:r[0]||(r[0]=I=>n("prev-year"))}),u(o,{name:"el-icon-ArrowLeft",class:"ml5 cursor-pointer",onClick:r[1]||(r[1]=I=>n("prev-month"))})]),X(" "+S(f)+" ",1),m("div",null,[u(o,{name:"el-icon-ArrowRight",class:"mr5 cursor-pointer",onClick:r[2]||(r[2]=I=>n("next-month"))}),u(o,{name:"el-icon-DArrowRight",class:"cursor-pointer",onClick:r[3]||(r[3]=I=>n("next-year"))})])])]),"date-cell":g(({data:f})=>[m("div",null,S(f.day.split("-")[2]),1)]),_:1},8,["modelValue"])]),_:1},8,["loading"])}}});const Ba=_e(Pa,[["__scopeId","data-v-0d6a23af"]]),Ya={class:"overflow-hidden"},Qa=T({__name:"index",setup(a){const s=M(!0);setTimeout(()=>{s.value=!1},1200);const l=Ie({xAxis:[{axisTick:{show:!1},data:["周一","周二","周三","周四","周五","周六","周日"]}],series:[{data:[120,85,65,75,140,155,175],areaStyle:{}}]}),n=Ie({series:[{data:[.68,.68,.68,.68],label:{formatter:"68%",fontSize:32}}]});return(c,r)=>{const o=$t,_=te,k=xt,f=Dt;return p(),h("div",Ya,[u(wa,{loading:e(s)},null,8,["loading"]),u(f,{gutter:16,class:"mt-5"},{default:g(()=>[u(k,{span:16},{default:g(()=>[u(_,{loading:e(s),title:"反馈时长统计图"},{default:g(()=>[u(o,{type:"line",options:e(l)},null,8,["options"])]),_:1},8,["loading"]),u(Na,{loading:e(s)},null,8,["loading"])]),_:1}),u(k,{span:8},{default:g(()=>[u(Ea,{loading:e(s)},null,8,["loading"]),u(_,{loading:e(s),title:"完成率"},{default:g(()=>[u(o,{type:"liquidfill",options:e(n)},null,8,["options"])]),_:1},8,["loading"]),u(ja,{loading:e(s)},null,8,["loading"]),u(Ba,{loading:e(s)},null,8,["loading"])]),_:1})]),_:1})])}}});export{Qa as default};
