<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
export default{
  setup(){
    const store = useStore();

    const inputValue = computed(() => store.state.inputValue);
    const loadProfiles = () => store.dispatch('fetchProfileList', inputValue.value);
    const changeInputValue = (event) => {
         store.commit('setInputValue', event.target.value);
         loadProfiles()
      }

    return{
      inputValue,
      changeInputValue
    }
  }
}
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
    <div class="result-table" v-if="inputValue">
      //:TODO
    </div>
    <div class="result-table-nothing" v-else>
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
  .result-table{

    &-nothing{
      margin-top: 10px;
      font-size: 14px;
      font-weight: 400;
      color: #76787D;
    }
  }
</style>