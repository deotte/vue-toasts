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

<style>
  .toasts-wrapper {
    width: 600px;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    right: 2rem;
    bottom: 1rem;
  }
</style>