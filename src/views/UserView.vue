<template>
  <main>
    <h2>{{ welcome }}</h2>

    <table>
      <tr>
        <th>Firstname:</th>
        <td>{{ firstname }}</td>
      </tr>
      <tr>
        <th>Lastname:</th>
        <td>{{ lastname }}</td>
      </tr>
      <tr>
        <th>Email:</th>
        <td>{{ email }}</td>
      </tr>
      <tr>
        <th>Option:</th>
        <td>{{ selectedoptions }}</td>
      </tr>
    </table>
    <button @click="redirect">Back to Home</button>
  </main>
</template>

<script>
import { useUserStore } from '@/stores/userStore'
export default {
  setup() {
    const store = useUserStore()
    store.updateWelcomeMsg('Welcome to your Page !')

    return {
      welcome: store.users[0].welcomeMsg,
      firstname: store.users[0].firstname,
      lastname: store.users[0].lastname,
      email: store.users[0].email,
      selectedoptions: store.users[0].selectedoptions
    }
  },
  methods: {
    redirect() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 75vh;
  margin-left: 1rem;
  margin-right: 1rem;
}
h2 {
  margin-bottom: 3rem;
  font-size: 2rem;
}

table {
  border: 2px solid var(--text);
  border-collapse: collapse;
  width: 100%;
  box-shadow: 1px 1px 15px var(--button);
}

td,
th {
  border: 2px solid var(--button);
  padding: 20px 10px;
  color: var(--text);
  font-size: 1.2rem;
  box-shadow: 1px 1px 10px var(--button);
}

th {
  text-align: left;
  width: 20px;
}

td {
  text-align: center;
}

button {
  margin: 2rem 0;
  width: 100%;
  height: 50px;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

@media only screen and (min-width: 650px) {
  table {
    max-width: 600px;
  }
  button {
    max-width: 600px;
  }
}
</style>
