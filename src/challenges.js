// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName(array) {
  return "'" + array[array.length - 1] + ','.concat(array[0]); + "'"
}

// Desafio 5
function footballPoints(wins, ties) {
  wins = wins * 3;
  ties = ties * 1;
  let totalPoints = wins + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(arrayNumber) {
  let maiorNumber = arrayNumber[0];
  let contMaiorNumber = 0;
  for (let index = 0; index < arrayNumber.length; index += 1) {
    if(arrayNumber[index] > maiorNumber) {
      maiorNumber = arrayNumber[index];
    }
  }
  for(let index = 0; index < arrayNumber.length; index += 1) {
    if(arrayNumber[index] === maiorNumber) {
      contMaiorNumber += 1;
    }
  }
  return contMaiorNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciacat1 = mouse - cat1;
  let distanciacat2 = mouse - cat2;
  if(distanciacat1 < distanciacat2) {
    return "cat1";
  } else if (distanciacat2 < distanciacat1) {
    return "cat2";
  } else if (distanciacat1 === distanciacat2) {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
