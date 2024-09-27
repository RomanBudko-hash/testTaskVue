<script setup>
  const props = defineProps({
    employeeCard: Object
  })
</script>
<template>
  <div class="profile-card" v-if="props.employeeCard">
     карточка профиля
  </div>
  <div class="profile-space" v-else>
    Выберите сотрудника, чтобы посмотреть его профиль
  </div>
</template>
<style scoped lang="scss">
  .profile{
    &-space{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      font-weight: 400;
      color: #76787D;
    }
    &-card{}
  }
</style>