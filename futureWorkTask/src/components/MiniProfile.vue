<script setup>
  const props = defineProps({
    employeeCard: Object,
    isActive: Boolean
  })

  const emit = defineEmits(['select-profile']);
  const selectProfile = () => {
    emit('select-profile', props.employeeCard);
  };
</script>

<template>
  <div 
    class="mini-profile"
    @click="selectProfile"
  >
    <div class="mini-profile__photo" />
    <div 
      class="mini-profile__info" 
      :class="{ 'mini-profile__info_active': isActive }"
    >
      <div class="mini-profile__username">{{ employeeCard.username }}</div>
      <div class="mini-profile__email">{{ employeeCard.email }}</div>
    </div>
  </div>
</template>

<style lang="scss">
  .mini-profile{
    margin-top: 18px;
    min-height: 70px;
    min-width: 240px;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    box-shadow: 0px 0px 10px 0px #0000001A;
    border-radius: 10px;
    overflow-x: auto;
    &__photo{
      min-width: 70px;
      background: url('./../photo/Rectangle4.png') no-repeat center;
      border-radius: 10px 0 0 10px;
    }
    &__info{
      width: 100%;
      padding-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      &_active{
        background: #E0E0E0;
      }
    }
    &__username{
      font-size: 14px;
      font-weight: 600;
      color: #333333;
    }
    &__email{
      font-size: 14px;
      font-weight: 400;
      color: #76787D;
    }
  }
</style>