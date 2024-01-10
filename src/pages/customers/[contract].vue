<script>
import http from '../../http'
export default {
  data() {
    return {
      formData: {
        ClientId: this.$route.params.contract,
        ProductId: null,
        CreatedDate: new Date().toISOString().substr(0, 10),
        InitialPrice: 3000000,
        NumberOfMonths: 12,
        InstallmentPercentage: 30,
        FinalPrice: 100,
        Notes: 'ملاحظات',
        InstallementImgsFiles: [],
      },
      cardTypeResponse: [],
      statusResponse: [],
      items: [],
      currentPage: 1,
      pageSize: 1000000000,
    }
  },
  computed: {
    createdDate() {
      const CreatedDate = this.formData.CreatedDate
      return `${CreatedDate.getFullYear()}-${String(CreatedDate.getMonth() + 1).padStart(2, '0')}-${String(
        CreatedDate.getDate(),
      ).padStart(2, '0')}  ${String(CreatedDate.getHours()).padStart(2, '0')}:${String(
        CreatedDate.getMinutes(),
      ).padStart(2, '0')}:${String(CreatedDate.getSeconds()).padStart(2, '0')}`
    },
  },
  mounted() {
    this.getData()
  },
  watch: {
    'formData.ProductId'(v) {
      console.log(v)
    },
  },
  methods: {
    async addClient() {
      await http
        .post('Installements/AddInstallement', {
          ...this.formData,
        })
        .then(() => {
          this.$router.push('/customers')
        })
    },
    async addClient() {
      const formData = new FormData()
      formData.append('ProductId', this.formData.ProductId)
      formData.append('ClientId', this.$route.params.contract)
      formData.append('CreatedDate', this.formData.CreatedDate)
      formData.append('InitialPrice', this.formData.InitialPrice)
      formData.append('NumberOfMonths', this.formData.NumberOfMonths)
      formData.append('InstallmentPercentage', this.formData.InstallmentPercentage)
      formData.append('FinalPrice', this.formData.FinalPrice)
      formData.append('Notes', this.formData.Notes)
      for (let i = 0; i < this.formData.InstallementImgsFiles.length; i++) {
        formData.append(
          'InstallementImgsFiles',
          this.formData.InstallementImgsFiles[i],
          this.formData.InstallementImgsFiles[i].name,
        )
      }

      try {
      
        await http.post('Installements/AddInstallement', formData)

      
        this.$router.push('/customers')
      } 
      catch (error) {
        console.error('Error adding client:', error)
        
      }
    },

    async getData() {
      try {
        const res = await http.post('Product/GetProducts', {
          pageNumber: this.currentPage,
          pageSize: this.pageSize,
          name: '',
        })
        this.items = res.data.list.map(item => ({
          title: item.name,
          value: item.id,
        }))
        // this.totalPages = Math.ceil(res.data.total / this.pageSize);
      } catch (error) {
        console.error('Error fetching data:', error)
      }
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
        <VCard>
          <VCardText>
            <VForm @submit.prevent="addClient">
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
                        {{ $t('Installmentcontract') }}
                      </h5>
                    </div>
                  </div>
                </vCol>
                <VCol
                  cols="12"
                  md="6"
                >
                  <v-autocomplete
                    :label="$t('SelectProducts')"
                    :placeholder="$t('SelectProducts')"
                    v-model="formData.ProductId"
                    :items="items"
                  ></v-autocomplete>
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    type="date"
                    v-model="formData.CreatedDate"
                    :label="$t('CreatedDate')"
                    :placeholder="$t('CreatedDate')"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="formData.InitialPrice"
                    :label="$t('InitialPrice')"
                    :placeholder="$t('InitialPrice')"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="formData.NumberOfMonths"
                    :label="$t('NumberOfMonths')"
                    :placeholder="$t('NumberOfMonths')"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="formData.InstallmentPercentage"
                    :label="$t('InstallmentPercentage')"
                    :placeholder="$t('InstallmentPercentage')"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="formData.FinalPrice"
                    :label="$t('FinalPrice')"
                    :placeholder="$t('FinalPrice')"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="12"
                >
                  <VTextarea
                    v-model="formData.Notes"
                    :label="$t('Notes')"
                    :placeholder="$t('Notes')"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="12"
                >
                  <v-file-input
                    v-model="formData.InstallementImgsFiles"
                    label="Upload Files"
                    multiple
                    @change="handleFileUpload"
                  ></v-file-input>
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
  </div>
</template>
