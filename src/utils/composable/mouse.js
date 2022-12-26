import { ref } from 'vue';
import { useEventListener } from './event';

// composable function harus diawali dengan "use"
export function useMouse() {
  // state encapsulated and managed by the composable
  const x = ref(0);
  const y = ref(0);

  // a composable can update its managed state over time.
  function update(event) {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  useEventListener(window, 'mousemove', (event) => {
    x.value = event.pageX;
    y.value = event.pageY;
  });

  // expose managed state as return value
  return { x, y };
}
