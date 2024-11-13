import {
  ImageHeader,
  RestaurantsHeader,
  Overlay,
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
  CardContainer
} from './styles'

import logo from '../../assets/images/logo.svg'
import img2 from '../../assets/images/prato2.png'
import pizza from '../../assets/images/pizza.svg'
import Footer from '../Footer'

const Restaurants = () => (
  <>
    <RestaurantsHeader>
      <TextHeader>Restaurantes</TextHeader>
      <Logo src={logo} alt="logo efood" />
      <TextCart>0 produto(s) no carrinho</TextCart>
    </RestaurantsHeader>
    <div style={{ position: 'relative' }}>
      <ImageHeader src={img2} alt="Imagem de comida" />
      <Overlay />
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
  </>
)

export default Restaurants
