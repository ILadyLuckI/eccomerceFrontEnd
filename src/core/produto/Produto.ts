import Especificacoes from "./Especificacoes"
import Precificavel from "./Precificavel"

//este arquivo represetará os dados dos produtos
// Produto esta tendo uma relação de herança com Precificável através de 'extends'
export default interface Produto extends Precificavel{
    id: number
    nome: string
    descricao: string
    marca: string
    modelo: string
    imagem: string
    videoReview: string
    nota: number
    tags: string[]

    // relação de composição (todo produto terá uma especificação)
    especificacoes: Especificacoes
}