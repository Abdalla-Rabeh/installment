<script>
import http from '../http'
export default {
  data() {
    return {
      id:null,
      formData: {
        name: '',
        price: '',
        priceBeforIncrease: '',
        count:'',
        
      },
      updateData: {
        name: '',
        price: '',
        priceBeforIncrease: '',
        count:'',
        
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
          label: this.$t('numberOfActiveInstallements'),
          field: 'numberOfActiveInstallements',
        },
        {
          label: this.$t('totalPaidPrice'),
          field: 'totalPaidPrice',
        },
        {
          label: this.$t('totalUnpaidPrice'),
          field: 'totalUnpaidPrice',
        },
        {
          label: this.$t('actions'),
          field: 'actions',
          sortable: false,
          
        },
      ],
      EditForm: false,
      AddForm:true,
      rows: [],
      currentPage: 1,
      pageSize: 1000000000,
      paginationOptions:{
      enabled: true,
      mode: 'records',
      position: 'top',
      dropdownAllowAll: true,
      nextLabel: this.$t('next'),
      prevLabel: this.$t('prev'),
      rowsPerPageLabel: this.$t('Rowsperpage'),
      ofLabel: 'of',
      pageLabel: 'page', // for 'pages' mode
      allLabel: 'All',
      },
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
        const res = await http.post('Clients/GetClients', {
          pageNumber: this.currentPage,
          pageSize: this.pageSize,
          name:""
        });
        this.rows = res.data.list;
        // this.totalPages = Math.ceil(res.data.total / this.pageSize);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async handlePageChange(page) {
      
      this.currentPage = page;
      await this.getData();
    },
    editRow(data) {
      this.AddForm = false
      this.EditForm = true
      this.id = data.id
      this.updateData.name = data.name
      this.updateData.price = data.price
      this.updateData.priceBeforIncrease = data.priceBeforIncrease
      this.updateData.count = data.count
    },
    async edit() {
      
      await http.put(`Product/UpdateProduct` , {
        id : this.id,
        name: this.updateData.name,
        price: this.updateData.price,
        priceBeforIncrease: this.updateData.priceBeforIncrease,
        count: this.updateData.count,
        productBranchRequests: [
            {
              branchId: localStorage.getItem('currencyId'),
              isActive: true
            }
          ]


      }).then(() => {
        this.EditForm = false
        this.AddForm = true
        this.getData()
      })
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
            http
              .delete(`Product/DeleteProduct?productId=${data}`)
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
        const res = await http.post('Product/AddProduct', {
          name: this.formData.name,
          price: this.formData.price,
          priceBeforIncrease: this.formData.priceBeforIncrease,
          count:this.formData.count,
          productBranchRequests: [
            {
              branchId: localStorage.getItem('currencyId'),
              isActive: true
            }
          ]

        }).then(()=>{
        
          this.getData()
          this.formData = {}
        })
      
    },
    details(id){
      this.$router.push({name : "showCustomer", params: { id: id }})
    }
  },
}
</script>

<template>
  <div>
    
    <div>
      <div class="mt-3">
        <div class="card custom-card">
          <div class="card-header p-3 tx-medium my-auto tx-white custom-card-header border-bottom-0 bg-primary d-flex justify-content-between">
            <h5 class="main-content-label on-secondary my-auto tx-medium">
              {{ $t('Lcustomers') }}
            </h5>
            <div class="card-options">
                <button class="btn bg-success" @click="add">{{$t('Addcustomer')}}</button>
            </div>
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
              :pagination-options="paginationOptions"
              @on-page-change="handlePageChange"

            >
              <template #table-row="props">
                <span v-if="props.column.field == 'actions'">
                  <button
                    class="btn bg-info me-2"
                    @click="details(props.row.id)"
                  >
                    {{ $t('details') }}
                  </button>
                  <button
                    type="button"
                    class="btn bg-success on-secondary me-2"
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
