<script>
import { GetClient } from '../../store/index.js'
import http from '../../http.js'
export default {
  data() {
    return {
      store: GetClient(),
      totalInitialPrice: '',
      totalPaidPrice: '',
      totalUnpaidPrice: '',
    }
  },
  mounted() {
    this.getData()
    await http.get(`Installements/GetClientInstallement?clientId=${this.$route.params.details}`).then(res => {
        this.rows = res.data.data.installments
        this.store.PaymentData = res.data.data.installments
        this.totalInitialPrice = res.data.data.totalInitialPrice
        this.totalPaidPrice = res.data.data.totalPaidPrice
        this.totalUnpaidPrice = res.data.data.totalUnpaidPrice
      })
  },
  methods: {
    async getData() {
      await http.get(`Installements/GetClientInstallement?clientId=${this.$route.params.details}`).then(res => {
        this.rows = res.data.data.installments
        this.store.PaymentData = res.data.data.installments
        this.totalInitialPrice = res.data.data.totalInitialPrice
        this.totalPaidPrice = res.data.data.totalPaidPrice
        this.totalUnpaidPrice = res.data.data.totalUnpaidPrice
      })
      
    },
    details(id){
    this.$router.push({name :"customers-payment" , params: { payment: 200 }}) //  , params: { payment: id }

    },
    addContract(){
      this.$router.push({name :"customers-contract" , params: { contract: this.$route.params.details } })
    }
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
          <div class="p-2 font-weight-bold">{{ $t('name') }} : {{ store.ClientData.name }}</div>
          <div class="p-2 font-weight-bold">{{ $t('address') }} : {{ store.ClientData.address }}</div>
          <div class="p-2 font-weight-bold">
            {{ $t('cardTypeId') }} : {{ store.ClientData.cardType && store.ClientData.cardType.type }}
          </div>
          <div class="p-2 font-weight-bold">
            {{ $t('statusId') }} : {{ store.ClientData.clientStatus && store.ClientData.clientStatus.text }}
          </div>
          <div class="p-2 font-weight-bold">{{ $t('job') }} : {{ store.ClientData.job }}</div>
        </div>
        <div class="col-lg-4">
          <div class="p-2 font-weight-bold">
            {{ $t('registerationNumber') }} : {{ store.ClientData.registerationNumber }}
          </div>
          <div class="p-2 font-weight-bold">
            {{ $t('numberOfActiveInstallements') }} : {{ store.ClientData.numberOfActiveInstallements }}
          </div>
          <div class="p-2 font-weight-bold">{{ $t('totalPaidPrice') }} : {{ store.ClientData.totalPaidPrice }}</div>
          <div class="p-2 font-weight-bold">{{ $t('totalUnpaidPrice') }} : {{ store.ClientData.totalUnpaidPrice }}</div>
        </div>
        <div class="col-lg-4">
          <div class="p-2 font-weight-bold">{{ $t('sponsorName') }} : {{ store.ClientData.sponsorName }}</div>
          <div class="p-2 font-weight-bold">{{ $t('sponsorPhone') }} : {{ store.ClientData.sponsorPhone }}</div>
        </div>
      </div>
    </div>
    <div
      class="container pls mt-2"
      v-if="store.ClientData"
    >
      <div class="row">
        <div class="col-lg-4">
          <div class="p-2 font-weight-bold">{{ $t('totalInitialPrice') }} : {{ totalInitialPrice }}</div>
          <div class="p-2 font-weight-bold">{{ $t('totalPaidPrice') }} : {{ totalPaidPrice }}</div>
          <div class="p-2 font-weight-bold">{{ $t('totalUnpaidPrice') }} : {{ totalUnpaidPrice }}</div>
        </div>
      </div>
    </div>

    <v-table fixed-header
    height="200px">
      <thead>
        <tr>
          <th class="text-center">{{$t('name')}}</th>
          <th class="text-center">{{$t('actions')}}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in rows"
          :key="item.name"
        >
          <td class="text-center">{{ item.productName }}</td>
          <td class="text-center"><button class="btn bg-primary on-secondary" @click="details(item.id)">{{ $t('details') }}</button></td>
        </tr>
      </tbody>
    </v-table>
    <button class="btn bg-primary d-block m-auto mb-4 mt-3" @click="addContract()">{{ $t('Organizinganother') }}</button>
  </VCard>
</template>

<style lang="scss"></style>
