<template>
  <div style="margin-bottom: 10px">
    <button
      class="light-mode"
      :class="{ 'dark-mode': settings.theme === 'dark' }"
      @click="toggleMode"
    >
      <Text />
    </button>
  </div>
</template>

<script>
import Text from './Text.vue';
import { ref, reactive, inject, toRefs, computed } from 'vue';

export default {
  components: {
    Text,
  },
  setup() {
    const settings = inject('settings');

    const siteTheme = computed(() => {
      return settings.theme === 'dark' ? 'light' : 'dark';
    });

    const toggleMode = () => {
      settings.theme = siteTheme.value;
    };

    return { settings, toggleMode };
  },
};
</script>

<style scoped>
.light-mode {
  background-color: '#fff';
  box-shadow: 0px 2px 4px grey;
  padding: 10px;
  border: unset;
  border-radius: 10px;
}
.dark-mode {
  color: white;
  background-color: black;
  box-shadow: 0px 2px 4px grey;
}
</style>
