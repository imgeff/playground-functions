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
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
