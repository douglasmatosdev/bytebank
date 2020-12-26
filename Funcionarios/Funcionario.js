export class Funcionario {
    #nome
    #salario
    #cpf
    #bonificacao
    #senha
    
    constructor(nome, salario, cpf) {
        this.#nome = nome
        this.#salario = salario
        this.#cpf = cpf

        this.#bonificacao = 1
        this.#senha
    }

    autenticar(senha) {
        return senha === this.#senha
    }

    cadastrarSenha(senha) {
        this.#senha = senha
    }

}