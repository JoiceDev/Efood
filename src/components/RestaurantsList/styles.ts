import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px;
  margin-top: 80px;
  margin-bottom: 120px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    max-width: 80%;
  }
`

export const Card = styled.div`
  background-color: #fff8f2;
  border: 1px solid #e66767;
  display: flex;
  flex-direction: column;
  width: 472px;
  min-height: 398px;
  position: relative;

  @media (max-width: ${breakpoints.desktop}) {
    align-items: center;
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 90%; /* Deixa o card ocupar 90% da largura disponível */
    padding: 16px; /* Adiciona espaçamento interno mais compacto *
    min-height: 300px; /
  }
`

export const HalfCard = styled.div`
  display: flex;
  flex-direction: column; /* Organiza o conteúdo verticalmente */
  justify-content: space-between; /* Garante que o botão fique na parte inferior */
  flex-grow: 1; /* Faz com que o conteúdo ocupe o espaço restante */
`

export const Title = styled.h3`
  font-weight: 700;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  white-space: nowrap;
`

export const Image = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
  position: relative;
`

export const Description = styled.p`
  color: #e66767;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  width: 456px,
  height: 88px;
  margin: 0 8px;
  margin-top: -8px;
`

export const InfoCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  line-height: 24px;
  margin: 0 0 16px 8px;
`

export const Avaliacao = styled.p`
  font-size: 18px;
  color: #e66767;
  font-weight: 700;
  position: relative;
  display: flex;
  align-items: center;
`

export const Star = styled.span`
  color: #ffb930;
  font-size: 24px;
  padding: 8px 8px 8px 8px;
  margin-right: 8px;
`
