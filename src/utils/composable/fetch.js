import { ref, isRef, unref } from 'vue';
import axios from 'axios';

export function useFetch(url) {
  // const loading = ref(false);
  const data = ref(null);
  const error = ref(null);

  const urlValue = unref(url);
  console.log(urlValue);

  async function doFetch() {
    console.log('retry fetch');
    try {
      await timeout();

      const res = await fetch(urlValue);
      data.value = await res.json();
    } catch (e) {
      error.value = e;
    }
  }

  if (isRef(url)) {
    // setup reactive re-fetch if input URL is a ref
    watchEffect(doFetch);
  } else {
    // otherwise, just fetch once
    doFetch();
  }

  function timeout() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.3) {
          resolve();
        } else {
          reject(new Error('Random Error'));
        }
      }, 300);
    });
  }

  return { data, error, retry: doFetch };
}
