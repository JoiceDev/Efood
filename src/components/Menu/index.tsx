import { useState, useEffect } from 'react'
import {
  ImageHeader,
  MenuHeader,
  Title,
  Subtitle,
  TextHeader,
  Logo,
  TextCart,
  Card,
  CardImage,
  CardTitle,
  CardDescription,
  AddToCartButton,
  CardContainer,
  Modal,
  ModalTitle,
  ModalDescription,
  ModalButton,
  Overlay
} from './styles'

import logo from '../../assets/images/logo.svg'
import img2 from '../../assets/images/prato2.png'
import pizza from '../../assets/images/pizza.svg'
import pizza2 from '../../assets/images/pizza-modal.svg'
import close from '../../assets/images/close.svg'
import { useParams } from 'react-router-dom'

export class Dish {
  id: number
  nome: string
  descricao: string
  preco: number
  foto: string
  porcao: string
  // static id: any

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

class FoodType {
  id: number
  titulo: string
  destacado: boolean | undefined
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  foto: string | undefined
  cardapio: Dish[]

  constructor(
    id: number,
    titulo: string,
    destacado: boolean | undefined,
    tipo: string,
    avaliacao: number,
    descricao: string,
    capa: string,
    foto: string,
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

const Menu = () => {
  const [dishes, setDishes] = useState<Dish[]>([]) // Estado para armazenar os pratos
  const [isModalOpen, setIsModalOpen] = useState(false) // Estado para controlar a exibição do modal
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null) // Estado para armazenar o prato selecionado no modal
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<FoodType | null>(null)

  const getDescription = (descricao: string) => {
    if (descricao.length > 132) {
      return descricao.slice(0, 129) + '...'
    }
    return descricao
  }

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const loadedRestaurant = new FoodType(
          data.id,
          data.titulo,
          data.destacado,
          data.tipo,
          data.avaliacao,
          data.descricao,
          data.capa,
          data.foto,
          data.cardapio || []
        )
        setRestaurant(loadedRestaurant)
        setDishes(data.cardapio || []) // Definindo os pratos apenas do restaurante selecionado
      })
      .catch((err) => {
        console.error('Erro ao carregar os dados:', err)
        setDishes([])
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
      <MenuHeader>
        <TextHeader>Restaurantes</TextHeader>
        <Logo src={logo} alt="logo efood" />
        <TextCart>0 produto(s) no carrinho</TextCart>
      </MenuHeader>
      <div style={{ position: 'relative' }}>
        <ImageHeader
          src={restaurant?.cardapio[0]?.foto}
          alt="Imagem de comida"
        />
        <Overlay />
      </div>
      <Title>{restaurant.titulo}</Title>
      <Subtitle>{restaurant.tipo}</Subtitle>
      <CardContainer>
        {dishes.map((dish) => (
          <Card key={dish.id}>
            <CardImage src={dish.foto || pizza} alt={dish.nome} />
            <CardTitle>{dish.nome}</CardTitle>
            <CardDescription>{getDescription(dish.descricao)}</CardDescription>
            <AddToCartButton onClick={() => openModal(dish)}>
              Adicionar ao carrinho
            </AddToCartButton>
          </Card>
        ))}
      </CardContainer>

      {/* Modal */}
      {selectedDish && (
        <Modal className={isModalOpen ? 'visible' : ''}>
          <div className="container">
            <div className="image-container">
              <img
                className="foodImg"
                src={selectedDish.foto || pizza2}
                alt={selectedDish.nome}
              />
            </div>
            <div className="content-container">
              <div className="title-close">
                <ModalTitle>{selectedDish.nome}</ModalTitle>
                <img
                  src={close}
                  className="pointer"
                  alt="ícone de fechar"
                  onClick={() => setIsModalOpen(false)}
                />
              </div>
              <ModalDescription>
                {selectedDish.descricao}
                <span>Serve: {selectedDish.porcao}</span>
              </ModalDescription>
              <ModalButton>
                Adicionar ao carrinho - R${selectedDish.preco.toFixed(2)}
              </ModalButton>
            </div>
          </div>
          <div className="overlay" onClick={() => setIsModalOpen(false)}></div>
        </Modal>
      )}
    </>
  )
}

export default Menu
