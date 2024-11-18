import { useParams } from 'react-router-dom'
import MenuHeaderComponent from '../MenuHeader'
import MenuBanner from '../MenuBanner'
import DishCard from '../DishCard'
import { CardContainer, Subtitle, Title } from './styles'
import { useGetRestaurantsQuery } from '../../services/api'
import Cart from '../Cart'

const Menu = () => {
  const { id } = useParams<{ id: string }>() // Obtendo o ID da URL

  const {
    data: restaurant,
    isLoading,
    isError
  } = useGetRestaurantsQuery(undefined)

  // Verificando se os dados do restaurante foram carregados
  if (isLoading) return <p>Carregando...</p>
  if (isError || !restaurant) return <p>Erro ao carregar restaurante.</p>

  const restaurantData = restaurant.find((r) => r.id === Number(id))

  if (!restaurantData) return <p>Restaurante não encontrado.</p>

  const featuredDish = restaurantData.cardapio.find((dish) => dish.destacado)

  return (
    <>
      <MenuHeaderComponent />
      {/* Garantir que cardapio não está vazio antes de acessar foto */}
      <MenuBanner imageUrl={restaurantData.cardapio[0]?.foto || ''} />
      <Title>{restaurantData.titulo}</Title>
      <Subtitle>{restaurantData.tipo}</Subtitle>
      <Cart />
      <CardContainer>
        {restaurantData.cardapio.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
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
