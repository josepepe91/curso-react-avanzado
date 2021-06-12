import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'
import { useLoginMutation } from '../hooks/useLoginMutation'

export const NotRegisterUser = () => {
  const {
    mutationRegister,
    mutationError: errorRegistry,
    mutationLoading: loadingRegistry
  } = useRegisterMutation()
  const {
    mutationLogin,
    mutationError: errorLogin,
    mutationLoading: loadingLogin
  } = useLoginMutation()

  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        const onSubmitRegister = ({ email, password }) => {
          mutationRegister({ email, password }).then((data) => {
            activateAuth()
          })
        }

        const onSubmitLogin = ({ email, password }) => {
          mutationLogin({ email, password }).then(() => {
            activateAuth()
          })
        }

        const errorMessageRegistry =
          errorRegistry && 'El usuario ya existe o hay algún problema'

        const errorMessageLogin =
          errorLogin && 'La contraseña no es correcta o el usuario no existe'
        return (
          <>
            <UserForm
              error={errorMessageRegistry}
              disabled={loadingRegistry}
              title='Registrarse'
              onSubmit={onSubmitRegister}
            />
            <UserForm
              error={errorMessageLogin}
              disabled={loadingLogin}
              title='Iniciar Sesión'
              onSubmit={onSubmitLogin}
            />
          </>
        )
      }}
    </Context.Consumer>
  )
}
