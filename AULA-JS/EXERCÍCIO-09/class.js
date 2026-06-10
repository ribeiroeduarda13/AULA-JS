class Carro {
  constructor(marca, modelo, ano, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
  }

  mostrarModelo() {
    console.log(`Modelo do carro: ${this.modelo}`);
  }
   
  mensagem() {
    return `O carro ${this.modelo} está pronto para dirigir!`;
  }
}


const carro1 = new Carro("Toyota", "Corolla", 2022, "Prata");
const carro2 = new Carro("Honda", "Civic", 2023, "Preto");


carro1.mostrarModelo();
console.log(carro1.mensagem());

carro2.mostrarModelo();
console.log(carro2.mensagem());