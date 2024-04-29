<script setup>
const userId = defineModel('userId')
const password = defineModel('password')
</script>
<template>
  <table>
    <tbody>
      <tr>
        <td>
          UserID
        </td>
        <td>:</td>
        <td>
          <input v-model="userId" type="text"/>
        </td>
      </tr>
      <tr>
        <td>
          Password
        </td>
        <td>:</td>
        <td>
          <input v-model="password" type="Password">
        </td>
      </tr>
    </tbody>
  </table>
</template>