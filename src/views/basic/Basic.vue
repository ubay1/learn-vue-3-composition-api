<template>
  <Transition name="fade" appear>
    <div class="mt-12">
      <div class="mt-6">
        <div class="font-bold">1. Reactivity</div>
        <div class="bg-white bg-glass p-2">
          pada composition api, ada 2 cara menyimpan nilai pada state. yaitu
          reactive & ref. <br /><br />

          perbedaan reactive dan ref: <br />
          <p>
            1. reactive() hanya berfungsi untuk tipe object (objek, array, dan
            tipe koleksi seperti Map dan Set).
          </p>
          <p class="mt-2">
            2. ref() dapat menampung jenis apapun baik tipe primitif seperti
            string, number, boolean, ataupun object dan array.
          </p>
          <p class="mt-4">
            ref() mengambil argumen dan mengembalikannya dibungkus dalam objek
            ref dengan properti .value
          </p>
        </div>
      </div>

      <div class="mt-6 bg-white bg-glass p-2">
        <div class="text-center text-2xl font-bold">Contoh Reactivity</div>
        <div>{{ msg }}</div>
        <div>{{ name }}</div>
        <div v-for="(item, index) in flowers">{{ index }}: {{ item }}</div>

        <button
          class="
            bg-green-500
            hover:bg-green-600
            shadow-md
            p-1
            rounded-md
            mt-2
            text-white
          "
          @click="add"
        >
          ADD
        </button>
        <div>count: {{ count }}</div>
        <div>computed count: {{ result }}</div>
        <div>computed count2: {{ result2 }}</div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { ref, reactive, toRefs, computed, watchEffect } from 'vue';

export default {
  // setup dijalankan sebelum component dirender
  setup() {
    // ref, inisialisasi awal ref()
    const msg = ref('helo');
    const count = ref(0);
    const addNum = ref(1);

    // method pada composition api
    const add = () => {
      result2.value = 4; // set computed result2
      count.value++;
    };

    // computed
    const result = computed(() => count.value + addNum.value);
    const result2 = computed({
      set: (val) => (addNum.value = val),
      get: () => count.value + addNum.value,
    });

    // watchEffect
    // watchEffect ini kalo di react mirip seperti useEffect
    const watchCount = watchEffect(() => {
      console.log(count.value);
    });

    // jika kita me-returnnya dengan menggunakan rest ...user, maka reactivity nya hilang. untuk itu caranya kita bisa gunakan toRefs()
    const user = reactive({
      name: 'ubay dillah',
      age: 25,
    });
    const flowers = reactive(['mawar', 'melati']);

    setTimeout(() => {
      msg.value = 'hi'; // untuk ref, kita merubah nilainya dengan menambahkan .value ..
      user.name = 'ubay delonge';
      flowers[0] = 'anggrek';
    }, 2000);

    return {
      msg,
      ...toRefs(user),
      flowers,
      count,
      add,
      result,
      result2,
    };
  },

  mounted() {},
};
</script>
