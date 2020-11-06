/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */

// main variables
const music = document.getElementById('music');
const sound = document.getElementById('sound');
const dialogs = document.getElementById('dialogs');
const name = document.getElementById('name-dialog');
const rationFooter = document.getElementById('ration-footer');
const footerButtons = document.getElementById('footer-buttons');
const windowDiv = document.getElementById('window');
const btnNextElem = document.getElementById('btn-next');

// Div - name and dialog
const nameDiv = document.getElementById('name');
const dialogsDiv = document.getElementById('dialogs');

// Получить из LocalStorage и заменить его на существующее
// team (objects)
const team = [
    nikita = {
        name: 'Никита',
        hp: 100,
        alive: true,
    },

    anna = {
        name: 'Анна',
        hp: 100,
        alive: true,
    },

    danil = {
        name: 'Данил',
        hp: 100,
        alive: true,
    },

    oleg = {
        name: 'Олег',
        hp: 100,
        alive: true,
    },
];

const mainHeroes = [
    polina = {
        name: 'Полина',
        hp: 100,
        alive: true,
    },

    bloger = {
        name: 'Блогер',
        hp: 100,
        alive: true,
    },
];

// Статистика
let relationshipBloger = 'Хорошие';
let relationshipPolina = 'Хорошие';
let relationshipTeam = 'Хорошие';
const statDeadPeoplesTeam = [];
let statKillEnemies = 0;

let deaths = 0;

// Мертвый из отряда
let dead = '';

// qte variables
let widthPlusClean = 0;
let clickClean = 0;

let widthDeadPhobosSec = 100;
let widthDeadPhobosSuccess = 0;
let deadPhobosSec = 5;
let clickDeadPhobos = 0;

let qteSearch = true;
let widthPlusOfficeSearch = 0;

let qteSearchLab = true;
let widthSearchLab = 0;

let qteCookAntidotVar = true;
let widthCookAntidot = 0;

let monsterRoom32Width = 100;
let monsterRoom32Sec = 5;
let clickMonster32 = 0;

let monsterRoom34Width = 100;
let monsterRoom34Sec = 5;
let clickMonster34 = 0;

// какую функцию запускать
let splitUpChoose;
let bossFinal = false;
let antidot;

// hope
let chooseDialogHope = false;

// Main functions - Settings
function swalStyles() {
    const swal2Modal = document.getElementsByClassName('swal2-modal')[0];
    swal2Modal.style.background = 'rgb(58, 58, 58)';

    const swal2CancelBtn = document.getElementsByClassName('swal2-cancel')[0];
    swal2CancelBtn.style.background = '#dc3545';

    const swal2Content = document.getElementsByClassName('swal2-content')[0];
    swal2Content.style.color = '#fff';

    const swal2Title = document.getElementsByClassName('swal2-title')[0];
    swal2Title.style.color = '#fff';

    try {
        const swal2IconLeft = document.getElementsByClassName('swal2-success-circular-line-left')[0];
        swal2IconLeft.style.background = 'rgb(58, 58, 58)';

        const swal2IconRight = document.getElementsByClassName('swal2-success-circular-line-right')[0];
        swal2IconRight.style.background = 'rgb(58, 58, 58)';

        const swal2IconLine = document.getElementsByClassName('swal2-success-fix')[0];
        swal2IconLine.style.background = 'rgb(58, 58, 58)';
    } catch { }
}

function btnNext(func) {
    btnNextElement = document.getElementById('btn-next');
    btnNextElement = btnNextElement.parentNode.removeChild(btnNextElement);
    document.getElementById('footer-buttons').innerHTML += `
        <button id="btn-next" type="button" class="btn btn-lg btn-dark" onclick="${func}">Далее</button>
    `;
}

function getRandNumbTeam(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function deleteDeathsLc() {
    localStorage.removeItem('deaths');
}

function soon() {
    Swal.fire({
        icon: 'info',
        title: 'Скоро!',
    });
}

/* Пока достижений связанных со статистикой */
// function checkStatistic() {
//     let deathAchievemnt = 'Не получено';
//     let deathsTeamPeopleAchievemnt = 'Не получено';

//     const deathsLc = localStorage.getItem('deaths');
//     if (deathsLc != null) {
//         deathAchievemnt = 'Получено';
//     }

//     if (statDeadPeoplesTeam.length != 0) {
//         deathsTeamPeopleAchievemnt = 'Получено';
//     }

//     Swal.fire({
//         icon: 'question',
//         html: `
//             <p class="lead" id="achievemntDeath">Достижение: Умереть 0 раз - ${deathAchievemnt}</p>
//             <p class="lead" id="achievemntDeathsTeamPeoples">Достижение: Не потерять ни одного человека из отряда - ${deathsTeamPeopleAchievemnt}</p>
//         `,
//     });
// }

// Main functions - Script
function helloTeam() {
    document.body.style.backgroundImage = 'url(\'img/office.jpeg\')';
    music.src = 'sounds/office.wav';

    name.innerHTML = 'Полина';
    dialogs.innerHTML = `
        <div id="dialogs">
            <div class="row dialog">
                <p class="lead" id="text-dialog">Всем здравствуйте, солдаты!</p>
            </div>
        </div>

        <div class="mt-4" id="name">
            <div class="row name">
                <p class="lead" id="name-dialog">Отряд</p>
            </div>
        </div>

        <div id="dialogs">
            <div class="row dialog">
                <p class="lead" id="text-dialog">Здравствуйте, мисс!</p>
            </div>
        </div>
    `;

    btnNext('training()');
}

function training() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-dark',
        },

        buttonsStyling: false,
    });

    swalWithBootstrapButtons.fire({
        title: 'Обучение',
        imageUrl: 'img/ration.PNG',
        html: `
            Перед вами рация. <br /> 
            Сверху имя ваших людей из отряда: Анна, Никита, Данил, Олег. <br /> 
            Слева направление куда их можно отправить: налево, прямо, направо.
        `,
        confirmButtonText: 'Понятно',
    }).then((result) => {
        if (result.value) {
            goToMountains();
        }
    });

    swalStyles();
}

function goToMountains() {
    name.innerHTML = 'Полина';
    dialogs.innerHTML = `
        <div id="dialogs">
            <div class="row dialog">
                <p class="lead" id="text-dialog">Мой давний знакомый рассказал мне 
                    где может примерно находится лаборатория с вирусом, 
                    поэтому сегодня мы наконец отправляемся на ее поиски в горах. 
                    Запасаемся оружием, патронами. Готовимся ко всему...
                </p>
            </div>
        </div>

        <div class="mt-4" id="name">
            <div class="row name">
                <p class="lead" id="name-dialog">Отряд</p>
            </div>
        </div>

        <div id="dialogs">
            <div class="row dialog">
                <p class="lead" id="text-dialog">Есть!</p>
            </div>
        </div>
    `;

    btnNext(`blogerChangeHeroBloger('Б', 'Л', 'О', 'Г', 'Е', 'Р', '#f33b3b')`);
}

// eslint-disable-next-line require-jsdoc
// eslint-disable-next-line no-unused-vars
function blogerChangeHeroBloger(letter1, letter2, letter3,
    letter4, letter5, letter6,
    shadowColor) {
    document.body.style.background = '#000';
    music.src = '';
    sound.src = 'sounds/bloger_change.mp3';

    document.getElementById('name').style.visibility = 'hidden';
    document.getElementById('footer-buttons').style.visibility = 'hidden';

    dialogs.innerHTML = `
        <div class="container d-flex justify-content-center" id="name-text-div">
            <div>
                <h1 style="float: left;" class="title-show1" id="letter-1">${letter1}</h1>
                <h1 style="float: left;" class="title-show2" id="letter-2">${letter2}</h1>
                <h1 style="float: left;" class="title-show3" id="letter-3">${letter3}</h1>
                <h1 style="float: left;" class="title-show4" id="letter-4">${letter4}</h1>
                <h1 style="float: left;" class="title-show5" id="letter-5">${letter5}</h1>
                <h1 style="float: left;" class="title-show6" id="letter-6">${letter6}</h1>
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
        p1.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p1.id = 'title-show1';

        p2.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p2.id = 'title-show2';

        p3.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p3.id = 'title-show3';

        p4.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p4.id = 'title-show4';

        p5.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p5.id = 'title-show5';

        p6.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p6.id = 'title-show6';
    }, 200);

    setTimeout(() => {
        blogerHouse();
    }, 5000);
}

function blogerHouse() {
    music.src = '../../The First of Them (Chapter 1+Chapter 2)/chapter1/music/night_jungle.mp3';
    document.getElementById('name').style.visibility = 'visible';
    document.getElementById('footer-buttons').style.visibility = 'visible';

    document.body.style.background = 'url(\'img/house.jpg\')';

    const p1 = document.getElementById('title-show1');
    const p2 = document.getElementById('title-show2');
    const p3 = document.getElementById('title-show3');
    const p4 = document.getElementById('title-show4');
    const p5 = document.getElementById('title-show5');
    const p6 = document.getElementById('title-show6');

    p1.parentNode.removeChild(p1);
    p2.parentNode.removeChild(p2);
    p3.parentNode.removeChild(p3);
    p4.parentNode.removeChild(p4);
    p5.parentNode.removeChild(p5);
    p6.parentNode.removeChild(p6);

    name.innerHTML = 'Блогер';
    dialogs.innerHTML = `
        <div id="dialogs">
            <div class="row dialog">
                <p class="lead" id="text-dialog">Так, вот разрушенный особняк, 
                    нужно посмотреть осталось ли что здесь,
                    по моим предположениям, лаборатория должна быть где-то внизу
                </p>
            </div>
        </div>
    `;

    btnNext('house()');
}

function house() {
    music.src = '';

    document.body.style.background = 'url(\'img/house_main_hall.jpg\')';
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = 'cover';

    dialogs.innerHTML = `
         <div id="dialogs">
            <div class="row dialog">
                <p class="lead" id="text-dialog">Скорее всего это дверь в лабораторию, но нужно расчистить путь</p>
            </div>
        </div> 
    `;

    btnNext('qteCleanPathHouse()');
}

function qteCleanPathHouse() {
    btnNextElement = document.getElementById('btn-next');
    btnNextElement.disabled = true;

    name.innerHTML = `Игра`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Расчищайте путь в лабораторию</p>
        </div>
        <div class="row dialog d-flex justify-content-center" id="run-div-btn">
            <button id="btn-clean-path" type="button" class="btn btn-dark mt-2 mb-2" onclick="counterClean()">
                Чистить
            </button>
        </div>

        <div class="progress mt-4" id="progress-div">
            <div class="progress-bar progress-bar-striped bg-success" id="progressbar_clean" role="progressbar" style="width: 0" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
        </div>
    `;
}

function counterClean() {
    const progressbarClean = document.getElementById('progressbar_clean');
    const progress = document.getElementById('progress-div');
    const cleanBtn = document.getElementById('btn-clean-path');

    clickClean += 1;

    widthPlusClean += 10;
    progressbarClean.style.width = `${widthPlusClean}%`;
    progressbarClean.innerHTML = `${widthPlusClean}%`;

    if (clickClean === 10) {
        progress.parentNode.removeChild(progress);
        cleanBtn.parentNode.removeChild(cleanBtn);

        btnNextElement = document.getElementById('btn-next');
        btnNextElement.disabled = true;

        qteDeadPhobos();
    }
}

function qteDeadPhobos() {
    sound.src = 'sounds/00975.mp3';

    name.innerHTML = `Блогер`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Ааа, что это..!?</p>
        </div>

        <div class="row dialog d-flex justify-content-center" id="run-div-btn">
            <button id="btn-go-phobos" type="button" class="btn btn-dark mt-2 mb-2" onclick="counterDeadPhobos()">
                Вырываться
            </button>
        </div>

        <div class="progress mt-4" id="progress-div-phobos-sec">
            <div class="progress-bar progress-bar-striped bg-danger" id="progressbar_dead_phobos_sec" role="progressbar" style="width: 100%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">5 сек</div>
        </div>

        <div class="progress mt-2" id="progress-div-phobos-success">
            <div class="progress-bar progress-bar-striped bg-success" id="progressbar_dead_phobos_success" role="progressbar" style="width: 0" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
        </div>
    `;

    setInterval(() => {
        const progressbarDeadPhobosSec = document.getElementById('progressbar_dead_phobos_sec');

        widthDeadPhobosSec -= 20;
        deadPhobosSec -= 1;

        try {
            progressbarDeadPhobosSec.style.width = `${widthDeadPhobosSec}%`;
            progressbarDeadPhobosSec.innerHTML = `${deadPhobosSec}сек`;
        } catch {
            deadPhobosSec = false;
        }

        if (deadPhobosSec === 0) {
            deaths += 1;
            localStorage.setItem('deaths', deaths);

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

function counterDeadPhobos() {
    const progressbarDeadPhobosSuccess = document.getElementById('progressbar_dead_phobos_success');
    const progressPhobosSec = document.getElementById('progress-div-phobos-sec');
    const progressPhobosSuccess = document.getElementById('progress-div-phobos-success');
    const btnGoPhobos = document.getElementById('btn-go-phobos');

    clickDeadPhobos += 1;

    widthDeadPhobosSuccess += 10;
    progressbarDeadPhobosSuccess.style.width = `${widthDeadPhobosSuccess}%`;
    progressbarDeadPhobosSuccess.innerHTML = `${widthDeadPhobosSuccess}%`;

    if (clickDeadPhobos === 10) {
        progressPhobosSec.parentNode.removeChild(progressPhobosSec);
        progressPhobosSuccess.parentNode.removeChild(progressPhobosSuccess);
        btnGoPhobos.parentNode.removeChild(btnGoPhobos);

        btnNextElement = document.getElementById('btn-next');
        btnNextElement.disabled = true;

        houseLabBloger();
    }
}

function houseLabBloger() {
    document.body.style.background = 'url(\'img/lab.jpg\')';
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = 'cover';

    sound.src = '';

    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Кто это был?</p> 
        </div>
    `;

    btnNext('houseLabOfficeBloger()');
}

function houseLabOfficeBloger() {
    document.body.style.background = 'url(\'img/lab_office.jpg\')';
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = 'cover';

    btnNextElement = document.getElementById('btn-next');
    btnNextElement.disabled = true;

    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Так, надо что-то найти...</p> 
        </div>

        <div class="progress mt-4" id="progress-div">
            <div class="progress-bar progress-bar-striped bg-success" id="progressbar_house_office_search" role="progressbar" style="width: 0" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
        </div>
    `;

    const progressbarOfficeSearch = document.getElementById('progressbar_house_office_search');
    const progress = document.getElementById('progress-div');
    const officeSearchBtn = document.getElementById('btn-office-search');

    setInterval(() => {
        try {
            if (widthPlusOfficeSearch == 100) {
                qteSearch = false;

                coordinateLab();

                progress.parentNode.removeChild(progress);
                officeSearchBtn.parentNode.removeChild(officeSearchBtn);
            }
        } catch {
            widthPlusOfficeSearch = false;
        }

        if (qteSearch == true) {
            widthPlusOfficeSearch += 25;
            progressbarOfficeSearch.style.width = `${widthPlusOfficeSearch}%`;
            progressbarOfficeSearch.innerHTML = `${widthPlusOfficeSearch}%`;
        } else {}
    }, 1000);
}

function coordinateLab() {
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Что-то нашел!</p> 
        </div>

        <div class="row dialog">
            <p class="lead" id="text-dialog">Хм, координаты, так...
                Походу есть еще одна лаборатория.
                Нужно попробовать найти ее. Может получится выяснить что-то</p> 
        </div>
    `;

    btnNext(`changeHeroPolinaMountains('П', 'О', 'Л', 'И', 'Н', 'А', '#f33be4')`);
}

function changeHeroPolinaMountains(letter1, letter2, letter3,
    letter4, letter5, letter6,
    shadowColor) {
    document.body.style.background = '#000';
    music.src = '';
    sound.src = 'sounds/polina_change.mp3';

    document.getElementById('name').style.visibility = 'hidden';
    document.getElementById('footer-buttons').style.visibility = 'hidden';

    dialogs.innerHTML = `
        <div class="container d-flex justify-content-center" id="name-text-div">
            <div>
                <h1 style="float: left;" class="title-show1" id="letter-1">${letter1}</h1>
                <h1 style="float: left;" class="title-show2" id="letter-2">${letter2}</h1>
                <h1 style="float: left;" class="title-show3" id="letter-3">${letter3}</h1>
                <h1 style="float: left;" class="title-show4" id="letter-4">${letter4}</h1>
                <h1 style="float: left;" class="title-show5" id="letter-5">${letter5}</h1>
                <h1 style="float: left;" class="title-show6" id="letter-6">${letter6}</h1>
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
        p1.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p1.id = 'title-show1';

        p2.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p2.id = 'title-show2';

        p3.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p3.id = 'title-show3';

        p4.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p4.id = 'title-show4';

        p5.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p5.id = 'title-show5';

        p6.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p6.id = 'title-show6';
    }, 200);

    setTimeout(() => {
        polinaMountains();
    }, 5000);
}

function polinaMountains() {
    try {
        const p1 = document.getElementById('title-show1');
        const p2 = document.getElementById('title-show2');
        const p3 = document.getElementById('title-show3');
        const p4 = document.getElementById('title-show4');
        const p5 = document.getElementById('title-show5');
        const p6 = document.getElementById('title-show6');

        document.body.style.background = 'url(\'img/mountains.jpg\')';
        document.body.style.backgroundPosition = 'center center';
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

    music.src = 'sounds/veter_v_gorah.mp3';
    document.getElementById('name').style.visibility = 'visible';
    document.getElementById('footer-buttons').style.visibility = 'visible';

    name.innerHTML = 'Полина';
    dialogs.innerHTML = `
        <div id="dialogs">
            <div class="row dialog">
                <p class="lead" id="text-dialog">Мы на месте, сейчас, значит...</p>
            </div>
        </div>
    `;

    btnNextElement = document.getElementById('btn-next');
    btnNextElement = btnNextElement.parentNode.removeChild(btnNextElement);
    document.getElementById('footer-buttons').innerHTML += `
        <button id="btn-next" type="button" class="btn btn-lg btn-dark" data-toggle="modal" data-target="#ration-modal">Далее</button>
    `;

    rationFooter.innerHTML += `
        <button class="btn btn-dark" onclick="sendTeamMountains()" id="sendTeamMountains">Отправить</button>
    `;
}

function sendTeamMountains() {
    const chooseArray = [];
    const chooseArrayDirectionValue = [];
    const chooseArrayDirection = [];

    // для вывода выбранных членов отряда
    const teamElements = [
        document.getElementById('nikita1'),
        document.getElementById('nikita2'),
        document.getElementById('nikita3'),

        document.getElementById('anna1'),
        document.getElementById('anna2'),
        document.getElementById('anna3'),

        document.getElementById('danil1'),
        document.getElementById('danil2'),
        document.getElementById('danil3'),

        document.getElementById('oleg1'),
        document.getElementById('oleg2'),
        document.getElementById('oleg3'),
    ];

    const teamElementsDirection = [
        [document.getElementById('nikita1'),
        document.getElementById('anna1'),
        document.getElementById('oleg1'),
        document.getElementById('danil1')],

        [document.getElementById('nikita2'),
        document.getElementById('anna2'),
        document.getElementById('oleg2'),
        document.getElementById('danil2')],

        [document.getElementById('nikita3'),
        document.getElementById('anna3'),
        document.getElementById('oleg3'),
        document.getElementById('danil3')],
    ];

    for (let i = 0; i < teamElementsDirection.length; i++) {
        for (let j = 0; j < teamElementsDirection[i].length; j++) {
            if (teamElementsDirection[i][j].checked) {
                chooseArrayDirectionValue.push(teamElementsDirection[i][j].value);
            }
        }
    }

    for (let i = 0; i < teamElements.length; i++) {
        if (teamElements[i].checked) {
            chooseArray.push(teamElements[i].value);
        }
    }

    // Для проверки
    const nikita1 = document.getElementById('nikita1');
    const nikita2 = document.getElementById('nikita2');
    const nikita3 = document.getElementById('nikita3');

    const anna1 = document.getElementById('anna1');
    const anna2 = document.getElementById('anna2');
    const anna3 = document.getElementById('anna3');

    const danil1 = document.getElementById('danil1');
    const danil2 = document.getElementById('danil2');
    const danil3 = document.getElementById('danil3');

    const oleg1 = document.getElementById('oleg1');
    const oleg2 = document.getElementById('oleg2');
    const oleg3 = document.getElementById('oleg3');

    const chooseMas = chooseArray.toString().replace(/,/g, ', ');

    for (let i = 0; i < teamElementsDirection.length; i++) {
        for (let j = 0; j < teamElementsDirection[i].length; j++) {
            if (teamElementsDirection[i][j].checked) {
                const last = teamElementsDirection[i][j].id.toString().slice(-1);
                if (last == '1') {
                    chooseArrayDirection.push(`${teamElementsDirection[i][j].value} - Налево <br />`);
                } else if (last == '2') {
                    chooseArrayDirection.push(`${teamElementsDirection[i][j].value} - Прямо <br />`);
                } else if (last == '3') {
                    chooseArrayDirection.push(`${teamElementsDirection[i][j].value} - Направо`);
                }
            }
        }
    }

    let namesString = '';
    for (const names of chooseArrayDirection) {
        namesString = namesString + names;
    }

    // Проверка выбора людей (хуй сосня (переделать нормально))
    if (anna1.checked &&
        nikita2.checked &&
        danil3.checked) {
        Swal.fire({
            title: 'Ваш выбор:',
            html: `<p>${namesString}</p>`,
            showCancelButton: true,
            cancelButtonText: 'Отмена',
            confirmButtonText: `Отправить`,
        }).then((result) => {
            if (result.isConfirmed) {
                team[2].alive = 'false';

                $('#ration-modal').modal('hide');
                qteFindLab();
            }
        });

        swalStyles();
    } else if (anna2.checked &&
        nikita3.checked &&
        danil1.checked) {
        Swal.fire({
            title: 'Ваш выбор:',
            html: `<p>${namesString}</p>`,
            showCancelButton: true,
            cancelButtonText: 'Отмена',
            confirmButtonText: `Отправить`,
        }).then((result) => {
            if (result.isConfirmed) {
                team[0].alive = 'false';

                $('#ration-modal').modal('hide');
                qteFindLab();
            }
        });

        swalStyles();
    } else if (anna3.checked &&
        danil1.checked &&
        nikita2.checked) {
        Swal.fire({
            title: 'Ваш выбор:',
            html: `<p>${namesString}</p>`,
            showCancelButton: true,
            cancelButtonText: 'Отмена',
            confirmButtonText: `Отправить`,
        }).then((result) => {
            if (result.isConfirmed) {
                team[1].alive = 'false';

                $('#ration-modal').modal('hide');
                qteFindLab();
            }
        });

        swalStyles();
    } else if (anna1.checked &&
        danil2.checked &&
        nikita3.checked) {
        // Никто не умирает

        Swal.fire({
            title: 'Ваш выбор:',
            html: `<p>${namesString}</p>`,
            showCancelButton: true,
            cancelButtonText: 'Отмена',
            confirmButtonText: `Отправить`,
        }).then((result) => {
            if (result.isConfirmed) {
                $('#ration-modal').modal('hide');
                qteFindLab();
            }
        });

        swalStyles();
    } else if (anna1.checked &&
        oleg3.checked &&
        nikita2.checked) {
        // Никто не умирает

        Swal.fire({
            title: 'Ваш выбор:',
            html: `<p>${namesString}</p>`,
            showCancelButton: true,
            cancelButtonText: 'Отмена',
            confirmButtonText: `Отправить`,
        }).then((result) => {
            if (result.isConfirmed) {
                $('#ration-modal').modal('hide');
                qteFindLab();
            }
        });

        swalStyles();
    } else if (anna2.checked &&
        oleg3.checked &&
        nikita1.checked) {
        Swal.fire({
            title: 'Ваш выбор:',
            html: `<p>${namesString}</p>`,
            showCancelButton: true,
            cancelButtonText: 'Отмена',
            confirmButtonText: `Отправить`,
        }).then((result) => {
            if (result.isConfirmed) {
                team[3].alive = 'false';

                $('#ration-modal').modal('hide');
                qteFindLab();
            }
        });

        swalStyles();
    } else if (nikita2.checked &&
        anna3.checked &&
        oleg1.checked) {
        // Никто не умирает

        Swal.fire({
            title: 'Ваш выбор:',
            html: `<p>${namesString}</p>`,
            showCancelButton: true,
            cancelButtonText: 'Отмена',
            confirmButtonText: `Отправить`,
        }).then((result) => {
            if (result.isConfirmed) {
                $('#ration-modal').modal('hide');
                qteFindLab();
            }
        });

        swalStyles();
    } else if (nikita3.checked &&
        oleg2.checked &&
        anna1.checked) {
        // Никто не умирает

        Swal.fire({
            title: 'Ваш выбор:',
            html: `<p>${namesString}</p>`,
            showCancelButton: true,
            cancelButtonText: 'Отмена',
            confirmButtonText: `Отправить`,
        }).then((result) => {
            if (result.isConfirmed) {
                $('#ration-modal').modal('hide');
                qteFindLab();
            }
        });

        swalStyles();
    } else if (danil2.checked &&
        oleg3.checked &&
        anna1.checked) {
        Swal.fire({
            title: 'Ваш выбор:',
            html: `<p>${namesString}</p>`,
            showCancelButton: true,
            cancelButtonText: 'Отмена',
            confirmButtonText: `Отправить`,
        }).then((result) => {
            if (result.isConfirmed) {
                team[1].alive = 'false';

                $('#ration-modal').modal('hide');
                qteFindLab();
            }
        });

        swalStyles();
    } else if (danil1.checked &&
        oleg3.checked &&
        anna2.checked) {
        Swal.fire({
            title: 'Ваш выбор:',
            html: `<p>${namesString}</p>`,
            showCancelButton: true,
            cancelButtonText: 'Отмена',
            confirmButtonText: `Отправить`,
        }).then((result) => {
            if (result.isConfirmed) {
                team[0].alive = 'false';

                $('#ration-modal').modal('hide');
                qteFindLab();
            }
        });

        swalStyles();
    } else if (oleg1.checked &&
        danil2.checked &&
        anna3.checked) {
        Swal.fire({
            title: 'Ваш выбор:',
            html: `<p>${namesString}</p>`,
            showCancelButton: true,
            cancelButtonText: 'Отмена',
            confirmButtonText: `Отправить`,
        }).then((result) => {
            if (result.isConfirmed) {
                team[2].alive = 'false';

                $('#ration-modal').modal('hide');
                qteFindLab();
            }
        });

        swalStyles();
    } else if (oleg1.checked &&
        nikita2.checked &&
        anna3.checked) {
        Swal.fire({
            title: 'Ваш выбор:',
            html: `<p>${namesString}</p>`,
            showCancelButton: true,
            cancelButtonText: 'Отмена',
            confirmButtonText: `Отправить`,
        }).then((result) => {
            if (result.isConfirmed) {
                    team[2].alive = 'false';

                $('#ration-modal').modal('hide');
                qteFindLab();
            }
        });

        swalStyles();
    } else if (anna1.checked &&
        oleg2.checked &&
        danil3.checked) {
        Swal.fire({
            title: 'Ваш выбор:',
            html: `<p>${namesString}</p>`,
            showCancelButton: true,
            cancelButtonText: 'Отмена',
            confirmButtonText: `Отправить`,
        }).then((result) => {
            if (result.isConfirmed) {
                team[3].alive = 'false';

                $('#ration-modal').modal('hide');
                qteFindLab();
            }
        });

        swalStyles();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка',
            text: 'Нельзя отправить одного человека!',
        });

        swalStyles();
    }
}

function qteFindLab() {
    btnNextElement = document.getElementById('btn-next');
    btnNextElement.disabled = true;

    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Поиск лаборатории...</p> 
        </div>

        <div class="progress mt-4" id="progress-div">
            <div class="progress-bar progress-bar-striped bg-primary" id="progressbar_search_lab" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
        </div>
    `;

    const progressbarSearchLab = document.getElementById('progressbar_search_lab');
    const progress = document.getElementById('progress-div');

    setInterval(() => {
        try {
            if (widthSearchLab == 100) {
                qteSearchLab = false;

                progress.parentNode.removeChild(progress);

                findLabLives();
            }
        } catch {
            widthSearchLab = false;
        }

        if (qteSearchLab == true) {
            widthSearchLab += 25;
            progressbarSearchLab.style.width = `${widthSearchLab}%`;
            progressbarSearchLab.innerHTML = `${widthSearchLab}%`;
        } else {}
    }, 1000);
}

// Найдена лаборатория + показ, кто выжил
function findLabLives() {
    // Массив для сохранения выживших
    const teamAliveMas = [];

    for (let i = 0; i < team.length; i++) {
        if (team[i].alive == true) {
            teamAliveMas.push(team[i].name);
        } else if (team[i].alive == 'false') {
            if (team[i].name == 'Анна' || team[i].name == 'Никита') {
                dead = `${team[i].name.substring(0, team[i].name.length - 1) + 'у'}`;
            } else if (team[i].name == 'Данил' || team[i].name == 'Олег') {
                dead = `${team[i].name.substring(0, team[i].name.length + 1) + 'а'}`;
            }
        }
    }

    const teamAlive = teamAliveMas.toString().replace(/,/g, ', ');

    if (dead != '') {
        Swal.fire({
            title: `Из отряда выжили только: ${teamAlive}`,
            text: `Вы потеряли: ${dead}`,
            confirmButtonText: `Понятно`,
        }).then((result) => {
            if (result.isConfirmed) {
                entryLab();
            } else {
                entryLab();
            }
        });

        swalStyles();
    } else {
        Swal.fire({
            title: `Никто не умер!`,
            icon: 'success',
            confirmButtonText: `Отлично`,
        }).then((result) => {
            if (result.isConfirmed) {
                entryLab();
            }
        });

        swalStyles();
    }
}

function entryLab() {
    document.body.style.background = 'img/labMountains.jpg';

    name.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Так, заходим</p>
        </div>
    `;

    setTimeout(() => {
        sound.src = 'sounds/stones.mp3';
        setTimeout(() => {
             rockfall();
        }, 2000);
    }, 1400);
}

function rockfall() {
    document.body.style.backgroundImage = `url('img/labMountains.jpg')`;
    document.body.style.backgroundPosition = `center center`;
    document.body.style.backgroundSize = `no-repeat`;
    document.body.style.backgroundAttachment = `fixed`;
    document.body.style.backgroundRepeat = `cover`;

    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Вот блин, вход завалило...</p> 
        </div>
    `;

    btnNext('labFindSplitUp()');
}

function labFindSplitUp() {
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Но лабораторию нашли, 
                значит он не соврал, ну, разделимся опять</p>
        </div>
    `;

    btnNext('whySplitUpAgain()');
}

function whySplitUpAgain() {
    if (dead != '') {
        function checkIsDead() {
            const randNumb1 = getRandNumbTeam(0, 3);

            if (team[randNumb1].alive != 'false') {
                name.innerHTML = team[randNumb1].name;
            } else {
                checkIsDead();
            }
        }

        checkIsDead();

        dialogs.innerHTML = `
            <div class="row dialog">
                <p class="lead" id="text-dialog">Мы уже потеряли ${dead},
                    зачем опять разделятся, чтобы еще потерять кого-то?</p>
            </div>
        `;

        btnNext('chooseDialogSplitUpAgainOrNo()');
    } else {
        chooseSplitUpOrNo();
    }
}

function chooseDialogSplitUpAgainOrNo() {
    name.innerHTML = `Выбор`;
    dialogs.innerHTML = `
        <div class="row dialog d-flex justify-content-center" id="chooseDialogSplitUp-div-btn">
            <button id="btn-dialog-1-1" type="button" class="btn btn-dark mt-2 mb-2" onclick="dialogBad(); splitUpChoose = true;">
                - Я здесь командир, что скажу - то и выполнять
            </button>
            <button id="btn-dialog-1-2" type="button" class="btn btn-dark mt-2 mb-2" onclick="dialogHope(); splitUpChoose = true;">
                - В этот раз никого не потеряем
            </button>
            <button id="btn-dialog-1-3" type="button" class="btn btn-dark mt-2 mb-2" onclick="dialogNoOne(); splitUpChoose = false;">
                Никого не отправлять
            </button>
        </div>
    `;
}

function chooseSplitUpOrNo() {
    name.innerHTML = `Выбор: Разделиться или нет?`;
    dialogs.innerHTML = `
        <div class="row dialog d-flex justify-content-center" id="chooseSplitUp-div-btn">
            <button id="btn-splitUp" type="button" class="btn btn-dark mt-2 mb-2" onclick="splitUp(); splitUpChoose = true;">
                Разделиться
            </button>
            <button id="btn-noSplitUp" type="button" class="btn btn-dark mt-2 mb-2" onclick="noSplitUp(); splitUpChoose = false;">
                Никого не отправлять
            </button>
        </div>
    `;
}

function dialogBad() {
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
        title: 'Отряд: отношения понижены',
    });

    relationshipTeam = 'Плохие';

    function checkIsDead() {
        const randNumb1 = getRandNumbTeam(0, 3);

        if (team[randNumb1].alive != 'false') {
            name.innerHTML = team[randNumb1].name;
        } else {
            checkIsDead();
        }
    }

    checkIsDead();

    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Ладно</p>
        </div>
    `;

    btnNext('splitUp()');
}

function dialogHope() {
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
        title: 'Отряд: отношения повышены',
    });

    relationshipTeam = 'Хорошие';
    chooseDialogHope = true;

    function checkIsDead() {
        const randNumb1 = getRandNumbTeam(0, 3);

        if (team[randNumb1].alive != 'false') {
            name.innerHTML = team[randNumb1].name;
        } else {
            checkIsDead();
        }
    }

    checkIsDead();

    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Ладно, хорошо</p>
        </div>
    `;

    btnNext('splitUp()');
}

function dialogNoOne() {
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
        title: 'Отряд: отношения повышены',
    });

    relationshipTeam = 'Отличные';

    function checkIsDead() {
        const randNumb1 = getRandNumbTeam(0, 3);

        if (team[randNumb1].alive != 'false') {
            name.innerHTML = team[randNumb1].name;
        } else {
            checkIsDead();
        }
    }

    checkIsDead();

    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Отлично!</p>
        </div>
    `;

    btnNext('noSplitUp()');
}

// Сценарий - разделяемся
function splitUp() {
    try {
        const sendTeamMountainsBtn = document.getElementById('sendTeamMountains');
        sendTeamMountainsBtn.parentNode.removeChild(sendTeamMountainsBtn);
    } catch {}

    const aSymbol = document.getElementById('a-symbol');
    const nSymbol = document.getElementById('n-symbol');
    const dSymbol = document.getElementById('d-symbol');
    const oSymbol = document.getElementById('o-symbol');

    const nikita1Td = document.getElementById('nikitaTd1');
    const nikita2Td = document.getElementById('nikitaTd2');
    const nikita3Td = document.getElementById('nikitaTd3');

    const anna1Td = document.getElementById('annaTd1');
    const anna2Td = document.getElementById('annaTd2');
    const anna3Td = document.getElementById('annaTd3');

    const danil1Td = document.getElementById('danilTd1');
    const danil2Td = document.getElementById('danilTd2');
    const danil3Td = document.getElementById('danilTd3');

    const oleg1Td = document.getElementById('olegTd1');
    const oleg2Td = document.getElementById('olegTd2');
    const oleg3Td = document.getElementById('olegTd3');

    try {
        if (team[0].alive == 'false') {
            nSymbol.parentNode.removeChild(nSymbol);
            nikita1Td.parentNode.removeChild(nikita1Td);
            nikita2Td.parentNode.removeChild(nikita2Td);
            nikita3Td.parentNode.removeChild(nikita3Td);
        } else if (team[1].alive == 'false') {
            aSymbol.parentNode.removeChild(aSymbol);
            anna1Td.parentNode.removeChild(anna1Td);
            anna2Td.parentNode.removeChild(anna2Td);
            anna3Td.parentNode.removeChild(anna3Td);
        } else if (team[2].alive == 'false') {
            dSymbol.parentNode.removeChild(dSymbol);
            danil1Td.parentNode.removeChild(danil1Td);
            danil2Td.parentNode.removeChild(danil2Td);
            danil3Td.parentNode.removeChild(danil3Td);
        } else if (team[3].alive == 'false') {
            oSymbol.parentNode.removeChild(oSymbol);
            oleg1Td.parentNode.removeChild(oleg1Td);
            oleg2Td.parentNode.removeChild(oleg2Td);
            oleg3Td.parentNode.removeChild(oleg3Td);
        } else {
            console.log('хуйня либо все выжили');
        }
    } catch {}

    $('#ration-modal').modal('show');

    rationFooter.innerHTML += `
        <button class="btn btn-dark" onclick="sendTeamLaboratories()">Отправить</button>
    `;

    name.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Я пойду в ту комнату</p>
        </div>
    `;

    const arrowLeft = document.getElementById('arrowLeft'); // arrow left for change value
    const arrowUp = document.getElementById('arrowUp'); // arrow up for change value
    const arrowRight = document.getElementById('arrowRight'); // arrow right for change value

    arrowLeft.innerHTML = `3.14`;
    arrowUp.innerHTML = `3.15(1)`;
    arrowRight.innerHTML = `3.15(2)`;

    btnNext('room32SplitUp()');
}

function sendTeamLaboratories() {
    const chooseArray = [];
    const chooseArrayDirectionValue = [];
    const chooseArrayDirection = [];

    // для вывода выбранных членов отряда
    const teamElements = [
        document.getElementById('nikita1'),
        document.getElementById('nikita2'),
        document.getElementById('nikita3'),

        document.getElementById('anna1'),
        document.getElementById('anna2'),
        document.getElementById('anna3'),

        document.getElementById('danil1'),
        document.getElementById('danil2'),
        document.getElementById('danil3'),

        document.getElementById('oleg1'),
        document.getElementById('oleg2'),
        document.getElementById('oleg3'),
    ];

    const teamElementsDirection = [
        [document.getElementById('nikita1'),
        document.getElementById('anna1'),
        document.getElementById('oleg1'),
        document.getElementById('danil1')],

        [document.getElementById('nikita2'),
        document.getElementById('anna2'),
        document.getElementById('oleg2'),
        document.getElementById('danil2')],

        [document.getElementById('nikita3'),
        document.getElementById('anna3'),
        document.getElementById('oleg3'),
        document.getElementById('danil3')],
    ];

    for (let i = 0; i < teamElementsDirection.length; i++) {
        for (let j = 0; j < teamElementsDirection[i].length; j++) {
            if (teamElementsDirection[i][j] == undefined) { } else {
                if (teamElementsDirection[i][j].checked) {
                    chooseArrayDirectionValue.push(teamElementsDirection[i][j].value);
                }
            }
        }
    }

    for (let i = 0; i < teamElements.length; i++) {
        if (teamElements[i] == null) { } else if (teamElements[i].checked) {
            chooseArray.push(teamElements[i].value);
        }
    }

    // Для проверки
    const nikita1 = document.getElementById('nikita1');
    const nikita2 = document.getElementById('nikita2');
    const nikita3 = document.getElementById('nikita3');

    const anna1 = document.getElementById('anna1');
    const anna2 = document.getElementById('anna2');
    const anna3 = document.getElementById('anna3');

    const danil1 = document.getElementById('danil1');
    const danil2 = document.getElementById('danil2');
    const danil3 = document.getElementById('danil3');

    const oleg1 = document.getElementById('oleg1');
    const oleg2 = document.getElementById('oleg2');
    const oleg3 = document.getElementById('oleg3');

    for (let i = 0; i < teamElementsDirection.length; i++) {
        for (let j = 0; j < teamElementsDirection[i].length; j++) {
            if (teamElementsDirection[i][j] == null) { } else if (teamElementsDirection[i][j].checked) {
                const last = teamElementsDirection[i][j].id.toString().slice(-1);
                if (last == '1') {
                    chooseArrayDirection.push(`${teamElementsDirection[i][j].value} - 3.14 <br />`);
                } else if (last == '2') {
                    chooseArrayDirection.push(`${teamElementsDirection[i][j].value} - 3.15(1) <br />`);
                } else if (last == '3') {
                    chooseArrayDirection.push(`${teamElementsDirection[i][j].value} - 3.15(2)`);
                }
            }
        }
    }

    let namesString = '';
    for (const names of chooseArrayDirection) {
        namesString = namesString + names;
    }

    if (team[0].alive == 'false') {
        console.log('0 - false');
        if (anna1.checked &&
            danil2.checked &&
            oleg3.checked) {
            Swal.fire({
                title: 'Ваш выбор:',
                html: `<p>${namesString}</p>`,
                showCancelButton: true,
                cancelButtonText: 'Отмена',
                confirmButtonText: `Отправить`,
            }).then((result) => {
                if (result.isConfirmed) {
                    team[3].alive = 'false';

                    $('#ration-modal').modal('hide');
                    room32SplitUp();
                }
            });

            swalStyles();
        } else if (danil1.checked &&
            anna2.checked &&
            oleg3.checked) {
                // Никто не умирает
            Swal.fire({
                title: 'Ваш выбор:',
                html: `<p>${namesString}</p>`,
                showCancelButton: true,
                cancelButtonText: 'Отмена',
                confirmButtonText: `Отправить`,
            }).then((result) => {
                if (result.isConfirmed) {
                    $('#ration-modal').modal('hide');
                    room32SplitUp();
                }
            });

            swalStyles();
        } else if (anna1.checked &&
            oleg2.checked &&
            danil3.checked) {
            Swal.fire({
                title: 'Ваш выбор:',
                html: `<p>${namesString}</p>`,
                showCancelButton: true,
                cancelButtonText: 'Отмена',
                confirmButtonText: `Отправить`,
            }).then((result) => {
                if (result.isConfirmed) {
                    team[2].alive = 'false';

                    $('#ration-modal').modal('hide');
                    room32SplitUp();
                }
            });

            swalStyles();
        } else if (oleg1.checked &&
            danil2.checked &&
            anna3.checked) {
                // Никто не умирает
            Swal.fire({
                title: 'Ваш выбор:',
                html: `<p>${namesString}</p>`,
                showCancelButton: true,
                cancelButtonText: 'Отмена',
                confirmButtonText: `Отправить`,
            }).then((result) => {
                if (result.isConfirmed) {
                    $('#ration-modal').modal('hide');
                    room32SplitUp();
                }
            });

            swalStyles();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Ошибка!',
            });

            swalStyles();
        }
    } else if (team[1].alive == 'false') {
        console.log('1 - false');

        if (nikita1.checked &&
            danil2.checked &&
            oleg3.checked) {
            Swal.fire({
                title: 'Ваш выбор:',
                html: `<p>${namesString}</p>`,
                showCancelButton: true,
                cancelButtonText: 'Отмена',
                confirmButtonText: `Отправить`,
            }).then((result) => {
                if (result.isConfirmed) {
                    team[0].alive = 'false';

                    $('#ration-modal').modal('hide');
                    room32SplitUp();
                }
            });

            swalStyles();
        } else if (danil1.checked &&
            nikita2.checked &&
            oleg3.checked) {
                // Никто не умирает
            Swal.fire({
                title: 'Ваш выбор:',
                html: `<p>${namesString}</p>`,
                showCancelButton: true,
                cancelButtonText: 'Отмена',
                confirmButtonText: `Отправить`,
            }).then((result) => {
                if (result.isConfirmed) {
                    $('#ration-modal').modal('hide');
                    room32SplitUp();
                }
            });

            swalStyles();
        } else if (nikita1.checked &&
            oleg2.checked &&
            danil3.checked) {
            Swal.fire({
                title: 'Ваш выбор:',
                html: `<p>${namesString}</p>`,
                showCancelButton: true,
                cancelButtonText: 'Отмена',
                confirmButtonText: `Отправить`,
            }).then((result) => {
                if (result.isConfirmed) {
                    team[3].alive = 'false';

                    $('#ration-modal').modal('hide');
                    room32SplitUp();
                }
            });

            swalStyles();
        } else if (oleg1.checked &&
            danil2.checked &&
            nikita3.checked) {
                // Никто не умирает
            Swal.fire({
                title: 'Ваш выбор:',
                html: `<p>${namesString}</p>`,
                showCancelButton: true,
                cancelButtonText: 'Отмена',
                confirmButtonText: `Отправить`,
            }).then((result) => {
                if (result.isConfirmed) {
                    $('#ration-modal').modal('hide');
                    room32SplitUp();
                }
            });

            swalStyles();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Ошибка!',
            });

            swalStyles();
        }
    } else if (team[2].alive == 'false') {
        console.log('2 - false');

        if (nikita1.checked &&
            anna2.checked &&
            oleg3.checked) {
            Swal.fire({
                title: 'Ваш выбор:',
                html: `<p>${namesString}</p>`,
                showCancelButton: true,
                cancelButtonText: 'Отмена',
                confirmButtonText: `Отправить`,
            }).then((result) => {
                if (result.isConfirmed) {
                    team[1].alive = 'false';

                    $('#ration-modal').modal('hide');
                    room32SplitUp();
                }
            });

            swalStyles();
        } else if (anna1.checked &&
            nikita2.checked &&
            oleg3.checked) {
                console.log('test');
                // Никто не умирает
            Swal.fire({
                title: 'Ваш выбор:',
                html: `<p>${namesString}</p>`,
                showCancelButton: true,
                cancelButtonText: 'Отмена',
                confirmButtonText: `Отправить`,
            }).then((result) => {
                if (result.isConfirmed) {
                    $('#ration-modal').modal('hide');
                    room32SplitUp();
                }
            });

            swalStyles();
        } else if (nikita1.checked &&
            oleg2.checked &&
            anna3.checked) {
            Swal.fire({
                title: 'Ваш выбор:',
                html: `<p>${namesString}</p>`,
                showCancelButton: true,
                cancelButtonText: 'Отмена',
                confirmButtonText: `Отправить`,
            }).then((result) => {
                if (result.isConfirmed) {
                    team[0].alive = 'false';

                    $('#ration-modal').modal('hide');
                    room32SplitUp();
                }
            });

            swalStyles();
        } else if (oleg1.checked &&
            anna2.checked &&
            nikita3.checked) {
                // Никто не умирает
            Swal.fire({
                title: 'Ваш выбор:',
                html: `<p>${namesString}</p>`,
                showCancelButton: true,
                cancelButtonText: 'Отмена',
                confirmButtonText: `Отправить`,
            }).then((result) => {
                if (result.isConfirmed) {
                    $('#ration-modal').modal('hide');
                    room32SplitUp();
                }
            });

            swalStyles();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Ошибка!',
            });

            swalStyles();
        }
    } else if (team[3].alive == 'false') {
        console.log('3 - false');

        if (nikita1.checked &&
            anna2.checked &&
            danil3.checked) {
            Swal.fire({
                title: 'Ваш выбор:',
                html: `<p>${namesString}</p>`,
                showCancelButton: true,
                cancelButtonText: 'Отмена',
                confirmButtonText: `Отправить`,
            }).then((result) => {
                if (result.isConfirmed) {
                    team[2].alive = 'false';

                    $('#ration-modal').modal('hide');
                    room32SplitUp();
                }
            });

            swalStyles();
        } else if (anna1.checked &&
            nikita2.checked &&
            danil3.checked) {
                // Никто не умирает
            Swal.fire({
                title: 'Ваш выбор:',
                html: `<p>${namesString}</p>`,
                showCancelButton: true,
                cancelButtonText: 'Отмена',
                confirmButtonText: `Отправить`,
            }).then((result) => {
                if (result.isConfirmed) {
                    $('#ration-modal').modal('hide');
                    room32SplitUp();
                }
            });

            swalStyles();
        } else if (nikita1.checked &&
            danil2.checked &&
            anna3.checked) {
            Swal.fire({
                title: 'Ваш выбор:',
                html: `<p>${namesString}</p>`,
                showCancelButton: true,
                cancelButtonText: 'Отмена',
                confirmButtonText: `Отправить`,
            }).then((result) => {
                if (result.isConfirmed) {
                    team[1].alive = 'false';

                    $('#ration-modal').modal('hide');
                    room32SplitUp();
                }
            });

            swalStyles();
        } else if (danil1.checked &&
            anna2.checked &&
            nikita3.checked) {
                // Никто не умирает
            Swal.fire({
                title: 'Ваш выбор:',
                html: `<p>${namesString}</p>`,
                showCancelButton: true,
                cancelButtonText: 'Отмена',
                confirmButtonText: `Отправить`,
            }).then((result) => {
                if (result.isConfirmed) {
                    $('#ration-modal').modal('hide');
                    room32SplitUp();
                }
            });

            swalStyles();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Ошибка!',
            });

            swalStyles();
        }
    } else if (team[0].alive &&
        team[1].alive &&
        team[2].alive &&
        team[3].alive) {
            console.log('0, 1, 2, 3 - true');

            if (danil1.checked &&
                anna2.checked &&
                nikita3.checked) {
                Swal.fire({
                    title: 'Ваш выбор:',
                    html: `<p>${namesString}</p>`,
                    showCancelButton: true,
                    cancelButtonText: 'Отмена',
                    confirmButtonText: `Отправить`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        team[1].alive = 'false';

                        $('#ration-modal').modal('hide');
                        room32SplitUp();
                    }
                });

                swalStyles();
            } else if (oleg1.checked &&
                anna2.checked &&
                nikita3.checked) {
                Swal.fire({
                    title: 'Ваш выбор:',
                    html: `<p>${namesString}</p>`,
                    showCancelButton: true,
                    cancelButtonText: 'Отмена',
                    confirmButtonText: `Отправить`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        $('#ration-modal').modal('hide');
                        room32SplitUp();
                    }
                });

                swalStyles();
            } else if (nikita1.checked &&
                anna2.checked &&
                danil3.checked) {
                Swal.fire({
                    title: 'Ваш выбор:',
                    html: `<p>${namesString}</p>`,
                    showCancelButton: true,
                    cancelButtonText: 'Отмена',
                    confirmButtonText: `Отправить`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        team[1].alive = 'false';

                        $('#ration-modal').modal('hide');
                        room32SplitUp();
                    }
                });

                swalStyles();
            } else if (oleg1.checked &&
                anna2.checked &&
                danil3.checked) {
                Swal.fire({
                    title: 'Ваш выбор:',
                    html: `<p>${namesString}</p>`,
                    showCancelButton: true,
                    cancelButtonText: 'Отмена',
                    confirmButtonText: `Отправить`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        team[3].alive = 'false';

                        $('#ration-modal').modal('hide');
                        room32SplitUp();
                    }
                });

                swalStyles();
            } else if (nikita1.checked &&
                anna2.checked &&
                oleg3.checked) {
                // Никто не умирает

                Swal.fire({
                    title: 'Ваш выбор:',
                    html: `<p>${namesString}</p>`,
                    showCancelButton: true,
                    cancelButtonText: 'Отмена',
                    confirmButtonText: `Отправить`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        $('#ration-modal').modal('hide');
                        room32SplitUp();
                    }
                });

                swalStyles();
            } else if (danil1.checked &&
                anna2.checked &&
                oleg3.checked) {
                Swal.fire({
                    title: 'Ваш выбор:',
                    html: `<p>${namesString}</p>`,
                    showCancelButton: true,
                    cancelButtonText: 'Отмена',
                    confirmButtonText: `Отправить`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        $('#ration-modal').modal('hide');
                        room32SplitUp();
                    }
                });

                swalStyles();
            } else if (anna1.checked &&
                danil2.checked &&
                nikita3.checked) {
                Swal.fire({
                    title: 'Ваш выбор:',
                    html: `<p>${namesString}</p>`,
                    showCancelButton: true,
                    cancelButtonText: 'Отмена',
                    confirmButtonText: `Отправить`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        team[0].alive = 'false';
                        $('#ration-modal').modal('hide');
                        room32SplitUp();
                    }
                });

                swalStyles();
            } else if (danil1.checked &&
                oleg2.checked &&
                nikita3.checked) {
                Swal.fire({
                    title: 'Ваш выбор:',
                    html: `<p>${namesString}</p>`,
                    showCancelButton: true,
                    cancelButtonText: 'Отмена',
                    confirmButtonText: `Отправить`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        team[2].alive = 'false';

                        $('#ration-modal').modal('hide');
                        room32SplitUp();
                    }
                });

                swalStyles();
            } else if (anna1.checked &&
                nikita2.checked &&
                danil3.checked) {
                Swal.fire({
                    title: 'Ваш выбор:',
                    html: `<p>${namesString}</p>`,
                    showCancelButton: true,
                    cancelButtonText: 'Отмена',
                    confirmButtonText: `Отправить`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        team[0].alive = 'false';

                        $('#ration-modal').modal('hide');
                        room32SplitUp();
                    }
                });

                swalStyles();
            } else {
                console.log('хуйня какая-то получается');
            }
        }
}

function room32SplitUp() {
    name.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Будьте все на связи</p>
        </div>

        <div class="row mt-3 name">
            <p class="lead" id="name-dialog">Отряд</p>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">Есть!</p>
        </div>
    `;

    btnNext('smthWrongRoom32()');
}

function smthWrongRoom32() {
    btnNextElem.disabled = true;

    sound.src = 'sounds/doorOpen.mp3';
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Разбитые контейнеры... Хм... Здесь какие-то зараженные?</p>
        </div>
    `;

    setTimeout(() => {
        dialogs.innerHTML += `
            <div class="row dialog">
                <p class="lead" id="text-dialog">Аa!</p>
            </div>
        `;

        setTimeout(() => {
            monsterBg();
        });
    }, 2000);
}

function monsterBg() {
    sound.src = 'sounds/virusMonster.mp3';
    // document.style.background = `url('img/virusMonster.jpg')`;
    footerButtons.style.visibility = 'hidden';
    nameDiv.style.visibility = 'hidden';
    dialogsDiv.style.visibility = 'hidden';

    setTimeout(() => {
        blogerBiteBg();
    }, 2000);
}

function blogerBiteBg() {
    // document.style.background = `url('img/blogerBite.jpg')`;

    setTimeout(() => {
        qteMonsterRoom32();
    }, 1500);
}

function qteMonsterRoom32() {
    nameDiv.style.visibility = 'visible';
    dialogsDiv.style.visibility = 'visible';
    footerButtons.style.visibility = 'visible';

    name.innerHTML = `Игра`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Стреляйте!</p>
        </div>

        <div class="row dialog d-flex justify-content-center" id="run-div-btn">
            <button id="btn-shot-monster32" type="button" class="btn btn-dark mt-2 mb-2" onclick="qteMonsterRoom32Counter()">
                Стрелять
            </button>
        </div>

        <div class="progress mt-4" id="progress-div-monster-32">
            <div class="progress-bar progress-bar-striped bg-danger" id="progressbar_monster_32_sec" role="progressbar" style="width: 100%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">5 сек</div>
        </div>
    `;

    setInterval(() => {
        const progressbarMonster32Sec = document.getElementById('progressbar_monster_32_sec');

        monsterRoom32Width -= 20;
        monsterRoom32Sec -= 1;

        try {
            progressbarMonster32Sec.style.width = `${monsterRoom32Width}%`;
            progressbarMonster32Sec.innerHTML = `${monsterRoom32Sec}сек`;
        } catch {
            monsterRoom32Sec = false;
        }

        if (monsterRoom32Sec === 0) {
            deaths += 1;
            localStorage.setItem('deaths', deaths);

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

function qteMonsterRoom32Counter() {
    const progressMonster32 = document.getElementById('progress-div-monster-32');
    const btnKillMonster32 = document.getElementById('btn-shot-monster32');

    clickMonster32 += 1;

    if (clickMonster32 == 5) {
        statKillEnemies += 1;

        progressMonster32.parentNode.removeChild(progressMonster32);
        btnKillMonster32.parentNode.removeChild(btnKillMonster32);

        helpBlogerBg();
    }
}

function helpBlogerBg() {
    // document.body.style.background = `url('img/helpBloger.jpg')`;
    footerButtons.style.visibility = 'hidden';
    nameDiv.style.visibility = 'hidden';
    dialogsDiv.style.visibility = 'hidden';

    setTimeout(() => {
        dialogHelpPolina();
    }, 2000);
}

function dialogHelpPolina() {
    btnNextElem.disabled = false;
    footerButtons.style.visibility = 'visible';
    nameDiv.style.visibility = 'visible';
    dialogsDiv.style.visibility = 'visible';

    name.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Вот так тебе будет полегче</p>
        </div>

        <div class="row mt-3 name">
            <p class="lead" id="name-dialog">Блогер</p>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">Да, спасибo...</p>
        </div>
    `;

    btnNext(`room32ChangeHeroBloger('Б', 'Л', 'О', 'Г', 'Е', 'Р', '#f33b3b')`);
}

function room32DialogExplorePolina() {
    name.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">
                Я посмотрю, что это за оборудование,
                    оно мне кое что напоминает... Никуда не уходи пока
            </p>
        </div>

        <div class="row mt-3 name">
            <p class="lead" id="name-dialog">Блогер</p>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">Ха-ха, очень смешно...</p>
        </div>
    `;

    btnNext(`room32ChangeHeroPolinaExplore('П', 'О', 'Л', 'И', 'Н', 'А', '#f33be4')`);
}

function room32ChangeHeroPolinaExplore(letter1, letter2, letter3,
    letter4, letter5, letter6,
    shadowColor) {
    document.body.style.background = '#000';
    music.src = '';
    sound.src = 'sounds/polina_change.mp3';

    document.getElementById('name').style.visibility = 'hidden';
    document.getElementById('footer-buttons').style.visibility = 'hidden';

    dialogs.innerHTML = `
        <div class="container d-flex justify-content-center" id="name-text-div">
            <div>
                <h1 style="float: left;" class="title-show1" id="letter-1">${letter1}</h1>
                <h1 style="float: left;" class="title-show2" id="letter-2">${letter2}</h1>
                <h1 style="float: left;" class="title-show3" id="letter-3">${letter3}</h1>
                <h1 style="float: left;" class="title-show4" id="letter-4">${letter4}</h1>
                <h1 style="float: left;" class="title-show5" id="letter-5">${letter5}</h1>
                <h1 style="float: left;" class="title-show6" id="letter-6">${letter6}</h1>
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
        p1.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p1.id = 'title-show1';

        p2.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p2.id = 'title-show2';

        p3.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p3.id = 'title-show3';

        p4.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p4.id = 'title-show4';

        p5.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p5.id = 'title-show5';

        p6.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p6.id = 'title-show6';
    }, 200);

    setTimeout(() => {
        polinaSayAntidot();
    }, 5000);
}

function polinaSayAntidot() {
    document.getElementById('name').style.visibility = 'visible';
    document.getElementById('footer-buttons').style.visibility = 'visible';

    name.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">
                Так, хм, ага, точно! 
                    Здесь можно создать антидот, то, что тебе нужно! 
                    Только вот инструкции нет... Придется делать наугад.
            </p>
        </div>

        <div class="row mt-3 name">
            <p class="lead" id="name-dialog">Блогер</p>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">Шансы невелики...</p>
        </div>

        <div class="row mt-3 name">
            <p class="lead" id="name-dialog">Полина</p>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">Лучше, чем ничего</p>
        </div>
    `;

    btnNext('whereComponentsAntiDot()');
}

function whereComponentsAntiDot() {
    name.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">
                Блин, здесь еще и компонентов нет для создания антидота.
                Но есть записка - “Он в комнате напротив”
            </p>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">Ну, значит пойду туда...</p>
        </div>

        <div class="row mt-3 name">
            <p class="lead" id="name-dialog">Блогер</p>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">Ладно, иди...</p>
        </div>
    `;

    btnNext('needKey31()');
}

function needKey31() {
    sound.src = 'sounds/accessDenied.mp3';

    name.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Черт, нужен ключ</p>
        </div>
    `;

    btnNext('rationOn()');
}

function rationOn() {
    sound.src = 'sounds/rationOn.mp3';

    name.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Кто-то нашел что-нибудь, мне тут нужен ключ к комнате. Собираемся у входа.</p>
        </div>
    `;

    setTimeout(() => {
        sound.src = 'sounds/rationOff.mp3';
    }, 2000);

    setTimeout(() => {
        const deadsPeople = [];
        const alivePeople = [];
        const randNumbHuman = getRandNumbTeam(1, 2);

        for (let i = 0; i < team.length; i++) {
            if (team[i].alive == 'false') {
                deadsPeople.push(team[i]);
            } else {
                alivePeople.push(team[i]);
            }
        }

        if (deadsPeople.length == 0) {
            dialogs.innerHTML = `
                <div class="row dialog">
                    <p class="lead" id="text-dialog">Отлично, мы все здесь, где ключ?</p>
                </div>

                <div class="row mt-3 name">
                    <p class="lead" id="name-dialog">${alivePeople[randNumbHuman].name}</p>
                </div>
                <div class="row dialog">
                    <p class="lead" id="text-dialog">Вот ключ</p>
                </div>
            `;
        } else {
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
                title: 'Отряд: отношения понижены',
            });

            relationshipTeam = 'Ужасные';

            dialogs.innerHTML = `
                <div class="row dialog">
                    <p class="lead" id="text-dialog">Отлично, мы все здесь, где ключ?</p>
                </div>

                <div class="row dialog">
                    <p class="lead" id="text-dialog">С нами нет уже ${deadsPeople.length} человек...</p>
                </div>

                <div class="row mt-3 name">
                    <p class="lead" id="name-dialog">${alivePeople[randNumbHuman].name}</p>
                </div>
                <div class="row dialog">
                    <p class="lead" id="text-dialog">Вот ключ</p>
                </div>
                <div class="row dialog">
                    <p class="lead" id="text-dialog">Хорошо... Идем в комнату...</p>
                </div>
            `;
        }
    }, 2500);

    bossFinal = true;
    btnNext('startPhobosFight()');
}

function antiDotFind() {
    name.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Ага, вот и компоненты!</p>
        </div>
    `;

    btnNext('blogerCookAntidot()');
}

function blogerCookAntidot() {
    setTimeout(() => {
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
    }, 1000);

    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Вот компоненты к твоему антидоту</p>
        </div>

        <div class="row mt-3 name">
            <p class="lead" id="name-dialog">Блогер</p>
        </div>

        <div class="row dialog">
            <p class="lead" id="text-dialog">Спасибо, что помогаешь!</p>
        </div>

        <div class="row mt-3 name">
            <p class="lead" id="name-dialog">Полина</p>
        </div>

        <div class="row dialog">
            <p class="lead" id="text-dialog">Поблагодаришь - если выживешь</p>
        </div>
    `;

    btnNextElement = document.getElementById('btn-next');
    btnNextElement = btnNextElement.parentNode.removeChild(btnNextElement);
    document.getElementById('footer-buttons').innerHTML += `
        <button id="btn-next" type="button" class="btn btn-lg btn-dark" data-toggle='modal' data-target='#antidot'>Далее</button>
    `;
}

function checkComponents() {
    const acid1 = document.getElementById('acid-1');
    const acid2 = document.getElementById('acid-1-2');
    const acid3 = document.getElementById('acid-1-3');

    if (acid1.checked) {
        antidot = true;
        qteCookAntidot();
    } else if (acid2.checked) {
        antidot = false;
        qteCookAntidot();
    } else if (acid3.checked) {
        antidot = false;
        qteCookAntidot();
    }
}

function qteCookAntidot() {
    btnNextElement = document.getElementById('btn-next');
    btnNextElement.disabled = true;

    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Приготовлие антидота...</p> 
        </div>

        <div class="progress mt-4" id="progress-div">
            <div class="progress-bar progress-bar-striped bg-primary" id="progressbar_cook_antidot" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
        </div>
    `;

    const progressbarSearchLab = document.getElementById('progressbar_cook_antidot');
    const progress = document.getElementById('progress-div');

    setInterval(() => {
        try {
            if (widthCookAntidot == 100) {
                qteCookAntidotVar = false;

                progress.parentNode.removeChild(progress);

                goAntidot();
            }
        } catch {
            widthCookAntidot = false;
        }

        if (qteCookAntidotVar == true) {
            widthCookAntidot += 25;
            progressbarSearchLab.style.width = `${widthCookAntidot}%`;
            progressbarSearchLab.innerHTML = `${widthCookAntidot}%`;
        } else {}
    }, 1000);
}

function goAntidot() {
    name.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Так, готово, но что именно...?</p>
        </div>

        <div class="row mt-3 name">
            <p class="lead" id="name-dialog">Блогер</p>
        </div>

        <div class="row dialog">
            <p class="lead" id="text-dialog">Давай, вводи...</p>
        </div>
    `;

    btnNext('useAntidot()');
}

function useAntidot() {
    nameDiv.style.visibility = 'hidden';
    footerButtons.style.visibility = 'hidden';

    setTimeout(() => {
        if (antidot == true) {
            blogerAlive();
        } else if (antidot == false) {
            blogerDead();
        }
    }, 2000);
}

// Блогер выжил
function blogerAlive() {
    nameDiv.style.visibility = 'visibility';
    footerButtons.style.visibility = 'visibility';

    name.innerHTML = 'Блогер';
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">О, я жив</p>
        </div>
    `;

    dialogs.innerHTML += `
        <div class="row mt-3 name">
            <p class="lead" id="name-dialog">Полина</p>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">Реакция бесценна...</p>
        </div>
    `;

    btnNext('blogerChangeRoom34()');
}

function blogerChangeRoom34(letter1, letter2, letter3,
    letter4, letter5, letter6,
    shadowColor) {
    document.body.style.background = '#000';
    music.src = '';
    sound.src = 'sounds/bloger_change.mp3';

    document.getElementById('name').style.visibility = 'hidden';
    document.getElementById('footer-buttons').style.visibility = 'hidden';

    dialogs.innerHTML = `
        <div class="container d-flex justify-content-center" id="name-text-div">
            <div>
                <h1 style="float: left;" class="title-show1" id="letter-1">${letter1}</h1>
                <h1 style="float: left;" class="title-show2" id="letter-2">${letter2}</h1>
                <h1 style="float: left;" class="title-show3" id="letter-3">${letter3}</h1>
                <h1 style="float: left;" class="title-show4" id="letter-4">${letter4}</h1>
                <h1 style="float: left;" class="title-show5" id="letter-5">${letter5}</h1>
                <h1 style="float: left;" class="title-show6" id="letter-6">${letter6}</h1>
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
        p1.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p1.id = 'title-show1';

        p2.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p2.id = 'title-show2';

        p3.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p3.id = 'title-show3';

        p4.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p4.id = 'title-show4';

        p5.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p5.id = 'title-show5';

        p6.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p6.id = 'title-show6';
    }, 200);

    setTimeout(() => {
        dialogWhereKeyLift();
    }, 5000);
}

function dialogWhereKeyLift() {
    name.innerHTML = 'Полина';
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Так, нам нужно в лифт, а ключа от лифта нет, что делать?</p>
        </div>

        <div class="row mt-3 name">
            <p class="lead" id="name-dialog">Блогер</p>
        </div>

        <div class="row dialog">
            <p class="lead" id="text-dialog">Где ты там еще не была? Там? Пойдемте</p>
        </div>
    `;

    btnNext('room34Bloger()');
}

function room34Bloger() {
    name.innerHTML = `Блогер`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Ключ! Его-то вы и пропустили</p>
        </div>
    `;

    btnNext('liftAnonimSpeak()');
}

// Блогер умер
function blogerDead() {
    nameDiv.style.visibility = 'visibility';
    footerButtons.style.visibility = 'visibility';

    name.innerHTML = 'Полина';
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Еще одна смерть... Сколько еще людей будут умирать из-за меня?</p>
        </div>
    `;

    if (relationshipTeam == 'Хорошие' || relationshipTeam == 'Отличные') {
        dialogs.innerHTML += `
            <div class="row mt-3 name">
                <p class="lead" id="name-dialog">Отряд</p>
            </div>
            <div class="row dialog">
                <p class="lead" id="text-dialog">Вы не виноваты.</p>
            </div>
        `;
    } else {
        dialogs.innerHTML += `
            <div class="row mt-3 name">
                <p class="lead" id="name-dialog">Отряд</p>
            </div>
            <div class="row dialog">
                <p class="lead" id="text-dialog">...</p>
            </div>
        `;
    }

    dialogs.innerHTML += `
        <div class="row mt-3 name">
            <p class="lead" id="name-dialog">Полина</p>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">Ладно, нужно идти дальше, но там вход закрыт. 
                Нужен ключ. Опять. Осталось одна комната в которой я не была, сходим туда еще раз.
            </p>
        </div>
    `;

    btnNext('room34Polina()');
}

function room34Polina() {
    btnNextElem.disabled = true;

    name.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Так... И что же здесь?</p>
        </div>
    `;

    setTimeout(() => {
        name.innerHTML = `Игра`;
        dialogs.innerHTML = `
            <div class="row dialog">
                <p class="lead" id="text-dialog">Стреляйте!</p>
            </div>
    
            <div class="row dialog d-flex justify-content-center" id="run-div-btn">
                <button id="btn-shot-monster32" type="button" class="btn btn-dark mt-2 mb-2" onclick="qteMonsterRoom34Counter()">
                    Стрелять
                </button>
            </div>
    
            <div class="progress mt-4" id="progress-div-monster-32">
                <div class="progress-bar progress-bar-striped bg-danger" id="progressbar_monster_34_sec" role="progressbar" style="width: 100%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">5 сек</div>
            </div>
        `;

        setInterval(() => {
            const progressbarMonster34Sec = document.getElementById('progressbar_monster_34_sec');

            monsterRoom34Width -= 20;
            monsterRoom34Sec -= 1;

            try {
                progressbarMonster34Sec.style.width = `${monsterRoom34Width}%`;
                progressbarMonster34Sec.innerHTML = `${monsterRoom34Sec}сек`;
            } catch {
                monsterRoom34Sec = false;
            }

            if (monsterRoom32Sec === 0) {
                deaths += 1;
                localStorage.setItem('deaths', deaths);

                Swal.fire({
                    icon: 'error',
                    title: 'Вы умерли!',
                });

                setInterval(() => {
                    location.reload();
                }, 1000);
            }
        }, 1000);
    }, 1000);
}

function qteMonsterRoom34Counter() {
    const progressMonster34 = document.getElementById('progress-div-monster-34');
    const btnKillMonster34 = document.getElementById('btn-shot-monster34');

    clickMonster34 += 1;

    if (clickMonster34 == 5) {
        statKillEnemies += 1;

        progressMonster34.parentNode.removeChild(progressMonster34);
        btnKillMonster34.parentNode.removeChild(btnKillMonster34);

        polinaFindKeyLift();
    }
}

function polinaFindKeyLift() {
    name.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">С ним покончено</p>
        </div>
        
        <div class="row dialog">
            <p class="lead" id="text-dialog">А вот и ключ</p>
        </div>
    `;

    btnNextElem.disabled = false;
    btnNext('liftAnonimSpeak()');
}

// Сценарий - не разделяемся
function noSplitUp() {
    name.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Идем в ту комнату</p>
        </div>
    `;

    btnNext('room32NoSplitUp()');
}

function room32NoSplitUp() {
    sound.src = 'sounds/doorOpen.mp3';
    setTimeout(() => {
        dialogs.innerHTML = `
            <div class="row dialog">
                <p class="lead" id="text-dialog">Разбитые контейнеры,
                    пролитая жидкость, хм... Здесь какие-то новые зараженные?
                </p>
                <p class="lead" id="text-dialog">Нужно быть предельно осторожными</p>
            </div>
        `;
    }, 1300);

    btnNext('room32NoSplitUpMonster()');
}

let nameKillerMonster = '';
function room32NoSplitUpMonster() {
    sound.src = 'sounds/shot.mp3';
    setTimeout(() => {
        sound.src = 'sound/show.mp3';
    }, 500);

    const randNumb1 = getRandNumbTeam(0, 3);

    function checkIsDead() {
        const randNumb1 = getRandNumbTeam(0, 3);

        if (team[randNumb1].alive != 'false') {
            nameKillerMonster = team[randNumb1].name;
            name.innerHTML = team[randNumb1].name;
        } else {
            checkIsDead();
        }
    }

    checkIsDead();

    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Берегись!</p>
        </div>
    `;

    btnNext('room32NoSplitUpThanks()');
}

function room32NoSplitUpThanks() {
    // Если разделились, спаситель Полины говорит "...мы же одна команда..."
    // Если нет - не говорит
    btnNextElement = document.getElementById('btn-next');
    btnNextElement.disabled = true;

    name.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Cпасибо, ${nameKillerMonster}</p>
        </div>

        <div id="name">
            <div class="row mt-3 name">
                <p class="lead" id="name-dialog">${nameKillerMonster}</p>
            </div>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">Да не за что, мы же одна команда!</p>
        </div>
    `;

    setTimeout(() => {
        let name = '';

        function checkIsDead() {
            const randNumb1 = getRandNumbTeam(0, 3);

            if (team[randNumb1].alive != 'false' &&
                team[randNumb1].name != nameKillerMonster) {
                name = team[randNumb1].name;
            } else {
                checkIsDead();
            }
        }

        checkIsDead();

        dialogs.innerHTML += `
            <div id="name">
                <div class="row mt-3 name">
                    <p class="lead" id="name-dialog">${name}</p>
                </div>
            </div>
            <div class="row dialog">
                <p class="lead" id="text-dialog">Извините, что отвлекаю, 
                    но здесь какой-то человек</p>
            </div>
        `;

        btnNext(`room32ChangeHeroBloger('Б', 'Л', 'О', 'Г', 'Е', 'Р', '#f33b3b')`);
    }, 3000);
}

function room32ChangeHeroBloger(letter1, letter2, letter3,
    letter4, letter5, letter6,
    shadowColor) {
    document.body.style.background = '#000';
    music.src = '';
    sound.src = 'sounds/bloger_change.mp3';

    document.getElementById('name').style.visibility = 'hidden';
    document.getElementById('footer-buttons').style.visibility = 'hidden';

    dialogs.innerHTML = `
        <div class="container d-flex justify-content-center" id="name-text-div">
            <div>
                <h1 style="float: left;" class="title-show1" id="letter-1">${letter1}</h1>
                <h1 style="float: left;" class="title-show2" id="letter-2">${letter2}</h1>
                <h1 style="float: left;" class="title-show3" id="letter-3">${letter3}</h1>
                <h1 style="float: left;" class="title-show4" id="letter-4">${letter4}</h1>
                <h1 style="float: left;" class="title-show5" id="letter-5">${letter5}</h1>
                <h1 style="float: left;" class="title-show6" id="letter-6">${letter6}</h1>
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

        p1.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p1.id = 'title-show1';

        p2.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p2.id = 'title-show2';

        p3.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p3.id = 'title-show3';

        p4.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p4.id = 'title-show4';

        p5.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p5.id = 'title-show5';

        p6.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p6.id = 'title-show6';
    }, 200);

    setTimeout(() => {
        room32WhoAreYou();
    }, 5000);
}

function room32WhoAreYou() {
    document.body.style.backgroundImage = `url('img/labMountains.jpg')`;
    document.body.style.backgroundPosition = `center center`;
    document.body.style.backgroundSize = `no-repeat`;
    document.body.style.backgroundAttachment = `fixed`;
    document.body.style.backgroundRepeat = `cover`;

    document.getElementById('name').style.visibility = 'visible';
    document.getElementById('footer-buttons').style.visibility = 'visible';

    name.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Кто ты?</p>
        </div>
    `;

    btnNext('room32ChooseWhatReply()');
}

function room32ChooseWhatReply() {
    name.innerHTML = `Выбор`;
    dialogs.innerHTML = `
        <div class="row dialog d-flex justify-content-center" id="chooseDialogWhatReply-div-btn">
            <button id="btn-dialog-1-1" type="button" class="btn btn-dark mt-2 mb-2" onclick="room32ReplyLie()">
                Соврать
            </button>
            <button id="btn-dialog-1-2" type="button" class="btn btn-dark mt-2 mb-2" onclick="room32ReplyGood(); room32ReplyTruth()">
                Сказать правду
            </button>
        </div>
    `;
}

function room32ReplyLie() {
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
        title: 'Полина: отношения понижены',
    });

    relationshipPolina = 'Плохие';

    name.innerHTML = `Блогер`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Работал здесь раньше, 
                хотели меня убрать во избежании информации,
                но я убил охранников и спрятался здесь, только хотел убежать вы</p>
        </div>

        <div id="name">
            <div class="row mt-3 name">
                <p class="lead" id="name-dialog">Полина</p>
            </div>
        </div>

        <div class="row dialog">
            <p class="lead" id="text-dialog">Ты не можешь быть кем-то из них. 
                Не ври. Так кто ты?</p>
        </div>
    `;

    btnNext('room32ReplyTruth()');
}

function room32ReplyGood() {
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
        title: 'Полина: отношения повышены',
    });

    relationshipPolina = 'Отличные';
}

function room32ReplyTruth() {
    name.innerHTML = `Блогер`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Я - Блогер. 
                Ищу все, что связано с Вирусом, а ты?</p>
        </div>
        <div id="name">
            <div class="row mt-3 name">
                <p class="lead" id="name-dialog">Полина</p>
            </div>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">Я Полина. Капитан отряда по борьбе с вирусом. 
                Ищу здесь этот самый вирус и собираюсь его уничтожить</p>
        </div>
    `;

    if (splitUpChoose == true) {
        btnNext('room32PolinaSays()');
    } else if (splitUpChoose == false) {
        btnNext('room32DialogExplorePolina()');
    }
}

function room32PolinaSays() {
    name.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Если хочешь, 
                чтобы тебя не убили - то идем с нами</p>
        </div>

        <div id="name">
            <div class="row mt-3 name">
                <p class="lead" id="name-dialog">Блогер</p>
            </div>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">Ну, пойдем</p>
        </div>
    `;

    btnNext(`changeHeroPolinaReadyPhobosFight('П', 'О', 'Л', 'И', 'Н', 'А', '#f33be4')`);
}

function changeHeroPolinaReadyPhobosFight(letter1, letter2, letter3,
    letter4, letter5, letter6,
    shadowColor) {
    document.body.style.background = '#000';
    music.src = '';
    sound.src = 'sounds/polina_change.mp3';

    document.getElementById('name').style.visibility = 'hidden';
    document.getElementById('footer-buttons').style.visibility = 'hidden';

    dialogs.innerHTML = `
        <div class="container d-flex justify-content-center" id="name-text-div">
            <div>
                <h1 style="float: left;" class="title-show1" id="letter-1">${letter1}</h1>
                <h1 style="float: left;" class="title-show2" id="letter-2">${letter2}</h1>
                <h1 style="float: left;" class="title-show3" id="letter-3">${letter3}</h1>
                <h1 style="float: left;" class="title-show4" id="letter-4">${letter4}</h1>
                <h1 style="float: left;" class="title-show5" id="letter-5">${letter5}</h1>
                <h1 style="float: left;" class="title-show6" id="letter-6">${letter6}</h1>
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
        p1.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p1.id = 'title-show1';

        p2.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p2.id = 'title-show2';

        p3.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p3.id = 'title-show3';

        p4.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p4.id = 'title-show4';

        p5.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p5.id = 'title-show5';

        p6.style.textShadow = `1px 1px 10px ${shadowColor}`;
        p6.id = 'title-show6';
    }, 200);

    setTimeout(() => {
        polinaReadyPhobosFight();
    }, 5000);
}

function polinaReadyPhobosFight() {
    const p1 = document.getElementById('title-show1');
    const p2 = document.getElementById('title-show2');
    const p3 = document.getElementById('title-show3');
    const p4 = document.getElementById('title-show4');
    const p5 = document.getElementById('title-show5');
    const p6 = document.getElementById('title-show6');

    document.body.style.background = 'url(\'img/labMountains.jpg\')';
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = 'cover';

    document.getElementById('name').style.visibility = 'visible';
    document.getElementById('footer-buttons').style.visibility = 'visible';

    p1.parentNode.removeChild(p1);
    p2.parentNode.removeChild(p2);
    p3.parentNode.removeChild(p3);
    p4.parentNode.removeChild(p4);
    p5.parentNode.removeChild(p5);
    p6.parentNode.removeChild(p6);

    name.innerHTML = 'Полина';
    dialogs.innerHTML = `
        <div id="dialogs">
            <div class="row dialog">
                <p class="lead" id="text-dialog">Все готовы? Идем</p>
            </div>
        </div>
    `;

    btnNext('startPhobosFight()');
}

/* Boss */
function startPhobosFight() {
    sound.src = 'sounds/doorOpen.mp3';
    setTimeout(() => {
        music.src = 'sounds/phobosFight.mp3';
        mechanicPhobosFight();
    }, 1200);
}

// Boss hp and clicks to kill
let phobosHp = 100;
let polinaHp = mainHeroes[0].hp;

const clickPhobosToKill = Math.round(Math.random() * (100 - 50) + 50);
let clickUserToPhobos = 1;

function shot() {
    sound.src = 'sounds/shot.mp3';

    const result = clickPhobosToKill - clickUserToPhobos;
    clickUserToPhobos += 1;
    phobosHp -= 10;

    const phobosText = document.getElementById('bossHpDiv');
    phobosText.innerHTML = `Фобос - ${result} кликов осталось`;
};

function mechanicPhobosFight() {
    dialogs.innerHTML = `
        <div id="bossStat">
            <div class="row dialog d-flex justify-content-center" id="shot-div">
                <button id="btn-shot" type="button" class="btn btn-dark mt-2 mb-2" onclick="shot()">
                    Стрелять
                </button>
            </div>
            <div class="text-center text-white mt-4" id="bossHpDiv">
                Фобос - ${clickPhobosToKill} кликов осталось
            </div>
            <div class="progress mt-4" id="progressHeroHpDiv">
                <div class="progress-bar progress-bar-striped bg-success" id="progressbar-hero-hp" role="progressbar" style="width: 100%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                    Полина - ${polinaHp}hp
                </div>
            </div>
        </div>
        <div id="pressButtonDiv"></div>
    `;

    const phobosText = document.getElementById('bossHpDiv');
    const progressPolina = document.getElementById('progressbar-hero-hp');

    const phobosStatReload = setInterval(() => {
        const result = clickPhobosToKill - clickUserToPhobos;

        polinaHp -= 10;

        progressPolina.innerHTML = `Полина - ${polinaHp}hp`;
        progressPolina.style.width = `${polinaHp}%`;

        phobosText.innerHTML = `Фобос - ${result} кликов осталось`;

        const checkInterval = setInterval(() => {
            if (clickUserToPhobos == clickPhobosToKill) {
                statKillEnemies += 1;

                clearInterval(checkInterval);
                clearInterval(phobosStatReload);
                try {
                    clearInterval(pressNbuttonInterval);
                } catch {
                    clearInterval(pressButtonInterval);
                }

                if (bossFinal == false) {
                    liftTeamDialog();
                } else {
                    antiDotFind();
                }
            }

            if (polinaHp == 0) {
                deaths += 1;
                localStorage.setItem('deaths', deaths);

                Swal.fire({
                    icon: 'error',
                    title: 'Вы умерли!',
                });

                setInterval(() => {
                    location.reload();
                }, 1000);
            }
        }, 100);
    }, 3500);

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        const pressButtonIntervalNumberRandom = Math.round(Math.random() * (10 - 5) + 5);
        const pressButtonIntervalNumber = parseInt(pressButtonIntervalNumberRandom + '000');

        pressButtonInterval = setInterval(() => {
            const pressButtonDiv = document.getElementById('pressButtonDiv');

            let secRemaining = 5;
            let widthProgressbar = 100;

            pressButtonDiv.innerHTML = `
                <div class="row dialog">
                    <p class="lead" id="text-dialog">Нажмите на кнопку!</p>
                </div>

                <div class="row dialog d-flex justify-content-center" id="run-div-btn">
                    <button id="btn-dodge-shot" type="button" class="btn btn-dark mt-2 mb-2">
                        Увернуться + Стрельнуть
                    </button>
                </div>
    
                <div class="progress mt-4" id="progress-div">
                    <div class="progress-bar progress-bar-striped bg-success" id="progressbar" role="progressbar" style="width: 100%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        Осталось - ${secRemaining}сек
                    </div>
                </div>
            `;

            const progressbar = document.getElementById('progressbar');

            const intervalRemaining = setInterval(() => {
                const pressButtonDiv = document.getElementById('pressButtonDiv');
                const progressbarPolina = document.getElementById('progressbar-hero-hp');

                if (polinaHp <= 80) {
                    progressbarPolina.style.className = 'progress-bar progress-bar-striped bg-primary';
                } else if (polinaHp <= 50) {
                    progressbarPolina.style.className = 'progress-bar progress-bar-striped bg-warning';
                } else if (polinaHp <= 20) {
                    progressbarPolina.style.className = 'progress-bar progress-bar-striped bg-danger';
                }

                secRemaining -= 1;
                widthProgressbar -= 20;

                progressbar.style.width = `${widthProgressbar}%`;
                progressbar.innerHTML = `Осталось - ${secRemaining}сек`;

                const btnDodgeShot = document.getElementById('btn-dodge-shot');
                btnDodgeShot.onclick = (e) => {
                    pressButtonDiv.innerHTML = ``;

                    phobosHp -= 10;
                    clickUserToPhobos += 1;
                    clearInterval(intervalRemaining);
                };

                if (secRemaining == 0) {
                    pressButtonDiv.innerHTML = ``;

                    polinaHp -= 10;
                    clearInterval(intervalRemaining);
                }
            }, 1000);
        }, pressButtonIntervalNumber);
    } else {
        const pressNbuttonIntervalNumberRandom = Math.round(Math.random() * (10 - 5) + 5);
        const pressNbuttonIntervalNumber = parseInt(pressNbuttonIntervalNumberRandom + '000');

        let NbuttonText = '';

        pressNbuttonInterval = setInterval(() => {
            const pressButtonDiv = document.getElementById('pressButtonDiv');
            const progressbarPolina = document.getElementById('progressbar-hero-hp');

            if (polinaHp <= 80) {
                progressbarPolina.className = 'progress-bar progress-bar-striped bg-primary';
            }

            if (polinaHp <= 50) {
                progressbarPolina.className = 'progress-bar progress-bar-striped bg-warning';
                progressbarPolina.style.color = '#000';
            }

            if (polinaHp <= 20) {
                progressbarPolina.className = 'progress-bar progress-bar-striped bg-danger';
                progressbarPolina.style.color = '#fff';
            }

            let secRemaining = 5;
            let widthProgressbar = 100;

            let Nbutton = Math.round(Math.random() * (4 - 1) + 1);
            switch (Nbutton) {
                case 1: Nbutton = 87; NbuttonText = 'W'; break;
                case 2: Nbutton = 65; NbuttonText = 'A'; break;
                case 3: Nbutton = 83; NbuttonText = 'S'; break;
                case 4: Nbutton = 68; NbuttonText = 'D'; break;
            };

            pressButtonDiv.innerHTML = `
                <div class="row dialog">
                    <p class="lead" id="text-dialog">Нажмите на клавиатуре кнопку '${NbuttonText}'</p>
                </div>
    
                <div class="progress mt-4" id="progress-div">
                    <div class="progress-bar progress-bar-striped bg-success" id="progressbar" role="progressbar" style="width: 100%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        Осталось - ${secRemaining}сек
                    </div>
                </div>
            `;

            const progressbar = document.getElementById('progressbar');

            const intervalRemaining = setInterval(() => {
                const pressButtonDiv = document.getElementById('pressButtonDiv');

                secRemaining -= 1;
                widthProgressbar -= 20;

                progressbar.style.width = `${widthProgressbar}%`;
                progressbar.innerHTML = `Осталось - ${secRemaining}сек`;

                document.addEventListener('keydown', (e) => {
                    if (e.which == Nbutton) {
                        pressButtonDiv.innerHTML = ``;

                        phobosHp -= 10;
                        clickUserToPhobos += 1;
                        clearInterval(intervalRemaining);
                    }
                });

                if (secRemaining == 0) {
                    pressButtonDiv.innerHTML = ``;

                    polinaHp -= 10;
                    clearInterval(intervalRemaining);
                }
            }, 1000);
        }, pressNbuttonIntervalNumber);
    }
}

function liftTeamDialog() {
    music.src = '';
    relationshipBloger = 'Отличные';

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

    name.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Готов</p>
        </div>
        <div class="mt-4" id="name">
            <div class="row name">
                <p class="lead" id="name-dialog">Блогер</p>
            </div>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">А вы неплохие ребята</p>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">Тут, кстати, ключ. По-моему от лифта.</p>
        </div>
        <div class="mt-4" id="name">
            <div class="row name">
                <p class="lead" id="name-dialog">Полина</p>
            </div>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">Отлично! Идем к лифту.</p>
        </div>
    `;

    btnNext('liftAnonimSpeak();');
}

function liftAnonimSpeak() {
    sound.src = 'sounds/openDoorLift.mp3';
    setTimeout(() => {
        name.innerHTML = `???`;
        dialogs.innerHTML = `
            <div class="row dialog">
                <p class="lead" id="text-dialog">Всего лишь моя забава...</p>
            </div>
        `;

        setTimeout(() => {
            soundFallLift();
        }, 3000);
    }, 2500);
}

function soundFallLift() {
    sound.src = 'sounds/fallLift.mp3';
    setTimeout(() => {
        music.src = 'sounds/endGame.mp3';
        document.body.style.background = `url('img/bg.jpg')`;
        document.body.style.backgroundPosition = 'center center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundAttachment = 'fixed';
        document.body.style.backgroundSize = 'cover';

        end();
    }, 8000);
}

/* Конец */
function end() {
    nameDiv.parentNode.removeChild(nameDiv);
    dialogsDiv.parentNode.removeChild(dialogsDiv);
    footerButtons.parentNode.removeChild(footerButtons);

    let deathsLc = localStorage.getItem('deaths');
    if (deathsLc == null) {
        deathsLc = 0;
    }

    for (let i = 0; i < team.length; i++) {
        if (team[i].alive == 'false') {
            statDeadPeoplesTeam.push = team[i].name;
        }
    }

    windowDiv.innerHTML = `
        <div class="thanksEnd mt-2">
            <p class="lead text-center text-light mt-2 display-4 title" id="title-game">The First of Them</p>
            <p class="lead text-center text-light mt-1 mt-4 display-3 title-end" id="title2">Конец третьей главы</p>
            
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
                        <a class="dropdown-item" href="location.href='../../The First of Them (Chapter 1+Chapter 2)/chapter1/show.html'">Глава 1</a>
                        <a class="dropdown-item" href="location.href='../../The First of Them (Chapter 1+Chapter 2)/chapter2/show-chapter2.html">Глава 2</a>
                        <a class="dropdown-item" onclick="location.reload()">Глава 3</a>
                        <a class="dropdown-item" href="soon()">Глава 4</a>
                    </div>
                </div>
                <button id="quit" type="button" class="btn btn-dark mt-2 ml-2" onclick="deleteDeathsLc(); location.href = '../../The First of Them (Chapter 1+Chapter 2)/menu.html'">
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
                <div class="modal-content">
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

        <div class="d-flex justify-content-center">
            <div class="bg-dark statistics">
                <div class="header">
                    <h3 class="text-center text-white">Статистика:</h3>
                </div>
                <div class="body">
                    <p class="lead" id="statDeaths">Смертей: ${deathsLc}</p>
                    <p class="lead" id="statKillEnemy">Врагов убито: ${statKillEnemies}</p>
                    <p class="lead" id="statDeadPeopleTeam">Погибло людей из отряда: ${statDeadPeoplesTeam.length == 0 ? statDeadPeoplesTeam.length : statDeadPeoplesTeam.toString().replace(/,/g, ', ')}</p>
                    <p class="lead" id="statRelationshipPolina">Отношения с Полиной(Блогер): ${relationshipPolina}</p>
                    <p class="lead" id="statRelationshipBloger">Отношения с Блогером(Полина): ${relationshipBloger}</p>
                    <p class="lead" id="statRelationshipTeam">Отношения с Отрядом: ${relationshipTeam}</p>
                </div>
            </div>
        </div>
    `;

    const title = document.getElementById('title-game');
    const titleEnd = document.getElementById('title2');
    const links = document.getElementById('links');

    setTimeout(() => {
        title.id = 'title';
        titleEnd.id = 'title-end';
        links.id = 'links-game';
    }, 0);
}

