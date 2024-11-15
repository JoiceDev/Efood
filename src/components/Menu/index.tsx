import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FoodType, Dish } from '../../types'
import MenuHeaderComponent from '../MenuHeader'
import MenuBanner from '../MenuBanner'
import DishCard from '../DishCard'
import DishModal from '../DishModal'
import { CardContainer, Subtitle, Title } from './styles'

const Menu = () => {
  const [dishes, setDishes] = useState<Dish[]>([]) // Estado para armazenar os pratos
  const [isModalOpen, setIsModalOpen] = useState(false) // Estado para controlar a exibição do modal
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null) // Estado para armazenar o prato selecionado no modal
  const [restaurant, setRestaurant] = useState<FoodType | null>(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const loadedRestaurant: FoodType = {
          id: data.id,
          titulo: data.titulo,
          destacado: data.destacado,
          tipo: data.tipo,
          avaliacao: data.avaliacao,
          descricao: data.descricao,
          capa: data.capa,
          foto: data.foto,
          cardapio: data.cardapio || []
        }
        setRestaurant(loadedRestaurant)
        setDishes(data.cardapio || []) // Definindo os pratos apenas do restaurante selecionado
      })
  }, [id])

  // Função para abrir o modal e exibir os detalhes do prato selecionado
  const openModal = (dish: Dish) => {
    setSelectedDish(dish)
    setIsModalOpen(true)
  }

  if (!restaurant) return <p>Carregando...</p>

  return (
    <>
      <MenuHeaderComponent />
      <MenuBanner imageUrl={restaurant?.cardapio[0]?.foto || ''} />
      <Title>{restaurant.titulo}</Title>
      <Subtitle>{restaurant.tipo}</Subtitle>
      <CardContainer>
        {dishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} onClick={openModal} />
        ))}
      </CardContainer>
      {selectedDish && (
        <DishModal
          dish={selectedDish}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  )
}

export default Menu
