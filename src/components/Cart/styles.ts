import styled from 'styled-components'
import { ButtonLink } from '../Button/styles'
import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 100;
`

export const SideBar = styled.aside`
  background-color: #e66767;
  z-index: 100;
  width: 360px;
  color: #fff;
  padding: 32px 8px 16px 8px;
`
export const Price = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  margin-top: 40px;
  margin-bottom: 16px;
  display: flex;

  span {
    margin-left: 216px;
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: #ffebd9;
  color: #e66767;
  width: 340px;
  margin: 16px 8px;
  position: relative;
  margin-right: 8px;



  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin: 8px 8px 12px 8px;
  }

    h3 {
      font-size: 18px;
      font-weight: 900;
      margin: 8px 108px 16px 0;
    }

    span {
      font-size: 14px;
    }

    button {
    background-image: url(${lixeira});
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
    border: none;
    cursor: pointer;
    position: absolute;
    bottom: 8px; /* Espaço em relação ao limite inferior */
    right: 8px; /* Espaço em relação ao limite direito */
    }
  }
`
export const ButtonCart = styled(ButtonLink)`
  background-color: #ffebd9;
  color: #e66767;
  text-align: center;
  width: 340px;
  height: 24px;
`
