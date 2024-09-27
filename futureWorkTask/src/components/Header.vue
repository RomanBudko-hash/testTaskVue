<template>
  <header class="header">
    <h1 class="header__title">
      Жилфонд
    </h1>
    <div class="header__userName">
      Пользователь
    </div>
  </header>
</template>
<style scoped lang="scss">
@import './../assets/variables.scss';
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__title{
      font-size: 32px;
      font-weight: 700;
      color: $headerTitleColor;
    }
    &__userName{
      font-size: 16px;
      font-weight: 400;
      color: $headerUserNameColor;
    }
  }
</style>