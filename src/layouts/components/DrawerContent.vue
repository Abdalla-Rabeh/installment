<script setup>
import upgradeBannerDark from '@/assets/images/pro/upgrade-banner-dark.png'
import upgradeBannerLight from '@/assets/images/pro/upgrade-banner-light.png'
import logo from '@/assets/logo.svg?raw'
import {
  VerticalNavLink,
  VerticalNavSectionTitle,
} from '@layouts'
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()
const upgradeBanner = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? upgradeBannerLight : upgradeBannerDark
})
</script>

<template>
  <!-- 👉 Nav header -->
  <div class="nav-header" 
  :style="{ direction: $i18n.locale === 'ar' ? 'rtl' : 'ltr' }"
  
  >
    <RouterLink
      to="/"
      class="app-logo d-flex align-center gap-x-3 app-title-wrapper"
    >
      <!-- ℹ️ You can also use img tag or VImg here -->
      <img
        src="@/assets/logo.svg"
        alt="logo"
        style="margin: auto 15px;"
      >
    </RouterLink>
  </div>

  <!-- 👉 Nav items -->
  <ul>
    <VerticalNavLink
      :item="{
        title: $t('Dashboard'),
        to: 'index',
        icon: { icon: 'mdi-home-outline' }
      }"
    />
    <!--
      <VerticalNavLink
      :item="{
      title: 'Account Settings',
      to: 'account-settings',
      icon: { icon: 'mdi-account-cog-outline' }
      }"
      /> 
    -->
    <!-- 👉 Pages -->
    <VerticalNavSectionTitle :item="{ heading: $t('pages') }" />
    
    <!-- Customers -->
    <VerticalNavLink
      :item="{
      title: $t('products'),
      to: { path: '/products' },
      icon: { icon: 'mdi-tag' }
      }"
      /> 
      <VerticalNavLink
      :item="{
        title: $t('branchs'),
        to: 'branchs',
        
        icon: { icon: 'mdi-source-branch' }
      }"
    /> 
    <VerticalNavLink
    :item="{
    title: $t('customers'),
    to: { path: '/customers' },
    icon: { icon: 'mdi-account-group' }
    }"
    /> 
   
    

    
    

    <!-- 👉 User Interface -->
    <VerticalNavSectionTitle :item="{ heading: $t('Lpages') }" />

    <!--
      <VerticalNavLink
      :item="{
      title: 'Typography',
      to: 'typography',
      icon: { icon: 'mdi-alpha-t-box-outline' }
      }"
      />
      <VerticalNavLink
      :item="{
      title: 'Icons',
      to: 'icons',
      icon: { icon: 'mdi-eye-outline' }
      }"
      /> 
    -->
    <!--
      <VerticalNavLink
      :item="{
      title: 'Cards',
      to: 'card-basic',
      icon: { icon: 'mdi-credit-card-outline' }
      }"
      />
      <VerticalNavLink
      :item="{
      title: 'Tables',
      to: 'tables',
      icon: { icon: 'mdi-table' }
      }"
      />
      <VerticalNavLink
      :item="{
      title: 'Form Layouts',
      to: 'form-layouts',
      icon: { icon: 'mdi-form-select' }
      }"
      /> 
    -->
  </ul>
</template>

<style lang="scss">
// .v-navigation-drawer {
//   height: 100%;

//   .v-navigation-drawer__content {
//     display: flex;
//     flex-direction: column;

//     > ul {
//       flex-grow: 1;
//     }
//   }
// }

.upgrade-banner {
  margin-top: auto;
  // position: absolute;
  // bottom: 13px;
  // left: 50%;
  // transform: translateX(-50%);
}
</style>
