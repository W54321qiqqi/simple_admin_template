import{Q as ce,b as W,aS as de,a as j,bL as fe,R as K,bM as pe,c as T,bN as ye,o as g,e as U,q as H,r as S,n as _,f as e,a3 as q,s as D,t as d,z as R,a2 as me,aP as ge,g as $,h as Z,_ as x,bO as ve,d as be,au as ee,J as he,bF as Ce,Z as G,l as h,bP as Be,bQ as Se,a0 as ke,bR as we,L as J,X as oe,m as Fe,az as le,b2 as Q,bt as _e,Y as $e,aZ as Y,u as De,N as Te,bS as Ee,aD as Pe,bT as Ie,bG as Ae,ab as se,a9 as te,b1 as Re,aR as Oe,bH as ae,w as Ne,a6 as Le,a7 as Me,b4 as ze,x as X,aE as Ve,bU as Ue,A as He}from"./index-ed5c6bde.js";import{_ as je}from"./index.vue_vue_type_script_setup_true_lang-66520c4d.js";import{a as qe}from"./el-popper-41cbb7e4.js";import{E as Ze}from"./el-space-f8bc1e23.js";const Ke=(...l)=>u=>{l.forEach(c=>{ce(c)?c(u):c.value=u})},ne=Symbol("dialogInjectionKey"),re=W({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:de},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),Ge={close:()=>!0},Je=["aria-label"],Qe=["id"],Ye=j({name:"ElDialogContent"}),Xe=j({...Ye,props:re,emits:Ge,setup(l){const u=l,{t:c}=fe(),{Close:a}=ve,{dialogRef:v,headerRef:C,bodyId:f,ns:n,style:r}=K(ne),{focusTrapRef:b}=K(pe),p=Ke(b,v),B=T(()=>u.draggable);return ye(v,C,B),(t,i)=>(g(),U("div",{ref:e(p),class:_([e(n).b(),e(n).is("fullscreen",t.fullscreen),e(n).is("draggable",e(B)),e(n).is("align-center",t.alignCenter),{[e(n).m("center")]:t.center},t.customClass]),style:Z(e(r)),tabindex:"-1"},[H("header",{ref_key:"headerRef",ref:C,class:_(e(n).e("header"))},[S(t.$slots,"header",{},()=>[H("span",{role:"heading",class:_(e(n).e("title"))},q(t.title),3)]),t.showClose?(g(),U("button",{key:0,"aria-label":e(c)("el.dialog.close"),class:_(e(n).e("headerbtn")),type:"button",onClick:i[0]||(i[0]=O=>t.$emit("close"))},[D(e(ge),{class:_(e(n).e("close"))},{default:d(()=>[(g(),R(me(t.closeIcon||e(a))))]),_:1},8,["class"])],10,Je)):$("v-if",!0)],2),H("div",{id:e(f),class:_(e(n).e("body"))},[S(t.$slots,"default")],10,Qe),t.$slots.footer?(g(),U("footer",{key:0,class:_(e(n).e("footer"))},[S(t.$slots,"footer")],2)):$("v-if",!0)],6))}});var We=x(Xe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const xe=W({...re,appendToBody:{type:Boolean,default:!1},beforeClose:{type:be(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),eo={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[ee]:l=>he(l),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},oo=(l,u)=>{const a=le().emit,{nextZIndex:v}=Ce();let C="";const f=G(),n=G(),r=h(!1),b=h(!1),p=h(!1),B=h(l.zIndex||v());let t,i;const O=Be("namespace",Se),L=T(()=>{const m={},A=`--${O.value}-dialog`;return l.fullscreen||(l.top&&(m[`${A}-margin-top`]=l.top),l.width&&(m[`${A}-width`]=ke(l.width))),m}),M=T(()=>l.alignCenter?{display:"flex"}:{});function z(){a("opened")}function N(){a("closed"),a(ee,!1),l.destroyOnClose&&(p.value=!1)}function o(){a("close")}function k(){i==null||i(),t==null||t(),l.openDelay&&l.openDelay>0?{stop:t}=Q(()=>y(),l.openDelay):y()}function w(){t==null||t(),i==null||i(),l.closeDelay&&l.closeDelay>0?{stop:i}=Q(()=>P(),l.closeDelay):P()}function E(){function m(A){A||(b.value=!0,r.value=!1)}l.beforeClose?l.beforeClose(m):w()}function V(){l.closeOnClickModal&&E()}function y(){_e&&(r.value=!0)}function P(){r.value=!1}function s(){a("openAutoFocus")}function F(){a("closeAutoFocus")}function I(m){var A;((A=m.detail)==null?void 0:A.focusReason)==="pointer"&&m.preventDefault()}l.lockScroll&&we(r);function ue(){l.closeOnPressEscape&&E()}return J(()=>l.modelValue,m=>{m?(b.value=!1,k(),p.value=!0,B.value=l.zIndex?B.value++:v(),oe(()=>{a("open"),u.value&&(u.value.scrollTop=0)})):r.value&&w()}),J(()=>l.fullscreen,m=>{u.value&&(m?(C=u.value.style.transform,u.value.style.transform=""):u.value.style.transform=C)}),Fe(()=>{l.modelValue&&(r.value=!0,p.value=!0,k())}),{afterEnter:z,afterLeave:N,beforeLeave:o,handleClose:E,onModalClick:V,close:w,doClose:P,onOpenAutoFocus:s,onCloseAutoFocus:F,onCloseRequested:ue,onFocusoutPrevented:I,titleId:f,bodyId:n,closed:b,style:L,overlayDialogStyle:M,rendered:p,visible:r,zIndex:B}},lo=["aria-label","aria-labelledby","aria-describedby"],so=j({name:"ElDialog",inheritAttrs:!1}),to=j({...so,props:xe,emits:eo,setup(l,{expose:u}){const c=l,a=$e();Y({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},T(()=>!!a.title)),Y({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},T(()=>!!c.customClass));const v=De("dialog"),C=h(),f=h(),n=h(),{visible:r,titleId:b,bodyId:p,style:B,overlayDialogStyle:t,rendered:i,zIndex:O,afterEnter:L,afterLeave:M,beforeLeave:z,handleClose:N,onModalClick:o,onOpenAutoFocus:k,onCloseAutoFocus:w,onCloseRequested:E,onFocusoutPrevented:V}=oo(c,C);Te(ne,{dialogRef:C,headerRef:f,bodyId:p,ns:v,rendered:i,style:B});const y=Ee(o),P=T(()=>c.draggable&&!c.fullscreen);return u({visible:r,dialogContentRef:n}),(s,F)=>(g(),R(ae,{to:"body",disabled:!s.appendToBody},[D(Oe,{name:"dialog-fade",onAfterEnter:e(L),onAfterLeave:e(M),onBeforeLeave:e(z),persisted:""},{default:d(()=>[Pe(D(e(Ie),{"custom-mask-event":"",mask:s.modal,"overlay-class":s.modalClass,"z-index":e(O)},{default:d(()=>[H("div",{role:"dialog","aria-modal":"true","aria-label":s.title||void 0,"aria-labelledby":s.title?void 0:e(b),"aria-describedby":e(p),class:_(`${e(v).namespace.value}-overlay-dialog`),style:Z(e(t)),onClick:F[0]||(F[0]=(...I)=>e(y).onClick&&e(y).onClick(...I)),onMousedown:F[1]||(F[1]=(...I)=>e(y).onMousedown&&e(y).onMousedown(...I)),onMouseup:F[2]||(F[2]=(...I)=>e(y).onMouseup&&e(y).onMouseup(...I))},[D(e(Ae),{loop:"",trapped:e(r),"focus-start-el":"container",onFocusAfterTrapped:e(k),onFocusAfterReleased:e(w),onFocusoutPrevented:e(V),onReleaseRequested:e(E)},{default:d(()=>[e(i)?(g(),R(We,se({key:0,ref_key:"dialogContentRef",ref:n},s.$attrs,{"custom-class":s.customClass,center:s.center,"align-center":s.alignCenter,"close-icon":s.closeIcon,draggable:e(P),fullscreen:s.fullscreen,"show-close":s.showClose,title:s.title,onClose:e(N)}),te({header:d(()=>[s.$slots.title?S(s.$slots,"title",{key:1}):S(s.$slots,"header",{key:0,close:e(N),titleId:e(b),titleClass:e(v).e("title")})]),default:d(()=>[S(s.$slots,"default")]),_:2},[s.$slots.footer?{name:"footer",fn:d(()=>[S(s.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):$("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,lo)]),_:3},8,["mask","overlay-class","z-index"]),[[Re,e(r)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var ao=x(to,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const no=Ne(ao);const ro={visible:{type:Boolean},title:{type:String,default:"提示"},width:{type:[String,Number],default:"50%"},top:{type:String,default:"15vh"},modal:{type:Boolean,default:!0},appendToBody:{type:Boolean,default:!1},lockScroll:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!1},showClose:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},destroyOnClose:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1}},ie={showFooter:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},btnPosition:{type:String,default:"center"},showCancelBtn:{type:Boolean,default:!0},cancelText:{type:String,default:"取 消"},showSaveBtn:{type:Boolean,default:!0},saveText:{type:String,default:"确 认"},showFullscreen:{type:Boolean,default:!0},minHeight:{type:String,default:"auto"},maxHeight:{type:String,default:"auto"},height:{type:String,default:"auto"},modalType:{type:String,default:""},closeConfirm:{type:Boolean,default:!1},closeFun:{type:Function,default:null}},io=Object.assign({},ro,ie),uo={key:0,class:"base-dialog-header"},co={key:0},go=j({name:"BaseDialog",__name:"index",props:io,emits:["close","save","update:visible"],setup(l,{expose:u,emit:c}){const a=l,v=Le(),{proxy:C}=le(),f=h(!1),n=h(!1),r=h(a.fullscreen),b=h(),p=T(()=>{const o={...Me(a,Object.keys(ie))};return o.modalClass=a.modalType||"",o.showClose=!1,o.fullscreen=e(r),{...o,...v}}),B=T(()=>{const{minHeight:o,height:k}=a;return{minHeight:o,height:e(p).fullscreen?"100%":k}}),t=()=>{n.value=!1,f.value=!0,oe(()=>{L()})},i=()=>{f.value=!1,c("update:visible",!1),c("close")},O=o=>{o==null||o.preventDefault(),o==null||o.stopPropagation(),r.value=!r.value},L=()=>{e(b).wrapRef.scrollTop=0},M=async()=>{try{a.closeConfirm&&await C.$messageBox("你确定要关闭弹框吗？"),i()}catch{}},z=async()=>{Ue(a.closeFun)?a.closeFun(i):i()},N=()=>{c("save",o=>{n.value=o})};return ze(()=>{f.value=a.visible}),u({showDialog:t,hideDialog:i}),(o,k)=>{const w=He,E=Ze,V=qe,y=je,P=no;return g(),R(ae,{to:"body"},[D(P,se({modelValue:e(f),"onUpdate:modelValue":k[0]||(k[0]=s=>Ve(f)?f.value=s:null)},e(p),{class:"base-dialog","before-close":M}),te({header:d(({close:s})=>[o.showHeader?(g(),U("div",uo,[o.$slots.title?$("",!0):(g(),U("span",co,q(o.title),1)),S(o.$slots,"title"),D(E,{size:14,class:"base-header-icon"},{default:d(()=>[o.showFullscreen?(g(),R(w,{key:0,name:e(r)?"local-fullOutScreen":"local-fullScreen",onClick:O,class:"cursor-pointer",hover:""},null,8,["name"])):$("",!0),D(w,{name:"local-close",class:"cursor-pointer",onClick:s,size:"19",hover:""},null,8,["onClick"])]),_:2},1024)])):$("",!0)]),default:d(()=>[D(V,{class:"el-scrollbar basic-dialog-body",style:Z(e(B)),ref_key:"bodyScrollRef",ref:b},{default:d(()=>[S(o.$slots,"default")]),_:3},8,["style"]),S(o.$slots,"footer")]),_:2},[!o.$slots.footer&&o.showFooter?{name:"footer",fn:d(()=>[H("div",{class:"base-dialog-footer",style:Z({"text-align":o.btnPosition})},[o.showCancelBtn?(g(),R(y,{key:0,onClick:z},{default:d(()=>[X(q(o.cancelText),1)]),_:1})):$("",!0),o.showSaveBtn?(g(),R(y,{key:1,type:"primary",onClick:N,loading:e(n)},{default:d(()=>[X(q(o.saveText),1)]),_:1},8,["loading"])):$("",!0)],4)]),key:"0"}:void 0]),1040,["modelValue"])])}}});export{go as _,Ke as c};