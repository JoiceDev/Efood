import { HeaderBar } from './styles'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderBar>
    <img src={logo} alt="logo efood" />
    <h1>
      Viva as experiências gastronômicas <br />
      no conforto da sua casa
    </h1>
  </HeaderBar>
)

export default Header
