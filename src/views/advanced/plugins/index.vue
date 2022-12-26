<template>
  <Transition name="fade" appear>
    <div class="mt-12">
      <div class="mt-6">
        <div class="font-bold">Plugins</div>
        <div class="bg-white bg-glass p-2">
          Plugins sangat berguna untuk menambahkan kefungsionalan level-global
          ke dalam Vue. <br />
          di plugin kita dapat menambahkan
          <b>
            function, custom directive, component, provide inject, mixin,dan
            metode instance.
          </b>
          <br /><br />

          <!-- load plugins -->
          <my-plugin>
            <template #header>
              <p v-font-sizes:xlarge>Plugin Is Cool</p>
            </template>
            <template #content>
              <h1>{{ $t('greetings.hello') }}</h1>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
              <br /><br />
              {{ dataMixin }}

              <br /><br />
              <button
                @click="logoutFromProvide"
                class="bg-red-500 text-white p-1 rounded-md"
              >
                Logout
              </button>
            </template>
          </my-plugin>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { ref, reactive, inject, toRefs, computed } from 'vue';
export default {
  setup() {
    const logoutFromProvide = inject('logoutFromProvide');

    return {
      logoutFromProvide,
    };
  },
};
</script>
