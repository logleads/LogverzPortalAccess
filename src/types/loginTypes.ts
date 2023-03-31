export interface LoginData {
  accountNumber: string;
  userName: string;
  password: string;
  tokenSerialNum?: string;
  code?: string;
}
export interface LoginResponse {
  user: string;
  status: string;
}
