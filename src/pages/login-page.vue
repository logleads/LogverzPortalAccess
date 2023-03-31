<template>
  <div :class="$style['wrapper']">
    <Header />
    <div :class="$style['content']">
      <SideBar @select-advertisement="selectAdvertisement" />
      <div v-if="isSelectTab === 'aws'" :class="$style['sign-in']">
        <TabAWS :disableLogin="disableLogin" />
      </div>
      <template v-for="(item, key) in advertisement">
        <Tab
          v-if="isSelectTab === key"
          :key="key"
          :url="item.url"
          :title="item.title"
          :btn-text="item.btnText"
          :body-text="item.bodyText"
          :login-button-icon="item.loginButtonIcon"
          :advertisement-h-t-m-l="item.advertisementHTML"
          :advertisement-id="item.advertisementId"
        />
      </template>
    </div>
    <notifications group="foo" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop,Watch } from 'vue-property-decorator';

import Header from '~/components/shared/header.vue';
import config from '~/config.json';
import SideBar from '~/pages/side-bar.vue';
import Tab from '~/pages/tab.vue';
import TabAWS from '~/pages/tab-aws.vue';
import { AuthModule } from '~/store/modules/auth';

@Component({
  name: 'LoginPage',
  components: { Header, SideBar, Tab, TabAWS },
})
export default class LoginPage extends Vue {
  @Prop({ required: true, type: Boolean }) readonly disableLogin!: boolean;
  public isUserSelected = true;
  public submitted = false;
  public iconSelected = 'aws';
  public accessKeyID = '';
  public secretAccessKey = '';
  public serialnumber = '';
  public isSelectTab: string = 'aws';

  created(){
    // eslint-disable-next-line no-console
    // console.log("fisabled ", this.disableLogin)
  }

  get advertisement(): Record<string, any> {
    return config.advertisement;
  }
  get isFetching(): boolean {
    return AuthModule.isFetching;
  }

  get errorText(): string {
    return AuthModule.errorText;
  }

  get advertisementAWS(): string {
    return config.AdvertisementAWS;
  }

  @Watch('disableLogin')
  handleloginDisable(): void{
    // eslint-disable-next-line no-console
    console.log("fisabled ", this.disableLogin)
  }

  @Watch('errorText')
  handleError(value: string): void {
    this.$notify({
      // (optional)
      // Name of the notification holder
      group: 'foo',

      // (optional)
      // Class that will be assigned to the notification
      type: 'error',

      // (optional)
      // Title (will be wrapped in div.notification-title)
      title: 'Error',

      // Content (will be wrapped in div.notification-content)
      text: `<b> ${value} </b>`,

      // (optional)
      // Overrides default/provided duration
      duration: 10000,

      // (optional)
      // Overrides default/provided animation speed
      speed: 1000,

      // (optional)
      // Data object that can be used in your template
      data: {},
    });
  }

  public selectAdvertisement(e: string): void {
    this.isSelectTab = e;
  }
}
</script>

<style module lang="scss">
.sign-in {
  display: flex;
  padding: 50px 0;
  flex: 1;
  justify-content: center;
  height: 100%;
}

.wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.content {
  display: flex;
  flex: 1;
}

.aws-page {
  width: 100%;
  position: relative;
}
</style>
