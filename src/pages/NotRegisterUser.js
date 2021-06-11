import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'

export const NotRegisterUser = () => {
  const { mutationRegister, mutationError, mutationLoading } =
    useRegisterMutation()

  return (
    <Context.Consumer>
      {({ isAuth, activateAuth }) => {
        const onSubmit = ({ email, password }) => {
          mutationRegister({ email, password })?.then(activateAuth)
        }

        const errorMessage =
          mutationError && 'El usuario ya existe o hay algún problema'
        return (
          <>
            <UserForm
              error={errorMessage}
              disabled={mutationLoading}
              title='Registrarse'
              onSubmit={onSubmit}
            />
            <UserForm title='Iniciar Sesión' onSubmit={onSubmit} />
          </>
        )
      }}
    </Context.Consumer>
  )
}
