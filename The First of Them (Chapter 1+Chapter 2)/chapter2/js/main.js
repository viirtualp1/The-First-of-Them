function show() { location.href = "chapter1/show.html"; }
function show_eng() { location.href = "chapter1/show-eng.html"; }

function game() { location.href = "chapter1/index.html"; }
function game_eng() { location.href = "chapter1/index-eng.html"; }

function menu() { location.href = "menu.html" }
function menu_eng() { location.href = "menu-eng.html" }

function end() { location.href = "chapter2/end.html" }
function end_eng() { location.href = "chapter2/end-eng.html" }

function confirm_quit() {
    Swal.fire({
        icon: 'warning',
        title: 'Предупреждение!',
        text: 'Вы точно хотите выйти из игры?',
        showCancelButton: true,
        confirmButtonText: 'Да',
        cancelButtonText: 'Нет',
        confirmButtonColor: '#1C2629',
        cancelButtonColor: '#d33'   
    }).then((result) => {
        if (result.value) { location.href = "../menu.html" }
    })
}

function confirm_quit_eng() {
    Swal.fire({
        icon: 'warning',
        title: 'Warning!',
        text: 'You definitely want to quit the game?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        confirmButtonColor: '#1C2629',
        cancelButtonColor: '#d33'   
    }).then((result) => {
        if (result.value) { location.href = "../menu-eng.html" }
    })
}


function warning() {
    Swal.fire({
        icon: 'info',
        title: 'Введение',
        text: `Вы играете за Полину. 
            Она работает в поисковом отряде NIAR. 
            Солдаты отряда перестали выходить на связь в этом лесу. 
            Найдите пропавших вместе с напарником Александром. 
            Сейчас вы в месте, откуда они послали последний сигнал. 
            Атмосфера гнетущая, брр... Будьте осторожны.`,
        showCancelButton: true,
        confirmButtonText: 'Отлично',
        cancelButtonText: 'Назад',
        confirmButtonColor: '#28a745',
        cancelButtonColor: '#d33'
    }).then((result) => {
        if (result.value) { show(); }
    })
}

function warning_eng() {
    Swal.fire({
        icon: 'info',
        title: 'Introduction',
        text: `You play as Pauline.
            She works in the NIAR search squad.
            The soldiers of the detachment stopped communicating in this forest.
            Find the missing with partner Alexander.
            You are now in the place from where they sent the last signal.
            The atmosphere is oppressive, brr... Be careful.`,
        showCancelButton: true,
        confirmButtonText: 'Fine',
        cancelButtonText: 'Back',
        confirmButtonColor: '#1C2629',
        cancelButtonColor: '#d33'
    }).then((result) => {
        if (result.value) { show_eng(); }
    })
}

function warning_chapter2() {
    Swal.fire({
        icon: 'info',
        title: 'Введение',
        text: `Вы играете за последнего ученого RAIN-Company Михаила. 
        Вы слишком поздно поняли, для чего используют ваш ум, и предотвратить распространение заразы не получится. 
        Но шанс спасти мир и предупредить человечество еще не упущен. Сделайте все возможное!`,
        showCancelButton: true,
        confirmButtonText: 'Ок',
        cancelButtonText: 'Назад',
        confirmButtonColor: '#28a745',
        cancelButtonColor: '#d33'
    }).then((result) => {
        if (result.value) { location.href = "chapter2/show-chapter2.html"; }
    })
}

function warning_chapter2_eng() {
    Swal.fire({
        icon: 'info',
        title: 'Introduction',
        text: `You play as Mikhail, the last RAIN-Company scientist.
        You realized too late what your mind is being used for, and you cannot prevent the spread of the infection.
        But the chance to save the world and warn humanity has not yet been missed. Do your best!`,
        showCancelButton: true,
        confirmButtonText: 'Ok',
        cancelButtonText: 'Back',
        confirmButtonColor: '#1C2629',
        cancelButtonColor: '#d33'
    }).then((result) => {
        if (result.value) { location.href = "chapter2/show-eng-chapter2.html"; }
    })
}

function volume_mute() {
    let music = document.getElementById("music");
    music.src = "";
}

function volume_up() {
    let music = document.getElementById("music");
    music.src = "chapter2/sounds/night_jungle.mp3";
}

function volume_up_menu() {
    let music = document.getElementById("music");
    music.src = "chapter2/sounds/menu.mp3";
}


function english() { location.href = "menu-eng.html"; }

function russian() { location.href = "menu.html"; }

function soon() {
    Swal.fire({
        icon: 'error',
        title: "Глава ещё не вышла!",
        html: "За событиями вы можете следить в группе <a href='https://vk.com/public_lar'>ВКонтакте</a>"
    })
}

function soon_eng() {
    Swal.fire({
        icon: 'error',
        title: "Chapter hasn't come out yet!",
    })
}

function what_is_this() {
    Swal.fire({
        icon: 'info',
        title: "Что это..?"
    })
}

function what_is_this_eng() {
    Swal.fire({
        icon: 'info',
        title: "What is it..?",
    })
}

function music_src(src) {
    let music_elem = document.getElementById("music");
    music_elem.src = `chapter2/sounds/${src}`;
}