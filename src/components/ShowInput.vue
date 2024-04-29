<script setup>
const userId = defineModel('userId')
const password = defineModel('password')
</script>
<template>
    <table>
        <tbody>
            <tr>
                <td>
                    入力UserID
                </td>
                <td>:</td>
                <td>
                    {{ userId }}
                </td>
            </tr>
            <tr>
                <td>
                    入力Password
                </td>
                <td>:</td>
                <td>
                    {{ password }}
                </td>
            </tr>
        </tbody>
    </table>
</template>