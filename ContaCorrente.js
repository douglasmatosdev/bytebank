import { Cliente } from "./Cliente.js"

export class ContaCorrente {
    // atributos estaticos
    static numeroDeContas = 0

    // atributos públicos
    agencia
    
    // atributos privados
    #cliente
    #saldo = 0

    constructor(cliente, agencia) {
        this.cliente = cliente
        this.agencia = agencia
        ContaCorrente.numeroDeContas += 1
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {

            this.#cliente = novoValor
        }
    }
    get cliente() {
        return this.#cliente
    }
    get saldo() {
        return this.#saldo
    }

    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor

            return valor
        }
    }

    depositar(valor) {
        if(valor <= 0) return

        this.#saldo += valor
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }

   
}
