<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height">
    <use :xlink:href="`#${name}-icon`" />
  </svg>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'Icon',
  props: {
    name: {
      required: true,
      type: String as PropType<string>,
    },
    width: {
      type: Number as PropType<number>,
    },
    height: {
      type: Number as PropType<number>,
    },
  },
});
</script>
