<script>
import http from '../../../http.js'
import { GetClient } from '../../../store/index.js'
export default {
  data() {
    return {
      infoMsg: false,
      store: GetClient(),
      totalInitialPrice: '',
      totalPaidPrice: '',
      totalUnpaidPrice: '',
      ClientData: {},
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      await http.get(`Installements/GetClientInstallement?clientId=${this.$route.params.details}`).then(res => {
        this.rows = res.data.data.installments
        this.store.PaymentData = res.data.data.installments
        this.totalInitialPrice = res.data.data.totalInitialPrice
        this.totalPaidPrice = res.data.data.totalPaidPrice
        this.totalUnpaidPrice = res.data.data.totalUnpaidPrice
        http.get(`Clients/GetClientById?id=${this.$route.params.details}`).then(res => {
          this.ClientData = res.data.data
        })
      })
    },
    details(id) {
      console.log(id)
      this.infoMsg = true
      this.$router.push('/soon').then(() => {
        window.open('/soon', '_blank')
      })

      // this.$router.push({ name: 'customers-payment-payment', params: { payment: id } }) //  , params: { payment: id }
    },
    addContract() {
      console.log(this.$router)
      this.$router.push({ name: 'customers-contract-contract', params: { contract: this.$route.params.details } })
    },
  },
}
</script>

<template>
  <VCard>
    <div
      class="container pls mt-2"
      v-if="store.ClientData"
    >
      <div class="row">
        <div class="col-lg-4">
          <div class="p-2 font-weight-bold">{{ $t('name') }} : {{ ClientData.name }}</div>
          <div class="p-2 font-weight-bold">{{ $t('address') }} : {{ ClientData.address }}</div>
          <div class="p-2 font-weight-bold">
            {{ $t('cardTypeId') }} : {{ ClientData.cardType && ClientData.cardType.type }}
          </div>
          <div class="p-2 font-weight-bold">
            {{ $t('statusId') }} : {{ ClientData.clientStatus && ClientData.clientStatus.text }}
          </div>
          <div class="p-2 font-weight-bold">{{ $t('job') }} : {{ ClientData.job }}</div>
        </div>
        <div class="col-lg-4">
          <div class="p-2 font-weight-bold">{{ $t('registerationNumber') }} : {{ ClientData.registerationNumber }}</div>
          <div class="p-2 font-weight-bold">
            {{ $t('numberOfActiveInstallements') }} : {{ ClientData.numberOfActiveInstallements }}
          </div>
          <div class="p-2 font-weight-bold">{{ $t('totalPaidPrice') }} : {{ ClientData.totalPaidPrice }}</div>
          <div class="p-2 font-weight-bold">{{ $t('totalUnpaidPrice') }} : {{ ClientData.totalUnpaidPrice }}</div>
        </div>
        <div class="col-lg-4">
          <div class="p-2 font-weight-bold">{{ $t('sponsorName') }} : {{ ClientData.sponsorName }}</div>
          <div class="p-2 font-weight-bold">{{ $t('sponsorPhone') }} : {{ ClientData.sponsorPhone }}</div>
        </div>
      </div>
    </div>
    <div
      class="container pls mt-2"
      v-if="ClientData"
    >
      <div class="row">
        <div class="col-lg-4">
          <div class="p-2 font-weight-bold">{{ $t('totalInitialPrice') }} : {{ totalInitialPrice }}</div>
          <div class="p-2 font-weight-bold">{{ $t('totalPaidPrice') }} : {{ totalPaidPrice }}</div>
          <div class="p-2 font-weight-bold">{{ $t('totalUnpaidPrice') }} : {{ totalUnpaidPrice }}</div>
        </div>
      </div>
    </div>
    <VAlert
      v-if="infoMsg"
      color="warning"
      variant="tonal"
      class="mb-4 alertMsg"
    >
      <VAlertTitle class="mb-1 alertMsg"> ناسف </VAlertTitle>
      <p class="mb-0">نحن الان نعمل علي تطويرها يرجي استخدام الابليكيشن في الوقت الحالي</p>
    </VAlert>
    <v-table
      fixed-header
      height="200px"
    >
      <thead>
        <tr>
          <th class="text-center">{{ $t('name') }}</th>
          <th class="text-center">{{ $t('actions') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in rows"
          :key="item.name"
        >
          <td class="text-center">{{ item.productName }}</td>
          <td class="text-center">
            <button
              class="btn bg-primary on-secondary"
              @click="details(item.id)"
            >
              {{ $t('details') }}
            </button>
          </td>
        </tr>
      </tbody>
    </v-table>
    <button
      class="btn bg-primary d-block m-auto mb-4 mt-3"
      @click="addContract()"
    >
      {{ $t('Organizinganother') }}
    </button>
  </VCard>
</template>
