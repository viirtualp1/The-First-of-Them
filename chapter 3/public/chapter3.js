// main variables
let music = document.getElementById("music"); // musics (for src musics)
let sound = document.getElementById("sound"); // sounds (for src sounds)
let dialogs_div = document.getElementById("dialogs"); // dialogs (for inner dialogs)
let name_dialog = document.getElementById("name-dialog"); // names (for inner names)
let ration_footer = document.getElementById("ration-footer"); // ration (for inner 'button send team')

// team (objects)
let team = [
    nikita = {
        name: "Никита", 
        hp: 100, 
        alive: true, 
    },

    anna = {
        name: "Анна", 
        hp: 100, 
        alive: true
    },

    danil = {
        name: "Данил", 
        hp: 100, 
        alive: true
    },

    oleg = {
        name: "Олег", 
        hp: 100, 
        alive: true
    }
];

let main_heroes = [
    polina = {
        name: "Полина",
        hp: 100,
        alive: true
    },

    bloger = {
        name: "Блогер",
        hp: 100,
        alive: true
    }
];

// qte variables
let width_plus_clean = 0;
let click_clean = 0;

let width_dead_phobos_sec = 100;
let width_dead_phobos_success = 0;
let dead_phobos_sec = 5;
let click_dead_phobos = 0;

let qte_search = true;
let width_plus_office_search = 0;

let qte_search_lab = true;
let width_search_lab = 0;

// Main functions
function hello_team() {
    document.body.style.backgroundImage = "url('img/office.jpeg')";
    music.src = "sounds/office.wav";

    name_dialog.innerHTML = "Полина";
    dialogs_div.innerHTML = `
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

    btn_next = document.getElementById("btn-next");
    btn_next = btn_next.parentNode.removeChild(btn_next);
    document.getElementById("footer-buttons").innerHTML += `
        <button id="btn-next" type="button" class="btn btn-lg btn-dark" onclick="training()">Далее</button>
    `;
}

function training() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-dark',
        },

        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: "Обучение",
        imageUrl: 'img/ration.PNG',
        html: "Перед вами рация. <br /> Сверху имя ваших людей из отряда: Анна, Никита, Данил, Олег. <br /> Слева направление куда их можно отправить: налево, прямо, направо.",
        confirmButtonText: "Понятно",
    }).then((result) => {
        if (result.value) {
            go_to_mountains();
        }
    })

    let swal2_modal = document.getElementsByClassName("swal2-modal")[0];
    swal2_modal.style.background = "rgb(58, 58, 58)";

    let swal2_content = document.getElementsByClassName("swal2-content")[0];
    swal2_content.style.color = "#fff";

    let swal2_title = document.getElementsByClassName("swal2-title")[0];
    swal2_title.style.color = "#fff";
}

function go_to_mountains() {
    name_dialog.innerHTML = "Полина";
    dialogs_div.innerHTML = `
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

    btn_next = document.getElementById("btn-next");
    btn_next = btn_next.parentNode.removeChild(btn_next);
    document.getElementById("footer-buttons").innerHTML += `
        <button id="btn-next" type="button" class="btn btn-lg btn-dark" onclick="change_hero_bloger_house('Б', 'Л', 'О', 'Г', 'Е', 'Р', '#f33b3b')">Далее</button>
    `;
}

function change_hero_bloger_house(letter1, letter2, letter3,
                        letter4, letter5, letter6, 
                            shadowColor) {
    document.body.style.background = "#000";
    music.src = "";
    sound.src = "sounds/bloger_change.mp3";

    document.getElementById("name").style.visibility = "hidden";
    document.getElementById("footer-buttons").style.visibility = "hidden";
    
    dialogs_div.innerHTML = `
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
        let p1 = document.getElementById("letter-1");
        let p2 = document.getElementById("letter-2");
        let p3 = document.getElementById("letter-3");
        let p4 = document.getElementById("letter-4");
        let p5 = document.getElementById("letter-5");
        let p6 = document.getElementById("letter-6");

        // Анимация появления имени

        p1.style.textShadow = `1px 1px 10px ${shadowColor}`
        p1.id = "title-show1";

        p2.style.textShadow = `1px 1px 10px ${shadowColor}`
        p2.id = "title-show2";

        p3.style.textShadow = `1px 1px 10px ${shadowColor}`
        p3.id = "title-show3";

        p4.style.textShadow = `1px 1px 10px ${shadowColor}`
        p4.id = "title-show4";

        p5.style.textShadow = `1px 1px 10px ${shadowColor}`
        p5.id = "title-show5";

        p6.style.textShadow = `1px 1px 10px ${shadowColor}`
        p6.id = "title-show6";
    }, 200)

    setTimeout(() => {
        bloger_house();
    }, 5000);
}

function bloger_house() {
    music.src = "../../The First of Them (Chapter 1+Chapter 2)/chapter1/music/night_jungle.mp3";
    document.getElementById("name").style.visibility = "visible";
    document.getElementById("footer-buttons").style.visibility = "visible";

    document.body.style.background = "url('img/house.jpg')"

    let p1 = document.getElementById("title-show1");
    let p2 = document.getElementById("title-show2");
    let p3 = document.getElementById("title-show3");
    let p4 = document.getElementById("title-show4");
    let p5 = document.getElementById("title-show5");
    let p6 = document.getElementById("title-show6");

    p1.parentNode.removeChild(p1);
    p2.parentNode.removeChild(p2);
    p3.parentNode.removeChild(p3);
    p4.parentNode.removeChild(p4);
    p5.parentNode.removeChild(p5);
    p6.parentNode.removeChild(p6);

    name_dialog.innerHTML = "Блогер";
    dialogs_div.innerHTML = `
        <div id="dialogs">
            <div class="row dialog">
                <p class="lead" id="text-dialog">Так, вот разрушенный особняк, 
                    нужно посмотреть осталось ли что здесь,
                    по моим предположениям, лаборатория должна быть где-то внизу
                </p>
            </div>
        </div>
    `;

    btn_next = document.getElementById("btn-next");
    btn_next = btn_next.parentNode.removeChild(btn_next);
    document.getElementById("footer-buttons").innerHTML += `
        <button id="btn-next" type="button" class="btn btn-lg btn-dark" onclick="house()">Далее</button>
    `;
}

function house() {
    music.src = "";

    document.body.style.background = "url('img/house_main_hall.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    dialogs_div.innerHTML = `
         <div id="dialogs">
            <div class="row dialog">
                <p class="lead" id="text-dialog">Скорее всего это дверь в лабораторию, но нужно расчистить путь</p>
            </div>
        </div> 
    `;

    btn_next = document.getElementById("btn-next");
    btn_next = btn_next.parentNode.removeChild(btn_next);
    document.getElementById("footer-buttons").innerHTML += `
        <button id="btn-next" type="button" class="btn btn-lg btn-dark" onclick="qte_clean_path_house()">Далее</button>
    `;
}

function qte_clean_path_house() {
    btn_next = document.getElementById("btn-next");
    btn_next.disabled = true;

    name_dialog.innerHTML = `Игра`;
    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Расчищайте путь в лабораторию...</p>
        </div>
        <div class="row dialog d-flex justify-content-center" id="run-div-btn">
            <button id="btn-clean-path" type="button" class="btn btn-dark mt-2 mb-2" onclick="counter_clean()">
                Чистить
            </button>
        </div>

        <div class="progress mt-4" id="progress-div">
            <div class="progress-bar progress-bar-striped bg-success" id="progressbar_clean" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
        </div>
    `;
}

function counter_clean() {
    let progressbar_clean = document.getElementById("progressbar_clean");
    let progress = document.getElementById("progress-div");
    let clean_btn = document.getElementById("btn-clean-path");

    click_clean += 1;

    width_plus_clean += 10;
    progressbar_clean.style.width = `${width_plus_clean}%`;
    progressbar_clean.innerHTML = `${width_plus_clean}%`;

    if (click_clean === 10) {
        progress.parentNode.removeChild(progress);
        clean_btn.parentNode.removeChild(clean_btn);

        btn_next = document.getElementById("btn-next");
        btn_next.disabled = true;

        qte_dead_phobos();
    }
}

function qte_dead_phobos() {
    sound.src = "sounds/00975.mp3";

    name_dialog.innerHTML = `Блогер`;
    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Ааа, что это...!?</p>
        </div>

        <div class="row dialog d-flex justify-content-center" id="run-div-btn">
            <button id="btn-go-phobos" type="button" class="btn btn-dark mt-2 mb-2" onclick="counter_dead_phobos()">
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
        let progressbar_dead_phobos_sec = document.getElementById("progressbar_dead_phobos_sec");

        width_dead_phobos_sec -= 20;
        dead_phobos_sec -= 1;

        try {
            progressbar_dead_phobos_sec.style.width = `${width_dead_phobos_sec}%`;
            progressbar_dead_phobos_sec.innerHTML = `${dead_phobos_sec}сек`;
        } catch { dead_phobos_sec = false; }
    
        if (dead_phobos_sec === 0) {
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

function counter_dead_phobos() {
    let progressbar_dead_phobos_success = document.getElementById("progressbar_dead_phobos_success");
    let progress_phobos_sec = document.getElementById("progress-div-phobos-sec");
    let progress_phobos_success = document.getElementById("progress-div-phobos-success");
    let btn_go_phobos = document.getElementById("btn-go-phobos");

    click_dead_phobos += 1;

    width_dead_phobos_success += 10;
    progressbar_dead_phobos_success.style.width = `${width_dead_phobos_success}%`;
    progressbar_dead_phobos_success.innerHTML = `${width_dead_phobos_success}%`;

    if (click_dead_phobos === 10) {
        progress_phobos_sec.parentNode.removeChild(progress_phobos_sec);
        progress_phobos_success.parentNode.removeChild(progress_phobos_success);
        btn_go_phobos.parentNode.removeChild(btn_go_phobos);

        btn_next = document.getElementById("btn-next");
        btn_next.disabled = true;

        house_lab_bloger();
    }
}

function house_lab_bloger() {
    document.body.style.background = "url('img/lab.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    sound.src = "";

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Кто это был?</p> 
        </div>

        <div class="row dialog">
            <p class="lead" id="text-dialog">Ладно, пойду дальше</p> 
        </div>
    `;

    btn_next = document.getElementById("btn-next");
    btn_next = btn_next.parentNode.removeChild(btn_next);
    document.getElementById("footer-buttons").innerHTML += `
        <button id="btn-next" type="button" class="btn btn-lg btn-dark" onclick="house_lab_office_bloger()">Далее</button>
    `;
}

function house_lab_office_bloger() {
    document.body.style.background = "url('img/lab_office.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    btn_next = document.getElementById("btn-next");
    btn_next.disabled = true;

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Так, надо что-то найти...</p> 
        </div>

        <div class="progress mt-4" id="progress-div">
            <div class="progress-bar progress-bar-striped bg-success" id="progressbar_house_office_search" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
        </div>
    `;

    let progressbar_office_search = document.getElementById("progressbar_house_office_search");
    let progress = document.getElementById("progress-div");
    let office_search_btn = document.getElementById("btn-office-search");
    
    setInterval(() => {
        try {
            if (width_plus_office_search == 100) {
                qte_search = false;

                coordinate_lab();
                
                progress.parentNode.removeChild(progress);
                office_search_btn.parentNode.removeChild(office_search_btn);
            }
        } catch { width_plus_office_search = false; }

        if (qte_search == true) {
            width_plus_office_search += 25;
            progressbar_office_search.style.width = `${width_plus_office_search}%`;
            progressbar_office_search.innerHTML = `${width_plus_office_search}%`;
        } else { }
    }, 1000)
}

function coordinate_lab() {
    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Что-то нашел!</p> 
        </div>

        <div class="row dialog">
            <p class="lead" id="text-dialog">Хм, координаты, так...
                Походу есть еще одна лаборатория и туда отправили вирус.
                Нужно попробовать найти и пробраться в нее. Может получится выяснить что-то</p> 
        </div>
    `;

    btn_next = document.getElementById("btn-next");
    btn_next = btn_next.parentNode.removeChild(btn_next);
    document.getElementById("footer-buttons").innerHTML += `
        <button id="btn-next" type="button" class="btn btn-lg btn-dark" onclick="change_hero_polina_mountains('П', 'О', 'Л', 'И', 'Н', 'А', '#f33be4')">Далее</button>
    `;
}

function change_hero_polina_mountains(letter1, letter2, letter3,
    letter4, letter5, letter6, 
        shadowColor) {
    document.body.style.background = "#000";
    music.src = "";
    sound.src = "sounds/polina_change.mp3";

    document.getElementById("name").style.visibility = "hidden";
    document.getElementById("footer-buttons").style.visibility = "hidden";

    dialogs_div.innerHTML = `
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
        let p1 = document.getElementById("letter-1");
        let p2 = document.getElementById("letter-2");
        let p3 = document.getElementById("letter-3");
        let p4 = document.getElementById("letter-4");
        let p5 = document.getElementById("letter-5");
        let p6 = document.getElementById("letter-6");

        // Анимация появления имени
        p1.style.textShadow = `1px 1px 10px ${shadowColor}`
        p1.id = "title-show1";

        p2.style.textShadow = `1px 1px 10px ${shadowColor}`
        p2.id = "title-show2";

        p3.style.textShadow = `1px 1px 10px ${shadowColor}`
        p3.id = "title-show3";

        p4.style.textShadow = `1px 1px 10px ${shadowColor}`
        p4.id = "title-show4";

        p5.style.textShadow = `1px 1px 10px ${shadowColor}`
        p5.id = "title-show5";

        p6.style.textShadow = `1px 1px 10px ${shadowColor}`
        p6.id = "title-show6";
    }, 200)

    setTimeout(() => {
        polina_mountains();
    }, 5000);
}

function polina_mountains() {
    let p1 = document.getElementById("title-show1");
    let p2 = document.getElementById("title-show2");
    let p3 = document.getElementById("title-show3");
    let p4 = document.getElementById("title-show4");
    let p5 = document.getElementById("title-show5");
    let p6 = document.getElementById("title-show6");

    document.body.style.background = "url('img/mountains.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    music.src = "sounds/veter_v_gorah.mp3";
    document.getElementById("name").style.visibility = "visible";
    document.getElementById("footer-buttons").style.visibility = "visible";

    p1.parentNode.removeChild(p1);
    p2.parentNode.removeChild(p2);
    p3.parentNode.removeChild(p3);
    p4.parentNode.removeChild(p4);
    p5.parentNode.removeChild(p5);
    p6.parentNode.removeChild(p6);

    name_dialog.innerHTML = "Полина";
    dialogs_div.innerHTML = `
        <div id="dialogs">
            <div class="row dialog">
                <p class="lead" id="text-dialog">Мы на месте, сейчас, значит...</p>
            </div>
        </div>
    `;

    btn_next = document.getElementById("btn-next");
    btn_next = btn_next.parentNode.removeChild(btn_next);
    document.getElementById("footer-buttons").innerHTML += `
        <button id="btn-next" type="button" class="btn btn-lg btn-dark" data-toggle="modal" data-target="#ration-modal">Далее</button>
    `;

    ration_footer.innerHTML += `
        <button class="btn btn-dark" onclick="send_team_mountains()">Послать</button>
    `
}

function send_team_mountains() {
    let choose_array = [];

    // для вывода выбранных членов отряда
    let team_elements = [
        document.getElementById("nikita1"),
        document.getElementById("nikita2"),
        document.getElementById("nikita3"),

        document.getElementById("anna1"),
        document.getElementById("anna2"),
        document.getElementById("anna3"),

        document.getElementById("danil1"),
        document.getElementById("danil2"),
        document.getElementById("danil3"),

        document.getElementById("oleg1"),
        document.getElementById("oleg2"),
        document.getElementById("oleg3")
    ]

    for (let i = 0; i < team_elements.length; i++) {
        if (team_elements[i].checked) {
            choose_array.push(team_elements[i].value);
        }
    }

    // Для проверки
    let nikita1 = document.getElementById("nikita1"),
        nikita2 = document.getElementById("nikita2"),
        nikita3 = document.getElementById("nikita3");

    let anna1 = document.getElementById("anna1"),
        anna2 = document.getElementById("anna2"),
        anna3 = document.getElementById("anna3");

        danil1 = document.getElementById("danil1"),
        danil2 = document.getElementById("danil2"),
        danil3 = document.getElementById("danil3");

        oleg1 = document.getElementById("oleg1"),
        oleg2 = document.getElementById("oleg2"),
        oleg3 = document.getElementById("oleg3");

    // Проверка чтобы пользователь не мог отправить одного челоека в 2-3 стороны
    if (anna1.checked && anna3.checked) {
        alert("No")
    } if (nikita1.checked && nikita3.checked) {
        alert("No")
    } if (danil1.checked && danil3.checked) {
        alert("No")
    } if (oleg1.checked && oleg3.checked) {
        alert("No")
    }

    let choose_mas = choose_array.toString().replace(/,/g, ', ');

    // Проверка выбора людей (хуй сосня (переделать нормально))
    if (anna1.checked 
        && nikita2.checked 
        && danil3.checked) {
            Swal.fire({
                title: `Ваш выбор: ${choose_mas}`,
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Отправить`,
            }).then((result) => {
                if (result.isConfirmed) {
                    team[2].alive = "false";
                    
                    $('#ration-modal').modal('hide');
                    qte_find_lab();
                }
            })

            let swal2_modal = document.getElementsByClassName("swal2-modal")[0];
            swal2_modal.style.background = "rgb(58, 58, 58)";

            let swal2_cancel_btn = document.getElementsByClassName("swal2-cancel")[0];
            swal2_cancel_btn.style.background = "#dc3545";
        
            let swal2_content = document.getElementsByClassName("swal2-content")[0];
            swal2_content.style.color = "#fff";
        
            let swal2_title = document.getElementsByClassName("swal2-title")[0];
            swal2_title.style.color = "#fff";
    } else if (anna2.checked 
        && nikita3.checked 
        && danil1.checked) {
            Swal.fire({
                title: `Ваш выбор: ${choose_mas}`,
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Отправить`,
            }).then((result) => {
                if (result.isConfirmed) {
                    team[0].alive = "false";
                    
                    $('#ration-modal').modal('hide');
                    qte_find_lab();
                }
            })

            let swal2_modal = document.getElementsByClassName("swal2-modal")[0];
            swal2_modal.style.background = "rgb(58, 58, 58)";

            let swal2_cancel_btn = document.getElementsByClassName("swal2-cancel")[0];
            swal2_cancel_btn.style.background = "#dc3545";
        
            let swal2_content = document.getElementsByClassName("swal2-content")[0];
            swal2_content.style.color = "#fff";
        
            let swal2_title = document.getElementsByClassName("swal2-title")[0];
            swal2_title.style.color = "#fff";
    } else if (anna3.checked 
        && danil1.checked 
        && nikita2.checked) {
            Swal.fire({
                title: `Ваш выбор: ${choose_mas}`,
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Отправить`,
            }).then((result) => {
                if (result.isConfirmed) {
                    team[1].alive = "false";
                    
                    $('#ration-modal').modal('hide');
                    qte_find_lab();
                }
            })

            let swal2_modal = document.getElementsByClassName("swal2-modal")[0];
            swal2_modal.style.background = "rgb(58, 58, 58)";

            let swal2_cancel_btn = document.getElementsByClassName("swal2-cancel")[0];
            swal2_cancel_btn.style.background = "#dc3545";
        
            let swal2_content = document.getElementsByClassName("swal2-content")[0];
            swal2_content.style.color = "#fff";
        
            let swal2_title = document.getElementsByClassName("swal2-title")[0];
            swal2_title.style.color = "#fff";
    } else if (anna1.checked 
        && danil2.checked 
        && nikita3.checked) {
            // Никто не умирает

            Swal.fire({
                title: `Ваш выбор: ${choose_mas}`,
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Отправить`,
            }).then((result) => {
                if (result.isConfirmed) {
                    $('#ration-modal').modal('hide');
                    qte_find_lab();
                }
            })

            let swal2_modal = document.getElementsByClassName("swal2-modal")[0];
            swal2_modal.style.background = "rgb(58, 58, 58)";

            let swal2_cancel_btn = document.getElementsByClassName("swal2-cancel")[0];
            swal2_cancel_btn.style.background = "#dc3545";
        
            let swal2_content = document.getElementsByClassName("swal2-content")[0];
            swal2_content.style.color = "#fff";
        
            let swal2_title = document.getElementsByClassName("swal2-title")[0];
            swal2_title.style.color = "#fff";
    } else if (anna1.checked 
        && oleg3.checked 
        && nikita2.checked) {
            // Никто не умирает
    } else if (anna2.checked 
        && oleg3.checked 
        && nikita1.checked ) {
            Swal.fire({
                title: `Ваш выбор: ${choose_mas}`,
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Отправить`,
            }).then((result) => {
                if (result.isConfirmed) {
                    team[3].alive = "false";
                    
                    $('#ration-modal').modal('hide');
                    qte_find_lab();
                }
            })

            let swal2_modal = document.getElementsByClassName("swal2-modal")[0];
            swal2_modal.style.background = "rgb(58, 58, 58)";

            let swal2_cancel_btn = document.getElementsByClassName("swal2-cancel")[0];
            swal2_cancel_btn.style.background = "#dc3545";
        
            let swal2_content = document.getElementsByClassName("swal2-content")[0];
            swal2_content.style.color = "#fff";
        
            let swal2_title = document.getElementsByClassName("swal2-title")[0];
            swal2_title.style.color = "#fff";
    } else if (nikita2.checked
        && anna3.checked
        && oleg1.checked) {
            // Никто не умирает

            Swal.fire({
                title: `Ваш выбор: ${choose_mas}`,
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Отправить`,
            }).then((result) => {
                if (result.isConfirmed) {                    
                    $('#ration-modal').modal('hide');
                    qte_find_lab();
                }
            })

            let swal2_modal = document.getElementsByClassName("swal2-modal")[0];
            swal2_modal.style.background = "rgb(58, 58, 58)";

            let swal2_cancel_btn = document.getElementsByClassName("swal2-cancel")[0];
            swal2_cancel_btn.style.background = "#dc3545";
        
            let swal2_content = document.getElementsByClassName("swal2-content")[0];
            swal2_content.style.color = "#fff";
        
            let swal2_title = document.getElementsByClassName("swal2-title")[0];
            swal2_title.style.color = "#fff";
    } else if (nikita3.checked 
        && oleg2.checked 
        && anna1.checked) {
            // Никто не умирает

            Swal.fire({
                title: `Ваш выбор: ${choose_mas}`,
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Отправить`,
            }).then((result) => {
                if (result.isConfirmed) {                    
                    $('#ration-modal').modal('hide');
                    qte_find_lab();
                }
            })

            let swal2_modal = document.getElementsByClassName("swal2-modal")[0];
            swal2_modal.style.background = "rgb(58, 58, 58)";

            let swal2_cancel_btn = document.getElementsByClassName("swal2-cancel")[0];
            swal2_cancel_btn.style.background = "#dc3545";
        
            let swal2_content = document.getElementsByClassName("swal2-content")[0];
            swal2_content.style.color = "#fff";
        
            let swal2_title = document.getElementsByClassName("swal2-title")[0];
            swal2_title.style.color = "#fff";
    } else if (danil2.checked 
        && oleg3.checked 
        && anna1.checked) {
            Swal.fire({
                title: `Ваш выбор: ${choose_mas}`,
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Отправить`,
            }).then((result) => {
                if (result.isConfirmed) {
                    team[1].alive = "false";
                    
                    $('#ration-modal').modal('hide');
                    qte_find_lab();
                }
            })

            let swal2_modal = document.getElementsByClassName("swal2-modal")[0];
            swal2_modal.style.background = "rgb(58, 58, 58)";

            let swal2_cancel_btn = document.getElementsByClassName("swal2-cancel")[0];
            swal2_cancel_btn.style.background = "#dc3545";
        
            let swal2_content = document.getElementsByClassName("swal2-content")[0];
            swal2_content.style.color = "#fff";
        
            let swal2_title = document.getElementsByClassName("swal2-title")[0];
            swal2_title.style.color = "#fff";
    } else if (danil1.checked 
        && oleg3.checked
        && anna2.checked) {
            Swal.fire({
                title: `Ваш выбор: ${choose_mas}`,
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Отправить`,
            }).then((result) => {
                if (result.isConfirmed) {
                    team[0].alive = "false";
                    
                    $('#ration-modal').modal('hide');
                    qte_find_lab();
                }
            })

            let swal2_modal = document.getElementsByClassName("swal2-modal")[0];
            swal2_modal.style.background = "rgb(58, 58, 58)";

            let swal2_cancel_btn = document.getElementsByClassName("swal2-cancel")[0];
            swal2_cancel_btn.style.background = "#dc3545";
        
            let swal2_content = document.getElementsByClassName("swal2-content")[0];
            swal2_content.style.color = "#fff";
        
            let swal2_title = document.getElementsByClassName("swal2-title")[0];
            swal2_title.style.color = "#fff";
    } else if (oleg1.checked 
        && danil2.checked 
        && anna3.checked) {
            Swal.fire({
                title: `Ваш выбор: ${choose_mas}`,
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Отправить`,
            }).then((result) => {
                if (result.isConfirmed) {
                    team[2].alive = "false";
                    
                    $('#ration-modal').modal('hide');
                    qte_find_lab();
                }
            })

            let swal2_modal = document.getElementsByClassName("swal2-modal")[0];
            swal2_modal.style.background = "rgb(58, 58, 58)";

            let swal2_cancel_btn = document.getElementsByClassName("swal2-cancel")[0];
            swal2_cancel_btn.style.background = "#dc3545";
        
            let swal2_content = document.getElementsByClassName("swal2-content")[0];
            swal2_content.style.color = "#fff";
        
            let swal2_title = document.getElementsByClassName("swal2-title")[0];
            swal2_title.style.color = "#fff";
    } else if (anna1.checked 
        && oleg2.checked 
        && danil3.checked) {
            Swal.fire({
                title: `Ваш выбор: ${choose_mas}`,
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Отправить`,
            }).then((result) => {
                if (result.isConfirmed) {
                    team[3].alive = "false";
                    
                    $('#ration-modal').modal('hide');
                    qte_find_lab();
                }
            })

            let swal2_modal = document.getElementsByClassName("swal2-modal")[0];
            swal2_modal.style.background = "rgb(58, 58, 58)";

            let swal2_cancel_btn = document.getElementsByClassName("swal2-cancel")[0];
            swal2_cancel_btn.style.background = "#dc3545";
        
            let swal2_content = document.getElementsByClassName("swal2-content")[0];
            swal2_content.style.color = "#fff";
        
            let swal2_title = document.getElementsByClassName("swal2-title")[0];
            swal2_title.style.color = "#fff";
    }
}

function qte_find_lab() {
    btn_next = document.getElementById("btn-next");
    btn_next.disabled = true;

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Поиск лаборатории...</p> 
        </div>

        <div class="progress mt-4" id="progress-div">
            <div class="progress-bar progress-bar-striped bg-primary" id="progressbar_search_lab" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
        </div>
    `;

    let progressbar_search_lab = document.getElementById("progressbar_search_lab");
    let progress = document.getElementById("progress-div");

    setInterval(() => {
        try {
            if (width_search_lab == 100) {
                qte_search_lab = false;

                progress.parentNode.removeChild(progress);

                find_lab_lives();
            }
        } catch { width_search_lab = false; }

        if (qte_search_lab == true) {
            width_search_lab += 25;
            progressbar_search_lab.style.width = `${width_search_lab}%`;
            progressbar_search_lab.innerHTML = `${width_search_lab}%`;
        } else { }
    }, 1000)
}

// Найдена лаборатория + показ, кто выжил
function find_lab_lives() {
    // Массив для сохранения выживших
    let team_alive_mas = [];

    // Мертвый из отряда
    let dead = "";
    
    for (let i = 0; i < team.length; i++) {
        if (team[i].alive == true) {
            team_alive_mas.push(team[i].name);
        } else if (team[i].alive == "false") {
            if (team[i].name == "Анна" || team[i].name == "Никита") {
                dead = `${team[i].name.substring(0, team[i].name.length - 1) + "у"}`;
            } else if (team[i].name == "Данил" || team[i].name == "Олег") {
                dead = `${team[i].name.substring(0, team[i].name.length + 1) + "а"}`;
            }
        }
    }
    
    let team_alive = team_alive_mas.toString().replace(/,/g, ', ');
    
    if (dead != "") {
        Swal.fire({
            title: `Из отряда выжили только: ${team_alive}`,
            text: `Вы потеряли: ${dead}`,
            confirmButtonText: `Понятно`,
        }).then((result) => {
            if (result.isConfirmed) {
                entry_lab();
            }
        })
    } else {
        Swal.fire({
            title: `Никто не умер!`,
            icon: 'success',
            confirmButtonText: `Отлично`,
        }).then((result) => {
            if (result.isConfirmed) {
                entry_lab();
            }
        })
    }
}

function entry_lab() {

}