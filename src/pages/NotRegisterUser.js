import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'

export const NotRegisterUser = () => {
  const { mutationRegister } = useRegisterMutation()

  return (
    <Context.Consumer>
      {({ isAuth, activateAuth }) => {
        const onSubmit = ({ email, password }) => {
          mutationRegister({ email, password }).then(activateAuth)
        }
        return (
          <>
            <UserForm title='Registrarse' onSubmit={onSubmit} />
            <UserForm title='Iniciar Sesión' onSubmit={onSubmit} />
          </>
        )
      }}
    </Context.Consumer>
  )
}
