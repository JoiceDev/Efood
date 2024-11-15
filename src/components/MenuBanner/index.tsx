import { ImageHeader, Overlay } from './styles'

interface MenuBannerProps {
  imageUrl: string
}

const MenuBanner = ({ imageUrl }: MenuBannerProps) => {
  return (
    <div style={{ position: 'relative' }}>
      <ImageHeader src={imageUrl} alt="Imagem do restaurante" />
      <Overlay />
    </div>
  )
}

export default MenuBanner
