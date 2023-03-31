import axios from 'axios';

import { BASE_URL, STAGE_NAME } from '~/constants';
import { PayloadLogin } from '~/store/types';
import { makeQueryString } from '~/utils/makeQueryString';

const instance = axios.create({
  baseURL: `${BASE_URL}${STAGE_NAME}`,
});

export class Auth {
  static signIn = ({
    userName,
    password,
    accountNumber,
    tokenSerialNum,
    code,
    serialnumber,
    secretAccessKey,
    accessKeyID,
    isUser,
  }: PayloadLogin): Promise<Response> => {
    let query: string;

    if (isUser) {
      query = makeQueryString({
        user: userName,
        password,
        account: accountNumber,
        mfaType: tokenSerialNum,
        mfavalue: code,
      });
    } else {
      query = makeQueryString({
        accesskey: accessKeyID,
        secretkey: secretAccessKey,
        tokencode: code,
        serialnumber,
      });
    }
    return instance.post(`Auth${query}`);
  };
}
