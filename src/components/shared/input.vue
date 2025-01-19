<template>
  <div :class="$style['container']">
    <div v-if="type === 'password'" :class="$style['password-icon']">
      <icon name="lock" />
    </div>
    <input
      :type="type"
      :class="[$style['input'], { [$style['input__error']]: error }]"
      :value="modelValue"
      :name="name"
      :disabled="disabled"
      @input="handleInput"
    />
  </div>
</template>

<script lang="ts">
import Icon from './icon.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Input',
  components: { Icon },
  props: {
    modelValue: String,
    type: {
      type: String,
      default: 'text',
    },
    name: String,
    error: Boolean,
    disabled: Boolean,
  },
  setup(prop, { emit }) {
    function handleInput(e) {
      emit('update:modelValue', e.target.value);
    }
    return { handleInput };
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
  font-size: 14px;
  padding: 0 $inputPadding;
  width: 100%;
  height: 44px;
  font-family: 'Roboto', sans-serif !important;
  font-weight: 400;
  font-style: normal;
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
