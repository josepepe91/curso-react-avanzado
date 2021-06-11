import React from 'react'
import Context from "../Context";

export const NotRegisterUser = () => {
  return (
    <Context.Consumer>
      {
        ({isAuth, activateAuth}) => {
          return (
            <form onSubmit={activateAuth}>
              <button>Iniciar Sesión</button>
            </form>
          )
        }
      }
    </Context.Consumer>
  )
}
