let music = document.getElementById("music");
let sound = document.getElementById("sound");
let dialogs_div = document.getElementById("dialogs");
let name_dialog = document.getElementById("name-dialog");
let title_hidden = document.getElementById("title-game-hidden");
let i_items = document.getElementById("inventory-items");

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
        <button id="btn-next" type="button" class="btn btn-lg btn-dark" onclick="change_hero('Б', 'Л', 'О', 'Г', 'Е', 'Р', '#f33b3b')">Далее</button>
    `;
}

function change_hero(letter1, letter2, letter3,
                        letter4, letter5, letter6, 
                            shadowColor) {
    document.body.style.background = "#000";
    music.src = "";
    sound.src = "sounds/Royalty Free - Digital Number FX.mp3";

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
    }, 6000);
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

{/* <div id="dialogs">
<div class="row dialog">
    <p class="lead" id="text-dialog">Так, вот дверь, но нужно расчистить путь</p>
</div>
</div> */}