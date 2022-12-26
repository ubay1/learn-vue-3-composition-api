<template>
  <div>
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import { ref, computed, onMounted, inject } from 'vue';

export default {
  components: {},
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
  setup() {
    return {};
  },
};
</script>
