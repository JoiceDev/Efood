import { useParams } from 'react-router-dom'
import DishCard from '../DishCard'
import { CardContainer } from './styles'
import { useGetRestaurantsQuery } from '../../services/api'
import { Dish } from '../../types' // Importando o tipo Dish

const Menu = () => {
  const { id } = useParams<{ id: string }>() // Obtendo o ID da URL

  const { data: menu, isLoading, isError } = useGetRestaurantsQuery(undefined)

  if (isLoading) return <p>Carregando...</p>
  if (isError || !menu) return <p>Erro ao carregar restaurante.</p>

  const restaurantData = menu.find((r) => r.id === Number(id))

  if (!restaurantData) return <p>Restaurante não encontrado.</p>

  const featuredDish = restaurantData.cardapio.find((dish) => dish.destacado)

  return (
    <>
      <CardContainer>
        {restaurantData.cardapio.map(
          (
            dish: Dish // Especificando o tipo 'Dish'
          ) => (
            <DishCard key={dish.id} dish={dish} />
          )
        )}
      </CardContainer>

      {featuredDish && (
        <div>
          <h3>Prato em Destaque</h3>
          <DishCard key={featuredDish.id} dish={featuredDish} />
        </div>
      )}
    </>
  )
}

export default Menu
