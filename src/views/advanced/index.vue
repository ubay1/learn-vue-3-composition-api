<template>
  <Transition name="slide-fade-top" appear>
    <div class="flex flex-col justify-center mt-12 gap-4">
      <router-link
        v-for="(item, index) in links"
        :key="item.id"
        :to="item.to"
        class="bg-glass h-20 px-6 flex justify-between items-center"
      >
        <div class="text-white text-xl">{{ item.title }}</div>
        <svg-icon name="chevron-right" color="white" size="18"></svg-icon>
      </router-link>
    </div>
  </Transition>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const links = ref([
      {
        id: 1,
        title: 'Provide/Inject',
        to: '/provide_inject',
      },
      {
        id: 2,
        title: 'Async Component',
        to: '/async_component',
      },
      {
        id: 3,
        title: 'Suspense',
        to: '/suspense',
      },
      {
        id: 4,
        title: 'Composable',
        to: '/composable',
      },
      {
        id: 5,
        title: 'Custom Directive',
        to: '/custom_directive',
      },
      {
        id: 6,
        title: 'Plugins',
        to: '/plugins',
      },
      {
        id: 7,
        title: 'Keep Alive',
        to: '/keep_alive',
      },
      {
        id: 8,
        title: 'Teleport',
        to: '/teleport',
      },
    ]);

    return {
      links,
    };
  },
};
</script>
