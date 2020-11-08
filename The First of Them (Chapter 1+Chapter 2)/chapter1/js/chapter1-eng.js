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

let dialogs = [
    "- So, we are in place",
    "- Great, the last signal from the detachment came from here, find everything you can and tell us",
    "- Yes, before communication",
    "- Well, see something?",
    "- Nope, pitch darkness, flew in at night, but we were lucky",
    "- Did you hear?",
    "- No, maybe it seemed?",
    "- I do not know, maybe",
    "- Look!",
    "Pauline found a squad... Dead,",
    "- Oh my God... Who is this with them? They're all ...",
    "The mutant dogs run out, they shot and start to run away",
    "- Run!",
    "- Fuh, it seems to have run away",
    "- What the hell was that all about?",
    "- I don’t know. Have you seen their eyes? They shimmered red. It's so terrible",
    "- We need to find a way out of here and quickly, call the authorities",
    "- It's good now",
    "After a conversation with the authorities",
    "- Are they mocking? Did they know about this and did not warn us? Did you know something about this?",
    "- No. They promised to send a helicopter",
    "- While we can split up and walk around the mansion, we can find something",
    "- Come on"
]

let names = [
    "Pauline",
    "Boss",
    "Pauline",
    "Alexander",
    "Pauline",
    "Alexander",
    "Pauline",
    "Alexander",
    "Pauline",
    "Game",
    "Alexander",
    "Game",
    "Game"
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
            document.body.style.background = "url('background.jpg')";
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
        let sound2 = document.getElementById("sound2");
        sound2.src = "music/run.mp3";
    }

    if (clicks_next_dialog === 13) {
        btn_next.disabled = true;

        dialogs_div.innerHTML = `
            <div class="row dialog">
                <p class="lead" id="text-dialog">Where to run?</p>
            </div>
            <div class="row dialog d-flex justify-content-center">
                <button id="btn-1-left" type="button" class="btn btn-dark" onclick="quick_time_training_l()">
                    Left
                </button>
                <button id="btn-2-right" type="button" class="btn btn-dark" onclick="quick_time_training_r()">
                    Right
                </button>
            </div>
        `;
    }

    if (clicks_next_dialog === 14) {
        name_dialog.innerHTML = `Pauline`;

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
            title: 'Achievement earned: Safe... Probably'
        });

        localStorage.setItem("achievement_2", "open");
    }

    if (clicks_next_dialog === 15) { name_dialog.innerHTML = `Alexander`; }

    if (clicks_next_dialog === 16) { name_dialog.innerHTML = `Pauline`; }

    if (clicks_next_dialog === 17) { name_dialog.innerHTML = `Pauline`; }

    if (clicks_next_dialog === 18) { name_dialog.innerHTML = `Alexander`; }

    if (clicks_next_dialog === 19) { name_dialog.innerHTML = `Game`; }

    if (clicks_next_dialog === 20) { name_dialog.innerHTML = `Pauline`; }

    if (clicks_next_dialog === 21) { name_dialog.innerHTML = `Alexander`; }

    if (clicks_next_dialog === 22) { name_dialog.innerHTML = `Pauline`; }

    if (clicks_next_dialog === 23) {
        name_dialog.innerHTML = `Game`;

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
            title: 'Task: Explore the House'
        });

        task.innerHTML = `Main task: Explore the house`;

        dialogs_div.innerHTML = `
            <div class="row dialog">
                <p class="lead" id="text-dialog">Where to go?</p>
            </div>

            <div class="row dialog d-flex justify-content-center" id="div-where">
                <button id="main_hall" type="button" class="btn btn-dark" onclick="main_hall()">
                    View the main hall
                </button>
                <button id="right_room" type="button" class="btn btn-dark" onclick="right_room()">
                    Go to the room on the right
                </button>
            </div>
        `;
    }
}

function main_hall() {
    task.innerHTML = `Main task: Explore the house`;
    document.body.style.background = "url('main-hall-map.jpg')";
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
        title: 'Game saved'
    });

    localStorage.setItem("save", "hall");

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">On the table is a map of the house</p>
        </div>
    
        <div class="row dialog d-flex justify-content-center" id="take-map-div">
            <button id="take_map" type="button" class="btn btn-dark" onclick="take_map()">
                Take map
            </button>
        </div>
    `;
}

function take_map() {
    document.body.style.background = "url('main-hall-nomap.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
    document.body.style.opacity = "1";

    task.innerHTML = `Main task: Explore the house`;

    localStorage.setItem("save", "map");

    document.getElementById("map-div").innerHTML = `
        <img src="map.png" class="img-fluid">
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
        title: 'New Item: House Map'
    });

    name_dialog.innerHTML = `Pauline`;

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">I will go further</p>
        </div>

        <div class="row dialog d-flex justify-content-center" id="search-next-div">
            <button id="search_next" type="button" class="btn btn-dark" onclick="search_next()">
                Explore
            </button>
        </div>
    `;
}

function search_next() {
    task.innerHTML = `Main task: Explore the house`;

    localStorage.setItem("save", "search-next");

    name_dialog.innerHTML = `Pauline`;
    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Two stones may come up in the wall, you may find them...</p>
        </div>

        <div class="row dialog">
            <p class="lead" id="text-dialog">There’s still some kind of bookshelf and books missing, hmm...</p>
        </div>

        <div class="row dialog d-flex justify-content-center" id="div-where">
            <button id="right_room" type="button" class="btn btn-dark" onclick="right_room()">
                Go to the room on the right
            </button>
            <button id="second_floor" type="button" class="btn btn-dark" onclick="second_floor()">
                Go to the second floor
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
        title: 'Add. Task: Find Two Stones',
        text: 'Add. Task 2: Find a Book'
    });

    task_second.innerHTML = `Additional task: Find two stones`;
    task_third.innerHTML = `Additional task 2: Find a Book`;
}

function right_room() {
    task.innerHTML = `Main task: Explore the house`;
    task_second.innerHTML = `Additional task: Find two stones`;
    task_third.innerHTML = `Additional task 2: Find a Book`;

    document.body.style.backgroundImage = "url('rightroom-zombie.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    localStorage.setItem("save", "right-room");

    let you_hp = 100;

    name_dialog.innerHTML = `Pauline`;

    dialogs_div.innerHTML = `
        <div class="row dialog" id="div-zombie">
            <p class="lead" id="text-dialog">Zombie!</p>
        </div>
        <div class="row dialog d-flex justify-content-center" id="div-kill-zombie">
            <button id="btn-shot" type="button" class="btn btn-dark" onclick="shot()">
                Shoot
            </button>
        </div>
        <div class="progress" id="progress-zombie-div">
            <div class="progress-bar bg-danger" id="progressbar-zombie" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Zombie - 100hp</div>
        </div>
        <div class="progress" id="progress-you-div">
            <div class="progress-bar bg-danger" id="progressbar-you" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">You - 100hp</div>
        </div>
    `;

    setInterval(() => {
        let progressbar_you = document.getElementById("progressbar-you");
        if (progressbar_you !== null) {
            you_hp -= 20;
            sec_you_hp -= 1;
            try {
                progressbar_you.style.width = you_hp + "%";
                progressbar_you.innerHTML = "You - " + you_hp + "hp";
            } catch { sec_you_hp = -1000; }
        
            if (sec_you_hp === 0) {
                you_hp = 0;
                progressbar_you.style.width = you_hp + "%";

                Swal.fire({
                    icon: 'error',
                    title: 'You Died!',
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
    progressbar_zombie.innerHTML = "Zombie - " + zombie_hp + "hp";

    if (click_shot_zombie === 5) {
        document.body.style.backgroundImage = "url('rightroom-nozombie.jpg')";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
    
        progressbar_zombie.parentNode.removeChild(progressbar_zombie);
        progressbar_you.parentNode.removeChild(progressbar_you);
        div_zombie.parentNode.removeChild(div_zombie);
        div_kill_zombie.parentNode.removeChild(div_kill_zombie);

        name_dialog.innerHTML = `Pauline`;

        dialogs_div.innerHTML = `
            <div class="row dialog" id="what-zombie-div">
                <p class="lead" id="text-dialog">Is there another zombie here? You have to be careful...</p>
            </div>

            <div class="row dialog" id="document-div">
                <p class="lead" id="text-dialog">Oh, some folder on a shelf!</p>
            </div>

            <div class="row dialog d-flex justify-content-center" id="take-document-div">
                <button id="btn-document" type="button" class="btn btn-dark" data-toggle="modal" data-target="#document" onclick="take_document()">
                    Take document
                </button>
            </div>
        `;
    }
}

function take_document() {
    document1_inner();
    document.body.style.backgroundImage = "url('rightroom-nozombie.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    task.innerHTML = `Main task: Explore the house`;
    task_second.innerHTML = `Additional task: Find two stones`;
    task_third.innerHTML = `Additional task 2: Find a Book`;

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
        title: 'Two new items: Document and Red Stone'
    });

    name_dialog.innerHTML = `Pauline`;

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">What kind of "Super Mutant" and the company that creates this?
            I would not want to meet him here ...</p>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">Oh, the first stone, red!</p>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">So, everything seems to be here, I’ll go further</p>
        </div>
        <div class="row dialog d-flex justify-content-center">
            <button class="btn btn-dark" id="second_floor_btn" onclick="second_floor()">
            Second floor
            </button>
        </div>
    `;
}

function achievement_second() {
    task.innerHTML = `Main task: Explore the house`;
    task_second.innerHTML = `Additional task: Find two stones`;
    task_third.innerHTML = `Additional task 2: Find a Book`;

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
        title: 'Achievement Received: Only Not He...'
    });

    localStorage.setItem("achievement_3", "open");
}

function second_floor() {
    document.body.style.backgroundImage = "url('main-hall-nomap.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    task.innerHTML = `Main task: Explore the house`;
    task_second.innerHTML = `Additional task: Find two stones`;
    task_third.innerHTML = `Additional task 2: Find a Book`;

    localStorage.setItem("save", "second-floor");

    name_dialog.innerHTML = `Pauline`;

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">So, well, go ahead!</p>
        </div>
        <div class="row dialog d-flex justify-content-center">
            <button class="btn btn-dark" id="front_room" onclick="front_room()">
                Room in front
            </button>
        </div>
    `;
}

function front_room() {
    document.body.style.backgroundImage = "url('frontroom-zombie.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    task.innerHTML = `Main task: Explore the house`;
    task_second.innerHTML = `Additional task: Find two stones`;
    task_third.innerHTML = `Additional task 2: Find a Book`;

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
        title: 'Game saved'
    });

    let you_hp_2 = 100;

    name_dialog.innerHTML = `Pauline`;

    document.body.style.backgroundImage = "url('frontroom-zombie.jpg')";

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Oh yes you are kidding, two zombies...</p>
        </div>
        <div class="progress" id="progress-zombie2-div">
            <div class="progress-bar bg-danger" id="progressbar-zombie-2" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Zombie - 100hp</div>
        </div>
        <div class="progress" id="progress-you-div-2">
            <div class="progress-bar bg-danger" id="progressbar-you-2" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">You - 100hp</div>
        </div>
        <div class="row dialogs d-flex justify-content-center">
            <button class="btn btn-dark" onclick="shot_2()" id="btn-shot-2">
                Shoot
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
                progressbar_you_2.innerHTML = "You - " + you_hp_2 + "hp";
            } catch { sec_you_hp_2 = null; }
        
            if (sec_you_hp_2 <= 0) {
                you_hp_2 = 0;
                progressbar_you_2.style.width = you_hp_2 + "%";

                Swal.fire({
                    icon: 'error',
                    title: 'You Died!',
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
    progressbar_zombie_2.innerHTML = "Zombie - " + zombie_hp2 + "hp";

    if (click_shot_zombie2 === 10) {
        name_dialog.innerHTML = `Pauline`;

        document.body.style.backgroundImage = "url('frontroom-nozombie.jpg')";

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
            title: 'Two new items: Key and Book'
        });

        name_dialog.innerHTML = `Pauline`;

        dialogs_div.innerHTML = `
            <div class="row dialog">
                <p class="lead" id="text-dialog">Ouch!</p>
            </div>

            <div class="row dialogs d-flex justify-content-center">
                <button class="btn btn-dark" onclick="dodge()" id="btn-dodge">
                    Dodge
                </button>
            </div>

            <div class="progress" id="progress-you-div-2">
                <div class="progress-bar bg-danger" id="progressbar-sec" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">2sec</div>
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
                    progressbar_you_sec.innerHTML = sec_evasion + "sec";
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
                        title: 'Achievement Received: Do Not Do This Any More...'
                    });

                    localStorage.setItem("achievement_4", "achievement_4");

                    Swal.fire({
                        icon: 'error',
                        title: 'You Died!',
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
    name_dialog.innerHTML = `Pauline`;

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Fuh, me almost bit</p>
        </div>

        <div class="row dialog d-flex justify-content-center">
            <button class="btn btn-dark" onclick="left_room_1()" id="btn-left-room-1">
                Room on the left
            </button>
        </div>
    `;
}

function left_room_1() {
    document.body.style.backgroundImage = "url('computer-room.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    task.innerHTML = `Main task: Explore the house`;
    task_second.innerHTML = `Additional task: Find two stones`;
    task_third.innerHTML = `Additional task 2: Find a Book`;

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
        title: 'Game Saved'
    });

    name_dialog.innerHTML = `Pauline`;

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">What a night... So what in this room?</p>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">What? Sasha!? This is in another room!</p>
        </div>
        <div class="row dialog d-flex justify-content-center">
            <button class="btn btn-dark" onclick="left_room_2()" id="btn-left-room-2">
                Let's run!
            </button>
        </div>
        <audio src="sounds/vilglem.mp3" autoplay="autoplay"></audio>
    `;
}

function left_room_2() {
    document.body.style.backgroundImage = "url('room-alexdeath.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    name_dialog.innerHTML = `Game`;

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">*She sees how Alexander is trying to escape from Phobos, but he grabs his neck and strangles*</p>
        </div>
        <div class="row dialog d-flex justify-content-center">
            <button class="btn btn-dark" onclick="shot_sound()" id="btn-shot-sound">
                Shoot
            </button>
        </div>
    `;
}

function shot_sound() {
    document.body.style.backgroundImage = "url('room-alexdeath.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    task.innerHTML = `Main task: Explore the house`;
    task_second.innerHTML = `Additional task: Find two stones`;
    task_third.innerHTML = `Additional Task 2: Find a Book`;

    localStorage.setItem("save", "left-room-2");

    sound.src = "sounds/shot.mp3";

    name_dialog.innerHTML = `Alexander and Polina`;

    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">P... Polina, catch a flash drive... The whole truth is here... Run!</p>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">*Alexander throws the flash drive to Polina, she catches it and Alexander dies...*</p>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">No...</p>
        </div>
        <div class="row dialog d-flex justify-content-center">
            <button class="btn btn-dark" onclick="run_fobos()" id="btn-run-fobos">
                Run
            </button>
        </div>
        <div class="progress" id="progress-div-fobos">
            <div class="progress-bar bg-danger" id="progressbar-run-fobos" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${sec_fobos}sec</div>
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
                title: 'You Died!',
            });
    
            setInterval(() => {
                menu();
            }, 1000);
        }
    }, 1000);
}

function run_fobos() {
    click_fobos_btn += 1;

    document.body.style.backgroundImage = "url('main-hall-nomap.jpg')";
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
            title: 'Achievement Received: Had this night ended soon...'
        })
    }

    localStorage.setItem("achievement_5", "open");

    name_dialog.innerHTML = `Pauline`;
    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">What did Sasha learn..? What is on this flash drive?</p>
        </div>
        <div class="row dialog d-flex justify-content-center">
            <button class="btn btn-dark" onclick="right_room_2()" id="btn-right-room-2">
                Room on the left
            </button>
            <button class="btn btn-dark" onclick="left_room_3()" id="btn-left-room-3">
                Room Left 2
            </button>
        </div>
    `;
}

function right_room_2() {
    document.body.style.backgroundImage = "url('computer-room.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
    
    task.innerHTML = `Main task: Explore the house`;
    task_second.innerHTML = `Additional task: Find two stones`;
    task_third.innerHTML = `Additional Task 2: Find a Book`;

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
        title: 'Game Saved'
    });

    name_dialog.innerHTML = `Pauline`;
    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">There is a computer, but a password on it...</p>
        </div>
        <div class="row dialog d-flex justify-content-center">
            <button class="btn btn-dark" data-toggle="modal" data-target="#password" id="btn-password">
                Enter password
            </button>
            <button class="btn btn-dark" onclick="left_room_3()" id="btn-left-room-3">
                Left room 2
            </button>
        </div>
    `;
}

function left_room_3() {
    document.body.style.backgroundImage = "url('room-left.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    task.innerHTML = `Main task: Explore the house`;
    task_second.innerHTML = `Additional task: Find two stones`;
    task_third.innerHTML = `Additional Task 2: Find a Book`;

    localStorage.setItem("save", "left-room-3");

    name_dialog.innerHTML = `Pauline`;
    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">So, here's a note!</p>
        </div>

        <div class="row dialog d-flex justify-content-center">
            <button class="btn btn-dark" onclick="document2_inner();" data-toggle="modal" data-target="#document-password" id="btn-document-password">
                View note
            </button>

            <button class="btn btn-dark" onclick="right_room_2()" id="btn-right-room-2">
                Room on the left
            </button>
        </div>
    `;
}

function truth() {
    document.body.style.backgroundImage = "url('computer-room.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    localStorage.setItem("save", "truth");

    name_dialog.innerHTML = `Pauline`;
    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">So it turns out that my unit is led by RAIN-company?
            We need to get out of here before the helicopter arrives. Do not save, they will fly me</p>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">It’s worth looking for another way out in the laboratory</p>
        </div>

        <div class="row dialog d-flex justify-content-center">
            <button class="btn btn-dark" onclick="goStone()" id="btn-stone">
                Go for the stone
            </button>
        </div>
    `;

    task.innerHTML = `Main task: Take a key card and go to the laboratory`;
}

function goStone() {
    document.body.style.backgroundImage = "url('main-hall-nomap.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    task.innerHTML = `Main task: Take a key card and go to the laboratory`;

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
        title: 'Game Saved'
    });
    
    sound.src = "sounds/door_sounds.mp3";

    name_dialog.innerHTML = `Pauline`;
    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">So here is some kind of puzzle</p>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">Fuck, they are here, they need it faster, until they knocked the door</p>
        </div>

        <div class="row dialog d-flex justify-content-center">
            <button class="btn btn-dark" data-toggle="modal" data-target="#quiz" id="btn-quiz">
                Puzzle
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
            title: 'Success!',
        });

        name_dialog.innerHTML = `Pauline`;
        dialogs_div.innerHTML = `
            <div class="row dialog">
                <p class="lead" id="text-dialog">There is! I’ll go through another move and to the laboratory</p>
            </div>

            <div class="row dialog d-flex justify-content-center">
                <button class="btn btn-dark" onclick="down()" id="btn-down">
                    Down!
                </button>
            </div>
        `;
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Wrong',
        });
    }
}

function down() {
    document.body.style.backgroundImage = "url('down.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    task.innerHTML = `Main task: Take a key card and go to the laboratory`;

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
        title: 'Game Saved'
    });

    name_dialog.innerHTML = `Pauline`;
    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Okay, down!</p>
        </div>
        <div class="row dialog">
            <p class="lead" id="text-dialog">Oh no, again you...</p>
        </div>
        <div class="row dialog d-flex justify-content-center">
            <button class="btn btn-dark" onclick="boss()" id="btn-boss">
                Boss
            </button>
        </div>
    `;

    let sound2 = document.getElementById("sound2");
    sound2.src = "music/boss.mp3";
}

let shot_boss = 0;
let true_interval = false;

function boss() {
    document.body.style.backgroundImage = "url('fobos_fight.jpg')";
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
        title: 'Main task: Kill Phobos',
    });

    task.innerHTML = `Main task: Kill Phobos`;

    localStorage.setItem("save", "boss");

    name_dialog.innerHTML = `Game`;
    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">*Shoot!*</p>
        </div>

        <div class="row dialog d-flex justify-content-center">
            <button class="btn btn-dark" onclick="shot_boss_func()" id="btn-shot-boss">
                Shoot
            </button>
        </div>

        <div class="progress" id="progress-div-hp-you">
            <div class="progress-bar bg-danger" id="progressbar-hp-you" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">You - 100hp</div>
        </div>

        <div class="progress" id="progress-div-hp-boss">
            <div class="progress-bar bg-danger" id="progressbar-hp-boss" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Phobos - 100hp</div>
        </div>
    `;

    let you_hp_width = 100;

    setInterval(() => {
        let progressbar_you_hp = document.getElementById("progressbar-hp-you");

        if (progressbar_you_hp !== null) {
            you_hp_width -= 20;
            try {
                progressbar_you_hp.style.width = you_hp_width + "%";
                progressbar_you_hp.innerHTML = "You - " + you_hp_width + "hp";
            } catch { sec_evasion_width = -1000; }
        
            if (you_hp_width === 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'You Died!',
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
                <div class="progress-bar bg-danger" id="progressbar-sec-boss" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">2sec</div>
            </div>

            <div class="row dialog d-flex justify-content-center" id="dodge-attack">
                <button class="btn btn-dark" onclick="dodge_attack_boss()" id="btn-dodge-attack-boss">
                    Dodge
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
                    progressbar_you_sec.innerHTML = sec_evasion_boss + "sec";
                } catch { sec_evasion_boss_width = -1000; }
            
                if (sec_evasion_boss === 0) {
                    Swal.fire({
                        icon: 'error',
                        title: 'You Died!',
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
    progressbar_boss_hp.innerHTML = "Phobos - " + boss_hp_width + "hp";

    if (shot_boss === 20) {
        document.body.style.backgroundImage = "url('death-fobos.jpg')";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";

        let sound2 = document.getElementById("sound2");
        sound2.src = "music/background_house.mp3";

        localStorage.setItem("you", "you");
        
        name_dialog.innerHTML = `Pauline`;
        dialogs_div.innerHTML = `
            <div class="row dialog">
                <p class="lead" id="text-dialog">Acid! Ha!</p>
            </div>
            <div class="row dialog">
                <p class="lead" id="text-dialog">For Sasha...</p>
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
            title: 'Achievement Received: End... Or Beginning?'
        })

        localStorage.setItem("achievement_6", "open");

        setTimeout(() => {
            location.href = "end-eng.html";
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
            <p class="lead" id="text-dialog">Run, or die!</p>
        </div>
        <div class="row dialog d-flex justify-content-center" id="run-div-btn">
            <button id="btn-run" type="button" class="btn btn-dark" onclick="counter_left_func()">
                Run
            </button>
        </div>
        <div class="progress" id="progress-div">
            <div class="progress-bar bg-danger" id="progressbar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${sec_left}sec</div>
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
                title: 'You Died!',
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
            title: 'Achievement received: And immediately into battle'
        })

        localStorage.setItem("achievement_1", "open");

        progress.parentNode.removeChild(progress);
        run_div_btn.parentNode.removeChild(run_div_btn);
        let sound2 = document.getElementById("sound2");
        sound2.src = "music/background_house.mp3";
        document.body.style.background = "url('main-hall.jpg')";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
        next_dialog();
    }
}

function run_right() {
    let width_minus = 100;

    name_dialog.innerHTML = `Game`;
    dialogs_div.innerHTML = `
        <div class="row dialog">
            <p class="lead" id="text-dialog">Run, or die!</p>
        </div>
        <div class="row dialog d-flex justify-content-center" id="run-div-btn">
            <button id="btn-run" type="button" class="btn btn-dark" onclick="counter_right_func()">
                Run
            </button>
        </div>
        <div class="progress" id="progress-div">
            <div class="progress-bar bg-danger" id="progressbar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${sec_right}sec</div>
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
                    title: 'You Died!',
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
            title: 'Achievement received: And immediately into battle'
        })

        localStorage.setItem("achievement_1", "open");

        progress.parentNode.removeChild(progress);
        run_div_btn.parentNode.removeChild(run_div_btn);
        let sound2 = document.getElementById("sound2");
        sound2.src = "music/background_house.mp3";
        document.body.style.background = "url('main-hall.jpg')";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
        next_dialog();
    }
}

function quick_time_training_l() {
    Swal.fire({
        title: 'Click on the button!',
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
        title: 'Click on the button!',
        icon: 'info',
        showCancelButton: false,
        confirmButtonText: 'Ок',
    }).then((result) => {
        if (result.value) { run_right(); } 
        else if (result.dismiss === Swal.DismissReason.cancel) { }
    });
}