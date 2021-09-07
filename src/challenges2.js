// Desafio 10
function techList(array, nick) {
  // parametros array de tecnologias e 'name'
  // ordenar o arrayTechs  e inserir  junto com name as posições em forma de objeto em um novo array
  let arrayTechs = [];
  for (let index = 0; index < array.length; index += 1) {
    let arrayOrdenado = array.sort();
    let objeto = {
      tech: arrayOrdenado[index],
      name: nick,
    }
    arrayTechs.push(objeto);
  }
  if (arrayTechs.length > 0) {
    return arrayTechs
  } else {
    return 'Vazio!'
  }
}
// Desafio 11
function generatePhoneNumber(arrayNumber) {
  // parametro array com 11 numeros
  // condições: array maior que 11 = tamanho incorreto
  // menor que 0 ou maior que 9 e que repita mais que 3 vezes = não é possível
  // Verifica se o tamanho do Array é maior ou menor que 11
  if (arrayNumber.length !== 11) {
    return "Array com tamanho incorreto.";
  } 
  // Verifica se cada número é maior que 0 e menor que 9
  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (arrayNumber[index] < 0 || arrayNumber[index] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  // Verifica quantas vezes cada número se repete
  for (let index = 0; index < arrayNumber.length; index += 1){
    let number = arrayNumber[index];
    let cont = 0;
    for (let i = 0; i < arrayNumber.length; i += 1) {
      if ( arrayNumber[i] === number) {
         cont += 1
      }
      if ( cont >= 3) {
       return "não é possível gerar um número de telefone com esses valores"
      }
    }
  }
// Gera o Número de telefone
let numberGenerate = ['(', arrayNumber[0], arrayNumber[1], ')', ' '];
for (let index = 2; index < arrayNumber.length; index += 1) {
  if (index === 6){
    numberGenerate.push(arrayNumber[index], '-');
  } else {
    numberGenerate.push(arrayNumber[index])
  }
}
return numberGenerate.join('');
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // Parametros lineA, lineB, lineC
  // medida de qualquer um dos lados tem que ser menor do que a soma dos outros 2 lados  e ainda ser maior que a diferença entre medidas
  // return booleano
let somaAB= Math.abs(lineA + lineB);
let somaAC = Math.abs(lineA + lineC);
let somaBC = Math.abs(lineB + lineC);
let diferenceAB = Math.abs(lineA - lineB);
let diferenceAC = Math.abs(lineA - lineC);
let diferenceBC = Math.abs(lineB -lineC);
if (lineA > somaBC || lineA < diferenceBC || lineB > somaAC || lineB < diferenceAC || lineC > somaAB || lineC < diferenceAB) {
  return false;
} else {
  return true;
}
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
