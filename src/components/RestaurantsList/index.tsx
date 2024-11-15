import { useState, useEffect } from 'react'
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
import { FoodType } from '../../types'

const RestaurantsList = () => {
  const [foodType, setFoodType] = useState<FoodType[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => {
        const foodTypes = res.map((item: any) => ({
          id: item.id,
          titulo: item.titulo,
          destacado: item.destacado,
          tipo: item.tipo,
          avaliacao: item.avaliacao,
          descricao: item.descricao,
          capa: item.capa,
          cardapio: item.cardapio.map((dish: any) => ({
            id: dish.id,
            nome: dish.nome,
            descricao: dish.descricao,
            preco: dish.preco,
            foto: dish.foto,
            porcao: dish.porcao
          }))
        }))
        setFoodType(foodTypes)
      })
  }, [])

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
