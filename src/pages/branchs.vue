<script>
import http from '../http'
export default {
  
  data() {
    return {
      formData: {
        name: '',
        address: '',
        phone: '',
        currencyId: null,
       
      },
      items: [],
      id : null,
      columns: [
        {
          label: this.$t('tableColumnNo'),
          field: 'lineNumber',
          sortable: false,
        },
        {
          label: this.$t('name'),
          field: 'name',
        },
        {
          label: this.$t('address'),
          field: 'address',
        },
        {
          label: this.$t('phone'),
          field: 'phone',
        },
        {
          label: this.$t('currencyId'),

          field: 'currency.code',
        },
        {
          label: this.$t('actions'),
          field: 'actions',
          sortable: false,
          tdClass: 'custom-th-class',
        },
      ],
      rows: [],
      EditForm: false,
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
  mounted() {
    this.GetCurrencies()
    this.getData()
  },
  methods: {
    async getData() {
      await http.get(`Branches/GetBranches`).then(res => {
        this.rows = res.data.data
        
      })
    },
    async GetCurrencies() {
      try {
        const response = await http.get('Settings/GetGeneralSettings');
        this.items = response.data.data.currencyResponse.map(item => ({
          title: item.code,
          value: item.id,
        }));
        console.log(this.items, 'd', response.data.data.currencyResponse);
      } catch (error) {
        console.error('Error fetching currencies:', error);
      }
    },
    
   
    editRow(data) {
      this.id = data.id
      this.EditForm = true
      this.formData.name =  data.name
      this.formData.address =  data.address
      this.formData.phone =  data.phone
      this.formData.currencyId =  data.currency.id
     
    },
     async edit() {
      await http.put(`Branches/UpdateBranch` , {
        id : this.id,
        name: this.formData.name,
        address: this.formData.address,
        phone: this.formData.phone,
        currencyId: this.formData.currencyId,



      }).then(() => {
        this.EditForm = false
        this.getData()
      })
    },
    // async deleteRow(data, index) {
    //   const $t = this.$t // Capture the reference to this.$t

    //   this.$swal
    //     .fire({
    //       title: $t('Areyousoreu'),
    //       text: $t('youwont'),
    //       icon: 'warning',
    //       showCancelButton: true,
    //       confirmButtonColor: '#3085d6',
    //       cancelButtonColor: '#d33',
    //       cancelButtonText: $t('no'),
    //       confirmButtonText: $t('yesDel'),
    //     })
    //     .then(result => {
    //       if (result.isConfirmed) {
    //         // User confirmed, proceed with the delete request
    //         http
    //           .delete(`Branches/DeleteBranch?branchId=${data}`)
    //           .then(() => {
    //             this.$swal.fire({
    //               title: $t('deleted'),
    //               text: $t('de'),
    //               icon: 'success',
    //             })
    //             this.rows.splice(index, 1)
    //           })
    //           .catch(error => {
    //             // Handle error if the delete request fails
    //             console.error('Error deleting:', error)
    //           })
    //       }
    //     })
    // },
  },
}
</script>

<template>
  <div>
    <VRow v-if="EditForm">
      <VCol
        cols="12"
        md="12"
      >
        <!-- 👉 Horizontal Form -->
        <VCard :title="$t('branchs')">
          <VCardText>
            <VForm @submit.prevent="edit">
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

                   <VSelect
                   v-if="items.length > 0"
                    v-model="formData.currencyId"
                    :label="$t('currencyId')"
                    :items="items"
                    
                  /> 
                  
                </VCol>

                <VCol
                  cols="12"
                  class="d-flex gap-4"
                >
                  <VBtn
                    type="submit"
                    class="d-block m-auto btn-edit bg-success"
                  >
                    {{ $t('Edit') }}
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
          <div class="card-header p-3 tx-medium my-auto tx-white custom-card-header border-bottom-0 bg-primary">
            <h5 class="main-content-label on-secondary my-auto tx-medium">
              {{ $t('Lbranches') }}
            </h5>
          </div>
          <div class="card-body">
            <VueGoodTable
              :columns="columns"
              :rows="computedTableData"
              :select-options="{ enabled: false }"
              :search-options="{
                enabled: true,
                placeholder: $t('serach'),
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
                    class="btn me-2 w-100"
                    @click="editRow(props.row)"
                  >
                  <img src="../assets/pencil-alt.svg" alt="">
                  </button>
                  <!-- <button
                    class="btn bg-danger me-2"
                    @click="deleteRow(props.row.id, props.index)"
                  >
                    {{ $t('Delete') }}
                  </button> -->
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
