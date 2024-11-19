import styled from 'styled-components'
import img1 from '../../assets/images/fundoheader2.svg'

export const MenuHeader = styled.header`
  height: 186px;
  width: 100%;
  background-image: url(${img1});
  background-size: auto 206px;
  background-repeat: no-repeat;
  background-position: top;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #e66767;
  padding: 0 20px;
  position: relative; /* Garante que o z-index seja aplicado */
  z-index: 5; /* Maior que o banner */
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  object-fit: contain;
`

export const TextHeader = styled.p`
  color: #e66767;
  font-size: 18px;
  font-weight: 900;
  white-space: nowrap;
  margin: 0;
`

export const TextCart = styled(TextHeader)`
  margin-right: 0;
  cursor: pointer;
`
