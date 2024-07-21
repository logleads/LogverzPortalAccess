<template>
  <div :class="$style['sign-in__blocks']">
    <div :class="$style['sign-in__form']">
      <h1 :class="$style['sign-in__title']">Log in via AWS</h1>
      <div :class="$style['sign-in__select']">
        <div
          :class="[
            $style['sign-in__select__item'],
            {
              [$style['sign-in__select__item__selected']]: isUserSelected,
              [$style['border-radius-left']]: isUserSelected,
            },
          ]"
          @click="changeLoginType(true)"
        >
          IAM user
        </div>
        <div
          :class="[
            $style['sign-in__select__item'],
            {
              [$style['sign-in__select__item__selected']]: !isUserSelected,
              [$style['border-radius-right']]: !isUserSelected,
            },
          ]"
          @click="changeLoginType(false)"
        >
          IAM key
        </div>
      </div>
      <input-container
        v-if="isUserSelected"
        label="Account Number"
        :class="$style['input-container']"
      >
        <template v-slot:input>
          <Input
            v-model="accountNumber"
            name="accountNumber"
            :error="v$.accountNumber.$error && submitted"
            :disabled="isFetching()"
          />
          <div v-if="submitted && v$.accountNumber.$error" :class="$style['sign-in__errorMessage']">
            Acccount Number is required
          </div>
        </template>
      </input-container>
      <input-container
        :label="isUserSelected ? 'User Name' : 'Access Key ID'"
        :class="$style['input-container']"
      >
        <template v-slot:input>
          <template v-if="isUserSelected">
            <Input
              v-model="userName"
              :error="v$.userName.$error && submitted"
              :disabled="isFetching()"
              name="userName"
            />
            <div v-if="v$.userName.$error && submitted" :class="$style['sign-in__errorMessage']">
              User Name is required
            </div>
          </template>
          <template v-else>
            <Input
              v-model="accessKeyID"
              :error="v$.accessKeyID.$error && submitted && !isUserSelected"
              :disabled="isFetching()"
              name="accessKeyID"
            />
            <div
              v-if="submitted && v$.accessKeyID.$error && !isUserSelected"
              :class="$style['sign-in__errorMessage']"
            >
              Access Key ID is required
            </div>
          </template>
        </template>
      </input-container>
      <input-container
        :label="isUserSelected ? 'Password' : 'Secret Access Key'"
        :class="$style['input-container']"
      >
        <template v-slot:input>
          <template v-if="isUserSelected">
            <Input
              v-model="password"
              type="password"
              :error="v$.password.$error && submitted && isUserSelected"
              :disabled="isFetching()"
              name="password"
            />
            <div
              v-if="submitted && v$.password.$error && isUserSelected"
              :class="$style['sign-in__errorMessage']"
            >
              Password is required
            </div>
          </template>
          <template v-else>
            <Input
              v-model="secretAccessKey"
              type="password"
              :error="v$.secretAccessKey.$error && submitted && !isUserSelected"
              :disabled="isFetching()"
            />
            <div
              v-if="submitted && v$.secretAccessKey.$error && !isUserSelected"
              :class="$style['sign-in__errorMessage']"
            >
              secret access Key is required
            </div>
          </template>
        </template>
      </input-container>
      <div :class="[$style['mfa'], { [$style['mfa--expanded']]: mfaExpanded }]">
        <button type="button" :class="$style['mfa__head']" @click="toggleMfaExpanded">
          <div :class="$style['mfa__title']">
            Are you MFA {{ isUserSelected ? 'user' : 'key' }}?
          </div>
          <icon name="arrow" :class="$style['mfa__dropdown-icon']" />
        </button>
        <div v-if="mfaExpanded" :class="$style['mfa__form']">
          <input-container v-if="isUserSelected" label="MFAType" :class="$style['input-container']">
            <template v-slot:input>
              <DropDownSimple
                :content="mfaType"
                :items="mfaTypes"
                name="mfaType"
                @select-value="e => handleDropDownSimple(e)"
              />
            </template>
          </input-container>
          <input-container v-else label="Serial number" :class="$style['input-container']">
            <template v-slot:input>
              <Input v-model="serialnumber" :disabled="isFetching()" />
            </template>
          </input-container>
          <input-container label="Code" :class="$style['input-container']">
            <template v-slot:input>
              <Input v-model="code" :disabled="isFetching()" />
            </template>
          </input-container>
        </div>
      </div>
      <ButtonComponent
        text="Log in"
        :disabled="isFetching() && disableLogin"
        :display-loader="isFetching()"
        :cookiedisabled="disableLogin"
        :class="$style['sign-in__submit-btn']"
        :callback="handleSubmit"
      />
    </div>
    <div :class="$style['sign-in__ad']">
      <span v-html="advertisementAWS()"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';

import ButtonComponent from '~/components/shared/button-component.vue';
import DropDownSimple from '~/components/shared/drop-down-simple.vue';
import Icon from '~/components/shared/icon.vue';
import Input from '~/components/shared/input.vue';
import InputContainer from '~/components/shared/input-container.vue';
import config from '~/config.json';
import { AuthModule } from '~/store/modules/auth';
const valueForDropDown: { [key: string]: string } = {
  software: 'SW',
};

import { defineComponent, watch, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'TabAWS',
  components: {
    Input,
    Icon,
    ButtonComponent,
    InputContainer,
    DropDownSimple,
  },
  props: {
    disableLogin: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const mfaExpanded = ref(false);
    const accountNumber = ref('');
    const userName = ref('');
    const password = ref('');
    const mfaType = ref('software');
    const mfaTypes = ref(['software']);
    const code = ref('');
    const isUserSelected = ref(true);
    const submitted = ref(false);
    const iconSelected = ref('aws');
    const accessKeyID = ref('');
    const secretAccessKey = ref('');
    const serialnumber = ref('');
    const disableTabbutton = ref(false);
    const rules = {
      accountNumber: { required },
      userName: { required },
      password: { required },
      secretAccessKey: { required },
      accessKeyID: { required },
    };
    const v$ = useVuelidate(rules, {
      userName,
      password,
      accountNumber,
      secretAccessKey,
      accessKeyID,
    });
    watch(
      () => props.disableLogin,
      () => {
        disableTabbutton.value = props.disableLogin;
      },
    );
    function isFetching() {
      return AuthModule.isFetching;
    }

    function advertisementAWS() {
      return config.AdvertisementAWS;
    }

    onMounted(() => {
      const advertisementIdAWS: string = config.AdvertisementIdAWS; // config.AdvertisementIdAWS as string;

      let a: any = window,
        g;
      let l: any = {
        zones: [],
        prefix:
          a.reviveAsync[advertisementIdAWS].name + '-' + a.reviveAsync[advertisementIdAWS].id + '-',
      };
      const q = new RegExp('^' + a.reviveAsync[advertisementIdAWS].getDataAttr('(.*)') + '$');
      let e = document.querySelectorAll(
        'ins[' +
          a.reviveAsync[advertisementIdAWS].getDataAttr('id') +
          "='" +
          advertisementIdAWS +
          "']",
      );

      const n = e[0];
      n.setAttribute(a.reviveAsync[advertisementIdAWS].getDataAttr('loaded'), '0');

      let s;
      let k: any = a.reviveAsync[advertisementIdAWS].getDataAttr('seq');

      if (n.hasAttribute(k)) {
        s = n.getAttribute(k);
      } else {
        s = a.reviveAsync[advertisementIdAWS].seq++;
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

      a.reviveAsync[advertisementIdAWS].apply(l);
    });

    function toggleMfaExpanded(): void {
      mfaExpanded.value = !mfaExpanded.value;
    }

    function changeLoginType(isUser: boolean) {
      v$.value.$reset();
      isUserSelected.value = isUser;
    }

    async function handleSubmit() {
      submitted.value = true;
      v$.value.$touch();
      if (
        (!v$.value.accountNumber.$error &&
          !v$.value.userName.$error &&
          !v$.value.password.$error) ||
        (!v$.value.secretAccessKey.$error && !v$.value.accessKeyID.$error)
      ) {
        login();
      }
    }

    async function login() {
      const payload = {
        accountNumber: accountNumber.value,
        userName: userName.value,
        password: password.value,
        tokenSerialNum: valueForDropDown[mfaType.value],
        code: code.value,
        serialnumber: serialnumber.value,
        secretAccessKey: secretAccessKey.value,
        accessKeyID: accessKeyID.value,
        isUser: isUserSelected.value,
      };
      await AuthModule.login(payload);
    }

    function selectGoogleAuth(): void {
      iconSelected.value = 'google';
    }

    function selectAwsAuth(): void {
      iconSelected.value = 'aws';
    }

    function handleDropDownSimple(e: any): void {
      mfaType.value = e.item;
    }

    return {
      handleDropDownSimple,
      selectAwsAuth,
      selectGoogleAuth,
      mfaExpanded,
      login,
      handleSubmit,
      changeLoginType,
      toggleMfaExpanded,
      advertisementAWS,
      isFetching,
      accountNumber,
      userName,
      password,
      mfaType,
      mfaTypes,
      code,
      isUserSelected,
      submitted,
      iconSelected,
      accessKeyID,
      secretAccessKey,
      serialnumber,
      disableTabbutton,
      v$,
    };
  },
});
</script>

<style module lang="scss">
.mfa {
  border-top: 1px dashed var(--border-color);
  padding-top: 20px;
  display: flex;
  flex-direction: column;

  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  &__form {
    margin-top: 20px;
  }

  &__dropdown-icon {
    width: 9px;
    height: 6px;
    transform: rotate(180deg);
  }

  &--expanded &__dropdown-icon {
    transform: rotate(0deg);
  }

  &__title {
    font-size: 16px;
    font-weight: 500;
  }
}

.sign-in {
  display: flex;
  padding: 50px 0;
  flex: 1;
  justify-content: center;
  height: 100%;

  &__errorMessage {
    color: red;
    font-size: 12px;
    margin-top: 10px;
  }

  &__title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 24px;
    margin-left: auto;
    margin-right: auto;
  }

  &__footer {
    margin-top: 15px;
    text-align: center;
    color: #9fa6b1;

    > a {
      color: #88c4be;
      cursor: pointer;
      text-decoration: underline;
    }
  }

  &__select {
    display: flex;
    border: 1px solid #eaebee;
    border-radius: 5px;
    height: 44px;
    margin-bottom: 25px;

    &__item {
      background-color: white;
      width: 50%;
      font-size: 12px;
      color: #242222;
      display: flex;
      justify-content: center;
      font-weight: 500;
      align-items: center;
      cursor: pointer;

      &__selected {
        background-color: #88c4be;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
      }
    }
  }

  &__blocks {
    display: flex;
  }

  &__form {
    background-color: #fff;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(181, 190, 203, 0.28);
    border-radius: 10px;
    padding: 46px 38px;
    display: flex;
    flex-direction: column;
    width: 462px;
    height: 100%;
    margin-right: 24px;
  }

  &__submit-btn {
    margin-top: 40px;
  }

  &__ad {
    border: 1px dashed rgba(21, 44, 91, 0.42);
    border-radius: 10px;
    background-color: #e8eaed;
    font-weight: 500;
    font-size: 14px;
    color: rgba(21, 44, 91, 0.6);
    height: 622px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
}
</style>
