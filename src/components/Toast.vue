<template>
  <div class="toast">
    <div class="header">
      <h3>{{ toast.title }}</h3>
    </div>
    <div class="content">
      <p>{{ toast.message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    toast: { required: true, type: Object }
  },
  created() {
    
  }
}
</script>

<style scoped>
</style>