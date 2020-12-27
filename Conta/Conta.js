// Classe abstrata não pode ser instanciada, contruida com new, apenas erdada
export class Conta {
    #saldo
    #cliente
    #agencia
    
    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor === Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois esssa é uma classe abstrata");
        }

        this.#saldo = saldoInicial
        this.#cliente = cliente
        this.#agencia = agencia
    }
    
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this.#cliente = novoValor
        }
    }

    get cliente() {
        return this.#cliente
    }

    get conta() {
        return this.#agencia
    }

    get saldo() {
        return this.#saldo
    }
    
    // Método abstrato
    sacar(valor) {
        throw new Error('O método sacar da Conta é abstrato')
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor
        if (this.#saldo >= valorSacado) {
            this.#saldo -= valorSacado

            return valorSacado
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