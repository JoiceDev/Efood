import styled from 'styled-components'

import img1 from '../../assets/images/fundoheader2.svg'

export const RestaurantsHeader = styled.header`
  height: 186px; /* Altura da primeira imagem */
  width: 1366px;
  width: 100%;
  background-image: url(${img1});
  background-repeat: no-repeat;
  background-position: top; /* A imagem fica no topo do header */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`

export const ImageHeader = styled.img`
  width: 100%; /* A imagem ocupa toda a largura */
  height: 280px; /* Altura da segunda imagem */
  object-fit: cover; /* Garante que a imagem preencha a área sem distorcer */
  margin-top: -20px;
  z-index: 0; /* Garante que a imagem fique abaixo do overlay */
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

export const Overlay = styled.div`
  position: absolute;
  margin-top: -20px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Overlay preto com 50% de opacidade */
  z-index: 1;
`
export const Title = styled.h2`
  position: absolute; /* Adiciona posicionamento absoluto */
  width: 676px;
  height: 33.25px;
  top: 376.75px; /* Distância do topo */
  left: 340px; /* Distância da esquerda */
  font-size: 32px;
  font-weight: 900; /* Corrigido para font-weight */
  color: #fff;
  z-index: 2;
`

export const Subtitle = styled.h3`
  position: absolute;
  width: 101px;
  height: 32px;
  top: 187px;
  left: 340px;
  z-index: 2;
  color: #fff;
  font-weight: 100;
  font-size: 32px;
`
export const Card = styled.div`
  width: 320px;
  height: 338px;
  background: #e66767;
  padding: 16px;
  display: flex;
  flex-direction: column;
`

// Imagem do card
export const CardImage = styled.img`
  width: 100%;
  max-width: 304px;
  height: 167px;
  object-fit: cover;
`

// Título
export const CardTitle = styled.h3`
  width: 124px;
  font-weight: 900;
  font-size: 16px;
  line-height: 18.75px;
  color: #fff;
  margin: 12px 0 8px 0;
  text-align: center;
`

// Descrição
export const CardDescription = styled.p`
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #ffebd9;
  margin: 0 0 12px 0;
`

// Botão de adicionar ao carrinho
export const AddToCartButton = styled.button`
  max-width: 304px;
  width: 100%;
  height: 24px;
  background-color: #ffebd9;
  color: #e66767;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  border: none;
  cursor: pointer;
`
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px; /* Espaço entre os cards */
  margin-top: 56px;
  margin-bottom: 80px;
  width: 100%;
`
