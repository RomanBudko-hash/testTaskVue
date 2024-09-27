<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scope lang="scss">
  @import './../assets/variables.scss';
  .container{
    margin: 0 auto;
    max-width: $containerMaxWidth;
    padding: 50px;
  }
</style>