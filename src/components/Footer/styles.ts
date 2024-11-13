import styled from 'styled-components'

export const FooterContainer = styled.div`
  background-color: #ffebd9;
  max-width: 1360px;
  height: 298px;
  top: 1850px;
`

export const Logo = styled.img`
  max-widht: 128px;
  height: 56px;
  margin-left: 450px;
  margin-top: 40px;
`

export const SocialMediaContainer = styled.div`
  width: 88px;
  height: 24px;
  display: flex; /* Para alinhar os logos lado a lado */
  gap: 16px; /* Espaçamento entre os logos */
  margin-top: 32px;
  margin-left: 468px;
  margin-right: 640px;
  margin-bottom: 80px;

  .pointer {
    cursor: pointer;
  }
`

export const Text = styled.p`
  color: #e66767;
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  width: 480px;
  margin-left: 273px;
  margin-bottom: 40px;
`
