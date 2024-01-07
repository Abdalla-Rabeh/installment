<script>
import http from '../../http'
export default {
  data() {
    return {
      formData: {
        cardTypeId: 1,
        name: '',
        phone: '',
        sponsorName: '',
        sponsorPhone: '',
        statusId: null,
        address: '',
        job: '',
        registerationNumber: '',
      },
      cardTypeResponse: [],
      statusResponse: [],
      id: null,
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
      rows: [],
      currentPage: 1,
      pageSize: 10,
      total: null,
      paginationOptions: {
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
      selectedItem: [
        { value: null, title: this.$t('Allcustomers') },
        { value: false, title: this.$t('Payingcustomers') },
        { value: true, title: this.$t('Nonpayingcustomers') },
      ],
      fliterItem: [
        { value: 'name', title: this.$t('name') },
        { value: 'phone', title: this.$t('phone') },
        { value: 'registerationNumberId', title: this.$t('registerationNumber') },
      ],
      hasActiveInstallement: true,
      filter: 'name',
      name: null,
      phone: null,
      registerationNumberId: null,
      searchValue: '',
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
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
  watch: {
    hasActiveInstallement() {
      this.getData()
    },
    currentPage() {
      this.getData()
    },
    filter() {
      this.adjustFilter()
    },
  },
  mounted() {
    this.getData()
    this.getCard()
  },
  methods: {
    async getData() {
      try {
        const res = await http.post('Clients/GetClients', {
          pageNumber: this.currentPage,
          pageSize: this.pageSize,
          name: this.name,
          phone: this.phone,
          registerationNumberId: this.registerationNumberId,
          hasActiveInstallement: this.hasActiveInstallement,
        })
        this.total = res.data.count
        this.rows = res.data.list
        // this.totalPages = Math.ceil(res.data.total / this.pageSize);
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
    async handlePageChange(page) {
      this.currentPage = page
      await this.getData()
    },
    editRow(data) {
      console.log(data)
      this.dialog = true
      this.formData.address = data.address
      this.formData.balance = data.balance
      this.formData.cardTypeId = data.cardType.id
      this.formData.statusId = data.clientStatus.id
      this.formData.job = data.job
      this.formData.name = data.name
      this.formData.numberOfActiveInstallements = data.numberOfActiveInstallements
      this.formData.phone = data.phone
      this.formData.registerationNumber = data.registerationNumber
      this.formData.sponsorName = data.sponsorName
      this.formData.sponsorPhone = data.sponsorPhone
      this.formData.totalPaidPrice = data.totalPaidPrice
      this.formData.totalUnpaidPrice = data.totalUnpaidPrice
    },
    async edit() {
      await http.put('Clients/UpdateClient', this.formData).then(() => {
        this.getData()
        this.dialog = false
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
              .delete(`Clients/DeleteClient?clientId=${data}`)
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
      this.currentPage = page
      this.getData() // Call the method to fetch data when the page changes
    },
    add() {
      this.$router.push('customers/add')
    },
    details(id) {
      this.$router.push({ name: 'showCustomer', params: { id: id } })
    },
    Serach() {
      this.resetPagination()
      this.adjustFilter()
      this.getData()
    },
    resetPagination() {
      this.currentPage = 1
    },
    adjustFilter() {
      if (this.searchValue.length != 0) {
        if (this.filter == 'name') {
          this.name = this.searchValue
          this.phone = null
          this.registerationNumberId = null
        } else if (this.filter == 'phone') {
          this.name = null
          this.phone = this.searchValue
          this.registerationNumberId = null
        } else if (this.filter == 'registerationNumberId') {
          this.name = null
          this.phone = null
          this.registerationNumberId = this.searchValue
        }
      } else {
        this.name = null
        this.phone = null
        this.registerationNumberId = null
      }
    },
    async getCard() {
      await http.get('Settings/GetGeneralSettings').then(res => {
        this.cardTypeResponse = res.data.data.cardTypeResponse.map(item => ({
          title: item.type,
          value: item.id,
        }))
        this.statusResponse = res.data.data.statusResponse.map(item => ({
          title: item.text,
          value: item.id,
        }))
      })
    },
  },
}
</script>

<template>
  <div>
    <div>
      <div class="mt-3">
        <div class="card custom-card">
          <div
            class="card-header p-3 tx-medium my-auto tx-white custom-card-header border-bottom-0 bg-primary d-flex justify-content-between"
          >
            <h5 class="main-content-label on-secondary my-auto tx-medium">
              {{ $t('Lcustomers') }}
            </h5>
            <div class="card-options">
              <button
                class="btn bg-success"
                @click="add"
              >
                {{ $t('Addcustomer') }}
              </button>
            </div>
          </div>
          <div class="card-body">
            <VRow class="mb-3">
              <VCol
                cols="12"
                md="3"
              >
                <v-select
                  v-model="hasActiveInstallement"
                  :label="$t('Select')"
                  :items="selectedItem"
                ></v-select>
              </VCol>
              <VCol
                cols="12"
                md="5"
              >
                <VTextField
                  v-model="searchValue"
                  :label="$t('serach')"
                  :placeholder="$t('serach')"
                />
              </VCol>
              <VCol
                cols="12"
                md="1"
              >
                <button
                  class="btn bg-info"
                  @click="Serach"
                >
                  {{ $t('serach') }}
                </button>
              </VCol>
              <VCol
                cols="12"
                md="3"
              >
                <v-select
                  v-model="filter"
                  :label="$t('Select')"
                  :items="fliterItem"
                ></v-select>
              </VCol>
            </VRow>

            <VueGoodTable
              :columns="columns"
              :rows="computedTableData"
              :select-options="{ enabled: false }"
              :search-options="{
                enabled: false,
                placeholder: $t('serach'),
              }"
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
            <v-pagination
              v-if="pageSize > 1"
              v-model="currentPage"
              class="my-4"
              :length="Math.ceil(total / pageSize)"
              @input="getData"
            ></v-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>

  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          
          color="primary"
        >
        <v-spacer></v-spacer>
          <v-btn
            icon
            class="bg-primary on-secondary"
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          
          
        </v-toolbar>
        <VRow>
      <VCol
        cols="12"
        md="12"
      >
        <!-- 👉 Horizontal Form -->
        <VCard>
          <VCardText>
            <VForm @submit.prevent="edit">
              <VRow>
                <vCol
                  cols="12"
                  md="12"
                >
                  <div class="card custom-card">
                    <div
                      class="card-header p-3 tx-medium my-auto tx-white custom-card-header border-bottom-0 bg-primary d-flex justify-content-between"
                    >
                      <h5 class="main-content-label on-secondary my-auto tx-medium">
                        {{ $t('Customerdata') }}
                      </h5>
                    </div>
                  </div>
                </vCol>
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="formData.name"
                    :label="$t('name')"
                    :placeholder="$t('name')"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="formData.phone"
                    :label="$t('phone')"
                    :placeholder="$t('phone')"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="formData.job"
                    :label="$t('job')"
                    :placeholder="$t('job')"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="formData.registerationNumber"
                    :label="$t('registerationNumber')"
                    :placeholder="$t('registerationNumber')"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="formData.address"
                    :label="$t('address')"
                    :placeholder="$t('address')"
                  />
                </VCol>
                
                <VCol
                  cols="12"
                  md="6"
                >
                  <VSelect
                    v-model="formData.cardTypeId"
                    :label="$t('cardTypeId')"
                    :items="cardTypeResponse"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="6"
                >
                  <VSelect
                    v-model="formData.statusId"
                    :label="$t('statusId')"
                    :items="statusResponse"
                  />
                </VCol>
                <vCol
                  cols="12"
                  md="12"
                >
                  <div class="card custom-card">
                    <div
                      class="card-header p-3 tx-medium my-auto tx-white custom-card-header border-bottom-0 bg-primary d-flex justify-content-between"
                    >
                      <h5 class="main-content-label on-secondary my-auto tx-medium">
                        {{ $t('Warrantydata') }}
                      </h5>
                    </div>
                  </div>
                </vCol>
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="formData.sponsorName"
                    :label="$t('sponsorName')"
                    :placeholder="$t('sponsorName')"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="formData.sponsorPhone"
                    :label="$t('sponsorPhone')"
                    :placeholder="$t('sponsorPhone')"
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
                    {{ $t('Edit') }}
                  </VBtn>
                </VCol>
              </VRow>
            </VForm>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<style>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
