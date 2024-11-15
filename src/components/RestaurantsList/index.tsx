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

export class FoodType {
  id: number
  titulo: string
  destacado: boolean | undefined
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Dish[]

  constructor(
    id: number,
    titulo: string,
    destacado: boolean | undefined,
    tipo: string,
    avaliacao: number,
    descricao: string,
    capa: string,
    cardapio: Dish[]
  ) {
    this.id = id
    this.titulo = titulo
    this.destacado = destacado
    this.tipo = tipo
    this.avaliacao = avaliacao
    this.descricao = descricao
    this.capa = capa
    this.cardapio = cardapio
  }
}

export class Dish {
  id: number
  nome: string
  descricao: string
  preco: number
  foto: string
  porcao: string
  static id: any

  constructor(
    id: number,
    nome: string,
    descricao: string,
    preco: number,
    foto: string,
    porcao: string
  ) {
    this.id = id
    this.nome = nome
    this.descricao = descricao
    this.preco = preco
    this.foto = foto
    this.porcao = porcao
  }
}

const RestaurantsList = () => {
  const [foodType, setFoodType] = useState<FoodType[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => {
        const foodTypes = res.map(
          (item: any) =>
            new FoodType(
              item.id,
              item.titulo,
              item.destacado,
              item.tipo,
              item.avaliacao,
              item.descricao,
              item.capa,
              item.cardapio.map(
                (dish: any) =>
                  new Dish(
                    dish.id,
                    dish.nome,
                    dish.descricao,
                    dish.preco,
                    dish.foto,
                    dish.porcao
                  )
              )
            )
        )
        setFoodType(foodTypes)
      })
      .catch((err) => console.error('Erro ao carregar os dados:', err))
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
