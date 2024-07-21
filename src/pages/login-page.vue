<template>
  <div :class="$style['wrapper']">
    <Header />
    <div :class="$style['content']">
      <SideBar @select-advertisement="selectAdvertisement" />
      <div v-if="isSelectTab === 'aws'" :class="$style['sign-in']">
        <TabAWS :disableLogin="disableLogin" />
      </div>
      <template v-for="(item, key) in advertisement()">
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
    <!-- <notifications group="foo" /> -->
  </div>
</template>

<script lang="ts">
import Header from '~/components/shared/header.vue';
import config from '~/config.json';
import SideBar from '~/pages/side-bar.vue';
import Tab from '~/pages/tab.vue';
import TabAWS from '~/pages/tab-aws.vue';
import { AuthModule } from '~/store/modules/auth';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'LoginPage',
  components: { Header, SideBar, Tab, TabAWS },
  props: {
    disableLogin: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const isUserSelected = ref(true);
    const submitted = ref(false);
    const iconSelected = ref('aws');
    const accessKeyID = ref('');
    const secretAccessKey = ref('');
    const serialnumber = ref('');
    const isSelectTab = ref('aws');

    function advertisement() {
      return config.advertisement;
    }
    function isFetching() {
      return AuthModule.isFetching;
    }

    function errorText() {
      return AuthModule.errorText;
    }

    function advertisementAWS() {
      return config.AdvertisementAWS;
    }
    function selectAdvertisement(e: string) {
      isSelectTab.value = e;
    }
    return {
      isSelectTab,
      selectAdvertisement,
      errorText,
      advertisement,
      isFetching,
      advertisementAWS,
      serialnumber,
      isUserSelected,
      submitted,
      iconSelected,
      accessKeyID,
      secretAccessKey,
    };
  },
});
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
