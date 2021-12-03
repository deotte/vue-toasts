<template>
  <div class="toast">
    <div class="header" :class="toast.type">
      <h3>{{ toast.title }}</h3>
      <button @click="dismissToast">X</button>
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
    // Automatically dismiss toast after 5 seconds
    setTimeout(() => {
      this.dismissToast();
    }, 5000);
  },
  methods: {
    dismissToast() {
      this.$store.commit('clearToast', this.toast.title);
    }
  }
}
</script>

<style>
/* :root = CSS3 way of adding variables you can use anywhere */
:root {
  --cream: #faf8f7;
  --light-grey: #e7e7e7;
  --black: #000000;
  --white: #FFFFFF;
  --green: #009900;
  --red: #990000;
  --blue: #009999;
}

.success, .info, .error {
  color: var(--white);
}

.success {
  background-color: var(--green);
}

.info {
  background-color: var(--blue);
}

.error {
  background-color: var(--red);
}

.toast {
  width: 600px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.toast .header, .toast .content {
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: .5rem;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}

.toast .header {
  height: 50px;
}

.toast .header button {
  margin-left: auto;
}

.toast .content {
  flex-grow: 1;
  background-color: var(--light-grey);
}
</style>