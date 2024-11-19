import Footer from '../../components/Footer'
import Header from '../../components/HomeHeader'
import RestaurantsList from '../../components/RestaurantsList'
import { Container } from '../../styles'

const Home = () => (
  <>
    <Header />
    <Container>
      <RestaurantsList />
    </Container>
    <Footer />
  </>
)

export default Home
