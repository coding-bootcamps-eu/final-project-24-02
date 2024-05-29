<template>
  <h1>{{ welcome }}</h1>

  <p>{{ firstname }}</p>
  <p>{{ lastname }}</p>
  <p>{{ email }}</p>
  <p>{{ selectedoptions }}</p>
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
  }
}
</script>

<style scoped></style>
