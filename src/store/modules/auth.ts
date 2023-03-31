import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';

import { APP_PATH } from '~/constants';
import { Auth as AuthService } from '~/services/Auth';
import { store } from '~/store';
import { PayloadLogin } from '~/store/types';

interface AuthState {
  isFetching: boolean;
  errorText: string;
}

@Module({ dynamic: true, name: 'Auth', store })
class Auth extends VuexModule implements AuthState {
  isFetching = false;
  errorText = '';

  @Mutation
  private SET_LOGIN_FETCHING(value: boolean) {
    this.isFetching = value;
  }

  @Mutation
  private SET_ERROR_TEXT(value: string) {
    this.errorText = value;
  }

  @Action
  public async login(payload: PayloadLogin): Promise<void> {
    this.SET_LOGIN_FETCHING(true);
    try {
      await AuthService.signIn(payload);
      location.href = `${APP_PATH}/ui/index.html`;
    } catch (e) {
      this.showErrorMessage(e.message);
    }
    this.SET_LOGIN_FETCHING(false);
  }

  @Action
  private showErrorMessage(message: string) {
    this.SET_ERROR_TEXT(message);
  }
}

export const AuthModule = getModule(Auth);
