<template>
  <article id="header-title">
    <h2>form</h2>
  </article>

  <main>
    <form @submit.prevent="handleSubmit">
      <input v-model="firstname" type="text" placeholder="Enter your firstname" />
      <input v-model="lastname" type="text" placeholder="Enter your lastname" />
      <input v-model="email" type="email" placeholder="Enter your email" />
      <select v-model="selectedoptions" id="options" name="options">
        <option value="option1">For Roockies</option>
        <option value="option2">For Wild Gymers</option>
        <option value="option3">For Gym Freaks</option>
      </select>
      <button>Submit</button>
    </form>

    <div class="footer-btn">
      <button @click="back">Back</button>
    </div>
  </main>

  <ul>
    <li v-for="user of users" :key="user.id">
      {{ user.firstname }}
    </li>
  </ul>

  <div>
    <a href="#header-title">
      <span class="material-symbols-outlined"> keyboard_double_arrow_up </span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          firstname: '',
          lastname: '',
          email: '',
          selectedoptions: []
        }
      ]
    }
  },
  methods: {
    handleSubmit() {
      const user = {
        title: this.firstname,
        lastname: this.lastname,
        email: this.email,
        selectedoptions: this.selectedoptions
      }
      this.users.push(user)
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
ul {
  background: red;
}
li {
  color: white;
}
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
  width: 80%;
  height: 50px;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}
form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

input {
  margin: 1rem;
  height: 50px;
  width: 80%;
  border: none;
  border-radius: 4px;
  background: transparent;
  border-bottom: 2px solid var(--button);
  color: var(--text);
  font-size: 1.2rem;
  padding-left: 0.5rem;
}

input:focus {
  outline: none;
  box-shadow: 0 0 8px var(--button);
}

input::placeholder {
  color: var(--text);
  opacity: 0.5;
}

select {
  border: none;
  border-radius: 4px;
  margin: 1rem;
  height: 50px;
  width: 80%;
  background: transparent;
  border-bottom: 2px solid var(--button);
  color: var(--text);
  font-size: 1.2rem;
}

select:focus {
  outline: none;
  box-shadow: 0 0 8px var(--button);
}
</style>
