import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalCss, Container } from './styles'

import Menu from './components/Menu'
import Home from './pages/Home'
import RestaurantsList from './components/RestaurantsList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/food',
    element: <RestaurantsList />
  },
  {
    path: '/food/:id', // Rota dinâmica para um restaurante específico
    element: <Menu /> // Componente que exibe os detalhes do restaurante
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </>
  )
}

export default App
