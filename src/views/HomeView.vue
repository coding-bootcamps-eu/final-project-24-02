<template>
  <main>
    <h1 id="header-title">
      Train <br />
      Without <br />Limit
    </h1>
    <p>
      Training involves regularly engaging in physical exercises to improve strength, endurance,
      <br />
      and overall fitness while also promoting <br />well-being and health.
    </p>
    <div class="picture">
      <div class="circle"></div>
      <img class="model1" src="../assets/img/model.svg" alt="" />
    </div>

    <section id="trainer" class="section2">
      <h2>Wild Programs</h2>
      <p>
        In our gym, we offer three courses: Fitness to enhance strength and endurance, MMA for
        <br />
        versatile combat sports training, and Yoga <br />to promote flexibility and inner balance.
      </p>

      <router-link to="/offer">
        <div class="container">
          <div class="box">
            <img class="model" src="../assets/img/fitmodel.svg" alt="" />
          </div>
          <h3>Fitness</h3>
          <p>
            Fitness encompasses physical activities and lifestyle choices aimed at improving health
            and overall well-being.
          </p>
        </div>
      </router-link>

      <router-link to="/offer">
        <div class="container">
          <div class="box">
            <img class="model" src="../assets/img/thaimodel.svg" alt="" />
          </div>
          <h3>Mixed Martial Arts</h3>
          <p>MMA is a versatile combat sport that combines techniques from various disciplines.</p>
        </div>
      </router-link>

      <router-link to="/offer">
        <div class="container">
          <div class="box">
            <img class="model" src="../assets/img/yogamodel.svg" alt="" />
          </div>
          <h3>Yoga</h3>
          <p>
            Yoga is a practice that combines physical postures, breathing exercises, and meditation.
          </p>
        </div>
      </router-link>
    </section>
  </main>
  <div>
    <a href="#header-title">
      <span class="material-symbols-outlined"> keyboard_double_arrow_up </span>
    </a>
  </div>
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

h2 {
  margin-top: 5rem;
  margin-bottom: 0.5rem;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 1.9rem;
}

h3 {
  color: var(--button);
  text-align: center;
  font-size: 1.5rem;
  margin: 1rem;
}

.section2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container {
  background: var(--secondary);
  border-radius: 30px;
  width: 335px;
  height: 450px;
  margin: 2rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

.box {
  width: 300px;
  height: 300px;
  margin: 1rem;
  overflow: hidden;
  background: var(--secondary);
  border: 5px solid var(--button);
  transition: transform 0.4s ease-in;
  border-radius: 50% 10%;
  /* border-radius: 50% 10% 50% 10% / 10% 50% 10% 50%; */
}

.box:hover {
  transform: scale(1.1);
}

.model {
  width: 100%;
}

.material-symbols-outlined {
  display: block;
  text-align: center;
  margin: 0.5rem 0;
  color: var(--text);
}
</style>
