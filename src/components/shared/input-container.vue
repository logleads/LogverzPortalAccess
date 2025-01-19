<template>
  <div :class="$style['container']">
    <div :class="$style['container__label']">
      {{ label }}
      <span :class="$style['container__label__icon']">
        <slot name="icon" />
      </span>
    </div>
    <slot name="input" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InputContainer',
  props: {
    label: String,
  },
});
</script>

<style module lang="scss">
.container {
  display: flex;
  flex-direction: column;

  &__label {
    display: flex;
    align-items: center;
    margin-bottom: 9px;
    font-size: 14px;
    font-weight: bold;
    margin-top: 5px;
    color: var(--ink-color);
    &__icon {
      margin-left: 5px;
    }
  }
}
</style>
