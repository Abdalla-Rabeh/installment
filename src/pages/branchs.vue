<script setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
</script>

<template>
  <div>
    <VRow>
      <VCol
        cols="12"
        md="12"
      >
        <!-- 👉 Horizontal Form -->
        <VCard :title="$t('branchs')">
          <VCardText>
            <VForm @submit.prevent="() => {}">
              <VRow>
                <!-- 👉 First Name -->
                <VCol
                  cols="12"
                  md="3"
                >
                  <VTextField
                    v-model="name"
                    label="name"
                    placeholder="Name"
                  />
                </VCol>

                <!-- 👉 Last Name -->
                <VCol
                  cols="12"
                  md="3"
                >
                  <VTextField
                    v-model="lastName"
                    label="address"
                    placeholder="Last Name"
                  />
                </VCol>

                <!-- 👉 Email -->
                <VCol
                  cols="12"
                  md="3"
                >
                  <VTextField
                    v-model="email"
                    label="phone"
                    placeholder="Email"
                  />
                </VCol>

                <!-- 👉 City -->
                <VCol
                  cols="12"
                  md="3"
                >
                  <VTextField
                    v-model="city"
                    label="Currency"
                    placeholder="Currency"
                  />
                </VCol>

               

                <VCol
                  cols="12"
                  class="d-flex gap-4"
                >
                  <VBtn type="submit">
                    Submit
                  </VBtn>

                  <VBtn
                    type="reset"
                    color="secondary"
                    variant="tonal"
                  >
                    Reset
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
