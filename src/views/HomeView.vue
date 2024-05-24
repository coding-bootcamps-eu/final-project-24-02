<template>
  <main>
    <h1>
      Train <br />
      Without <br />Limit
    </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, helmy sicle chers lmkie
      eius.
    </p>
    <div class="circle"></div>
  </main>
</template>

<script>
export default {}
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  margin-top: 1rem;
  font-size: 2.7rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
}

p {
  margin: 1rem;
  text-align: center;
}

.circle {
  margin-top: 1rem;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  border: 20px solid red;
}
</style>
