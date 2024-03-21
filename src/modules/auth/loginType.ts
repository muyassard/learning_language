import { UserCredential } from 'firebase/auth';

export interface Login {
  password: string;
  email: string;
  name: string;
}

export interface User extends Login {}
