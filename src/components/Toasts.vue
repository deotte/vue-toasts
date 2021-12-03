<template>
  <div class="toasts-wrapper" v-if="toasts.length">
    <Toast
      v-for="(toast, index) of toasts"
      :toast="toast"
      :key="index">
    </Toast>
  </div>
</template>

<script>
import Toast from '@/components/Toast.vue'

export default {
  name: 'Toasts',
  components: { Toast },
  computed: {
    toasts() {
      return this.$store.state.toasts;
    }
  }
}
</script>

<style scoped>
</style>