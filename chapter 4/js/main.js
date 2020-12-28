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

let blogerRelationship = 'Хорошие';
let vasiliyRelationship = 'Хорошие';

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
            <p class="lead" id="text-dialog">Вроде бы ничего такого... Ага! За деревьями вижу что-то.</p>
        </div>
    `;

    btnNext('houseInside');
}

function houseOutside() {
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Что за... Какой-то особняк посреди леса, весь разрушенный. Что же там?</p>
        </div>
    `;

    btnNext('houseInside');
}

function houseInside() {
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Какая-то лаборатория, хмм</p>
        </div>
    `;

    btnNext('rainSleepVasiliy');
}

function rainSleepVasiliy() {
    document.getElementById('btn-next').disabled = false;

    setTimeout(() => {
        // changeBg('rainSleepVasiliy');

        sound.src = 'sounds/sleepBullet.mp3';

        footerButtons.style.visibility = 'hidden';

        dialogs.innerHTML = `
            <div class="row dialog">
                <p class="lead" id="text-dialog">Ааа... Что..</p>
            </div>
        `;

        dialogsDiv.style.transition = '7s ease';
        dialogsDiv.style.opacity = 0;

        nameDiv.style.transition = '7s ease';
        nameDiv.style.opacity = 0;
    }, 1000);

    setTimeout(() => {
        document.body.style.background = '#000';

        setTimeout(() => {
            changeHeroPolina();
        }, 2500);
    }, 7500);
}

function changeHeroPolina() {
    document.body.style.background = '#000';
    music.src = '';
    sound.src = 'sounds/polina_change.mp3';

    dialogsDiv.style.opacity = 1;
    document.getElementById('name').style.visibility = 'hidden';
    document.getElementById('footer-buttons').style.visibility = 'hidden';

    dialogs.innerHTML = `
        <div class="container d-flex justify-content-center" id="name-text-div">
            <div>
                <h1 style="float: left;" class="title-show1" id="letter-1">П</h1>
                <h1 style="float: left;" class="title-show2" id="letter-2">о</h1>
                <h1 style="float: left;" class="title-show3" id="letter-3">л</h1>
                <h1 style="float: left;" class="title-show4" id="letter-4">и</h1>
                <h1 style="float: left;" class="title-show5" id="letter-5">н</h1>
                <h1 style="float: left;" class="title-show6" id="letter-6">а</h1>
            </div>
        </div>
    `;

    // Анимация появления имени
    setTimeout(() => {
        const p1 = document.getElementById('letter-1');
        const p2 = document.getElementById('letter-2');
        const p3 = document.getElementById('letter-3');
        const p4 = document.getElementById('letter-4');
        const p5 = document.getElementById('letter-5');
        const p6 = document.getElementById('letter-6');

        // Анимация появления имени
        p1.style.textShadow = `1px 1px 10px rgb(198, 85, 250)`;
        p1.id = 'title-show1';

        p2.style.textShadow = `1px 1px 10px rgb(198, 85, 250)`;
        p2.id = 'title-show2';

        p3.style.textShadow = `1px 1px 10px rgb(198, 85, 250)`;
        p3.id = 'title-show3';

        p4.style.textShadow = `1px 1px 10px rgb(198, 85, 250)`;
        p4.id = 'title-show4';

        p5.style.textShadow = `1px 1px 10px rgb(198, 85, 250)`;
        p5.id = 'title-show5';

        p6.style.textShadow = `1px 1px 10px rgb(198, 85, 250)`;
        p6.id = 'title-show6';
    }, 200);

    setTimeout(() => {
        try {
            const p1 = document.getElementById('title-show1');
            const p2 = document.getElementById('title-show2');
            const p3 = document.getElementById('title-show3');
            const p4 = document.getElementById('title-show4');
            const p5 = document.getElementById('title-show5');
            const p6 = document.getElementById('title-show6');

            document.body.style.background = `url('img/new-house.jpg')`;
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.backgroundAttachment = 'fixed';
            document.body.style.backgroundSize = 'cover';

            p1.parentNode.removeChild(p1);
            p2.parentNode.removeChild(p2);
            p3.parentNode.removeChild(p3);
            p4.parentNode.removeChild(p4);
            p5.parentNode.removeChild(p5);
            p6.parentNode.removeChild(p6);
        } catch { }

        nameDiv.style.opacity = 1;
        nameDiv.style.transition = '0s';
        nameDiv.style.visibility = 'visible';

        dialogsDiv.style.opacity = 1;
        dialogsDiv.style.visibility = 'visible';

        footerButtons.style.visibility = 'visible';

        houseWakeUp();
    }, 5000);
}

function houseWakeUp() {
    // changeBg('houseNew');

    nameDialog.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Ты кто?</p>
        </div>
    `;

    document.getElementById('btn-next').disabled = true;

    setTimeout(() => {
        dialogs.innerHTML += `
            <div class="row mt-3 name">
                <p class="lead" id="name-dialog">Василий</p>
            </div>

            <div class="row dialog">
                <p class="lead" id="text-dialog">Я - Василий, бывший солдат. А вы кто такие?</p>
            </div>
        `;

        setTimeout(() => {
            dialogs.innerHTML += `
                <div class="row mt-3 name">
                    <p class="lead" id="name-dialog">Полина</p>
                </div>

                <div class="row dialog">
                    <p class="lead" id="text-dialog">Я - Полина, это Блогер. 
                        Мы с отрядом пытаемся найти и уничтожить остатки вируса из инцидента в особняке.</p>
                </div>
            `;

            document.getElementById('btn-next').disabled = false;
            btnNext('trustBlogerConflictStart');
        }, 5000);
    }, 3500);
}

function trustBlogerConflictStart() {
    document.getElementById('btn-next').disabled = true;

    nameDialog.innerHTML = `Василий`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Значит нам нужно выбраться из дома, 
                исследуйте весь дом, я осмотрю здесь.</p>
        </div>
    `;

    setTimeout(() => {
        dialogs.innerHTML += `
            <div class="row mt-3 name">
                <p class="lead" id="name-dialog">Блогер</p>
            </div>

            <div class="row dialog">
                <p class="lead" id="text-dialog">А ты чего здесь раскомандовался? 
                    Мы тебя вообще не знаем, а оружие есть только у нас.</p>
            </div>
        `;

        setTimeout(() => {
            dialogs.innerHTML += `
                <div class="row mt-3 name">
                    <p class="lead" id="name-dialog">Василий</p>
                </div>

                <div class="row dialog">
                    <p class="lead" id="text-dialog">Я - единственный у кого есть опыт в военных делах, 
                        поэтому я лучше вас понимаю, что нужно делать, так что исследуйте дом.</p>
                </div>
            `;

            document.getElementById('btn-next').disabled = false;
            btnNext('blogerConflictAngryEnds');
        }, 5000);
    }, 5000);
}

function blogerConflictAngryEnds() {
    nameDialog.innerHTML = `Блогер`;
    dialogsDiv.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Да неужели?..</p>
        </div>
    `;

    btnNext('polinaChoose');
}

function polinaChoose() {
    nameDialog.innerHTML = `Полина`;
    dialogs.innerHTML = ``;

    chooseDialog({
        positiveText: 'Встать на сторону Блогера',
        neutralText: 'Не защищать никого',
        unpositiveText: 'Встать на сторону Василия',

        positiveFunc: 'blogerProtect',
        neutralFunc: 'noOneProtect',
        unpositiveFunc: 'vasiliyProtect',
    });
}

function blogerProtect() {
    blogerRelationship = 'Отличные';
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,

        onOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
    });

    Toast.fire({
        icon: 'success',
        title: 'Блогер: отношения повышены',
    });

    nameDialog.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Ну вообще-то Блогер прав, мы тебя толком не знаем, 
                а ты тут раскомандовался.</p>
        </div>
    `;

    btnNext('houseSearch');
}

function noOneProtect() {
    nameDialog.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Хватит! Устроили здесь. 
                Давайте выбираться лучше. Я осмотрю дом</p>
        </div>
    `;

    btnNext('houseSearch');
}

function vasiliyProtect() {
    blogerRelationship = 'Плохие';
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,

        onOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
    });

    Toast.fire({
        icon: 'error',
        title: 'Блогер: отношения понижены',
    });

    nameDialog.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Не горячись сильно, 
                Блогер, давай поищем что-то, выход найти отсюда нужно.</p>
        </div>
    `;

    btnNext('houseSearch');
}

function houseSearch() {
    
}

// WARNING //
// FUTURE CODE //
// function futureFunction() {
//     localStorage.setItem('currentFunction', 'future(Current)Function');
// }

// window.onload = () => {
//     const currentFunctionLc = localStorage.getItem('currentFunction');

//     if (currentFunctionLc != null) {
//         if (currentFunctionLc == 'future(Current)Function') {
//             futureFunction();
//         }
//     } else { }
// };
// function transition() {
//     window.location.href = "../searchItems/index-nosplash.html";
// }

