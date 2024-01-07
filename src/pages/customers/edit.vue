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
    }
  },
  mounted() {
    this.getCard()
    this.getID()
  },
  methods: {
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
    
    async addClient() {
      
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
