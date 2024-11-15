import {
  Card,
  CardImage,
  CardTitle,
  CardDescription,
  AddToCartButton
} from './styles'
import pizza from '../../assets/images/pizza.svg'
import { Dish } from '../../types'

interface DishCardProps {
  dish: Dish // Tipando o prop dish como um Dish
  onClick: (dish: Dish) => void // Função para lidar com o clique no prato
}

const DishCard = ({ dish, onClick }: DishCardProps) => {
  const getDescription = (descricao: string) => {
    if (descricao.length > 132) {
      return descricao.slice(0, 129) + '...'
    }
    return descricao
  }

  return (
    <Card key={dish.id}>
      <CardImage src={dish.foto || pizza} alt={dish.nome} />
      <CardTitle>{dish.nome}</CardTitle>
      <CardDescription>{getDescription(dish.descricao)}</CardDescription>
      <AddToCartButton onClick={() => onClick(dish)}>
        Adicionar ao carrinho
      </AddToCartButton>
    </Card>
  )
}

export default DishCard
