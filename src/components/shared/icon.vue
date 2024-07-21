<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height">
    <use :xlink:href="`#${name}-icon`" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Icon',
  props: {
    name: {
      required: true,
      type: String,
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
  },
});
</script>
