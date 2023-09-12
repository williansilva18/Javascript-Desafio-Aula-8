class Pessoa {
  constructor(nome, idade, cidade) {
    this.nome = nome.toUpperCase();
    this.idade = idade;
    this.cidade = cidade;
  }
}

// Criando instâncias de Pessoa
const pessoa1 = new Pessoa("Willian", 31, "Cotia");
const pessoa2 = new Pessoa("Ana Julia", 22, "Rio de Janeiro");
const pessoa3 = new Pessoa("Gilberto", 55, "Porto Alegre");

// Utilizando os objetos
console.log(`Pessoa 1: ${pessoa1.nome}`);
console.log(`Idade: ${pessoa1.idade} anos`);
console.log(`Cidade: ${pessoa1.cidade}`);

console.log(`Pessoa 2: ${pessoa2.nome}`);
console.log(`Idade: ${pessoa2.idade} anos`);
console.log(`Cidade: ${pessoa2.cidade}`);

console.log(`Pessoa 3: ${pessoa3.nome}`);
console.log(`Idade: ${pessoa3.idade} anos`);
console.log(`Cidade: ${pessoa3.cidade}`);

