let chooseArrayDirection = [];

function check () {
  let teamElementsDirection = [
    [document.getElementById('nikita1'),
    document.getElementById('anna1'),
    document.getElementById('oleg1'),
    document.getElementById('danil1')],

    [document.getElementById('nikita2'),
    document.getElementById('anna2'),
    document.getElementById('oleg2'),
    document.getElementById('danil2')],

    [document.getElementById('nikita3'),
    document.getElementById('anna3'),
    document.getElementById('oleg3'),
    document.getElementById('danil3')],
  ];
  
  for (let i = 0; i < teamElementsDirection.length; i++) {
      for (let j = 0; j < teamElementsDirection[i].length; j++) {
          if (teamElementsDirection[i][j].checked) {
              const last = teamElementsDirection[i][j].id.toString().slice(-1);
              if (last == '1') {
                  chooseArrayDirection.push(`${teamElementsDirection[i][j].value} - Налево`);
              } else if (last == '2') {
                  chooseArrayDirection.push(`${teamElementsDirection[i][j].value} - Прямо`);
              } else if (last == '3') {
                  chooseArrayDirection.push(`${teamElementsDirection[i][j].value} - Направо`);
              }
          }
      }
  }

  console.log(chooseDirectionMas);
  console.log(chooseArrayDirection);
  console.log(teamElementsDirection);
}