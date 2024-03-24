import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=5&category=10&difficulty=easy&type=multiple'
});
