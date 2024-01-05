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
     
      EditForm: false,
    }
  },
  
 
,
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
                    v-model="formData.currencyId"
                    :label="$t('currencyId')"
                    :options="countries"
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
    
  </div>
</template>
