<template>
  <article id="header-title">
    <h2>form</h2>
  </article>

  <main>
    <form></form>

    <div class="footer-btn">
      <button @click="back">Back</button>
      <button>Submit</button>
    </div>
  </main>
  <div>
    <a href="#header-title">
      <span class="material-symbols-outlined"> keyboard_double_arrow_up </span>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
article {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
}

h2 {
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
}
.material-symbols-outlined {
  display: block;
  text-align: center;
  margin: 0.5rem 0;
  color: var(--text);
}

.footer-btn {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}

button {
  padding: 1rem 3rem;
  margin-bottom: 1rem;
}
</style>
