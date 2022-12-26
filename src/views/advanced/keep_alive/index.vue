<template>
  <Transition name="fade" appear>
    <div class="mt-12">
      <div class="mt-6">
        <div class="font-bold">Keep Alive</div>
        <div class="bg-white bg-glass p-2">
          KeepAlive adalah komponen bawaan yang memungkinkan kita untuk
          meng-cache instance komponen secara kondisional saat beralih secara
          dinamis di antara beberapa komponen. <br /><br />

          <label>
            <input type="radio" v-model="current" value="CompA" />
            A
          </label>
          <label>
            <input type="radio" v-model="current" value="CompB" />
            B
          </label>
          <KeepAlive>
            <component :is="current"></component>
          </KeepAlive>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { ref, onActivated, onDeactivated } from 'vue';
import CompA from './CompA.vue';
import CompB from './CompB.vue';

export default {
  components: {
    CompA,
    CompB,
  },
  setup() {
    const current = ref('CompA');

    return {
      current,
    };
  },
};
</script>
