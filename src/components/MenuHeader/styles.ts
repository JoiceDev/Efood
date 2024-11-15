import styled from 'styled-components'
import img1 from '../../assets/images/fundoheader2.svg'

export const MenuHeader = styled.header`
  height: 186px; /* Altura da primeira imagem */
  width: 1366px;
  width: 100%;
  background-image: url(${img1});
  background-size: auto 206px;
  background-repeat: no-repeat;
  background-position: top; /* A imagem fica no topo do header */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`
export const Logo = styled.img`
  width: 125px;
  height: 56px;
`
export const TextHeader = styled.p`
  color: #e66767;
  font-size: 18px;
  width: 109px;
  height: 21px;
  position: absolute;
  top: 59px;
  left: 340px;
  font-weigth: 900;
`

export const TextCart = styled(TextHeader)`
  left: 939px;
  white-space: nowrap;
`
