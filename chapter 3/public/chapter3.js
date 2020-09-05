let music = document.getElementById("music");
let sound = document.getElementById("sound");
let dialogs_div = document.getElementById("dialogs");
let name_dialog = document.getElementById("name-dialog");
let title_hidden = document.getElementById("title-game-hidden");
let btn_next = document.getElementById("btn-next");
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

    btn_next.parentNode.removeChild(btn_next);
    document.getElementById("footer-buttons").innerHTML += `
        <button id="btn-next" type="button" class="btn btn-dark" onclick="training()" data-toggle="modal" data-target="#ration-modal">Далее</button>
    `;
}

function training() {
    $('.toast').toast();
}