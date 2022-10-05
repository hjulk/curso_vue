<template>
   <div>
      <ring-loader :loading="isLoading" :color="'#68d391'" :size="'300px'" />
      <px-assets-table v-if="!isLoading" :assets="assets" />
   </div>
</template>

<script>
import api from '@/api'
import PxAssetsTable from '@/components/PxAssetsTable'
import RingLoader from 'vue-spinner/src/RingLoader.vue'

export default {
   // eslint-disable-next-line vue/multi-word-component-names
   name: 'Home',
   components: { PxAssetsTable, RingLoader },

   data() {
      return {
         isLoading: false,
         assets: [],
      }
   },

   created() {
      this.isLoading = true
      // eslint-disable-next-line prettier/prettier
      api.getAssets().then(assets => (this.assets = assets)).finally(() => (this.isLoading = false))
   },
}
</script>
