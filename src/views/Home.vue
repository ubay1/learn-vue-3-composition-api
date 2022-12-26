<template>
  <Transition name="slide-fade" appear>
    <div class="flex flex-col justify-center mt-12 gap-4">
      <router-link
        to="/basic"
        class="bg-glass h-20 px-6 flex justify-between items-center"
      >
        <div class="text-white text-xl">Basic</div>
        <svg-icon name="chevron-right" color="white" size="18"></svg-icon>
      </router-link>

      <router-link
        to="/advanced"
        class="bg-glass h-20 px-6 flex justify-between items-center"
      >
        <div class="text-white text-xl">Advanced</div>
        <svg-icon name="chevron-right" color="white" size="18"></svg-icon>
      </router-link>
    </div>
  </Transition>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
.bg-glass {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(3.7px);
  border: 2px solid rgba(255, 255, 255, 0.1);
}
</style>
