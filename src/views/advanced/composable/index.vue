<template>
  <Transition name="fade" appear>
    <div class="mt-12">
      <div class="mt-6">
        <div class="font-bold">Suspense</div>
        <div class="bg-white bg-glass p-2">
          Composable ini berguna untuk kita gunakan kembali suatu function ke
          berbagai component yang kita miliki. <br />
          Misalnya, kita ingin memformat tanggal di banyak component, jadi untuk
          itu kita cukup mengekstrak fungsi yang dapat digunakan kembali. <br />
          contohnya seperti library <b>moment()</b>.
          <br />
          composable harus menggunakan kalimat 'use'. misal 'useCalculator'.
          <br />
          composable ini sangat mirip seperti hooks milik reactjs. <br />
          bisa juga cek cek disini, jika kita tidak ingin membuat sendiri.
          <br />
          <a href="https://vueuse.org/" class="bg-blue-200">vue use</a>
          <br /><br />

          <MouseCompose />
          <CalculatorCompose />
          <FetchCompose />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { ref, reactive, inject, toRefs, computed } from 'vue';
import MouseCompose from './MouseCompose.vue';
import CalculatorCompose from './CalculatorCompose.vue';
import FetchCompose from './FetchCompose.vue';
export default {
  components: {
    MouseCompose,
    CalculatorCompose,
    FetchCompose,
  },
  setup() {},
};
</script>
