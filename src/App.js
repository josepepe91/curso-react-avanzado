import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Router } from '@reach/router'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { NavBar } from './components/NavBar'
import Context from './Context'

export const App = () => {
  return (
    <div>
      {/* GlobalStyle se agrega para que se apliquen los estilos globales */}
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
      </Router>
      <Context.Consumer>
        {
        ({ isAuth }) =>
          isAuth
            ? <Router>
              <Favs path='/favs' />
              <User path='/user' />
            </Router>
            : <Router>
              <NotRegisterUser path='/favs' />
              <NotRegisterUser path='/user' />
              </Router>
      }
      </Context.Consumer>
      <NavBar />
    </div>
  )
}
