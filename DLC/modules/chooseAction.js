export function chooseAction(initialGameSettings, variants = [positive, neutral, unpositive]) {
  const chooseText = document.createElement('p');
  chooseText.className = 'choose-action-text';
  chooseText.innerText = 'Выбери: ';

  const chooseActionBtns = document.createElement('div');
  chooseActionBtns.className = 'd-flex justify-content-center';

  variants.forEach((variant) => {
    const button = document.createElement('button');
    button.addEventListener('click', () => {
      variant.func();
      initialGameSettings.isActionActive = !initialGameSettings.isActionActive;
    });
    button.className = 'btn btn-dark btn-choose-action';
    button.innerText = variant.text;

    const colDiv = document.createElement('div');
    colDiv.appendChild(button);

    chooseActionBtns.appendChild(colDiv);
  });

  const chooseActionDiv = document.createElement('div');
  chooseActionDiv.className = 'choose-action-div';
  chooseActionDiv.appendChild(chooseText);
  chooseActionDiv.appendChild(chooseActionBtns);

  initialGameSettings.elements.chooseActions.appendChild(chooseActionDiv);
}
