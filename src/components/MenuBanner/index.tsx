import { Container } from '../../styles'
import Cart from '../Cart'
import { ImageHeader, Overlay, Title, Subtitle } from './styles'

interface MenuBannerProps {
  imageUrl: string
  titulo: string
  tipo: string
}

const MenuBanner = ({ imageUrl, titulo, tipo }: MenuBannerProps) => {
  return (
    <div style={{ position: 'relative' }}>
      <ImageHeader src={imageUrl} alt={`Imagem do restaurante ${titulo}`} />
      <Overlay />
      <Container style={{ position: 'relative' }}>
        <Title>{titulo}</Title>
        <Subtitle>{tipo}</Subtitle>
      </Container>
      <Cart />
    </div>
  )
}

export default MenuBanner
