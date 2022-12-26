import { ref } from 'vue';
import { useEventListener } from './event';

// composable function harus diawali dengan "use"
export function useCalculator() {
  // state encapsulated and managed by the composable
  const nilaiA = ref(0);
  const nilaiB = ref(0);
  const total = ref(0);

  // a composable can update its managed state over time.
  const tambah = () => {
    total.value = nilaiA.value + nilaiB.value;
  };

  const kurang = () => {
    total.value = nilaiA.value - nilaiB.value;
  };

  const kali = () => {
    total.value = nilaiA.value * nilaiB.value;
  };

  const bagi = () => {
    total.value = nilaiA.value / nilaiB.value;
  };

  const reset = () => {
    total.value = 0;
    nilaiA.value = 0;
    nilaiB.value = 0;
  };

  return { nilaiA, nilaiB, tambah, kurang, kali, bagi, reset, total };
}
