import styled from 'styled-components'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: #e66767;
  color: #fff;
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: 700;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  display: inline-flex; /* Garantindo que o display não cause quebra inesperada */
  width: fit-content; /* Faz com que a tag ocupe apenas o conteúdo */
  margin-right: 8px; /* Espaçamento entre as tags */
`
