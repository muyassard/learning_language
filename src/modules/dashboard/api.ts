import { http } from '../../services/http';

export const Test = {
  List: () => http.get('https://opentdb.com/api.php?amount=5&category=10&difficulty=easy&type=multiple')
};
