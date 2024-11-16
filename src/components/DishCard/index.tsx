import { useState } from 'react'
import {
  Card,
  CardImage,
  CardTitle,
  CardDescription,
  AddToCartButton
} from './styles'
import pizza from '../../assets/images/pizza.svg'
import { Dish } from '../../types'
import DishModal from '../DishModal'

interface DishCardProps {
  dish: Dish // Tipando o prop dish como um Dish
}

const DishCard = ({ dish }: DishCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false) // Estado para abrir/fechar o modal

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const getDescription = (descricao: string) => {
    if (descricao.length > 132) {
      return descricao.slice(0, 129) + '...'
    }
    return descricao
  }

  return (
    <>
      <Card key={dish.id}>
        <CardImage src={dish.foto || pizza} alt={dish.nome} />
        <CardTitle>{dish.nome}</CardTitle>
        <CardDescription>{getDescription(dish.descricao)}</CardDescription>
        <AddToCartButton onClick={openModal}>
          Adicionar ao carrinho
        </AddToCartButton>
      </Card>

      {isModalOpen && (
        <DishModal dish={dish} isOpen={isModalOpen} onClose={closeModal} />
      )}
    </>
  )
}

export default DishCard
