<script setup>
import { ref } from 'vue'
import LoginItem from '../components/LoginItem.vue'
import ShowInput from '../components/ShowInput.vue'
const userId = ref('')
const password = ref('')
</script>
<template>
  <main>
    <h1>ログイン</h1>
    <LoginItem v-model:user-id="userId" v-model:password="password" style="margin-bottom: 20px;" />
    <ShowInput :user-id="userId" :password="password"/>
  </main>
</template>
