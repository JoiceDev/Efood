import { MenuHeader, TextHeader, Logo, TextCart } from './styles'
import logo from '../../assets/images/logo.svg'

const MenuHeaderComponent = () => {
  return (
    <MenuHeader>
      <TextHeader>Restaurantes</TextHeader>
      <Logo src={logo} alt="logo efood" />
      <TextCart>0 produto(s) no carrinho</TextCart>
    </MenuHeader>
  )
}

export default MenuHeaderComponent
