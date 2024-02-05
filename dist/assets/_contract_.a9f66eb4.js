import{bb as Pe,c as C,i as Ve,bc as ee,bd as ye,aq as Ce,be as ke,b0 as De,M as se,P as S,A as G,bf as Se,w as E,aC as Q,ae as te,f as t,a3 as j,bg as Fe,ak as H,bh as we,bi as ae,aM as xe,O as Ne,a6 as ie,_ as ce,Y as K,aF as le,l as de,aG as me,bj as fe,bk as ne,aJ as ve,aK as he,bl as ge,bm as pe,bn as Ie,aN as be,bo as q,bp as Me,bq as Be,br as Oe,as as w,at as Re,bs as ze,aB as Ae,ag as Ue,aO as _e,aP as oe,o as $e,a2 as Te,e as g,Q as D,R as Ke,S as He,$ as Le,X as re,U as Z,a5 as ue,az as B,j as je}from"./index.41f779f5.js";import{P as Ee}from"./index.eb6b292a.js";import{V as Ge}from"./VForm.963ba347.js";const Qe=(e,a,o)=>e==null||a==null?-1:e.toString().toLocaleLowerCase().indexOf(a.toString().toLocaleLowerCase()),Ye=Pe({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function Je(e,a,o){var F,N;const x=[],n=(F=o==null?void 0:o.default)!=null?F:Qe,d=o!=null&&o.filterKeys?ee(o.filterKeys):!1,r=Object.keys((N=o==null?void 0:o.customKeyFilter)!=null?N:{}).length;if(!(e!=null&&e.length))return x;e:for(let V=0;V<e.length;V++){const c=e[V],h={},P={};let m=-1;if(a&&!(o!=null&&o.noFilter)){if(typeof c=="object"){const O=d||Object.keys(c);for(const R of O){var f;const _=ye(c,R,c),k=o==null||(f=o.customKeyFilter)==null?void 0:f[R];if(m=k?k(_,a,c):n(_,a,c),m!==-1&&m!==!1)k?h[R]=m:P[R]=m;else if((o==null?void 0:o.filterMode)==="every")continue e}}else m=n(c,a,c),m!==-1&&m!==!1&&(P.title=m);const I=Object.keys(P).length,M=Object.keys(h).length;if(!I&&!M||(o==null?void 0:o.filterMode)==="union"&&M!==r&&!I||(o==null?void 0:o.filterMode)==="intersection"&&(M!==r||!I))continue}x.push({index:V,matches:{...P,...h}})}return x}function Xe(e,a,o){const x=C(()=>typeof(o==null?void 0:o.value)!="string"&&typeof(o==null?void 0:o.value)!="number"?"":String(o.value));return{filteredItems:C(()=>{const d=Ve(a);return Je(d,x.value,{customKeyFilter:e.customKeyFilter,default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}).map(f=>{let{index:F,matches:N}=f;return{item:d[F],matches:N}})})}}function We(e,a,o){if(Array.isArray(a))throw new Error("Multiple matches is not implemented");return typeof a=="number"&&~a?t(j,null,[t("span",{class:"v-autocomplete__unmask"},[e.substr(0,a)]),t("span",{class:"v-autocomplete__mask"},[e.substr(a,o)]),t("span",{class:"v-autocomplete__unmask"},[e.substr(a+o)])]):e}const Ze=Ce()({name:"VAutocomplete",props:{search:String,...Ye({filterKeys:["title"]}),...ke(),...De({transition:!1})},emits:{"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,a){let{slots:o}=a;const{t:x}=se(),n=S(),d=S(!1),r=S(!0),f=G(e,"menu"),{items:F,transformIn:N,transformOut:V}=Se(e),c=G(e,"search",""),h=G(e,"modelValue",[],l=>N(ee(l)),l=>{var s;const i=V(l);return e.multiple?i:(s=i[0])!=null?s:null}),{filteredItems:P}=Xe(e,F,C(()=>r.value?void 0:c.value)),m=C(()=>h.value.map(l=>F.value.find(i=>i.value===l.value)||l)),I=C(()=>m.value.map(l=>l.props.value));function M(l){h.value=[],e.openOnClear&&(f.value=!0),c.value=""}function O(){e.hideNoData&&!F.value.length||e.readonly||(f.value=!0)}function R(l){e.readonly||(["Enter","ArrowDown"].includes(l.key)&&(f.value=!0),["Escape"].includes(l.key)&&(f.value=!1),["Enter","Escape","Tab"].includes(l.key)&&(r.value=!0))}function _(l){c.value=l.target.value}function k(){d.value&&(r.value=!0)}const u=S(!1);function v(l){if(e.multiple){const i=I.value.findIndex(s=>s===l.value);if(i===-1)h.value=[...h.value,l],c.value="";else{const s=[...h.value];s.splice(i,1),h.value=s}}else h.value=[l],u.value=!0,c.value=l.title,f.value=!1,r.value=!0,Q(()=>u.value=!1)}return E(d,l=>{var s;if(l){var i;u.value=!0,c.value=e.multiple?"":String((s=(i=m.value.at(-1))==null?void 0:i.props.title)!=null?s:""),r.value=!0,Q(()=>u.value=!1)}else f.value=!1,c.value=""}),E(c,l=>{!d.value||u.value||(l&&(f.value=!0),r.value=!l)}),te(()=>{const l=!!(e.chips||o.chip);return t(K,{ref:n,modelValue:c.value,"onUpdate:modelValue":i=>{i==null&&(h.value=[])},validationValue:h.externalValue,dirty:h.value.length>0,onInput:_,class:["v-autocomplete",{"v-autocomplete--active-menu":f.value,"v-autocomplete--chips":!!e.chips,[`v-autocomplete--${e.multiple?"multiple":"single"}`]:!0}],appendInnerIcon:e.menuIcon,readonly:e.readonly,"onClick:clear":M,"onClick:control":O,"onClick:input":O,onFocus:()=>d.value=!0,onBlur:()=>d.value=!1,onKeydown:R},{...o,default:()=>{var i;return t(j,null,[t(Fe,H({modelValue:f.value,"onUpdate:modelValue":s=>f.value=s,activator:"parent",contentClass:"v-autocomplete__content",eager:e.eager,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:k},e.menuProps),{default:()=>[t(we,{selected:I.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:s=>s.preventDefault()},{default:()=>{var s;return[!P.value.length&&!e.hideNoData&&((s=(i=o["no-data"])==null?void 0:i.call(o))!=null?s:t(ae,{title:x(e.noDataText)},null)),P.value.map((b,z)=>{var $;var y;let{item:p,matches:A}=b;return($=(y=o.item)==null?void 0:y.call(o,{item:p,index:z,props:H(p.props,{onClick:()=>v(p)})}))!=null?$:t(ae,H({key:z},p.props,{onClick:()=>v(p)}),{prepend:T=>{let{isSelected:L}=T;return e.multiple&&!e.hideSelected?t(xe,{modelValue:L,ripple:!1},null):void 0},title:()=>{var L;var T;return r.value?p.title:We(p.title,A.title,(L=(T=c.value)==null?void 0:T.length)!=null?L:0)}})})]}})]}),m.value.map((s,b)=>{function z(p){p.stopPropagation(),p.preventDefault(),v(s)}const y={"onClick:close":z,modelValue:!0};return t("div",{key:b,class:"v-autocomplete__selection"},[l?t(Ne,{defaults:{VChip:{closable:e.closableChips,size:"small",text:s.title}}},{default:()=>[o.chip?o.chip({item:s,index:b,props:y}):t(ie,y,null)]}):o.selection?o.selection({item:s,index:b}):t("span",{class:"v-autocomplete__selection-text"},[s.title,e.multiple&&b<m.value.length-1&&t("span",{class:"v-autocomplete__selection-comma"},[ce(",")])])])})])}})}),le({isFocused:d,isPristine:r,menu:f,search:c,filteredItems:P,select:v},n)}});const qe=de({name:"VFileInput",inheritAttrs:!1,props:{chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,hint:String,persistentHint:Boolean,placeholder:String,showSize:{type:[Boolean,Number],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(e)},...me({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>ee(e).every(a=>a!=null&&typeof a=="object")},...fe({clearable:!0})},emits:{"click:control":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{attrs:o,emit:x,slots:n}=a;const{t:d}=se(),r=G(e,"modelValue"),f=C(()=>typeof e.showSize!="boolean"?e.showSize:void 0),F=C(()=>{var u;return((u=r.value)!=null?u:[]).reduce((v,l)=>{let{size:i=0}=l;return v+i},0)}),N=C(()=>ne(F.value,f.value)),V=C(()=>{var u;return((u=r.value)!=null?u:[]).map(v=>{const{name:l="",size:i=0}=v;return e.showSize?`${l} (${ne(i,f.value)})`:l})}),c=C(()=>{var l;var u;const v=(l=(u=r.value)==null?void 0:u.length)!=null?l:0;return e.showSize?d(e.counterSizeString,v,N.value):d(e.counterString,v)}),h=S(),P=S(),m=S(!1),I=S(),M=C(()=>e.messages.length?e.messages:e.persistentHint?e.hint:"");function O(){if(I.value!==document.activeElement){var u;(u=I.value)==null||u.focus()}m.value||(m.value=!0)}function R(u){q(e["onClick:prepend"],u),_(u)}function _(u){var v;(v=I.value)==null||v.click(),x("click:control",u)}function k(u){u.stopPropagation(),O(),Q(()=>{r.value=[],I!=null&&I.value&&(I.value.value=""),q(e["onClick:clear"],u)})}return te(()=>{const u=!!(n.counter||e.counter),v=!!(u||n.details),[l,i]=ve(o),[{modelValue:s,...b}]=he(e),[z]=ge(e);return t(be,H({ref:h,modelValue:r.value,"onUpdate:modelValue":y=>r.value=y,class:"v-file-input","onClick:prepend":R,"onClick:append":e["onClick:append"]},l,b,{messages:M.value}),{...n,default:y=>{let{isDisabled:p,isDirty:A,isReadonly:$,isValid:T}=y;return t(pe,H({ref:P,"prepend-icon":e.prependIcon,"onClick:control":_,"onClick:clear":k,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},z,{active:A.value||m.value,dirty:A.value,focused:m.value,error:T.value===!1}),{...n,default:L=>{let{props:{class:J,...X}}=L;return t(j,null,[t("input",H({ref:I,type:"file",readonly:$.value,disabled:p.value,multiple:e.multiple,name:e.name,onClick:U=>{U.stopPropagation(),O()},onChange:U=>{var Y;if(!U.target)return;const W=U.target;r.value=[...(Y=W.files)!=null?Y:[]]},onFocus:O,onBlur:()=>m.value=!1},X,i),null),t("div",{class:J},[r.value.length>0&&(n.selection?n.selection({fileNames:V.value,totalBytes:F.value,totalBytesReadable:N.value}):e.chips?V.value.map(U=>t(ie,{key:U,size:"small",color:e.color},{default:()=>[U]})):V.value.join(", "))])])}})},details:v?y=>{var p;return t(j,null,[(p=n.details)==null?void 0:p.call(n,y),u&&t(j,null,[t("span",null,null),t(Ie,{active:!!r.value.length,value:c.value},n.counter)])])}:void 0})}),le({},h,P,I)}});const et=de({name:"VTextarea",directives:{Intersect:Me},inheritAttrs:!1,props:{autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,...me(),...fe()},emits:{"click:control":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{attrs:o,emit:x,slots:n}=a;const d=G(e,"modelValue"),r=C(()=>typeof e.counterValue=="function"?e.counterValue(d.value):(d.value||"").toString().length),f=C(()=>{if(o.maxlength)return o.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function F(l,i){var s,b;!e.autofocus||!l||(s=i[0].target)==null||(b=s.focus)==null||b.call(s)}const N=S(),V=S(),c=S(!1),h=S(""),P=S(),m=C(()=>c.value||e.persistentPlaceholder),I=C(()=>e.messages.length?e.messages:m.value||e.persistentHint?e.hint:"");function M(){if(P.value!==document.activeElement){var l;(l=P.value)==null||l.focus()}c.value||(c.value=!0)}function O(l){M(),x("click:control",l)}function R(l){l.stopPropagation(),M(),Q(()=>{d.value="",q(e["onClick:clear"],l)})}function _(l){d.value=l.target.value}const k=S();function u(){!e.autoGrow||Q(()=>{if(!k.value||!V.value)return;const l=getComputedStyle(k.value),i=getComputedStyle(V.value.$el),s=parseFloat(l.getPropertyValue("--v-field-padding-top"))+parseFloat(l.getPropertyValue("--v-input-padding-top"))+parseFloat(l.getPropertyValue("--v-field-padding-bottom")),b=k.value.scrollHeight,z=parseFloat(l.lineHeight),y=Math.max(parseFloat(e.rows)*z+s,parseFloat(i.getPropertyValue("--v-input-control-height"))),p=parseFloat(e.maxRows)*z+s||1/0;h.value=Ae(Ue(b!=null?b:0,y,p))})}Be(u),E(d,u),E(()=>e.rows,u),E(()=>e.maxRows,u),E(()=>e.density,u);let v;return E(k,l=>{if(l)v=new ResizeObserver(u),v.observe(k.value);else{var i;(i=v)==null||i.disconnect()}}),Oe(()=>{var l;(l=v)==null||l.disconnect()}),te(()=>{const l=!!(n.counter||e.counter||e.counterValue),i=!!(l||n.details),[s,b]=ve(o),[{modelValue:z,...y}]=he(e),[p]=ge(e);return t(be,H({ref:N,modelValue:d.value,"onUpdate:modelValue":A=>d.value=A,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)}],"onClick:prepend":e["onClick:prepend"],"onClick:append":e["onClick:append"]},s,y,{messages:I.value}),{...n,default:A=>{let{isDisabled:$,isDirty:T,isReadonly:L,isValid:J}=A;return t(pe,H({ref:V,style:{"--v-textarea-control-height":h.value},"onClick:control":O,"onClick:clear":R,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},p,{active:m.value||T.value,dirty:T.value||e.dirty,focused:c.value,error:J.value===!1}),{...n,default:X=>{let{props:{class:U,...W}}=X;return t(j,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[e.prefix]),w(t("textarea",H({ref:P,class:U,value:d.value,onInput:_,autofocus:e.autofocus,readonly:L.value,disabled:$.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:M,onBlur:()=>c.value=!1},W,b),null),[[Re("intersect"),{handler:F},null,{once:!0}]]),e.autoGrow&&w(t("textarea",{class:[U,"v-textarea__sizer"],"onUpdate:modelValue":Y=>d.value=Y,ref:k,readonly:!0,"aria-hidden":"true"},null),[[ze,d.value]]),e.suffix&&t("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:i?A=>{var $;return t(j,null,[($=n.details)==null?void 0:$.call(n,A),l&&t(j,null,[t("span",null,null),t(Ie,{active:e.persistentCounter||c.value,value:r.value,max:f.value},n.counter)])])}:void 0})}),le({},N,V,P)}}),tt={data(){return{formData:{ClientId:this.$route.params.contract,ProductId:null,CreatedDate:new Date().toISOString().substr(0,10),InitialPrice:0,NumberOfMonths:10,InstallmentPercentage:0,FinalPrice:0,Notes:"\u0645\u0644\u0627\u062D\u0638\u0627\u062A",InstallementImgsFiles:[]},Products:Ee(),cardTypeResponse:[],statusResponse:[],items:[],currentPage:1,pageSize:1e9,SelectItemCost:0,SelectItemPrice:0,InstallmentPrice:0,checked:!1}},computed:{createdDate(){const e=this.formData.CreatedDate;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}  ${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}:${String(e.getSeconds()).padStart(2,"0")}`}},mounted(){this.getData()},watch:{"formData.ProductId"(e){const a=this.Products.ProductsData.find(o=>o.id===e);this.SelectItemCost=a.priceBeforIncrease,this.SelectItemPrice=a.price,e===null?this.checked=!1:this.checked=!0},SelectItemPrice(e){this.formData.FinalPrice=e*(1+this.formData.InstallmentPercentage/100)},"formData.InstallmentPercentage"(e){this.formData.FinalPrice=this.SelectItemPrice*(1+e/100)},"formData.InitialPrice"(e){this.InstallmentPrice=(this.formData.FinalPrice-e)/this.formData.NumberOfMonths},"formData.NumberOfMonths"(e){this.InstallmentPrice=(this.formData.FinalPrice-this.formData.InitialPrice)/e},InstallmentPrice(e){this.formData.InitialPrice=this.formData.FinalPrice-e*this.formData.NumberOfMonths},"formData.FinalPrice"(e){this.InstallmentPrice=(e-this.formData.InitialPrice)/this.formData.NumberOfMonths}},methods:{async addClient(){const e=new FormData;e.append("ProductId",this.formData.ProductId),e.append("ClientId",this.$route.params.contract),e.append("CreatedDate",this.formData.CreatedDate),e.append("InitialPrice",this.formData.InitialPrice),e.append("NumberOfMonths",this.formData.NumberOfMonths),e.append("InstallmentPercentage",this.formData.InstallmentPercentage),e.append("Notes",this.formData.Notes);for(let a=0;a<this.formData.InstallementImgsFiles.length;a++)e.append("InstallementImgsFiles",this.formData.InstallementImgsFiles[a],this.formData.InstallementImgsFiles[a].name);try{await oe.post("Installements/AddInstallement",e,{headers:{"Content-Type":"multipart/form-data"}}),this.$router.push("/customers")}catch(a){console.error("Error adding client:",a)}},async getData(){try{const e=await oe.post("Product/GetProducts",{pageNumber:this.currentPage,pageSize:this.pageSize,name:""});this.Products.ProductsData=e.data.list,console.log(this.Products.ProductsData),this.items=e.data.list.map(a=>({title:a.name,value:a.id})),console.log(this.items)}catch(e){console.error("Error fetching data:",e)}}}},lt={class:"card custom-card"},at={class:"card-header p-3 tx-medium my-auto tx-white custom-card-header border-bottom-0 bg-primary d-flex justify-content-between"},nt={class:"main-content-label on-secondary my-auto tx-medium"};function ot(e,a,o,x,n,d){return $e(),Te("div",null,[t(re,null,{default:g(()=>[t(D,{cols:"12",md:"12"},{default:g(()=>[t(Ke,null,{default:g(()=>[t(He,null,{default:g(()=>[t(Ge,{onSubmit:Le(d.addClient,["prevent"])},{default:g(()=>[t(re,null,{default:g(()=>[t(D,{cols:"12",md:"12"},{default:g(()=>[Z("div",lt,[Z("div",at,[Z("h5",nt,ue(e.$t("Installmentcontract")),1)])])]),_:1}),t(D,{cols:"12",md:"6"},{default:g(()=>[t(Ze,{label:e.$t("SelectProducts"),placeholder:e.$t("SelectProducts"),modelValue:n.formData.ProductId,"onUpdate:modelValue":a[0]||(a[0]=r=>n.formData.ProductId=r),items:n.items},null,8,["label","placeholder","modelValue","items"])]),_:1}),w(t(D,{cols:"12",md:"6"},{default:g(()=>[t(K,{type:"date",modelValue:n.formData.CreatedDate,"onUpdate:modelValue":a[1]||(a[1]=r=>n.formData.CreatedDate=r),label:e.$t("CreatedDate"),placeholder:e.$t("CreatedDate")},null,8,["modelValue","label","placeholder"])]),_:1},512),[[B,n.checked]]),w(t(D,{cols:"12",md:"6"},{default:g(()=>[t(K,{disabled:"",modelValue:n.SelectItemCost,"onUpdate:modelValue":a[2]||(a[2]=r=>n.SelectItemCost=r),label:e.$t("cost"),placeholder:e.$t("cost")},null,8,["modelValue","label","placeholder"])]),_:1},512),[[B,n.checked]]),w(t(D,{cols:"12",md:"6"},{default:g(()=>[t(K,{disabled:"",modelValue:n.SelectItemPrice,"onUpdate:modelValue":a[3]||(a[3]=r=>n.SelectItemPrice=r),label:e.$t("price"),placeholder:e.$t("price")},null,8,["modelValue","label","placeholder"])]),_:1},512),[[B,n.checked]]),w(t(D,{cols:"12",md:"4"},{default:g(()=>[t(K,{modelValue:n.formData.InitialPrice,"onUpdate:modelValue":a[4]||(a[4]=r=>n.formData.InitialPrice=r),label:e.$t("InitialPrice"),placeholder:e.$t("InitialPrice")},null,8,["modelValue","label","placeholder"])]),_:1},512),[[B,n.checked]]),w(t(D,{cols:"12",md:"4"},{default:g(()=>[t(K,{modelValue:n.formData.NumberOfMonths,"onUpdate:modelValue":a[5]||(a[5]=r=>n.formData.NumberOfMonths=r),label:e.$t("NumberOfMonths"),placeholder:e.$t("NumberOfMonths")},null,8,["modelValue","label","placeholder"])]),_:1},512),[[B,n.checked]]),w(t(D,{cols:"12",md:"4"},{default:g(()=>[t(K,{modelValue:n.formData.InstallmentPercentage,"onUpdate:modelValue":a[6]||(a[6]=r=>n.formData.InstallmentPercentage=r),label:e.$t("InstallmentPercentage"),placeholder:e.$t("InstallmentPercentage")},null,8,["modelValue","label","placeholder"])]),_:1},512),[[B,n.checked]]),w(t(D,{cols:"12",md:"6"},{default:g(()=>[t(K,{modelValue:n.InstallmentPrice,"onUpdate:modelValue":a[7]||(a[7]=r=>n.InstallmentPrice=r),label:e.$t("InstallmentPrice"),placeholder:e.$t("InstallmentPrice")},null,8,["modelValue","label","placeholder"])]),_:1},512),[[B,n.checked]]),w(t(D,{cols:"12",md:"6"},{default:g(()=>[t(K,{modelValue:n.formData.FinalPrice,"onUpdate:modelValue":a[8]||(a[8]=r=>n.formData.FinalPrice=r),label:e.$t("FinalPrice"),placeholder:e.$t("FinalPrice"),disabled:""},null,8,["modelValue","label","placeholder"])]),_:1},512),[[B,n.checked]]),w(t(D,{cols:"12",md:"12"},{default:g(()=>[t(et,{modelValue:n.formData.Notes,"onUpdate:modelValue":a[9]||(a[9]=r=>n.formData.Notes=r),label:e.$t("Notes"),placeholder:e.$t("Notes")},null,8,["modelValue","label","placeholder"])]),_:1},512),[[B,n.checked]]),w(t(D,{cols:"12",md:"12"},{default:g(()=>[t(qe,{modelValue:n.formData.InstallementImgsFiles,"onUpdate:modelValue":a[10]||(a[10]=r=>n.formData.InstallementImgsFiles=r),label:"Upload Files",multiple:"",onChange:e.handleFileUpload},null,8,["modelValue","onChange"])]),_:1},512),[[B,n.checked]]),t(D,{cols:"12",class:"d-flex gap-4"},{default:g(()=>[w(t(je,{type:"submit",class:"d-block m-auto btn-edit"},{default:g(()=>[ce(ue(e.$t("Add")),1)]),_:1},512),[[B,n.checked]])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})])}const it=_e(tt,[["render",ot]]);export{it as default};