<script>
import http from '../http'
export default {
  data(){
    return{
      formData:{
        name :"",
        address :"",
        phone :"",
        currencyId :"",
        countries:[],
      },
      columns: [
        {
          label: this.$t('tableColumnNo'),
          field: "lineNumber",
          sortable: false,
        },
        {
          label: this.$t('name'),
          field: 'name',
        },
        {
          label: this.$t('address'),
          field: 'age',
        },
        {
          label: this.$t('phone'),
          field: 'createdAt',
          
        },
        {
          label: this.$t('currencyId'),

          field: 'score',
          
        },
        {
          label: this.$t('actions'),
          field: "actions",
          sortable: false,
          tdClass: 'custom-th-class',
        },
      ],
      rows:[],
    }
  },
  computed: {
    computedTableData() {
      return this.rows.map((row, index) => ({
        ...row,
        lineNumber: index + 1,
      }))
    },
  },
  mounted(){
    this.getData()
  },
  methods:{
    async getData() {
      await http.get(`Branches/GetBranches`).then(res => {
        this.rows = res.data.data
      })
    },
  },
}
</script>

<template>
  <div>
    <VRow>
      <VCol
        cols="12"
        md="12"
      >
        <!-- 👉 Horizontal Form -->
        <VCard :title="$t('branchs')">
          <VCardText>
            <VForm @submit.prevent="() => {}">
              <VRow>
                <!-- 👉 First Name -->
                <VCol
                  cols="12"
                  md="3"
                >
                  <VTextField
                    v-model="formData.name"
                    :label="$t('name')"
                    :placeholder="$t('name')"
                  />
                </VCol>

                <!-- 👉 Last Name -->
                <VCol
                  cols="12"
                  md="3"
                >
                  <VTextField
                    v-model="formData.address"
                    :label="$t('address')"
                    :placeholder="$t('address')"
                  />
                </VCol>

                <!-- 👉 Email -->
                <VCol
                  cols="12"
                  md="3"
                >
                  <VTextField
                    v-model="formData.phone"
                    :label="$t('phone')"
                    :placeholder="$t('phone')"
                  />
                </VCol>

                <!-- 👉 City -->
                <VCol
                  cols="12"
                  md="3"
                >
                  <!--
                    <VTextField
                    v-model="formData.currencyId"
                    :label="$t('currencyId')"
                    :placeholder="$t('currencyId')"
                    /> 
                  -->
                  <!--
                    <VSelect
                    v-model="formData.currencyId"
                    :label="$t('currencyId')"
                    :options="countries"
                    /> 
                  -->
                </VCol>

               

                <VCol
                  cols="12"
                  class="d-flex gap-4"
                >
                  <VBtn type="submit">
                    {{ $t('Add') }}
                  </VBtn>

                  <VBtn
                    type="reset"
                    color="secondary"
                    variant="tonal"
                  >
                    {{ $t('Reset') }}
                  </VBtn>
                </VCol>
              </VRow>
            </VForm>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
    <div>
      <div class="mt-3">
        <div class="card custom-card">
          <div
            class="card-header p-3 tx-medium my-auto tx-white custom-card-header border-bottom-0 bg-primary"
          >
            <h5 class="main-content-label on-secondary my-auto tx-medium">
              {{ $t("Lbranches") }}
            </h5>
          </div>
          <div class="card-body">
            <VueGoodTable
              :columns="columns"
              :rows="computedTableData"
              :select-options="{ enabled: false }"
              :search-options="{
                enabled: true,
                trigger: 'enter',
                skipDiacritics: true,
                searchFn: mySearchFn,
                placeholder: $t('serach'),
                externalQuery: searchQuery
    
              }"
              :pagination-options="{
                enabled: true,
                mode: 'records',
                position: 'top',
          
                dropdownAllowAll: true,
                setCurrentPage: 2,
                nextLabel: $t('next'),
                prevLabel: $t('prev'),
                rowsPerPageLabel: $t('Rowsperpage'),
                ofLabel: 'of',
                pageLabel: 'page', // for 'pages' mode
                allLabel: 'All',
              }"
            >
              <template #table-row="props">
                <span v-if="props.column.field == 'actions'">
                  <button
                    type="button"
                    class="btn btn-warning on-secondary me-2"
                    @click="editRow(props.row)"
                  >Edit </button>
                  <button
                    class="btn btn-danger me-2"
                    @click="deleteRow(props.row.id, props.index)"
                  >
                    Delete
                    
                  </button>
                </span>
                <span v-else>
                  {{ props.formattedRow[props.column.field] }}
                </span>
              </template>
            </VueGoodTable>
          </div>   
        </div>
      </div>
    </div>
  </div>
</template>



