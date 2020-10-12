const team = [
    nikita = {
        name: 'Никита',
        hp: 100,
        alive: 'false',
    },

    anna = {
        name: 'Анна',
        hp: 100,
        alive: true,
    },

    danil = {
        name: 'Данил',
        hp: 100,
        alive: true,
    },

    oleg = {
        name: 'Олег',
        hp: 100,
        alive: true,
    },
];

function btn() {
    const nikita1 = document.getElementById('nikita1');
    const nikita2 = document.getElementById('nikita2');
    const nikita3 = document.getElementById('nikita3');
    
    const anna1 = document.getElementById('anna1');
    const anna2 = document.getElementById('anna2');
    const anna3 = document.getElementById('anna3');
    
    const danil1 = document.getElementById('danil1');
    const danil2 = document.getElementById('danil2');
    const danil3 = document.getElementById('danil3');
    
    const oleg1 = document.getElementById('oleg1');
    const oleg2 = document.getElementById('oleg2');
    const oleg3 = document.getElementById('oleg3');
    
    if (team[0].alive == 'false') {
        nikita1.parentNode.removeChild(nikita1);
        nikita2.parentNode.removeChild(nikita2);
        nikita3.parentNode.removeChild(nikita3);
    } else if (team[1].alive == 'false') {
        anna1.parentNode.removeChild(anna1);
        anna2.parentNode.removeChild(anna2);
        anna3.parentNode.removeChild(anna3);
    } else if (team[2].alive == 'false') {
        danil1.parentNode.removeChild(danil1);
        danil2.parentNode.removeChild(danil2);
        danil3.parentNode.removeChild(danil3);
    } else if (team[3].alive == 'false') {
        oleg1.parentNode.removeChild(oleg1);
        oleg2.parentNode.removeChild(oleg2);
        oleg3.parentNode.removeChild(oleg3);
    } else {
        console.log('хуйня');
    }
}