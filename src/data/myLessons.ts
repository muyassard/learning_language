import { IEntity } from 'modules/dashboard/types';
const enLanguage = 'english';
const ruLanguage = 'russian';

export const englishData: IEntity.Lesson[] = [
  {
    url: 'https://www.youtube.com/watch?v=MqGzrhHnn5E',
    title: 'lesson1',
    language: enLanguage,
    test: ''
  },
  {
    url: 'https://www.youtube.com/watch?v=LkzEwCeyaZk',
    title: 'lesson2',
    language: enLanguage,
    test: ''
  },
  {
    url: 'https://www.youtube.com/watch?v=k3rDBN2it-c&t=7s',
    title: 'lesson3',
    language: enLanguage,
    test: ''
  },
  {
    url: 'https://www.youtube.com/watch?v=k3rDBN2it-c&t=7s',
    title: 'lesson4',
    language: enLanguage,
    test: ''
  }
];
export const russianData: IEntity.Lesson[] = [
  {
    url: 'https://www.youtube.com/watch?v=wUHzV6BeQlo',
    title: 'lesson1',
    language: ruLanguage,
    test: 'lesson1 test'
  },
  {
    url: 'https://www.youtube.com/watch?v=92Fqov_wB2U',
    title: 'lesson2',
    language: ruLanguage,
    test: 'lesson2 test'
  },
  {
    url: 'https://www.youtube.com/watch?v=GZgEr1vcsQA',
    title: 'lesson3',
    language: ruLanguage,
    test: 'lesson3 test'
  },
  {
    url: 'https://www.youtube.com/watch?v=_0DOKakFWcY',
    title: 'lesson4',
    language: ruLanguage,
    test: 'lesson4 test'
  }
];
