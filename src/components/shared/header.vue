<template>
  <div :class="$style['header']">
    <img :class="$style['header__logo']" :src="require('~/assets/images/logo_light.png')" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderComponent',
});
</script>

<style module lang="scss">
.header {
  //height: 73px;
  background-color: #595959;
  display: flex;
  align-items: center;
  //padding: 0 45px;

  &__logo {
    width: 120px;
    height: 50px;
  }
}
</style>
