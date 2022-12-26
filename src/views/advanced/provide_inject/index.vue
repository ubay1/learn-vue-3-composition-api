<template>
  <Transition name="fade" appear>
    <div class="mt-12">
      <div class="mt-6">
        <div class="font-bold">Provide Inject</div>
        <div class="bg-white bg-glass p-2">
          Biasanya, ketika kita perlu meneruskan data dari parent ke child
          komponent, kita menggunakan props. Namun, bayangkan kasus di mana kita
          memiliki pohon komponen besar, dan komponen yang sangat bersarang
          membutuhkan sesuatu dari komponen parent yang jauh. Dengan hanya
          props, kita harus melewati prop yang sama di seluruh rantai induk:
          berikut contohnya: <br />
          <br />
          <div
            class="
              bg-white bg-opacity-100
              rounded-b-lg
              p-2
              flex flex-col
              justify-center
              items-center
            "
          >
            <div>
              <img
                src="https://vuejs.org/assets/prop-drilling.11201220.png"
                class="w-full object-contain mb-4 sm:w-1/2 sm:m-auto"
                alt=""
              />
              <img
                src="https://vuejs.org/assets/provide-inject.3e0505e4.png"
                class="w-full object-contain sm:w-1/2 sm:m-auto"
                alt=""
              />
            </div>

            <SetTheme>
              <ThemeButton class="mt-3" />
            </SetTheme>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { ref, reactive, inject, toRefs, computed } from 'vue';
import SetTheme from '../../../utils/provide/SetTheme.vue';
import ThemeButton from './ThemeButton.vue';

export default {
  components: {
    SetTheme,
    ThemeButton,
  },
  setup() {},
};
</script>
