<template>
  <Transition name="fade">
    <div v-if="showModal" class="modal-backdrop">
      <div class="modal">
        <header class="modal-header">
          <slot name="header"> This is the default title! </slot>
          <button type="button" class="btn-close" @click="closeModal">x</button>
        </header>

        <section class="modal-body">
          <slot name="body"> This is the default body! </slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer"> This is the default footer! </slot>
          <button type="button" class="btn-green" @click="closeModal">
            Close Modal
          </button>
        </footer>
      </div>
    </div>
  </Transition>
</template>

<script>
import { ref, onMounted } from 'vue';
export default {
  props: {
    isShowModal: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, ctx) {
    const showModal = ref(false);

    onMounted(() => {
      showModal.value = props.isShowModal;
    });

    const closeModal = () => {
      ctx.emit('closeModal', false);
    };

    return {
      showModal,
      closeModal,
    };
  },
};
</script>
