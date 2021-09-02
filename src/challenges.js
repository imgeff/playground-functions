// Desafio 1
// dois valores parametros
// SE AMBOS forem verdadeiros = true
// SE algum dos valores for false = false
function compareTrue(valor1, valor2) {
  if (valor1 && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
// parametros são base e height
// formula = base x altura / 2
// retornar o cálculo
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
/** https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254 */
// parametro é string
// transformar string em array
// retornar array de strings. 
// o que definirá a separação das strings são os espaços.
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
/** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat */
// parametro é array
// pegar a ultima e a primeira  posição do array 
// transformar o array em uma string e retornar.
function concatName(array) {

  let firstPosition = array[0];
  let lastPosition = array[array.length -1];
  let concatArrays = array[array.length - 1] + ", ".concat(array[0]);
  let result = concatArrays;
  return result;
}

// Desafio 5
// parametros wins,ties (vitória e empate)
// retorna total de pontos
// win = 3 ties = 1
function footballPoints(wins, ties) {
wins = wins * 3;
ties = ties * 1;
let totalPoints = wins + ties;
return totalPoints;
}

// Desafio 6
// parametro arrayNumber
// descobrir o maior numero
// contar  e retornar quantas vezes o maior numero aparece
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
// Consultei a mentoria técnica para resolver esse problema e obtive a recomendação do Caíque para a leitura da Documentação abaixo 
/** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs */
// parametros mouse,cat1,cat2
// calcular distância entre rato e gato 1
// calcular distância entre rato e gato 2
// Retornar o que estiver mais perto do numero do rato
function catAndMouse(mouse, cat1, cat2) {
  let distanciacat1 = Math.abs(mouse - cat1);
  let distanciacat2 = Math.abs(mouse - cat2);
  if(distanciacat1 < distanciacat2) {
    return "cat1";
  } else if (distanciacat2 < distanciacat1) {
    return "cat2";
  } else if (distanciacat1 === distanciacat2) {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
// parametro arrayNumber
// retornar tudo em uníco array 
// se divisivel por 3 e 5 adiciona "fizz buzz"
// se divisivel por 3 adiciona "fizz"
// se divisivel por 5 adiciona "buzz"
// nenhum dos casos adiciona "bug!"
function fizzBuzz(arrayNumber) {

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
function encode(string) {
  // transformar string em array
  // fazer um array vazio para receber a troca
  // String como parametro
  // Trocar vogais por numeros
  // transformar o array em string
  let arrayLetters = string.split("");
  let arrayString = [];
  for (let index = 0; index < arrayLetters.length; index += 1) {
    switch (arrayLetters[index]) {
      case "a":
        arrayString.push("1");
        break;
      case "e":
        arrayString.push("2");
        break;
      case "i":
        arrayString.push("3");
        break; 
      case "o":
        arrayString.push("4");
        break;
      case "u":
        arrayString.push("5");
        break;
      default:
        arrayString.push(arrayLetters[index]);
        break;
    }
  }
  return arrayString.join("")

}
function decode(string) {
  // trocar os numeros por letras
  let arrayLetters = string.split("");
  let arrayString = [];
  for (let index = 0; index < arrayLetters.length; index += 1) {
    switch (arrayLetters[index]) {
      case "1":
        arrayString.push("a");
        break;
      case "2":
        arrayString.push("e");
        break;
      case "3":
        arrayString.push("i");
        break; 
      case "4":
        arrayString.push("o");
        break;
      case "5":
        arrayString.push("u");
        break;
      default:
        arrayString.push(arrayLetters[index]);
        break;
    }
  }
  return arrayString.join("")
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












