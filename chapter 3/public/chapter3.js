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
        <button id="btn-next" type="button" class="btn btn-lg btn-block btn-dark" onclick="training()">Далее</button>
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
    
}