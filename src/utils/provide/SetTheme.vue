<template>
  <slot />
</template>
<script>
import {
  ref,
  reactive,
  toRefs,
  provide,
  computed,
  watch,
  watchEffect,
} from 'vue';

// provide dan inject sama seperti menggunakan context di react.
export default {
  setup() {
    const settings = reactive({
      theme: 'light',
      text: 'btn theme is ',
    });

    provide('settings', settings);

    watch(settings, (settings) => {
      console.log(`setting theme: theme diubah ke - ${settings.theme}`);
    });
  },
};
</script>
