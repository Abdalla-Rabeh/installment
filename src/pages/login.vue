<script>
export default {
  mounted(){
    console.log(this.$i18n)
  },
  methods: {
    toggleLocale() {

      this.$i18n.locale = this.$i18n.locale === 'en' ? 'ar' : 'en'
      const rtlLogin = document.querySelector(".rtlLogin")
      if (rtlLogin) {
        rtlLogin.style.direction = this.$i18n.locale === 'ar' ? 'rtl' : 'ltr'
      }
    },

  },
  
}
</script>

<script setup>
import { useTheme } from 'vuetify'
import logo from '@/assets/logo.svg?raw'
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import http from '../http'

// import authV1MaskDark from '@/assets/images/pages/auth-v1-mask-dark.png'
// import authV1MaskLight from '@/assets/images/pages/auth-v1-mask-light.png'
// import authV1Tree2 from '@/assets/images/pages/auth-v1-tree-2.png'
// import authV1Tree from '@/assets/images/pages/auth-v1-tree.png'
import router from '@/router'
const isPasswordVisible = ref(false)
const vuetifyTheme = useTheme()
const authThemeMask = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? authV1MaskLight : authV1MaskDark
})
const form = ref({
  userName: 'Abdallah',
  password: '12312300',
})
const submitForm = async () => {
  const response = await http.post('Auth/Login', form.value)
  localStorage.setItem('token', response.data.data.token)
  router.push("/")
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
                v-model="form.userName"
                :label="$t('labelLoginUserName')"
                type="text"
              />
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="form.password"
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
                
                style="background-color: #0088D0 !important;"
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
      <!--
        <button @click="toggleLocale">
        {{ $i18n.locale === 'en' ? 'ar' : 'en' }}
        </button> 
      -->
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

