import logo from '../../assets/images/logo.svg'
import fb from '../../assets/images/fb.svg'
import insta from '../../assets/images/insta.svg'
import tt from '../../assets/images/tt.svg'
import { FooterContainer, Logo, SocialMediaContainer, Text } from './styles'

const Footer = () => (
  <FooterContainer>
    <Logo src={logo} alt="logo efood" />
    <SocialMediaContainer>
      <img src={fb} alt="logo facebook" className="pointer" />
      <img src={insta} alt="logo instagram" className="pointer" />
      <img src={tt} alt="logo twitter" className="pointer" />
    </SocialMediaContainer>
    <Text>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Text>
  </FooterContainer>
)

export default Footer
