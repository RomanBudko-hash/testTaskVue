<script setup>
  import Container from './components/Container.vue'
  import Header from './components/Header.vue'
  import Main from './components/Main.vue'
</script>

<template>
  <Container>
    <Header />
    <Main />
  </Container>
</template>

<style lang="scss">
  @import './assets/normalize.scss';
  @import './assets/globalStyles.scss';
</style>