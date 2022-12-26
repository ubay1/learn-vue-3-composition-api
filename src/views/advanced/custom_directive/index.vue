<template>
  <Transition name="fade" appear>
    <div class="mt-12">
      <div class="mt-6">
        <div class="font-bold">Suspense</div>
        <div class="bg-white bg-glass p-2">
          custom directive berguna untuk memanipulasi element dom, contoh dari
          directive diantaranya:
          <b>v-model, v-show, dll.</b>. <br />
          dengan custom directive kita dapat membuat directive kita sendiri.
          contoh disini saya membuat custom directive v-focus. <br /><br />

          ada 3 cara menggunakan directive : <br />
          1. menggunakan setup didalam tag script. <br />
          2. menggunakan directive options diluar setup() {} <br />
          3. menggunakan global app.directive({}).
          <br /><br />

          <input v-focus type="text" class="border-2 border-black px-1" />
          <div v-color="color" v-fontsize:[fontSize]>Hallo</div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { ref, reactive, inject, toRefs, onMounted } from 'vue';
export default {
  setup() {
    const color = ref('black');
    const fontSize = ref('small');

    onMounted(() => {
      setTimeout(() => {
        color.value = 'green';
        fontSize.value = 'large';
      }, 2000);
    });
    return {
      color,
      fontSize,
    };
  },
  directives: {
    focus: {
      mounted: (el) => el.focus(),
    },
  },
};
</script>
