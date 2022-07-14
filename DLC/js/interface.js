const dialogs = document.querySelector('#dialogs');
const chooseDialogs = document.querySelector('#chooseDialog');

let context = {
  heroes: {
    hero1: {
      name: 'Василий',
      nameInArray: 'vasiliy',
      hp: 100,
    },
    hero2: {
      name: 'Полина',
      hp: 100,
    },
    hero3: {
      name: 'Блогер',
      hp: 100,
    },
  },
};

const dialogsMassive = {
  vasiliy: {
    questions: [
      {
        question: 'Как дела?',
        answerGood: 'Хочется разобраться с этим и вернуться домой',
        answerBad: 'Не очень',
      },
      {
        question: 'Что тебе известно?',
        answerGood: `Немного. Люди в деревне пропадали,
              вот я и хотел узнать, что происходит. А по итогу оказался тут`,
        answerBad: 'Меньше, чем нужно',
      },
      {
        question: 'Здарова!',
        answerGood: `
          Я бывший военный... После войны начал обычную жизнь,
              но иногда не хватает мне того времени. То время не просто забыть`,
        answerBad: 'Бывший военный, это все, что тебе нужно знать',
      },
    ],
  },
};

init({
  array: dialogsMassive,
  heroes: context.heroes,
  elements: {
    dialogs: dialogs,
    chooseActions: chooseDialogs,
  },
});

chooseAction([
  {
    text: '1',
    func: function () {
      console.log('Hello1');
    },
  },
  {
    text: '2',
    func: function () {
      console.log('hello');
    },
  },
  {
    text: '3',
    func: function () {
      console.log('Hello3');
    },
  },
]);

createBtnNext(game);
