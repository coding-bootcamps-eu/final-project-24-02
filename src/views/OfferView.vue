<template>
  <article>
    <h1>Offer</h1>
  </article>

  <main>
    <div class="box">
      <div>
        <h2>For Roockies</h2>
      </div>
      <p>10€</p>
      <h3>Daily</h3>
    </div>
    <div class="box">
      <h2>For Wild Gymers</h2>
      <p>40€</p>
      <h3>Monthly</h3>
    </div>
    <div class="box">
      <h2>For Gym Freaks</h2>
      <p>70€</p>
      <h3>Yearly</h3>
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style scoped>
article {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
}

h1 {
  margin-top: 1rem;
  font-size: 2.7rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.box {
  width: 300px;
  height: 300px;
  margin: 2rem 0;
  overflow: hidden;
  background: var(--secondary);
  border-radius: 30px;
  border: 5px solid var(--button);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
}

.box p {
  font-size: 2rem;
  width: 100%;
  font-family: 'Titan One', sans-serif;
  text-align: center;
  border-bottom: 3px solid var(--button);
  border-top: 3px solid var(--button);
  padding: 1rem;
  color: var(--button);
}

.box h2 {
  width: 100%;
  font-family: 'Titan One', sans-serif;
  text-align: center;
  padding: 1rem;
}

.box h3 {
  width: 100%;
  font-family: 'Titan One', sans-serif;
  text-align: center;
}
</style>
