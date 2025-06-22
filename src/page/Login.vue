<template>
  <div class="container">
    <div class="form">
      <div class="row">
        <label for="username">Account:</label>
        <input id="username" v-model="account" type="text" />
      </div>

      <div class="row">
        <label for="password">Password:</label>
        <input id="password" v-model="password" type="password" />
      </div>

      <button @click="handleLogin()">Login</button>
    </div>
  </div>
  
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { login } from "../api/UserApi";

const account = ref("");
const password = ref("");
const router = useRouter();

const handleLogin = async () => {
  if (!account.value) {
    alert("請輸入帳號");
    return;
  }
  if (!password.value) {
    alert("請輸入密碼");
    return;
  }

  try {
    const data = await login(account.value, password.value);
    localStorage.setItem("name", data.name);
    router.push("/lobby");
  } catch (error) {
    alert("帳號或密碼輸入錯誤");
  }
};
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.row {
  display: flex;
  flex-direction: column;
}

input {
  padding: 5px;
  font-size: 16px;
}

button {
  padding: 8px 12px;
  font-size: 16px;
  cursor: pointer;
}
</style>
