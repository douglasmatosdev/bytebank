import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'

const cliente1 = new Cliente('Lorem Ipsum', '99999999999')
const conta1 = new ContaCorrente(cliente1, 1221)
conta1.depositar(400)

const cliente2 = new Cliente('John Doe', '11111111111')
const conta2 = new ContaCorrente(cliente2, 2112)
conta2.depositar(200)

const cliente3 = new Cliente('Michael Doe', '11111111111')
const conta3 = new ContaCorrente(cliente3, 2112)

console.log('Número de contas: ', ContaCorrente.numeroDeContas);
console.log('\n');

console.log('Nome: ', cliente1.nome)
console.log('CPF: ', cliente1.cpf);
console.log('Agencia: ', conta1.agencia);
console.log('Saldo: ', conta1.saldo);

console.log('\n');

console.log('Nome: ', cliente2.nome)
console.log('CPF: ', cliente2.cpf);
console.log('Agencia: ', conta2.agencia);
console.log('Saldo: ', conta2.saldo);

console.log('\n');

console.log('Nome: ', cliente3.nome)
console.log('CPF: ', cliente3.cpf);
console.log('Agencia: ', conta3.agencia);
console.log('Saldo: ', conta3.saldo);