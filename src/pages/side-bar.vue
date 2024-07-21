<template>
  <aside :class="$style['sidebar']">
    <button
      type="button"
      :class="[$style['sidebar__item'], iconSelected === 'aws' && $style['sidebar__item--active']]"
      @click="() => selectAdvertisement('aws')"
    >
      <div v-html="sideBarIcon()"></div>
    </button>
    <button
      v-for="(item, key) in advertisement()"
      :key="key"
      type="button"
      :class="[$style['sidebar__item'], iconSelected === key && $style['sidebar__item--active']]"
      @click="() => selectAdvertisement(key)"
    >
      <div v-html="item.sideBarIcon"></div>
    </button>
  </aside>
</template>

<script lang="ts">
import config from '~/config.json';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SideBar',
  setup(props, { emit }) {
    const iconSelected = ref('aws');

    function advertisement() {
      return config.advertisement;
    }

    function sideBarIcon() {
      return config.sideBarIcon;
    }

    function selectAdvertisement(id: string) {
      iconSelected.value = id;
      emit('select-advertisement', id);
    }
    return {
      selectAdvertisement,
      sideBarIcon,
      advertisement,
      iconSelected,
    };
  },
});
</script>

<style module lang="scss">
.sidebar {
  width: 77px;
  background-color: #fff;
  border: 1px solid #e5eaf0;
  display: flex;
  flex-direction: column;

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    border-left: 3px solid #e5eaf0;
    border-bottom: 1px solid #e5eaf0;
    color: #98a4b5;
    cursor: pointer;

    &--active {
      border-left-color: var(--accent-color);
      color: var(--accent-color);
    }
  }
}
</style>
