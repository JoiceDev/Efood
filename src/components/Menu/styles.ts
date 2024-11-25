import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px; /* Espaço entre os cards */
  margin-top: 56px;
  margin-bottom: 80px;
  width: 100%;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    max-width: 80%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    max-width: 80%;
  }
`
