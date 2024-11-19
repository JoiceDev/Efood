import { useGetRestaurantsQuery } from '../../services/api'
import {
  Card,
  Description,
  Title,
  Image,
  CardContainer,
  Star,
  Avaliacao,
  InfoCard,
  HalfCard
} from './styles'

import Tag from '../Tag'
import { ButtonLink } from '../Button/styles'

const RestaurantsList = () => {
  const { data: foodType = [] } = useGetRestaurantsQuery()

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
          <HalfCard>
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
          </HalfCard>
        </Card>
      ))}
    </CardContainer>
  )
}

export default RestaurantsList
