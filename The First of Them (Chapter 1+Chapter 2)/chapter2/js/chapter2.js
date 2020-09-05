let music = document.getElementById("music");
let sound = document.getElementById("sound");
let dialogs_div = document.getElementById("dialogs");
let name_dialog = document.getElementById("name-dialog");
let name_div = document.getElementById("name");
let title_hidden = document.getElementById("title-game-hidden");
let btn_next = document.getElementById("btn-next");
let i_items = document.getElementById("inventory-items");

let difficult = localStorage.getItem("difficult");

let acid_smth = false;
let try_test = 0;

let dialogs = [
    "Ну вот, все для разрушения человечества готово. А я всему виной, ха-ха-ха! И как я не понял, что этим RAIN от меня нужно...",
    "Отправляет письмо Алексею Николаеву",
    "Письмо отправлено, но неужели он думает, что я добровольно приму яд? Не на того напал, ха! Эти подонки забрали наши телефоны, так что мы оставались в полном информационном вакууме. Они должны быть в каком-то сейфе в лаборатории. Если я достану телефон, смогу написать своей подруге-журналисту - Алёне. У нее было место в известной газете, думаю, она что-то придумает.",
    "Ну и где он может быть?"
]

let names = [
    "Михаил",
    "Игра",
    "Михаил",
    "Михаил"
]

let clicks_next_dialog = 0;

if (difficult === "easy") {} else if (difficult === "normal") {} else if (difficult === "hard") {} // Как прописать сложность?

let sec_left = 10;
let sec_escape = 10;
let click_mix_btn = 0;
let click_runaway = 0;
let click_runaway2 = 0;

function next_dialog() {
    for (let i = 0; i < dialogs.length && i < 1; i++) {
        dialogs_div.innerHTML += `
            <div class="row dialog">
                <p class="lead" id="text-dialog">${dialogs[i]}</p>
            </div>
        `;
    }

    for (let i = 0; i < names.length && i < 1; i++) {
        name_dialog.innerHTML = `${names[i]}`;
    }

    dialogs.splice(0, 1);
    names.splice(0, 1);
    clicks_next_dialog += 1;

    let dialog_last = document.getElementsByClassName("dialog")[0];
    dialog_last.parentNode.removeChild(dialog_last);
    if (clicks_next_dialog == 1) {
        music.src = "sounds/main_music.mp3";
    }
    if (clicks_next_dialog === 4) {
        name_dialog.innerHTML = `Михаил`;
        swal.fire({
            text: "Ваша задача: найти телефон",
            icon: "info",
        });
        where_to_go();
    }
}

function where_to_go() {
    localStorage.setItem("save-chapter2", "where_to_go");

    document.body.style.backgroundImage = "url('images/office.jpg')";

    btn_next.disabled = true;

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Что сделать?</p>
        </div>

        <div class="row dialog d-flex justify-content-center">
            <button id="main_room" type="button" class="btn btn-dark" onclick="main_room()">
                Простучать стены в главной комнате
            </button>

            <button id="lab_after" type="button" class="btn btn-dark" onclick="lab_after()">
                Проверить лаборантскую
            </button>

            <button id="frige" type="button" class="btn btn-dark" onclick="frige()">
                Проверить криокамеру
            </button>

            <button id="cabinet" type="button" class="btn btn-dark" onclick="cabinet()">
                Пройти в кабинет
            </button>
        </div>
    `;
}

function main_room() {
    localStorage.setItem("save-chapter2", "main_room");

    sound.src = "sounds/kulak.mp3";

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Хм. кажется, здесь есть полое место. А что, если...</p>
        </div>

        <div class="row dialog">
            <p class="lead" id="text-dialog">Ауч! Так не пойдет. Надо найти что-то, что сможет растворить стену.</p>
        </div>

        <div class="row dialog d-flex justify-content-center">
            <button id="where_to_go" type="button" class="btn btn-dark" onclick="where_to_go()">
                Вернуться
            </button>
        </div>
    `;
}

function frige() {
    localStorage.setItem("save-chapter2", "frige");

    document.body.style.backgroundImage = "url('images/kriocamera.jpg')";

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Ага, что тут у нас? Бр-р, ну и холод! Сейфом и не пахнет, но вот там остался образец вируса.</p>
        </div>

        <div class="row dialog d-flex justify-content-center">
            <button id="where_to_go" type="button" class="btn btn-dark" onclick="where_to_go()">
                Вернуться
            </button>
        </div>
    `;
}

function cabinet() {
    localStorage.setItem("save-chapter2", "cabinet");

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog"> О, сейф! Прямо на столе. Пароля мы, конечно, не знаем. Поищу еще.</p>
        </div>

        <div class="row dialog d-flex justify-content-center">
            <button id="main_room" type="button" class="btn btn-dark" onclick="where_to_go()">
                Вернуться
            </button>
        </div>
    `;
}

function lab() {
    localStorage.setItem("save-chapter2", "lab");

    document.body.style.backgroundImage = "url('images/lab.jpg')";

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Кислоты кислоты</p>
        </div>

        <div class="row dialog d-flex justify-content-center">
            <button id="where_to_go" type="button" class="btn btn-dark" onclick="where_to_go()">
                Вернуться
            </button>
        </div>
    `;
}

function lab_after() {
    localStorage.setItem("save-chapter2", "lab_after");

    document.body.style.backgroundImage = "url('images/lab.jpg')";

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">
                Тут остались реактивы. Надо найти что-то, что сможет растворить стену.
            </p>
        </div>

        <div class="row dialog d-flex justify-content-center">
            <button id="right_reactive" type="button" class="btn btn-dark" onclick="right_reactive()">
                Серная кислота
            </button>

            <button id="weak_reactive" type="button" class="btn btn-dark" data-toggle="modal" data-target="#quiz">
                Селеновая кислота
            </button>

            <button id="strong_reactive" type="button" class="btn btn-dark" onclick="strong_reactive()">
                Ион гидрида гелия
            </button>
        </div>

        <div class="row dialog d-flex justify-content-center">
            <button id="where_to_go" type="button" class="btn btn-dark" onclick="where_to_go()">
                Вернуться
            </button>
        </div>
    `;
}

function right_reactive() {
    localStorage.setItem("save-chapter2", "right_reactive");

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">
                Что ж, попробуем. Все положил, теперь надо смешать так, чтобы меня не убило.
            </p>
        </div>

        <div class="row dialog d-flex justify-content-center">
            <button id="right_reactive_task" type="button" class="btn btn-dark" onclick="right_reactive_task()">
                Смешать реактивы
            </button>
        </div>

        <div class="row dialog d-flex justify-content-center">
            <button id="where_to_go" type="button" class="btn btn-dark" onclick="where_to_go()">
                Вернуться
            </button>
        </div>
    `;

    sound.src = "sounds/bul.mp3"; // что-то булькающее и шипящее
}

function strong_reactive() {
    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog"> Черт! Это суперкислота, которую нельзя хранить! Растворяет все, что сущ-щ-щ...
            </p>
        </div>
    `;

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,

        onOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
      
    Toast.fire({
        icon: 'error',
        title: 'Получано достижение: Нахимичил...'
    })

    localStorage.setItem("achievement_2_1", "achievement_2_1");
    
    swal.fire({
        title: 'Вы погибли!',
        text: "Ион гидрида гелия не может быть приготовлен в массе, потому что вступает в реакцию с любой молекулой. Это самая сильная из известных кислот!",
        icon: 'warning',
        showCancelButton: false,
        confirmButtonText: 'Ок',
      }).then((result) => {
        if (result.value) {
            location.href = "../menu.html";
        }
    })
}

function try_reactive() {
    localStorage.setItem("save-chapter2", "try_reactive");

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">
                Растворитель есть, нужно опробовать!
            </p>
        </div>

        <div class="row dialog d-flex justify-content-center">
            <button id="acid" type="button" class="btn btn-dark btn-game" onclick="acid()">
                Вылить кислоту на стену
            </button>
        </div>
    `;
}

function code() {
    localStorage.setItem("save-chapter2", "code");

    Swal.fire({
        icon: 'info',
        title: "Код от сейфа",
        text: "Год изобретения тетриса + год рождения Виктора Пелевина"
    });

    dialogs_div.innerHTML = `
        <div class="row dialog d-flex justify-content-center">
            <form class="form-inline">
                <div class="form-group">
                    <label for="code" class="sr-only">Код: </label>
                    <input type="number" class="form-control" id="code-input">
                </div>
            </form>
        </div>

        <div class="row dialog d-flex justify-content-center">
            <button class="btn btn-dark" onclick="code_check()">Ввести код</button>
        </div>
    `;
}

function code_check() {
    let input = document.getElementById("code-input").value;

    if (input == 3946) {
        document.body.style.backgroundImage = "url('images/phone.jpg')";

        Swal.fire({
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
        })

        dialogs_div.innerHTML = `
            <div class="row dialog d-flex justify-content-center">
                <button id="meet_polina" type="button" class="btn btn-dark" onclick="meet_polina()">
                    Забрать телефон
                </button>
            </div> 
        `;
    } else {
        Swal.fire({
            icon: "error",
            timer: 1500,
        });

        dialogs_div.innerHTML = `
            <div class="row dialog d-flex justify-content-center">
                <button id="code" type="button" class="btn btn-dark" onclick="code()">
                    Попробовать заново
                </button>
            </div>
        `;
    }
}

function meet_polina() {
    localStorage.setItem("save-chapter2", "meet_polina");

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog"> Ура! Я могу связаться с внешним миром!
                Так, фотография образца вируса и его ДНК... Теперь отправлю это Алене. Пусть выпустит репортаж века.
                А теперь пора выбираться. Сверху мутант, пойду через черный ход.
            </p>
        </div>

        <div class="row dialog d-flex justify-content-center">
            <button id="meet_polina_next" type="button" class="btn btn-dark" onclick="meet_polina_next()">
                Дальше
            </button>
        </div>
    `;
}

function meet_polina_next() {
    localStorage.setItem("save-chapter2", "meet_polina_next");

    name_dialog.innerHTML = `Полина`;

    document.body.style.backgroundImage = "url('images/office.jpg')";

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">
                Фу-ух, кажется, оторвалась. Тут ведь должен быть другой выход?
            </p>
        </div>

        <div id="name">
            <div class="row name">
                <p class="lead" id="name-dialog">Ученый</p>
            </div>
        </div>

        <div class="row dialog">
            <p class="lead" id="text-dialog">
                Эй, девочка! Ты кто такая?
            </p>
        </div>

        <div class="row dialog d-flex justify-content-center">
            <button id="meet_polina_last" type="button" class="btn btn-dark" onclick="meet_polina_last()">
                Дальше
            </button>
        </div>
    `;
}

function meet_polina_last() {
    localStorage.setItem("save-chapter2", "meet_polina_last");

    name_dialog.innerHTML = `Полина`;
    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">
                Я не девочка, я член поисково-спасательного отряда NIAR. 
                Была им, пока всю мою команду не уничтожила RAIN-Company.
                И было бы неплохо, если бы вы показали мне выход.
            </p>
        </div>

        <div id="name">
            <div class="row name">
                <p class="lead" id="name-dialog">Ученый</p>
            </div>
        </div>

        <div class="row dialog">
            <p class="lead" id="text-dialog">
                Ладно. Бежим, это здесь. Я Михаил, кстати.
            </p>
        </div>
        <div class="row dialog d-flex justify-content-center">
            <button id="exit_dialog" type="button" class="btn btn-dark" onclick="loud_escape()">
                Дальше
            </button>
        </div>
     `;
}

function loud_escape() {
    localStorage.setItem("save-chapter2", "loud_escape");

    sound.src = "sounds/signal.mp3"; // Включилась сигнализация
    music.src = "sounds/trevoga_music.mp3"; // что-то тревожное

    name_dialog.innerHTML = `Учёный`;
    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Сейчас сюда сбегутся военные! Бежим!</p>
        </div>

        <div class="row dialog d-flex justify-content-center">
            <button id="meet_polina_last" type="button" class="btn btn-dark" onclick="loud_escape_runaway()">
                Бежать
            </button>
        </div>
    `;
}

function test() {
    localStorage.setItem("save-chapter2", "test");

    let first_checkbox = document.getElementById("quiz-1");
    let first_second_checkbox = document.getElementById("quiz-2");
    let second_checkbox = document.getElementById("quiz-2-1");
    let second_second_checkbox = document.getElementById("quiz-2-2");
    let third_first_checkbox = document.getElementById("quiz-3-1");
    let third_second_checkbox = document.getElementById("quiz-3-2");
    let fourth_checkbox = document.getElementById("quiz-4-1");
    let fourth_second_checkbox = document.getElementById("quiz-4-2");

    if (first_checkbox.checked &&
        second_second_checkbox.checked &&
        third_second_checkbox.checked &&
        fourth_checkbox.checked &&
        first_second_checkbox.checked == false &&
        second_checkbox.checked == false &&
        third_first_checkbox.checked == false &&
        fourth_second_checkbox.checked == false) {

        Swal.fire({
            icon: 'success',
            title: 'Правильно!',
            timer: '2000',
        });

        sound.src = "sounds/door.mp3" // звук двери

        if (try_test == 0) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
        
                onOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
              
            Toast.fire({
                icon: 'success',
                title: 'Получано достижение: Профессор'
            })

            localStorage.setItem("achievement_2_3", "achievement_2_3");
        }

        name_dialog.innerHTML = `Полина`;
        dialogs_div.innerHTML = `
            <div class="row dialog">
                <p class="lead" id="text-dialog">Ура! Дверь открыта, бежим!</p>
            </div>

            <div class="row dialog d-flex justify-content-center">
                <button class="btn btn-dark" onclick="quiet_escape()" id="btn-down">
                   Бежать
                </button>
            </div>
        `;
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка',
            timer: '1500',
        });

        try_test += 1;
    }
}

function acid_test() {
    localStorage.setItem("save-chapter2", "acid_test");

    let first_acid_checkbox = document.getElementById("acid-1");
    let second_acid_checkbox = document.getElementById("acid-2");
    let third_acid_checkbox = document.getElementById("acid-3");

    if (
        first_acid_checkbox.checked &&
        second_acid_checkbox.checked == false &&
        third_acid_checkbox.checked == false
    ) {
        Swal.fire({
            icon: 'success',
            title: 'Правильно!',
            timer: 2000,
        });

        setTimeout(() => {
            weak_acid();
        }, 2200);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка',
            timer: 2000,
        });
    }
}

function weak_acid() {
    Swal.fire({
        icon: 'error',
        title: 'Не получилось',
        text: 'Кислота слишком слабая, растворить ей не получится'
    });

    where_to_go();
}

function right_reactive_task() {
    let width_minus = 100;

    name_dialog.innerHTML = `Игра`;
    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Аккуратно смешайте реактивы</p>
        </div>
        <div class="row dialog d-flex justify-content-center" id="run-div-btn">
            <button id="mix-btn" type="button" class="btn btn-dark" onclick="counter_acid_func()">
                Помешивать
            </button>
        </div>
        <div class="progress" id="progress-div">
            <div class="progress-bar bg-danger" id="progressbar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${sec_left}сек</div>
        </div>
    `;

    setInterval(() => {
        let progressbar = document.getElementById("progressbar");
        width_minus -= 10;
        sec_left -= 1;
        try {
            progressbar.style.width = width_minus + "%";
            progressbar.innerHTML = sec_left + " сек";
        } catch {
            sec_left = -1000;
        }

        if (sec_left === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Вы умерли!',
            });

            setInterval(() => {
                location.href = "../menu.html";
            }, 2000);
        }
    }, 1000);
}

function counter_acid_func() {
    let progress = document.getElementById("progress-div");
    let run_div_btn = document.getElementById("run-div-btn");

    click_mix_btn += 1;
    if (click_mix_btn === 10) {
        acid();
    }
}

function acid() {
    localStorage.setItem("save-chapter2", "acid");

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">
                Кусок стены растворился, в появившейся дырке стал виден сверток.
            </p>
        </div>

        <div class="row dialog d-flex justify-content-center">
            <button id="code" type="button" class="btn btn-dark" onclick="code()">
                Взять сверток
            </button>
        </div>
    `;
}

function quiet_escape() {
    music.src = "sounds/foots.mp3"; // стук ног

    setTimeout(() => {
        location.href = "end.html";
    }, 1500);
}

function phone_test_bg() {
    document.body.style.backgroundImage = "url('images/test-quit.jpg')";
}

function exit_dialog() {
    localStorage.setItem("save-chapter2", "exit_dialog");

    sound.src = "sounds/main_music.mp3"; // вставить музыку для бега
    music.src = "sounds/foots.mp3"; // вставить звук cтука ног

    document.body.style.backgroundImage = "url('images/exit.jpg')";

    name_dialog.innerHTML = `Ученый`;
    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">
                Вот мы и у выхода. Но здесь кодовый замок. Что сделать, как думаешь?
            </p>
        </div>

        <div id="name">
            <div class="row name">
                <p class="lead" id="name-dialog">Полина</p>
            </div>
        </div>

        <div class="row dialog">
            <p class="lead" id="text-dialog">
                Ну-у...
            </p>
        </div>

        <div class="row dialog d-flex justify-content-center">
            <button id="loud_escape" type="button" class="btn btn-dark" onclick="achievement_grand_chemist(); quiet_escape()">
                Бутылка с кислотой
            </button>

            <button id="loud_escape" type="button" class="btn btn-dark " onclick="quiet_escape()">
                Прострелить дверную ручку.
            </button>

            <button id="cabinet" type="button" class="btn btn-dark " data-toggle="modal" data-target="#quiz2" onclick="phone_test_bg()">
                Кнопка Start!
            </button>
        </div>
    `;
}

function achievement_grand_chemist() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,

        onOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
      
    Toast.fire({
        icon: 'success',
        title: 'Получано достижение: Великий химик'
    })

    localStorage.setItem("achievement_2_2", "achievement_2_2");
}

function loud_escape_runaway() {
    let width_minus = 100;

    name_dialog.innerHTML = `Игра`;
    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Спасайтесь!</p>
        </div>

        <div class="row dialog d-flex justify-content-center" id="run-div-btn">
            <button type="button" class="btn btn-dark" onclick="vasiliy_ivanov()" id="vasiliy">???</button>

            <button id="btn-run" type="button" class="btn btn-dark" onclick="runaway_check()">
                Бежать
            </button>
        </div>

        <div class="progress" id="progress-div">
            <div class="progress-bar bg-danger" id="progressbar-escape" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${sec_escape}сек</div>
        </div>
    `;

    setInterval(() => {
        let progressbar = document.getElementById("progressbar-escape");
        width_minus -= 10;
        sec_escape -= 1;

        try {
            progressbar.style.width = width_minus + "%";
            progressbar.innerHTML = sec_escape + "сек";
        } catch { sec_escape = 500; }

        if (sec_escape === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Вы умерли!',
            });

            setInterval(() => {
                location.href = "../menu.html";
            }, 2000);
        }
    }, 1000);
}

function runaway_check() {
    click_runaway += 1;

    if (click_runaway == 10) {
        exit_dialog();
    }
}

function vasiliy_ivanov() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,

        onOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });
      
    Toast.fire({
        icon: 'success',
        title: 'Получано достижение: Что-то тут не так...'
    });

    localStorage.setItem("achievement_secret", "open");

    music.src = "sounds/night_jungle.mp3";

    name_dialog.innerHTML = `Василий Иванов`;
    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Что-то тут не так...</p>
        </div>

        <div class="row dialog d-flex justify-content-center" id="run-div-btn">
            <button id="btn-run" type="button" class="btn btn-dark" onclick="leave()">
                Исследовать
            </button>
        </div>
    `;
}

function leave() { location.href = "../menu.html"; }
