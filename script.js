let elements = [
  'hydrogen',
  'helium',
  'lithium',
  'beryllium',
  'boron',
  'carbon',
  'nitrogen',
  'oxygen',
  'flourine',
  'neon',
  'sodium',
  'magnesium',
  'aluminum',
  'silicon',
  'phosphorous',
  'sulphur',
  'chlorine',
  'argon',
  'potassium',
  'calcium',
];
let elementsProperties = {
  hydrogen: {
    an: 1,
    am: 1,
    symbol: 'H',
  },
  helium: {
    an: 2,
    am: 4,
    symbol: 'He',
  },
  lithium: {
    an: 3,
    am: 7,
    symbol: 'Li',
  },
  beryllium: {
    an: 4,
    am: 8,
    symbol: 'Be',
  },
  boron: {
    an: 5,
    am: 10,
    symbol: 'B',
  },
  carbon: {
    an: 6,
    am: 12,
    symbol: 'C',
  },
  nitrogen: {
    an: 7,
    am: 14,
    symbol: 'N',
  },
  oxygen: {
    an: 8,
    am: 16,
    symbol: 'O',
  },
  flourine: {
    an: 9,
    am: 18,
    symbol: 'F',
  },
  Neon: {
    an: 10,
    am: 20,
    symbol: 'Ne',
  },
  sodium: {
    an: 11,
    am: 23,
    symbol: 'Na',
  },
  magnesium: {
    an: 12,
    am: 24,
    symbol: 'Mg',
  },
  Aluminum: {
    an: 13,
    am: 27,
    symbol: 'Al',
  },
  silicon: {
    an: 14,
    am: 28,
    symbol: 'Si',
  },
  phosphorous: {
    an: 15,
    am: 30,
    symbol: 'P',
  },
  sulphur: {
    an: 16,
    am: 32,
    symbol: 'S',
  },
  chlorine: {
    an: 17,
    am: 35.5,
    symbol: 'Cl',
  },
  argon: {
    an: 18,
    am: 39,
    symbol: 'Ar',
  },
  potassium: {
    an: 19,
    am: 39,
    symbol: 'P',
  },
  calcium: {
    an: 20,
    am: 40,
    symbol: 'Ca',
  },
};

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
shuffleArray(elements);
let number = 0;
let elementName = document.querySelector('.element');
elementName.innerHTML = elements[number];
for (let i = 0; i < elements.length; i++) {
  console.log(elementsProperties[elements[number]]);
}
let checkBtn = document.querySelector('.check');
let nextBtn = document.querySelector('.next');
let anInput = document.querySelector('#atmoicNumber');
let amInput = document.querySelector('#atmoicMass');
let symbol = document.querySelector('#symbol');
let answer = document.querySelector('.answer');
let correct = document.querySelector('.correct');
checkBtn.addEventListener('click', () => {
  if (
    anInput.value == elementsProperties[elements[number]].an &&
    amInput.value == elementsProperties[elements[number]].am &&
    symbol.value == elementsProperties[elements[number]].symbol
  ) {
    correct.innerHTML = 'Correct!!!';
    correct.style.display = 'block';
    console.log('correct');
  } else {
    correct.innerHTML = 'Wrong!!!';
    correct.style.display = 'block';
    answer.innerHTML =
      elementName.innerText +
      ', ' +
      elementsProperties[elements[number]].an +
      ', ' +
      elementsProperties[elements[number]].am +
      ', ' +
      elementsProperties[elements[number]].symbol;
    answer.style.display = 'block';
    console.log('wrong');
  }
});
nextBtn.addEventListener('click', () => {
  if (number > elements.length) {
    number = 0;
  }
  number += 1;
  elementName.innerHTML = elements[number];
  answer.style.display = 'none';
  correct.style.display = 'none';
  amInput.value = '';
  anInput.value = '';
  symbol.value = '';
});
