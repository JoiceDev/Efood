import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { Container, GlobalCss } from './styles'
import { rotas } from './pages/pages'
import store from './store'

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
