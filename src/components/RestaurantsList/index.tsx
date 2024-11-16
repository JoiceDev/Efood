import { useGetRestaurantsQuery } from '../../services/api' // Importando o hook do Redux API
import {
  Card,
  Description,
  Title,
  Image,
  CardContainer,
  Star,
  Avaliacao,
  InfoCard
} from './styles'

import Tag from '../Tag'
import { ButtonLink } from '../Button/styles'

const RestaurantsList = () => {
  // Usando o hook useGetRestaurantsQuery do Redux Toolkit
  const { data: foodType = [], error, isLoading } = useGetRestaurantsQuery()

  // Tratando o estado de carregamento e erro
  if (isLoading) return <p>Carregando...</p>
  if (error) return <p>Erro ao carregar restaurantes.</p>

  return (
    <CardContainer>
      {foodType.map((food) => (
        <Card key={food.id}>
          <Image src={food.capa} alt={food.titulo} />
          <div
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              display: 'flex'
            }}
          >
            {food.destacado && <Tag size="small">Destaque da semana</Tag>}
            <Tag size="small">{food.tipo}</Tag>
          </div>
          <InfoCard>
            <Title>{food.titulo}</Title>
            <Avaliacao>
              {food.avaliacao} <Star>★</Star>
            </Avaliacao>
          </InfoCard>
          <Description>{food.descricao}</Description>
          <ButtonLink to={`/food/${food.id}`} title="Clique para saber mais">
            Saiba mais
          </ButtonLink>
        </Card>
      ))}
    </CardContainer>
  )
}

export default RestaurantsList
