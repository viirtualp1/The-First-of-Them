// Progress variables
let widthProgress1 = 0;
let widthProgress2 = 0;
let widthProgress3 = 0;

// Hp Vasiliy
let vasiliyHp = 100;

// Delete valve btn
let valveBtn = '';

let progressClickDirection1 = 'top';
let progressClickDirection2 = 'top';
let progressClickDirection3 = 'top';

// Valves indicators
let valveIndicator1 = false;
let valveIndicator2 = false;
let valveIndicator3 = false;
let valveIndicator4 = false;

// Btn talk
let btnClickTalkBloger = 0;
let btnClickTalkVasiliy = 0;

// Massive with dialogs
const dialogsMassive = [
    vasiliy = [
        dialog = {
            question1: 'Как дела?',
            question2: 'Что тебе известно?',
            question3: 'Расскажи о себе',
            question4: 'У тебя есть семья?',
            question5: 'Почему ты не доверяешь нам?',
            question6: 'Чем ты можешь помочь нам?',

            answer1Good: 'Хочется разобраться с этим и вернуться домой',
            answer1Bad: 'Не очень',

            answer2Good: 'Немного. Люди в деревне пропадали, ' +
                'вот я и хотел узнать, что происходит. А по итогу оказался тут',
            answer2Bad: 'Меньше, чем нужно.',

            answer3Good: 'Я бывший военный... После войны начал обычную жизнь, ' +
                'но иногда не хватает мне того времени. То время не просто забыть',
            answer3Bad: 'Бывший военный, это все, что тебе нужно знать',

            answer4Good: 'Жена. Хотел бы я вернуться к ней',
            answer4Bad: 'Жена.',

            answer5Good: 'Все это приходит со временем. ' +
                'Я уже обучен опытом, людям с самого начала доверять не стоит',
            answer5Bad: 'А откуда мне знать, что вы не они?',

            answer6Good: 'Хорошо обучен драться, стрелять, ' +
                'а также не глуп',
            answer6Bad: 'Умею драться и стрелять. Поэтому обузой я вам не буду.',
        },
    ],

    bloger = [
        dialog = {
            question1: 'Как дела?',
            question2: 'Что думаешь о Василии?',
            question3: 'Как тебе обстановка?',
            question4: 'На лабораторию это не похоже, да?)',
            question5: 'Кто с нами играет?',
            question6: 'Что будешь делать после этого?',

            answer1Good: 'Ну более менее',
            answer1Bad: 'Ну так себе.',

            answer2Good: 'Странный тип, но если ты ему доверяешь, то и я тоже',
            answer2Bad: 'Странный тип, я ему не доверяю.',

            answer3Good: 'Жутковато, выбраться бы отсюда поскорее',
            answer3Bad: 'Не очень здесь.',

            answer4Good: 'Это уж точно :)',
            answer4Bad: 'Да...',

            answer5Good: 'Видимо это тот, кто за всем стоит',
            answer5Bad: 'Пока нет идей.',

            answer6Good: 'Не знаю. Возможно вернусь к журналистике и буду расследовать что-то',
            answer6Bad: 'Не знаю.',
        },
    ],
];

// Function for talk with Vasiliy or Bloger
function talk(who) {
    const talkToOneInner = document.getElementById('talkToOneInner');
    talkToOneInner.innerHTML = ``;

    if (who == 'Василий') {
        btnClickTalkVasiliy += 1;

        if (btnClickTalkVasiliy != 7) {
            if (vasiliyRelationship == 'Хорошие' || vasiliyRelationship == 'Отличные') {
                talkToOneInner.innerHTML = `
                    <div class="row mt-3 name">
                        <p class="lead" id="name-dialog">Полина</p>
                    </div>
                    <div class="row dialog">
                        <p class="lead" id="text-dialog">${dialogsMassive[0][0][`question${btnClickTalkVasiliy}`]}</p>
                    </div>
    
                    <div class="row mt-3 name">
                        <p class="lead" id="name-dialog">Василий</p>
                    </div>
    
                    <div class="row dialog">
                        <p class="lead" id="text-dialog">${dialogsMassive[0][0][`answer${btnClickTalkVasiliy}Good`]} <button class="btn btn-dark" onclick="removeTalkDiv()" style="float: right; margin-left: 1vw;">OK</button></p>
                    </div>
                `;
            } else if (vasiliyRelationship == 'Плохие') {
                talkToOneInner.innerHTML = `
                    <div class="row mt-3 name">
                        <p class="lead" id="name-dialog">Полина</p>
                    </div>
                    <div class="row dialog">
                        <p class="lead" id="text-dialog">${dialogsMassive[0][0][`question${btnClickTalkVasiliy}`]}</p>
                    </div>
    
                    <div class="row mt-3 name">
                        <p class="lead" id="name-dialog">Василий</p>
                    </div>
    
                    <div class="row dialog">
                        <p class="lead" id="text-dialog">${dialogsMassive[0][0][`answer${btnClickTalkVasiliy}Bad`]} <button class="btn btn-dark" onclick="removeTalkDiv()" style="float: right; margin-left: 1vw;">OK</button></p>
                    </div>
                `;
            }
        } else {
            const talkBtnNav = document.getElementById('talkBtnNav');
            talkBtnNav.parentNode.removeChild(talkBtnNav);

            const talkToOne = document.getElementById('talkToOne');
            talkToOne.parentNode.removeChild(talkToOne);

            const talkToOneInner = document.getElementById('talkToOneInner');
            talkToOneInner.parentNode.removeChild(talkToOneInner);
        }
    } else if (who == 'Блогер') {
        btnClickTalkBloger += 1;

        if (btnClickTalkBloger != 7) {
            if (blogerRelationship == 'Хорошие' || blogerRelationship == 'Отличные') {
                talkToOneInner.innerHTML = `
                    <div class="row mt-3 name">
                        <p class="lead" id="name-dialog">Полина</p>
                    </div>
                    <div class="row dialog">
                        <p class="lead" id="text-dialog">${dialogsMassive[1][0][`question${btnClickTalkBloger}`]}</p>
                    </div>
    
                    <div class="row mt-3 name">
                        <p class="lead" id="name-dialog">Блогер</p>
                    </div>
    
                    <div class="row dialog">
                        <p class="lead" id="text-dialog">${dialogsMassive[1][0][`answer${btnClickTalkBloger}Good`]} <button class="btn btn-dark" onclick="removeTalkDiv()" style="float: right; margin-left: 1vw;">OK</button></p>
                    </div>
                `;
            } else if (blogerRelationship == 'Плохие') {
                talkToOneInner.innerHTML = `
                    <div class="row mt-3 name">
                        <p class="lead" id="name-dialog">Полина</p>
                    </div>
                    <div class="row dialog">
                        <p class="lead" id="text-dialog">${dialogsMassive[1][0][`question${btnClickTalkBloger}`]}</p>
                    </div>
    
                    <div class="row mt-3 name">
                        <p class="lead" id="name-dialog">Блогер</p>
                    </div>
    
                    <div class="row dialog">
                        <p class="lead" id="text-dialog">${dialogsMassive[1][0][`answer${btnClickTalkBloger}Bad`]} <button class="btn btn-dark" onclick="removeTalkDiv()" style="float: right; margin-left: 1vw;">OK</button></p>
                    </div>
                `;
            }
        } else {
            const talkBtnNav = document.getElementById('talkBtnNav');
            talkBtnNav.parentNode.removeChild(talkBtnNav);

            const talkToOne = document.getElementById('talkToOne');
            talkToOne.parentNode.removeChild(talkToOne);

            const talkToOneInner = document.getElementById('talkToOneInner');
            talkToOneInner.parentNode.removeChild(talkToOneInner);

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
                title: 'Получено достижение: Поговорим?',
            });

            localStorage.setItem('achievement2-chapter4', 'open');
        }
    }
}

// Remove div with dialogs (talk with Vasiliy or Bloger)
function removeTalkDiv() {
    const talkToOneInner = document.getElementById('talkToOneInner');
    talkToOneInner.innerHTML = ``;
}

// Get divs
const music = document.getElementById('music');
const sound = document.getElementById('sound');
const dialogs = document.getElementById('dialogs');
const nameDialog = document.getElementById('name-dialog');
const textDialog = document.getElementById('text-dialog');
const rationFooter = document.getElementById('ration-footer');
const footerButtons = document.getElementById('footer-buttons');
const windowDiv = document.getElementById('window');
const btnNextElem = document.getElementById('btn-next');
const btnSaveLoad = document.getElementById('btn-save-load');
const inventoryInner = document.getElementById('inventoryInner');
const nameDiv = document.getElementById('name');
const dialogsDiv = document.getElementById('dialogs');

// Styles for SweetAlert
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

// Button "Next" with call the function
function btnNext(func) {
    btnNextElement = document.getElementById('btn-next');
    btnNextElement = btnNextElement.parentNode.removeChild(btnNextElement);
    document.getElementById('footer-buttons').innerHTML += `
        <button id="btn-next" type="button" class="btn btn-lg btn-dark" onclick="${func}()">Далее</button>
    `;
}

// Next task
function nextTask(text) {
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
        icon: 'info',
        title: `Задание: ${text}`,
    });

    document.getElementById('task').innerHTML = `Задание: ${text}`;
}

// Random number
function getRandNumb(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// Change background
function changeBg(bgName) {
    document.body.style.backgroundImage = `url("img/${bgName}")`;
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = 'cover';
}

// Choose dialog
function chooseDialog({
    positiveText,
    neutralText,
    unpositiveText,
    positiveFunc,
    neutralFunc,
    unpositiveFunc,
}) {
    dialogs.innerHTML += `
        <div id="chooseDialogDiv">
            <p class="lead text-white" id="chooseDialogText">Выбери: </p>
            
            <div class="row dialog d-flex justify-content-center" id="chooseDialogDiv">
                <button id="btn-dialog-1" type="button" class="btn btn-dark mt-1 mb-2 ml-2 mr-2" onclick="${positiveFunc}();">
                    ${positiveText}
                </button>
                <button id="btn-dialog-2" type="button" class="btn btn-dark mt-1 mb-2" onclick="${neutralFunc}();">
                    ${neutralText}
                </button>
                <button id="btn-dialog-3" type="button" class="btn btn-dark mt-1 mb-2 mr-2 ml-2" onclick="${unpositiveFunc}();">
                    ${unpositiveText}
                </button>
            </div>
        </div>
    `;
}

// Mechanic with Valves (last fight with Vasiliy)
function valve(valveIndicator) {
    valveIndicator = true;

    const massiveNubmers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

    let valveProgressWidthStart1 = getRandNumb(0, 8);
    let valveProgressWidthStart2 = getRandNumb(0, 8);
    let valveProgressWidthStart3 = getRandNumb(0, 8);

    valveProgressWidthStart1 = massiveNubmers[valveProgressWidthStart1];
    valveProgressWidthStart2 = massiveNubmers[valveProgressWidthStart2];
    valveProgressWidthStart3 = massiveNubmers[valveProgressWidthStart3];

    widthProgress1 = valveProgressWidthStart1;
    widthProgress2 = valveProgressWidthStart2;
    widthProgress3 = valveProgressWidthStart3;

    progressClickDirection1 = 'top';
    progressClickDirection2 = 'top';
    progressClickDirection3 = 'top';

    const valvesDiv = document.getElementById('valvesDiv');
    valvesDiv.innerHTML = `
        <div class="d-flex justify-content-center" id="valveDiv"> 
            <div class="d-flex align-items-center" id="valve-1">
                <div class="progress" id="valve-progress-1">
                    <div id="valve-progress-w-1" class="progress-bar bg-dark" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: ${valveProgressWidthStart1}%"></div>
                </div>

                <button type="button" id="btn-valve-click-1" class="btn btn-dark" onclick="valveProgressClick(1)">
                    <i class="fas fa-sync"></i>
                </button>
            </div>

            <div class="d-flex align-items-center" id="valve-2">
                <div class="progress" id="valve-progress-2">
                    <div id="valve-progress-w-2" class="progress-bar bg-dark" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: ${valveProgressWidthStart2}%"></div>
                </div>

                <button type="button" id="btn-valve-click-2" class="btn btn-dark" onclick="valveProgressClick(2)">
                    <i class="fas fa-sync"></i>
                </button>
            </div>

            <div class="d-flex align-items-center" id="valve-3">
                <div class="progress" id="valve-progress-3">
                    <div id="valve-progress-w-3" class="progress-bar bg-dark" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: ${valveProgressWidthStart3}%"></div>
                </div>

                <button type="button" id="btn-valve-click-3" class="btn btn-dark" onclick="valveProgressClick(3)">
                    <i class="fas fa-sync"></i>
                </button>
            </div>
        </div>
    `;
}

// Valve progress
function valveProgressClick(progressElement) {
    const progress1 = document.getElementById('valve-progress-w-1');
    const progress2 = document.getElementById('valve-progress-w-2');
    const progress3 = document.getElementById('valve-progress-w-3');

    if ((widthProgress1 == 50 || widthProgress1 == 60) &&
        (widthProgress2 == 50 || widthProgress2 == 60) &&
        (widthProgress3 == 50 || widthProgress3 == 60)) {
        sound.src = 'sounds/valveSuccess.mp3';

        const valveDiv = document.getElementById('valveDiv');
        valveDiv.parentNode.removeChild(valveDiv);

        vasiliyHp -= 10;

        const progressbarVasiliyHp = document.getElementById('progressbarVasiliyHp');
        progressbarVasiliyHp.style.width = `${vasiliyHp}%`;
        progressbarVasiliyHp.innerHTML = `${vasiliyHp}%`;

        const btnValve = document.getElementById(valveBtn);
        btnValve.parentNode.removeChild(btnValve);
    } else {
        switch (progressElement) {
            case 1:
                if (widthProgress1 <= 0) {
                    progressClickDirection1 = 'top';
                } else if (widthProgress1 >= 100) {
                    progressClickDirection1 = 'bottom';
                }

                if (progressClickDirection1 == 'top') {
                    widthProgress1 += 10;
                    progress1.style.width = `${widthProgress1}%`;
                } else if (progressClickDirection1 == 'bottom') {
                    widthProgress1 -= 10;
                    progress1.style.width = `${widthProgress1}%`;
                }
            break;
            case 2:
                if (widthProgress2 <= 0) {
                    progressClickDirection2 = 'top';
                } else if (widthProgress2 >= 100) {
                    progressClickDirection2 = 'bottom';
                }

                if (progressClickDirection2 == 'top') {
                    widthProgress2 += 10;
                    progress2.style.width = `${widthProgress2}%`;
                } else if (progressClickDirection2 == 'bottom') {
                    widthProgress2 -= 10;
                    progress2.style.width = `${widthProgress2}%`;
                }
            break;
            case 3:
                if (widthProgress3 <= 0) {
                    progressClickDirection3 = 'top';
                } else if (widthProgress3 >= 100) {
                    progressClickDirection3 = 'bottom';
                }

                if (progressClickDirection3 == 'top') {
                     widthProgress3 += 10;
                    progress3.style.width = `${widthProgress3}%`;
                } else if (progressClickDirection3 == 'bottom') {
                    widthProgress3 -= 10;
                    progress3.style.width = `${widthProgress3}%`;
                }
            break;
        }
    }
}

// Delete div with choose dialog (who is right - Vasiliy or Bloger?)
function deleteChooseDialogDiv() {
    const chooseDialogDiv = document.getElementById('chooseDialogDiv');
    chooseDialogDiv.parentNode.removeChild(chooseDialogDiv);
}

// Delete save from localStorage
function clearLc() {
    localStorage.removeItem('mainRoomLaboratory');
}

let counterDialog = 0;
arrayDialog = [];

function settingsArray(massive) {
    arrayDialog = massive;
}

function dialogsInner() {
    if (counterDialog < arrayDialog.length) {
        dialogs.innerHTML = `
            ${arrayDialog[counterDialog]}
            <button onclick="dialogsInner();">Next</button>
        `;

        counterDialog++;
    }
}