<script>
import http from '../http'
import axios from 'axios'
export default {
  data() {
    return {
      formData: {
        name: '',
        address: '',
        phone: '',
        currencyId: '',
        countries: [],
      },
      columns: [
        {
          label: this.$t('tableColumnNo'),
          field: 'lineNumber',
          sortable: false,
        },
        {
          label: this.$t('name'),
          field: 'userId',
        },
        {
          label: this.$t('address'),
          field: 'id',
        },
        {
          label: this.$t('phone'),
          field: 'title',
        },
        {
          label: this.$t('currencyId'),

          field: 'completed',
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
    this.getData()
  },
  methods: {
    async getData() {
      await axios.get(`https://jsonplaceholder.typicode.com/todos`).then(res => {
        this.rows = res.data
      })
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
    add(){
      this.$router.push('/add-customers')
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
