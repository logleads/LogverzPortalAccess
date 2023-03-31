<template>
  <div :class="$style['aws-page']">
    <div :class="$style['google-block']">
      <div :class="$style['google-block-all']">
        <div :class="$style['google-header']"></div>
        <div :class="$style['google-body']">
          <p>{{ title }}</p>
          <button :class="$style['google-btn']" @click="openGoogleAuthLink">
            <p v-html="loginButtonIcon">></p>
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
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'Tab',
})
export default class Tab extends Vue {
  @Prop({ required: true, type: String }) readonly title!: string;
  @Prop({ required: true, type: String }) readonly btnText!: string;
  @Prop({ required: true, type: String }) readonly bodyText!: string;
  @Prop({ required: true, type: String }) readonly advertisementHTML!: string;
  @Prop({ required: true, type: String }) readonly loginButtonIcon!: string;
  @Prop({ required: true, type: String }) readonly url!: string;
  @Prop({ required: true, type: String }) readonly advertisementId!: string;

  mounted(): void {
    let a: any = window,
      g;
    let l: any = {
      zones: [],
      prefix:
        a.reviveAsync[this.advertisementId].name +
        '-' +
        a.reviveAsync[this.advertisementId].id +
        '-',
    };
    const q = new RegExp('^' + a.reviveAsync[this.advertisementId].getDataAttr('(.*)') + '$');
    let e = document.querySelectorAll(
      'ins[' +
        a.reviveAsync[this.advertisementId].getDataAttr('id') +
        "='" +
        this.advertisementId +
        "']",
    );

    const n = e[0];
    n.setAttribute(a.reviveAsync[this.advertisementId].getDataAttr('loaded'), '0');

    let s;
    let k: any = a.reviveAsync[this.advertisementId].getDataAttr('seq');

    if (n.hasAttribute(k)) {
      s = n.getAttribute(k);
    } else {
      s = a.reviveAsync[this.advertisementId].seq++;
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

    a.reviveAsync[this.advertisementId].apply(l);
  }

  public openGoogleAuthLink(): void {
    window.open(this.url, '_blank');
  }
}
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
