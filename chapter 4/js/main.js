/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */

let blogerRelationship = 'Хорошие';
let vasiliyRelationship = 'Хорошие';

let churchKey = '';

// keys
let fakeChurchKeys = 0;
let trueChurchKey = 0;

let takeKeyHouse1 = false;
let takeKeyHouse2 = false;
let takeKeyHouse3 = false;
let takeKeyHouse4 = false;
let takeKeyHouse5 = false;

// Houses (Key for house 4)
let firstChapterKeyHouse4 = '';
let secondChapterKeyHouse4 = '';

// QTE kill zombies in church
let zombieChurchWidth = 100;
let zombieChurchSec = 10;
let clickZombieChurch = 0;

// Valves (Boss fight)
// let valve1Destroy = '';
// let valve2Destroy = '';
// let valve3Destroy = '';
// let valve4Destroy = '';

// Polina Hp
let polinaHp = 100;

// confirm bloger with his choose
let confirmBloger;

// load main room laboratory (after search items)
window.onload = () => {
    const currentFunctionLc = localStorage.getItem('mainRoomLaboratory');

    if (currentFunctionLc != null) {
        if (currentFunctionLc == 'mainRoomLaboratory') {
            mainRoomLaboratory();
        }
    } else { }
};

function vasiliyStart() {
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
    nextTask('Проверить особняк');
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Что за... Какой-то особняк посреди леса, весь разрушенный</p>
        </div>
    `;

    btnNext('houseInside');
}

function houseInside() {
    changeBg('new-house.jpg');

    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Спуск вниз..? Куда он ведет?</p>
        </div>
    `;

    btnNext('rainSleepVasiliy');
}

function rainSleepVasiliy() {
    document.getElementById('btn-next').disabled = true;

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
    changeBg('bg20-part4.png');

    nameDialog.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Ты кто?</p>
        </div>
    `;

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
        }, 4000);
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
        }, 4000);
    }, 4000);
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
    nextTask('Осмотреть особняк');
    blogerRelationship = 'Отличные';
    vasiliyRelationship = 'Плохие';

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
    blogerRelationship = 'Хорошие';
    vasiliyRelationship = 'Плохие';

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
        title: 'Василий: отношения понижены',
    });

    nextTask('Осмотреть особняк');
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
    nextTask('Осмотреть особняк');
    blogerRelationship = 'Плохие';
    vasiliyRelationship = 'Отличные';

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
    const talkBtnNav = document.getElementById('talkBtnNav');
    talkBtnNav.style.visibility = 'visible';

    const talkToOne = document.getElementById('talkToOne');
    talkToOne.style.visibility = 'visible';

    changeBg('bg20-part4.png');
    document.getElementById('btn-next').disabled = true;

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
    nextTask('Найти код от замка');
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
    changeBg('bg19-part4.png');

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
    changeBg('bg19-part4.png');

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
    changeBg('bg1-part4.png');

    nextTask('Найти ключ к церкви');
    nameDialog.innerHTML = `Михаил`;
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

            <button id="btn-house-4" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="checkKeyHouse4()">
                Дом 4
            </button>
        </div>

        <div class="row dialog d-flex justify-content-center" id="village-map-div">
            <button id="btn-map" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="mapVillage()">
                Карта деревни
            </button>
            <button class="btn btn-dark mt-2 mb-2 mr-2 ml-2" id="btn-inventory" data-toggle="modal" data-target="#inventory">Инвентарь</button>
        </div>
    `;

    document.getElementById('btn-next').disabled = true;
}

function house1() {
    changeBg('bg15-part4.png');

    nameDialog.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead text-dialog" id="whatInHereHouse1"></p>
        </div>

        <div class="row dialog d-flex justify-content-center" id="houses">
            <button id="btn-house-4" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="checkKeyHouse4()">
                Дом 4
            </button>

            <button id="btn-house-5" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="house5()">
                Дом 5
            </button>
        </div>

        <div class="row dialog d-flex justify-content-center" id="village-map-div">
            <button id="btn-map" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="mapVillage1()">
                Карта деревни
            </button>
            <button class="btn btn-dark mt-2 mb-2 mr-2 ml-2" id="btn-inventory" data-toggle="modal" data-target="#inventory">Инвентарь</button>
        </div>
    `;

    const whatInHereHouse1 = document.getElementById('whatInHereHouse1');

    if (takeKeyHouse1 == false) {
        whatInHereHouse1.innerHTML = `Ключ с рисунком скорпиона... Хм...`;

        fakeChurchKeys += 1;
        inventoryInner.innerHTML += `
            <img src="img/keyScorpion (fake).png" id="fakeKeyScorpion${fakeChurchKeys}" class="img-inventory" alt="map-village">
        `;
    } else {
        whatInHereHouse1.innerHTML = `Здесь уже ничего нет`;
    }

    takeKeyHouse1 = true;
    churchKey = 'false';
}

function house2() {
    changeBg('bg17-part4.png');

    nameDialog.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead text-dialog" id="whatInHereHouse2"></p>
        </div>

        <div class="row dialog d-flex justify-content-center" id="houses">
            <button id="btn-house-3" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="house3()">
                Дом 3
            </button>

            <button id="btn-house-4" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="checkKeyHouse4()">
                Дом 4
            </button>
        </div>

        <div class="row dialog d-flex justify-content-center" id="village-map-div">
            <button id="btn-map" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="mapVillage2()">
                Карта деревни
            </button>
            <button class="btn btn-dark mt-2 mb-2 mr-2 ml-2" id="btn-inventory" data-toggle="modal" data-target="#inventory">Инвентарь</button>
        </div>
    `;

    const whatInHereHouse2 = document.getElementById('whatInHereHouse2');

    if (takeKeyHouse2 == false) {
        whatInHereHouse2.innerHTML = `Здесь ключ с рисунком скорпиона`;

        fakeChurchKeys += 1;
        inventoryInner.innerHTML += `
            <img src="img/keyScorpion (fake).png" id="fakeKeyScorpion${fakeChurchKeys}" class="img-inventory">
        `;
    } else {
        whatInHereHouse2.innerHTML = `Здесь ничего нет`;
    }

    takeKeyHouse2 = true;
    churchKey = 'false';
}

function house3() {
    changeBg('bg18-part4.png');

    nameDialog.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead text-dialog" id="whatInHereHouse3"></p>
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

        <div class="row dialog d-flex justify-content-center" id="village-map-div">
            <button id="btn-map" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="mapVillage3()">
                Карта деревни
            </button>
            <button class="btn btn-dark mt-2 mb-2 mr-2 ml-2" id="btn-inventory" data-toggle="modal" data-target="#inventory">Инвентарь</button>
        </div>
    `;

    const whatInHereHouse3 = document.getElementById('whatInHereHouse3');

    if (takeKeyHouse3 == false) {
        whatInHereHouse3.innerHTML = `Здесь ключ с рисунком скорпиона`;

        firstChapterKeyHouse4 = 'true';
        inventoryInner.innerHTML += `
            <img src="img/firstPartKeyHouse4.png" id="firstPartKeyHouse4" class="img-inventory-part-key">
        `;
    } else {
        whatInHereHouse3.innerHTML = `Ничего нет`;
    }

    takeKeyHouse3 = true;
}

function house4() {
    changeBg('bg16-part4.png');

    nameDialog.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead text-dialog" id="whatInHereHouse4"></p>
        </div>

        <div class="row dialog d-flex justify-content-center" id="houses">
            <button id="btn-church" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="church()">
                Церковь
            </button>
        </div>

        <div class="row dialog d-flex justify-content-center" id="village-map-div">
            <button id="btn-map" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="mapVillage4()">
                Карта деревни
            </button>
            <button class="btn btn-dark mt-2 mb-2 mr-2 ml-2" id="btn-inventory" data-toggle="modal" data-target="#inventory">Инвентарь</button>
        </div>
    `;

    const whatInHereHouse4 = document.getElementById('whatInHereHouse4');

    if (takeKeyHouse4 == false) {
        whatInHereHouse4.innerHTML = `О, по-моему здесь настоящий ключ от церкви!`;

        trueChurchKey += 1;
        inventoryInner.innerHTML += `
            <img src="img/keyScorpion (true).png" id="trueKeyScorpion${trueChurchKey}" class="img-inventory">
        `;
    } else {
        whatInHereHouse4.innerHTML = `Здесь... Ничего!`;
    }

    takeKeyHouse4 = true;
    churchKey = 'true';
}

function house5() {
    changeBg('bg14-part4.png');

    nameDialog.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead text-dialog" id="whatInHereHouse5"></p>
        </div>

        <div class="row dialog d-flex justify-content-center" id="houses">
            <button id="btn-house-1" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="house1()">
                Дом 1
            </button>

            <button id="btn-house-4" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="checkKeyHouse4()">
                Дом 4
            </button>

            <button id="btn-church" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="church()">
                Церковь
            </button>
        </div>

        <div class="row dialog d-flex justify-content-center" id="village-map-div">
            <button id="btn-map" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="mapVillage5()">
                Карта деревни
            </button>
            <button class="btn btn-dark mt-2 mb-2 mr-2 ml-2" id="btn-inventory" data-toggle="modal" data-target="#inventory">Инвентарь</button>
        </div>
    `;

    const whatInHereHouse5 = document.getElementById('whatInHereHouse5');

    if (takeKeyHouse5 == false) {
        whatInHereHouse5.innerHTML = `Здесь часть какого-то ключа, хм...`;

        secondChapterKeyHouse4 = 'true';

        inventoryInner.innerHTML += `
            <img src="img/secondPartKeyHouse4.png" id="secondPartKeyHouse4" class="img-inventory-part-key">
        `;
    } else {
        whatInHereHouse5.innerHTML = `Ничего...`;
    }

    takeKeyHouse5 = true;
}

function church() {
    changeBg('bg4-part4.png');

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

        <div class="row dialog d-flex justify-content-center" id="village-map-div">
            <button id="btn-map" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="mapVillageChurch()">
                Карта деревни
            </button>
            <button class="btn btn-dark mt-2 mb-2 mr-2 ml-2" id="btn-inventory" data-toggle="modal" data-target="#inventory">Инвентарь</button>
        </div>
    `;
}

function checkKeyHouse4() {
    try {
        if (firstChapterKeyHouse4 == 'true') {
            const firstPartKeyHouse4 = document.getElementById('firstPartKeyHouse4');
            firstPartKeyHouse4.parentNode.removeChild(firstPartKeyHouse4);
        }

        if (secondChapterKeyHouse4 == 'true') {
            const secondPartKeyHouse4 = document.getElementById('secondPartKeyHouse4');
            secondPartKeyHouse4.parentNode.removeChild(secondPartKeyHouse4);
        }
    } catch { }

    if (firstChapterKeyHouse4 == 'true' && secondChapterKeyHouse4 == 'true') {
        house4();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Не открывается',
        });

        swalStyles();
    }
}

function checkChurchKey() {
    if (churchKey == 'true') {
        churchFight();
    } else {
        Swal.fire({
            icon: 'error',
            text: 'Не открывается',
        });

        if (fakeChurchKeys > 0) {
            const imgFakeKeyChurch = document.getElementById(`fakeKeyScorpion${fakeChurchKeys}`);
            imgFakeKeyChurch.parentNode.removeChild(imgFakeKeyChurch);

            fakeChurchKeys -= 1;
        }
    }
}

function churchFight() {
    changeBg('bg9-part4.png');

    const talkBtnNav = document.getElementById('talkBtnNav');
    talkBtnNav.parentNode.removeChild(talkBtnNav);

    const talkToOne = document.getElementById('talkToOne');
    talkToOne.parentNode.removeChild(talkToOne);

    const talkToOneInner = document.getElementById('talkToOneInner');
    talkToOneInner.parentNode.removeChild(talkToOneInner);

    nextTask('Отбиться от зомби');
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
    sound.src = 'sounds/shot.mp3';

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
    changeBg('bg5-part4.png');

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
    // const btnTalkMikhail = document.getElementById('btn-talk-mikhail');
    // btnTalkMikhail.disabled = false;

    // const btnTalkVasiliy = document.getElementById('btn-talk-vasiliy');
    // btnTalkVasiliy.parentNode.removeChild(btnTalkVasiliy);

    // const talkAnyOne = document.getElementById('talkAnyOne');
    // talkAnyOne.innerHTML = `Вы можете поговорить с Блогером`;

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
        document.getElementById('task').innerHTML = `Задание: Найдите команду`;
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

        document.getElementById('task').innerHTML = `Задание: Найдите Василия`;

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

        document.getElementById('task').innerHTML = `Задание: Найдите Василия`;

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

        document.getElementById('task').innerHTML = `Задание: Найдите команду`;

        nameDialog.innerHTML = `Полина`;
        dialogs.innerHTML = `
            <div class="row dialog">
                <p class="lead" id="text-dialog">Сначала за командой! Смотри в оба!</p>
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
    changeBg('bg10-part4.png');

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
    document.getElementById('task').innerHTML = `Задание: Найдите Василия`;
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
    changeBg('bg10-part4.png');

    nameDialog.innerHTML = 'Полина';
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Я так понимаю за большой дверью - Василий, 
                но она естественно закрыта. Нужен ключ.</p>
        </div>

        <div class="row dialog d-flex justify-content-center" id="laboratory">
            <button id="btn-room-1" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="roomLaboratory1()">
                Комната 1
            </button>
        </div>
    `;
}

// transition in search items mechanics
function mainRoomLaboratoryTransition() {
    localStorage.setItem('mainRoomLaboratory', 'mainRoomLaboratory');
}

function transitionRoom1() {
    location.href = 'searchRoom1/';
}

function roomLaboratory1() {
    changeBg('bg12-part4.png');

    // Поиск предметов 1
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Какой же здесь беспорядок...</p>
        </div>

        <div class="row dialog d-flex justify-content-center" id="laboratory">
            <button id="btn-find-key-1" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="mainRoomLaboratoryTransition(); transitionRoom1()">
                Искать ключ
            </button>
        </div>
    `;
}

function mainRoomLaboratory() {
    changeBg('bg10-part4.png');

    nameDialog.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">О, нет... Василий...</p>
        </div>
    `;

    btnNext('fightVasiliy');
}

function fightVasiliy() {
    alert('Охлаждение труб нестабильно. Сделайте все по середине! Торопитесь!');
    nextTask('Одолеть Василия');
    document.getElementById('btn-next').disabled = true;
    music.src = 'musics/vasiliyFight.mp3';

    try {
        nameDiv.parentNode.removeChild(nameDiv);
    } catch {}

    dialogs.innerHTML = `
        <div class="d-flex justify-content-center mt-2" id="timerDiv"></div>

        <div class="progress mt-3" id="progress-div-polina-hp">
            <div class="progress-bar progress-bar-striped bg-success" id="progressbarPolinaHp" role="progressbar" style="width: 100%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">${polinaHp}%</div>
        </div>

        <div class="progress mt-3" id="progress-div-vasiliy-hp">
            <div class="progress-bar progress-bar-striped bg-danger" id="progressbarVasiliyHp" role="progressbar" style="width: 100%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">${vasiliyHp}%</div>
        </div>

        <div class="row dialog d-flex justify-content-center mt-3" id="church">
            <button id="btn-valve-1" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="valve('valveIndicator1'); valveBtn='btn-valve-1'">
                Вентиль 1
            </button>

            <button id="btn-valve-2" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="valve('valveIndicator2'); valveBtn='btn-valve-2'">
                Вентиль 2
            </button>

            <button id="btn-valve-3" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="valve('valveIndicator3'); valveBtn='btn-valve-3'">
                Вентиль 3
            </button>

            <button id="btn-valve-4" type="button" class="btn btn-dark mt-2 mb-2 mr-2 ml-2" onclick="valve('valveIndicator4'); valveBtn='btn-valve-4'">
                Вентиль 4
            </button>
        </div>

        <div id="valvesDiv"></div>
    `;

    const polinaHpInterval = setInterval(() => {
        try {
            const polinaHpProgressBar = document.getElementById('progressbarPolinaHp');
            polinaHp -= 10;

            polinaHpProgressBar.style.width = `${polinaHp}%`;
            polinaHpProgressBar.innerHTML = `${polinaHp}%`;

            if (polinaHp == 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Вы умерли!',
                });

                setTimeout(() => {
                    location.reload();
                }, 2000);
            }
        } catch {}
    }, 10000);

    // Обратный отсчет самоуничтожения
    setTimeout(() => {
        soundSelfDestructionStart();
    }, 3000);
}

let timerMinutes = 1;
let timerSeconds = 0;

function soundSelfDestructionStart() {
    // self destruction start code
    sound.src = 'sounds/1minutes.mp3';

    const timerDiv = document.getElementById('timerDiv');
    timerDiv.innerHTML += `
        <div class="bg-danger" id="progressTimer" role="progressbar">${timerMinutes}:0${timerSeconds}</div>
    `;

    const intervalSelfDestruction = setInterval(() => {
        if (timerMinutes == 0 && timerSeconds == 11) {
            sound.src = 'sounds/10.mp3';
        }

        if (timerMinutes == 0 && timerSeconds == 10) {
            sound.src = 'sounds/9.mp3';
        }

        if (timerMinutes == 0 && timerSeconds == 9) {
            sound.src = 'sounds/8.mp3';
        }

        if (timerMinutes == 0 && timerSeconds == 8) {
            sound.src = 'sounds/7.mp3';
        }

        if (timerMinutes == 0 && timerSeconds == 7) {
            sound.src = 'sounds/6.mp3';
        }

        if (timerMinutes == 0 && timerSeconds == 6) {
            sound.src = 'sounds/5.mp3';
        }

        if (timerMinutes == 0 && timerSeconds == 5) {
            sound.src = 'sounds/4.mp3';
        }

        if (timerMinutes == 0 && timerSeconds == 4) {
            sound.src = 'sounds/3.mp3';
        }

        if (timerMinutes == 0 && timerSeconds == 3) {
            sound.src = 'sounds/2.mp3';
        }

        if (timerMinutes == 0 && timerSeconds == 2) {
            sound.src = 'sounds/1.mp3';
        }
    }, 1000);

    const progressTimer = document.getElementById('progressTimer');

    const intervalChangerTimer = setInterval(() => {
        console.log(timerMinutes, timerSeconds);
        if (timerMinutes == 0 && timerSeconds == 0) {
            Swal.fire({
                icon: 'error',
                title: 'Вы умерли!',
            });

            setInterval(() => {
                location.reload();
            }, 1000);
        }

        if (timerSeconds == 0) {
            timerSeconds = 60;
            timerMinutes -= 1;
        }

        timerSeconds -= 1;
        if (timerSeconds < 10) {
            progressTimer.innerHTML = `${timerMinutes}:0${timerSeconds}`;
        } else {
            progressTimer.innerHTML = `${timerMinutes}:${timerSeconds}`;
        }
    }, 1000);

    const timerSelfDestruction = setInterval(() => {
        if (vasiliyHp == 60) {
            clearInterval(intervalSelfDestruction);
            clearInterval(intervalChangerTimer);
            clearInterval(timerSelfDestruction);
            checkRelationShip();
        }
    }, 1000);
}

function checkRelationShip() {
    if (blogerRelationship == 'Хорошие' || blogerRelationship == 'Отличные') {
        dialogs.innerHTML = `
            <div class="row mt-3 name">
                <p class="lead" id="name-dialog">Блогер</p>
            </div>
            
            <div class="row dialog">
                <p class="lead" id="text-dialog">Там комната связи... Нужно отправить файлы в общий доступ, пока дверь не закрылась...</p>
            </div>
        `;

        setTimeout(() => {
            blogerDead();
        }, 7000);
    } else {
        dialogs.innerHTML = `
            <div class="row mt-3 name">
                <p class="lead" id="name-dialog">Блогер</p>
            </div>

            <div class="row dialog">
                <p class="lead" id="text-dialog">Полина! Нужно из комнаты связи отправить файлы в общий доступ, пока дверь не закрылась!</p>
            </div>
        `;

        setTimeout(() => {
            polinaDead();
        }, 7000);
    }
}

function blogerDead() {
    console.log('Relationship with Bloger - ', blogerRelationship);
    console.log('Bloger is dead');
    dialogs.innerHTML = `
        <div class="row mt-3 name">
            <p class="lead" id="name-dialog">Блогер</p>
        </div>

        <div class="row dialog">
            <p class="lead" id="text-dialog">Беги, я все сделаю! Сейчас лаборатория взорвется!</p>
        </div>

        <div class="row mt-3 name">
            <p class="lead" id="name-dialog">Полина</p>
        </div>

        <div class="row dialog">
            <p class="lead" id="text-dialog">Нет... Я тебя вытащу!</p>
        </div>

        <div class="row mt-3 name">
            <p class="lead" id="name-dialog">Блогер</p>
        </div>

        <div class="row dialog">
            <p class="lead" id="text-dialog">Уже поздно! Беги!</p>
        </div>
    `;

    setTimeout(() => {
        end();
    }, 10000);
}

function polinaDead() {
    console.log('Relationship with Bloger - ', blogerRelationship);
    console.log('Polina is dead');

    dialogs.innerHTML = `
        <div class="row mt-3 name">
            <p class="lead" id="name-dialog">Полина</p>
        </div>

        <div class="row dialog">
            <p class="lead" id="text-dialog">Беги, я все сделаю! Сейчас здесь все взорвется!</p>
        </div>

        <div class="row mt-3 name">
            <p class="lead" id="name-dialog">Блогер</p>
        </div>

        <div class="row dialog">
            <p class="lead" id="text-dialog">Я тебя вытащу!</p>
        </div>

        <div class="row mt-3 name">
            <p class="lead" id="name-dialog">Полина</p>
        </div>

        <div class="row dialog">
            <p class="lead" id="text-dialog">Поздно! Беги!</p>
        </div>
    `;

    setTimeout(() => {
        end();
    }, 10000);
}

function end() {
    music.src = 'musics/The Seige - I Am Defiant (prettymp3.ru).mp3';
    footerButtons.style.visibility = 'hidden';

    windowDiv.innerHTML = `
        <div class="thanksEnd mt-2">
            <p class="lead text-center text-light mt-2 display-4 title" id="title-game">The First of Them</p>
            <p class="lead text-center text-light mt-1 mt-4 display-3 title-end" id="title2">Конец игры</p>
            
            <div class="d-flex justify-content-center" id="links">
                <div class="btn-group" role="group">
                    <button id="btnGroupDrop1" type="button" class="btn btn-dark dropdown-toggle mt-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Ссылки
                    </button>
                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <a class="dropdown-item" href="https://vk.com/public_lar"><i id="vk-icon" class="fab fa-vk"></i> Группа Vk</a>
                        <a class="dropdown-item" href="https://www.youtube.com/channel/UCeh4yaV7iYy0zrbN1-qy2IQ"><i id="youtube-icon" class="fab fa-youtube"></i> Канал YouTube</a>
                    </div>
                </div>
                <div class="btn-group ml-2" role="group">
                    <button id="btnGroupDrop1" type="button" class="btn btn-dark dropdown-toggle mt-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Выбрать главу
                    </button>
                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <a class="dropdown-item" href="location.href='../The First of Them (Chapter 1+Chapter 2)/chapter1/show.html'">Глава 1</a>
                        <a class="dropdown-item" href="location.href='../The First of Them (Chapter 1+Chapter 2)/chapter2/show-chapter2.html'">Глава 2</a>
                        <a class="dropdown-item" onclick="location.href='../chapter 3/public/show.html'">Глава 3</a>
                        <a class="dropdown-item" onclick="location.reload()">Глава 4</a>
                    </div>
                </div>
                <button id="quit" type="button" class="btn btn-dark mt-2 ml-2" onclick="location.href = '../The First of Them (Chapter 1+Chapter 2)/logo.html'">
                    Выход
                </button>
            </div>
            <div class="d-flex justify-content-center" id="links2">
                <button class="btn btn-dark mt-2 ml-2" id="btn-thanks" data-toggle="modal" data-target="#thanks-div">Благодарность</button>
            </div>

            <div class="card-deck text-center mt-4">
                <div class="card text-white bg-dark">
                    <div class="card-body">
                        <h5 class="card-title">Программисты</h5>
                        <p class="card-text">Никита Зинин</p>
                        <p class="card-text">Анна Пастухова</p>
                        <p class="card-text">Данил Чернышев</p>
                    </div>
                </div>
                <div class="card text-white bg-dark">
                    <div class="card-body">
                        <h5 class="card-title">Сценарий</h5>
                        <p class="card-text">Никита Зинин</p>
                        <p class="card-text">Анна Пастухова</p>
                        <p class="card-text">Данил Чернышев</p>
                    </div>
                </div>
                <div class="card text-white bg-dark">
                    <div class="card-body">
                        <h5 class="card-title">Художник</h5>
                        <p class="card-text">Данил Чернышев</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="thanks-div" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content bg-dark">
                    <div class="modal-header text-white">
                        <h5 class="modal-title" id="thanks-title">Благодарность</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body text-center text-white">
                        <p class="lead">Отдельная благодарность всем тем,
                            кто так или иначе принял участие в разработке игры. Оценил, поиграл и замотивировал нас!</p>
                        <p class="lead bg-success" id="you">Особая благодарность тебе за прохождение!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark" data-dismiss="modal">Закрыть</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Map images
function mapVillage() {
    $('#mapVillageOriginal').modal('show');
}

function mapVillage1() {
    $('#mapVillage1').modal('show');
}

function mapVillage2() {
    $('#mapVillage2').modal('show');
}

function mapVillage3() {
    $('#mapVillage3').modal('show');
}

function mapVillage4() {
    $('#mapVillage4').modal('show');
}

function mapVillage5() {
    $('#mapVillage5').modal('show');
}

function mapVillageChurch() {
    $('#mapVillageChurch').modal('show');
}
