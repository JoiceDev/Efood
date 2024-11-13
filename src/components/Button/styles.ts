import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  background-color: #e66767;
  border: none;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  display: inline-block;
  width: fit-content; /* Faz com que a tag ocupe apenas o conteúdo */
`

export const ButtonLink = styled(Link)`
  background-color: #e66767;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  padding: 4px 6px;
  margin-left: 8px;
  margin-bottom: 8px;
  margin-top: 16px;
  text-decoration: none;
  border: 1px;
  display: inline-block;
  width: fit-content; /* Faz com que a tag ocupe apenas o conteúdo */
`
