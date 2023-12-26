
<script>
import { useTheme } from 'vuetify'

// import logo from '@/assets/logo.svg?raw'
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import http from '../http'

// import authV1MaskDark from '@/assets/images/pages/auth-v1-mask-dark.png'
// import authV1MaskLight from '@/assets/images/pages/auth-v1-mask-light.png'
// import authV1Tree2 from '@/assets/images/pages/auth-v1-tree-2.png'
// import authV1Tree from '@/assets/images/pages/auth-v1-tree.png'
export default {
  components: {AuthProvider},
  data(){
    return{
      loadingFormEdit:false,
      isPasswordVisible:false,
      formData:{
        userName: 'Abdallah',
        password: '12312300',
        vuetifyTheme : useTheme(),
      },
    }
  },
  computed:{
    authThemeMask(){
      return vuetifyTheme.global.name.value === 'light' ? authV1MaskLight : authV1MaskDark
    },
    
  },
  methods:{
    async submitForm () {
      this.loadingFormEdit = true
      const response = await http.post('Auth/Login', this.formData)
      localStorage.setItem('token', response.data.data.token)
      this.$router.push("/")
      this.loadingFormEdit = false
    },
  },
}
</script>



<template>
  <div
    class="auth-wrapper d-flex align-center justify-center pa-4"
    style="direction: rtl;"
  >
    <VCard
      class="auth-card pa-4 pt-7 rtlLogin"
      max-width="448"
    >
      <VCardItem class="justify-center">
        <template #prepend>
          <div class="d-flex">
            <img src="../assets/logo.svg">
          </div>
        </template>
      </VCardItem>
      
      <VCardText class="pt-2">
        <h5 class="text-h5 font-weight-semibold mb-1">
          <p>{{ $t('login') }}</p>
        </h5>
        <p class="mb-0">
          {{ $t('loginalert') }} 
        </p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="submitForm">
          <VRow>
            <!-- username -->
            <VCol cols="12">
              <VTextField
                v-model="formData.userName"
                :label="$t('labelLoginUserName')"
                type="text"
              />
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="formData.password"
                :label="$t('labelLoginPassWord')"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />

              

              <!-- login button -->
              <VBtn
                class="mt-3 btn-p"
                block
                type="submit"
              >
                {{ $t('login') }}
              </VBtn>
            </VCol>
            <VCol
              cols="12"
              class="d-flex align-center"
            >
              <VDivider />
              <span class="mx-1">{{ $t('communication') }}</span>
              <span class="mx-1">{{ $t('WithMe') }} </span>
              
              <VDivider />
            </VCol>

            <!-- auth providers -->
            <VCol
              cols="12"
              class="text-center"
            >
              <AuthProvider />
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
      <div
        v-if="loadingFormEdit"
        id="loaders4"
      >
        <div id="Loading">
          <div class="text-center">
            <div class="rms-ripple">
              <div />
              <div />
            </div>
          </div>
        </div>
      </div>
    </VCard>
  </div>
</template>



<style lang="scss">
@use "@core/scss/pages/page-auth.scss";
</style>

<route lang="yaml">
  meta:
    layout: blank
</route>

