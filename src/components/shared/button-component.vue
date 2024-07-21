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
import Loader from '~/components/shared/loader.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ButtonComponent',
  components: { Loader },
  props: {
    text: String,
    className: String,
    callback: Function,
    disabled: Boolean,
    displayLoader: Boolean,
    cookiedisabled: Boolean,
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
