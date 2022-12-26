<template>
  <div class="mt-4">
    <button
      class="bg-blue-500 text-white p-2 rounded-md shadow-md"
      @click="show = !show"
    >
      Show Popup
    </button>
    <div v-if="errors">{{ errors }}</div>
    <LoginPopUp v-if="show && !errors" class="mt-4" />
  </div>
</template>

<script>
import { ref, defineAsyncComponent, onErrorCaptured } from 'vue';
import LoaderComponent from '../../../components/Loader.vue';

const LoginPopupComp = () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(import('./LoginPopUp.vue'));
      }, 2000);
    } catch (error) {
      reject(error);
    }
  });
};
const LoginPopUp = defineAsyncComponent({
  loader: LoginPopupComp,
  loadingComponent: LoaderComponent,
  delay: 0, // delay 100ms sebelum LoaderComponent tampil.
  timeout: 3000, // timeout, jika lebih dari 3000ms component tidak tampil maka akan trigger reject(error)
});
export default {
  components: { LoginPopUp },
  setup() {
    const show = ref(false);
    const errors = ref(null);

    onErrorCaptured((e) => {
      errors.value = e;
    });

    return {
      errors,
      show,
      LoginPopUp,
    };
  },
};
</script>
