export interface FoodType {
  id: number
  titulo: string
  destacado?: boolean // Definido como opcional
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  foto: string
  cardapio: Dish[]
}

export interface Dish {
  id: number
  nome: string
  descricao: string
  preco: number
  foto: string
  porcao: string
}
