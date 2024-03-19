import { User } from 'modules/auth/loginType';
import store from 'store2';

export const session = {
  add: (user: User) => store.set('user', user),
  remove: () => store.remove("user"),
  get: () => store.get("user")
};

console.log('hello');
