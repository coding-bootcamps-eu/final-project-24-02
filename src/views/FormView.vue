<template>
  <article id="header-title">
    <h2>form</h2>
  </article>

  <main>
    <form>
      <input required v-model="users.firstname" type="text" placeholder="Enter your firstname" />
      <input required v-model="users.lastname" type="text" placeholder="Enter your lastname" />
      <input required v-model="users.email" type="email" placeholder="Enter your email" />
      <select required v-model="users.selectedoptions" id="options" name="options">
        <option value="For Rookies">For Rookies</option>
        <option value="For Wild Gymers">For Wild Gymers</option>
        <option value="For Gym Freaks">For Gym Freaks</option>
      </select>

      <router-link class="footer-btn" to="/user">
        <button @click="update">Submit</button>
      </router-link>
    </form>

    <div class="footer-btn">
      <button @click="back">Back</button>
    </div>
  </main>

  <div>
    <a href="#header-title">
      <span class="material-symbols-outlined"> keyboard_double_arrow_up </span>
    </a>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/userStore'
export default {
  data() {
    return {
      users: [
        {
          firstname: '',
          lastname: '',
          email: '',
          selectedoptions: ''
        }
      ]
    }
  },
  methods: {
    update() {
      // update pinia store
      const store = useUserStore()
      return (
        store.updateFirstName(this.users.firstname),
        store.updateLastName(this.users.lastname),
        store.updateEmail(this.users.email),
        store.selectedOptions(this.users.selectedoptions)
      )
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
  height: 20vh;
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
  justify-content: center;
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
