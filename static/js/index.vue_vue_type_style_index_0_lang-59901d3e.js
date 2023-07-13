import{a7 as ce,b as X,aS as de,a as q,aY as fe,a8 as Z,aZ as pe,c as T,bO as ye,o as g,e as U,q as j,r as k,n as _,f as e,ak as H,s as D,t as d,z as R,aj as me,aP as ge,g as $,h as K,_ as x,bP as ve,d as be,ao as ee,a0 as he,bI as Ce,af as J,l as h,bQ as Be,bR as ke,ah as Se,bS as we,a2 as Y,ad as oe,m as Fe,at as le,b7 as G,bw as _e,ae as $e,b3 as Q,u as De,a4 as Te,bT as Ee,ax as Pe,bU as Ie,bJ as Ae,aF as se,aD as te,b6 as Re,aR as Oe,bK as ae,w as Ne,aA as Ve,aB as Me,b9 as ze,x as W,ay as Le,bV as Ue,A as je}from"./index-d8d90257.js";import{_ as qe}from"./index.vue_vue_type_script_setup_true_lang-82f718f1.js";import{E as He}from"./el-popper-715c4d2c.js";import{E as Ke}from"./el-space-314262c2.js";const Ze=(...l)=>u=>{l.forEach(c=>{ce(c)?c(u):c.value=u})},ne=Symbol("dialogInjectionKey"),re=X({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:de},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),Je={close:()=>!0},Ye=["aria-label"],Ge=["id"],Qe=q({name:"ElDialogContent"}),We=q({...Qe,props:re,emits:Je,setup(l){const u=l,{t:c}=fe(),{Close:a}=ve,{dialogRef:v,headerRef:C,bodyId:f,ns:n,style:r}=Z(ne),{focusTrapRef:b}=Z(pe),p=Ze(b,v),B=T(()=>u.draggable);return ye(v,C,B),(t,i)=>(g(),U("div",{ref:e(p),class:_([e(n).b(),e(n).is("fullscreen",t.fullscreen),e(n).is("draggable",e(B)),e(n).is("align-center",t.alignCenter),{[e(n).m("center")]:t.center},t.customClass]),style:K(e(r)),tabindex:"-1"},[j("header",{ref_key:"headerRef",ref:C,class:_(e(n).e("header"))},[k(t.$slots,"header",{},()=>[j("span",{role:"heading",class:_(e(n).e("title"))},H(t.title),3)]),t.showClose?(g(),U("button",{key:0,"aria-label":e(c)("el.dialog.close"),class:_(e(n).e("headerbtn")),type:"button",onClick:i[0]||(i[0]=O=>t.$emit("close"))},[D(e(ge),{class:_(e(n).e("close"))},{default:d(()=>[(g(),R(me(t.closeIcon||e(a))))]),_:1},8,["class"])],10,Ye)):$("v-if",!0)],2),j("div",{id:e(f),class:_(e(n).e("body"))},[k(t.$slots,"default")],10,Ge),t.$slots.footer?(g(),U("footer",{key:0,class:_(e(n).e("footer"))},[k(t.$slots,"footer")],2)):$("v-if",!0)],6))}});var Xe=x(We,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const xe=X({...re,appendToBody:{type:Boolean,default:!1},beforeClose:{type:be(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),eo={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[ee]:l=>he(l),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},oo=(l,u)=>{const a=le().emit,{nextZIndex:v}=Ce();let C="";const f=J(),n=J(),r=h(!1),b=h(!1),p=h(!1),B=h(l.zIndex||v());let t,i;const O=Be("namespace",ke),V=T(()=>{const m={},A=`--${O.value}-dialog`;return l.fullscreen||(l.top&&(m[`${A}-margin-top`]=l.top),l.width&&(m[`${A}-width`]=Se(l.width))),m}),M=T(()=>l.alignCenter?{display:"flex"}:{});function z(){a("opened")}function N(){a("closed"),a(ee,!1),l.destroyOnClose&&(p.value=!1)}function o(){a("close")}function S(){i==null||i(),t==null||t(),l.openDelay&&l.openDelay>0?{stop:t}=G(()=>y(),l.openDelay):y()}function w(){t==null||t(),i==null||i(),l.closeDelay&&l.closeDelay>0?{stop:i}=G(()=>P(),l.closeDelay):P()}function E(){function m(A){A||(b.value=!0,r.value=!1)}l.beforeClose?l.beforeClose(m):w()}function L(){l.closeOnClickModal&&E()}function y(){_e&&(r.value=!0)}function P(){r.value=!1}function s(){a("openAutoFocus")}function F(){a("closeAutoFocus")}function I(m){var A;((A=m.detail)==null?void 0:A.focusReason)==="pointer"&&m.preventDefault()}l.lockScroll&&we(r);function ue(){l.closeOnPressEscape&&E()}return Y(()=>l.modelValue,m=>{m?(b.value=!1,S(),p.value=!0,B.value=l.zIndex?B.value++:v(),oe(()=>{a("open"),u.value&&(u.value.scrollTop=0)})):r.value&&w()}),Y(()=>l.fullscreen,m=>{u.value&&(m?(C=u.value.style.transform,u.value.style.transform=""):u.value.style.transform=C)}),Fe(()=>{l.modelValue&&(r.value=!0,p.value=!0,S())}),{afterEnter:z,afterLeave:N,beforeLeave:o,handleClose:E,onModalClick:L,close:w,doClose:P,onOpenAutoFocus:s,onCloseAutoFocus:F,onCloseRequested:ue,onFocusoutPrevented:I,titleId:f,bodyId:n,closed:b,style:V,overlayDialogStyle:M,rendered:p,visible:r,zIndex:B}},lo=["aria-label","aria-labelledby","aria-describedby"],so=q({name:"ElDialog",inheritAttrs:!1}),to=q({...so,props:xe,emits:eo,setup(l,{expose:u}){const c=l,a=$e();Q({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},T(()=>!!a.title)),Q({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},T(()=>!!c.customClass));const v=De("dialog"),C=h(),f=h(),n=h(),{visible:r,titleId:b,bodyId:p,style:B,overlayDialogStyle:t,rendered:i,zIndex:O,afterEnter:V,afterLeave:M,beforeLeave:z,handleClose:N,onModalClick:o,onOpenAutoFocus:S,onCloseAutoFocus:w,onCloseRequested:E,onFocusoutPrevented:L}=oo(c,C);Te(ne,{dialogRef:C,headerRef:f,bodyId:p,ns:v,rendered:i,style:B});const y=Ee(o),P=T(()=>c.draggable&&!c.fullscreen);return u({visible:r,dialogContentRef:n}),(s,F)=>(g(),R(ae,{to:"body",disabled:!s.appendToBody},[D(Oe,{name:"dialog-fade",onAfterEnter:e(V),onAfterLeave:e(M),onBeforeLeave:e(z),persisted:""},{default:d(()=>[Pe(D(e(Ie),{"custom-mask-event":"",mask:s.modal,"overlay-class":s.modalClass,"z-index":e(O)},{default:d(()=>[j("div",{role:"dialog","aria-modal":"true","aria-label":s.title||void 0,"aria-labelledby":s.title?void 0:e(b),"aria-describedby":e(p),class:_(`${e(v).namespace.value}-overlay-dialog`),style:K(e(t)),onClick:F[0]||(F[0]=(...I)=>e(y).onClick&&e(y).onClick(...I)),onMousedown:F[1]||(F[1]=(...I)=>e(y).onMousedown&&e(y).onMousedown(...I)),onMouseup:F[2]||(F[2]=(...I)=>e(y).onMouseup&&e(y).onMouseup(...I))},[D(e(Ae),{loop:"",trapped:e(r),"focus-start-el":"container",onFocusAfterTrapped:e(S),onFocusAfterReleased:e(w),onFocusoutPrevented:e(L),onReleaseRequested:e(E)},{default:d(()=>[e(i)?(g(),R(Xe,se({key:0,ref_key:"dialogContentRef",ref:n},s.$attrs,{"custom-class":s.customClass,center:s.center,"align-center":s.alignCenter,"close-icon":s.closeIcon,draggable:e(P),fullscreen:s.fullscreen,"show-close":s.showClose,title:s.title,onClose:e(N)}),te({header:d(()=>[s.$slots.title?k(s.$slots,"title",{key:1}):k(s.$slots,"header",{key:0,close:e(N),titleId:e(b),titleClass:e(v).e("title")})]),default:d(()=>[k(s.$slots,"default")]),_:2},[s.$slots.footer?{name:"footer",fn:d(()=>[k(s.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):$("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,lo)]),_:3},8,["mask","overlay-class","z-index"]),[[Re,e(r)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var ao=x(to,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const no=Ne(ao);const ro={visible:{type:Boolean},title:{type:String,default:"提示"},width:{type:[String,Number],default:"50%"},top:{type:String,default:"15vh"},modal:{type:Boolean,default:!0},appendToBody:{type:Boolean,default:!1},lockScroll:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!1},showClose:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},destroyOnClose:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1}},ie={showFooter:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},btnPosition:{type:String,default:"center"},showCancelBtn:{type:Boolean,default:!0},cancelText:{type:String,default:"取 消"},showSaveBtn:{type:Boolean,default:!0},saveText:{type:String,default:"确 认"},showFullscreen:{type:Boolean,default:!0},minHeight:{type:String,default:"auto"},maxHeight:{type:String,default:"auto"},height:{type:String,default:"auto"},modalType:{type:String,default:""},closeConfirm:{type:Boolean,default:!1},closeFun:{type:Function,default:null}},io=Object.assign({},ro,ie),uo={key:0,class:"base-dialog-header"},co={key:0},go=q({name:"BaseDialog",__name:"index",props:io,emits:["close","save","update:visible"],setup(l,{expose:u,emit:c}){const a=l,v=Ve(),{proxy:C}=le(),f=h(!1),n=h(!1),r=h(a.fullscreen),b=h(),p=T(()=>{const o={...Me(a,Object.keys(ie))};return o.modalClass=a.modalType||"",o.showClose=!1,o.fullscreen=e(r),{...o,...v}}),B=T(()=>{const{minHeight:o,height:S}=a;return{minHeight:o,height:e(p).fullscreen?"100%":S}}),t=()=>{n.value=!1,f.value=!0,oe(()=>{V()})},i=()=>{f.value=!1,c("update:visible",!1),c("close")},O=o=>{o==null||o.preventDefault(),o==null||o.stopPropagation(),r.value=!r.value},V=()=>{e(b).wrapRef.scrollTop=0},M=async()=>{try{a.closeConfirm&&await C.$messageBox("你确定要关闭弹框吗？"),i()}catch{}},z=async()=>{Ue(a.closeFun)?a.closeFun(i):i()},N=()=>{c("save",o=>{n.value=o})};return ze(()=>{f.value=a.visible}),u({showDialog:t,hideDialog:i}),(o,S)=>{const w=je,E=Ke,L=He,y=qe,P=no;return g(),R(ae,{to:"body"},[D(P,se({modelValue:e(f),"onUpdate:modelValue":S[0]||(S[0]=s=>Le(f)?f.value=s:null)},e(p),{class:"base-dialog","before-close":M}),te({header:d(({close:s})=>[o.showHeader?(g(),U("div",uo,[o.$slots.title?$("",!0):(g(),U("span",co,H(o.title),1)),k(o.$slots,"title"),D(E,{size:14,class:"base-header-icon"},{default:d(()=>[o.showFullscreen?(g(),R(w,{key:0,name:e(r)?"local-fullOutScreen":"local-fullScreen",onClick:O,class:"cursor-pointer",hover:""},null,8,["name"])):$("",!0),D(w,{name:"local-close",class:"cursor-pointer",onClick:s,size:"19",hover:""},null,8,["onClick"])]),_:2},1024)])):$("",!0)]),default:d(()=>[D(L,{class:"el-scrollbar basic-dialog-body",style:K(e(B)),ref_key:"bodyScrollRef",ref:b},{default:d(()=>[k(o.$slots,"default")]),_:3},8,["style"]),k(o.$slots,"footer")]),_:2},[!o.$slots.footer&&o.showFooter?{name:"footer",fn:d(()=>[j("div",{class:"base-dialog-footer",style:K({"text-align":o.btnPosition})},[o.showCancelBtn?(g(),R(y,{key:0,onClick:z},{default:d(()=>[W(H(o.cancelText),1)]),_:1})):$("",!0),o.showSaveBtn?(g(),R(y,{key:1,type:"primary",onClick:N,loading:e(n)},{default:d(()=>[W(H(o.saveText),1)]),_:1},8,["loading"])):$("",!0)],4)]),key:"0"}:void 0]),1040,["modelValue"])])}}});export{go as _,Ze as c};
