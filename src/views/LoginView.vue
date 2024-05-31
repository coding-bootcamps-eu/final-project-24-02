<template>
  <main>
    <article>
      <h2>Login</h2>
    </article>

    <form>
      <input class="input" type="email" placeholder="Email" />

      <input class="input" type="password" placeholder="Password" />
      <div class="remember-forgot">
        <label> <input type="checkbox" /> Remember me</label>
        <a href="#">Forgot Password?</a>
      </div>
      <button>Login</button>

      <p>Dont have an account? Register</p>
    </form>
  </main>
</template>

<script>
export default {}
</script>

<style scoped>
article {
  position: absolute;
  top: 150px;
}

h2 {
  margin: 1rem 0;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
  margin: 0rem 1rem;
}

form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  border: 2px solid var(--button);
  position: relative;
  height: 450px;
  width: 100%;
}

.remember-forgot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
}

label {
  color: var(--text);
}
a {
  color: var(--text);
}

form .input {
  color: var(--text);
  width: 300px;
  height: 40px;
  margin: 1rem 0;
  background: transparent;
  outline: none;
  border-radius: 6px;
  border: none;
  border-bottom: 2px solid var(--button);
  color: var(--text);
  font-size: 1.2rem;
  padding-left: 0.5rem;
}

form input:focus {
  outline: none;
  box-shadow: 0 0 8px var(--button);
}

form input::placeholder {
  color: var(--text);
  opacity: 0.5;
}
button {
  width: 300px;
  height: 40px;
  font-size: 1.2rem;
  margin: 1rem 0;
}
</style>
