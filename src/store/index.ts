import Vue from 'vue';
import Vuex from 'vuex';

import { RootState } from '~/store/types';

Vue.use(Vuex);

export const store = new Vuex.Store<RootState>({});
