<template>
  <p>
    {{ `${settings.text} ${settings.theme}` }}
  </p>
</template>

<script>
import { ref, reactive, inject, toRefs, computed } from 'vue';
export default {
  setup() {
    const settings = inject('settings');

    return { settings };
  },
};
</script>
