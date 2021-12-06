<template>
  <div class="toast">
    <div class="sidebar" :class="toast.type"></div>
    <div class="content">
      <div class="header">
        <h3>{{ toast.title }}</h3>
        <button @click="dismissToast">X</button>
      </div>
      <div class="text">
        <p>{{ toast.message }}</p>
      </div>
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
  --grey: #cccccc;
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
  width: 500px;
  min-height: 50px;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  padding: 1rem;
  box-sizing: border-box;
  background-color: var(--cream);
  justify-content: center;
  border-top-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border-top-right-radius: .5rem;
  box-shadow: 0 0 .5rem var(--grey);
}

.toast p {
  font-weight: 100;
}

.toast .sidebar {
  width: .5rem;
}

.toast .content, .toast .header, .toast .text {
  width: 100%;
  display: flex;
}

.toast .content {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 1rem;
  box-sizing: border-box;
}

.toast .header, .toast .text {
  flex-direction: row;
  justify-content: flex-start;
  text-align: left;
}

.toast .header {
  height: 25px;
  margin-bottom: 1rem;
}

.toast .header button {
  margin-left: auto;
  text-decoration: none;
  border: none;
  cursor: pointer;
  background: none;
  font-size: 1rem;
}

.toast .header button:hover {
  background: var(--light-grey);
}

.toast .content {
  flex-grow: 1;
}
</style>