import React, { createContext, useState } from 'react'

export const Context = createContext({ isAuth: false })

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const value = {
    isAuth,
    activateAuth: (tokenValue) => {
      setIsAuth(true)
      window.sessionStorage.setItem('token', tokenValue)
    },
    removeAuth: () => {
      setIsAuth(false)
      window.sessionStorage.removeItem('token')
    }
  }
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default {
  Provider,
  Consumer: Context.Consumer
}
