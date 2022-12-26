<template>
  <div>
    <Navbar />
    <main class="bg-image p-4 text-black h-full min-h-screen">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import Navbar from '../components/atoms/Navbar.vue';
export default {
  components: {
    Navbar,
  },
  setup() {},
};
</script>

<style>
.bg-image {
  background: url('https://coreui.io/images/ogimages/vue_1200_600.jpg') center
    no-repeat;
  background-size: cover;
}
</style>
