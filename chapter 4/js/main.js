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

// Ключ
// function takeTrueKey() {
//     alert('True key');
// }

// function takeFakeKey() {
//     alert('Fake key');
// }

let blogerRelationship = 'Хорошие';
let churchKey = '';

// Houses (Key for house 4)
let firstChapterKeyHouse4 = '';
let secondChapterKeyHouse4 = '';

// QTE kill zombies in church
let zombieChurchWidth = 100;
let zombieChurchSec = 10;
let clickZombieChurch = 0;

// Valves (Boss fight)
let valve1Destroy = '';
let valve2Destroy = '';
let valve3Destroy = '';
let valve4Destroy = '';

// confirm bloger with his choose
let confirmBloger;

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
    nameDialog.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Что исследовать?</p>
        </div>

        <div id="chooseRoom">
            <div class="row dialog d-flex justify-content-center" id="chooseRoomDiv">
                <button id="btn-dialog-3" type="button" class="btn btn-dark mt-2 mb-2 ml-2" onclick="mainDoorHouse()">
                    Входная дверь
                </button>
                <button id="btn-dialog-1" type="button" class="btn btn-dark mt-2 mb-2 ml-2 mr-2" onclick="books()">
                    Книжная полка
                </button>
                <button id="btn-dialog-2" type="button" class="btn btn-dark mt-2 mb-2" onclick="table()">
                    Стол
                </button>
            </div>
        </div>
    `;
}

function mainDoorHouse() {
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Надо ввести код от замка.</p>
        </div>

        <div class="row dialog d-flex justify-content-center" id="chooseRoomDiv">
            <div class="form-group">
                <input type="email" class="form-control mt-3 bg-dark text-white" id="passwordHouse" placeholder="Код от замка">
            </div>
        </div>

        <div class="row dialog d-flex justify-content-center">
            <button id="btn-dialog-3" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="checkCodeInput()">
                Открыть
            </button>

            <button id="btn-dialog-3" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="houseSearch()">
                Назад
            </button>
        </div>
    `;
}

function books() {
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Здесь очень много книг и еще какая-то записка.</p>
        </div>

        <div class="row dialog d-flex justify-content-center" id="chooseRoomDiv">
            <button id="btn-dialog-3" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="$('#booksYear').modal('show')">
                Прочитать
            </button>

            <button id="btn-dialog-3" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="houseSearch()">
                Назад
            </button>
        </div>
    `;
}

function table() {
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Какой-то документ...</p>
        </div>

        <div class="row dialog d-flex justify-content-center" id="chooseRoomDiv">
            <button id="btn-dialog-3" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="$('#documents').modal('show')">
                Прочитать
            </button>

            <button id="btn-dialog-3" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="houseSearch()">
                Назад
            </button>
        </div>
    `;
}

function checkCodeInput() {
    const passwordHouse = document.getElementById('passwordHouse').value;

    if (passwordHouse != 1906) {
        Swal.fire({
            icon: 'error',
            title: 'Неправильно',
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Правильно!',
        });

        villageOutside();
    }
}

function villageOutside() {
    nameDialog.innerHTML = `Василий`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Молодцы... Теперь вам нужно найти ключ к церкви.</p>
        </div>

        <div class="row dialog d-flex justify-content-center" id="houses">
            <button id="btn-house-1" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="house1()">
                Дом 1
            </button>

            <button id="btn-house-2" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="house2()">
                Дом 2
            </button>

            <button id="btn-house-3" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="house3()">
                Дом 3
            </button>

            <button id="btn-house-4" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="house4()">
                Дом 4
            </button>

            <button id="btn-house-5" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="house5()">
                Дом 5
            </button>
        </div>

        <div class="row dialog d-flex justify-content-center" id="church">
            <button id="btn-key-church" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="church()">
                Церковь
            </button>
        </div>
    `;

    document.getElementById('btn-next').disabled = true;
}

function house1() {
    nameDialog.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Ключ с рисунком скорпиона... Хм...</p>
        </div>

        <div class="row dialog d-flex justify-content-center" id="houses">
            <button id="btn-house-4" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="checkKeyHouse4()">
                Дом 4
            </button>

            <button id="btn-house-5" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="house5()">
                Дом 5
            </button>
        </div>

        <div class="row dialog d-flex justify-content-center" id="church">
            <button id="btn-key-church" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="church()">
                Церковь
            </button>
        </div>
    `;

    churchKey = 'false';
}

function house2() {
    nameDialog.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Здесь ключ с рисунком скорпиона</p>
        </div>

        <div class="row dialog d-flex justify-content-center" id="houses">
            <button id="btn-house-3" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="house3()">
                Дом 3
            </button>

            <button id="btn-house-4" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="checkKeyHouse4()">
                Дом 4
            </button>
        </div>

        <div class="row dialog d-flex justify-content-center" id="church">
            <button id="btn-key-church" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="church()">
                Церковь
            </button>
        </div>
    `;

    churchKey = 'false';
}

function house3() {
    nameDialog.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Здесь часть какого-то ключа</p>
        </div>

        <div class="row dialog d-flex justify-content-center" id="houses">
            <button id="btn-house-2" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="house2()">
                Дом 2
            </button>

            <button id="btn-house-4" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="checkKeyHouse4()">
                Дом 4
            </button>

            <button id="btn-house-5" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="house5()">
                Дом 5
            </button>
        </div>

        <div class="row dialog d-flex justify-content-center" id="church">
            <button id="btn-key-church" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="church()">
                Церковь
            </button>
        </div>
    `;

    firstChapterKeyHouse4 = 'true';
}

function house4() {
    nameDialog.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">О, по-моему здесь настоящий ключ от церкви!</p>
        </div>

        <div class="row dialog d-flex justify-content-center" id="houses">
            <button id="btn-house-3" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="house3()">
                Дом 3
            </button>

            <button id="btn-house-5" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="house5()">
                Дом 5
            </button>
        </div>

        <div class="row dialog d-flex justify-content-center" id="church">
            <button id="btn-key-church" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="church()">
                Церковь
            </button>
        </div>
    `;

    churchKey = 'true';
}

function house5() {
    nameDialog.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Здесь часть какого-то ключа, хм...</p>
        </div>

        <div class="row dialog d-flex justify-content-center" id="houses">
            <button id="btn-house-1" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="house1()">
                Дом 1
            </button>

            <button id="btn-house-3" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="house3()">
                Дом 3
            </button>

            <button id="btn-house-4" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="house4()">
                Дом 4
            </button>
        </div>

        <div class="row dialog d-flex justify-content-center" id="church">
            <button id="btn-key-church" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="church()">
                Церковь
            </button>
        </div>
    `;

    secondChapterKeyHouse4 = 'true';
}

function church() {
    nameDialog.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Церковь. Сюда нам и нужно. Для нее нужен ключ со скорпионом.</p>
        </div>

        <div class="row dialog d-flex justify-content-center" id="churchKey">
            <button id="btn-key-church" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="checkChurchKey()">
                Вставить ключ
            </button>
        </div>

        <div class="row dialog d-flex justify-content-center" id="houses">
            <button id="btn-house-3" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="house3()">
                Дом 3
            </button>

            <button id="btn-house-4" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="checkKeyHouse4()">
                Дом 4
            </button>

            <button id="btn-house-5" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="house5()">
                Дом 5
            </button>
        </div>

        <div class="row dialog d-flex justify-content-center" id="church">
            <button id="btn-key-church" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="church()">
                Церковь
            </button>
        </div>
    `;
}

function checkKeyHouse4() {
    if (firstChapterKeyHouse4 == 'true' && secondChapterKeyHouse4 == 'true') {
        house4();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Ключ',
            text: 'Здесь нужны какие-то две части ключа',
        });
    }
}

function checkChurchKey() {
    if (churchKey == 'true') {
        churchFight();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Ключ',
            text: 'Дверь не открывается',
        });
    }
}

function churchFight() {
    nameDialog.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Зомби лезут из всех щелей!</p>
        </div>

        <div class="row mt-3 name">
            <p class="lead" id="name-dialog">Блогер</p>
        </div>

        <div class="row dialog">
            <p class="lead" id="text-dialog">Дело дрянь!</p>
        </div>
    `;

    document.getElementById('btn-next').disabled = false;
    btnNext('churchFight2');
}

function churchFight2() {
    nameDialog.innerHTML = `Василий`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Бой будет жаркий!</p>
        </div>
    `;
    btnNext('qteZombieChurch');
}

function qteZombieChurch() {
    nameDialog.innerHTML = `Игра`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Стреляйте в зомби!</p>
        </div>

        <div class="row dialog d-flex justify-content-center" id="shot-zombie-church-div-btn">
            <button id="btn-shot-zombie-church" type="button" class="btn btn-dark mt-2 mb-2" onclick="shotZombieChurch()">
                Стрелять
            </button>
        </div>

        <div class="progress mt-4" id="progress-div-zombie-church">
            <div class="progress-bar progress-bar-striped bg-danger" id="progressbarZombieChurchsec" role="progressbar" style="width: 100%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">10 сек</div>
        </div>
    `;

    setInterval(() => {
        const progressbarZombieChurchSec = document.getElementById('progressbarZombieChurchsec');

        zombieChurchWidth -= 20;
        zombieChurchSec -= 1;

        try {
            progressbarZombieChurchSec.style.width = `${zombieChurchWidth}%`;
            progressbarZombieChurchSec.innerHTML = `${zombieChurchSec}сек`;
        } catch {
            zombieChurchSec = false;
        }

        if (zombieChurchSec === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Вы умерли!',
            });

            setInterval(() => {
                location.reload();
            }, 1000);
        }
    }, 1000);
}

function shotZombieChurch() {
    const progressZombieChurch = document.getElementById('progress-div-zombie-church');
    const btnKillZombieChurch = document.getElementById('btn-shot-zombie-church');

    clickZombieChurch += 1;

    if (clickZombieChurch == 10) {
        progressZombieChurch.parentNode.removeChild(progressZombieChurch);
        btnKillZombieChurch.parentNode.removeChild(btnKillZombieChurch);

        churchFightEnd();
    }
}

function churchFightEnd() {
    nameDialog.innerHTML = `Блогер`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Полин! Где Василий?</p>
        </div>

        <div class="row mt-3 name">
            <p class="lead" id="name-dialog">Полина</p>
        </div>

        <div class="row dialog">
            <p class="lead" id="text-dialog">Черт! Нет! Василий!</p>
        </div>

        <div class="row mt-3 name">
            <p class="lead" id="name-dialog">Блогер</p>
        </div>

        <div class="row dialog">
            <p class="lead" id="text-dialog">Сволочи!</p>
        </div>

    `;

    btnNext('churchWhereVasiliy');
}

function churchWhereVasiliy() {
    nameDialog.innerHTML = `Михаил`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Василий в лаборатории под церквью.</p>
        </div>

        <div class="row mt-3 name">
            <p class="lead" id="name-dialog">Полина</p>
        </div>

        <div class="row dialog">
            <p class="lead" id="text-dialog">Блин, вот мы попали...</p>
        </div>

        <div class="row mt-3 name">
            <p class="lead" id="name-dialog">Блогер</p>
        </div>

        <div class="row dialog">
            <p class="lead" id="text-dialog">Ловушка нам там обеспечина. Что делаем?</p>
        </div>

    `;

    btnNext('blogerSayWhatDoing');
}

function blogerSayWhatDoing() {
    nameDialog.innerHTML = `Блогер`;
    if (blogerRelationship == 'Отличные' || blogerRelationship == 'Плохие') {
        dialogs.innerHTML = `
            <div class="row dialog">
                <p class="lead" id="text-dialog">Предлагаю сначала пойти поискать отряд, а потом Василия</p>
            </div>
        `;

        dialogs.innerHTML += `
            <div id="chooseDialogDiv">
                <p class="lead text-white" id="chooseDialogText">Выбери, что ответить: </p>
                
                <div class="row dialog d-flex justify-content-center" id="chooseDialogDiv">
                    <button id="btn-dialog-1" type="button" class="btn btn-dark mt-1 mb-2 ml-2 mr-2" onclick="confirmBloger = true; firstTeamThenVasiliy()">
                        Да, давай
                    </button>
                    <button id="btn-dialog-2" type="button" class="btn btn-dark mt-1 mb-2 mr-2 ml-2" onclick="confirmBloger = false; firstTeamThenVasiliy()">
                        Нет, давай сделаем по другому
                    </button>
                </div>
            </div>
        `;
    } else if (blogerRelationship == 'Хорошие') {
        dialogs.innerHTML = `
            <div class="row dialog">
                <p class="lead" id="text-dialog">Предлагаю сначала пойти поискать Василия, а потом отряд</p>
            </div>
        `;

        dialogs.innerHTML += `
            <div id="chooseDialogDiv">
                <p class="lead text-white" id="chooseDialogText">Выбери, что ответить: </p>
                
                <div class="row dialog d-flex justify-content-center" id="chooseDialogDiv">
                    <button id="btn-dialog-1" type="button" class="btn btn-dark mt-1 mb-2 ml-2 mr-2" onclick="confirmBloger = true; firstVasiliyThenTeam()">
                        Да, давай
                    </button>
                    <button id="btn-dialog-2" type="button" class="btn btn-dark mt-1 mb-2 mr-2 ml-2" onclick="confirmBloger = false; firstVasiliyThenTeam()">
                        Нет, давай сделаем по другому
                    </button>
                </div>
            </div>
        `;
    }
}

function firstTeamThenVasiliy() {
    if (confirmBloger == true) {
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
                <p class="lead" id="text-dialog">Полезли! Смотри в оба!</p>
            </div>

            <div class="row mt-3 name">
                <p class="lead" id="name-dialog">Блогер</p>
            </div>

            <div class="row dialog">
                <p class="lead" id="text-dialog">Понял, хорошо, ты тоже.</p>
            </div>
        `;
        btnNext('churchMonitor');
    } else if (confirmBloger == false) {
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
                <p class="lead" id="text-dialog">Сначала за Василием. Полезли, смотри в оба!</p>
            </div>

            <div class="row mt-3 name">
                <p class="lead" id="name-dialog">Блогер</p>
            </div>

            <div class="row dialog">
                <p class="lead" id="text-dialog">Понял, хорошо, ты тоже.</p>
            </div>
        `;

        btnNext('laboratory');
    }
}

function firstVasiliyThenTeam() {
    if (confirmBloger == true) {
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
                <p class="lead" id="text-dialog">Полезли! Смотри в оба!</p>
            </div>

            <div class="row mt-3 name">
                <p class="lead" id="name-dialog">Блогер</p>
            </div>

            <div class="row dialog">
                <p class="lead" id="text-dialog">Понял, хорошо, ты тоже.</p>
            </div>
        `;

        btnNext('laboratory');
    } else if (confirmBloger == false) {
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
                <p class="lead" id="text-dialog">Полезли! Смотри в оба!</p>
            </div>

            <div class="row mt-3 name">
                <p class="lead" id="name-dialog">Блогер</p>
            </div>

            <div class="row dialog">
                <p class="lead" id="text-dialog">Понял, хорошо, ты тоже.</p>
            </div>
        `;

        btnNext('churchMonitor');
    }
}

function churchMonitor() {
    nameDialog.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Смотри, тут какой-то монитор.</p>
        </div>

        <div class="row mt-3 name">
            <p class="lead" id="name-dialog">Полина</p>
        </div>

        <div class="row dialog">
            <p class="lead" id="text-dialog">Твою ж мать!</p>
        </div>

        <div class="row mt-3 name">
            <p class="lead" id="name-dialog">Блогер</p>
        </div>

         <div class="row dialog">
            <p class="lead" id="text-dialog">Что там!? Черт, они все мертвы!</p>
        </div>
    `;

    btnNext('churchMonitor2');
}


function churchMonitor2() {
    nameDialog.innerHTML = `Блогер`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Уходим! Для нас, скорей всего, все кончено... Там дальше западня!</p>
        </div>

        <div class="row mt-3 name">
            <p class="lead" id="name-dialog">Полина</p>
        </div>

        <div class="row dialog">
            <p class="lead" id="text-dialog">Мы никогда не уходим! Мы должны попытаться вытащить Василия!</p>
        </div>
    `;

    btnNext('churchMonitor3');
}

function churchMonitor3() {
    nameDialog.innerHTML = `Блогер`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Хорошо... Я с тобой.</p>
        </div>

        <div class="row mt-3 name">
            <p class="lead" id="name-dialog">Полина</p>
        </div>

        <div class="row dialog">
            <p class="lead" id="text-dialog">Нам надо держаться вместе! Только вместе мы сила!</p>
        </div>
 
    `;

    btnNext('laboratory');
}

function laboratory() {
    nameDialog.innerHTML = 'Полина';
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Я так понимаю за большой дверью - Василий, 
                но она естественно закрыта. Нужен ключ.</p>
        </div>

        <div class="row dialog d-flex justify-content-center" id="laboratory">
            <button id="btn-main-room" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="checkKeyMainRoomLaboratory()">
                Главная комната
            </button>
        </div>

        <div class="row dialog d-flex justify-content-center" id="laboratory">
            <button id="btn-room-1" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="roomLaboratory1()">
                Комната 1
            </button>
            <button id="btn-room-2" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="roomLaboratory2()">
                Комната 2
            </button>
        </div>
    `;
}

function roomLaboratory1() {
    // Поиск предметов 1
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Какой же здесь беспорядок...</p>
        </div>

        <div class="row dialog d-flex justify-content-center" id="laboratory">
            <button id="btn-find-key-1" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="house3()">
                Искать ключ
            </button>
        </div>

        <div class="row dialog d-flex justify-content-center" id="church">
            <button id="btn-key-church" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="roomLaboratory2()">
                Комната 2
            </button>

            <button id="btn-main-room" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="checkKeyMainRoomLaboratory()">
                Главная комната
            </button>
        </div>
    `;
}

function roomLaboratory2() {
    // Поиск предметов 2
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">А здесь что случилось...</p>
        </div>

        <div class="row dialog d-flex justify-content-center" id="churchKey">
            <button id="btn-find-key-1" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="checkChurchKey()">
                Искать ключ
            </button>
        </div>

        <div class="row dialog d-flex justify-content-center" id="church">
            <button id="btn-room-1" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="roomLaboratory1()">
                Комната 1
            </button>

            <button id="btn-main-room" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="checkKeyMainRoomLaboratory()">
                Главная комната
            </button>
        </div>
    `;
}

function checkKeyMainRoomLaboratory() {
    if (mainRoomLaboratoryKey == 'true') {
        mainRoomLaboratory();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Нет ключа!',
        });
    }
}

function mainRoomLaboratory() {

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

