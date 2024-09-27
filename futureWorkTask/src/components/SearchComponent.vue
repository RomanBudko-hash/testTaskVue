<script setup>
  import Profile from './Profile.vue'
  import Sidebar from './Sidebar.vue'
</script>
<template>
  <main class="main">
    <Sidebar />
    <Profile />
  </main>
</template>
<style scoped lang="scss">
  .main{
    height: 600px;
    box-shadow: 0px 0px 10px 0px #0000001A;
    border-radius: 10px;
  }
</style>