import {
  ImageHeader,
  RestaurantsHeader,
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
  ModalButton
} from './styles'

import logo from '../../assets/images/logo.svg'
import img2 from '../../assets/images/prato2.png'
import pizza from '../../assets/images/pizza.svg'
import pizza2 from '../../assets/images/pizza-modal.svg'
import close from '../../assets/images/close.svg'

const Restaurants = () => (
  <>
    <RestaurantsHeader>
      <TextHeader>Restaurantes</TextHeader>
      <Logo src={logo} alt="logo efood" />
      <TextCart>0 produto(s) no carrinho</TextCart>
    </RestaurantsHeader>
    <div style={{ position: 'relative' }}>
      <ImageHeader src={img2} alt="Imagem de comida" />
    </div>
    <Title>La Dolce Vita Trattoria</Title>
    <Subtitle>Italiana</Subtitle>
    <CardContainer>
      <Card>
        <CardImage src={pizza} alt="pizza" />
        <CardTitle>Pizza Marguerita</CardTitle>
        <CardDescription>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </CardDescription>
        <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
      </Card>
      <Card>
        <CardImage src={pizza} alt="pizza" />
        <CardTitle>Pizza Marguerita</CardTitle>
        <CardDescription>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </CardDescription>
        <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
      </Card>
      <Card>
        <CardImage src={pizza} alt="pizza" />
        <CardTitle>Pizza Marguerita</CardTitle>
        <CardDescription>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </CardDescription>
        <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
      </Card>
      <Card>
        <CardImage src={pizza} alt="pizza" />
        <CardTitle>Pizza Marguerita</CardTitle>
        <CardDescription>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </CardDescription>
        <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
      </Card>
      <Card>
        <CardImage src={pizza} alt="pizza" />
        <CardTitle>Pizza Marguerita</CardTitle>
        <CardDescription>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </CardDescription>
        <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
      </Card>
      <Card>
        <CardImage src={pizza} alt="pizza" />
        <CardTitle>Pizza Marguerita</CardTitle>
        <CardDescription>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </CardDescription>
        <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
      </Card>
    </CardContainer>
    <Modal>
      <div className="container">
        <div className="image-container">
          <img src={pizza2} alt="pizza marguerita" />
        </div>
        <div className="content-container">
          <div className="title-close">
            <ModalTitle>Pizza Marguerita</ModalTitle>
            <img src={close} className="pointer" alt="ícone de fechar" />
          </div>
          <ModalDescription>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião.
            <span>Serve: de 2 a 3 pessoas</span>
          </ModalDescription>
          <ModalButton>Adicionar ao carrinho - R$60,90</ModalButton>
        </div>
      </div>
      <div className="overlay"></div>
    </Modal>
  </>
)

export default Restaurants
