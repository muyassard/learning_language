import { UserCredential } from 'firebase/auth';

export interface Login {
  password: string;
  email: string;
  name: string;
}

export interface User extends Login {}
export interface IState {
  user: null | User;
  isFetched: boolean;
  accessToken: string;
}
