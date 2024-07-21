<template>
  <div :class="$style['aws-page']">
    <div :class="$style['google-block']">
      <div :class="$style['google-block-all']">
        <div :class="$style['google-header']"></div>
        <div :class="$style['google-body']">
          <p>{{ title }}</p>
          <button :class="$style['google-btn']" @click="openGoogleAuthLink">
            <p v-html="loginButtonIcon"></p>
            <span>{{ btnText }}</span>
          </button>
          <span :class="$style['google-body_text']">{{ bodyText }}</span>
        </div>
      </div>
      <div :class="$style['google-block__ad']">
        <span v-html="advertisementHTML"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'Tab',
  props: {
    title: {
      type: String,
      required: true,
    },
    btnText: {
      type: String,
      required: true,
    },
    bodyText: {
      type: String,
      required: true,
    },
    advertisementHTML: {
      type: String,
      required: true,
    },
    loginButtonIcon: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    advertisementId: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    onMounted(() => {
      let a: any = window,
        g;
      let l: any = {
        zones: [],
        prefix:
          a.reviveAsync[props.advertisementId].name +
          '-' +
          a.reviveAsync[props.advertisementId].id +
          '-',
      };
      const q = new RegExp('^' + a.reviveAsync[props.advertisementId].getDataAttr('(.*)') + '$');
      let e = document.querySelectorAll(
        'ins[' +
          a.reviveAsync[props.advertisementId].getDataAttr('id') +
          "='" +
          props.advertisementId +
          "']",
      );

      const n = e[0];
      n.setAttribute(a.reviveAsync[props.advertisementId].getDataAttr('loaded'), '0');

      let s;
      let k: any = a.reviveAsync[props.advertisementId].getDataAttr('seq');

      if (n.hasAttribute(k)) {
        s = n.getAttribute(k);
      } else {
        s = a.reviveAsync[props.advertisementId].seq++;
        n.setAttribute(k, s as any);
        n.id = l.prefix + s;
      }
      for (var h = 0; h < n.attributes.length; h++) {
        if ((g = n.attributes[h].name.match(q))) {
          if ('zoneid' === g[1]) {
            l.zones[s as any] = n.attributes[h].value;
          } else {
            if (!/^(id|seq|loaded)$/.test(g[1])) {
              l[g[1] as any] = n.attributes[h].value;
            }
          }
        }
      }

      a.reviveAsync[props.advertisementId].apply(l);
    });

    function openGoogleAuthLink(): void {
      window.open(props.url, '_blank');
    }
    return {
      openGoogleAuthLink,
    };
  },
});
</script>

<style module lang="scss">
.aws-page {
  width: 100%;
  position: relative;
}

.google-block-all {
  height: 622px;
  overflow: hidden;
}

.google-block {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;

  &__ad {
    border: 1px dashed rgba(21, 44, 91, 0.42);
    border-radius: 10px;
    background-color: #e8eaed;
    font-weight: 500;
    font-size: 14px;
    height: 622px;
    color: rgba(21, 44, 91, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    overflow: hidden;
  }
}

.google-header {
  width: 350px;
  height: 50px;
  background-color: gray;
}

.google-body {
  width: 350px;
  padding: 20px;
  background-color: white;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    margin: 20px;
    font-family: 'Arial';
    color: #3b3b3b;
    font-size: 14px;
    line-height: 1.42857143;
  }

  &_text {
    color: #747474;
    font-size: 11px;
    margin: 10px;
  }
}

.google-btn {
  background-color: #88c4be;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 5px;
  border-radius: 4px;
  color: white;
}

.google-btn:hover {
  background-color: #88c4be;
  color: #eee;
}
</style>
