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
        html: 'Перед вами рация. <br /> Сверху имя ваших людей из отряда: Анна, Никита, Данил, Олег. <br /> Слева направление куда их можно отправить: налево, прямо, направо.',
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

    btnNext(`changeHeroBlogerHouse('Б', 'Л', 'О', 'Г', 'Е', 'Р', '#f33b3b')`);
}

// eslint-disable-next-line require-jsdoc
// eslint-disable-next-line no-unused-vars
function changeHeroBlogerHouse(letter1, letter2, letter3,
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
            <p class="lead" id="text-dialog">Расчищайте путь в лабораторию...</p>
        </div>
        <div class="row dialog d-flex justify-content-center" id="run-div-btn">
            <button id="btn-clean-path" type="button" class="btn btn-dark mt-2 mb-2" onclick="counterClean()">
                Чистить
            </button>
        </div>

        <div class="progress mt-4" id="progress-div">
            <div class="progress-bar progress-bar-striped bg-success" id="progressbar_clean" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
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
            <div class="progress-bar progress-bar-striped bg-success" id="progressbar_dead_phobos_success" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
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
            Swal.fire({
                icon: 'error',
                title: 'Вы проиграли!',
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
            <div class="progress-bar progress-bar-striped bg-success" id="progressbar_house_office_search" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
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

    music.src = 'sounds/veter_v_gorah.mp3';
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
        <button class="btn btn-dark" onclick="sendTeamMountains()">Послать</button>
  `;
}

function sendTeamMountains() {
    const chooseArray = [];

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

    danil1 = document.getElementById('danil1'),
        danil2 = document.getElementById('danil2'),
        danil3 = document.getElementById('danil3');

    oleg1 = document.getElementById('oleg1'),
        oleg2 = document.getElementById('oleg2'),
        oleg3 = document.getElementById('oleg3');

    const chooseMas = chooseArray.toString().replace(/,/g, ', ');

    // Проверка выбора людей (хуй сосня (переделать нормально))
    if (anna1.checked &&
        nikita2.checked &&
        danil3.checked) {
        Swal.fire({
            title: `Ваш выбор: ${chooseMas}`,
            showCancelButton: true,
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
            title: `Ваш выбор: ${chooseMas}`,
            showCancelButton: true,
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
            title: `Ваш выбор: ${chooseMas}`,
            showCancelButton: true,
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
            title: `Ваш выбор: ${chooseMas}`,
            showCancelButton: true,
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
    } else if (anna2.checked &&
        oleg3.checked &&
        nikita1.checked) {
        Swal.fire({
            title: `Ваш выбор: ${chooseMas}`,
            showCancelButton: true,
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
            title: `Ваш выбор: ${chooseMas}`,
            showCancelButton: true,
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
            title: `Ваш выбор: ${chooseMas}`,
            showCancelButton: true,
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
            title: `Ваш выбор: ${chooseMas}`,
            showCancelButton: true,
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
            title: `Ваш выбор: ${chooseMas}`,
            showCancelButton: true,
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
            title: `Ваш выбор: ${chooseMas}`,
            showCancelButton: true,
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
            title: `Ваш выбор: ${chooseMas}`,
            showCancelButton: true,
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
            title: `Ваш выбор: ${chooseMas}`,
            showCancelButton: true,
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

            if (team[randNumb1].dead != 'false') {
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
            <button id="btn-dialog-1-1" type="button" class="btn btn-dark mt-2 mb-2" onclick="dialogBad();">
                - Я здесь командир, что скажу - то и выполнять
            </button>
            <button id="btn-dialog-1-2" type="button" class="btn btn-dark mt-2 mb-2" onclick="dialogHope();">
                - В этот раз никого не потеряем
            </button>
            <button id="btn-dialog-1-3" type="button" class="btn btn-dark mt-2 mb-2" onclick="dialogNoOne();">
                Никого не отправлять
            </button>
        </div>
    `;
}

function chooseSplitUpOrNo() {
    name.innerHTML = `Выбор разделиться или нет`;
    dialogs.innerHTML = `
        <div class="row dialog d-flex justify-content-center" id="chooseSplitUp-div-btn">
            <button id="btn-splitUp" type="button" class="btn btn-dark mt-2 mb-2" onclick="splitUp()">
                Разделиться
            </button>
            <button id="btn-noSplitUp" type="button" class="btn btn-dark mt-2 mb-2" onclick="noSplitUp()">
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

    function checkIsDead() {
        const randNumb1 = getRandNumbTeam(0, 3);

        if (team[randNumb1].dead != 'false') {
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
        icon: 'error',
        title: 'Отряд: отношения понижены',
    });

    function checkIsDead() {
        const randNumb1 = getRandNumbTeam(0, 3);

        if (team[randNumb1].dead != 'false') {
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

    function checkIsDead() {
        const randNumb1 = getRandNumbTeam(0, 3);

        if (team[randNumb1].dead != 'false') {
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
    name.innerHTML = `Полина`;
    dialogs.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Ладно, идем вместе</p>
        </div>
    `;
}

// Сценарий - не разделяемся
function noSplitUp() {

}
