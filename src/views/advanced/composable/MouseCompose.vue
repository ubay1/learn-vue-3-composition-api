<template>
  <div class="bg-gray-400 p-2 mt-2">
    mouse position :
    {{ x }} {{ y }}
  </div>
</template>

<script>
import { useMouse } from '../../../utils/composable/mouse';
export default {
  setup() {
    const { x, y } = useMouse();

    return { x, y };
  },
};
</script>
