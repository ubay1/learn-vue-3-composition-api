import MyPlugin from '../../views/advanced/plugins/MyPlugin.vue';

export default {
  install: (app, options) => {
    // inject ini, bisa kita gunakan untuk SFC component, directive, mixin, provide/inject,

    // component ini yang akan digunakan di mana saja
    app.component('my-plugin', MyPlugin);
    app.mixin({
      data() {
        return {
          dataMixin: 'ini data dari mixin plugin.',
        };
      },
    });
    app.directive('font-sizes', {
      created: (el, binding) => {
        switch (binding.arg) {
          case 'small':
            el.style.fontSize = `${options.small}px`;
            break;
          case 'medium':
            el.style.fontSize = `${options.medium}px`;
            break;
          case 'large':
            el.style.fontSize = `${options.large}px`;
            break;
          case 'xlarge':
            el.style.fontSize = `${options.xlarge}px`;
            break;
        }
      },
    });

    const logout = () => {
      console.log('logout with plugin provide inject');
    };
    app.provide('logoutFromProvide', logout);

    app.config.globalProperties.$t = (key) => {
      // retrieve a nested property in `options`
      // using `key` as the path
      return key.split('.').reduce((o, i) => {
        // console.log(o, i);
        if (o) return o[i];
      }, options);
    };
  },
};
