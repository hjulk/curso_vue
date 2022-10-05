<template>
   <button
      @click="buttonClick"
      class="mr-4 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-2 border border-green-500 hover:border-transparent rounded"
   >
      <ring-loader v-if="isLoading" :size="5" :color="'#34D399'" />

      <p v-show="!isLoading">
         <slot></slot>
      </p>
   </button>
</template>

<script>
export default {
   name: 'PxButton',

   props: {
      isLoading: {
         type: Boolean,
         default: false,
      },
   },

   methods: {
      buttonClick() {
         this.$emit('custom-click')
      },
   },
}
</script>
