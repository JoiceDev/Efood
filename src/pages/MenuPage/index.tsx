import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import MenuBanner from '../../components/MenuBanner'
import MenuHeader from '../../components/MenuHeader'
import { Container } from '../../styles'
import { useGetRestaurantsQuery } from '../../services/api'
import { useParams } from 'react-router-dom'

const MenuPage = () => {
  const { id } = useParams<{ id: string }>()

  const { data: menu, isLoading, isError } = useGetRestaurantsQuery(undefined)

  if (isLoading) return <p>Carregando...</p>
  if (isError || !menu) return <p>Erro ao carregar restaurante.</p>

  const menuData = menu.find((r) => r.id === Number(id))

  if (!menuData || !menuData.cardapio || menuData.cardapio.length === 0) {
    return <p>Restaurante ou cardápio não encontrado.</p>
  }

  const firstDish = menuData.cardapio[0]

  return (
    <>
      <MenuHeader />
      <MenuBanner
        imageUrl={firstDish?.foto || ''}
        titulo={menuData.titulo}
        tipo={menuData.tipo}
      />
      <Container>
        <Menu />
      </Container>
      <Footer />
    </>
  )
}

export default MenuPage
