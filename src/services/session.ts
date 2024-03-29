import { User } from 'modules/auth/loginType';
import { IEntity } from 'modules/dashboard/types';
import store from 'store2';
// User | IEntity.Lesson

export const session = {
  add: (key: string, data: any) => {
    const storedData = store.get(key) || [];
    storedData.push(data);
    store.set(key, storedData);
  },
  removeAll: () => {
    store.clearAll();
  },
  remove: (user: string) => {
    store.remove(user);
  },
  get: (key: string) => store.get(key)
};
