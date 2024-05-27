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
    <div class="picture">
      <div class="circle"></div>
      <img class="model1" src="../assets/img/model.svg" alt="" />
    </div>

    <section id="trainer" class="section2">
      <h2>Wild Programs</h2>

      <router-link to="/offer">
        <div class="box">
          <img class="model" src="../assets/img/fitmodel.svg" alt="" />
        </div>
      </router-link>

      <router-link to="/offer">
        <div class="box">
          <img class="model" src="../assets/img/thaimodel.svg" alt="" />
        </div>
      </router-link>

      <router-link to="/offer">
        <div class="box">
          <img class="model" src="../assets/img/yogamodel.svg" alt="" />
        </div>
      </router-link>
    </section>
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
  margin-top: 2.5rem;
  width: 280px;
  height: 280px;
  background: transparent;
  border-radius: 50%;
  border: 10px solid var(--button);
  box-shadow: 0px 0px 50px 10px var(--button);
}
.picture {
  position: relative;
}

.model1 {
  position: absolute;
  width: 280px;
  height: auto;
  top: 0;
}

.section2 {
  min-height: 100vh;
}
h2 {
  margin-top: 5rem;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 1.7rem;
}
.box {
  width: 300px;
  height: 300px;
  margin: 2rem 0;
  overflow: hidden;
  background: var(--secondary);
  border-radius: 30px;
  border: 5px solid var(--button);
  transition: transform 0.4s ease-in;
}
.box:hover {
  transform: scale(1.1);
}

.model {
  width: 100%;
}
</style>
