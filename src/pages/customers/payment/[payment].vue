<script>
import { GetClient } from '../../../store/index.js'
import http from '../../../http.js'
export default {
  data() {
    return {
      store: GetClient(),
      totalInitialPrice: '',
      totalPaidPrice: '',
      totalUnpaidPrice: '',
      items: {
        creationDate: '',
        finalPrice: '',
        initialPrice: '',
        installementPrice: '',
        installmentPercentage: '',
        notes: '',
        numberOfMonths: '',
        productName: '',
        productPrice: '',
        productPriceBeforIncrease: '',
        profit: '',
        restPrice: '',
        totalPaidPrice: '',
      },
      rows: [],
      fake: [],
    }
  },
  mounted() {
    this.getData()

    console.log(this.store.PaymentData)
  },
  methods: {
   async getData() {
      await http.get(`Installements/GetInstallementDetailsById?id=${this.$route.params.payment}`).then(res => {
        this.rows = res.data.data.clientInstallementDetailsResponses
        console.log(this.rows)
        // this.rows.forEach(el => {
          //     el.clientInstallementDetailsResponses.forEach(innerItem => {
            //      this.fake = innerItem
            //      console.log(this.fake)
            //     })
            //   })
            ;(this.creationDate = this.items.creationDate),
            (this.finalPrice = this.items.finalPrice),
            (this.initialPrice = this.items.initialPrice),
        (this.installementPrice = this.items.installementPrice),
        (this.installmentPercentage = this.items.installmentPercentage),
        (this.notes = this.items.notes),
        (this.numberOfMonths = this.items.numberOfMonths),
        (this.productName = this.items.productName),
        (this.productPrice = this.items.productPrice),
        (this.productPriceBeforIncrease = this.items.productPriceBeforIncrease),
        (this.profit = this.items.profit),
        (this.restPrice = this.items.restPrice),
        (this.totalPaidPrice = this.items.totalPaidPrice)
      })
      },
  },
}
</script>

<template>
  <VCard>
    <div class="container pls mt-2">
      <!-- <div class="row">
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
      </div> -->
    </div>
    <!-- <div
      class="container pls mt-2"
     
    >
      <div class="row">
        <div class="col-lg-4">
          <div class="p-2 font-weight-bold">{{ $t('totalInitialPrice') }} : {{ totalInitialPrice }}</div>
          <div class="p-2 font-weight-bold">{{ $t('totalPaidPrice') }} : {{ totalPaidPrice }}</div>
          <div class="p-2 font-weight-bold">{{ $t('totalUnpaidPrice') }} : {{ totalUnpaidPrice }}</div>
        </div>
      </div>
    </div> -->

    <v-table>
      <thead>
        <tr>
          <th class="text-center">{{ $t('name') }}</th>
          <th class="text-center">{{ $t('price') }}</th>
          <th class="text-center">{{ $t('Date') }}</th>
          <th class="text-center">{{ $t('statusId') }}</th>
          <th class="text-center">{{ $t('actions') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(fake, index) in rows" 
          :key="index"
        >
          <td class="text-center">{{ fake.installementNumber }}</td>
          <td class="text-center">{{ fake.price }}</td>
          <td class="text-center">{{ fake.dateOfPayment }}</td>
          <td class="text-center">{{ fake.statusName }}</td>
          <td class="text-center">
            <button
              class="btn bg-primary on-secondary me-2"
              @click="Payment(fake.id)"
            >
              {{ $t('Payment') }}
            </button>
            <button
              class="btn bg-danger on-secondary me-2"
              @click="Refund(fake.id)"
            >
              {{ $t('Refund') }}
            </button>
          </td>
        </tr>
      </tbody>
    </v-table>
    <div class="d-flex">
      <button
        class="btn bg-primary d-block m-auto mb-4 mt-3"
        @click="addContract()"
      >
        {{ $t('Organizinganother') }}
      </button>
      <button
        class="btn bg-danger d-block m-auto mb-4 mt-3"
        @click="DeleteIns()"
      >
        {{ $t('DeleteIns') }}
      </button>
    </div>
  </VCard>
</template>

<style lang="scss"></style>
