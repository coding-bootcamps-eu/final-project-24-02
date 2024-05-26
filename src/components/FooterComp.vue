<template>
  <footer>
    <p>
      © All Rights Reserved By
      <a href="https://github.com/mohammadshirazi040" target="_blank">M.Shirazi</a>
      <span class="material-symbols-outlined"> keyboard_double_arrow_up </span>
    </p>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 100%;
  background: var(--secondary);
}

a {
  transition: border-bottom 0.3s ease-in-out;
}

a:link {
  color: var(--button);
}
a:visited {
  color: var(--button);
}
a:hover {
  border-bottom: 2px solid #592be0;
}

a:active {
  color: #4f1de4;
}

.material-symbols-outlined {
  display: block;
  text-align: center;
  margin-top: 0.5rem;
  color: var(--text);
}
</style>
