<template>
  <div class="flex flex-row">
    <div v-for="(item, idx) in dataDog" class="mr-2">
      <img :src="item" class="h-16 w-16 object-cover" alt="" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  async setup() {
    const dataDog = ref();

    const loadData = await axios.get(
      'https://dog.ceo/api/breeds/image/random/2'
    );
    dataDog.value = loadData.data.message;

    return {
      dataDog,
    };
  },
};
</script>
