// Transformar a string em array separados por vírgula
// e limpar os espaços entre os elementos
module.exports = function parseStringAsArray(arrayAsString) {
  return arrayAsString.split(",").map((tech) => tech.trim());
};
