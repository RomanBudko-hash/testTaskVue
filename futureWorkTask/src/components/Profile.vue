<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const _s = store.state

const profileValid = computed(() => {
  if (_s.inputValue.includes(_s.selectedProfile?.id) 
  || _s.inputValue.includes(_s.selectedProfile?.username)){
    return _s.selectedProfile; 
  } else {
    store.commit('setSelectedProfile', null);
    return _s.selectedProfile;
  }
});
</script>

<template>
  <div class="profile-card" v-if="profileValid">
     <div class="profile-card__photo" />
       <div class="profile-card__info">
        <div class="profile-card__name">{{ profileValid.name }}</div>
        <div>
          <label class="profile-card__email">email: </label>
          {{ profileValid.email }}
        </div>
        <div>
          <label class="profile-card__phone">phone: </label>
          {{ profileValid.phone }}
        </div>
      </div>
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
    &-card{
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 60px;
      padding: 30px 30px 0 20px;
      &__info{
        display: flex;
        flex-direction: column;
        gap: 10px;
        color:#76787D;
        font-size: 14px;
      }
      &__photo{
        height: 286px;
        width: 424px;
        background: url('./../photo/Rectangle4big.png') no-repeat center;
      }
      &__name{
        font-size: 16px;
        font-weight: 600;
        color: #000000;
      }
      &__email{
        font-size: 14px;
        font-weight: 600;
        color: #333333;
      }
      &__phone{
        font-size: 14px;
        font-weight: 600;
        color: #333333;
      }
    }
  }
</style>