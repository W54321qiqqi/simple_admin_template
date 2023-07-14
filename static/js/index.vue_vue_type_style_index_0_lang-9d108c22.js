import{b as W,aS as ce,a as j,bL as de,R as K,bM as fe,c as $,bN as pe,o as m,e as U,q as H,r as S,n as F,f as e,a3 as q,s as T,t as u,z as R,a2 as ye,aP as me,g as D,h as Z,_ as x,bO as ge,d as ve,au as ee,J as be,bF as he,Z as G,l as h,bP as Ce,bQ as Be,a0 as Se,bR as ke,L as J,X as oe,m as we,az as le,b2 as Y,bt as _e,Y as Fe,aZ as Q,u as De,N as Te,bS as $e,aD as Ee,bT as Pe,bG as Ie,ab as te,a9 as se,b1 as Ae,aR as Re,bH as ae,w as Oe,a6 as Ne,a7 as Le,b4 as Me,x as X,aE as ze,bU as Ve,A as Ue}from"./index-b15e4bc2.js";import{_ as He}from"./index.vue_vue_type_script_setup_true_lang-24582e7c.js";import{a as je}from"./el-popper-bb678e48.js";import{E as qe}from"./el-space-61429dce.js";import{c as Ze}from"./refs-ae7fe08d.js";const ne=Symbol("dialogInjectionKey"),re=W({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:ce},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),Ke={close:()=>!0},Ge=["aria-label"],Je=["id"],Ye=j({name:"ElDialogContent"}),Qe=j({...Ye,props:re,emits:Ke,setup(l){const c=l,{t:g}=de(),{Close:a}=ge,{dialogRef:v,headerRef:C,bodyId:d,ns:n,style:r}=K(ne),{focusTrapRef:b}=K(fe),f=Ze(b,v),B=$(()=>c.draggable);return pe(v,C,B),(s,i)=>(m(),U("div",{ref:e(f),class:F([e(n).b(),e(n).is("fullscreen",s.fullscreen),e(n).is("draggable",e(B)),e(n).is("align-center",s.alignCenter),{[e(n).m("center")]:s.center},s.customClass]),style:Z(e(r)),tabindex:"-1"},[H("header",{ref_key:"headerRef",ref:C,class:F(e(n).e("header"))},[S(s.$slots,"header",{},()=>[H("span",{role:"heading",class:F(e(n).e("title"))},q(s.title),3)]),s.showClose?(m(),U("button",{key:0,"aria-label":e(g)("el.dialog.close"),class:F(e(n).e("headerbtn")),type:"button",onClick:i[0]||(i[0]=O=>s.$emit("close"))},[T(e(me),{class:F(e(n).e("close"))},{default:u(()=>[(m(),R(ye(s.closeIcon||e(a))))]),_:1},8,["class"])],10,Ge)):D("v-if",!0)],2),H("div",{id:e(d),class:F(e(n).e("body"))},[S(s.$slots,"default")],10,Je),s.$slots.footer?(m(),U("footer",{key:0,class:F(e(n).e("footer"))},[S(s.$slots,"footer")],2)):D("v-if",!0)],6))}});var Xe=x(Qe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const We=W({...re,appendToBody:{type:Boolean,default:!1},beforeClose:{type:ve(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),xe={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[ee]:l=>be(l),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},eo=(l,c)=>{const a=le().emit,{nextZIndex:v}=he();let C="";const d=G(),n=G(),r=h(!1),b=h(!1),f=h(!1),B=h(l.zIndex||v());let s,i;const O=Ce("namespace",Be),L=$(()=>{const y={},A=`--${O.value}-dialog`;return l.fullscreen||(l.top&&(y[`${A}-margin-top`]=l.top),l.width&&(y[`${A}-width`]=Se(l.width))),y}),M=$(()=>l.alignCenter?{display:"flex"}:{});function z(){a("opened")}function N(){a("closed"),a(ee,!1),l.destroyOnClose&&(f.value=!1)}function o(){a("close")}function k(){i==null||i(),s==null||s(),l.openDelay&&l.openDelay>0?{stop:s}=Y(()=>p(),l.openDelay):p()}function w(){s==null||s(),i==null||i(),l.closeDelay&&l.closeDelay>0?{stop:i}=Y(()=>P(),l.closeDelay):P()}function E(){function y(A){A||(b.value=!0,r.value=!1)}l.beforeClose?l.beforeClose(y):w()}function V(){l.closeOnClickModal&&E()}function p(){_e&&(r.value=!0)}function P(){r.value=!1}function t(){a("openAutoFocus")}function _(){a("closeAutoFocus")}function I(y){var A;((A=y.detail)==null?void 0:A.focusReason)==="pointer"&&y.preventDefault()}l.lockScroll&&ke(r);function ue(){l.closeOnPressEscape&&E()}return J(()=>l.modelValue,y=>{y?(b.value=!1,k(),f.value=!0,B.value=l.zIndex?B.value++:v(),oe(()=>{a("open"),c.value&&(c.value.scrollTop=0)})):r.value&&w()}),J(()=>l.fullscreen,y=>{c.value&&(y?(C=c.value.style.transform,c.value.style.transform=""):c.value.style.transform=C)}),we(()=>{l.modelValue&&(r.value=!0,f.value=!0,k())}),{afterEnter:z,afterLeave:N,beforeLeave:o,handleClose:E,onModalClick:V,close:w,doClose:P,onOpenAutoFocus:t,onCloseAutoFocus:_,onCloseRequested:ue,onFocusoutPrevented:I,titleId:d,bodyId:n,closed:b,style:L,overlayDialogStyle:M,rendered:f,visible:r,zIndex:B}},oo=["aria-label","aria-labelledby","aria-describedby"],lo=j({name:"ElDialog",inheritAttrs:!1}),to=j({...lo,props:We,emits:xe,setup(l,{expose:c}){const g=l,a=Fe();Q({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},$(()=>!!a.title)),Q({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},$(()=>!!g.customClass));const v=De("dialog"),C=h(),d=h(),n=h(),{visible:r,titleId:b,bodyId:f,style:B,overlayDialogStyle:s,rendered:i,zIndex:O,afterEnter:L,afterLeave:M,beforeLeave:z,handleClose:N,onModalClick:o,onOpenAutoFocus:k,onCloseAutoFocus:w,onCloseRequested:E,onFocusoutPrevented:V}=eo(g,C);Te(ne,{dialogRef:C,headerRef:d,bodyId:f,ns:v,rendered:i,style:B});const p=$e(o),P=$(()=>g.draggable&&!g.fullscreen);return c({visible:r,dialogContentRef:n}),(t,_)=>(m(),R(ae,{to:"body",disabled:!t.appendToBody},[T(Re,{name:"dialog-fade",onAfterEnter:e(L),onAfterLeave:e(M),onBeforeLeave:e(z),persisted:""},{default:u(()=>[Ee(T(e(Pe),{"custom-mask-event":"",mask:t.modal,"overlay-class":t.modalClass,"z-index":e(O)},{default:u(()=>[H("div",{role:"dialog","aria-modal":"true","aria-label":t.title||void 0,"aria-labelledby":t.title?void 0:e(b),"aria-describedby":e(f),class:F(`${e(v).namespace.value}-overlay-dialog`),style:Z(e(s)),onClick:_[0]||(_[0]=(...I)=>e(p).onClick&&e(p).onClick(...I)),onMousedown:_[1]||(_[1]=(...I)=>e(p).onMousedown&&e(p).onMousedown(...I)),onMouseup:_[2]||(_[2]=(...I)=>e(p).onMouseup&&e(p).onMouseup(...I))},[T(e(Ie),{loop:"",trapped:e(r),"focus-start-el":"container",onFocusAfterTrapped:e(k),onFocusAfterReleased:e(w),onFocusoutPrevented:e(V),onReleaseRequested:e(E)},{default:u(()=>[e(i)?(m(),R(Xe,te({key:0,ref_key:"dialogContentRef",ref:n},t.$attrs,{"custom-class":t.customClass,center:t.center,"align-center":t.alignCenter,"close-icon":t.closeIcon,draggable:e(P),fullscreen:t.fullscreen,"show-close":t.showClose,title:t.title,onClose:e(N)}),se({header:u(()=>[t.$slots.title?S(t.$slots,"title",{key:1}):S(t.$slots,"header",{key:0,close:e(N),titleId:e(b),titleClass:e(v).e("title")})]),default:u(()=>[S(t.$slots,"default")]),_:2},[t.$slots.footer?{name:"footer",fn:u(()=>[S(t.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):D("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,oo)]),_:3},8,["mask","overlay-class","z-index"]),[[Ae,e(r)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var so=x(to,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const ao=Oe(so);const no={visible:{type:Boolean},title:{type:String,default:"提示"},width:{type:[String,Number],default:"50%"},top:{type:String,default:"15vh"},modal:{type:Boolean,default:!0},appendToBody:{type:Boolean,default:!1},lockScroll:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!1},showClose:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},destroyOnClose:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1}},ie={showFooter:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},btnPosition:{type:String,default:"center"},showCancelBtn:{type:Boolean,default:!0},cancelText:{type:String,default:"取 消"},showSaveBtn:{type:Boolean,default:!0},saveText:{type:String,default:"确 认"},showFullscreen:{type:Boolean,default:!0},minHeight:{type:String,default:"auto"},maxHeight:{type:String,default:"auto"},height:{type:String,default:"auto"},modalType:{type:String,default:""},closeConfirm:{type:Boolean,default:!1},closeFun:{type:Function,default:null}},ro=Object.assign({},no,ie),io={key:0,class:"base-dialog-header"},uo={key:0},go=j({name:"BaseDialog",__name:"index",props:ro,emits:["close","save","update:visible"],setup(l,{expose:c,emit:g}){const a=l,v=Ne(),{proxy:C}=le(),d=h(!1),n=h(!1),r=h(a.fullscreen),b=h(),f=$(()=>{const o={...Le(a,Object.keys(ie))};return o.modalClass=a.modalType||"",o.showClose=!1,o.fullscreen=e(r),{...o,...v}}),B=$(()=>{const{minHeight:o,height:k}=a;return{minHeight:o,height:e(f).fullscreen?"100%":k}}),s=()=>{n.value=!1,d.value=!0,oe(()=>{L()})},i=()=>{d.value=!1,g("update:visible",!1),g("close")},O=o=>{o==null||o.preventDefault(),o==null||o.stopPropagation(),r.value=!r.value},L=()=>{e(b).wrapRef.scrollTop=0},M=async()=>{try{a.closeConfirm&&await C.$messageBox("你确定要关闭弹框吗？"),i()}catch{}},z=async()=>{Ve(a.closeFun)?a.closeFun(i):i()},N=()=>{g("save",o=>{n.value=o})};return Me(()=>{d.value=a.visible}),c({showDialog:s,hideDialog:i}),(o,k)=>{const w=Ue,E=qe,V=je,p=He,P=ao;return m(),R(ae,{to:"body"},[T(P,te({modelValue:e(d),"onUpdate:modelValue":k[0]||(k[0]=t=>ze(d)?d.value=t:null)},e(f),{class:"base-dialog","before-close":M}),se({header:u(({close:t})=>[o.showHeader?(m(),U("div",io,[o.$slots.title?D("",!0):(m(),U("span",uo,q(o.title),1)),S(o.$slots,"title"),T(E,{size:14,class:"base-header-icon"},{default:u(()=>[o.showFullscreen?(m(),R(w,{key:0,name:e(r)?"local-fullOutScreen":"local-fullScreen",onClick:O,class:"cursor-pointer",hover:""},null,8,["name"])):D("",!0),T(w,{name:"local-close",class:"cursor-pointer",onClick:t,size:"19",hover:""},null,8,["onClick"])]),_:2},1024)])):D("",!0)]),default:u(()=>[T(V,{class:"el-scrollbar basic-dialog-body",style:Z(e(B)),ref_key:"bodyScrollRef",ref:b},{default:u(()=>[S(o.$slots,"default")]),_:3},8,["style"]),S(o.$slots,"footer")]),_:2},[!o.$slots.footer&&o.showFooter?{name:"footer",fn:u(()=>[H("div",{class:"base-dialog-footer",style:Z({"text-align":o.btnPosition})},[o.showCancelBtn?(m(),R(p,{key:0,onClick:z},{default:u(()=>[X(q(o.cancelText),1)]),_:1})):D("",!0),o.showSaveBtn?(m(),R(p,{key:1,type:"primary",onClick:N,loading:e(n)},{default:u(()=>[X(q(o.saveText),1)]),_:1},8,["loading"])):D("",!0)],4)]),key:"0"}:void 0]),1040,["modelValue"])])}}});export{go as _};
