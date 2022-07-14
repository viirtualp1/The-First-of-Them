const gameMechanicsSettings = {
  // true - move to bottom
  // false - move to top
  currentIndexDialog: 0,
  isActionActive: false,

  progressesDirections: {
    progress1: true,
    progress2: true,
    progress3: true,
  },

  widthProgress: {
    progress1: 0,
    progress2: 0,
    progress3: 0,
  },

  valvesIndicators: {
    indicator1: false,
    indicator2: false,
    indicator3: false,
    indicator4: false,
  },
};

export let initialGameSettings = {};

/**
 * @param {object} settings Parameters for the game.
 * @param {array} settings.array Array with dialogs.
 * @param {object} settings.heroes Objects with heroes.
 * @param {object} settings.heroes.heroN Hero object
 * @param {string} settings.heroes.heroN.name Name of hero
 * @param {number} settings.heroes.heroN.hp Hp of hero
 * @param {element} settings.elements DOM elements for game
 * @param {element} settings.elements.dialogs DOM element for insert dialogue
 * @param {element} settings.elements.chooseActions Dom element for insert any actions
 */
export function init(settings) {
  initialGameSettings = settings; // не хуйня ли?
  updateArray();
}

// function createBtnNext(div) {
//   const button = document.createElement('button');

//   button.addEventListener('click', nextDialog);
//   button.innerText = 'Далее';
//   button.className = 'btn btn-dark btn-next';

//   div.appendChild(button);
// }

function updateArray() {
  initialGameSettings.elements.fromWho.innerText =
    initialGameSettings.array[initialGameSettings.heroes.hero1.nameInArray].questions[
      gameMechanicsSettings.currentIndexDialog
    ].questionFrom;

  initialGameSettings.elements.dialogs.innerText =
    initialGameSettings.array[initialGameSettings.heroes.hero1.nameInArray].questions[
      gameMechanicsSettings.currentIndexDialog
    ].question;
}

function checkType() {}

function nextDialog() {
  gameMechanicsSettings.currentIndexDialog += 1;
  updateArray();
}

// func 'talk' idea for update
// danil
function talk(config) {
  console.log('hello');
  talkToOneInner.innerHTML = `
      <div class="row mt-3 name">
          <p class="lead" id="name-dialog">${config.speaking}</p>
      </div>
      <div class="row dialog">
          <p class="lead" id="text-dialog">${
            dialogsMassive[0][0][`question${btnClickTalkVasiliy}`]
          }</p>
      </div>

      <div class="row mt-3 name">
          <p class="lead" id="name-dialog">Василий</p>
      </div>

      <div class="row dialog">
          <p class="lead" id="text-dialog">${
            dialogsMassive[0][0][`answer${btnClickTalkVasiliy}Good`]
          } <button class="btn btn-dark" onclick="removeTalkDiv()" style="float: right; margin-left: 1vw;">OK</button></p>
      </div>
  `;
}

// Function for talk with Vasiliy or Bloger
// function talk(who) {
//   const talkToOneInner = document.getElementById('talkToOneInner');
//   talkToOneInner.innerHTML = ``;

//   if (who == 'Василий') {
//     btnClickTalkVasiliy += 1;

//     if (btnClickTalkVasiliy != 7) {
//       if (vasiliyRelationship == 'Хорошие' || vasiliyRelationship == 'Отличные') {
//         talkToOneInner.innerHTML = `
//                     <div class="row mt-3 name">
//                         <p class="lead" id="name-dialog">Полина</p>
//                     </div>
//                     <div class="row dialog">
//                         <p class="lead" id="text-dialog">${
//                           dialogsMassive[0][0][`question${btnClickTalkVasiliy}`]
//                         }</p>
//                     </div>

//                     <div class="row mt-3 name">
//                         <p class="lead" id="name-dialog">Василий</p>
//                     </div>

//                     <div class="row dialog">
//                         <p class="lead" id="text-dialog">${
//                           dialogsMassive[0][0][`answer${btnClickTalkVasiliy}Good`]
//                         } <button class="btn btn-dark" onclick="removeTalkDiv()" style="float: right; margin-left: 1vw;">OK</button></p>
//                     </div>
//                 `;
//       } else if (vasiliyRelationship == 'Плохие') {
//         talkToOneInner.innerHTML = `
//                     <div class="row mt-3 name">
//                         <p class="lead" id="name-dialog">Полина</p>
//                     </div>
//                     <div class="row dialog">
//                         <p class="lead" id="text-dialog">${
//                           dialogsMassive[0][0][`question${btnClickTalkVasiliy}`]
//                         }</p>
//                     </div>

//                     <div class="row mt-3 name">
//                         <p class="lead" id="name-dialog">Василий</p>
//                     </div>

//                     <div class="row dialog">
//                         <p class="lead" id="text-dialog">${
//                           dialogsMassive[0][0][`answer${btnClickTalkVasiliy}Bad`]
//                         } <button class="btn btn-dark" onclick="removeTalkDiv()" style="float: right; margin-left: 1vw;">OK</button></p>
//                     </div>
//                 `;
//       }
//     } else {
//       const talkBtnNav = document.getElementById('talkBtnNav');
//       talkBtnNav.parentNode.removeChild(talkBtnNav);

//       const talkToOne = document.getElementById('talkToOne');
//       talkToOne.parentNode.removeChild(talkToOne);

//       const talkToOneInner = document.getElementById('talkToOneInner');
//       talkToOneInner.parentNode.removeChild(talkToOneInner);
//     }
//   } else if (who == 'Блогер') {
//     btnClickTalkBloger += 1;

//     if (btnClickTalkBloger != 7) {
//       if (blogerRelationship == 'Хорошие' || blogerRelationship == 'Отличные') {
//         talkToOneInner.innerHTML = `
//                     <div class="row mt-3 name">
//                         <p class="lead" id="name-dialog">Полина</p>
//                     </div>
//                     <div class="row dialog">
//                         <p class="lead" id="text-dialog">${
//                           dialogsMassive[1][0][`question${btnClickTalkBloger}`]
//                         }</p>
//                     </div>

//                     <div class="row mt-3 name">
//                         <p class="lead" id="name-dialog">Блогер</p>
//                     </div>

//                     <div class="row dialog">
//                         <p class="lead" id="text-dialog">${
//                           dialogsMassive[1][0][`answer${btnClickTalkBloger}Good`]
//                         } <button class="btn btn-dark" onclick="removeTalkDiv()" style="float: right; margin-left: 1vw;">OK</button></p>
//                     </div>
//                 `;
//       } else if (blogerRelationship == 'Плохие') {
//         talkToOneInner.innerHTML = `
//                     <div class="row mt-3 name">
//                         <p class="lead" id="name-dialog">Полина</p>
//                     </div>
//                     <div class="row dialog">
//                         <p class="lead" id="text-dialog">${
//                           dialogsMassive[1][0][`question${btnClickTalkBloger}`]
//                         }</p>
//                     </div>

//                     <div class="row mt-3 name">
//                         <p class="lead" id="name-dialog">Блогер</p>
//                     </div>

//                     <div class="row dialog">
//                         <p class="lead" id="text-dialog">${
//                           dialogsMassive[1][0][`answer${btnClickTalkBloger}Bad`]
//                         } <button class="btn btn-dark" onclick="removeTalkDiv()" style="float: right; margin-left: 1vw;">OK</button></p>
//                     </div>
//                 `;
//       }
//     } else {
//       const talkBtnNav = document.getElementById('talkBtnNav');
//       talkBtnNav.parentNode.removeChild(talkBtnNav);

//       const talkToOne = document.getElementById('talkToOne');
//       talkToOne.parentNode.removeChild(talkToOne);

//       const talkToOneInner = document.getElementById('talkToOneInner');
//       talkToOneInner.parentNode.removeChild(talkToOneInner);

//       const Toast = Swal.mixin({
//         toast: true,
//         position: 'top-end',
//         showConfirmButton: false,
//         timer: 2000,
//         timerProgressBar: true,

//         onOpen: (toast) => {
//           toast.addEventListener('mouseenter', Swal.stopTimer);
//           toast.addEventListener('mouseleave', Swal.resumeTimer);
//         },
//       });

//       Toast.fire({
//         icon: 'success',
//         title: 'Получено достижение: Поговорим?',
//       });

//       localStorage.setItem('achievement2-chapter4', 'open');
//     }
//   }
// }

// Remove div with dialogs (talk with Vasiliy or Bloger)
// TODO with gameSettings
// function removeTalkDiv() {
// talkToOne.innerHTML = ``;
// }

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
function changeBg(path) {
  document.body.style.backgroundImage = `url(${path})`;
}

// function chooseAction(variants = [positive, neutral, unpositive]) {
//   const chooseText = document.createElement('p');
//   chooseText.className = 'choose-action-text';
//   chooseText.innerText = 'Выбери: ';

//   const chooseActionBtns = document.createElement('div');
//   chooseActionBtns.className = 'd-flex justify-content-center';

//   variants.forEach((variant) => {
//     const button = document.createElement('button');
//     button.addEventListener('click', () => {
//       variant.func();
//       initialGameSettings.isActionActive = !initialGameSettings.isActionActive;
//     });
//     button.className = 'btn btn-dark btn-choose-action';
//     button.innerText = variant.text;

//     const colDiv = document.createElement('div');
//     colDiv.appendChild(button);

//     chooseActionBtns.appendChild(colDiv);
//   });

//   const chooseActionDiv = document.createElement('div');
//   chooseActionDiv.className = 'choose-action-div';
//   chooseActionDiv.appendChild(chooseText);
//   chooseActionDiv.appendChild(chooseActionBtns);

//   initialGameSettings.elements.chooseActions.appendChild(chooseActionDiv);
// }

// chooseAction(initialGameSettings, (variants = [positive, neutral, unpositive]));

// Mechanic with Valves (last fight with Vasiliy)
function valve(valveIndicator) {
  valveIndicator = true;

  const massiveNubmers = new Array().fill(10);
  console.log(massiveNubmers);

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

  if (
    (widthProgress1 == 50 || widthProgress1 == 60) &&
    (widthProgress2 == 50 || widthProgress2 == 60) &&
    (widthProgress3 == 50 || widthProgress3 == 60)
  ) {
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
