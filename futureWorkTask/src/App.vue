<script setup>
  import Container from './components/Container.vue'
  import Header from './components/Header.vue'
  import SearchComponent from './components/SearchComponent.vue'
</script>

<template>
  <Container>
    <Header />
    <SearchComponent />
  </Container>
</template>

<style lang="scss">
  @import './assets/normalize.scss';
  @import './assets/globalStyles.scss';
  @import './assets/variables.scss';
</style>