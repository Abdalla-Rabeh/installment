import{k as oe,l as ne,I as se,m as ie,n as re,p as de,q as ue,t as ce,v as me,x as fe,y as pe,z as ye,A as ve,c as $,B as be,C as _e,D as Ve,E as we,F as ge,G as Ae,H as Ce,J as Te,K as he,L as xe,M as Me,f as e,N as ke,O as H,g as h,j as V,P as _,o as g,b as E,e as l,Q as d,R as C,S as b,T as Ge,i as o,U as t,W as F,X as T,Y as v,Z as k,_ as p,$ as O,a0 as x,a1 as Y,a2 as M,a3 as S,a4 as U,a5 as w,a6 as Ie,a7 as Pe}from"./index.c3c66321.js";import{a as Se,V as Ue,b as Ne,c as z,d as Re}from"./VWindowItem.0a6e6517.js";import{V as L}from"./VForm.57cc012c.js";import{V as D}from"./VCheckbox.1b84aed3.js";import{b as K}from"./route-block.023af118.js";const q=oe("v-alert-title"),De=["success","info","warning","error"],Le=ne({name:"VAlert",props:{border:{type:[Boolean,String],validator:n=>typeof n=="boolean"||["top","end","bottom","start"].includes(n)},borderColor:String,closable:Boolean,closeIcon:{type:se,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:n=>De.includes(n)},...ie(),...re(),...de(),...ue(),...ce(),...me(),...fe(),...pe(),...ye({variant:"flat"})},emits:{"update:modelValue":n=>!0},setup(n,y){let{slots:i}=y;const s=ve(n,"modelValue"),f=$(()=>{var A;if(n.icon!==!1)return n.type?(A=n.icon)!=null?A:`$${n.type}`:n.icon}),u=$(()=>{var A;return{color:(A=n.color)!=null?A:n.type,variant:n.variant}}),{themeClasses:c}=be(n),{colorClasses:G,colorStyles:I,variantClasses:P}=_e(u),{densityClasses:N}=Ve(n),{dimensionStyles:m}=we(n),{elevationClasses:a}=ge(n),{locationStyles:r}=Ae(n),{positionClasses:R}=Ce(n),{roundedClasses:Z}=Te(n),{textColorClasses:J,textColorStyles:Q}=he(xe(n,"borderColor")),{t:X}=Me(),B=$(()=>({"aria-label":X(n.closeLabel),onClick(A){s.value=!1}}));return()=>{var A,W;const ee=!!(i.prepend||f.value),le=!!(i.title||n.title),ae=!!(n.text||i.text),te=!!(i.close||n.closable);return s.value&&e(n.tag,{class:["v-alert",n.border&&{"v-alert--border":!!n.border,[`v-alert--border-${n.border===!0?"start":n.border}`]:!0},{"v-alert--prominent":n.prominent},c.value,G.value,N.value,a.value,R.value,Z.value,P.value],style:[I.value,m.value,r.value],role:"alert"},{default:()=>[ke(!1,"v-alert"),n.border&&e("div",{key:"border",class:["v-alert__border",J.value],style:Q.value},null),ee&&e(H,{key:"prepend",defaults:{VIcon:{density:n.density,icon:f.value,size:n.prominent?44:28}}},{default:()=>[e("div",{class:"v-alert__prepend"},[i.prepend?i.prepend():f.value&&e(h,null,null)])]}),e("div",{class:"v-alert__content"},[le&&e(q,{key:"title"},{default:()=>[i.title?i.title():n.title]}),ae&&(i.text?i.text():n.text),(A=i.default)==null?void 0:A.call(i)]),i.append&&e("div",{key:"append",class:"v-alert__append"},[i.append()]),te&&e(H,{key:"close",defaults:{VBtn:{icon:n.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var j;return[e("div",{class:"v-alert__close"},[(j=(W=i.close)==null?void 0:W.call(i,{props:B.value}))!=null?j:e(V,B.value,null)])]}})]})}}}),$e={ref:"refForm",class:"d-flex flex-column justify-center gap-5"},ze={class:"d-flex flex-wrap gap-2"},Ee=t("span",{class:"d-none d-sm-block"},"Upload new photo",-1),Fe=t("span",{class:"d-none d-sm-block"},"Reset",-1),Oe=t("p",{class:"text-body-1 mb-0"}," Allowed JPG, GIF or PNG. Max size of 800K ",-1),Be=t("p",{class:"mb-0"}," Once you delete your account, there is no going back. Please be certain. ",-1),We={__name:"AccountSettingsAccount",setup(n){const y={avatarImg:Se,firstName:"Abdallah",lastName:"Rabeh",email:"abdallahCodeing@gmail.com",org:"ThemeSelection",phone:"+1 (917) 543-9876",address:"123 Main St, New York, NY 10001",state:"New York",zip:"10001",country:"USA",language:"English",timezone:"(GMT-11:00) International Date Line West",currency:"USD"},i=_(),s=_(structuredClone(y)),f=_(!1),u=[m=>!!m||"Please confirm account deactivation"],c=()=>{s.value=structuredClone(y)},G=m=>{const a=new FileReader,{files:r}=m.target;r&&r.length&&(a.readAsDataURL(r[0]),a.onload=()=>{typeof a.result=="string"&&(s.value.avatarImg=a.result)})},I=()=>{s.value.avatarImg=y.avatarImg},P=["(GMT-11:00) International Date Line West","(GMT-11:00) Midway Island","(GMT-10:00) Hawaii","(GMT-09:00) Alaska","(GMT-08:00) Pacific Time (US & Canada)","(GMT-08:00) Tijuana","(GMT-07:00) Arizona","(GMT-07:00) Chihuahua","(GMT-07:00) La Paz","(GMT-07:00) Mazatlan","(GMT-07:00) Mountain Time (US & Canada)","(GMT-06:00) Central America","(GMT-06:00) Central Time (US & Canada)","(GMT-06:00) Guadalajara","(GMT-06:00) Mexico City","(GMT-06:00) Monterrey","(GMT-06:00) Saskatchewan","(GMT-05:00) Bogota","(GMT-05:00) Eastern Time (US & Canada)","(GMT-05:00) Indiana (East)","(GMT-05:00) Lima","(GMT-05:00) Quito","(GMT-04:00) Atlantic Time (Canada)","(GMT-04:00) Caracas","(GMT-04:00) La Paz","(GMT-04:00) Santiago","(GMT-03:30) Newfoundland","(GMT-03:00) Brasilia","(GMT-03:00) Buenos Aires","(GMT-03:00) Georgetown","(GMT-03:00) Greenland","(GMT-02:00) Mid-Atlantic","(GMT-01:00) Azores","(GMT-01:00) Cape Verde Is.","(GMT+00:00) Casablanca","(GMT+00:00) Dublin","(GMT+00:00) Edinburgh","(GMT+00:00) Lisbon","(GMT+00:00) London"],N=["USD","EUR","GBP","AUD","BRL","CAD","CNY","CZK","DKK","HKD","HUF","INR"];return(m,a)=>(g(),E(T,null,{default:l(()=>[e(d,{cols:"12"},{default:l(()=>[e(C,{title:"Account Details"},{default:l(()=>[e(b,{class:"d-flex"},{default:l(()=>[e(Ge,{rounded:"lg",size:"100",class:"me-6",image:o(s).avatarImg},null,8,["image"]),t("form",$e,[t("div",ze,[e(V,{color:"primary",onClick:a[0]||(a[0]=r=>{var R;return(R=o(i))==null?void 0:R.click()})},{default:l(()=>[e(h,{icon:"mdi-cloud-upload-outline",class:"d-sm-none"}),Ee]),_:1}),t("input",{ref_key:"refInputEl",ref:i,type:"file",name:"file",accept:".jpeg,.png,.jpg,GIF",hidden:"",onInput:G},null,544),e(V,{type:"reset",color:"error",variant:"tonal",onClick:I},{default:l(()=>[Fe,e(h,{icon:"mdi-refresh",class:"d-sm-none"})]),_:1})]),Oe],512)]),_:1}),e(F),e(b,null,{default:l(()=>[e(L,{class:"mt-6"},{default:l(()=>[e(T,null,{default:l(()=>[e(d,{md:"6",cols:"12"},{default:l(()=>[e(v,{modelValue:o(s).firstName,"onUpdate:modelValue":a[1]||(a[1]=r=>o(s).firstName=r),label:"First Name"},null,8,["modelValue"])]),_:1}),e(d,{md:"6",cols:"12"},{default:l(()=>[e(v,{modelValue:o(s).lastName,"onUpdate:modelValue":a[2]||(a[2]=r=>o(s).lastName=r),label:"Last Name"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(v,{modelValue:o(s).email,"onUpdate:modelValue":a[3]||(a[3]=r=>o(s).email=r),label:"E-mail",type:"email"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(v,{modelValue:o(s).org,"onUpdate:modelValue":a[4]||(a[4]=r=>o(s).org=r),label:"Organization"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(v,{modelValue:o(s).phone,"onUpdate:modelValue":a[5]||(a[5]=r=>o(s).phone=r),label:"Phone Number"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(v,{modelValue:o(s).address,"onUpdate:modelValue":a[6]||(a[6]=r=>o(s).address=r),label:"Address"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(v,{modelValue:o(s).state,"onUpdate:modelValue":a[7]||(a[7]=r=>o(s).state=r),label:"State"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(v,{modelValue:o(s).zip,"onUpdate:modelValue":a[8]||(a[8]=r=>o(s).zip=r),label:"Zip Code"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(k,{modelValue:o(s).country,"onUpdate:modelValue":a[9]||(a[9]=r=>o(s).country=r),label:"Country",items:["USA","Canada","UK","India","Australia"]},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(k,{modelValue:o(s).language,"onUpdate:modelValue":a[10]||(a[10]=r=>o(s).language=r),label:"Language",items:["English","Spanish","Arabic","Hindi","Urdu"]},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(k,{modelValue:o(s).timezone,"onUpdate:modelValue":a[11]||(a[11]=r=>o(s).timezone=r),label:"Timezone",items:P,"menu-props":{maxHeight:200}},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(k,{modelValue:o(s).currency,"onUpdate:modelValue":a[12]||(a[12]=r=>o(s).currency=r),label:"Currency",items:N,"menu-props":{maxHeight:200}},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:l(()=>[e(V,null,{default:l(()=>[p("Save changes")]),_:1}),e(V,{color:"secondary",variant:"tonal",type:"reset",onClick:O(c,["prevent"])},{default:l(()=>[p(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(C,{title:"Delete Account"},{default:l(()=>[e(b,null,{default:l(()=>[e(Le,{color:"warning",variant:"tonal",class:"mb-4"},{default:l(()=>[e(q,{class:"mb-1"},{default:l(()=>[p(" Are you sure you want to delete your account? ")]),_:1}),Be]),_:1}),t("div",null,[e(D,{modelValue:o(f),"onUpdate:modelValue":a[13]||(a[13]=r=>x(f)?f.value=r:null),rules:u,label:"I confirm my account deactivation"},null,8,["modelValue"])]),e(V,{disabled:!o(f),color:"error",class:"mt-3"},{default:l(()=>[p(" Deactivate Account ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1}))}},je=t("a",{href:"javascript:void(0)"},"Request Permission",-1),He=t("thead",null,[t("tr",null,[t("th",{scope:"col"}," Type "),t("th",{scope:"col"}," EMAIL "),t("th",{scope:"col"}," BROWSER "),t("th",{scope:"col"}," App ")])],-1),Ke=t("p",{class:"text-base font-weight-medium"}," When should we send you notifications? ",-1),Ye={class:"d-flex flex-wrap gap-4 mt-4"},qe={__name:"AccountSettingsNotification",setup(n){const y=_([{type:"New for you",email:!0,browser:!0,app:!0},{type:"Account activity",email:!0,browser:!0,app:!0},{type:"A new browser used to sign in",email:!0,browser:!0,app:!1},{type:"A new device is linked",email:!0,browser:!1,app:!1}]),i=_("Only when I'm online");return(s,f)=>(g(),E(C,{title:"Recent Devices"},{default:l(()=>[e(b,null,{default:l(()=>[p(" We need permission from your browser to show notifications. "),je]),_:1}),e(Y,{class:"text-no-wrap"},{default:l(()=>[He,t("tbody",null,[(g(!0),M(S,null,U(o(y),u=>(g(),M("tr",{key:u.type},[t("td",null,w(u.type),1),t("td",null,[e(D,{modelValue:u.email,"onUpdate:modelValue":c=>u.email=c},null,8,["modelValue","onUpdate:modelValue"])]),t("td",null,[e(D,{modelValue:u.browser,"onUpdate:modelValue":c=>u.browser=c},null,8,["modelValue","onUpdate:modelValue"])]),t("td",null,[e(D,{modelValue:u.app,"onUpdate:modelValue":c=>u.app=c},null,8,["modelValue","onUpdate:modelValue"])])]))),128))])]),_:1}),e(F),e(b,null,{default:l(()=>[e(L,{onSubmit:O(()=>{},["prevent"])},{default:l(()=>[Ke,e(T,null,{default:l(()=>[e(d,{cols:"12",sm:"6"},{default:l(()=>[e(k,{modelValue:o(i),"onUpdate:modelValue":f[0]||(f[0]=u=>x(i)?i.value=u:null),mandatory:"",items:["Only when I'm online","Anytime"]},null,8,["modelValue"])]),_:1})]),_:1}),t("div",Ye,[e(V,{type:"submit"},{default:l(()=>[p(" Save Changes ")]),_:1}),e(V,{color:"secondary",variant:"tonal",type:"reset"},{default:l(()=>[p(" Reset ")]),_:1})])]),_:1})]),_:1})]),_:1}))}},Ze=t("p",{class:"text-base font-weight-medium mt-2"}," Password Requirements: ",-1),Je={class:"d-flex flex-column gap-y-3"},Qe={class:"font-weight-medium"},Xe=t("p",{class:"font-weight-semibold"}," Two factor authentication is not enabled yet. ",-1),el=t("p",null,[p(" Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. "),t("a",{href:"javascript:void(0)",class:"text-decoration-none"},"Learn more.")],-1),ll={class:"d-flex align-center flex-wrap mb-3"},al={class:"text-h6 mb-0 me-3"},tl={class:"text-base font-weight-semibold"},ol={class:"me-3"},nl=t("thead",null,[t("tr",null,[t("th",{scope:"col"}," BROWSER "),t("th",{scope:"col"}," DEVICE "),t("th",{scope:"col"}," LOCATION "),t("th",{scope:"col"}," RECENT ACTIVITIES ")])],-1),sl={__name:"AccountSettingsSecurity",setup(n){const y=_(!1),i=_(!1),s=_(!1),f=_("12345678"),u=_("87654321"),c=_("87654321"),G=["Minimum 8 characters long - the more, the better","At least one lowercase character","At least one number, symbol, or whitespace character"],I=[{name:"Server Key 1",key:"23eaf7f0-f4f7-495e-8b86-fad3261282ac",createdOn:"28 Apr 2021, 18:20 GTM+4:10",permission:"Full Access"},{name:"Server Key 2",key:"bb98e571-a2e2-4de8-90a9-2e231b5e99",createdOn:"12 Feb 2021, 10:30 GTM+2:30",permission:"Read Only"},{name:"Server Key 3",key:"2e915e59-3105-47f2-8838-6e46bf83b711",createdOn:"28 Dec 2020, 12:21 GTM+4:10",permission:"Full Access"}],P=[{browser:"Chrome on Windows",device:"HP Spectre 360",location:"New York, NY",recentActivity:"28 Apr 2022, 18:20",deviceIcon:{icon:"mdi-microsoft-windows",color:"primary"}},{browser:"Chrome on iPhone",device:"iPhone 12x",location:"Los Angeles, CA",recentActivity:"20 Apr 2022, 10:20",deviceIcon:{icon:"mdi-cellphone",color:"error"}},{browser:"Chrome on Android",device:"Oneplus 9 Pro",location:"San Francisco, CA",recentActivity:"16 Apr 2022, 04:20",deviceIcon:{icon:"mdi-android",color:"success"}},{browser:"Chrome on MacOS",device:"Apple iMac",location:"New York, NY",recentActivity:"28 Apr 2022, 18:20",deviceIcon:{icon:"mdi-apple",color:"secondary"}},{browser:"Chrome on Windows",device:"HP Spectre 360",location:"Los Angeles, CA",recentActivity:"20 Apr 2022, 10:20",deviceIcon:{icon:"mdi-microsoft-windows",color:"primary"}},{browser:"Chrome on Android",device:"Oneplus 9 Pro",location:"San Francisco, CA",recentActivity:"16 Apr 2022, 04:20",deviceIcon:{icon:"mdi-android",color:"success"}}];return(N,m)=>(g(),E(T,null,{default:l(()=>[e(d,{cols:"12"},{default:l(()=>[e(C,{title:"Change Password"},{default:l(()=>[e(L,null,{default:l(()=>[e(b,null,{default:l(()=>[e(T,{class:"mb-3"},{default:l(()=>[e(d,{cols:"12",md:"6"},{default:l(()=>[e(v,{modelValue:o(f),"onUpdate:modelValue":m[0]||(m[0]=a=>x(f)?f.value=a:null),type:o(y)?"text":"password","append-inner-icon":o(y)?"mdi-eye-off-outline":"mdi-eye-outline",label:"Current Password","onClick:appendInner":m[1]||(m[1]=a=>y.value=!o(y))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1}),e(T,null,{default:l(()=>[e(d,{cols:"12",md:"6"},{default:l(()=>[e(v,{modelValue:o(u),"onUpdate:modelValue":m[2]||(m[2]=a=>x(u)?u.value=a:null),type:o(i)?"text":"password","append-inner-icon":o(i)?"mdi-eye-off-outline":"mdi-eye-outline",label:"New Password","onClick:appendInner":m[3]||(m[3]=a=>i.value=!o(i))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(v,{modelValue:o(c),"onUpdate:modelValue":m[4]||(m[4]=a=>x(c)?c.value=a:null),type:o(s)?"text":"password","append-inner-icon":o(s)?"mdi-eye-off-outline":"mdi-eye-outline",label:"Confirm New Password","onClick:appendInner":m[5]||(m[5]=a=>s.value=!o(s))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(b,null,{default:l(()=>[Ze,t("ul",Je,[(g(),M(S,null,U(G,a=>t("li",{key:a,class:"d-flex"},[t("div",null,[e(h,{size:"7",icon:"mdi-circle",class:"me-3"})]),t("span",Qe,w(a),1)])),64))])]),_:1}),e(b,{class:"d-flex flex-wrap gap-4"},{default:l(()=>[e(V,null,{default:l(()=>[p("Save changes")]),_:1}),e(V,{type:"reset",color:"secondary",variant:"tonal"},{default:l(()=>[p(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(C,{title:"Two-steps verification"},{default:l(()=>[e(b,null,{default:l(()=>[Xe,el,e(V,null,{default:l(()=>[p(" Enable two-factor authentication ")]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(C,{title:"Create an API key"},{default:l(()=>[e(T,null,{default:l(()=>[e(d,{cols:"12",md:"5","order-md":"0",order:"1"},{default:l(()=>[e(b,null,{default:l(()=>[e(L,{onSubmit:O(()=>{},["prevent"])},{default:l(()=>[e(T,null,{default:l(()=>[e(d,{cols:"12"},{default:l(()=>[e(k,{label:"Choose the API key type you want to create",items:["Full Control","Modify","Read & Execute","List Folder Contents","Read Only","Read & Write"]})]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(v,{label:"Name the API key"})]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(V,{type:"submit",block:""},{default:l(()=>[p(" Create Key ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(C,{title:"API Key List & Access"},{default:l(()=>[e(b,null,{default:l(()=>[p(" An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing. ")]),_:1}),e(b,{class:"d-flex flex-column gap-y-4"},{default:l(()=>[(g(),M(S,null,U(I,a=>t("div",{key:a.key,class:"bg-var-theme-background pa-4"},[t("div",ll,[t("h6",al,w(a.name),1),e(Ie,{label:"",color:"primary",size:"small"},{default:l(()=>[p(w(a.permission),1)]),_:2},1024)]),t("p",tl,[t("span",ol,w(a.key),1),e(h,{size:18,icon:"mdi-content-copy",class:"cursor-pointer"})]),t("span",null,"Created on "+w(a.createdOn),1)])),64))]),_:1})]),_:1})]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(C,{title:"Recent Devices"},{default:l(()=>[e(Y,{class:"text-no-wrap"},{default:l(()=>[nl,t("tbody",null,[(g(),M(S,null,U(P,a=>t("tr",{key:a.recentActivity},[t("td",null,[e(h,{start:"",icon:a.deviceIcon.icon,color:a.deviceIcon.color},null,8,["icon","color"]),p(" "+w(a.browser),1)]),t("td",null,w(a.device),1),t("td",null,w(a.location),1),t("td",null,w(a.recentActivity),1)])),64))])]),_:1})]),_:1})]),_:1})]),_:1}))}},il={__name:"account-settings",setup(n){const y=Pe(),i=_(y.params.tab),s=[{title:"Account",icon:"mdi-account-outline",tab:"account"},{title:"Security",icon:"mdi-lock-open-outline",tab:"security"},{title:"Notifications",icon:"mdi-bell-outline",tab:"notification"}];return(f,u)=>(g(),M("div",null,[e(Ne,{modelValue:o(i),"onUpdate:modelValue":u[0]||(u[0]=c=>x(i)?i.value=c:null),"show-arrows":""},{default:l(()=>[(g(),M(S,null,U(s,c=>e(Ue,{key:c.icon,value:c.tab},{default:l(()=>[e(h,{size:"20",start:"",icon:c.icon},null,8,["icon"]),p(" "+w(c.title),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(F),e(Re,{modelValue:o(i),"onUpdate:modelValue":u[1]||(u[1]=c=>x(i)?i.value=c:null),class:"mt-5 disable-tab-transition",touch:!1},{default:l(()=>[e(z,{value:"account"},{default:l(()=>[e(We)]),_:1}),e(z,{value:"security"},{default:l(()=>[e(sl)]),_:1}),e(z,{value:"notification"},{default:l(()=>[e(qe)]),_:1})]),_:1},8,["modelValue"])]))}};typeof K=="function"&&K(il);export{il as default};