<template>
  <div class="bg-gray-400 p-2 mt-2">
    <div v-if="error">
      <p>Oops! Error encountered: {{ error.message }}</p>
      <button class="bg-black text-white p-1" @click="retry">Retry</button>
    </div>
    <div v-else-if="data" class="flex flex-col">
      <div>data fetching:</div>
      <div class="flex flex-wrap">{{ data.message[0] }}</div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { useFetch } from '../../../utils/composable/fetch';
export default {
  setup() {
    const { data, error, retry } = useFetch(
      'https://dog.ceo/api/breeds/image/random/1'
    );

    return { data, error, retry };
  },
};
</script>
