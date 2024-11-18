import {
  Overlay,
  CartContainer,
  SideBar,
  Price,
  CartItem,
  ButtonCart
} from './styles'

import pizza from '../../assets/images/pizza.svg'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <SideBar>
      <ul>
        <CartItem>
          <img src={pizza} />
          <div>
            <h3>Pizza de calabresa</h3>
            <span>R$ 60,90</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={pizza} />
          <div>
            <h3>Pizza</h3>
            <span>R$ 60,90</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={pizza} />
          <div>
            <h3>Pizza</h3>
            <span>R$ 60,90</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <Price>
        Valor total <span>R$ 182,00</span>
      </Price>
      <ButtonCart to="/delivery" title="Ir para a entrega" type="button">
        Continuar com a entrega
      </ButtonCart>
    </SideBar>
  </CartContainer>
)

export default Cart
