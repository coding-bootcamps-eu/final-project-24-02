<template>
  <div>
    <h3>Welcome to your Page</h3>
    <p>Your id is: {{ $route.params.id }}</p>
    <p>{{ users.firstname }}</p>
  </div>

  <ul>
    <li v-for="user of users" :key="user.id">
      {{ users.firstname }}
      {{ users.lastname }}
      {{ users.email }}
      {{ users.selectedoptions }}
    </li>
  </ul>
</template>

<script>
import UserData from '@/components/UserData.vue'
export default {
  components: {
    UserData
  }
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50vh;
  background: red;
}
</style>
