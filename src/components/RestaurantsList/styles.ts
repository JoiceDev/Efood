import styled from 'styled-components'

export const CardContainer = styled.div`
  display: grid; /* Define que será um grid */
  grid-template-columns: repeat(2, 1fr); /* 2 colunas de largura igual */
  gap: 80px; /* Espaço entre os cards */
  margin-top: 80px;
  margin-bottom: 120px;
`

export const Card = styled.div`
  position: relative;
  background-color: #fff8f2;
  border: 1px solid #e66767;
  display: flex;
  flex-direction: column;
  max-width: 480px;
`

export const Title = styled.h3`
  font-weight: 700;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  margin-left: 16px;
  white-space: nowrap; /* Impede a quebra de linha */
`

export const Image = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const Description = styled.p`
  color: #e66767;
  font-size: 14px;
  line-height: 24px;
  padding: 8px;
`
export const InfoCard = styled.div`
  display: flex; /* Usando flexbox para alinhar tudo na horizontal */
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 8px;
`
export const Avaliacao = styled.p`
  font-size: 18px; /* Tamanho da fonte da avaliação */
  color: #e66767; /* Cor da avaliação */
  font-weight: 700;
  position: relative;
`

export const Star = styled.span`
  color: #ffb930;
  font-size: 24px; /* Tamanho da estrela */
  margin: 8px 8px;
`
