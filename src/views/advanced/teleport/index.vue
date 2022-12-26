<template>
  <Transition name="fade" appear>
    <div class="mt-12">
      <div class="mt-6">
        <div class="font-bold">Teleport</div>
        <div class="bg-white bg-glass p-2">
          Teleport adalah komponen bawaan yang memungkinkan kita untuk
          "menteleportasi" bagian dari template komponen ke dalam DOM yang ada
          di luar hierarki DOM komponen tersebut. <br /><br />

          <button
            @click="showModal = true"
            class="bg-red-500 p-2 rounded-md text-white"
          >
            show modal
          </button>
        </div>

        <Teleport to="#modal">
          <Modal
            :isShowModal="showModal"
            v-if="showModal"
            @closeModal="closeModal"
          >
            <template #header>Test Teleport</template>
            <template #body>show modal</template>
            <template #footer>close</template>
          </Modal>
        </Teleport>
      </div>
    </div>
  </Transition>
</template>

<script>
import { ref, onMounted } from 'vue';
import Modal from '../../../components/atoms/Modal.vue';

export default {
  components: {
    Modal,
  },
  setup(ctx) {
    const showModal = ref(false);

    const closeModal = (val) => {
      console.log(val);
      showModal.value = val;
    };

    return {
      showModal,
      closeModal,
    };
  },
};
</script>
