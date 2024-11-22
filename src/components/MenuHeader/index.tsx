import { MenuHeader, TextHeader, Logo, TextCart } from './styles'
import logo from '../../assets/images/logo.svg'
import { Container } from '../../styles'

const MenuHeaderComponent = () => {
  return (
    <MenuHeader>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <TextHeader>Restaurantes</TextHeader>
        <Logo src={logo} alt="logo efood" />
        <TextCart>0 produto(s) no carrinho</TextCart>
      </Container>
    </MenuHeader>
  )
}

export default MenuHeaderComponent
