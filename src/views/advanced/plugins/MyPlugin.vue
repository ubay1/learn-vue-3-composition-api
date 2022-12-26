<template>
  <div>
    <div class="bg-yellow-500 p-4 text-center">
      <slot name="header" />
    </div>
    <div class="bg-yellow-100 px-2 py-2">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>
