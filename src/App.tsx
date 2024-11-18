import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalCss, Container } from './styles'

import Menu from './components/Menu'
import Home from './pages/Home'
import store from './store'
import Cart from './components/Cart'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home /> // Home page
  },
  {
    path: '/food/:id', // Rota dinâmica para um restaurante específico
    element: <Menu /> // Exibe os detalhes do restaurante
  }
])

function App() {
  return (
    <Provider store={store}>
      <>
        <GlobalCss />
        <Container>
          <RouterProvider router={rotas} />
        </Container>
      </>
    </Provider>
  )
}

export default App
