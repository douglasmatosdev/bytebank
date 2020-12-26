import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js'
import { ContaSalario } from './ContaSalário.js'

const cliente1 = new Cliente('John Doe', '99999999999')

const contaCorrenteCliente1 = new ContaCorrente(cliente1, 1221)
contaCorrenteCliente1.depositar(500)
contaCorrenteCliente1.sacar(100)

const contaPoupancaCliente1 = new ContaPoupanca(50, cliente1, 1001)
contaPoupancaCliente1.depositar(200)
contaPoupancaCliente1.sacar(50)

const contaSalarioCliente1 = new ContaSalario(cliente1)
contaSalarioCliente1.depositar(100)
contaSalarioCliente1.sacar(0)

console.log(contaCorrenteCliente1);
console.log(contaCorrenteCliente1.cliente.nome);
console.log(contaCorrenteCliente1.conta)
console.log(contaCorrenteCliente1.saldo);
console.log('\n');
console.log(contaPoupancaCliente1);
console.log(contaPoupancaCliente1.cliente.nome);
console.log(contaPoupancaCliente1.conta)
console.log(contaPoupancaCliente1.saldo);
console.log('\n');
console.log(contaSalarioCliente1);
console.log(contaSalarioCliente1.cliente.nome);
console.log(contaSalarioCliente1.conta)
console.log(contaSalarioCliente1.saldo);


