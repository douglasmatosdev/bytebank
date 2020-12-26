import { Cliente } from './Cliente.js'
import { Diretor } from './Funcionarios/Diretor.js'
import { Gerente } from './Funcionarios/Gerente.js'
import { SistemaAutenticacao } from './SistemaAutenticacao.js'


const diretor = new Diretor('Jorge Almeida', 10000, 11122233300)
diretor.cadastrarSenha('123456')

const gerente = new Gerente('Jorge Almeida', 10000, 33322211101)
gerente.cadastrarSenha('654321')

const cliente = new Cliente('Laura Pausini', 99999999900, '010101')

const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123456')
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '654321')
const clienteEstaLogago = SistemaAutenticacao.login(cliente, '010101')

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogago);