let music = document.getElementById("music");
let sound = document.getElementById("sound");
let dialogs_div = document.getElementById("dialogs");
let name_dialog = document.getElementById("name-dialog");
let title_hidden = document.getElementById("title-game-hidden");
let btn_next = document.getElementById("btn-next");
let task = document.getElementById("task");
let task_second = document.getElementById("task-second");
let task_third = document.getElementById("task-third");
let i_items = document.getElementById("inventory-items");
let sound2 = document.getElementById("sound2");

let dialogs = [
    "- Так, мы на месте",
    "- Отлично, отсюда поступил последний сигнал отряда, найдите все, что сможете, и сообщите нам",
    "- Есть, до связи",
    "- Ну что, видишь что-то?",
    "- Неа, кромешная тьма, прилетели ночью, вот же повезло нам",
    "- Ты слышала?",
    "- Нет, может, показалось?",
    "- Не знаю, возможно",
    "- Смотри!",
    "Полина нашла отряд... Мертвый",
    "- О боже... Кто это так с ними? Они же все...",
    "Выбегают собаки-мутанты, они выстрелили и начинают убегать",
    "- Бежим!",
    "- Фух, вроде бы убежали",
    "- Да что это черт возьми вообще было?",
    "- Не знаю. Ты видел их глаза? Они переливались красным. Это так ужасно",
    "- Нужно найти отсюда выход и поскорее, позвони начальству",
    "- Хорошо, сейчас",
    "После разговора с начальством",
    "- Они что, издеваются? Они знали об этом и не предупредили нас? Ты знал что-то об этом?",
    "- Нет. Они пообещали прислать вертолёт",
    "- Пока можем разделиться и пройтись по особняку, может найдем что-то",
    "- Давай"
]

let names = [
    "Полина",
    "Начальство",
    "Полина",
    "Александр",
    "Полина",
    "Александр",
    "Полина",
    "Александр",
    "Полина",
    "Игра",
    "Александр",
    "Игра",
    "Игра"
];

let clicks_next_dialog = 0;
let click_left_btn = 0;
let click_right_btn = 0;
let click_fobos_btn = 0;
let click_shot_zombie = 0;
let click_shot_zombie2 = 0;
let sec_you_hp_2 = 5;
let sec_you_hp = 5;
let sec_right = 10;
let sec_left = 5;
let sec_fobos = 5;
let sec_evasion = 2;
let zombie_hp = 100;
let zombie_hp2 = 100;

let difficult = localStorage.getItem("difficult");

if (difficult === "easy") { } else if (difficult === "normal") {
    sec_right = 5;
    sec_left = 4;
    sec_fobos = 4;
    sec_you_hp = 4;
    sec_you_hp_2 = 4;
} else if (difficult === "hard") {
    sec_right = 3;
    sec_left = 3;
    sec_fobos = 3;
    sec_you_hp = 3;
    sec_you_hp_2 = 3;
}

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

    if (clicks_next_dialog === 1) {
        music.src = "music/night_jungle.mp3";
        sound.src = "sounds/airplane.mp3";

        document.body.style.background = "url('images/scene1.png')";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
        document.body.style.opacity = "1";
    }

    if (clicks_next_dialog === 5) {
        document.body.style.background = "#fff";
        setTimeout(() => {
            document.body.style.background = "url('images/background.jpg')";
            document.body.style.backgroundPosition = "center center";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundAttachment = "fixed";
            document.body.style.backgroundSize = "cover";
            document.body.style.opacity = "1";
        }, 150)

        sound.src = "sounds/flashlight.mp3";
    }

    if (clicks_next_dialog === 7) { sound.src = "sounds/charge_guns.mp3"; }

    if (clicks_next_dialog === 12) {
        sound.src = "sounds/dogs.mp3";
        sound2.src = "music/run.mp3";
    }

    if (clicks_next_dialog === 13) {
        btn_next.disabled = true;

        dialogs_div.innerHTML = `
            <div class="row dialog">
                <p class="lead" id="text-dialog">Куда побежать?</p>
            </div>
            <div class="row dialog d-flex justify-content-center">
                <button id="btn-1-left" type="button" class="btn btn-dark" onclick="quick_time_training_l()">
                    Налево
                </button>
                <button id="btn-2-right" type="button" class="btn btn-dark" onclick="quick_time_training_r()">
                    Направо
                </button>
            </div>
        `;
    }

    if (clicks_next_dialog === 14) {
        name_dialog.innerHTML = `Полина`;

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
            onOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });
        
        Toast.fire({
            icon: 'success',
            title: 'Получено достижение: В безопасности... Наверное'
        });

        localStorage.setItem("achievement_2", "open");
    }

    if (clicks_next_dialog === 15) { name_dialog.innerHTML = `Александр`; }

    if (clicks_next_dialog === 16) { name_dialog.innerHTML = `Полина`; }

    if (clicks_next_dialog === 17) { name_dialog.innerHTML = `Полина`; }

    if (clicks_next_dialog === 18) { name_dialog.innerHTML = `Александр`; }

    if (clicks_next_dialog === 19) { name_dialog.innerHTML = `Игра`; }

    if (clicks_next_dialog === 20) { name_dialog.innerHTML = `Полина`; }

    if (clicks_next_dialog === 21) { name_dialog.innerHTML = `Александр`; }

    if (clicks_next_dialog === 22) { name_dialog.innerHTML = `Полина`; }

    if (clicks_next_dialog === 23) {
        name_dialog.innerHTML = `Игра`;

        btn_next.disabled = true;

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3500,
            timerProgressBar: true,
            onOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });
        
        Toast.fire({
            icon: 'info',
            title: 'Задание: Исследовать дом'
        });

        task.innerHTML = `Основное задание: Исследовать дом`;

        dialogs_div.innerHTML = `
            <div class="row dialog">
                <p class="lead" id="text-dialog">Куда пойти?</p>
            </div>

            <div class="row dialog d-flex justify-content-center" id="div-where">
                <button id="main_hall" type="button" class="btn btn-dark" onclick="main_hall()">
                    Осмотреть главный холл
                </button>
                <button id="right_room" type="button" class="btn btn-dark" onclick="right_room()">
                    Пойти в комнату справа
                </button>
            </div>
        `;
    }
}

function main_hall() {
    task.innerHTML = `Основное задание: Исследовать дом`;
    document.body.style.background = "url('images/main-hall-map.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
    document.body.style.opacity = "1";

    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });
    
    Toast.fire({
        icon: 'info',
        title: 'Игра сохранена'
    });

    localStorage.setItem("save", "hall");

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">На столе лежит карта дома</p>
        </div>
    
        <div class="row dialog d-flex justify-content-center" id="take-map-div">
            <button id="take_map" type="button" class="btn btn-dark" onclick="take_map()">
                Взять карту
            </button>
        </div>
    `;
}

function take_map() {
    document.body.style.background = "url('images/main-hall-nomap.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
    document.body.style.opacity = "1";

    task.innerHTML = `Основное задание: Исследовать дом`;

    localStorage.setItem("save", "map");

    document.getElementById("map-div").innerHTML = `
        <img src="images/map.png" class="img-fluid">
    `;

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });
    
    Toast.fire({
        icon: 'success',
        title: 'Новый предмет: Карта дома'
    });

    name_dialog.innerHTML = `Полина`;

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Пойду дальше</p>
        </div>

        <div class="row dialog d-flex justify-content-center" id="search-next-div">
            <button id="search_next" type="button" class="btn btn-dark" onclick="search_next()">
                Исследовать
            </button>
        </div>
    `;
}

function search_next() {
    task.innerHTML = `Основное задание: Исследовать дом`;

    localStorage.setItem("save", "search-next");

    name_dialog.innerHTML = `Полина`;
    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">В стене могут подойти два каких-то камня, может получиться найти их...</p>
        </div>

        <div class="row dialog">
            <p class="lead" id="text-dialog">Тут еще какая-то книжная полка и книги не хватает, хм...</p>
        </div>

        <div class="row dialog d-flex justify-content-center" id="div-where">
            <button id="right_room" type="button" class="btn btn-dark" onclick="right_room()">
                Пойти в комнату справа
            </button>
            <button id="second_floor" type="button" class="btn btn-dark" onclick="second_floor()">
                Пойти на второй этаж
            </button>
        </div>
    `;

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });
    
    Toast.fire({
        icon: 'info',
        title: 'Доп. Задание: Найти два камня',
        text: 'Доп. Задание 2: Найти книгу'
    });

    task_second.innerHTML = `Дополнительное задание: Найти два камня`;
    task_third.innerHTML = `Дополнительное задание 2: Найти книгу`;
}

function right_room() {
    task.innerHTML = `Основное задание: Исследовать дом`;
    task_second.innerHTML = `Дополнительное задание: Найти два камня`;
    task_third.innerHTML = `Дополнительное задание 2: Найти книгу`;

    document.body.style.backgroundImage = "url('images/rightroom-zombie.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    localStorage.setItem("save", "right-room");

    let you_hp = 100;

    name_dialog.innerHTML = `Полина`;

    dialogs_div.innerHTML = `
        <div class="row dialog" id="div-zombie">
            <p class="lead" id="text-dialog">Зомби!</p>
        </div>
        <div class="row dialog d-flex justify-content-center" id="div-kill-zombie">
            <button id="btn-shot" type="button" class="btn btn-dark" onclick="shot()">
                Стрелять
            </button>
        </div>
        <div class="progress" id="progress-zombie-div">
            <div class="progress-bar bg-danger" id="progressbar-zombie" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Зомби - 100hp</div>
        </div>
        <div class="progress" id="progress-you-div">
            <div class="progress-bar bg-danger" id="progressbar-you" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Вы - 100hp</div>
        </div>
    `;

    setInterval(() => {
        let progressbar_you = document.getElementById("progressbar-you");
        if (progressbar_you !== null) {
            you_hp -= 20;
            sec_you_hp -= 1;
            try {
                progressbar_you.style.width = you_hp + "%";
                progressbar_you.innerHTML = "Вы - " + you_hp + "hp";
            } catch { sec_you_hp = -1000; }
        
            if (sec_you_hp === 0) {
                you_hp = 0;
                progressbar_you.style.width = you_hp + "%";

                Swal.fire({
                    icon: 'error',
                    title: 'Вы умерли!',
                });
        
                setInterval(() => {
                    menu();
                }, 1000);
            }
        }
    }, 1000);
}

function shot() {
    let progressbar_zombie = document.getElementById("progressbar-zombie");
    let progressbar_you = document.getElementById("progressbar-you");
    let div_zombie = document.getElementById("div-zombie");
    let div_kill_zombie = document.getElementById("div-kill-zombie");
    click_shot_zombie += 1;
    zombie_hp -= 20;

    progressbar_zombie.style.width = zombie_hp + "%";
    progressbar_zombie.innerHTML = "Зомби - " + zombie_hp + "hp";

    if (click_shot_zombie === 5) {
        document.body.style.backgroundImage = "url('images/rightroom-nozombie.jpg')";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
    
        progressbar_zombie.parentNode.removeChild(progressbar_zombie);
        progressbar_you.parentNode.removeChild(progressbar_you);
        div_zombie.parentNode.removeChild(div_zombie);
        div_kill_zombie.parentNode.removeChild(div_kill_zombie);

        name_dialog.innerHTML = `Полина`;

        dialogs_div.innerHTML = `
            <div class="row dialog" id="what-zombie-div">
                <p class="lead" id="text-dialog">Здесь что, еще и зомби? Нужно быть осторожнее...</p>
            </div>

            <div class="row dialog" id="document-div">
                <p class="lead" id="text-dialog">О, какая-то папка на полке!</p>
            </div>

            <div class="row dialog d-flex justify-content-center" id="take-document-div">
                <button id="btn-document" type="button" class="btn btn-dark" data-toggle="modal" data-target="#document" onclick="take_document()">
                    Взять документ
                </button>
            </div>
        `;
    }
}

function take_document() {
    document1_inner();
    document.body.style.backgroundImage = "url('images/rightroom-nozombie.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    task.innerHTML = `Основное задание: Исследовать дом`;
    task_second.innerHTML = `Дополнительное задание: Найти два камня`;
    task_third.innerHTML = `Дополнительное задание 2: Найти книгу`;

    localStorage.setItem("save", "document");

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });
    
    Toast.fire({
        icon: 'success',
        title: 'Два новых предмета: Документ и Красный камень'
    });

    name_dialog.innerHTML = `Полина`;

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Что же это за "Супер-мутант" и компания, которая создает такое? 
            Не хотела бы я встретить его здесь...</p>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">О, первый камень, красный!</p>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">Так, тут вроде бы все, пойду дальше</p>
        </div>
        <div class="row dialog d-flex justify-content-center">
            <button class="btn btn-dark" id="second_floor_btn" onclick="second_floor()">
                Второй этаж
            </button>
        </div>
    `;
}

function achievement_second() {
    task.innerHTML = `Основное задание: Исследовать дом`;
    task_second.innerHTML = `Дополнительное задание: Найти два камня`;
    task_third.innerHTML = `Дополнительное задание 2: Найти книгу`;

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });
      
    Toast.fire({
        icon: 'success',
        title: 'Достижение получено: Только не он...'
    });

    localStorage.setItem("achievement_3", "open");
}

function second_floor() {
    document.body.style.backgroundImage = "url('images/main-hall-nomap.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    task.innerHTML = `Основное задание: Исследовать дом`;
    task_second.innerHTML = `Дополнительное задание: Найти два камня`;
    task_third.innerHTML = `Дополнительное задание 2: Найти книгу`;

    localStorage.setItem("save", "second-floor");

    name_dialog.innerHTML = `Полина`;

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Так, ну, вперед!</p>
        </div>
        <div class="row dialog d-flex justify-content-center">
            <button class="btn btn-dark" id="front_room" onclick="front_room()">
                Комната спереди
            </button>
        </div>
    `;
}

function front_room() {
    document.body.style.backgroundImage = "url('images/frontroom-zombie.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    task.innerHTML = `Основное задание: Исследовать дом`;
    task_second.innerHTML = `Дополнительное задание: Найти два камня`;
    task_third.innerHTML = `Дополнительное задание 2: Найти книгу`;

    localStorage.setItem("save", "front-room");

    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });
    
    Toast.fire({
        icon: 'info',
        title: 'Игра сохранена'
    });

    let you_hp_2 = 100;

    name_dialog.innerHTML = `Полина`;

    document.body.style.backgroundImage = "url('images/frontroom-zombie.jpg')";

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Ох, да вы издеваетесь, два зомби...</p>
        </div>
        <div class="progress" id="progress-zombie2-div">
            <div class="progress-bar bg-danger" id="progressbar-zombie-2" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Зомби - 100hp</div>
        </div>
        <div class="progress" id="progress-you-div-2">
            <div class="progress-bar bg-danger" id="progressbar-you-2" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Вы - 100hp</div>
        </div>
        <div class="row dialogs d-flex justify-content-center">
            <button class="btn btn-dark" onclick="shot_2()" id="btn-shot-2">
                Стрелять
            </button>
        </div>
    `;

    setInterval(() => {
        let progressbar_you_2 = document.getElementById("progressbar-you-2");
        if (progressbar_you_2 !== null) {
            if (difficult === "easy") {
                you_hp_2 -= 10;
            } else if (difficult === "normal") {
                you_hp_2 -= 20;
            } else if (difficult === "hard") {
                you_hp_2 -= 30;
            }

            sec_you_hp_2 -= 1;

            try {
                progressbar_you_2.style.width = you_hp_2 + "%";
                progressbar_you_2.innerHTML = "Вы - " + you_hp_2 + "hp";
            } catch { sec_you_hp_2 = null; }
        
            if (sec_you_hp_2 <= 0) {
                you_hp_2 = 0;
                progressbar_you_2.style.width = you_hp_2 + "%";

                Swal.fire({
                    icon: 'error',
                    title: 'Вы умерли!',
                });
        
                setInterval(() => {
                    menu();
                }, 1000);
            }
        }
    }, 1000);
}

function shot_2() {
    let progressbar_zombie_2 = document.getElementById("progressbar-zombie-2");
    click_shot_zombie2 += 1;
    zombie_hp2 -= 10;

    progressbar_zombie_2.style.width = zombie_hp2 + "%";
    progressbar_zombie_2.innerHTML = "Зомби - " + zombie_hp2 + "hp";

    if (click_shot_zombie2 === 10) {
        name_dialog.innerHTML = `Полина`;

        document.body.style.backgroundImage = "url('images/frontroom-nozombie.jpg')";

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
            onOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });
        
        Toast.fire({
            icon: 'success',
            title: 'Два новых предмета: Ключ и Книга'
        });

        name_dialog.innerHTML = `Полина`;

        dialogs_div.innerHTML = `
            <div class="row dialog">
                <p class="lead" id="text-dialog">Ай!</p>
            </div>

            <div class="row dialogs d-flex justify-content-center">
                <button class="btn btn-dark" onclick="dodge()" id="btn-dodge">
                    Увернуться
                </button>
            </div>

            <div class="progress" id="progress-you-div-2">
                <div class="progress-bar bg-danger" id="progressbar-sec" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">2сек</div>
            </div>
        `;

        let sec_evasion_width = 100;

        setInterval(() => {
            let progressbar_you_sec = document.getElementById("progressbar-sec");
            if (progressbar_you_sec !== null) {
                sec_evasion_width -= 50;
                sec_evasion -= 1;
                try {
                    progressbar_you_sec.style.width = sec_evasion_width + "%";
                    progressbar_you_sec.innerHTML = sec_evasion + "сек";
                } catch { sec_evasion_width = -1000; }
            
                if (sec_evasion === 0) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                      
                    Toast.fire({
                        icon: 'success',
                        title: 'Достижение получено: Не делай так больше...'
                    });

                    localStorage.setItem("achievement_4", "achievement_4");

                    Swal.fire({
                        icon: 'error',
                        title: 'Вы умерли!',
                    });
            
                    setInterval(() => {
                        menu();
                    }, 1000);
                }
            }
        }, 600);
    }
}

function dodge() {
    name_dialog.innerHTML = `Полина`;

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Фух, чуть не укусил...</p>
        </div>

        <div class="row dialog d-flex justify-content-center">
            <button class="btn btn-dark" onclick="left_room_1()" id="btn-left-room-1">
                Комната слева
            </button>
        </div>
    `;
}

function left_room_1() {
    document.body.style.backgroundImage = "url('images/computer-room.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    task.innerHTML = `Основное задание: Исследовать дом`;
    task_second.innerHTML = `Дополнительное задание: Найти два камня`;
    task_third.innerHTML = `Дополнительное задание 2: Найти книгу`;

    localStorage.setItem("save", "left-room-1");

    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });
    
    Toast.fire({
        icon: 'info',
        title: 'Игра сохранена'
    });

    name_dialog.innerHTML = `Полина`;

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Что за ночь... Так, что же в этой комнате?</p>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">Что? Саша!? Это в другой комнате!</p>
        </div>
        <div class="row dialog d-flex justify-content-center">
            <button class="btn btn-dark" onclick="left_room_2()" id="btn-left-room-2">
                Побежали!
            </button>
        </div>
        <audio src="sounds/vilglem.mp3" autoplay="autoplay"></audio>
    `;
}

function left_room_2() {
    document.body.style.backgroundImage = "url('images/room-alexdeath.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    name_dialog.innerHTML = `Игра`;

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">*Видит как Александр пытается убежать от Фобоса, но он хватает его за шею и душит*</p>
        </div>
        <div class="row dialog d-flex justify-content-center">
            <button class="btn btn-dark" onclick="shot_sound()" id="btn-shot-sound">
                Стрелять
            </button>
        </div>
    `;
}

function shot_sound() {
    document.body.style.backgroundImage = "url('images/room-alexdeath.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    task.innerHTML = `Основное задание: Исследовать дом`;
    task_second.innerHTML = `Дополнительное задание: Найти два камня`;
    task_third.innerHTML = `Дополнительное задание 2: Найти книгу`;

    localStorage.setItem("save", "left-room-2");

    sound.src = "sounds/shot.mp3";

    name_dialog.innerHTML = `Александр и Полина`;

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">П.. Полина, лови флешку... Здесь вся правда... Беги!</p>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">*Александр кидает флешку Полине, она ее ловит и Александр умирает...*</p>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">Нет...</p>
        </div>
        <div class="row dialog d-flex justify-content-center">
            <button class="btn btn-dark" onclick="run_fobos()" id="btn-run-fobos">
                Бежать
            </button>
        </div>
        <div class="progress" id="progress-div-fobos">
            <div class="progress-bar bg-danger" id="progressbar-run-fobos" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${sec_fobos}сек</div>
        </div>
    `;

    let width_minus = 100;

    setInterval(() => {
        let progressbar = document.getElementById("progressbar-run-fobos");
        sec_fobos -= 1;
        width_minus -= 10;

        try {
            progressbar.style.width = width_minus + "%";
            progressbar.innerHTML = sec_fobos + " сек";
        } catch { sec_fobos = -1000; }
    
        if (sec_fobos === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Вы проиграли!',
            });
    
            setInterval(() => {
                menu();
            }, 1000);
        }
    }, 1000);
}

function run_fobos() {
    click_fobos_btn += 1;

    document.body.style.backgroundImage = "url('images/main-hall-nomap.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    if (click_fobos_btn === 5) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
          
        Toast.fire({
            icon: 'success',
            title: 'Достижение получено: Поскорее бы эта ночь закончилась...'
        })
    }

    localStorage.setItem("achievement_5", "open");

    name_dialog.innerHTML = `Полина`;
    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Что же узнал Саша..? Что на этой флешке?</p>
        </div>
        <div class="row dialog d-flex justify-content-center">
            <button class="btn btn-dark" onclick="right_room_2()" id="btn-right-room-2">
                Комната слева 
            </button>
            <button class="btn btn-dark" onclick="left_room_3()" id="btn-left-room-3">
                Комната слева 2
            </button>
        </div>
    `;
}

function right_room_2() {
    document.body.style.backgroundImage = "url('images/computer-room.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
    
    task.innerHTML = `Основное задание: Исследовать дом`;
    task_second.innerHTML = `Дополнительное задание: Найти два камня`;
    task_third.innerHTML = `Дополнительное задание 2: Найти книгу`;

    localStorage.setItem("save", "right-room-2");

    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });
    
    Toast.fire({
        icon: 'info',
        title: 'Игра сохранена'
    });

    name_dialog.innerHTML = `Полина`;
    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Здесь компьютер, но на нем пароль...</p>
        </div>
        <div class="row dialog d-flex justify-content-center">
            <button class="btn btn-dark" data-toggle="modal" data-target="#password" id="btn-password">
                Ввести пароль
            </button>
            <button class="btn btn-dark" onclick="left_room_3()" id="btn-left-room-3">
                Комната слева 2
            </button>
        </div>
    `;
}

function left_room_3() {
    document.body.style.backgroundImage = "url('images/room-left.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    task.innerHTML = `Основное задание: Исследовать дом`;
    task_second.innerHTML = `Дополнительное задание: Найти два камня`;
    task_third.innerHTML = `Дополнительное задание 2: Найти книгу`;

    localStorage.setItem("save", "left-room-3");

    name_dialog.innerHTML = `Полина`;
    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Так, здесь записка!</p>
        </div>

        <div class="row dialog d-flex justify-content-center">
            <button class="btn btn-dark" onclick="document2_inner();" data-toggle="modal" data-target="#document-password" id="btn-document-password">
                Посмотреть записку
            </button>

            <button class="btn btn-dark" onclick="right_room_2()" id="btn-right-room-2">
                Комната слева
            </button>
        </div>
    `;
}

function truth() {
    document.body.style.backgroundImage = "url('images/computer-room.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    localStorage.setItem("save", "truth");

    name_dialog.innerHTML = `Полина`;
    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Так, получается, моим отрядом руководит RAIN-company? 
            Надо выбраться отсюда до того, как прилетит вертолет. Не спасать же они меня прилетят</p>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">Стоит поискать другой выход в лаборатории</p>
        </div>

        <div class="row dialog d-flex justify-content-center">
            <button class="btn btn-dark" onclick="goStone()" id="btn-stone">
                Пойти за камнем
            </button>
        </div>
    `;

    task.innerHTML = `Основное задание: Взять ключ-карту и зайти в лабораторию`;
}

function goStone() {
    document.body.style.backgroundImage = "url('images/main-hall-nomap.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    task.innerHTML = `Основное задание: Исследовать дом`;
    task_second.innerHTML = `Дополнительное задание: Найти два камня`;
    task_third.innerHTML = `Дополнительное задание 2: Найти книгу`;

    localStorage.setItem("save", "goStone");

    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });
    
    Toast.fire({
        icon: 'info',
        title: 'Игра сохранена'
    });
    
    sound.src = "sounds/door_sounds.mp3";

    name_dialog.innerHTML = `Полина`;
    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Так, здесь какая-то головоломка</p>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">Фак, они здесь, нужно быстрее, пока они не выбили дверь</p>
        </div>

        <div class="row dialog d-flex justify-content-center">
            <button class="btn btn-dark" data-toggle="modal" data-target="#quiz" id="btn-quiz">
                Головоломка
            </button>
        </div>
    `;
}

function answer_quiz() {
    let first_checkbox = document.getElementById("quiz-1");
    let first_second_checkbox = document.getElementById("quiz-2");
    let second_checkbox = document.getElementById("quiz-2-1");
    let second_second_checkbox = document.getElementById("quiz-2-2");
    let third_first_checkbox = document.getElementById("quiz-3-1");
    let third_checkbox = document.getElementById("quiz-3-2");

    if (first_checkbox.checked
        && second_checkbox.checked
        && third_checkbox.checked
        && first_second_checkbox.checked === false
        && second_second_checkbox.checked === false
        && third_first_checkbox.checked === false) {

        Swal.fire({
            icon: 'success',
            title: 'Правильно!',
        });

        name_dialog.innerHTML = `Полина`;
        dialogs_div.innerHTML = `
            <div class="row dialog">
                <p class="lead" id="text-dialog">Есть! Выйду через другой ход и в лабораторию</p>
            </div>

            <div class="row dialog d-flex justify-content-center">
                <button class="btn btn-dark" onclick="down()" id="btn-down">
                    Вниз!
                </button>
            </div>
        `;
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Неправильно',
        });
    }
}

function down() {
    document.body.style.backgroundImage = "url('images/down.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    task.innerHTML = `Основное задание: Исследовать дом`;
    task_second.innerHTML = `Дополнительное задание: Найти два камня`;
    task_third.innerHTML = `Дополнительное задание 2: Найти книгу`;

    localStorage.setItem("save", "down");

    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });
    
    Toast.fire({
        icon: 'info',
        title: 'Игра сохранена'
    });

    name_dialog.innerHTML = `Полина`;
    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Так, отлично, вниз!</p>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">О, нет, опять ты...</p>
        </div>
        <div class="row dialog d-flex justify-content-center">
            <button class="btn btn-dark" onclick="boss()" id="btn-boss">
                Босс
            </button>
        </div>
    `;

    sound2.src = "music/boss.mp3";
}

let shot_boss = 0;
let true_interval = false;

function boss() {
    document.body.style.backgroundImage = "url('images/fobos_fight.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

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
        icon: 'info',
        title: 'Основное задание: Убить Фобоса',
    });

    task.innerHTML = `Основное задание: Убить Фобоса`;
    task_second.innerHTML = ``;
    task_third.innerHTML = ``;

    localStorage.setItem("save", "boss");

    name_dialog.innerHTML = `Игра`;
    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">*Стреляйте!*</p>
        </div>

        <div class="row dialog d-flex justify-content-center">
            <button class="btn btn-dark" onclick="shot_boss_func()" id="btn-shot-boss">
                Стрелять
            </button>
        </div>

        <div class="progress" id="progress-div-hp-you">
            <div class="progress-bar bg-danger" id="progressbar-hp-you" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Вы - 100hp</div>
        </div>

        <div class="progress" id="progress-div-hp-boss">
            <div class="progress-bar bg-danger" id="progressbar-hp-boss" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Фобос - 100hp</div>
        </div>
    `;

    let you_hp_width = 100;

    setInterval(() => {
        let progressbar_you_hp = document.getElementById("progressbar-hp-you");

        if (progressbar_you_hp !== null) {
            you_hp_width -= 20;
            try {
                progressbar_you_hp.style.width = you_hp_width + "%";
                progressbar_you_hp.innerHTML = "Вы - " + you_hp_width + "hp";
            } catch { sec_evasion_width = -1000; }
        
            if (you_hp_width === 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Вы умерли!',
                });
        
                setInterval(() => {
                    menu();
                }, 1000);
            }
        }
    }, 1000);

    setInterval(() => {
        dodge_boss();
    }, 2650);
}

function dodge_boss() {
    let btn_shot_boss = document.getElementById("btn-shot-boss");

    if (btn_shot_boss !== null) {
        let sec_evasion_boss = 2;
        let sec_evasion_boss_width = 100;

        dialogs_div.innerHTML += `
            <div class="progress" id="progressbar-sec-div-boss">
                <div class="progress-bar bg-danger" id="progressbar-sec-boss" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">2сек</div>
            </div>

            <div class="row dialog d-flex justify-content-center" id="dodge-attack">
                <button class="btn btn-dark" onclick="dodge_attack_boss()" id="btn-dodge-attack-boss">
                    Увернуться
                </button>
            </div>
        `;

        setInterval(() => {
            let progressbar_you_sec = document.getElementById("progressbar-sec-boss");

            if (progressbar_you_sec !== null) {
                sec_evasion_boss_width -= 50;
                sec_evasion_boss -= 1;
                try {
                    progressbar_you_sec.style.width = sec_evasion_boss_width + "%";
                    progressbar_you_sec.innerHTML = sec_evasion_boss + "сек";
                } catch { sec_evasion_boss_width = -1000; }
            
                if (sec_evasion_boss === 0) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Вы умерли!',
                    });
            
                    setInterval(() => {
                        menu();
                    }, 1000);
                }
            }
        }, 1000);
    }
}

function dodge_attack_boss() {
    let progressbar_sec_div_boss = document.getElementById("progressbar-sec-div-boss");
    let dodge_attack = document.getElementById("dodge-attack");

    progressbar_sec_div_boss.parentNode.removeChild(progressbar_sec_div_boss);
    dodge_attack.parentNode.removeChild(dodge_attack);
}

let boss_hp_width = 100;

function shot_boss_func() {
    let progressbar_boss_hp = document.getElementById("progressbar-hp-boss");

    shot_boss += 1;
    boss_hp_width -= 5;
    progressbar_boss_hp.style.width = boss_hp_width + "%";
    progressbar_boss_hp.innerHTML = "Фобос - " + boss_hp_width + "hp";

    if (shot_boss === 20) {
        document.body.style.backgroundImage = "url('images/death-fobos.jpg')";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";

        sound2.src = "music/background_house.mp3";

        localStorage.setItem("you", "you");
        
        name_dialog.innerHTML = `Полина`;
        dialogs_div.innerHTML = `
            <div class="row dialog">
                <p class="lead" id="text-dialog">Кислота! Ха!</p>
            </div>
            <div class="row dialog">
                <p class="lead" id="text-dialog">За Сашу...</p>
            </div>
        `;

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
            onOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
          
        Toast.fire({
            icon: 'success',
            title: 'Достижение получено: Конец... Или начало?'
        })

        localStorage.setItem("achievement_6", "open");

        setTimeout(() => {
            location.href = "end.html";
        }, 3000)
    }
}

function check_password() {
    let input = document.getElementById("password-input").value;
    let open = document.getElementById("btn-open");

    if (input === "1945") {
        open.style.visibility = "visible";
    }
}

function run_left() {
    let width_minus = 100;

    name_dialog.innerHTML = `Игра`;
    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Бегите, иначе умрете!</p>
        </div>
        <div class="row dialog d-flex justify-content-center" id="run-div-btn">
            <button id="btn-run" type="button" class="btn btn-dark" onclick="counter_left_func()">
                Бежать
            </button>
        </div>
        <div class="progress" id="progress-div">
            <div class="progress-bar bg-danger" id="progressbar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${sec_left}сек</div>
        </div>
    `;

    setInterval(() => {
        let progressbar = document.getElementById("progressbar");
        width_minus -= 20;
        sec_left -= 1;
        try {
            progressbar.style.width = width_minus + "%";
            progressbar.innerHTML = sec_left + " сек";
        } catch { sec_left = -1000; }
    
        if (sec_left === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Вы проиграли!',
            });
    
            setInterval(() => {
                menu();
            }, 1000);
        }
    }, 1000);
}

function counter_left_func() {
    let progress = document.getElementById("progress-div");
    let run_div_btn = document.getElementById("run-div-btn");
    click_left_btn += 1;

    if (click_left_btn === 5) {
        btn_next.disabled = false;

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
          
        Toast.fire({
            icon: 'success',
            title: 'Достижение получено: И сразу в бой'
        })

        localStorage.setItem("achievement_1", "open");

        progress.parentNode.removeChild(progress);
        run_div_btn.parentNode.removeChild(run_div_btn);
        sound2.src = "music/background_house.mp3";

        document.body.style.background = "url('images/main-hall.jpg')";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
        next_dialog();
    }
}

function run_right() {
    let width_minus = 100;

    name_dialog.innerHTML = `Игра`;
    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Бегите, иначе умрете!</p>
        </div>
        <div class="row dialog d-flex justify-content-center" id="run-div-btn">
            <button id="btn-run" type="button" class="btn btn-dark" onclick="counter_right_func()">
                Бежать
            </button>
        </div>
        <div class="progress" id="progress-div">
            <div class="progress-bar bg-danger" id="progressbar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${sec_right}сек</div>
        </div>
    `;

    try {
        setInterval(() => {
            let progressbar = document.getElementById("progressbar");
            width_minus -= 10;
            sec_right -= 1;
            try {
                progressbar.style.width = width_minus + "%";
                progressbar.innerHTML = sec_right + " сек";
            } catch { sec_right = -1000; }
    
            if (sec_right === 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Вы проиграли!',
                });
    
                setInterval(() => {
                    menu();
                }, 1000);
            }
        }, 1000);
    } catch { }
}

function counter_right_func() {
    let progress = document.getElementById("progress-div");
    let run_div_btn = document.getElementById("run-div-btn");

    click_right_btn += 1;

    if (click_right_btn === 10) {
        btn_next.disabled = false;

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
          
        Toast.fire({
            icon: 'success',
            title: 'Достижение получено: И сразу в бой'
        })

        localStorage.setItem("achievement_1", "open");

        progress.parentNode.removeChild(progress);
        run_div_btn.parentNode.removeChild(run_div_btn);
        sound2.src = "music/background_house.mp3";
        document.body.style.background = "url('images/main-hall.jpg')";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
        next_dialog();
    }
}

function quick_time_training_l() {
    Swal.fire({
        title: 'Нажимайте на кнопку!',
        icon: 'info',
        showCancelButton: false,
        confirmButtonText: 'Ок',
    }).then((result) => {
        if (result.value) { run_left(); } 
        else if (result.dismiss === Swal.DismissReason.cancel) { }
    });
}

function quick_time_training_r() {
    Swal.fire({
        title: 'Нажимайте на кнопку!',
        icon: 'info',
        showCancelButton: false,
        confirmButtonText: 'Ок',
    }).then((result) => {
        if (result.value) { run_right(); } 
        else if (result.dismiss === Swal.DismissReason.cancel) { }
    });
}