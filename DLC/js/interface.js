import { init, initialGameSettings } from '../core/core.js';
import { chooseAction } from '../modules/chooseAction.js';

const dialogs = document.querySelector('#dialogs');
const chooseDialogs = document.querySelector('#chooseDialog');
const fromWho = document.querySelector('#fromWho');

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
        questionFrom: 'Полина',
        question: 'Как дела?',
        answerGood: 'Хочется разобраться с этим и вернуться домой',
        answerBad: 'Не очень',
        type: 'action',
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

  polina: {
    questions: [
      {
        question: 'Что делаешь?',
        answerGood: '',
        answerBad: '',
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
    fromWho: fromWho,
  },
});

chooseAction(initialGameSettings, [
  {
    text: 'Привет!',
    func: function () {
      alert('Hello!');
    },
  },
  {
    text: 'Как дела?',
    func: function () {
      alert('Hello!');
    },
  },
  {
    text: 'Что делаешь?',
    func: function () {
      alert('Hello!');
    },
  },
]);

// createBtnNext(game);
