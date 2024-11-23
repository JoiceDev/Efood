import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import {
  Overlay,
  CartContainer,
  SideBar,
  Price,
  CartItem,
  ButtonCart
} from './styles'
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  // Calcular o preço total
  const totalPrice = items.reduce((total, item) => total + item.preco, 0)

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>R$ {item.preco.toFixed(2)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Price>
          Valor total <span>R$ {totalPrice.toFixed(2)}</span>
        </Price>
        <ButtonCart to="/delivery">Continuar com a entrega</ButtonCart>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
