<template>
  <button
    type="button"
    :class="[
      $style['button'],
      {
        [$style['custom']]: cookiedisabled,
      },
    ]"
    :disabled="disabled"
    v-on="!cookiedisabled ? { click: () => callback() } : {}"
  >
    <template v-if="displayLoader"><Loader /></template>
    <template v-else>{{ text }}</template>
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import Loader from '~/components/shared/loader.vue';

export default Vue.extend({
  name: 'ButtonComponent',
  components: { Loader },
  props: {
    text: String as PropType<string>,
    className: String as PropType<string>,
    callback: Function,
    disabled: Boolean as PropType<boolean>,
    displayLoader: Boolean as PropType<boolean>,
    cookiedisabled: Boolean as PropType<boolean>,
  },
});
</script>

<style module lang="scss">
.button {
  background-color: #88c4be;
  border-radius: 5px;
  font-weight: bold;
  color: #fff;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.1s linear;
  cursor: pointer;
}
.custom {
  background-color: gray;
}
</style>
