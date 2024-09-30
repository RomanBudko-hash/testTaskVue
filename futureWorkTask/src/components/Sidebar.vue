<script setup>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import MiniProfile from './MiniProfile.vue';

const store = useStore();

const inputValue = computed(() => store.state.inputValue);

const isLoading = ref(false);
const loadProfiles = async () => {
  isLoading.value = true;
  await store.dispatch('fetchProfileList', inputValue.value);
  isLoading.value = false;
};

const currentInputValue = ref('');
let timeoutId = null;
const changeInputValue = (event) => {
  currentInputValue.value = event.target.value;
  store.commit('setInputValue', event.target.value);

  if(timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    loadProfiles()
  }, 1000);
}
const selectProfile = (employeeCard) => {
  store.commit('setSelectedProfile', employeeCard);
};
</script>

<template>
  <aside class="sidebar">
    <div class="search">
      <div class="search-title">
        Поиск сотрудников
      </div>
      <input
        :value="inputValue"
        type="text"
        placeholder="Введите Id или имя"
        class="search-input"
        @input="changeInputValue"
      >
      <div class="search-result">
        Результаты
      </div>
    </div>
    <div v-if="isLoading" class="loader">Loading</div>
      <MiniProfile
        v-if="$store.state.profileList.length > 0"
        v-for="employeeCard in $store.state.profileList"
        :key="employeeCard.id"
        :employeeCard="employeeCard"
        :isActive="employeeCard === $store.state.selectedProfile"
        @select-profile="selectProfile"
      />
    <div class="start-search" v-else>
      Начните поиск
    </div>
  </aside>
</template>

<style scope lang="scss">
  .sidebar{
    height: 100%;
    width: 290px;
    padding: 27px 36px 0 20px;
    border-right: 1px solid #DEDEDD;
  }
  .search{
    display: flex;
    flex-direction: column;
    gap: 22px;
    &-title{
      font-size: 16px;
      font-weight: 600;
      color: #333333;
    }
    &-input{
      width: 240px;
      height: 46px;
      padding: 16px;
      border-radius: 8px;
      border: 1.5px solid #E9ECEF;
      font-size: 14px;
    }
    &-result{
      font-size: 16px;
      font-weight: 600;
      line-height: 22.4px;
    }
  }
  .start-search{
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
    color: #76787D;
  }
  .loader{
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    color: #000000;
    margin: 10px 0;
  }
</style>