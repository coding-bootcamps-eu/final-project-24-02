<template>
  <article id="header-title">
    <h1>Offer</h1>
  </article>

  <main>
    <!-- box 1  -->

    <div class="box">
      <h3>Silver</h3>
      <p>$20</p>
      <section>
        <div class="offer-check">
          <span class="material-symbols-outlined check"> check </span>
          <span>Access to Fitness</span>
        </div>
        <div class="offer-check">
          <span class="material-symbols-outlined check"> check </span>
          <span> Limited hours per week</span>
        </div>
        <div class="offer-check">
          <span class="material-symbols-outlined check"> check </span>
          <span>Use of general facilities </span>
        </div>
      </section>

      <h2>For Rookies</h2>
    </div>

    <!-- box 2  -->

    <div class="box">
      <h3>Gold</h3>
      <p>$40</p>
      <section>
        <div class="offer-check">
          <span class="material-symbols-outlined check"> check </span>
          <span>Everything in the Silver Offer</span>
        </div>
        <div class="offer-check">
          <span class="material-symbols-outlined check"> check </span>
          <span>Unlimited course access</span>
        </div>
        <div class="offer-check">
          <span class="material-symbols-outlined check"> check </span>
          <span>Additional weekly personal training </span>
        </div>
        <div class="offer-check">
          <span class="material-symbols-outlined check"> check </span>
          <span>Access to member areas </span>
        </div>
      </section>

      <h2>For Wild Gymers</h2>
    </div>

    <!-- box 3  -->

    <div class="box">
      <h3>Diamond</h3>
      <p>$70</p>
      <section>
        <div class="offer-check">
          <span class="material-symbols-outlined check"> check </span>
          <span>Everything in the Gold Offer</span>
        </div>
        <div class="offer-check">
          <span class="material-symbols-outlined check"> check </span>
          <span>Premium course access</span>
        </div>
        <div class="offer-check">
          <span class="material-symbols-outlined check"> check </span>
          <span>Weekly nutritional counseling </span>
        </div>
        <div class="offer-check">
          <span class="material-symbols-outlined check"> check </span>
          <span>Access to wellness facilities</span>
        </div>
        <div class="offer-check">
          <span class="material-symbols-outlined check"> check </span>
          <span>VIP parking and priority access </span>
        </div>
      </section>

      <h2>For Gym Freaks</h2>
    </div>

    <div class="footer-btn">
      <button @click="back">Back</button>
      <button @click="next">Next</button>
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
    },
    next() {
      this.$router.push('/form')
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
  height: 500px;
  margin: 2rem 0;
  background: var(--secondary);
  border-radius: 30px;
  border: 5px solid var(--button);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  transition: transform 0.4s ease-in;
}

.box:hover {
  transform: scale(1.1);
}
.box h3 {
  height: 10vh;
  margin-top: 2rem;
  font-size: 2rem;
}
.box p {
  height: 5vh;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--button);
}

.box section {
  height: 30vh;
  width: 100%;
}
span {
  margin-left: 1rem;
}

.box h2 {
  height: 5vh;
  margin-top: 2rem;
  background: var(--button);
  color: var(--secondary);
  width: 100%;
  border-radius: 6px;
  text-align: center;
}

.offer-check {
  color: aliceblue;
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: left;
}

.check {
  border-radius: 50%;
  height: 25px;
  width: 25px;
  background: var(--button);
  text-align: center;
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
