<script>
import http from '../../http.js'
export default {
  data() {
    return {
      items: [],
      currencyId: null,
      pageReloaded: false,
    }
  },
  mounted() {
    this.getData()
  },

  methods: {
    toggleLocale() {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'ar' : 'en'

      const main = document.querySelector('.v-main')

      const nav = document.querySelector('.layout-navbar')
      const side = document.querySelector('.v-navigation-drawer')

      if (main) {
        main.style.direction = this.$i18n.locale === 'ar' ? 'rtl' : 'ltr'
      }
      if (nav) {
        nav.style.direction = this.$i18n.locale === 'ar' ? 'rtl' : 'ltr'
      }

      if (side) {
        side.style.direction = this.$i18n.locale === 'ar' ? 'rtl' : 'ltr'
      }
      localStorage.setItem('lang', this.$i18n.locale)

      window.location.reload()
    },

    async getData() {
      await http.get(`Branches/GetBranches`).then(response => {
        this.items = response.data.data.map(item => ({
          title: item.name,
          value: item.id,
        }))
        const storedCurrencyId = localStorage.getItem('currencyId')
        if (storedCurrencyId) {
          console.log(this.items)
          const selectedCurrency = this.items.find(item => item.value == storedCurrencyId)
          if (selectedCurrency) {
            // إذا كان هناك قيمة محفوظة، استخدمها كقيمة افتراضية
            this.currencyId = selectedCurrency.value
          }
        } else {
        window.location.reload()
          this.currencyId = this.items[0].value
      localStorage.setItem('currencyId', this.currencyId)

        }
      })
    },
    async handleChange() {
      localStorage.setItem('currencyId', this.currencyId)

      if (!this.pageReloaded) {
        this.pageReloaded = true
        window.location.reload()
      }
    },
  },
}
</script>

<script setup>
import DrawerContent from './DrawerContent.vue'
import { VerticalNavLayout } from '@layouts'

// Components
import Footer from '@/layouts/components/Footer.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'
</script>

<template>
  <VerticalNavLayout :style="{ direction: $i18n.locale === 'ar' ? 'rtl' : 'ltr' }">
    <!-- 👉 navbar -->
    <template #navbar>
      <VSpacer />

      <!-- <NavbarThemeSwitcher /> -->
      <VSelect
        v-if="items.length > 0"
        :label="$t('branch')"
        :items="items"
        v-model="currencyId"
        @update:modelValue="handleChange"
      />

      <VBtn
        icon
        variant="text"
        color="default"
        class="me-2"
        size="small"
        @click="toggleLocale"
      >
        <VIcon
          icon="mdi-web"
          size="24"
        />
      </VBtn>

      <UserProfile />
    </template>

    <!-- 👉 Drawer content -->
    <template
      #navigation-drawer-content
      :style="{ direction: $i18n.locale === 'ar' ? 'rtl' : 'ltr' }"
    >
      <DrawerContent />
    </template>

    <!-- 👉 Pages -->
    <div class="layout-page-content">
      <RouterView />
    </div>

    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>
  </VerticalNavLayout>
</template>

<style lang="scss">
.app-bar-search {
  .v-input__control {
    width: 236px;
  }

  .v-field__outline__start {
    border-radius: 28px 0 0 28px !important;
    flex-basis: 20px !important;
  }

  .v-field__outline__end {
    border-radius: 0 28px 28px 0 !important;
  }
}
</style>
