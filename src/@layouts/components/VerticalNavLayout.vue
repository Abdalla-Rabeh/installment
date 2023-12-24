<script setup>
import { useDisplay } from 'vuetify'

const {lgAndUp, mdAndDown} = useDisplay()
const drawer = ref(lgAndUp.value)
</script>

<template>
  <VNavigationDrawer
    v-model="drawer"
    app
    floating
    sticky
    location="right"
    :absolute="false"
    style="direction: rtl; background: rgb(var(--v-theme-background))"
    class="layout-vertical-nav position-fixed"
  >
    <slot name="navigation-drawer-content" />
  </VNavigationDrawer>
  <VAppBar
    app
    flat
    class="px-6 layout-navbar"
    style="direction: rtl;background: transparent"
  >
    <template
      v-if="mdAndDown"
      #prepend
    >
      <VAppBarNavIcon
        class="d-block d-lg-none me-2 ms-n3"
        color="inherit"
        @click="drawer = true"
      />
    </template>
    <slot name="navbar" />
  </VAppBar>
  <VMain
    class="w-100"
    style="direction: rtl;"
  >
    <div class="pa-6">
      <slot />
    </div>
  </VMain>
  <!-- footer soon -->
</template>

<style lang="scss">
.layout-vertical-nav {
  top: 0 !important;
  height: 100% !important;

  .v-navigation-drawer__content {
    display: flex;
    flex-direction: column;

    > ul {
      flex-grow: 1;
    }
  }
}

.v-toolbar__prepend {
  margin-inline-start: 0 !important;
}

.v-footer {
  padding-left: 24px !important;
  padding-right: 24px !important;
}
</style>
