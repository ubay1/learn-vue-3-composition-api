<template>
  <Transition name="fade" appear>
    <div class="mt-12">
      <div class="mt-6">
        <div class="font-bold">Suspense</div>
        <div class="bg-white bg-glass p-2">
          Suspense ini berguna untuk fetching data dari suatu api, biasanya kita
          di vue 2 option api mengandalkan state di data(). contoh: <br />
          <code class="bg-red-500 text-sm text-white">isLoading: false </code>
          <br />
          jika isLoading true maka tampilkan loading, jika false tampilkan data
          hasil fetching.. <br /><br />

          <Suspense>
            <template #default>
              <DataDog />
            </template>
            <template #fallback>
              <LoadingDataDog />
            </template>
          </Suspense>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { ref, reactive, inject, toRefs, computed } from 'vue';
import DataDog from './DataDog.vue';
import LoadingDataDog from './LoadingDataDog.vue';
export default {
  components: {
    DataDog,
    LoadingDataDog,
  },
  setup() {},
};
</script>
