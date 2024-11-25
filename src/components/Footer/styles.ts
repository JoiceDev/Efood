import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const FooterContainer = styled.div`
  background-color: #ffebd9;
  max-width: 1360px;
  height: 298px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin: 0 auto;
`

export const Logo = styled.img`
  max-width: 128px;
  height: 56px;
  margin-top: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 25%;
    height: auto;
  }
`

export const SocialMediaContainer = styled.div`
  width: 88px;
  height: 24px;
  display: flex;
  gap: 16px;
  margin: 32px 0;
  cursor: pointer;
`

export const Text = styled.p`
  color: #e66767;
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  max-width: 480px;
  margin-bottom: 40px;
`
