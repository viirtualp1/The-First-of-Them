/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */

// Пример использования диалога
// chooseDialog({
//     positiveText: '- Привет!', Текст "позитивной" кнопки
//     neutralText: '- Здравствуй', Текст "нейтральной" кнопки
//     unpositiveText: '- Пока', Текст "отрицательной" кнопки

//     positiveFunc: 'positiveFunc', Функций "позитивной" кнопки
//     neutralFunc: 'neutralFunc', Функций "нейтральной" кнопки
//     unpositiveFunc: 'unpositiveFunc', Функций "отрицательной" кнопки
// });

// Функции для примера использования диалогов
// function positiveFunc() {
//     alert('positiveFunc');
//     deleteChooseDialogDiv();
// }

// function neutralFunc() {
//     alert('neutralFunc');
//     deleteChooseDialogDiv();
// }

// function unpositiveFunc() {
//     alert('unpositiveFunc');
//     deleteChooseDialogDiv();
// }

// Механика с вентелями
// valve();

// Механика с домами
// house('../img/bg.jpg', 'True');


// Ключ
// function takeTrueKey() {
//     alert('True key');
// }

// function takeFakeKey() {
//     alert('Fake key');
// }

const houses = [
    house1 = {
        id: 1,
        next: 2,
    },

    house2 = {
        id: 2,
        next: 3,
        previous: 1,
    },

    house3 = {
        id: 3,
        next: 4,
        previous: 2,
    },

    house4 = {
        id: 4,
        next: 5,
        previous: 3,
    },

    house5 = {
        id: 5,
        next: church,
        previous: 4,
    },

    church = {
        id: ch,
        previous: 5,
    },
];

function vasiliyStart() {
    // changeBg('jungle-house');

    nameDialog.innerHTML = `Василий`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Там был последний пропавший, пойду проверю что там</p>
        </div>
    `;

    btnNext('jungleVasiliy');
}

function jungleVasiliy() {
    nameDialog.innerHTML = `Василий`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Вроде бы ничего такого... Ага! За деревьями вижу дом.</p>
        </div>
    `;

    btnNext('houseInside');
}

function houseInside() {
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog"></p>
        </div>
    `;
}
