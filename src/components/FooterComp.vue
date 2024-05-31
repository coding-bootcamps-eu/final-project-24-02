<template>
  <footer>
    <p>
      © All Rights Reserved By
      <a href="https://github.com/mohammadshirazi040" target="_blank">M.Shirazi</a>
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
  border-bottom: 1px solid var(--button);
}

a:active {
  color: var(--text);
}
</style>
