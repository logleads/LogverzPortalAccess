<template>
  <div :class="$style['container']">
    <div v-if="type === 'password'" :class="$style['password-icon']">
      <icon name="lock" />
    </div>
    <input
      :type="type"
      :class="[$style['input'], { [$style['input__error']]: error }]"
      :value="value"
      :name="name"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import Icon from './icon.vue';

export default Vue.extend({
  name: 'Input',
  components: { Icon },
  props: {
    value: String as PropType<string>,
    type: {
      type: String as PropType<'text' | 'password'>,
      default: 'text',
    },
    name: String as PropType<string>,
    error: Boolean as PropType<boolean>,
    disabled: Boolean as PropType<boolean>,
  },
});
</script>

<style module lang="scss">
$inputPadding: 16px;
$iconSize: 16px;

.container {
  position: relative;
}

.password-icon {
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: $inputPadding;
  width: $iconSize;
  height: $iconSize;
}

.input {
  background: #ffffff;
  border: 1px solid var(--border-color);
  cursor: pointer;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 500;
  padding: 0 $inputPadding;
  width: 100%;
  height: 44px;
  transition: background 0.1s linear;
  &__error {
    border: 1px solid red;
  }

  &[type='password'] {
    padding-left: $inputPadding + $iconSize + 10px;
    letter-spacing: 0.135em;
    line-height: 2;
  }
}
</style>
