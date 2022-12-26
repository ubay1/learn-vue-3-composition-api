<template>
  <div class="mt-2">
    <p>Current component: B</p>
    <div>Message is: {{ msg }}</div>
    <input class="px-2 py-1 rounded-md" v-model="msg" />
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const msg = ref('');

    return {
      msg,
    };
  },
};
</script>
