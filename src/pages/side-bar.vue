<template>
  <aside :class="$style['sidebar']">
    <button
      type="button"
      :class="[$style['sidebar__item'], iconSelected === 'aws' && $style['sidebar__item--active']]"
      @click="() => selectAdvertisement('aws')"
    >
      <p v-html="sideBarIcon"></p>
    </button>
    <button
      v-for="(item, key) in advertisement"
      :key="key"
      type="button"
      :class="[$style['sidebar__item'], iconSelected === key && $style['sidebar__item--active']]"
      @click="() => selectAdvertisement(key)"
    >
      <p v-html="item.sideBarIcon"></p>
    </button>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Emit } from 'vue-property-decorator';

import DropDownSimple from '~/components/shared/drop-down-simple.vue';
import Header from '~/components/shared/header.vue';
import Icon from '~/components/shared/icon.vue';
import Input from '~/components/shared/input.vue';
import InputContainer from '~/components/shared/input-container.vue';
import config from '~/config.json';

@Component({
  name: 'SideBar',
  components: { Input, Header, Icon, InputContainer, DropDownSimple },
})
export default class SideBar extends Vue {
  public iconSelected: string = 'aws';

  get advertisement(): Record<string, any> {
    return config.advertisement;
  }

  get sideBarIcon(): string {
    return config.sideBarIcon;
  }

  @Emit('select-advertisement')
  selectAdvertisement(id: string): string {
    this.iconSelected = id;
    return id;
  }
}
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
