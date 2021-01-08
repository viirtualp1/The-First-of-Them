/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */

// btn talk
let btnClickTalkMikhail = 0;
let btnClickTalkVasiliy = 0;

// Progress variables
let widthProgress1 = 0;
let widthProgress2 = 0;
let widthProgress3 = 0;

// Hp Vasiliy
let vasiliyHp = 100;

// delete valve btn
let valveBtn = '';

let progressClickDirection1 = 'top';
let progressClickDirection2 = 'top';
let progressClickDirection3 = 'top';

// valves indicators
let valveIndicator1 = false;
let valveIndicator2 = false;
let valveIndicator3 = false;
let valveIndicator4 = false;

// Main variables
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

// Div - name and dialog
const nameDiv = document.getElementById('name');
const dialogsDiv = document.getElementById('dialogs');

// Стили для SweetAlert
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

// Кнопка "Далее" с вызовом функции при клике
function btnNext(func) {
    btnNextElement = document.getElementById('btn-next');
    btnNextElement = btnNextElement.parentNode.removeChild(btnNextElement);
    document.getElementById('footer-buttons').innerHTML += `
        <button id="btn-next" type="button" class="btn btn-lg btn-dark" onclick="${func}()">Далее</button>
    `;
}

// Следующее задание
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

// Рандомное число
function getRandNumb(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// Смена фона
function changeBg(bgName) {
    document.body.style.backgroundImage = `url("img/${bgName}")`;
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = 'cover';
}

// Выбор диалога
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

    dialogs.innerHTML += `
        <div class="d-flex justify-content-center" id="valveDiv"> 
            <div class="d-flex align-items-center" id="valve-1">
                <div class="progress" id="valve-progress-1">
                    <div id="valve-progress-w-1" class="progress-bar bg-secondary" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: ${valveProgressWidthStart1}%"></div>
                </div>

                <button type="button" id="btn-valve-1" class="btn btn-secondary" onclick="valveProgressClick(1)">
                    <i class="fas fa-sync"></i>
                </button>
            </div>

            <div class="d-flex align-items-center" id="valve-2">
                <div class="progress" id="valve-progress-2">
                    <div id="valve-progress-w-2" class="progress-bar bg-secondary" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: ${valveProgressWidthStart2}%"></div>
                </div>

                <button type="button" id="btn-valve-2" class="btn btn-secondary" onclick="valveProgressClick(2)">
                    <i class="fas fa-sync"></i>
                </button>
            </div>

            <div class="d-flex align-items-center" id="valve-3">
                <div class="progress" id="valve-progress-3">
                    <div id="valve-progress-w-3" class="progress-bar bg-secondary" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: ${valveProgressWidthStart3}%"></div>
                </div>

                <button type="button" id="btn-valve-3" class="btn btn-secondary" onclick="valveProgressClick(3)">
                    <i class="fas fa-sync"></i>
                </button>
            </div>
        </div>
    `;
}

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

        if (vasiliyHp == 60) {
            checkRelationShip();
        }
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

function deleteChooseDialogDiv() {
    const chooseDialogDiv = document.getElementById('chooseDialogDiv');
    chooseDialogDiv.parentNode.removeChild(chooseDialogDiv);
}

function talkMikhail() {
    switch (btnClickTalkMikhail) {
        case 1:

        ; break;
    }
}

function talkVasiliy() {
    switch (btnClickTalkVasiliy) {
        case 1:
            dialogs.innerHTML += `
                <div id="chooseDialogDiv">
                    <p class="lead text-white" id="chooseDialogText">Выбери: </p>
                    
                    <div class="row dialog" id="chooseDialogDiv">
                        <button id="btn-dialog-1" type="button" class="btn" onclick="();">
                            - Расскажи о себе побольше
                        </button>
                        <button id="btn-dialog-2" type="button" class="btn" onclick="();">
                            - Как дела?
                        </button>
                        <button id="btn-dialog-3" type="button" class="btn" onclick="();">
                            - Расскажи побольше о пропажах в деревни
                        </button>
                    </div>
                </div>
            `;
        ; break;
    }
}
