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
  // parametro é array
  // pegar a ultima e a primeira  posição do array 
  // transformar o array em uma string e retornar
  let firstPosition = array[0];
  let lastPosition = array[array.length -1];
  let concatArrays = array[array.length - 1] + ", ".concat(array[0]);
  let result = concatArrays;
  return result;
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
function fizzBuzz(arrayNumber) {
// parametro arrayNumber
// retornar tudo em uníco array 
// se divisivel por 3 e 5 adiciona "fizz buzz"
// se divisivel por 3 adiciona "fizz"
// se divisivel por 5 adiciona "buzz"
// nenhum dos casos adiciona "bug!"
let result = [];
  for(let index = 0; index < arrayNumber.length; index += 1 ) {
  if (arrayNumber[index] % 3 === 0 && arrayNumber[index] % 5 === 0) {
    result.push('fizzBuzz');
  } else if (arrayNumber[index] % 3 === 0) {
    result.push('fizz');
  } else if (arrayNumber[index] % 5 === 0) {
    result.push('buzz');
  } else {
    result.push('bug!');
  }
  }
 
  return result;
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












