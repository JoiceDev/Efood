import { MenuHeader, TextHeader, Logo, TextCart } from './styles'
import logo from '../../assets/images/logo.svg'
import { Container } from '../../styles'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const MenuHeaderComponent = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

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
        <TextCart onClick={openCart}>
          {items.length} produto(s) no carrinho
        </TextCart>
      </Container>
    </MenuHeader>
  )
}

export default MenuHeaderComponent
