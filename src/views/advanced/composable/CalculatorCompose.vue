<template>
  <div
    class="bg-blue-400 pb-4 rounded-md shadow-lg p-2 mt-2 flex flex-col gap-2"
  >
    <div class="bg-gray-300 rounded-md text-right">
      <div class="px-2 py-6 text-2xl">{{ total }}</div>
    </div>
    <div class="grid grid-rows-2 gap-2">
      <input
        type="number"
        class="p-1 rounded bg-gray-100 focus:border-sky-500"
        v-model="nilaiA"
      />
      <input
        type="number"
        class="p-1 rounded bg-gray-100 focus:border-sky-500"
        v-model="nilaiB"
      />
    </div>
    <div class="flex justify-between">
      <button
        @click="reset"
        class="bg-red-500 h-10 w-10 rounded-full text-white font-bold pb-0"
      >
        C
      </button>
      <button
        @click="tambah"
        class="
          bg-gray-300
          h-10
          w-10
          rounded-full
          text-black text-2xl
          font-bold
          pb-1
        "
      >
        +
      </button>
      <button
        @click="kurang"
        class="
          bg-gray-300
          h-10
          w-10
          rounded-full
          text-black text-3xl
          font-bold
          pb-5
        "
      >
        -
      </button>
      <button
        @click="kali"
        class="
          bg-gray-300
          h-10
          w-10
          rounded-full
          text-black text-2xl
          font-bold
          pt-1
        "
      >
        *
      </button>
      <button
        @click="bagi"
        class="
          bg-gray-300
          h-10
          w-10
          rounded-full
          text-black text-xl
          font-bold
          pb-1
        "
      >
        /
      </button>
    </div>
  </div>
</template>

<script>
import { useCalculator } from '../../../utils/composable/calculator';
export default {
  setup() {
    const { nilaiA, nilaiB, tambah, kurang, kali, bagi, reset, total } =
      useCalculator();

    return {
      nilaiA,
      nilaiB,
      tambah,
      kurang,
      kali,
      bagi,
      reset,
      total,
    };
  },
};
</script>
