<template>
  <div>
    <input
      type="text"
      id="inputs"
      v-model="input"
      class="input-test"
      placeholder="input apa aja"
    />
    <!-- @keydown="validateInput($event)" -->

    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import { ref, computed, onMounted, inject, watchEffect } from 'vue';
import { restrictInputMobile } from './utils/removeChar.js';

export default {
  components: {},
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
  setup() {
    const input = ref('');

    const exceludeKey = ['Backspace'];

    watchEffect(() => {
      const res = restrictInputMobile(input.value);
      const aa = document.getElementById('inputs');
      if (aa) {
        aa.value = res;
        input.value = res;
      }

      console.log('watch = ', aa ? aa.value : '');
    });

    function validateInput(evt) {
      // checkRegexInputPasswordSpecialChar(val);
      const regex = /[a-zA-Z0-9!@#$%^&*]+(?:_[a-zA-Z0-9!@#$%^&*])*$/;

      // console.log(regex.test(evt.key));

      if (regex.test(evt.key)) {
        if (exceludeKey.includes(evt.key)) {
          return true;
        } else if ((evt.ctrlKey || evt.metaKey) && evt.key === 'a') {
          return true;
        }

        return true;
      } else {
        return evt.preventDefault();
      }
    }

    return {
      input,
      validateInput,
    };
  },
};
</script>

<style>
.input-test {
  border: 1px solid black;
  border-radius: 5px;
  padding: 6px;
  width: 100%;
}
</style>
