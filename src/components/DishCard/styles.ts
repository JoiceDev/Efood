import styled from 'styled-components'

export const Card = styled.div`
  width: 320px;
  height: 338px;
  background: #e66767;
  padding: 16px;
  display: flex;
  flex-direction: column;
`
export const CardImage = styled.img`
  width: 100%;
  max-width: 304px;
  height: 167px;
  object-fit: cover;
`

export const CardTitle = styled.h3`
  width: 124px;
  font-weight: 900;
  font-size: 16px;
  line-height: 18.75px;
  color: #fff;
  margin: 12px 0 8px 0;
  text-align: center;
  white-space: nowrap;
`

export const CardDescription = styled.p`
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #ffebd9;
  margin: 0 0 12px 0;
`

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
