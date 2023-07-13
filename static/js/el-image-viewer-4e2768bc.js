import{D as be,b as de,d as le,b3 as fe,av as ue,a as J,cT as ce,cU as ke,cV as he,bL as ve,u as me,bF as Ie,l as y,cW as _e,aL as Le,c as b,L as oe,X as pe,m as ge,o as p,z as re,s as i,t as I,q as m,n as u,f as a,h as ie,aO as ze,g as _,aP as S,c6 as Ee,e as T,F as K,cr as Ce,a$ as Oe,cX as Te,cY as Ne,a2 as Se,cZ as xe,c_ as $e,v as Ae,aD as Re,b1 as Ve,r as G,aR as Me,bH as Be,_ as we,aM as M,aT as V,c$ as Xe,w as ye,a6 as Ye,d0 as De,bt as H,a3 as Fe,ab as Pe,bE as He,I as We,d1 as je,aN as Ze}from"./index-ed5c6bde.js";import{d as qe,i as Ue}from"./localeData-f4c9b402.js";var Ge="Expected a function";function se(c,k,o){var s=!0,g=!0;if(typeof c!="function")throw new TypeError(Ge);return be(o)&&(s="leading"in o?!!o.leading:s,g="trailing"in o?!!o.trailing:g),qe(c,k,{leading:s,maxWait:k,trailing:g})}const Ke=de({urlList:{type:le(Array),default:()=>fe([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:{type:Boolean,default:!1},teleported:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),Je={close:()=>!0,switch:c=>ue(c)},Qe=["src"],ea=J({name:"ElImageViewer"}),aa=J({...ea,props:Ke,emits:Je,setup(c,{expose:k,emit:o}){const s=c,g={CONTAIN:{name:"contain",icon:ce(ke)},ORIGINAL:{name:"original",icon:ce(he)}},{t:L}=ve(),l=me("image-viewer"),{nextZIndex:Q}=Ie(),x=y(),N=y([]),z=_e(),h=y(!0),d=y(s.initialIndex),f=Le(g.CONTAIN),r=y({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),B=b(()=>{const{urlList:e}=s;return e.length<=1}),$=b(()=>d.value===0),W=b(()=>d.value===s.urlList.length-1),ee=b(()=>s.urlList[d.value]),X=b(()=>{const{scale:e,deg:t,offsetX:n,offsetY:v,enableTransition:C}=r.value;let w=n/e,O=v/e;switch(t%360){case 90:case-270:[w,O]=[O,-w];break;case 180:case-180:[w,O]=[-w,-O];break;case 270:case-90:[w,O]=[-O,w];break}const R={transform:`scale(${e}) rotate(${t}deg) translate(${w}px, ${O}px)`,transition:C?"transform .3s":""};return f.value.name===g.CONTAIN.name&&(R.maxWidth=R.maxHeight="100%"),R}),ae=b(()=>ue(s.zIndex)?s.zIndex:Q());function A(){te(),o("close")}function Y(){const e=se(n=>{switch(n.code){case V.esc:s.closeOnPressEscape&&A();break;case V.space:F();break;case V.left:q();break;case V.up:E("zoomIn");break;case V.right:U();break;case V.down:E("zoomOut");break}}),t=se(n=>{const v=n.deltaY||n.deltaX;E(v<0?"zoomIn":"zoomOut",{zoomRate:s.zoomRate,enableTransition:!1})});z.run(()=>{M(document,"keydown",e),M(document,"wheel",t)})}function te(){z.stop()}function ne(){h.value=!1}function j(e){h.value=!1,e.target.alt=L("el.image.error")}function Z(e){if(h.value||e.button!==0||!x.value)return;r.value.enableTransition=!1;const{offsetX:t,offsetY:n}=r.value,v=e.pageX,C=e.pageY,w=se(R=>{r.value={...r.value,offsetX:t+R.pageX-v,offsetY:n+R.pageY-C}}),O=M(document,"mousemove",w);M(document,"mouseup",()=>{O()}),e.preventDefault()}function D(){r.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function F(){if(h.value)return;const e=Xe(g),t=Object.values(g),n=f.value.name,C=(t.findIndex(w=>w.name===n)+1)%e.length;f.value=g[e[C]],D()}function P(e){const t=s.urlList.length;d.value=(e+t)%t}function q(){$.value&&!s.infinite||P(d.value-1)}function U(){W.value&&!s.infinite||P(d.value+1)}function E(e,t={}){if(h.value)return;const{zoomRate:n,rotateDeg:v,enableTransition:C}={zoomRate:s.zoomRate,rotateDeg:90,enableTransition:!0,...t};switch(e){case"zoomOut":r.value.scale>.2&&(r.value.scale=Number.parseFloat((r.value.scale/n).toFixed(3)));break;case"zoomIn":r.value.scale<7&&(r.value.scale=Number.parseFloat((r.value.scale*n).toFixed(3)));break;case"clockwise":r.value.deg+=v;break;case"anticlockwise":r.value.deg-=v;break}r.value.enableTransition=C}return oe(ee,()=>{pe(()=>{const e=N.value[0];e!=null&&e.complete||(h.value=!0)})}),oe(d,e=>{D(),o("switch",e)}),ge(()=>{var e,t;Y(),(t=(e=x.value)==null?void 0:e.focus)==null||t.call(e)}),k({setActiveItem:P}),(e,t)=>(p(),re(Be,{to:"body",disabled:!e.teleported},[i(Me,{name:"viewer-fade",appear:""},{default:I(()=>[m("div",{ref_key:"wrapper",ref:x,tabindex:-1,class:u(a(l).e("wrapper")),style:ie({zIndex:a(ae)})},[m("div",{class:u(a(l).e("mask")),onClick:t[0]||(t[0]=ze(n=>e.hideOnClickModal&&A(),["self"]))},null,2),_(" CLOSE "),m("span",{class:u([a(l).e("btn"),a(l).e("close")]),onClick:A},[i(a(S),null,{default:I(()=>[i(a(Ee))]),_:1})],2),_(" ARROW "),a(B)?_("v-if",!0):(p(),T(K,{key:0},[m("span",{class:u([a(l).e("btn"),a(l).e("prev"),a(l).is("disabled",!e.infinite&&a($))]),onClick:q},[i(a(S),null,{default:I(()=>[i(a(Ce))]),_:1})],2),m("span",{class:u([a(l).e("btn"),a(l).e("next"),a(l).is("disabled",!e.infinite&&a(W))]),onClick:U},[i(a(S),null,{default:I(()=>[i(a(Oe))]),_:1})],2)],64)),_(" ACTIONS "),m("div",{class:u([a(l).e("btn"),a(l).e("actions")])},[m("div",{class:u(a(l).e("actions__inner"))},[i(a(S),{onClick:t[1]||(t[1]=n=>E("zoomOut"))},{default:I(()=>[i(a(Te))]),_:1}),i(a(S),{onClick:t[2]||(t[2]=n=>E("zoomIn"))},{default:I(()=>[i(a(Ne))]),_:1}),m("i",{class:u(a(l).e("actions__divider"))},null,2),i(a(S),{onClick:F},{default:I(()=>[(p(),re(Se(a(f).icon)))]),_:1}),m("i",{class:u(a(l).e("actions__divider"))},null,2),i(a(S),{onClick:t[3]||(t[3]=n=>E("anticlockwise"))},{default:I(()=>[i(a(xe))]),_:1}),i(a(S),{onClick:t[4]||(t[4]=n=>E("clockwise"))},{default:I(()=>[i(a($e))]),_:1})],2)],2),_(" CANVAS "),m("div",{class:u(a(l).e("canvas"))},[(p(!0),T(K,null,Ae(e.urlList,(n,v)=>Re((p(),T("img",{ref_for:!0,ref:C=>N.value[v]=C,key:n,src:n,style:ie(a(X)),class:u(a(l).e("img")),onLoad:ne,onError:j,onMousedown:Z},null,46,Qe)),[[Ve,v===d.value]])),128))],2),G(e.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var ta=we(aa,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const na=ye(ta),sa=de({hideOnClickModal:{type:Boolean,default:!1},src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:{type:Boolean,default:!1},scrollContainer:{type:le([String,Object])},previewSrcList:{type:le(Array),default:()=>fe([])},previewTeleported:{type:Boolean,default:!1},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),la={load:c=>c instanceof Event,error:c=>c instanceof Event,switch:c=>ue(c),close:()=>!0,show:()=>!0},oa=["src","loading"],ra={key:0},ia=J({name:"ElImage",inheritAttrs:!1}),ua=J({...ia,props:sa,emits:la,setup(c,{emit:k}){const o=c;let s="";const{t:g}=ve(),L=me("image"),l=Ye(),Q=De(),x=y(),N=y(!1),z=y(!0),h=y(!1),d=y(),f=y(),r=H&&"loading"in HTMLImageElement.prototype;let B,$;const W=b(()=>l.style),ee=b(()=>{const{fit:e}=o;return H&&e?{objectFit:e}:{}}),X=b(()=>{const{previewSrcList:e}=o;return Array.isArray(e)&&e.length>0}),ae=b(()=>{const{previewSrcList:e,initialIndex:t}=o;let n=t;return t>e.length-1&&(n=0),n}),A=b(()=>o.loading==="eager"?!1:!r&&o.loading==="lazy"||o.lazy),Y=()=>{H&&(z.value=!0,N.value=!1,x.value=o.src)};function te(e){z.value=!1,N.value=!1,k("load",e)}function ne(e){z.value=!1,N.value=!0,k("error",e)}function j(){Ue(d.value,f.value)&&(Y(),F())}const Z=Ze(j,200,!0);async function D(){var e;if(!H)return;await pe();const{scrollContainer:t}=o;He(t)?f.value=t:We(t)&&t!==""?f.value=(e=document.querySelector(t))!=null?e:void 0:d.value&&(f.value=je(d.value)),f.value&&(B=M(f,"scroll",Z),setTimeout(()=>j(),100))}function F(){!H||!f.value||!Z||(B==null||B(),f.value=void 0)}function P(e){if(e.ctrlKey){if(e.deltaY<0)return e.preventDefault(),!1;if(e.deltaY>0)return e.preventDefault(),!1}}function q(){X.value&&($=M("wheel",P,{passive:!1}),s=document.body.style.overflow,document.body.style.overflow="hidden",h.value=!0,k("show"))}function U(){$==null||$(),document.body.style.overflow=s,h.value=!1,k("close")}function E(e){k("switch",e)}return oe(()=>o.src,()=>{A.value?(z.value=!0,N.value=!1,F(),D()):Y()}),ge(()=>{A.value?D():Y()}),(e,t)=>(p(),T("div",{ref_key:"container",ref:d,class:u([a(L).b(),e.$attrs.class]),style:ie(a(W))},[N.value?G(e.$slots,"error",{key:0},()=>[m("div",{class:u(a(L).e("error"))},Fe(a(g)("el.image.error")),3)]):(p(),T(K,{key:1},[x.value!==void 0?(p(),T("img",Pe({key:0},a(Q),{src:x.value,loading:e.loading,style:a(ee),class:[a(L).e("inner"),a(X)&&a(L).e("preview"),z.value&&a(L).is("loading")],onClick:q,onLoad:te,onError:ne}),null,16,oa)):_("v-if",!0),z.value?(p(),T("div",{key:1,class:u(a(L).e("wrapper"))},[G(e.$slots,"placeholder",{},()=>[m("div",{class:u(a(L).e("placeholder"))},null,2)])],2)):_("v-if",!0)],64)),a(X)?(p(),T(K,{key:2},[h.value?(p(),re(a(na),{key:0,"z-index":e.zIndex,"initial-index":a(ae),infinite:e.infinite,"zoom-rate":e.zoomRate,"url-list":e.previewSrcList,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:U,onSwitch:E},{default:I(()=>[e.$slots.viewer?(p(),T("div",ra,[G(e.$slots,"viewer")])):_("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):_("v-if",!0)],64)):_("v-if",!0)],6))}});var ca=we(ua,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const va=ye(ca);export{va as E};
