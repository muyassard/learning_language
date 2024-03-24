export namespace IEntity {
  export interface Lesson {
    url: string;
    title: string;
    description: string;
    language: string;
    test: any;
  }
  export interface LanguageCard {
    imgUrl: string;
    description:string;
    lan:string;
    navigate:string;

  }
  export interface TestApi {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: Array<string>;
    question: string;
    type: string;
  }
}
