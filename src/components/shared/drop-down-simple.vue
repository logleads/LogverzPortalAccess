<template>
  <div
    ref="select"
    :class="$style['input-drop-down']"
    contenteditable="true"
    @blur="handleBlur"
    @click="toggleShow"
  >
    <label contenteditable="false">
      <input type="text" :value="content" disabled />
      <div>
        <Icon
          v-if="!scopeExpanded"
          name="arrow-down"
          :class="$style['input-arrow-down']"
          :width="12"
          :height="7.7"
        />
        <Icon
          v-else
          name="arrow-up"
          :class="$style['input-arrow-down']"
          :width="12"
          :height="7.7"
        />
      </div>
    </label>
    <div v-show="scopeExpanded" :class="$style['input-unwrapped']">
      <div
        v-for="item in items"
        :key="item + Math.random() * 1000"
        :class="$style['input-unwrapped__item']"
        contenteditable="false"
        @click="handleClick($event, { item, content })"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

import Icon from '~/components/shared/icon.vue';

@Component({
  name: 'DropDownSimple',
  components: { Icon },
})
export default class DropDownSimple extends Vue {
  @Prop({ required: false, type: Boolean }) readonly expanded!: boolean;
  @Prop({ required: false, type: String }) readonly content!: string;
  @Prop({ required: false, type: Array }) readonly items!: Array<string>;

  public scopeExpanded = false;
  $refs!: {
    select: HTMLDivElement;
  };

  public toggleShow(): void {
    this.scopeExpanded = !this.scopeExpanded;
  }

  public handleBlur(): void {
    this.scopeExpanded = false;
  }

  public handleClick(event: Event, payload: { item: string; content: string }): void {
    event.stopPropagation();
    this.$emit('select-value', payload);
    this.$refs.select.blur();
  }

  @Watch('scopeExpanded')
  expandWatch(value: boolean): void {
    if (value) {
      this.$refs.select.focus();
    } else {
      this.$refs.select.blur();
    }
  }
}
</script>

<style module lang="scss">
.input-drop-down {
  max-width: 100%;
  position: relative;

  & input {
    font-weight: 500;
    margin: 9px 0 0 0;
    font-size: 12px;
    line-height: 1;
    width: 100%;
    height: 44px;
    padding-left: 18px;
    border-radius: 5px;
    border: 1px solid rgba(159, 166, 177, 0.22);
    background-color: white;
    color: var(--ink-color);
  }
}

.input-arrow-down {
  position: absolute;
  top: 55%;
  right: 13px;
  cursor: pointer;
}

.input-unwrapped {
  background-color: white;
  position: absolute;
  width: 96%;
  top: 100%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  z-index: 2;
  left: 0;
  max-height: 200px;
  overflow: scroll;
  overflow-x: hidden;

  &__item {
    color: var(--ink-color);
    font-size: 14px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 15px 10px;
    cursor: pointer;

    &:hover {
      background: #bcb9b9;
    }
  }
  &::-webkit-scrollbar {
    width: 3px;
    height: 18px;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--accent-color);
    border-radius: 31px;
  }
  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: var(--accent-color);
  }
}
</style>
