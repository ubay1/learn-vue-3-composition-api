import { createApp } from 'vue';
import router from './router';
import FirstPlugin from './utils/plugins/FirstPlugin.js';
import LayoutDefault from './layouts/Default.vue';
import App from './App.vue';

import './assets/global.css';

import icons from 'v-svg-icons';

const app = createApp(App);

app.use(router);

app.component('svg-icon', icons);
app.component('layout-default', LayoutDefault);

app.directive('remove-char', {
  updated: (el, binding) => {
  },
});

app.directive('color', {
  created: (el, binding) => {
    el.style.color = binding.value;
  },
  updated: (el, binding) => {
    el.style.color = binding.value;
    console.log('value = ', binding.value);
    console.log('old value = ', binding.oldValue);
  },
});

app.directive('fontsize', {
  created: (el, binding) => {
    let size = 0;
    if (binding.arg === 'small') {
      size = 12;
    } else if (binding.arg === 'medium') {
      size = 18;
    } else {
      size = 24;
    }
    el.style.fontSize = `${size}px`;
  },
  updated: (el, binding) => {
    let size = 0;
    if (binding.arg === 'small') {
      size = 12;
    } else if (binding.arg === 'medium') {
      size = 18;
    } else {
      size = 24;
    }
    el.style.fontSize = `${size}px`;
  },
});

app.use(FirstPlugin, {
  small: 10,
  medium: 16,
  large: 25,
  xlarge: 32,
  greetings: {
    hello: 'Bonjour!',
  },
});

app.mount('#app');
