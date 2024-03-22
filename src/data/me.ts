import { session } from 'services/session';

const user = session.get('user');
export const Me: any[] = user ? [user[0]] : [];
