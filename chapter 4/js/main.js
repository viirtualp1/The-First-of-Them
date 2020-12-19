/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */

// Пример использования диалога
chooseDialog({
    positiveText: '- Привет!', // Текст "позитивной" кнопки
    neutralText: '- Здравствуй', // Текст "нейтральной" кнопки
    unpositiveText: '- Пока', // Текст "отрицательной" кнопки

    positiveFunc: 'positiveFunc', // Функций "позитивной" кнопки
    neutralFunc: 'neutralFunc', // Функций "нейтральной" кнопки
    unpositiveFunc: 'unpositiveFunc', // Функций "отрицательной" кнопки
});

// Функции для примера использования диалогов
function positiveFunc() {
    alert('positiveFunc');
    deleteChooseDialogDiv();
}

function neutralFunc() {
    alert('neutralFunc');
    deleteChooseDialogDiv();
}

function unpositiveFunc() {
    alert('unpositiveFunc');
    deleteChooseDialogDiv();
}

// Механика с вентелями
valve();
