export interface RootState {
  auth: number;
}
export interface PayloadLogin {
  accountNumber: string;
  userName: string;
  password: string;
  tokenSerialNum: string;
  code: string;
  serialnumber: string;
  secretAccessKey: string;
  accessKeyID: string;
  isUser: boolean;
}
