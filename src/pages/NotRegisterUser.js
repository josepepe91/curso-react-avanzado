import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'

export const NotRegisterUser = () => {
  return (
    <Context.Consumer>
      {({ isAuth, activateAuth }) => {
        return (
          <>
            <UserForm title='Registrarse' onSubmit={activateAuth} />
            <UserForm title='Iniciar Sesión' onSubmit={activateAuth} />
          </>
        )
      }}
    </Context.Consumer>
  )
}
