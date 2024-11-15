import styled from 'styled-components'

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

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px; /* Espaço entre os cards */
  margin-top: 56px;
  margin-bottom: 80px;
  width: 100%;
`
