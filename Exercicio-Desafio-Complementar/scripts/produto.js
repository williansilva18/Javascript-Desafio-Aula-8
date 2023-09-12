
class Produto {
  constructor(nome, preco, estoque) {
    this.nome = nome.toUpperCase();
    this.preco = parseFloat(preco);
    this.estoque = estoque;
  }

  calcularValorTotal() {
    return this.preco * this.estoque;
  }
}

// Criando instâncias de Produto
const produto1 = new Produto("Blusa", 139.90, 30);
const produto2 = new Produto("Vestido", 89.99, 15);
const produto3 = new Produto("Camiseta", 59.99, 100);

// Utilizando os objetos e seus métodos
console.log(`Produto 1: ${produto1.nome}`);
console.log(`Preço unitário: $${produto1.preco}`);
console.log(`Quantidade em estoque: ${produto1.estoque}`);
console.log(`Valor total em estoque: $${produto1.calcularValorTotal()}`);

console.log(`Produto 2: ${produto2.nome}`);
console.log(`Preço unitário: $${produto2.preco}`);
console.log(`Quantidade em estoque: ${produto2.estoque}`);
console.log(`Valor total em estoque: $${produto2.calcularValorTotal()}`);

console.log(`Produto 3: ${produto3.nome}`);
console.log(`Preço unitário: $${produto3.preco}`);
console.log(`Quantidade em estoque: ${produto3.estoque}`);
console.log(`Valor total em estoque: $${produto3.calcularValorTotal()}`);
