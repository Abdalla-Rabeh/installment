<script>
import http from '../http'
export default {
  data() {
    return {
      formData: {
        name: '',
        address: '',
        phone: '',
       
        
      },
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
          label: this.$t('price'),
          field: 'price',
        },
        {
          label: this.$t('phone'),
          field: 'priceBeforIncrease',
        },
        {
          label: this.$t('currencyId'),

          field: 'count',
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
      AddForm:true,
      currentPage: 1,
      pageSize: 10,
      totalPages: 0,
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
    this.getData()
  },
  methods: {
    async getData() {
      try {
        const res = await http.post('Product/GetProducts', {
          pageNumber: this.currentPage,
          pageSize: this.pageSize,
          name:""
        });
        this.rows = res.data.list;
        console.log(res.data.list)
       
        console.log(this.rows);
        this.totalPages = Math.ceil(res.data.total / this.pageSize);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    editRow(data) {
      this.EditForm = true
    },
    edit() {
      this.EditForm = false
    },
    async deleteRow(data, index) {
      const $t = this.$t // Capture the reference to this.$t

      this.$swal
        .fire({
          title: $t('Areyousoreu'),
          text: $t('youwont'),
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText: $t('no'),
          confirmButtonText: $t('yesDel'),
        })
        .then(result => {
          if (result.isConfirmed) {
            // User confirmed, proceed with the delete request
            axios
              .delete(`https://jsonplaceholder.typicode.com/todos/${data}`)
              .then(() => {
                this.$swal.fire({
                  title: $t('deleted'),
                  text: $t('de'),
                  icon: 'success',
                })
                this.rows.splice(index, 1)
              })
              .catch(error => {
                // Handle error if the delete request fails
                console.error('Error deleting:', error)
              })
          }
        })
    },
    changePage(page) {
      this.currentPage = page;
      this.getData(); // Call the method to fetch data when the page changes
    },
    async add(){
      try {
        const res = await http.post('Product/AddProduct', this.formData).then((res)=>{
          console.log(res.data);

        })
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
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
                  class="d-flex gap-4"
                >
                  <VBtn
                    type="submit"
                    class="d-block m-auto btn-edit"
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
    <VRow v-if="AddForm">
      <VCol
        cols="12"
        md="12"
      >
        <!-- 👉 Horizontal Form -->
        <VCard :title="$t('products')">
          <VCardText>
            <VForm @submit.prevent="add">
              <VRow>
                <!-- 👉 First Name -->
                <VCol
                  cols="12"
                  md="4"
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
                  md="4"
                >
                  <VTextField
                    v-model="formData.address"
                    :label="$t('cost')"
                    :placeholder="$t('cost')"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="4"
                >
                  <VTextField
                    v-model="formData.address"
                    :label="$t('price')"
                    :placeholder="$t('price')"
                  />
                </VCol>
                <!-- 👉 Email -->
                <VCol
                  cols="12"
                  md="4"
                >
                  <VTextField
                    v-model="formData.phone"
                    :label="$t('quantity')"
                    :placeholder="$t('quantity')"
                  />
                </VCol>

                

                <VCol
                  cols="12"
                  class="d-flex gap-4"
                >
                  <VBtn
                    type="submit"
                    class="d-block m-auto btn-edit"
                  >
                    {{ $t('Add') }}
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
              {{ $t('Lproducts') }}
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
                    class="btn bg-warning on-secondary me-2"
                    @click="editRow(props.row)"
                  >
                    {{ $t('Edit') }}
                  </button>
                  <button
                    class="btn bg-danger me-2"
                    @click="deleteRow(props.row.id, props.index)"
                  >
                    {{ $t('Delete') }}
                  </button>
                </span>
                <span v-else>
                  {{ props.formattedRow[props.column.field] }}
                </span>
              </template>
            </VueGoodTable>
            <div class="pagination-container">
              <pagination
                :current="currentPage"
                :total="totalPages"
                @page-clicked="changePage"
              ></pagination>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
