/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable object-curly-spacing */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
const output = document.getElementById('output');

function choose() {
  //  const anna1 = document.getElementById('anna1');
  //  const anna2 = document.getElementById('anna2');
  //  const anna3 = document.getElementById('anna3');

  //  const nikita1 = document.getElementById('nikita1');
  //  const nikita2 = document.getElementById('nikita2');
  //  const nikita3 = document.getElementById('nikita3');

  //  const danil1 = document.getElementById('danil1');
  //  const danil2 = document.getElementById('danil2');
  //  const danil3 = document.getElementById('danil3');

  //  const oleg1 = document.getElementById('oleg1');
  //  const oleg2 = document.getElementById('oleg2');
  //  const oleg3 = document.getElementById('oleg3');
  
  const anna = [
    { anna1: document.getElementById('anna1') },
    { anna2: document.getElementById('anna2') },
    { anna3: document.getElementById('anna3') },
  ];

  const nikita = [
    { nikita1: document.getElementById('nikita1') },
    { nikita2: document.getElementById('nikita2') },
    { nikita3: document.getElementById('nikita3') },
  ];

  const danil = [
    { danil1: document.getElementById('danil1') },
    { danil2: document.getElementById('danil2') },
    { danil3: document.getElementById('danil3') },
  ];

  const oleg = [
    { oleg1: document.getElementById('oleg1') },
    { oleg2: document.getElementById('oleg2') },
    { oleg3: document.getElementById('oleg3') },
  ];

  for (let i = 0; i < 11; i++) {
    if (anna[i].checked &&
        nikita[i].checked &&
        danil[i].checked &&
        oleg[i].checked) {
        
    }
  }

  for (let i = 0; i < nikita.length; i++) {

  }

  for (let i = 0; i < danil.length; i++) {

  }

  for (let i = 0; i < oleg.length; i++) {

  }
}
