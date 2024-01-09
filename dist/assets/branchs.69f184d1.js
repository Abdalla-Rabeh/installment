import{aO as V,aP as m,r as D,o as d,a2 as u,b as p,e as s,f as t,Q as n,R as g,S as w,$ as _,X as f,Y as h,Z as C,aQ as b,j as v,_ as $,a5 as i,U as r}from"./index.70035ea2.js";import{V as k}from"./VForm.cb86e4c2.js";const B={data(){return{formData:{name:"",address:"",phone:"",currencyId:null},items:[],id:null,columns:[{label:this.$t("tableColumnNo"),field:"lineNumber",sortable:!1},{label:this.$t("name"),field:"name"},{label:this.$t("address"),field:"address"},{label:this.$t("phone"),field:"phone"},{label:this.$t("currencyId"),field:"currency.code"},{label:this.$t("actions"),field:"actions",sortable:!1,tdClass:"custom-th-class"}],rows:[],EditForm:!1}},computed:{computedTableData(){return this.rows.map((e,a)=>({...e,lineNumber:a+1}))}},mounted(){this.GetCurrencies(),this.getData()},methods:{async getData(){await m.get("Branches/GetBranches").then(e=>{this.rows=e.data.data})},async GetCurrencies(){try{const e=await m.get("Settings/GetGeneralSettings");this.items=e.data.data.currencyResponse.map(a=>({title:a.code,value:a.id})),console.log(this.items,"d",e.data.data.currencyResponse)}catch(e){console.error("Error fetching currencies:",e)}},editRow(e){this.id=e.id,this.EditForm=!0,this.formData.name=e.name,this.formData.address=e.address,this.formData.phone=e.phone,this.formData.currencyId=e.currency.id},async edit(){await m.put("Branches/UpdateBranch",{id:this.id,name:this.formData.name,address:this.formData.address,phone:this.formData.phone,currencyId:this.formData.currencyId}).then(()=>{this.EditForm=!1,this.getData()})}}},E={class:"mt-3"},I={class:"card custom-card"},R={class:"card-header p-3 tx-medium my-auto tx-white custom-card-header border-bottom-0 bg-primary"},G={class:"main-content-label on-secondary my-auto tx-medium"},L={class:"card-body"},N={key:0},S=["onClick"],T={key:1};function F(e,a,U,P,o,c){const y=D("VueGoodTable");return d(),u("div",null,[o.EditForm?(d(),p(f,{key:0},{default:s(()=>[t(n,{cols:"12",md:"12"},{default:s(()=>[t(g,{title:e.$t("branchs")},{default:s(()=>[t(w,null,{default:s(()=>[t(k,{onSubmit:_(c.edit,["prevent"])},{default:s(()=>[t(f,null,{default:s(()=>[t(n,{cols:"12",md:"3"},{default:s(()=>[t(h,{modelValue:o.formData.name,"onUpdate:modelValue":a[0]||(a[0]=l=>o.formData.name=l),label:e.$t("name"),placeholder:e.$t("name")},null,8,["modelValue","label","placeholder"])]),_:1}),t(n,{cols:"12",md:"3"},{default:s(()=>[t(h,{modelValue:o.formData.address,"onUpdate:modelValue":a[1]||(a[1]=l=>o.formData.address=l),label:e.$t("address"),placeholder:e.$t("address")},null,8,["modelValue","label","placeholder"])]),_:1}),t(n,{cols:"12",md:"3"},{default:s(()=>[t(h,{modelValue:o.formData.phone,"onUpdate:modelValue":a[2]||(a[2]=l=>o.formData.phone=l),label:e.$t("phone"),placeholder:e.$t("phone")},null,8,["modelValue","label","placeholder"])]),_:1}),t(n,{cols:"12",md:"3"},{default:s(()=>[o.items.length>0?(d(),p(C,{key:0,modelValue:o.formData.currencyId,"onUpdate:modelValue":a[3]||(a[3]=l=>o.formData.currencyId=l),label:e.$t("currencyId"),items:o.items},null,8,["modelValue","label","items"])):b("",!0)]),_:1}),t(n,{cols:"12",class:"d-flex gap-4"},{default:s(()=>[t(v,{type:"submit",class:"d-block m-auto btn-edit bg-success"},{default:s(()=>[$(i(e.$t("Edit")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["title"])]),_:1})]),_:1})):b("",!0),r("div",null,[r("div",E,[r("div",I,[r("div",R,[r("h5",G,i(e.$t("Lbranches")),1)]),r("div",L,[t(y,{columns:o.columns,rows:c.computedTableData,"select-options":{enabled:!1},"search-options":{enabled:!0,placeholder:e.$t("serach")},"pagination-options":{enabled:!0,mode:"records",position:"top",dropdownAllowAll:!0,setCurrentPage:2,nextLabel:e.$t("next"),prevLabel:e.$t("prev"),rowsPerPageLabel:e.$t("Rowsperpage"),ofLabel:"of",pageLabel:"page",allLabel:"All"}},{"table-row":s(l=>[l.column.field=="actions"?(d(),u("span",N,[r("button",{type:"button",class:"btn bg-success on-secondary me-2 w-100",onClick:A=>c.editRow(l.row)},i(e.$t("Edit")),9,S)])):(d(),u("span",T,i(l.formattedRow[l.column.field]),1))]),_:1},8,["columns","rows","search-options","pagination-options"])])])])])])}const M=V(B,[["render",F]]);export{M as default};