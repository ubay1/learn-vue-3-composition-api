<template>
  <div class="mt-2">
    <p>Current component: A</p>
    <div>count: {{ count }}</div>
    <button
      class="h-10 w-10 bg-red-500 text-white text-2xl rounded-full pb-1"
      @click="count++"
    >
      +
    </button>
  </div>
</template>
<script>
import { ref, onActivated } from 'vue';

export default {
  setup() {
    const count = ref(0);

    onActivated(() => {
      console.log(`CompA active`);
    });

    return {
      count,
    };
  },
};
</script>
