import { IEntity } from 'modules/dashboard/types';
const enLanguage = 'english';
const ruLanguage = 'russian';

export const englishData: IEntity.Lesson[] = [
  {
    url: 'https://www.youtube.com/watch?v=MqGzrhHnn5E',
    title: 'lesson1',
    description: 'with this tutorial you can easily memorize 100 words',
    language: enLanguage,
    test: ''
  },
  {
    url: 'https://www.youtube.com/watch?v=LkzEwCeyaZk',
    title: 'lesson2',
    description: 'In this lesson, you can learn about expressions related to the verb "Do"',
    language: enLanguage,
    test: ''
  },
  {
    url: 'https://www.youtube.com/watch?v=k3rDBN2it-c&t=7s',
    title: 'lesson3',
    description: 'in this tutorial, you will be sure that you can learn English at home on your own',
    language: enLanguage,
    test: ''
  }
];
export const russianData: IEntity.Lesson[] = [
  {
    url: 'https://www.youtube.com/watch?v=wUHzV6BeQlo',
    title: 'lesson1',
    description: '',
    language: ruLanguage,
    test: 'lesson1 test'
  },
  {
    url: 'https://www.youtube.com/watch?v=92Fqov_wB2U',
    title: 'lesson2',
    description: '',
    language: ruLanguage,
    test: 'lesson2 test'
  },
  {
    url: 'https://www.youtube.com/watch?v=GZgEr1vcsQA',
    title: 'lesson3',
    description: '',
    language: ruLanguage,
    test: 'lesson3 test'
  }
];
export const languageData: IEntity.LanguageCard[] = [
  {
    imgUrl: '/images/english.jpg',
    description:
      'if you are interested in learning a new language , this app will help you become fluent in no time . Click below to learn a language',
    lan: 'English',
    navigate: '/app/english'
  },
  {
    imgUrl: '/images/russia.png',
    description: 'Если вы заинтересованы в изучении нового языка, это приложение поможет вам    быстро освоить его .',
    lan: 'Russia',
    navigate: '/app/russian'
  }
];
