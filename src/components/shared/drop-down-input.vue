<template>
  <div
    ref="select"
    :class="$style['input-drop-down']"
    contenteditable="true"
    @blur="handleBlur"
    @click="toggleShow"
  >
    <label contenteditable="false">
      <input type="text" disabled :value="selectedValue || ''" />
      <div v-if="!scopeExpanded">
        <Icon name="arrow-down" :class="$style['input-arrow-down']" :width="9" :height="6" />
      </div>
      <div v-else>
        <Icon name="arrow-up" :class="$style['input-arrow-down']" :width="9" :height="6" />
      </div>
    </label>
    <div
      v-if="scopeExpanded"
      contenteditable="false"
      :class="[$style['input-unwrapped'], { [$style['up-direction']]: direction }]"
    >
      <div
        v-for="(item, i) in items"
        :key="item"
        :class="$style['input-unwrapped__item']"
        @click="handleClick($event, item)"
      >
        <template v-if="names">
          {{ names[i] }}
        </template>
        <template v-else>
          {{ item }}
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Icon from '~/components/shared/icon.vue';

import { defineComponent, watch, Ref, ref } from 'vue';

export default defineComponent({
  name: 'DropDownInput',
  components: { Icon },
  props: {
    items: {
      type: Array<string>,
      required: true,
    },
    direction: {
      type: Boolean,
      required: false,
    },
    selectedField: {
      type: String,
      required: false,
    },
    names: {
      type: Array<string>,
      required: false,
    },
  },
  setup(props, { emit }) {
    const scopeExpanded = ref(false);

    const select: Ref<HTMLDivElement | null> = ref(null);

    function selectedValue() {
      if (!props.names) {
        return props.selectedField;
      } else if (props.selectedField) {
        return props.names[props?.items?.indexOf(props.selectedField)];
      } else {
        return '';
      }
    }

    function toggleShow(): void {
      scopeExpanded.value = !scopeExpanded.value;
    }

    function handleClick(event: Event, item: string) {
      event.stopPropagation();
      emit('select', item);
      select.value?.blur();
    }
    watch(scopeExpanded, (value: boolean) => {
      if (value) {
        select.value?.focus();
      } else {
        select.value?.blur();
      }
    });

    function handleBlur(): void {
      scopeExpanded.value = false;
    }
    return {
      scopeExpanded,
      select,
      selectedValue,
      toggleShow,
      handleClick,
      handleBlur,
    };
  },
});
</script>

<style module lang="scss">
.input-drop-down {
  max-width: 100%;
  position: relative;

  & input {
    font-weight: 500;
    font-size: 12px;
    line-height: 1;
    width: 100%;
    height: 44px;
    padding-left: 18px;
    margin: 12px 0;
    border-radius: 5px;
    border: 1px solid rgba(159, 166, 177, 0.22);
  }

  &:before {
    content: '';
    width: 1px;
    height: 21px;
    background-color: rgba(159, 166, 177, 1);
    position: absolute;
    top: 35%;
    right: 32.5px;
  }
}

.input-arrow-down {
  position: absolute;
  top: 48%;
  right: 13px;
  cursor: pointer;
}

.input-unwrapped {
  background-color: white;
  position: absolute;
  width: 87.5%;
  top: 85%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  z-index: 2;
  left: 0;
  max-height: 200px;
  overflow: scroll;
  overflow-x: hidden;

  &.up-direction {
    top: -111%;
  }

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
