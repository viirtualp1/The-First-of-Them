/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */

// Main variables
const music = document.getElementById('music');
const sound = document.getElementById('sound');
const dialogs = document.getElementById('dialogs');
const name = document.getElementById('name-dialog');
const rationFooter = document.getElementById('ration-footer');
const footerButtons = document.getElementById('footer-buttons');
const windowDiv = document.getElementById('window');
const btnNextElem = document.getElementById('btn-next');
const btnSaveLoad = document.getElementById('btn-save-load');

// Div - name and dialog
const nameDiv = document.getElementById('name');
const dialogsDiv = document.getElementById('dialogs');

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

function getRandNumbTeam(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function changeBg(bgName) {
    document.body.style.backgroundImage = `url("img/${bgName}")`;
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = 'cover';
}

function buttons() {
    if (dialogs_copy[currentDialog].buttons) {
        for (let i = 0; i < dialogs_copy[currentDialog].buttons.length; i++) {
            const button = document.createElement('BUTTON');
            button.onclick = dialogs_copy[currentDialog].buttons[i].onclick;
            button.innerText = dialogs_copy[currentDialog].buttons[i].text;

            dialogs_div.appendChild(button);
        }
    }
}
