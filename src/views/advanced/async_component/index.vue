<template>
  <Transition name="fade" appear>
    <div class="mt-12">
      <div class="mt-6">
        <div class="font-bold">Define Async Component</div>
        <div class="bg-white bg-glass p-2">
          define async component berguna membuat component kita menjadi lazy,
          dia akan tampil ketika dibutuhkan saja, contohnya jika ingin
          menampilkan component modal, component snackbar, dll. <br /><br />

          <ShowLoginForm />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { ref, reactive, inject, toRefs, computed } from 'vue';
import ShowLoginForm from './ShowLoginForm.vue';

export default {
  components: {
    ShowLoginForm,
  },
  setup() {},
};
</script>
